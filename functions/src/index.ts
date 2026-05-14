import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";
import { GoogleGenAI, Type } from "@google/genai";
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
  app.post("/api/generate-content", async (req, res) => {
    try {
      const { prompt, schema, systemInstruction, context } = req.body;
      let apiKey = process.env.GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(500).json({ error: "Gemini API Key is not configured." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const config: any = {
        model: "gemini-2.0-flash",
        contents: prompt
      };
      
      if (schema) {
        config.config = {
          responseMimeType: "application/json",
          responseSchema: schema
        };
      }
      if (systemInstruction) {
        config.config = config.config || {};
        config.config.systemInstruction = systemInstruction;
      }
      
      const response = await ai.models.generateContent(config);
      
      if (schema) {
        res.json(JSON.parse(response.text || "{}"));
      } else {
        res.json({ text: response.text });
      }
    } catch (error: any) {
      console.error("Error in /api/generate-content:", error);
      let errMsg = error?.message || "Failed to generate content.";
      if (errMsg.includes('leaked') || errMsg.includes('API_KEY_INVALID')) {
        errMsg = "Your Gemini API key is missing, invalid, or leaked. Please configure a valid API key in your environment variables.";
      }
      res.status(500).json({ error: errMsg });
    }
  });

  // API Routes
  app.post("/api/recommend-colleges", async (req, res) => {
    try {
      const {
        stream,
        class10Score,
        class12Score,
        entranceExams,
        state,
        category,
        courseChosen,
        budget,
      } = req.body;

      if (!courseChosen) {
        return res.status(400).json({ error: "courseChosen is required" });
      }
      
      let apiKey = process.env.GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(500).json({ error: "Gemini API Key is not configured." });
      }

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `
You are building a college recommendation feature for CareerDisha+ — an Indian student career guidance app. 
The feature takes a student's profile data and their chosen course, then returns a structured list of recommended colleges sorted into 3 tiers.

INPUT DATA:
{
  "stream": "${stream || ""}",
  "class10Score": "${class10Score || ""}",
  "class12Score": "${class12Score || ""}",
  "entranceExamScores": "${entranceExams || ""}",
  "state": "${state || ""}",
  "category": "${category || "General"}",
  "courseChosen": "${courseChosen}",
  "budget": "${budget || "moderate"}"
}

TIER DEFINITIONS:
- TIER 1 (REACH / ASPIRATIONAL): Colleges where admission is possible but competitive given the student's current scores.
- TIER 2 (MATCH / REALISTIC): Colleges where the student has a strong, realistic chance of admission based on their current scores and category.
- TIER 3 (SAFE / ASSURED): Colleges where admission is nearly guaranteed given the student's profile.

IMPORTANT CONSTRAINTS:
1. State Quota Priority: Always include at least 2 colleges from the student's home state in Tier 2 and Tier 3, since state quota gives significant admission advantage.
2. Category Reservation: Factor in SC/ST/OBC/EWS reservation cutoffs.
3. Budget Filter: Follow the budget constraint.
4. Entrance Exam Alignment: Only recommend colleges whose primary admission route matches exams the student has taken or is appearing for.
5. Only recommend real, currently operating Indian colleges and universities. Make sure to use Google Search to fetch accurate, up-to-date data for colleges, including location, type (Government/Private), annual fees, and specific placement highlights like average and lowest packages.
6. For Tier 1, include at least 1 central government institution (IIT/NIT/Central University) if one exists for that course.
7. Return EXACTLY 5 colleges per tier.
`;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              tiers: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    tier: { type: Type.INTEGER, description: "1, 2, or 3" },
                    colleges: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          name: { type: Type.STRING },
                          location: { type: Type.STRING },
                          type: { type: Type.STRING, description: "Government | Private | Deemed | Autonomous" },
                          course: { type: Type.STRING },
                          annualFee: { type: Type.STRING },
                          admissionRoute: { type: Type.STRING },
                          cutoffIndicator: { type: Type.STRING },
                          whyThisCollege: { type: Type.STRING },
                          placementHighlight: { type: Type.STRING, description: "Must include average package and lowest package if available." },
                          reservationBenefit: { type: Type.STRING },
                          matchScore: { type: Type.INTEGER }
                        },
                        required: ["name", "location", "type", "course", "annualFee", "admissionRoute", "cutoffIndicator", "whyThisCollege", "placementHighlight", "reservationBenefit", "matchScore"]
                      }
                    }
                  },
                  required: ["tier", "colleges"]
                }
              },
              admissionRoadmapSummary: { type: Type.STRING },
              scoreGapAnalysis: {
                type: Type.OBJECT,
                properties: {
                  tier1Gap: { type: Type.STRING },
                  tier2Status: { type: Type.STRING },
                  tier3Status: { type: Type.STRING },
                  overallVerdict: { type: Type.STRING }
                },
                required: ["tier1Gap", "tier2Status", "tier3Status", "overallVerdict"]
              },
              alternativeCourseSuggestion: { type: Type.STRING }
            },
            required: ["tiers", "admissionRoadmapSummary", "scoreGapAnalysis"]
          }
        }
      });

      const text = response.text || "{}";
      const parsed = JSON.parse(text);
      res.json(parsed);

    } catch (error: any) {
      console.error("Error generating recommendations:", error);
      let errMsg = error?.message || "Failed to generate college recommendations.";
      if (errMsg.includes('leaked') || errMsg.includes('API_KEY_INVALID')) {
        errMsg = "Your Gemini API key is missing, invalid, or leaked. Please configure a valid API key in your environment variables.";
      }
      res.status(500).json({ error: errMsg });
    }
  });

  app.post("/api/exam-tracker", async (req, res) => {
    try {
      const {
        name,
        classLevel,
        stream,
        state,
        district,
        category,
        gender,
        score10,
        score12OrCurrent,
        annualFamilyIncome,
        entranceExamsAppeared,
        interestedCareers,
        hasNCC,
        isPhysicallyFit
      } = req.body;

      let apiKey = process.env.GEMINI_API_KEY || process.env.REACT_APP_GEMINI_API_KEY;
      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(500).json({ error: "Gemini API Key is not configured." });
      }

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `You are the Exam Tracker engine for CareerDisha+ — an AI-powered career guidance 
app for Indian students. Your job is to return a personalized list of entrance exams 
based on the student's EXACT profile passed to you.

---

# MOST IMPORTANT RULE — READ THIS FIRST

You will receive a student profile with a "stream" field.
You MUST strictly follow the stream-to-exam mapping defined below.
NEVER show JEE or NEET to a commerce or humanities student as primary exams.
NEVER assume a student's stream. Only use what is in the profile.
The stream field is the single most important input. Treat it as sacred.

If stream === "commerce" → commerce exams only as primary
If stream === "humanities" → humanities exams only as primary  
If stream === "sciencePCM" → engineering/math exams as primary
If stream === "sciencePCB" → medical/biology exams as primary
If stream === "vocational" → skill/design/polytechnic exams as primary

Cross-stream exams (like IPMAT, CLAT, NIFT, NCHMCT) are shown to ALL streams
but clearly labeled as "Cross-Stream Opportunity" — never as primary.

---

# STUDENT PROFILE INPUT

You will receive this profile object. Use EVERY field:

\`\`\`json
{
  "name": "${name || 'Student'}",
  "stream": "${stream || 'sciencePCM'}",
  "classLevel": "${classLevel || 'class12'}",
  "state": "${state || ''}",
  "district": "${district || ''}",
  "category": "${category || 'General'}",
  "gender": "${gender || 'Male'}",
  "score10": "${score10 || ''}",
  "score12OrCurrent": "${score12OrCurrent || ''}",
  "annualFamilyIncome": "${annualFamilyIncome || ''}",
  "interestedCareers": ${JSON.stringify(interestedCareers || [])},
  "entranceExamsAppeared": ${JSON.stringify(entranceExamsAppeared || [])},
  "hasNCC": "${hasNCC ? 'Yes' : 'No'}",
  "isPhysicallyFit": "${isPhysicallyFit ? 'Yes' : 'No'}"
}
\`\`\`

---

# STREAM → EXAM MASTER MAPPING

## IF stream === "commerce"

### PRIMARY EXAMS (show these first, marked as must-track):
1. IPMAT — IIM Indore & Rohtak (5-year integrated MBA, most valuable for commerce)
2. JIPMAT — NTA (another IIM integrated MBA route)
3. DU JAT — Delhi University BMS/BBA/BBE
4. NPAT — NMIMS BBA/BCom/BScFinance
5. SET — Symbiosis BBA/BCom (Pune)
6. CUET — BA/BCom/BBA at all central universities
7. CA Foundation — ICAI (single most important exam for commerce students)
8. CMA Foundation — ICMAI cost accounting
9. CS Foundation — ICSI company secretary
10. GGSIPU CET — BBA/BCom Delhi
11. Christ University BBA entrance — Bangalore
12. IPU CET BBA — Delhi
13. UGAT — AIMA BBA all India
14. TISSNET — TISS social sciences/management
15. Symbiosis SET — BBA/BCom Pune
16. AIMA UGAT — management programs
17. State commerce entrance exams based on student's state

### CROSS-STREAM OPPORTUNITIES for commerce (clearly labeled):
- CLAT — law is fully open to commerce students, great for corporate law
- NIFT — fashion/retail management open to all streams
- NCHMCT JEE — hotel management open to all streams
- NDA — only if student has Maths in Class 12
- NMAT — some programs accept Class 12 students

### NEVER SHOW TO COMMERCE STUDENTS AS PRIMARY:
JEE Main, JEE Advanced, NEET, BITSAT, VITEEE, SRMJEEE, MET Manipal,
IISER IAT, KVPY, NATA (requires Maths+Physics), COMEDK, WBJEE, MHT-CET Engineering

---

## IF stream === "humanities"

### PRIMARY EXAMS:
1. CLAT — National Law Universities (most important for humanities)
2. AILET — NLU Delhi specifically
3. LSAT India — law schools
4. CUET — BA programmes at all central universities (most important)
5. DU entrance — BA Political Science/Economics/History/Psychology
6. BHU UET — Banaras Hindu University BA/BSc humanities
7. IIMC entrance — journalism and mass communication
8. Symbiosis SCMC — mass communication Pune
9. Xavier's XJMC — journalism Kolkata
10. TISS entrance — social work/education/HR
11. TISSNET — TISS Mumbai all programmes
12. JMI entrance — Jamia arts/humanities New Delhi
13. Hyderabad University entrance — social sciences
14. Presidency University entrance — arts/humanities
15. IPMAT — integrated MBA open to humanities students too
16. JIPMAT — integrated MBA open to humanities
17. Aligarh Muslim University entrance (AMU)
18. Jawaharlal Nehru University entrance (JNUEE)
19. State university humanities entrances based on student's state

### CROSS-STREAM OPPORTUNITIES for humanities:
- NIFT — design/fashion open to all streams
- NID DAT — design open to all streams
- NCHMCT JEE — hotel management open to all
- IGNOU — various open university programmes
- Pearl Academy — design/fashion/media

### NEVER SHOW TO HUMANITIES STUDENTS AS PRIMARY:
JEE Main, JEE Advanced, NEET, BITSAT, VITEEE, IISER IAT, KVPY,
NATA (requires Maths), COMEDK, MHT-CET Engineering, WBJEE

---

## IF stream === "sciencePCM"

### PRIMARY EXAMS:
1. JEE Main — NTA (Session 1 and Session 2 separately)
2. JEE Advanced — IITs (only top 2.5L JEE Main qualifiers)
3. BITSAT — BITS Pilani campuses
4. VITEEE — VIT University
5. SRMJEEE — SRM University
6. MET — Manipal University
7. COMEDK — Karnataka engineering colleges
8. MHT-CET — Maharashtra engineering
9. KCET — Karnataka engineering
10. WBJEE — West Bengal engineering
11. JCECE — Jharkhand state (HIGH PRIORITY if state is Jharkhand)
12. BCECE — Bihar state
13. AP EAMCET — Andhra Pradesh
14. TS EAMCET — Telangana
15. KEAM — Kerala
16. UPSEE/AKTU — Uttar Pradesh
17. NATA / JEE Paper 2 — B.Arch (if interested in architecture)
18. IISER IAT — research-focused science institutes
19. NEST — NISER Bhubaneswar
20. Amrita AEEE, CUET for engineering, TANCET

### CROSS-STREAM OPPORTUNITIES for PCM:
- IPMAT — direct IIM MBA after Class 12 (most PCM students don't know this)
- CLAT — law open to PCM, great for IP/tech law careers
- UCEED — IIT Design (B.Des at IIT Bombay/Delhi)
- NID DAT — design open to all streams
- NCHMCT JEE — hotel management open to all
- NDA — defence (PCM mandatory so this is actually perfect fit)

---

## IF stream === "sciencePCB"

### PRIMARY EXAMS:
1. NEET UG — NTA (only route to MBBS/BDS/BAMS/BHMS/BUMS)
2. AIIMS counselling — via NEET score
3. JIPMER counselling — via NEET score
4. JCECE PCB — Jharkhand state (HIGH PRIORITY if state is Jharkhand)
5. State medical CETs based on student's state
6. ICAR AIEEA — agriculture/veterinary sciences
7. BHU UET PCB — BSc Life Sciences/Agriculture
8. GPAT — pharmacy (postgraduate, for awareness)
9. State pharmacy entrance exams
10. AIIMS Nursing entrance
11. BSc Nursing entrance exams (various)
12. Allied health sciences entrances
13. Veterinary entrance exams (state-wise)
14. NEET MDS — dental postgraduate (future awareness)
15. BSc Biotechnology entrance exams

### CROSS-STREAM OPPORTUNITIES for PCB:
- IPMAT — management after PCB (most PCB students don't know this)
- CLAT — law open to PCB students
- NIFT — design/fashion open to all
- NCHMCT JEE — hotel management open to all
- BSc Psychology entrances — overlaps with biology interest

### NEVER SHOW TO PCB STUDENTS AS PRIMARY:
JEE Main, JEE Advanced, BITSAT, NATA (requires Maths),
COMEDK Engineering, WBJEE, MHT-CET Engineering

---

## IF stream === "vocational"

### PRIMARY EXAMS:
1. NIFT entrance test — fashion/textile/design
2. NID DAT — National Institute of Design
3. UCEED — IIT Design
4. NCHMCT JEE — hotel management
5. Polytechnic entrance exams (state-wise)
6. ITI admission portals (state-wise)
7. CUET for vocational/skill-based programmes
8. Pearl Academy entrance — design/media
9. CEED — design postgraduate (future awareness)
10. State skill development entrance tests
11. Animation/VFX college entrance tests
12. Event management college entrances

### CROSS-STREAM OPPORTUNITIES for vocational:
- IPMAT — management open to all streams
- CLAT — law open to all streams
- CA Foundation — open to all streams

---

# STATE-SPECIFIC EXAM RULES

Always add state-specific exams based on profile.state.
These are HIGH PRIORITY because state quota gives massive admission advantage.

if state === "Jharkhand":
  ADD: JCECE (Jharkhand Combined Entrance)
  ADD: JPSC (Jharkhand Public Service Commission)
  ADD: JSSC (Jharkhand Staff Selection)
  ADD: Jharkhand Polytechnic entrance
  MARK ALL AS: "High Priority — Jharkhand Domicile Advantage"

if state === "Maharashtra":
  ADD: MHT-CET (engineering + pharmacy + nursing)
  ADD: MAH-MBA CET
  ADD: MAH-LLB CET
  ADD: MAH-B.Ed CET

if state === "Karnataka":
  ADD: KCET
  ADD: KMAT
  ADD: Karnataka PGCET

if state === "Tamil Nadu":
  ADD: TNEA (engineering)
  ADD: TANCET
  ADD: Tamil Nadu law entrance

if state === "Uttar Pradesh":
  ADD: UPSEE/AKTU
  ADD: UPPSC
  ADD: UP BEd entrance
  
if state === "Bihar":
  ADD: BCECE
  ADD: BPSC
  ADD: Bihar Polytechnic

if state === "West Bengal":
  ADD: WBJEE
  ADD: WBCS
  ADD: West Bengal law entrance

if state === "Kerala":
  ADD: KEAM
  ADD: Kerala law entrance
  ADD: Kerala LET

if state === "Rajasthan":
  ADD: RPET
  ADD: RPSC
  ADD: Rajasthan PTET

// For any other state: search and add that state's
// board-controlled engineering/medical/law entrance exam

---

# CATEGORY-BASED PERSONALIZATION

Always include category-specific information for every exam:

if category === "ST" or "SC":
  - Show reduced cutoff/rank requirements
  - Show fee waiver eligibility (most central exams: ₹500 vs ₹1000)
  - Show 5-year age relaxation in government exams
  - Show 7.5% (ST) or 15% (SC) reservation in central institutions
  - Highlight tribal ministry coaching schemes for NEET/JEE

if category === "OBC":
  - Show 27% OBC reservation
  - Show OBC-NCL income condition (below ₹8L/year)
  - Show 3-year age relaxation in government exams
  - Show reduced cutoffs at NITs/IITs/central universities

if category === "EWS":
  - Show 10% EWS reservation in central institutions
  - Mention income certificate requirement (below ₹8L/year)

if category === "General":
  - Show merit-based scholarships that don't have category restrictions
  - Show management quota options

---

# GENDER-BASED ADDITIONS

if gender === "Female":
  ADD: Pragati Scholarship (AICTE) — girl students technical education
  ADD: Indira Gandhi Single Girl Child Scholarship
  ADD: CBSE Single Girl Child merit scholarship
  ADD: Kotak Kanya Scholarship
  ADD: Suposhit Maa Abhiyan — relevant government schemes
  NOTE: Some NLUs give extra marks/relaxation for female CLAT candidates
  NOTE: NIFT gives gender-diversity preference in some campuses
  
if gender === "Male":
  ADD: NDA (if PCM and physically fit)
  ADD: Indian Army Technical Entry (if PCM)
  ADD: Indian Navy AA entry (if PCM)

---

# OUTPUT FORMAT
Return a clean structured JSON in this exact format.

---

# STRICT VALIDATION RULES

Before returning output, self-check every exam against these rules:

RULE 1 — MAXIMUM EXAMS & STREAM PURITY:
You MUST return EXACTLY the TOP 5 most relevant exams in the primaryExams array. Do not return 15 exams.
For every exam in primaryExams array:
  IF student.stream === "commerce" AND exam is JEE/NEET/BITSAT/VITEEE → REMOVE IT
  IF student.stream === "humanities" AND exam is JEE/NEET/BITSAT/IISER → REMOVE IT
  IF student.stream === "sciencePCB" AND exam is JEE/BITSAT/NATA → REMOVE IT
  IF student.stream === "sciencePCM" AND exam is NEET (as primary) → MOVE TO crossStream

RULE 2 — CROSS STREAM LABEL:
Any exam that is not native to the student's stream MUST be in 
crossStreamOpportunities array with tag "SURPRISE OPPORTUNITY" (Max 3 exams here).
NEVER put a cross-stream exam in primaryExams array

RULE 3 — DATE ACCURACY:
Never present a past deadline as open
Calculate countdowns based on today's date representing the 2026 cycle.
If unsure of dates: set isDateConfirmed to false
Always add: "Verify current dates at [officialWebsite] before applying"

RULE 4 — STATE RELEVANCE:
Populate the stateSpecificExams array with exactly 2-3 state-specific exams from profile.state.
Ensure stateAdvantage explicitly details what the student gains (e.g., "85% State Quota Seats").
For Jharkhand students: JCECE is ALWAYS included regardless of stream

RULE 5 — CATEGORY PERSONALIZATION:
Populate the categoryAdvantages object explicitly with benefits for the student's category.
Every single exam entry in primaryExams must have a categoryBenefit field specific to the student.
Never show a generic fee — always show the fee for THIS student's category in studentFee.

RULE 6 — NO HALLUCINATION:
Only include real, currently operating entrance exams
If unsure whether an exam is still active: add a note "Verify this 
exam is still active at [website]"
Never invent exam names, dates, or fees

---

# PERSONALIZED SUMMARY MESSAGE TEMPLATE

Generate this summary at the end:

"[Name], here are [X] exams relevant to your [stream] stream.

Your TOP PRIORITY right now: [Most urgent exam] — 
application [opens/closes] in [X] days. [One line why it matters for them].

[If commerce]: Your most powerful exam is IPMAT — 
most commerce students don't know it leads directly to an IIM degree 
without needing CAT. Application [status].

[If humanities]: CLAT is your most important exam — 
it opens doors to all National Law Universities. 
[Status and days left].

[If Jharkhand student]: As a Jharkhand domicile student, 
JCECE gives you state quota seats with far less competition 
than national exams — don't skip it.

[If ST/SC category]: Your [category] category gives you 
[specific benefit] in [top exam] — your realistic chances 
are much stronger than general category students.

Surprise opportunity you might not know about: [Cross-stream exam] 
— open to [stream] students, leads to [career], deadline in [X] days."

---

# WHAT TO ABSOLUTELY NEVER DO

- NEVER show JEE Main or JEE Advanced to commerce or humanities students as primary exams
- NEVER show NEET to PCM, commerce, or humanities students as a primary exam  
- NEVER ignore the stream field — it is the most important input
- NEVER return a generic list that ignores the student's actual profile
- NEVER show a closed application as open
- NEVER skip state-specific exams for the student's state
- NEVER forget to show category fee benefits
- NEVER put cross-stream exams in the primary section
- NEVER address a commerce student as a science student or vice versa
- NEVER return the same exam list regardless of who is asking`;

      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              studentName: { type: Type.STRING },
              stream: { type: Type.STRING },
              classLevel: { type: Type.STRING },
              state: { type: Type.STRING },
              category: { type: Type.STRING },
              totalExamsFound: { type: Type.INTEGER },
              generatedAt: { type: Type.STRING },
              urgentActions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    examName: { type: Type.STRING },
                    urgentMessage: { type: Type.STRING },
                    daysLeft: { type: Type.INTEGER },
                    applicationLink: { type: Type.STRING },
                    fee: { type: Type.STRING },
                    whyUrgent: { type: Type.STRING },
                  },
                  required: ["examName", "urgentMessage", "daysLeft", "applicationLink", "whyUrgent", "fee"]
                }
              },
              primaryExams: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    examId: { type: Type.STRING },
                    name: { type: Type.STRING },
                    shortName: { type: Type.STRING },
                    conductingBody: { type: Type.STRING },
                    officialWebsite: { type: Type.STRING },
                    examType: { type: Type.STRING },
                    whyRelevant: { type: Type.STRING },
                    dates: {
                      type: Type.OBJECT,
                      properties: {
                        applicationOpenDate: { type: Type.STRING },
                        applicationCloseDate: { type: Type.STRING },
                        examDate: { type: Type.STRING },
                        resultDate: { type: Type.STRING },
                        isDateConfirmed: { type: Type.BOOLEAN },
                        tentativeNote: { type: Type.STRING }
                      },
                      required: ["applicationOpenDate", "applicationCloseDate", "examDate", "resultDate", "isDateConfirmed"]
                    },
                    countdown: {
                      type: Type.OBJECT,
                      properties: {
                        applicationDaysLeft: { type: Type.INTEGER },
                        examDaysLeft: { type: Type.INTEGER },
                        applicationStatus: { type: Type.STRING },
                        examStatus: { type: Type.STRING }
                      },
                      required: ["applicationDaysLeft", "examDaysLeft", "applicationStatus", "examStatus"]
                    },
                    eligibility: {
                      type: Type.OBJECT,
                      properties: {
                        streams: { type: Type.ARRAY, items: { type: Type.STRING } },
                        minScore: { type: Type.INTEGER },
                        maxAge: { type: Type.INTEGER },
                        attempts: { type: Type.INTEGER },
                        studentEligible: { type: Type.BOOLEAN },
                        eligibilityNote: { type: Type.STRING }
                      },
                      required: ["streams", "minScore", "maxAge", "attempts", "studentEligible", "eligibilityNote"]
                    },
                    fees: {
                      type: Type.OBJECT,
                      properties: {
                        general: { type: Type.STRING },
                        sc_st: { type: Type.STRING },
                        studentFee: { type: Type.STRING }
                      },
                      required: ["general", "sc_st", "studentFee"]
                    },
                    scale: {
                      type: Type.OBJECT,
                      properties: {
                        totalSeats: { type: Type.STRING },
                        topColleges: { type: Type.ARRAY, items: { type: Type.STRING } },
                        difficultyLevel: { type: Type.STRING }
                      },
                      required: ["totalSeats", "topColleges", "difficultyLevel"]
                    },
                    categoryBenefit: { type: Type.STRING },
                    proTip: { type: Type.STRING },
                    documentsNeeded: { type: Type.ARRAY, items: { type: Type.STRING } }
                  },
                  required: ["examId", "name", "shortName", "conductingBody", "officialWebsite", "examType", "whyRelevant", "dates", "countdown", "eligibility", "fees", "scale", "categoryBenefit", "proTip", "documentsNeeded"]
                }
              },
              crossStreamOpportunities: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    examId: { type: Type.STRING },
                    name: { type: Type.STRING },
                    tag: { type: Type.STRING },
                    surpriseMessage: { type: Type.STRING },
                    dates: {
                      type: Type.OBJECT,
                      properties: {
                        applicationOpenDate: { type: Type.STRING },
                        applicationCloseDate: { type: Type.STRING },
                        examDate: { type: Type.STRING },
                        resultDate: { type: Type.STRING },
                        isDateConfirmed: { type: Type.BOOLEAN },
                        tentativeNote: { type: Type.STRING }
                      },
                      required: ["applicationOpenDate", "applicationCloseDate", "examDate", "resultDate", "isDateConfirmed"]
                    },
                    countdown: {
                      type: Type.OBJECT,
                      properties: {
                        applicationDaysLeft: { type: Type.INTEGER },
                        examDaysLeft: { type: Type.INTEGER },
                        applicationStatus: { type: Type.STRING },
                        examStatus: { type: Type.STRING }
                      },
                      required: ["applicationDaysLeft", "examDaysLeft", "applicationStatus", "examStatus"]
                    },
                    eligibility: {
                      type: Type.OBJECT,
                      properties: {
                        streams: { type: Type.ARRAY, items: { type: Type.STRING } },
                        minScore: { type: Type.INTEGER },
                        maxAge: { type: Type.INTEGER },
                        attempts: { type: Type.INTEGER },
                        studentEligible: { type: Type.BOOLEAN },
                        eligibilityNote: { type: Type.STRING }
                      },
                      required: ["streams", "minScore", "maxAge", "attempts", "studentEligible", "eligibilityNote"]
                    },
                    fees: {
                      type: Type.OBJECT,
                      properties: {
                        general: { type: Type.STRING },
                        sc_st: { type: Type.STRING },
                        studentFee: { type: Type.STRING }
                      },
                      required: ["general", "sc_st", "studentFee"]
                    },
                    potentialCareer: { type: Type.STRING },
                    proTip: { type: Type.STRING }
                  },
                  required: ["examId", "name", "tag", "surpriseMessage", "dates", "countdown", "eligibility", "fees", "potentialCareer", "proTip"]
                }
              },
              stateSpecificExams: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    examId: { type: Type.STRING },
                    name: { type: Type.STRING },
                    importance: { type: Type.STRING },
                    stateAdvantage: { type: Type.STRING },
                    dates: {
                      type: Type.OBJECT,
                      properties: {
                        applicationOpenDate: { type: Type.STRING },
                        applicationCloseDate: { type: Type.STRING },
                        examDate: { type: Type.STRING },
                        resultDate: { type: Type.STRING },
                        isDateConfirmed: { type: Type.BOOLEAN },
                        tentativeNote: { type: Type.STRING }
                      },
                      required: ["applicationOpenDate", "applicationCloseDate", "examDate", "resultDate", "isDateConfirmed"]
                    },
                    countdown: {
                      type: Type.OBJECT,
                      properties: {
                        applicationDaysLeft: { type: Type.INTEGER },
                        examDaysLeft: { type: Type.INTEGER },
                        applicationStatus: { type: Type.STRING },
                        examStatus: { type: Type.STRING }
                      },
                      required: ["applicationDaysLeft", "examDaysLeft", "applicationStatus", "examStatus"]
                    },
                    fees: {
                      type: Type.OBJECT,
                      properties: {
                        general: { type: Type.STRING },
                        sc_st: { type: Type.STRING },
                        studentFee: { type: Type.STRING }
                      },
                      required: ["general", "sc_st", "studentFee"]
                    }
                  },
                  required: ["examId", "name", "importance", "stateAdvantage", "dates", "countdown", "fees"]
                }
              },
              futureExams: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    examId: { type: Type.STRING },
                    name: { type: Type.STRING },
                    availableAfter: { type: Type.STRING },
                    whyTrackNow: { type: Type.STRING }
                  },
                  required: ["examId", "name", "availableAfter", "whyTrackNow"]
                }
              },
              personalizedInsights: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    insightNumber: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    message: { type: Type.STRING },
                    actionable: { type: Type.STRING },
                  },
                  required: ["insightNumber", "title", "message", "actionable"]
                }
              },
              categoryAdvantages: {
                type: Type.OBJECT,
                properties: {
                  category: { type: Type.STRING },
                  advantages: { type: Type.ARRAY, items: { type: Type.STRING } },
                  feeWaivers: { type: Type.ARRAY, items: { type: Type.STRING } },
                  reservationDetails: { type: Type.STRING },
                  importantNote: { type: Type.STRING }
                },
                required: ["category", "advantages", "feeWaivers", "reservationDetails", "importantNote"]
              },
              summaryMessage: { type: Type.STRING }
            },
            required: ["studentName", "stream", "classLevel", "state", "category", "totalExamsFound", "generatedAt", "urgentActions", "primaryExams", "crossStreamOpportunities", "stateSpecificExams", "futureExams", "personalizedInsights", "categoryAdvantages", "summaryMessage"]
          }
        }
      });

      const text = response.text || "{}";
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch(e) {
        // Fallback or send what we have
        const match = text.match(/\{[\s\S]*\}/);
        parsed = match ? JSON.parse(match[0]) : {};
      }
      res.json(parsed);

    } catch (error: any) {
      console.error("Error generating exam tracker data:", error);
      let errMsg = error?.message || "Failed to generate exam tracker data.";
      if (errMsg.includes('leaked') || errMsg.includes('API_KEY_INVALID')) {
        errMsg = "Your Gemini API key is missing, invalid, or leaked. Please configure a valid API key in your environment variables.";
      }
      res.status(500).json({ error: errMsg });
    }
  });

export const api = onRequest({ invoker: "public", cors: true }, app);
