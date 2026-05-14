export { cleanupExpiredDocs } from "./cleanup.js";
import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import { initializeApp, getApps } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { GoogleGenAI, Type } from "@google/genai";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { z } from "zod";
import sanitizeHtml from "sanitize-html";
import express from "express";
import cors from "cors";

// ─── Firebase Admin init (idempotent across cold starts) ───────────────────
if (!getApps().length) initializeApp();
const db = getFirestore();

// ─── Secret references (set via: firebase functions:secrets:set JWT_SECRET) ─
const JWT_SECRET_REF        = defineSecret("JWT_SECRET");
const JWT_REFRESH_SECRET_REF = defineSecret("JWT_REFRESH_SECRET");
const GEMINI_API_KEY_REF    = defineSecret("GEMINI_API_KEY");

// ─── Allowed origins ────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  "https://mypwa.com",
  "https://mypwa.web.app",
  "https://mypwa.firebaseapp.com",
  "https://carrerdisha-29914.web.app",
  "https://carrerdisha-29914.firebaseapp.com",
  "http://localhost:5173",
  "http://localhost:3000",
];

// ─── Sanitisation helpers ───────────────────────────────────────────────────
const sanitizeString = (str) =>
  sanitizeHtml(str, { allowedTags: [], allowedAttributes: {} });

const sanitizeObject = (obj) => {
  if (typeof obj === "string") return sanitizeString(obj);
  if (Array.isArray(obj))      return obj.map(sanitizeObject);
  if (obj !== null && typeof obj === "object") {
    const out = {};
    for (const key of Object.keys(obj)) out[key] = sanitizeObject(obj[key]);
    return out;
  }
  return obj;
};

// ─── Zod schemas ────────────────────────────────────────────────────────────
const authSchema = z.object({
  username: z.string().min(3).max(50).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).max(100).optional(),
  googleId: z.string().optional(),
  // role intentionally omitted — never trust the client for roles
});

const generateContentSchema = z.object({
  prompt:            z.string().min(1).max(10000),
  schema:            z.record(z.any()).optional(),   // bounded object, not z.any()
  systemInstruction: z.string().max(5000).optional(),
  context:           z.record(z.any()).optional(),   // bounded object, not z.any()
  threadId:          z.string().optional(),
});

const recommendCollegesSchema = z.object({
  stream:        z.string().max(100).optional(),
  class10Score:  z.string().max(50).optional(),
  class12Score:  z.string().max(50).optional(),
  entranceExams: z.string().max(500).optional(),
  state:         z.string().max(100).optional(),
  category:      z.string().max(50).optional(),
  courseChosen:  z.string().min(1).max(200),
  budget:        z.string().max(100).optional(),
  contextData:   z.string().max(500).optional(),
  wantTop30India:  z.boolean().optional(),
  wantTop10City:   z.boolean().optional(),
  wantTop50Abroad: z.boolean().optional(),
  city:          z.string().max(100).optional(),
  isPremium:     z.boolean().optional(),
});

const examTrackerSchema = z.object({
  name:                   z.string().max(100).optional(),
  classLevel:             z.string().max(50).optional(),
  stream:                 z.string().max(100).optional(),
  state:                  z.string().max(100).optional(),
  district:               z.string().max(100).optional(),
  category:               z.string().max(50).optional(),
  gender:                 z.string().max(50).optional(),
  score10:                z.string().max(50).optional(),
  score12OrCurrent:       z.string().max(50).optional(),
  annualFamilyIncome:     z.string().max(100).optional(),
  entranceExamsAppeared:  z.array(z.string().max(200)).max(20).optional(),
  interestedCareers:      z.array(z.string().max(200)).max(20).optional(),
  hasNCC:                 z.boolean().optional(),
  isPhysicallyFit:        z.boolean().optional(),
  isPremium:              z.boolean().optional(),
});

const lifePathsSchema = z.object({
  storyText:       z.string().min(20).max(2000),
  name:            z.string().max(100).optional(),
  city:            z.string().max(100).optional(),
  classLevel:      z.string().max(50).optional(),
  stream:          z.string().max(100).optional(),
  score12OrCurrent:z.union([z.string(), z.number()]).optional(),
  score10:         z.union([z.string(), z.number()]).optional(),
  interests:       z.array(z.string().max(100)).max(20).optional(),
  primaryGoal:     z.string().max(100).optional(),
  isPremium:       z.boolean().optional(),
});

const dreamCostSchema = z.object({
  career: z.string().min(2).max(200),
});

// ─── Validation + sanitisation middleware ───────────────────────────────────
const validateAndSanitize = (schema) => (req, res, next) => {
  try {
    const validated = schema.parse(req.body);
    req.body = sanitizeObject(validated);
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        error: "Input validation failed",
        details: err.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
      });
    }
    return res.status(400).json({ error: "Invalid request payload" });
  }
};

// ─── Rate limiting via Firestore ─────────────────────────────────────────────
// Uses a sliding-window counter stored in Firestore.
// Collection: rateLimits/{key}/windows/{windowId}
const rateLimitFirestore = (options) => {
  const { windowMs, max, keyPrefix, message } = options;
  return async (req, res, next) => {
    // Derive key: prefer user ID from token (set by optionalAuthenticateToken), else IP
    const userId = req.user?.id || req.user?.username;
    const ip = req.headers["x-forwarded-for"]?.split(",")[0].trim()
              || req.ip
              || "unknown";
    const rawKey = userId ? `user:${userId}` : `ip:${ip}`;
    const key    = `${keyPrefix}:${rawKey}`;

    const now      = Date.now();
    const windowId = Math.floor(now / windowMs);
    const docRef   = db.collection("rateLimits").doc(`${key}:${windowId}`);

    try {
      const result = await db.runTransaction(async (tx) => {
        const snap = await tx.get(docRef);
        const count = snap.exists ? (snap.data().count || 0) : 0;
        if (count >= max) return { allowed: false, count };
        tx.set(docRef, {
          count:     FieldValue.increment(1),
          expiresAt: new Date(now + windowMs * 2), // keep for 2 windows then GC
        }, { merge: true });
        return { allowed: true, count: count + 1 };
      });

      res.setHeader("X-RateLimit-Limit",     max);
      res.setHeader("X-RateLimit-Remaining", Math.max(0, max - result.count));

      if (!result.allowed) {
        return res.status(429).json({ error: message });
      }
      next();
    } catch (err) {
      // Fail open on Firestore errors (log but don't block legitimate traffic)
      console.error("Rate limit Firestore error:", err.message);
      next();
    }
  };
};

const globalLimiter = rateLimitFirestore({
  windowMs:  15 * 60 * 1000,
  max:       100,
  keyPrefix: "global",
  message:   "Too Many Requests. Global limit of 100 requests per 15 minutes exceeded.",
});

const authLimiter = rateLimitFirestore({
  windowMs:  15 * 60 * 1000,
  max:       5,
  keyPrefix: "auth",
  message:   "Too Many Requests. Auth limit of 5 requests per 15 minutes exceeded.",
});

// ─── JWT helpers (secrets resolved at request time from Cloud Secret Manager) ─
const getSecrets = (req) => ({
  jwtSecret:        req.jwtSecret        || process.env.JWT_SECRET,
  jwtRefreshSecret: req.jwtRefreshSecret || process.env.JWT_REFRESH_SECRET,
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access token missing or invalid format" });
  }
  const token = authHeader.split(" ")[1];
  const { jwtSecret } = getSecrets(req);
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Access token expired or tampered with" });
    req.user = decoded;
    next();
  });
};

const optionalAuthenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    const { jwtSecret } = getSecrets(req);
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (!err && decoded) req.user = decoded;
      next();
    });
  } else {
    next();
  }
};

const requireRole = (allowedRoles) => (req, res, next) => {
  if (!req.user?.role || !allowedRoles.includes(req.user.role)) {
    return res.status(403).json({ error: "Forbidden: Insufficient permissions." });
  }
  next();
};

// ─── Refresh token helpers (Firestore-backed — survives cold starts) ─────────
const REFRESH_TOKENS_COLLECTION = "invalidatedRefreshTokens";

const isTokenInvalidated = async (token) => {
  const snap = await db.collection(REFRESH_TOKENS_COLLECTION).doc(
    Buffer.from(token).toString("base64url").slice(0, 500) // safe doc ID
  ).get();
  return snap.exists;
};

const invalidateToken = async (token) => {
  const docId = Buffer.from(token).toString("base64url").slice(0, 500);
  // Store with TTL field so a Cloud Scheduler cleanup job can purge old docs
  await db.collection(REFRESH_TOKENS_COLLECTION).doc(docId).set({
    invalidatedAt: FieldValue.serverTimestamp(),
    expiresAt:     new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
};

// ─── Build the Express app ───────────────────────────────────────────────────
function buildApp(secrets) {
  const app = express();

  // Inject secrets onto req so downstream middleware can access them
  app.use((req, _res, next) => {
    req.jwtSecret        = secrets.jwtSecret;
    req.jwtRefreshSecret = secrets.jwtRefreshSecret;
    req.geminiApiKey     = secrets.geminiApiKey;
    next();
  });

  // ── Security headers ──────────────────────────────────────────────────────
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options",    "nosniff");
    res.setHeader("X-Frame-Options",           "DENY");
    res.setHeader("X-XSS-Protection",          "1; mode=block");
    res.setHeader("Referrer-Policy",           "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy",        "geolocation=(), microphone=(), camera=()");
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    res.setHeader(
      "Content-Security-Policy",
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com https://www.googletagmanager.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https: http:",
        "connect-src 'self' https: wss:",
        "object-src 'none'",
        "upgrade-insecure-requests",
      ].join("; ")
    );
    next();
  });

  // ── CORS ──────────────────────────────────────────────────────────────────
  app.use(
    cors({
      origin: true,
      credentials:      true,
      allowedHeaders:   ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
      methods:          ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
  );

  app.use(express.json({ limit: "50kb" }));
  app.use(cookieParser());

  // ── Populate req.user early so rate limiter can key by user ID ────────────
  app.use(optionalAuthenticateToken);

  // ── Auth routes (strict rate limit) ──────────────────────────────────────
  app.post(
    ["/api/auth/login", "/login"],
    authLimiter,
    validateAndSanitize(authSchema),
    async (req, res) => {
      const emailOrUser = req.body.email || req.body.username;
      const { password, googleId } = req.body;
      if (!emailOrUser) {
        return res.status(400).json({ error: "Email or username required" });
      }

      const userDocRef = db.collection("users").doc(emailOrUser);
      const userDoc = await userDocRef.get();

      const defaultPreferences = {
        theme: "dark",
        notificationsEnabled: true,
        customSettings: { language: "en", compactView: false },
      };

      let userData;
      if (!userDoc.exists) {
        userData = {
          uuid: emailOrUser,
          email: emailOrUser,
          passwordHash: password ? password : null,
          googleId: googleId || null,
          role: "user",
          authMethods: googleId ? ["google"] : ["email"],
          preferences: defaultPreferences,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        await userDocRef.set(userData);
      } else {
        userData = userDoc.data();
        let updated = false;
        if (googleId && !userData.googleId) {
          userData.googleId = googleId;
          if (!userData.authMethods) userData.authMethods = ["email"];
          if (!userData.authMethods.includes("google")) userData.authMethods.push("google");
          updated = true;
        }
        if (!userData.preferences) {
          userData.preferences = defaultPreferences;
          updated = true;
        }
        if (updated) {
          userData.updatedAt = new Date().toISOString();
          await userDocRef.set(userData, { merge: true });
        }
      }

      const role = userData.role || "user";
      const payload = { id: emailOrUser, username: emailOrUser, email: emailOrUser, role };
      const accessToken  = jwt.sign(payload, req.jwtSecret,        { expiresIn: "15m" });
      const refreshToken = jwt.sign(payload, req.jwtRefreshSecret, { expiresIn: "7d"  });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure:   true,        // always secure on Firebase (HTTPS only)
        sameSite: "strict",
        maxAge:   7 * 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken, preferences: userData.preferences });
    }
  );

  app.post(
    ["/api/auth/register", "/register"],
    authLimiter,
    validateAndSanitize(authSchema),
    async (req, res) => {
      const emailOrUser = req.body.email || req.body.username;
      const { password, googleId } = req.body;
      if (!emailOrUser) {
        return res.status(400).json({ error: "Email or username required" });
      }

      const userDocRef = db.collection("users").doc(emailOrUser);
      const userDoc = await userDocRef.get();

      const defaultPreferences = {
        theme: "dark",
        notificationsEnabled: true,
        customSettings: { language: "en", compactView: false },
      };

      let userData;
      if (!userDoc.exists) {
        userData = {
          uuid: emailOrUser,
          email: emailOrUser,
          passwordHash: password ? password : null,
          googleId: googleId || null,
          role: "user",
          authMethods: googleId ? ["google"] : ["email"],
          preferences: defaultPreferences,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        await userDocRef.set(userData);
      } else {
        userData = userDoc.data();
        let updated = false;
        if (googleId && !userData.googleId) {
          userData.googleId = googleId;
          if (!userData.authMethods) userData.authMethods = ["email"];
          if (!userData.authMethods.includes("google")) userData.authMethods.push("google");
          updated = true;
        }
        if (!userData.preferences) {
          userData.preferences = defaultPreferences;
          updated = true;
        }
        if (updated) {
          userData.updatedAt = new Date().toISOString();
          await userDocRef.set(userData, { merge: true });
        }
      }

      const role = userData.role || "user";
      const payload = { id: emailOrUser, username: emailOrUser, email: emailOrUser, role };
      const accessToken  = jwt.sign(payload, req.jwtSecret,        { expiresIn: "15m" });
      const refreshToken = jwt.sign(payload, req.jwtRefreshSecret, { expiresIn: "7d"  });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure:   true,
        sameSite: "strict",
        maxAge:   7 * 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken, preferences: userData.preferences, message: "Registered successfully" });
    }
  );

  app.post(
    ["/api/auth/google", "/google"],
    authLimiter,
    validateAndSanitize(authSchema),
    async (req, res) => {
      const emailOrUser = req.body.email || req.body.username;
      const { googleId } = req.body;
      if (!emailOrUser) {
        return res.status(400).json({ error: "Email required" });
      }

      const userDocRef = db.collection("users").doc(emailOrUser);
      const userDoc = await userDocRef.get();

      const defaultPreferences = {
        theme: "dark",
        notificationsEnabled: true,
        customSettings: { language: "en", compactView: false },
      };

      let userData;
      if (!userDoc.exists) {
        userData = {
          uuid: emailOrUser,
          email: emailOrUser,
          passwordHash: null,
          googleId: googleId || emailOrUser,
          role: "user",
          authMethods: ["google"],
          preferences: defaultPreferences,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        await userDocRef.set(userData);
      } else {
        userData = userDoc.data();
        let updated = false;
        if (!userData.googleId) {
          userData.googleId = googleId || emailOrUser;
          if (!userData.authMethods) userData.authMethods = ["email"];
          if (!userData.authMethods.includes("google")) userData.authMethods.push("google");
          updated = true;
        }
        if (!userData.preferences) {
          userData.preferences = defaultPreferences;
          updated = true;
        }
        if (updated) {
          userData.updatedAt = new Date().toISOString();
          await userDocRef.set(userData, { merge: true });
        }
      }

      const role = userData.role || "user";
      const payload = { id: emailOrUser, username: emailOrUser, email: emailOrUser, role };
      const accessToken  = jwt.sign(payload, req.jwtSecret,        { expiresIn: "15m" });
      const refreshToken = jwt.sign(payload, req.jwtRefreshSecret, { expiresIn: "7d"  });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure:   true,
        sameSite: "strict",
        maxAge:   7 * 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken, preferences: userData.preferences });
    }
  );

  app.post("/api/auth/refresh", async (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ error: "Refresh token missing" });

    // Check Firestore-backed invalidation list (survives cold starts / restarts)
    if (await isTokenInvalidated(token)) {
      res.clearCookie("refreshToken", { httpOnly: true, secure: true, sameSite: "strict" });
      return res.status(401).json({ error: "Refresh token reuse detected. Replay attack prevented." });
    }

    jwt.verify(token, req.jwtRefreshSecret, async (err, decoded) => {
      if (err) return res.status(401).json({ error: "Refresh token expired or tampered with" });

      // Rotate: invalidate old token, issue new pair
      await invalidateToken(token);

      const payload      = { id: decoded.id || decoded.username, username: decoded.username, role: decoded.role || "user" };
      const newAccess    = jwt.sign(payload, req.jwtSecret,        { expiresIn: "15m" });
      const newRefresh   = jwt.sign(payload, req.jwtRefreshSecret, { expiresIn: "7d"  });

      res.cookie("refreshToken", newRefresh, {
        httpOnly: true,
        secure:   true,
        sameSite: "strict",
        maxAge:   7 * 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken: newAccess });
    });
  });

  app.post("/api/auth/logout", async (req, res) => {
    const token = req.cookies.refreshToken;
    if (token) await invalidateToken(token);
    res.clearCookie("refreshToken", { httpOnly: true, secure: true, sameSite: "strict" });
    res.json({ message: "Logged out successfully" });
  });

  // ── User preferences sync routes ──────────────────────────────────────────
  app.get("/api/user/preferences", authenticateToken, async (req, res) => {
    const userDocRef = db.collection("users").doc(req.user.id || req.user.username || req.user.email);
    const userDoc = await userDocRef.get();
    if (!userDoc.exists) return res.status(404).json({ error: "User not found" });
    res.json({ preferences: userDoc.data().preferences || {} });
  });

  app.patch("/api/user/preferences", authenticateToken, async (req, res) => {
    const userDocRef = db.collection("users").doc(req.user.id || req.user.username || req.user.email);
    const userDoc = await userDocRef.get();
    if (!userDoc.exists) return res.status(404).json({ error: "User not found" });

    const currentData = userDoc.data();
    const updatedPreferences = {
      ...(currentData.preferences || {}),
      ...req.body
    };

    await userDocRef.set({
      preferences: updatedPreferences,
      updatedAt: new Date().toISOString()
    }, { merge: true });

    res.json({ preferences: updatedPreferences });
  });

  // ── Protected routes ──────────────────────────────────────────────────────
  app.get("/api/protected/profile", authenticateToken, (req, res) => {
    res.json({ message: "Welcome to the protected profile route!", user: req.user });
  });

  app.get("/api/admin/dashboard", authenticateToken, requireRole(["admin"]), (req, res) => {
    res.json({ message: "Welcome Admin. System metrics are normal." });
  });

  app.post("/api/moderator/flag-content", authenticateToken, requireRole(["admin", "moderator"]), (req, res) => {
    res.json({ message: "Content flagged successfully." });
  });

  // IDOR-protected order route
  app.get("/api/orders/:id", authenticateToken, async (req, res) => {
    const snap = await db.collection("orders").doc(req.params.id).get();
    if (!snap.exists) return res.status(404).json({ error: "Order not found" });

    const order = snap.data();
    if (order.userId !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: Access denied." });
    }
    res.json({ order });
  });

  // ── AI routes (global rate limit) ─────────────────────────────────────────
  // ── AI Chat persistence threads routes ────────────────────────────────────
  app.post("/api/threads", authenticateToken, async (req, res) => {
    const userId = req.user.id || req.user.username || req.user.email;
    const threadId = "thread_" + crypto.randomUUID().replace(/-/g, "");
    const title = req.body.title || "New Chat";
    const now = new Date().toISOString();

    const threadData = {
      threadId,
      userId,
      title,
      createdAt: now,
      updatedAt: now,
    };

    await db.collection("threads").doc(threadId).set(threadData);
    res.json(threadData);
  });

  app.get("/api/threads", authenticateToken, async (req, res) => {
    const userId = req.user.id || req.user.username || req.user.email;
    const limitNum = parseInt(req.query.limit) || 20;

    let query = db.collection("threads")
      .where("userId", "==", userId)
      .orderBy("createdAt", "desc")
      .limit(limitNum);

    const snapshot = await query.get();
    const threads = snapshot.docs.map(doc => doc.data());

    res.json({ threads });
  });

  app.get("/api/threads/:id/messages", authenticateToken, async (req, res) => {
    const userId = req.user.id || req.user.username || req.user.email;
    const threadId = req.params.id;

    const threadDoc = await db.collection("threads").doc(threadId).get();
    if (!threadDoc.exists) return res.status(404).json({ error: "Thread not found" });
    if (threadDoc.data().userId !== userId) return res.status(403).json({ error: "Forbidden: Access denied." });

    const msgSnapshot = await db.collection("messages")
      .where("threadId", "==", threadId)
      .orderBy("timestamp", "asc")
      .get();

    const messages = msgSnapshot.docs.map(doc => doc.data());
    res.json({ thread: threadDoc.data(), messages });
  });

  app.post(
    "/api/generate-content",
    globalLimiter,
    validateAndSanitize(generateContentSchema),
    async (req, res) => {
      const { prompt, schema, systemInstruction, threadId } = req.body;
      if (!req.geminiApiKey) return res.status(500).json({ error: "Gemini API key not configured." });

      const userId = req.user?.id || req.user?.username || req.user?.email;

      try {
        const ai     = new GoogleGenAI({ apiKey: req.geminiApiKey });
        const config = { model: "gemini-2.5-flash", contents: prompt };
        if (schema || systemInstruction) {
          config.config = {};
          if (schema)            { config.config.responseMimeType = "application/json"; config.config.responseSchema = schema; }
          if (systemInstruction) { config.config.systemInstruction = systemInstruction; }
        }
        const response = await ai.models.generateContent(config);

        if (threadId && userId) {
          const now = new Date().toISOString();
          const userMsgId = "msg_" + crypto.randomUUID().replace(/-/g, "");
          const astMsgId  = "msg_" + crypto.randomUUID().replace(/-/g, "");

          await db.collection("messages").doc(userMsgId).set({
            messageId: userMsgId,
            threadId,
            role: "user",
            content: prompt,
            timestamp: now
          });

          await db.collection("messages").doc(astMsgId).set({
            messageId: astMsgId,
            threadId,
            role: "assistant",
            content: response.text || "",
            timestamp: now
          });

          const msgSnap = await db.collection("messages").where("threadId", "==", threadId).get();
          if (msgSnap.size === 2) {
            ai.models.generateContent({
              model: "gemini-2.5-flash",
              contents: `Generate a concise 3-5 word title for this conversation starting with: "${prompt}"`,
            }).then(async titleRes => {
              const cleanTitle = (titleRes.text || "AI Conversation").replace(/["'\n]/g, "").trim();
              await db.collection("threads").doc(threadId).update({
                title: cleanTitle,
                updatedAt: new Date().toISOString()
              });
            }).catch(e => console.error("Auto-title error:", e.message));
          }
        }

        schema
          ? res.json(JSON.parse(response.text || "{}"))
          : res.json({ text: response.text });
      } catch (err) {
        console.error("generate-content error:", err.message);
        res.status(500).json({ error: sanitiseGeminiError(err) });
      }
    }
  );

  app.post(
    "/api/recommend-colleges",
    globalLimiter,
    validateAndSanitize(recommendCollegesSchema),
    async (req, res) => {
      const {
        stream, class10Score, class12Score, entranceExams,
        state, category, courseChosen, budget, contextData,
        wantTop30India, wantTop10City, wantTop50Abroad, city, isPremium,
      } = req.body;

      if (!req.geminiApiKey) return res.status(500).json({ error: "Gemini API key not configured." });

      const prompt = buildCollegePrompt({ stream, class10Score, class12Score, entranceExams, state, category, courseChosen, budget, contextData, wantTop30India, wantTop10City, wantTop50Abroad, city, isPremium });

      try {
        const ai       = new GoogleGenAI({ apiKey: req.geminiApiKey });
        const response = await ai.models.generateContent({
          model:    "gemini-2.5-flash",
          contents: prompt,
          config:   { responseMimeType: "application/json", responseSchema: collegeResponseSchema(isPremium) },
        });
        res.json(JSON.parse(response.text || "{}"));
      } catch (err) {
        console.error("recommend-colleges error:", err.message);
        res.status(500).json({ error: sanitiseGeminiError(err) });
      }
    }
  );

  app.post(
    "/api/exam-tracker",
    globalLimiter,
    validateAndSanitize(examTrackerSchema),
    async (req, res) => {
      if (!req.geminiApiKey) return res.status(500).json({ error: "Gemini API key not configured." });

      const prompt = buildExamTrackerPrompt(req.body);

      try {
        const ai       = new GoogleGenAI({ apiKey: req.geminiApiKey });
        const response = await ai.models.generateContent({
          model:    "gemini-2.5-flash",
          contents: prompt,
          config:   { responseMimeType: "application/json", responseSchema: examTrackerResponseSchema() },
        });
        const text = response.text || "{}";
        let parsed;
        try   { parsed = JSON.parse(text); }
        catch { const m = text.match(/\{[\s\S]*\}/); parsed = m ? JSON.parse(m[0]) : {}; }
        res.json(parsed);
      } catch (err) {
        console.error("exam-tracker error:", err.message);
        res.status(500).json({ error: sanitiseGeminiError(err) });
      }
    }
  );

  app.post(
    "/api/dream-cost",
    globalLimiter,
    validateAndSanitize(dreamCostSchema),
    async (req, res) => {
      if (!req.geminiApiKey) return res.status(500).json({ error: "Gemini API key not configured." });

      const prompt = buildDreamCostPrompt(req.body.career);

      try {
        const ai       = new GoogleGenAI({ apiKey: req.geminiApiKey });
        const response = await ai.models.generateContent({
          model:    "gemini-2.5-flash",
          contents: prompt,
          config:   { responseMimeType: "application/json", responseSchema: dreamCostResponseSchema() },
        });
        const text = response.text || "{}";
        let parsed;
        try   { parsed = JSON.parse(text); }
        catch { const m = text.match(/\{[\s\S]*\}/); parsed = m ? JSON.parse(m[0]) : {}; }
        res.json(parsed);
      } catch (err) {
        console.error("dream-cost error:", err.message);
        res.status(500).json({ error: sanitiseGeminiError(err) });
      }
    }
  );

  app.post(
    "/api/generate-life-paths",
    globalLimiter,
    validateAndSanitize(lifePathsSchema),
    async (req, res) => {
      if (!req.geminiApiKey) return res.status(500).json({ error: "Gemini API key not configured." });

      const prompt = buildLifePathsPrompt(req.body);

      try {
        const ai       = new GoogleGenAI({ apiKey: req.geminiApiKey });
        const response = await ai.models.generateContent({
          model:    "gemini-2.5-flash",
          contents: prompt,
          config:   { responseMimeType: "application/json", responseSchema: lifePathsResponseSchema(req.body.isPremium) },
        });
        const text = response.text || "{}";
        let parsed;
        try   { parsed = JSON.parse(text); }
        catch { const m = text.match(/\{[\s\S]*\}/); parsed = m ? JSON.parse(m[0]) : {}; }
        res.json(parsed);
      } catch (err) {
        console.error("generate-life-paths error:", err.message);
        res.status(500).json({ error: sanitiseGeminiError(err) });
      }
    }
  );

  return app;
}

// ─── Helpers ────────────────────────────────────────────────────────────────
const sanitiseGeminiError = (err) => {
  // Never leak API key or internal SDK details to the client
  const msg = err?.message || "AI request failed.";
  if (msg.includes("leaked") || msg.includes("API_KEY_INVALID")) {
    return "Gemini API key is missing or invalid. Check server configuration.";
  }
  return "AI request failed. Please try again.";
};

// ─── Prompt builders (extracted to keep the route handlers clean) ────────────
function buildCollegePrompt(p) {
  return `You are building a college recommendation feature for CareerDisha+ — an Indian student career guidance app.
INPUT DATA:
${JSON.stringify({
  context:           p.contextData || "12th Finished",
  stream:            p.stream || "",
  class10Score:      p.class10Score || "",
  class12Score:      p.class12Score || "",
  entranceExamScores: p.entranceExams || "",
  state:             p.state || "",
  city:              p.city || "",
  category:          p.category || "General",
  courseChosen:      p.courseChosen,
  budget:            p.budget || "moderate",
  wantTop30India:    !!p.wantTop30India,
  wantTop10City:     !!p.wantTop10City,
  wantTop50Abroad:   !!p.wantTop50Abroad,
}, null, 2)}

CONSTRAINTS:
1. Always provide a 3-tier (Reach / Match / Safe) list tailored to the student's scores and budget.
2. If wantTop30India is true, provide Top 30 colleges in India for this course.
3. If wantTop10City is true and city is provided, provide Top 10 colleges in that city.
4. If wantTop50Abroad is true, provide Top 50 abroad colleges.
5. Provide specific entrance exam names under "entranceExam" for each college.`;
}

function buildExamTrackerPrompt(p) {
  return `You are the Exam Tracker engine for CareerDisha+.
STUDENT PROFILE: ${JSON.stringify(p, null, 2)}

RULES:
- Stream is the single most important field. NEVER show JEE/NEET to commerce/humanities students as primary exams.
- commerce → IPMAT, JIPMAT, DU JAT, CUET, CA Foundation etc.
- humanities → CLAT, CUET, IIMC etc.
- sciencePCM → JEE Main, JEE Advanced, BITSAT etc.
- sciencePCB → NEET UG as primary.
- Cross-stream exams go ONLY in crossStreamOpportunities, never in primaryExams.
- Add 2-3 state-specific exams for state: ${p.state || "the student's state"}.
- ${p.isPremium ? "Show all highly relevant exams." : "Strictly limit primaryExams to 5 exams max."}
- Calculate countdowns from today's date (2026 cycle). Set isDateConfirmed: false when unsure.
- Never invent exam names, dates, or fees.`;
}

// ─── Response schemas ────────────────────────────────────────────────────────
function collegeResponseSchema(isPremium) {
  const collegeItem = {
    type: Type.OBJECT,
    properties: {
      name:               { type: Type.STRING },
      location:           { type: Type.STRING },
      type:               { type: Type.STRING },
      course:             { type: Type.STRING },
      annualFee:          { type: Type.STRING },
      admissionRoute:     { type: Type.STRING },
      entranceExam:       { type: Type.STRING },
      matchScore:         { type: Type.INTEGER },
      whyThisCollege:     { type: Type.STRING },
      cutoffIndicator:    { type: Type.STRING },
      placementHighlight: { type: Type.STRING },
    },
    required: ["name", "location", "type", "course", "annualFee", "admissionRoute", "entranceExam", "matchScore"],
  };

  const properties = {
    tiers: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          tier:     { type: Type.INTEGER },
          colleges: { type: Type.ARRAY, items: collegeItem },
        },
        required: ["tier", "colleges"],
      },
    },
    top30India:  { type: Type.ARRAY, items: collegeItem },
    top10City:   { type: Type.ARRAY, items: collegeItem },
    admissionRoadmapSummary:    { type: Type.STRING },
    alternativeCourseSuggestion: { type: Type.STRING },
  };

  if (isPremium) {
    properties.top50Abroad = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name:         { type: Type.STRING },
          country:      { type: Type.STRING },
          entranceExam: { type: Type.STRING },
        },
        required: ["name", "country", "entranceExam"],
      },
    };
  }

  return { type: Type.OBJECT, properties, required: ["tiers", "admissionRoadmapSummary"] };
}

function examTrackerResponseSchema() {
  const dateBlock = {
    type: Type.OBJECT,
    properties: {
      applicationOpenDate:  { type: Type.STRING },
      applicationCloseDate: { type: Type.STRING },
      examDate:             { type: Type.STRING },
      resultDate:           { type: Type.STRING },
      isDateConfirmed:      { type: Type.BOOLEAN },
      tentativeNote:        { type: Type.STRING },
    },
    required: ["applicationOpenDate", "applicationCloseDate", "examDate", "resultDate", "isDateConfirmed"],
  };

  const countdownBlock = {
    type: Type.OBJECT,
    properties: {
      applicationDaysLeft: { type: Type.INTEGER },
      examDaysLeft:        { type: Type.INTEGER },
      applicationStatus:   { type: Type.STRING },
      examStatus:          { type: Type.STRING },
    },
    required: ["applicationDaysLeft", "examDaysLeft", "applicationStatus", "examStatus"],
  };

  const feesBlock = {
    type: Type.OBJECT,
    properties: {
      general:    { type: Type.STRING },
      sc_st:      { type: Type.STRING },
      studentFee: { type: Type.STRING },
    },
    required: ["general", "sc_st", "studentFee"],
  };

  const primaryExamItem = {
    type: Type.OBJECT,
    properties: {
      examId:         { type: Type.STRING },
      name:           { type: Type.STRING },
      shortName:      { type: Type.STRING },
      conductingBody: { type: Type.STRING },
      officialWebsite:{ type: Type.STRING },
      examType:       { type: Type.STRING },
      whyRelevant:    { type: Type.STRING },
      dates:          dateBlock,
      countdown:      countdownBlock,
      eligibility: {
        type: Type.OBJECT,
        properties: {
          streams:         { type: Type.ARRAY, items: { type: Type.STRING } },
          minScore:        { type: Type.INTEGER },
          maxAge:          { type: Type.INTEGER },
          studentEligible: { type: Type.BOOLEAN },
          eligibilityNote: { type: Type.STRING },
        },
        required: ["streams", "minScore", "maxAge", "studentEligible", "eligibilityNote"],
      },
      fees:            feesBlock,
      categoryBenefit: { type: Type.STRING },
      proTip:          { type: Type.STRING },
    },
    required: ["examId", "name", "shortName", "conductingBody", "officialWebsite", "examType", "whyRelevant", "dates", "countdown", "eligibility", "fees", "categoryBenefit", "proTip"],
  };

  return {
    type: Type.OBJECT,
    properties: {
      studentName:              { type: Type.STRING },
      stream:                   { type: Type.STRING },
      classLevel:               { type: Type.STRING },
      state:                    { type: Type.STRING },
      category:                 { type: Type.STRING },
      totalExamsFound:          { type: Type.INTEGER },
      generatedAt:              { type: Type.STRING },
      urgentActions: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            examName:       { type: Type.STRING },
            urgentMessage:  { type: Type.STRING },
            daysLeft:       { type: Type.INTEGER },
            applicationLink:{ type: Type.STRING },
            fee:            { type: Type.STRING },
            whyUrgent:      { type: Type.STRING },
          },
          required: ["examName", "urgentMessage", "daysLeft", "applicationLink", "whyUrgent", "fee"],
        },
      },
      primaryExams:            { type: Type.ARRAY, items: primaryExamItem },
      crossStreamOpportunities:{ type: Type.ARRAY, items: primaryExamItem },
      stateSpecificExams: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            examId:        { type: Type.STRING },
            name:          { type: Type.STRING },
            importance:    { type: Type.STRING },
            stateAdvantage:{ type: Type.STRING },
            dates:         dateBlock,
            countdown:     countdownBlock,
            fees:          feesBlock,
          },
          required: ["examId", "name", "importance", "stateAdvantage", "dates", "countdown", "fees"],
        },
      },
      categoryAdvantages: {
        type: Type.OBJECT,
        properties: {
          category:          { type: Type.STRING },
          advantages:        { type: Type.ARRAY, items: { type: Type.STRING } },
          feeWaivers:        { type: Type.ARRAY, items: { type: Type.STRING } },
          reservationDetails:{ type: Type.STRING },
          importantNote:     { type: Type.STRING },
        },
        required: ["category", "advantages", "feeWaivers", "reservationDetails", "importantNote"],
      },
      summaryMessage: { type: Type.STRING },
    },
    required: ["studentName", "stream", "classLevel", "state", "category", "totalExamsFound", "generatedAt", "urgentActions", "primaryExams", "crossStreamOpportunities", "stateSpecificExams", "categoryAdvantages", "summaryMessage"],
  };
}

// ─── Dream Cost prompt & schema ─────────────────────────────────────────────
function buildDreamCostPrompt(career) {
  return `You are a brutally honest senior career mentor writing for CareerDisha — an Indian student career guidance platform.
A student has typed their dream career: "${career}".

Your job is NOT to kill their dream. Your job is to tell them the REAL cost so they carry it with open eyes.
Write like a mentor who deeply respects the student — honest, specific, compassionate. No corporate speak. No sugar-coating. No unnecessary pessimism.

RULES:
- All statistics must be India-specific and realistic (not global averages).
- successRate must be a specific, accurate figure (e.g. "UPSC CSE 2023 selection rate: 0.16%").
- whatYouGiveUp must list real sacrifices (income foregone, social withdrawal, relationship strain, health risks, opportunity cost).
- whatHappensIfYouDont must be matter-of-fact, not shameful. Show what the majority actually end up doing — often good paths.
- whatPeopleWhoMadeItSay must feel like a real Reddit/Quora comment — not a corporate testimonial.
- hardestPartAccordingToThem must be the single hardest thing they describe — usually psychological, not the exam itself.
- alternativePaths must be 3 adjacent careers that use the same skills with less sacrifice and better odds.
- honestVerdict must be 2-3 sentences — the mentor's closing word. Direct. Warm. True.
- motivationNote must acknowledge the weight AND affirm the student's agency. End with belief in them, not platitudes.
- Tailor everything to the Indian context: exam names, salary ranges in INR, career timelines relevant to Indian education system.`;
}

function dreamCostResponseSchema() {
  return {
    type: Type.OBJECT,
    properties: {
      career:               { type: Type.STRING },
      emoji:                { type: Type.STRING },
      tagline:              { type: Type.STRING },
      averagePrepTime:      { type: Type.STRING },
      successRate:          { type: Type.STRING },
      competitorCount:      { type: Type.STRING },
      whatYouGiveUp: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
      },
      whatHappensIfYouDont: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            path:    { type: Type.STRING },
            detail:  { type: Type.STRING },
          },
          required: ["path", "detail"],
        },
      },
      whatPeopleWhoMadeItSay:   { type: Type.STRING },
      hardestPartAccordingToThem: { type: Type.STRING },
      alternativePaths: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name:   { type: Type.STRING },
            why:    { type: Type.STRING },
            effort: { type: Type.STRING },
          },
          required: ["name", "why", "effort"],
        },
      },
      honestVerdict:   { type: Type.STRING },
      motivationNote:  { type: Type.STRING },
    },
    required: [
      "career", "emoji", "tagline", "averagePrepTime", "successRate", "competitorCount",
      "whatYouGiveUp", "whatHappensIfYouDont", "whatPeopleWhoMadeItSay",
      "hardestPartAccordingToThem", "alternativePaths", "honestVerdict", "motivationNote"
    ],
  };
}

// ─── Life Paths prompt & schema ─────────────────────────────────────────────
function buildLifePathsPrompt(p) {
  const profile = JSON.stringify({
    story: p.storyText,
    name: p.name || "Student",
    city: p.city || "",
    class: p.classLevel || "",
    stream: p.stream || "",
    score12: p.score12OrCurrent || null,
    score10: p.score10 || null,
    interests: (p.interests || []).join(","),
    goal: p.primaryGoal || "",
  });
  return `CareerDisha Life Path Generator. Student: ${profile}
Rules:
- Generate exactly ${p.isPremium ? 4 : 3} paths (A=safe/nearby, B=moderate/regional, C=ambitious/national${p.isPremium ? ", D=abroad/5 countries" : ""}).
- Use REAL Indian college names, realistic placement medians, actual exam names+deadlines (2026 cycle).
- studentSentiment: write like a Reddit comment from a real student, honest tone.
- hostelCulture: 1 sentence, honest.
- fourYearCost: total including hostel.
- Each path: 3-5 colleges, 2-4 exams with realistic daysLeft from today.
- Path D (if premium): include countryBreakdown with visa, cost, scholarship info for 5 countries.
- Keep all text concise. No marketing language.
- Calculate daysLeft from today's date (May 2026).`;
}

function lifePathsResponseSchema(isPremium) {
  const collegeItem = {
    type: Type.OBJECT,
    properties: {
      name:            { type: Type.STRING },
      location:        { type: Type.STRING },
      course:          { type: Type.STRING },
      annualFee:       { type: Type.STRING },
      placementMedian: { type: Type.STRING },
      topRecruiters:   { type: Type.ARRAY, items: { type: Type.STRING } },
      hostelNote:      { type: Type.STRING },
      studentQuote:    { type: Type.STRING },
    },
    required: ["name", "location", "course", "annualFee", "placementMedian", "topRecruiters", "hostelNote", "studentQuote"],
  };

  const examItem = {
    type: Type.OBJECT,
    properties: {
      name:     { type: Type.STRING },
      deadline: { type: Type.STRING },
      daysLeft: { type: Type.INTEGER },
      priority: { type: Type.STRING },
      prepTime: { type: Type.STRING },
    },
    required: ["name", "deadline", "daysLeft", "priority", "prepTime"],
  };

  const pathItem = {
    type: Type.OBJECT,
    properties: {
      id:               { type: Type.STRING },
      title:            { type: Type.STRING },
      tagline:          { type: Type.STRING },
      emoji:            { type: Type.STRING },
      isPremium:        { type: Type.BOOLEAN },
      lifePreview:      { type: Type.STRING },
      fourYearCost:     { type: Type.STRING },
      placementMedian:  { type: Type.STRING },
      topRecruiters:    { type: Type.ARRAY, items: { type: Type.STRING } },
      hostelCulture:    { type: Type.STRING },
      studentSentiment: { type: Type.STRING },
      colleges:         { type: Type.ARRAY, items: collegeItem },
      exams:            { type: Type.ARRAY, items: examItem },
    },
    required: ["id", "title", "tagline", "emoji", "isPremium", "lifePreview", "fourYearCost", "placementMedian", "topRecruiters", "hostelCulture", "studentSentiment", "colleges", "exams"],
  };

  if (isPremium) {
    pathItem.properties.countryBreakdown = {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          country:         { type: Type.STRING },
          topUniversities: { type: Type.ARRAY, items: { type: Type.STRING } },
          estimatedCost:   { type: Type.STRING },
          visaReality:     { type: Type.STRING },
          scholarshipNote: { type: Type.STRING },
        },
        required: ["country", "topUniversities", "estimatedCost", "visaReality", "scholarshipNote"],
      },
    };
  }

  return {
    type: Type.OBJECT,
    properties: {
      studentSummary: { type: Type.STRING },
      paths:          { type: Type.ARRAY, items: pathItem },
      disclaimer:     { type: Type.STRING },
    },
    required: ["studentSummary", "paths", "disclaimer"],
  };
}

// ─── Export as a single Firebase Cloud Function ──────────────────────────────
// All API routes are served by one function to minimise cold starts.
export const api = onRequest(
  {
    region:  "asia-south1",         // Mumbai — lowest latency for Indian users
    secrets: [JWT_SECRET_REF, JWT_REFRESH_SECRET_REF, GEMINI_API_KEY_REF],
    memory:  "256MiB",
    timeoutSeconds: 60,
    minInstances: 0,                // set to 1 on paid plan to eliminate cold starts
    invoker: "public",
    cors: true,
  },
  (req, res) => {
    // Resolve secrets from Cloud Secret Manager and pass to the app builder
    const app = buildApp({
      jwtSecret:        JWT_SECRET_REF.value(),
      jwtRefreshSecret: JWT_REFRESH_SECRET_REF.value(),
      geminiApiKey:     GEMINI_API_KEY_REF.value(),
    });
    app(req, res);
  }
);
