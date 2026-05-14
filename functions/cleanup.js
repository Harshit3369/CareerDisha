// functions/cleanup.js
// Runs daily to purge expired rate-limit counters and invalidated refresh tokens.
// Add this export to index.js or keep as a separate file imported there.

import { onSchedule } from "firebase-functions/v2/scheduler";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

import { initializeApp, getApps } from "firebase-admin/app";
if (!getApps().length) initializeApp();
const db = getFirestore();

async function purgeExpired(collectionName) {
  const now  = new Date();
  const snap = await db.collection(collectionName)
    .where("expiresAt", "<", now)
    .limit(400)           // Firestore batch delete limit
    .get();

  if (snap.empty) return 0;

  const batch = db.batch();
  snap.docs.forEach((doc) => batch.delete(doc.ref));
  await batch.commit();
  return snap.size;
}

export const cleanupExpiredDocs = onSchedule(
  {
    schedule:       "every 24 hours",
    region:         "asia-south1",
    timeoutSeconds: 120,
  },
  async () => {
    const [rl, rt] = await Promise.all([
      purgeExpired("rateLimits"),
      purgeExpired("invalidatedRefreshTokens"),
    ]);
    console.log(`Cleanup: removed ${rl} rate-limit docs, ${rt} refresh-token docs`);
  }
);
