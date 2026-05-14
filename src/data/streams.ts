export const STREAMS = {
  "commerce": {
    "id": "commerce",
    "name": "Commerce",
    "icon": "📊",
    "color": "#6C63FF",
    "tagline": "Business, Finance & Accounting",
    "description": "For students who love numbers, markets, and business strategy.",
    "preview": [
      "Chartered Accountant",
      "MBA",
      "CFA",
      "Banking"
    ],
    "paths": [
      {
        "id": "ca",
        "name": "Chartered Accountant (CA)",
        "icon": "🏛️",
        "color": "#2b5876",
        "route": "12th → CA Foundation → CA Inter → Articleship → CA Final",
        "timeline": "5-6 years after 12th",
        "difficulty": "Very High",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Commerce",
            "Science",
            "Arts"
          ],
          "notes": "Needs: 12th Pass"
        },
        "boardMarks": {
          "tenthMatters": false,
          "twelfthMatters": true,
          "description": "12th marks do NOT affect CA exam eligibility directly — you just need to pass. However, for Foundation registration you need 12th pass. Some articleship firms prefer 80%+ in 12th. Board marks have ZERO weight in CA exams themselves."
        },
        "steps": [
          {
            "year": "0",
            "title": "Register with ICAI",
            "desc": "Register for CA Foundation immediately after 12th. Fee: ~₹11,300. Can appear after 4 months of registration."
          },
          {
            "year": "0-1",
            "title": "CA Foundation (4 papers)",
            "desc": "Accounting, Business Law, Quantitative Aptitude, Business Economics. Pass: 40% each + 50% aggregate. Pass rate: ~25-30%."
          },
          {
            "year": "1",
            "title": "Register for CA Intermediate",
            "desc": "After clearing Foundation, register for Intermediate. 8-month study period before appearing."
          },
          {
            "year": "1-3",
            "title": "CA Intermediate (8 papers, 2 groups)",
            "desc": "Accounting, Corporate Law, Cost Accounting, Taxation, Auditing, FM, IT. Pass rate: ~15-20% for both groups. Can start BCom simultaneously."
          },
          {
            "year": "2-5",
            "title": "Articleship (3 years mandatory)",
            "desc": "Practical training under a practicing CA. Can join Big 4 (Deloitte, PwC, EY, KPMG) or mid-size firms. Stipend: ₹2,000-5,000/month (Big 4: ₹15,000-22,000)."
          },
          {
            "year": "4-6",
            "title": "CA Final (8 papers, 2 groups)",
            "desc": "Advanced accounting, auditing, law, financial management. Pass rate: ~5-10%. One of the hardest professional exams globally."
          },
          {
            "year": "6",
            "title": "Certificate of Practice",
            "desc": "Become a member of ICAI. Apply for Certificate of Practice to start independent practice."
          }
        ],
        "colleges": [
          "ICAI — sole regulatory body (no college needed)",
          "Coaching: VSI Jaipur, Aldine CA, CA Amit Jain, CA Abhishek Bansal (YouTube)",
          "Self-study highly viable — saves ₹1-3 Lakh in coaching fees"
        ],
        "cost": "₹1.5-4 Lakh total (ICAI fees ~₹85K + coaching optional)",
        "salary": {
          "entry": "₹7-10 LPA",
          "mid": "₹15-25 LPA",
          "senior": "₹35-60 LPA",
          "top": "₹1-3 Cr",
          "source": "ICAI Employment Survey 2023, Big 4 India pay data"
        },
        "exams": [
          "CA Foundation",
          "CA Intermediate (Group I & II)",
          "CA Final (Group I & II)"
        ],
        "pros": [
          "Highest respected professional qualification in India",
          "Can practice independently — no employer needed",
          "Global recognition via MRA (UK, Canada, Australia)",
          "ROI is outstanding — low cost, high earning"
        ],
        "cons": [
          "Overall pass rate ~5% at Final level",
          "Takes 5-6 years of intense study",
          "Articleship stipend is very low (₹2K-5K/month)",
          "Mental health impact is real — isolation, failure stress"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "CA India → ACCA (UK) with 8 paper exemptions. CA India → CPA (USA/Canada) with additional exams. Practice rights vary by country."
        },
        "familyAngle": "\"CA ban gaya\" carries immense prestige in India. Families view it as the gold standard after Engineering/Medicine. Marriage market: excellent. Relatives stop asking questions once you qualify.",
        "eligibility": "12th pass from any stream. Commerce students have a natural edge but Science/Arts can also pursue it."
      },
      {
        "id": "bba-mba",
        "name": "BBA → MBA (from IIM/ISB)",
        "icon": "🎯",
        "color": "#cb2d3e",
        "route": "12th → BBA/BCom (3 yrs) → Work (2-3 yrs) → CAT/GMAT → MBA (2 yrs)",
        "timeline": "7-8 years to MBA completion",
        "difficulty": "High",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Bachelor's degree (any stream) for MBA"
        },
        "boardMarks": {
          "tenth": "Matters",
          "twelfth": "Matters",
          "description": "10th & 12th marks MATTER A LOT for IIM admissions. IIM Ahmedabad gives 25% weight to academics (10th + 12th + graduation). A student with 90%+ in 10th & 12th has a massive advantage in the IIM selection process. Some IIMs have minimum cutoffs: 80% in 10th, 80% in 12th."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BBA / BCom from top college",
            "desc": "Get into DU, Christ Bangalore, Symbiosis, Narsee Monjee, or IIM Integrated (IPMAT for IIM Indore/Rohtak). Maintain 7.5+ CGPA — it matters for MBA admissions."
          },
          {
            "year": "3-5",
            "title": "Work experience (2-3 years)",
            "desc": "Join a good company. Build leadership stories. Work exp is almost mandatory for IIM A/B/C. Average work exp of IIM A batch: 21 months."
          },
          {
            "year": "5",
            "title": "CAT Preparation (6-12 months)",
            "desc": "CAT exam: Quantitative Aptitude, Verbal Ability, DILR. Score needed: 99%ile+ for IIM A/B/C. 95%ile+ for top 10 IIMs. ~2.5 Lakh appear, ~1,000 get top 3 IIMs."
          },
          {
            "year": "5-7",
            "title": "MBA (2 years)",
            "desc": "IIM fees: ₹23-28 Lakh (total). ISB: ₹42 Lakh. Fully loan-fundable. Summer internship pays ₹2-5 Lakh/month at top firms."
          },
          {
            "year": "7-8",
            "title": "Campus Placement",
            "desc": "IIM A median package: ₹32 LPA (2024 NIRF data). Top recruiters: McKinsey, BCG, Goldman Sachs, Amazon, Google."
          }
        ],
        "colleges": [
          "IIM Ahmedabad, Bangalore, Calcutta (CAT 99.5%ile+ needed)",
          "IIM Lucknow, Kozhikode, Indore (CAT 97%ile+)",
          "ISB Hyderabad (GMAT 710+, 4+ yrs work exp)",
          "FMS Delhi (₹2 Lakh total fees — best ROI MBA in India)",
          "XLRI, MDI Gurgaon, IIM Shillong, SPJIMR"
        ],
        "cost": "₹3-5L (BBA) + ₹20-28L (IIM MBA) or ₹42L (ISB). Total: ₹25-47 Lakh. Education loan available at 8-10%.",
        "salary": {
          "entry": "₹20-35 LPA (post IIM A/B/C MBA)",
          "mid": "₹35-60 LPA (5 yrs post MBA)",
          "senior": "₹80L-1.5 Cr (VP/Director level)",
          "top": "₹2-5 Cr (CXO / MD at top firms)",
          "source": "IIM Ahmedabad IPRS 2024, NIRF ranking placement data, ISB Annual Report 2023"
        },
        "exams": [
          "IPMAT (for IIM Integrated BBA)",
          "CAT (Common Admission Test)",
          "XAT (XLRI)",
          "GMAT (ISB, abroad)",
          "NMAT (NMIMS)"
        ],
        "pros": [
          "Highest ROI graduate degree in India",
          "IIM brand opens every door",
          "Median package ₹25-30 LPA from top IIMs",
          "Diverse career paths: consulting, finance, marketing, tech PM"
        ],
        "cons": [
          "CAT is extremely competitive (2.5L applicants, ~1K top seats)",
          "10th/12th marks haunt you years later in IIM selection",
          "MBA from non-top college has limited ROI",
          "Total cost ₹25-45 Lakh"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "GMAT 700+ → MBA from Wharton/Harvard/LBS. Post-MBA US salary: $150-200K. ISB has good international placement record."
        },
        "familyAngle": "\"IIM se MBA kiya hai\" is the ultimate status symbol in corporate India. Families are thrilled. But the CAT preparation years can be stressful — \"CAT ka result aaya?\" is a dreaded question at family gatherings.",
        "eligibility": "Any bachelor's degree for CAT. No minimum marks required for CAT exam itself, but IIM selection considers 10th + 12th + graduation marks heavily."
      },
      {
        "id": "cfa",
        "name": "CFA (Chartered Financial Analyst)",
        "icon": "📈",
        "color": "#11998e",
        "route": "12th → BCom/BBA (3 yrs) → CFA L1 → L2 → L3 + 4000 hrs work",
        "timeline": "5-7 years",
        "difficulty": "High",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        },
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "10th and 12th marks DO NOT matter at all. CFA Institute only requires a bachelor's degree (final year students can start L1). No marks cutoff. Only your CFA exam scores and work experience matter."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Undergraduate Degree",
            "desc": "Complete BCom/BBA/BMS from any college. Focus on learning finance, economics, accounting fundamentals."
          },
          {
            "year": "3",
            "title": "Register for CFA L1",
            "desc": "Register with CFA Institute (USA). One-time enrollment: $350 + exam fee $700-1000. Final year students eligible."
          },
          {
            "year": "3-4",
            "title": "CFA Level 1 (180 MCQs)",
            "desc": "Ethics, Quant, Economics, FRA, Corporate Finance, Equity, Fixed Income, Derivatives, Alt Investments, PM. Pass rate: ~38% (2023). Computer-based, 4.5 hours."
          },
          {
            "year": "4-5",
            "title": "CFA Level 2 (Case-study vignettes)",
            "desc": "Deeper analysis. Financial statement analysis, valuation, portfolio management. Pass rate: ~44%."
          },
          {
            "year": "5-7",
            "title": "CFA Level 3 (Essay + vignettes)",
            "desc": "Portfolio management and wealth planning. Pass rate: ~48%. Need 4000 hours of relevant work experience to earn charter."
          }
        ],
        "colleges": [
          "No college needed — CFA Institute (USA) administers globally",
          "Prep: Kaplan Schweser ($700), AnalystPrep, Mark Meldrum (YouTube)",
          "Any decent UG finance degree works"
        ],
        "cost": "₹3-5 Lakh total (all 3 levels in USD + study material)",
        "salary": {
          "entry": "₹6-10 LPA",
          "mid": "₹15-30 LPA",
          "senior": "₹40-80 LPA",
          "top": "₹1-5 Cr",
          "source": "CFA Institute Compensation Survey 2023"
        },
        "exams": [
          "CFA Level 1",
          "CFA Level 2",
          "CFA Level 3"
        ],
        "pros": [
          "Globally recognized — the gold standard in investment management",
          "Can work in any country",
          "Much cheaper than an MBA for finance careers",
          "No attendance required — fully self-study"
        ],
        "cons": [
          "All fees in USD — expensive for Indian students",
          "Pass rates are low (cumulative ~10% pass all 3 on first attempt)",
          "4000 hours work experience needed for charter",
          "Less recognized outside finance in India"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "CFA is THE global finance credential. Direct pathway to roles in Singapore, Hong Kong, London, New York, Dubai. No visa sponsorship help though — you need to secure that separately."
        },
        "familyAngle": "Most Indian families don't know what CFA is. \"CFA kya hota hai? CA nahi hai?\" But in finance circles, it's more prestigious than an MBA. Once you're earning well, family concerns disappear.",
        "eligibility": "Bachelor's degree (final year students can register). Valid international passport required for registration. No marks cutoff."
      },
      {
        "id": "cs",
        "name": "Company Secretary (CS)",
        "icon": "⚖️",
        "color": "#654ea3",
        "route": "12th → CSEET → CS Executive → CS Professional",
        "timeline": "4-5 years",
        "difficulty": "High",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Any"
          ],
          "notes": "Needs: 12th Pass"
        },
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks do NOT matter for CS. You just need to pass 12th. CSEET is the entry exam — entirely merit-based. Your CS exam scores are all that matter."
        },
        "steps": [
          {
            "year": "0",
            "title": "CSEET Registration",
            "desc": "Register with ICSI after 12th pass. CS Executive Entrance Test (CSEET) — MCQ based. Pass mark: 50% aggregate + 40% each subject."
          },
          {
            "year": "1-3",
            "title": "CS Executive (2 modules, 8 papers)",
            "desc": "Company Law, Tax Law, Cost & Management Accounting, Economic & Commercial Laws etc. Pass rate: ~12-18%. Can pursue alongside BCom."
          },
          {
            "year": "3-5",
            "title": "CS Professional (3 modules, 9 papers)",
            "desc": "Advanced Company Law, Corporate Governance, Drafting, Secretarial Audit. Pass rate: ~8-12%. Plus 15 months practical training."
          },
          {
            "year": "5",
            "title": "ICSI Membership",
            "desc": "Become Associate Member of ICSI (ACS). Can use \"CS\" title. Certificate of Practice for independent practice."
          }
        ],
        "colleges": [
          "ICSI — sole regulatory body",
          "Online classes from ICSI + private coaching",
          "Can be done alongside any degree"
        ],
        "cost": "₹50K-2 Lakh total (ICSI fees + optional coaching)",
        "salary": {
          "entry": "₹4-6 LPA",
          "mid": "₹8-15 LPA",
          "senior": "₹20-40 LPA",
          "top": "₹60-80 LPA",
          "source": "ICSI Placement data 2023"
        },
        "exams": [
          "CSEET",
          "CS Executive Module I & II",
          "CS Professional Module I, II & III"
        ],
        "pros": [
          "Every listed company MUST have a CS — guaranteed demand",
          "Can combine with CA for powerful dual qualification",
          "Independent practice possible",
          "Lower difficulty than CA"
        ],
        "cons": [
          "Lower starting salary than CA",
          "Job opportunities concentrated in metros",
          "Less brand recognition among general public",
          "Articleship/training stipend is very low"
        ],
        "abroad": {
          "level": "Low",
          "desc": "CS is India-specific under Companies Act. No direct recognition abroad. Combine with LLB for international corporate law career."
        },
        "familyAngle": "\"Company Secretary\" sounds prestigious to families who don't know the details. Respected in corporate circles. Stable, predictable career path — families love the safety aspect.",
        "eligibility": "12th pass from any stream"
      },
      {
        "id": "banking",
        "name": "Banking & Government Jobs",
        "icon": "🏦",
        "color": "#005C97",
        "route": "12th → Graduation (any) → Bank PO / SSC CGL / RBI Grade B prep",
        "timeline": "4-7 years",
        "difficulty": "High",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        },
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "10th and 12th marks DO NOT matter for banking/govt job exams. You just need any bachelor's degree (minimum 60% for RBI Grade B). The exam score is everything. Even a 50% student can crack Bank PO if they prepare well."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Complete Graduation",
            "desc": "Any bachelor's degree from a recognized university. BCom/BA/BSc — doesn't matter which. Maintain minimum % if targeting RBI (60% needed)."
          },
          {
            "year": "3-5",
            "title": "Exam Preparation (1-2 years)",
            "desc": "Self-study or coaching (Oliveboard, Adda247, Unacademy). Practice 5-6 hours daily. Focus: Quantitative Aptitude, Reasoning, English, GK/Banking Awareness."
          },
          {
            "year": "4-5",
            "title": "Prelims → Mains → Interview",
            "desc": "IBPS PO: ~30 Lakh apply, ~5,000 selected. SBI PO: ~20 Lakh apply, ~2,000 selected. Multiple attempts (usually 2-4 attempts to clear)."
          },
          {
            "year": "5-6",
            "title": "Training & Probation",
            "desc": "Join as Probationary Officer. 1-2 years training/probation period. Posted anywhere in India — transfers are common."
          }
        ],
        "colleges": [
          "Any graduation for eligibility",
          "Coaching: Oliveboard, Adda247, Unacademy, Testbook (₹3K-15K/year)"
        ],
        "cost": "₹30K-1.5 Lakh (coaching) + graduation fees",
        "salary": {
          "entry": "₹5.5-8 LPA",
          "mid": "₹12-18 LPA",
          "senior": "₹18-28 LPA",
          "top": "₹35-50 LPA",
          "source": "7th Pay Commission + Bank bipartite settlement data"
        },
        "exams": [
          "IBPS PO/Clerk",
          "SBI PO/Clerk",
          "RBI Grade B",
          "SSC CGL",
          "NABARD Grade A/B"
        ],
        "pros": [
          "Permanent government job — cannot be fired",
          "Pension (old scheme for some; NPS for new)",
          "Perks: subsidized housing, medical",
          "Social respect especially in tier 2/3 cities"
        ],
        "cons": [
          "Extremely competitive — lakhs apply for thousands of seats",
          "Multiple attempts drain years",
          "Mandatory transfers",
          "Starting pay lower than private sector equivalents"
        ],
        "abroad": {
          "level": "Very Low",
          "desc": "Government banking is India-only. Some SBI/BoB foreign postings exist but rare. Career is entirely India-centric."
        },
        "familyAngle": "\"Sarkari naukri lag gayi\" — this is the single most celebrated career outcome in middle-class India. Parents achieve nirvana. Marriage proposals flood in.",
        "eligibility": "Any bachelor's degree from recognized university. Age: 20-30 for most exams. Indian citizenship required."
      },
      {
        "id": "abroad-commerce",
        "name": "Study Abroad (Commerce/Business)",
        "icon": "✈️",
        "color": "#ff9966",
        "route": "12th → BCom/BBA India → IELTS/GMAT → MS/MBA Abroad",
        "timeline": "5-7 years",
        "difficulty": "Medium-High",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Bachelor's degree for most programs"
        },
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks matter for UG abroad applications (top US/UK unis want 85%+). For post-graduation abroad, your graduation GPA (8.0+/10) matters more than 12th marks. GMAT/GRE score is king for MBA abroad."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Indian UG with strong GPA",
            "desc": "BCom/BBA from DU, Christ, Symbiosis etc. Maintain 8.0+ CGPA. Do internships, build resume."
          },
          {
            "year": "3-4",
            "title": "Test Prep + Applications",
            "desc": "IELTS 7.0+ / TOEFL 100+. GMAT 680+ (for MBA). GRE 315+ (for MS). Application essays, recommendation letters."
          },
          {
            "year": "4-6",
            "title": "Study Abroad (1-2 years)",
            "desc": "MS Finance/MBA from target university. Cost: ₹20-80 Lakh depending on country. Part-time work allowed in most countries."
          },
          {
            "year": "6-7",
            "title": "Post-Study Work + Immigration",
            "desc": "Canada: 3-year PGWP. UK: 2-year Graduate visa. USA: F1 OPT (1 year). Apply for PR/work visa."
          }
        ],
        "colleges": [
          "Canada: Rotman, Schulich",
          "USA: Stern, Ross",
          "UK: LBS, Warwick, Cass",
          "Germany: Mannheim, WHU"
        ],
        "cost": "₹20-80 Lakh (tuition + living) depending on country",
        "salary": {
          "entry": "$50-80K USD",
          "mid": "$90-140K",
          "senior": "$150-250K+",
          "top": "$300K+",
          "source": "University employment reports"
        },
        "exams": [
          "IELTS / TOEFL",
          "GMAT (MBA) / GRE (MS)"
        ],
        "pros": [
          "Much higher salaries in foreign currency",
          "Canada/Australia offer PR pathways",
          "Global network",
          "Break out of Indian rat race"
        ],
        "cons": [
          "Investment upfront is high",
          "US H1B visa is a lottery",
          "Cultural adjustment",
          "Loan EMI pressure"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Best ROI: Canada (PR pathway clear). Best salary: USA (but H1B risk). Cheapest: Germany. Fastest: UK."
        },
        "familyAngle": "\"Bahar padh raha hai\" is increasingly respected. But families worry about distance, cost, and \"wapas aayega ya nahi?\"",
        "eligibility": "Bachelor's with good GPA. Strong English scores. Financial proof."
      },
      {
        "id": "entrepreneurship",
        "name": "Entrepreneurship / Startup",
        "icon": "🚀",
        "color": "#f12711",
        "route": "12th → Any Degree → Side Projects → Launch Startup",
        "timeline": "Variable",
        "difficulty": "Unpredictable",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Any"
          ],
          "notes": "Needs: 12th Pass (can start anytime)"
        },
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks are completely irrelevant for entrepreneurship. No investor checks your 12th marksheet."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Learn Fundamentals",
            "desc": "Do BBA/BCom/BTech for structured learning. Read business books, take online courses."
          },
          {
            "year": "2-4",
            "title": "Experiment & Fail",
            "desc": "Start side projects. Freelance. Sell something. Build an audience."
          },
          {
            "year": "3-5",
            "title": "Find Product-Market Fit",
            "desc": "Identify a real problem. Build MVP. Get paying customers."
          },
          {
            "year": "4+",
            "title": "Scale",
            "desc": "Bootstrap or raise money from angels/VCs."
          }
        ],
        "colleges": [
          "Incubators: IIM Bangalore NSRCEL, IIT Bombay SINE",
          "Accelerators: YC, Sequoia Surge"
        ],
        "cost": "₹0-10 Lakh to start",
        "salary": {
          "entry": "₹0-3 LPA",
          "mid": "₹5-20 LPA",
          "senior": "Variable",
          "top": "₹10-1000+ Cr",
          "source": "Startup India data"
        },
        "exams": [
          "No formal exams"
        ],
        "pros": [
          "Freedom",
          "Unlimited earning potential",
          "Startup India benefits"
        ],
        "cons": [
          "90%+ startups fail",
          "Financial instability",
          "Mental health challenges"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Can build globally from India. US O-1 visa for extraordinary ability."
        },
        "familyAngle": "Tier 2/3 families: \"Naukri kyun nahi kar leta?\" Need to prove success to gain acceptance.",
        "eligibility": "Problem-solving ability, resilience."
      },
      {
        "id": "actuarial-science",
        "name": "Actuarial Science",
        "icon": "📐",
        "color": "#1A2980",
        "route": "BCom/BSc Math → ACET Exam → IAI/IFoA Papers → Fellowship",
        "timeline": "5-8 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "Strong 12th Math marks (85%+) help for BSc Math admissions and demonstrate aptitude. ACET exam itself does not consider board marks — purely merit-based."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BSc Mathematics / Statistics",
            "desc": "Build strong foundation in probability, statistics, calculus. ISI/CMI ideal. Can also do BCom alongside."
          },
          {
            "year": "2-3",
            "title": "ACET Exam (Actuarial Common Entrance Test)",
            "desc": "Conducted by IAI (Institute of Actuaries of India). Tests mathematical and statistical aptitude."
          },
          {
            "year": "3-6",
            "title": "IAI / IFoA Papers (13-15 papers)",
            "desc": "Complete Core Technical (CT1-CT8), Core Applications (CA1-CA3), Specialist Technical/Applications. Pass rates: 30-45% per paper."
          },
          {
            "year": "6-8",
            "title": "Fellowship",
            "desc": "Become Fellow of IAI (FIAI). Need 3 years of approved work experience alongside papers."
          }
        ],
        "colleges": [
          "IAI (Institute of Actuaries of India) — sole body",
          "IFoA (UK) papers also accepted",
          "BSc from ISI/CMI/top universities"
        ],
        "cost": "₹2-5 Lakh total (exam fees + study material + UG)",
        "salary": {
          "entry": "₹6-10 LPA",
          "mid": "₹15-30 LPA",
          "senior": "₹40-80 LPA",
          "top": "₹1-2 Cr",
          "source": "IAI salary survey, Insurance company annual reports"
        },
        "exams": [
          "ACET (Actuarial Common Entrance Test)",
          "IAI CT/CA/ST/SA papers",
          "IFoA (UK) equivalent papers"
        ],
        "pros": [
          "One of the highest-paid professions globally",
          "Only ~450 qualified actuaries in India — extreme scarcity = high demand",
          "Insurance industry is booming",
          "Can work globally"
        ],
        "cons": [
          "Takes 5-8 years to fully qualify",
          "Extremely math-heavy — not for average students",
          "Very few people understand what actuaries do",
          "Niche — limited to insurance/pension/risk sectors"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "IFoA (UK) qualification is globally portable. Actuaries in UK/USA earn $100-200K+. One of the easiest finance professions to take abroad."
        },
        "familyAngle": "\"Actuary? Woh kya hota hai?\" — 99% of Indian families have never heard of it. But when they see the salary, all questions stop.",
        "eligibility": "Strong math skills essential. 12th with Math. No specific marks cutoff for ACET.",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Commerce",
            "Science"
          ],
          "notes": "Needs: 12th with Math"
        }
      },
      {
        "id": "forensic-accounting",
        "name": "Forensic Accounting",
        "icon": "🔍",
        "color": "#141E30",
        "route": "BCom → CA/CMA → CFE (Certified Fraud Examiner)",
        "timeline": "5-7 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. CA/CMA qualification and CFE certification are what matter. Investigative mindset matters more than marks."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BCom + CA/CMA Foundation",
            "desc": "Study accounting fundamentals. Start CA or CMA alongside graduation."
          },
          {
            "year": "3-5",
            "title": "Complete CA/CMA",
            "desc": "Professional qualification gives credibility. Forensic accounting builds on top of this."
          },
          {
            "year": "5-6",
            "title": "CFE Certification",
            "desc": "Certified Fraud Examiner from ACFE (USA). 4 sections: Financial Transactions, Legal Elements, Investigation, Fraud Prevention."
          },
          {
            "year": "6+",
            "title": "Practice",
            "desc": "Join Big 4 forensic teams, investigation agencies, or corporate fraud departments."
          }
        ],
        "colleges": [
          "ACFE (Association of Certified Fraud Examiners) — USA",
          "Big 4 forensic divisions: Deloitte, PwC, EY, KPMG",
          "ICAI + specialized courses"
        ],
        "cost": "₹3-6 Lakh (CA + CFE fees combined)",
        "salary": {
          "entry": "₹6-10 LPA",
          "mid": "₹15-25 LPA",
          "senior": "₹30-50 LPA",
          "top": "₹80L-1.5 Cr",
          "source": "Big 4 India salary data, ACFE compensation survey"
        },
        "exams": [
          "CA/CMA exams",
          "CFE (4 sections)",
          "ACFE membership"
        ],
        "pros": [
          "Exciting detective-like work",
          "Growing demand post-SEBI crackdowns",
          "Very niche = less competition",
          "Combines accounting + law + investigation"
        ],
        "cons": [
          "Niche market — limited roles outside Big 4 and large corporates",
          "Need CA/CMA first, then CFE on top",
          "Can involve legal risks",
          "Less known career path"
        ],
        "abroad": {
          "level": "High",
          "desc": "CFE is globally recognized. FBI, SEC, Interpol hire forensic accountants. Big 4 global mobility for forensic specialists."
        },
        "familyAngle": "\"Fraud investigate karta hai? Police mein hai kya?\" — families don't get it. But forensic accountants at Big 4 earn ₹15-50 LPA. Let the paycheck explain.",
        "eligibility": "BCom/CA/CMA background preferred. Analytical mindset essential.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce"
          ],
          "notes": "Needs: BCom/CA"
        }
      },
      {
        "id": "wealth-management",
        "name": "Wealth Management / CFP",
        "icon": "💎",
        "color": "#00c6ff",
        "route": "BCom/BBA → CFP Certification → Wealth Advisory",
        "timeline": "4-5 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks don't matter. CFP certification and client relationship skills are everything."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BCom/BBA from reputed college",
            "desc": "Learn finance, investment, tax basics."
          },
          {
            "year": "3-4",
            "title": "CFP Certification",
            "desc": "FPSB India (Financial Planning Standards Board). 6 modules: Risk, Tax, Investment, Retirement, Estate Planning, Integration."
          },
          {
            "year": "4-5",
            "title": "Build Client Base",
            "desc": "Join wealth management firms (IIFL, Kotak Wealth) or start independent practice. AUM (Assets Under Management) drives income."
          }
        ],
        "colleges": [
          "FPSB India — CFP certification",
          "NISM (National Institute of Securities Markets)",
          "Any college for UG, then certifications"
        ],
        "cost": "₹1-3 Lakh (CFP fees + UG)",
        "salary": {
          "entry": "₹4-7 LPA",
          "mid": "₹10-20 LPA",
          "senior": "₹25-50 LPA",
          "top": "₹1-3 Cr",
          "source": "FPSB India survey, Kotak/IIFL wealth management team salary data"
        },
        "exams": [
          "CFP (6 modules)",
          "NISM certifications (Series V-A, VIII, X-A, X-B)",
          "AMFI certification for MF distribution"
        ],
        "pros": [
          "Relationship-driven — if you're good with people, you'll thrive",
          "Commission + salary model can be very lucrative",
          "Growing HNI population in India",
          "Can work independently as a financial planner"
        ],
        "cons": [
          "Initial years are tough",
          "Sales pressure in banks/wealth firms",
          "Market downturns = unhappy clients = stress",
          "Need SEBI/AMFI registrations for advisory"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "CFP is recognized in 27 countries. Can practice in USA, UK, Singapore with local certifications added."
        },
        "familyAngle": "\"Insurance agent hai kya?\" — wealth management is often confused with selling insurance. But managing ₹100 Cr+ for HNIs is a different world entirely.",
        "eligibility": "BCom/BBA preferred. Strong interpersonal skills essential. No marks cutoff.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "investment-banking",
        "name": "Investment Banking (Front Office)",
        "icon": "🏦",
        "color": "#1F1C2C",
        "route": "Top BCom (SRCC/Stephens) → Top IIM MBA / CFA → IB Analyst",
        "timeline": "5-7 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Matters",
          "twelfth": "Matters",
          "description": "Board marks matter indirectly: you need top marks to get into SRCC/Stephens (12th 97%+), then high marks for IIM selection (10th 80%+, 12th 80%+). IB firms also check academics as a screening filter."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BCom from SRCC / Hindu / Stephens",
            "desc": "12th cutoff: 97-99%+ for top DU colleges. Study finance, economics. Do finance internships from Year 1."
          },
          {
            "year": "3-4",
            "title": "CFA L1 + Work Experience",
            "desc": "Start CFA alongside. Join boutique IB, PE firm for 1-2 years. Build financial modeling skills (WSP/BIWS courses)."
          },
          {
            "year": "4-6",
            "title": "MBA from IIM A/B/C or ISB",
            "desc": "CAT 99.5%ile+ needed. During MBA: network aggressively for IB summer internship. Convert to full-time offer."
          },
          {
            "year": "6-7",
            "title": "IB Analyst",
            "desc": "Join Goldman Sachs, JP Morgan, Morgan Stanley, Kotak IB, Avendus. Work 80-100 hour weeks initially. M&A deal execution."
          }
        ],
        "colleges": [
          "SRCC, Hindu College, St. Stephens (BCom)",
          "IIM A/B/C, ISB (MBA)",
          "Goldman Sachs, JP Morgan, Morgan Stanley, Kotak IB, Avendus"
        ],
        "cost": "₹3-5L (DU) + ₹23-42L (IIM/ISB MBA). Total: ₹26-47 Lakh",
        "salary": {
          "entry": "₹18-30 LPA",
          "mid": "₹40-80 LPA",
          "senior": "₹1-2 Cr",
          "top": "₹3-10 Cr",
          "source": "Wall Street Oasis India threads, LinkedIn salary data"
        },
        "exams": [
          "CUET (for DU), CAT/GMAT (MBA)",
          "CFA L1/L2 (strong advantage)",
          "Financial Modeling certifications"
        ],
        "pros": [
          "Highest-paying finance career from Day 1",
          "Work on billion-dollar M&A deals",
          "Exit opportunities: PE, VC, hedge funds, CFO roles",
          "Intellectually stimulating — every deal is unique"
        ],
        "cons": [
          "80-100 hour work weeks are normal",
          "Extremely competitive — only top 50-100 students from IIM get IB roles",
          "Burnout rate is very high",
          "Need elite pedigree for bulge bracket banks"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "IB experience transfers globally. Transfer to London/Hong Kong/Singapore offices common. GMAT MBA at Wharton/LBS → direct Wall Street entry."
        },
        "familyAngle": "Parents hear \"banking\" and think SBI PO. When they learn it's Goldman Sachs at ₹30 LPA, excitement level changes significantly. But the 100-hour weeks concern them.",
        "eligibility": "Top 0.1% academics. Elite college + MBA. Extraordinary financial skills.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce"
          ],
          "notes": "Needs: Elite degree"
        }
      },
      {
        "id": "supply-chain",
        "name": "Supply Chain Management",
        "icon": "📦",
        "color": "#ffb347",
        "route": "BBA/BCom → MBA in Operations/SCM → Industry",
        "timeline": "5-6 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks matter only for MBA admission (IIM selection considers 10th/12th). For SCM roles, supply chain skills, certifications, and experience matter more."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BBA/BCom",
            "desc": "Study business fundamentals. Take operations management electives."
          },
          {
            "year": "3-5",
            "title": "MBA (Operations/SCM specialization)",
            "desc": "IIM Udaipur, NITIE Mumbai, IIM Bangalore (Operations) are top programs. Amazon, Flipkart, Reliance actively recruit ops MBA grads."
          },
          {
            "year": "5+",
            "title": "SCM Career",
            "desc": "Supply chain analyst → Manager → VP Supply Chain. E-commerce + FMCG are biggest employers."
          }
        ],
        "colleges": [
          "NITIE Mumbai (now IIM Mumbai) — best for operations",
          "IIM Bangalore, Calcutta (ops specialization)",
          "ISB Hyderabad"
        ],
        "cost": "₹5-10L (BBA) + ₹20-28L (MBA)",
        "salary": {
          "entry": "₹10-18 LPA",
          "mid": "₹20-35 LPA",
          "senior": "₹40-70 LPA",
          "top": "₹1-1.5 Cr",
          "source": "NITIE/IIM placement reports, Amazon/Flipkart India pay data"
        },
        "exams": [
          "CAT (for MBA)",
          "APICS CSCP/CPIM certifications",
          "Six Sigma Green/Black Belt"
        ],
        "pros": [
          "E-commerce boom = massive SCM demand",
          "Tangible impact — you move real products to real people",
          "Global career — SCM is universal",
          "Amazon/Flipkart pay ₹15-25 LPA for MBA grads"
        ],
        "cons": [
          "Operations is less glamorous than consulting/finance",
          "Warehouse visits at 5 AM are part of the job",
          "Requires operational mindset",
          "High pressure during festive seasons"
        ],
        "abroad": {
          "level": "High",
          "desc": "SCM professionals move easily globally. Amazon, DHL, Maersk have global mobility programs. CSCP certification helps international placement."
        },
        "familyAngle": "\"Supply chain? Delivery boy manage karta hai?\" — No, you manage the ₹10,000 Cr logistics of Amazon India. Different thing entirely.",
        "eligibility": "Any bachelor's. MBA in Operations preferred.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "digital-marketing",
        "name": "Digital Marketing Strategy",
        "icon": "📱",
        "color": "#ff00cc",
        "route": "BBA/BCom → Google/Meta Certifications → Agency Experience → Lead",
        "timeline": "3-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks are completely irrelevant. Your portfolio, campaign results, and certifications are what employers look at."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Any Degree + Start Learning",
            "desc": "BBA/BCom for business sense. Simultaneously learn: Google Ads, Facebook Ads, SEO, Content Marketing, Analytics."
          },
          {
            "year": "2-3",
            "title": "Build Portfolio",
            "desc": "Run campaigns for local businesses, freelance. Prove ROI with real numbers."
          },
          {
            "year": "3-4",
            "title": "Agency or In-house Role",
            "desc": "Join digital agencies or brand marketing teams (D2C startups love digital marketers)."
          },
          {
            "year": "4-5",
            "title": "Specialize & Lead",
            "desc": "Performance marketing, growth hacking, content strategy. Lead a team or go freelance."
          }
        ],
        "colleges": [
          "No specific college matters",
          "Google Skillshop (free), Meta Blueprint (free)",
          "MICA Ahmedabad (PG diploma)"
        ],
        "cost": "₹0-50K for certifications + UG fees",
        "salary": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-18 LPA",
          "senior": "₹20-40 LPA",
          "top": "₹50L-1Cr+",
          "source": "LinkedIn Salary Insights India"
        },
        "exams": [
          "Google Ads Certification (free)",
          "Meta Blueprint (free)",
          "HubSpot Inbound Marketing (free)"
        ],
        "pros": [
          "Most accessible high-paying career",
          "Freelancing potential is massive",
          "Every business needs digital marketing",
          "Fast career growth"
        ],
        "cons": [
          "Field changes weekly",
          "Low entry barrier = lots of competition at junior level",
          "Agency life can be stressful"
        ],
        "abroad": {
          "level": "High",
          "desc": "Digital marketing is remote-friendly. Many Indians work for US/UK clients from India."
        },
        "familyAngle": "\"Marketing? Woh toh sales hai na?\" — digital marketing is data-driven strategy, not door-to-door selling.",
        "eligibility": "Literally anyone. 12th pass is enough. Your skills and portfolio are your resume.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Any"
          ],
          "notes": "Needs: 12th Pass"
        }
      },
      {
        "id": "fintech",
        "name": "FinTech Management",
        "icon": "💳",
        "color": "#093028",
        "route": "BCom/BBA → Tech + Finance Certifications → Startup/Corporate",
        "timeline": "4-5 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. FinTech values people who understand both technology and finance."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BCom/BBA + Self-learn Tech",
            "desc": "Learn basics of coding (Python), APIs, how payment systems work. Understand UPI, blockchain."
          },
          {
            "year": "3-4",
            "title": "Specialize",
            "desc": "Blockchain/Web3, digital payments, lending platforms. Get certified: CFA L1 + basic coding."
          },
          {
            "year": "4-5",
            "title": "Join FinTech",
            "desc": "Paytm, PhonePe, Razorpay, CRED. Roles: product, ops, compliance, growth."
          }
        ],
        "colleges": [
          "No specific college",
          "Coursera (FinTech specialization)",
          "IIM Calcutta FinTech program (executive)"
        ],
        "cost": "₹2-5 Lakh",
        "salary": {
          "entry": "₹5-10 LPA",
          "mid": "₹12-25 LPA",
          "senior": "₹30-60 LPA",
          "top": "₹1-3 Cr",
          "source": "Tracxn India FinTech data, startup salary benchmarks"
        },
        "exams": [
          "No mandatory exams",
          "CFA L1 helpful",
          "AWS/blockchain certifications add value"
        ],
        "pros": [
          "India is world's #1 FinTech market",
          "Massive scale",
          "Startups offer ESOPs",
          "Fast-paced environment"
        ],
        "cons": [
          "Startup risk",
          "Regulatory uncertainty",
          "Work-life balance can suffer",
          "Constant upskilling needed"
        ],
        "abroad": {
          "level": "High",
          "desc": "FinTech skills transfer globally. Singapore, UK, Dubai are FinTech hubs."
        },
        "familyAngle": "\"App pe kaam karta hai?\" — families understand Paytm but not the tech behind it. Once you say \"I work at Razorpay, salary ₹20 LPA,\" understanding improves magically.",
        "eligibility": "Finance background + tech understanding. Or tech background + finance interest.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce",
            "Science"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "risk-mgmt",
        "name": "Risk Management (FRM)",
        "icon": "⚡",
        "color": "#ff4b1f",
        "route": "BCom/BSc → FRM Part I → Part II → Risk Analyst Role",
        "timeline": "4-5 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks don't matter for FRM. Strong quantitative skills essential."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Bachelor's Degree",
            "desc": "BCom, BSc Math, or BBA. Build strong stats/quant foundation."
          },
          {
            "year": "3-4",
            "title": "FRM Part I",
            "desc": "100 MCQs, 4 hours. Quant analysis, financial markets, valuation, risk models."
          },
          {
            "year": "4-5",
            "title": "FRM Part II + 2 yrs work exp",
            "desc": "Market risk, credit risk, operational risk. Need 2 years of relevant work experience."
          }
        ],
        "colleges": [
          "GARP (Global Association of Risk Professionals) — sole body",
          "No college needed — self-study"
        ],
        "cost": "₹1.5-3 Lakh (GARP fees)",
        "salary": {
          "entry": "₹6-10 LPA",
          "mid": "₹15-28 LPA",
          "senior": "₹35-60 LPA",
          "top": "₹80L-1.5 Cr",
          "source": "GARP salary survey 2023, banking sector salary data"
        },
        "exams": [
          "FRM Part I",
          "FRM Part II"
        ],
        "pros": [
          "Every bank MUST have risk teams",
          "Globally portable credential",
          "Less competitive than CFA",
          "Banks, FinTechs all need risk professionals"
        ],
        "cons": [
          "Very quantitative — need strong math",
          "Niche compared to CFA",
          "Less recognized outside banking/finance"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "FRM is the global gold standard in risk. London, Singapore, NY actively seek FRM-certified professionals."
        },
        "familyAngle": "\"Risk management? Insurance mein hai kya?\" — explaining what CRO does at a bank is a challenge at family gatherings.",
        "eligibility": "No formal prerequisites. Strong quantitative aptitude needed.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce",
            "Science"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "sports-management",
        "name": "Sports Management",
        "icon": "🏏",
        "color": "#00b09b",
        "route": "BBA → MBA Sports Management / Diploma → IPL/ISL/BCCI/Agency",
        "timeline": "4-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Passion for sports business, networking, and internship experience matter far more."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BBA / BCom",
            "desc": "Study business, marketing, management fundamentals."
          },
          {
            "year": "3-5",
            "title": "MBA Sports Management",
            "desc": "ISBR Bangalore, MIT-WPU Pune. Or globally: George Washington, Loughborough, FIFA Master."
          },
          {
            "year": "4+",
            "title": "Career",
            "desc": "IPL team management, BCCI operations, sports marketing agencies."
          }
        ],
        "colleges": [
          "MIT-WPU Pune, ISBR Bangalore",
          "Abroad: FIFA Master, Loughborough"
        ],
        "cost": "₹5-15 Lakh",
        "salary": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-18 LPA",
          "senior": "₹20-40 LPA",
          "top": "₹50L-2 Cr",
          "source": "IPL franchise hiring data"
        },
        "exams": [
          "No specific entrance",
          "CAT/MAT for MBA programs"
        ],
        "pros": [
          "IPL is a $10+ billion ecosystem",
          "Sports industry booming",
          "Passion + career alignment",
          "Rewarding"
        ],
        "cons": [
          "Niche field",
          "Need personal connections",
          "Seasonal nature of sports",
          "Many entry roles are low-paying"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "FIFA, UEFA, IOC roles. Sports management in UK (Premier League), USA (NBA/NFL)."
        },
        "familyAngle": "\"Sports mein career? Khiladi nahi hai toh kya karega?\" — you don't play, you manage the business BEHIND the game.",
        "eligibility": "Any bachelor's. Passion for sports business essential.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "event-management",
        "name": "Event Management",
        "icon": "🎪",
        "color": "#f12711",
        "route": "BBA in Event Mgt / BCom + Diploma → Event Coordinator → Own Agency",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks don't matter. High energy, networking skills, and ability to handle chaos are what define success."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BBA Event Management / Diploma",
            "desc": "Study event planning, vendor management, logistics."
          },
          {
            "year": "2-4",
            "title": "Work in Events",
            "desc": "Handle corporate events, weddings, concerts."
          },
          {
            "year": "4+",
            "title": "Own Agency or Specialize",
            "desc": "Start own event agency. Specialize in destination weddings, corporate conferences."
          }
        ],
        "colleges": [
          "NIEM Ahmedabad",
          "EMDI Institute",
          "IHM"
        ],
        "cost": "₹2-6 Lakh",
        "salary": {
          "entry": "₹2.5-5 LPA",
          "mid": "₹6-15 LPA",
          "senior": "₹18-35 LPA",
          "top": "₹50L-2 Cr",
          "source": "WedMeGood industry data, Wizcraft/Percept salary info"
        },
        "exams": [
          "No specific entrance exams"
        ],
        "pros": [
          "Indian wedding industry is a massive market",
          "Every day is different",
          "Networking with VIPs",
          "Own agency can be very profitable"
        ],
        "cons": [
          "Zero work-life balance during event season",
          "Last-minute disasters are the norm",
          "Physical demands",
          "Payment delays common"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Destination wedding planners work globally."
        },
        "familyAngle": "\"Party planner? Ye koi career hai?\" — when your agency bills ₹50 Lakh for a destination wedding, it's definitely a career.",
        "eligibility": "Any background. Social skills and high energy mandatory.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Any"
          ],
          "notes": "Needs: 12th Pass"
        }
      },
      {
        "id": "esg-consulting",
        "name": "ESG & Sustainability Consulting",
        "icon": "🌱",
        "color": "#1d976c",
        "route": "BCom/BA → MA Sustainability / MBA → ESG Role at Big 4",
        "timeline": "5-6 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Understanding of sustainability frameworks, regulation knowledge, and passion for climate matter more."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Bachelor's",
            "desc": "BCom, BA Economics, BBA, BSc. Start reading about ESG, climate finance."
          },
          {
            "year": "3-5",
            "title": "Master's / MBA + Specialize",
            "desc": "MBA with sustainability electives, MA Environmental Economics."
          },
          {
            "year": "5+",
            "title": "ESG Career",
            "desc": "Big 4 ESG teams, corporate sustainability roles, impact investing."
          }
        ],
        "colleges": [
          "TERI School, Delhi",
          "IIM Lucknow",
          "Abroad: Cambridge, Yale"
        ],
        "cost": "₹5-20L",
        "salary": {
          "entry": "₹5-10 LPA",
          "mid": "₹12-25 LPA",
          "senior": "₹30-55 LPA",
          "top": "₹70L-1.5 Cr",
          "source": "SEBI BRSR mandate data, Big 4 India ESG team salary data"
        },
        "exams": [
          "CFA ESG Investing Certificate",
          "MBA/MA entrances"
        ],
        "pros": [
          "SEBI mandated BRSR reporting — ESG is now legally required",
          "Climate change = permanent career demand",
          "Meaningful work",
          "Global career"
        ],
        "cons": [
          "Relatively new field",
          "Greenwashing is common",
          "Requires understanding of both finance and environment",
          "Can feel slow"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "ESG is a global mandate. London, Brussels, Singapore are ESG hubs."
        },
        "familyAngle": "\"Sustainability mein kya karega?\" — when SEBI mandates ESG reporting and companies pay ₹50K/day for ESG consultants, families start paying attention.",
        "eligibility": "Any background. Environmental science or finance UG preferred.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "real-estate",
        "name": "Real Estate Management",
        "icon": "🏗️",
        "color": "#302b63",
        "route": "BBA/BCom → RICS Certification / MBA Real Estate → Developer/Advisory",
        "timeline": "4-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks don't matter. Market knowledge, RERA understanding, negotiation skills, and RICS/MBA credentials are what count."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BBA/BCom",
            "desc": "Study business fundamentals. Understand real estate markets informally."
          },
          {
            "year": "3-5",
            "title": "RICS or MBA Real Estate",
            "desc": "RICS accreditation. Or MBA Real Estate from RICS School. RERA certification."
          },
          {
            "year": "5+",
            "title": "Career",
            "desc": "Property advisory (JLL, CBRE), real estate private equity, developer firms."
          }
        ],
        "colleges": [
          "RICS School of Built Environment",
          "CEPT University",
          "SPA Delhi"
        ],
        "cost": "₹5-15 Lakh",
        "salary": {
          "entry": "₹4-8 LPA",
          "mid": "₹10-22 LPA",
          "senior": "₹25-50 LPA",
          "top": "₹80L-5 Cr",
          "source": "JLL/CBRE India salary data, RICS salary survey"
        },
        "exams": [
          "RICS APC",
          "RERA Agent Registration exam",
          "MBA entrances"
        ],
        "pros": [
          "India's real estate market: $300 billion+ and growing",
          "RERA brought transparency",
          "Own deals/development can generate massive returns",
          "Combines finance, law, design"
        ],
        "cons": [
          "Cyclical industry",
          "Many players are unregulated",
          "High-pressure sales environment",
          "Capital intensive to start own development"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "RICS qualification is globally recognized across 140+ countries. Dubai, Singapore, UK."
        },
        "familyAngle": "\"Property dealer banega?\" — modern real estate management is JLL consultants analyzing ₹1000 Cr portfolios with financial models. Not the local broker uncle.",
        "eligibility": "Any bachelor's. RICS or domain MBA preferred.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "brand-management",
        "name": "Brand Management",
        "icon": "🎯",
        "color": "#ED213A",
        "route": "BBA/BCom → MBA Marketing (IIM) → FMCG Brand Manager",
        "timeline": "5-6 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Matters",
          "twelfth": "Matters",
          "description": "10th/12th marks matter because IIM selection heavily weighs academics. You need strong academics to get into top MBA programs."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BCom/BBA from top college",
            "desc": "Strong academics + internships."
          },
          {
            "year": "3-5",
            "title": "MBA Marketing (IIM/XLRI/FMS)",
            "desc": "CAT 98%ile+. Specialize in Marketing. Summer internship at HUL/P&G/Nestlé."
          },
          {
            "year": "5-6",
            "title": "Brand Manager",
            "desc": "ABM → Brand Manager → Category Head → CMO. Manage ₹100-500 Cr brands."
          }
        ],
        "colleges": [
          "IIM A/B/C/L",
          "XLRI, FMS Delhi",
          "MICA Ahmedabad"
        ],
        "cost": "₹3-8L (UG) + ₹20-30L (MBA)",
        "salary": {
          "entry": "₹16-25 LPA",
          "mid": "₹28-45 LPA",
          "senior": "₹50-80 LPA",
          "top": "₹1-3 Cr",
          "source": "IIM placement reports, HUL/P&G annual reports"
        },
        "exams": [
          "CAT",
          "XAT",
          "GMAT"
        ],
        "pros": [
          "One of the most prestigious MBA career tracks",
          "Manage brands worth ₹100-1000 Cr",
          "Creative + analytical",
          "HUL/P&G alumni network is extremely powerful"
        ],
        "cons": [
          "Need IIM pedigree",
          "FMCG brand management is highly competitive",
          "P&L responsibility from Day 1",
          "Long hours during launches"
        ],
        "abroad": {
          "level": "High",
          "desc": "HUL/P&G are global companies with international rotations. Brand management skills transfer universally."
        },
        "familyAngle": "\"Marketing mein hai? Sales toh nahi karna padta?\" — brand management is strategy, not field sales. Family prestige: IIM + HUL is a powerful combination.",
        "eligibility": "Strong academics. CAT 98%ile+. Creative thinking.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "taxation",
        "name": "Taxation Consulting",
        "icon": "📑",
        "color": "#16A085",
        "route": "BCom → Diploma in Taxation / CA / LLB → Tax Advisory",
        "timeline": "3-5 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks don't matter. Knowledge of Income Tax Act, GST law, case law are what matter."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BCom + CA/tax courses",
            "desc": "Start CA alongside BCom. Or focus on BCom + Diploma in Taxation."
          },
          {
            "year": "3-5",
            "title": "Specialize in Tax",
            "desc": "CA or LLB (tax law). Join Big 4 tax teams or tax litigation firms. Master GST, Income Tax."
          },
          {
            "year": "5+",
            "title": "Practice",
            "desc": "Independent tax consultant, Big 4 tax partner track, corporate tax head at MNCs."
          }
        ],
        "colleges": [
          "ICAI (for CA)",
          "NALSAR, NLU Delhi (tax law)",
          "KPMG/EY/Deloitte/PwC tax teams"
        ],
        "cost": "₹1-4 Lakh (CA route) / ₹5-10L (law route)",
        "salary": {
          "entry": "₹4-8 LPA",
          "mid": "₹10-22 LPA",
          "senior": "₹25-50 LPA",
          "top": "₹70L-2 Cr",
          "source": "Big 4 India salary data, ICAI member survey"
        },
        "exams": [
          "CA exams",
          "CLAT",
          "ADIT"
        ],
        "pros": [
          "Everyone pays taxes — permanent demand",
          "Tax-saving ability makes you valuable",
          "Own practice can be extremely profitable",
          "GST implementation created massive demand"
        ],
        "cons": [
          "Tax laws change frequently",
          "Tax season workload is brutal",
          "Documentation and compliance work can be tedious",
          "Interpretation disputes with tax authorities common"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "International taxation skills are portable. Transfer pricing professionals move to global offices."
        },
        "familyAngle": "\"Tax wala? CA hai na?\" — taxation is often seen as a subset of CA. But specialist tax consultants charge ₹50L+ in fees.",
        "eligibility": "BCom/CA/LLB background. Strong memory for laws and rules.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "pr-comms",
        "name": "Public Relations (PR)",
        "icon": "📢",
        "color": "#f2994a",
        "route": "BBA/BCom → PG Diploma in PR / Mass Comm → Agency / Corporate",
        "timeline": "3-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Communication skills, media contacts, and crisis management ability are what drive PR careers."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BBA/BCom + Mass Comm basics",
            "desc": "Study business + communication. Intern at PR agencies from Year 2."
          },
          {
            "year": "3-4",
            "title": "PG Diploma in PR / MICA",
            "desc": "Symbiosis, MICA Ahmedabad, Xavier's Mass Comm. Learn media relations, corporate communications."
          },
          {
            "year": "4+",
            "title": "Career",
            "desc": "PR agencies, corporate communications at MNCs, political PR consulting."
          }
        ],
        "colleges": [
          "MICA Ahmedabad",
          "Symbiosis",
          "Xavier's Institute of Communications Mumbai"
        ],
        "cost": "₹3-10 Lakh",
        "salary": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-18 LPA",
          "senior": "₹22-40 LPA",
          "top": "₹50L-1.5 Cr",
          "source": "Edelman/Adfactors salary data, PRCI surveys"
        },
        "exams": [
          "MICA PGDM-C entrance",
          "Symbiosis SET"
        ],
        "pros": [
          "Every brand needs PR",
          "Exciting work: media events, crisis management",
          "Strong networking opportunities",
          "Can start own PR consultancy"
        ],
        "cons": [
          "24/7 availability expected",
          "Agency life can be high-pressure",
          "Measuring PR ROI is always challenging",
          "Media landscape changes rapidly"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Global PR agencies have international offices. PR skills transfer globally but cultural context matters."
        },
        "familyAngle": "\"PR mein hai? Marketing hi toh hai na?\" — PR is NOT marketing. PR manages reputation, marketing sells products.",
        "eligibility": "Any bachelor's. Strong communication skills essential.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "market-research",
        "name": "Market Research Analyst",
        "icon": "📊",
        "color": "#3A1C71",
        "route": "BCom/BSc Stats → Data Analysis Skills → Research Firm",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. SQL, Excel, SPSS/R proficiency, and analytical mindset are what employers want."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BCom/BSc Statistics/Economics",
            "desc": "Learn statistics, data analysis, Excel, SQL. Study consumer behavior."
          },
          {
            "year": "2-3",
            "title": "Learn Tools",
            "desc": "SPSS, R, Python, Tableau, Power BI. Get certified in Google Analytics."
          },
          {
            "year": "3-4",
            "title": "Career",
            "desc": "Join research firms: Nielsen, Kantar, IPSOS. Or in-house consumer insights at FMCG/tech companies."
          }
        ],
        "colleges": [
          "ISI Kolkata",
          "Any college + self-learn analytics tools"
        ],
        "cost": "₹2-5 Lakh",
        "salary": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-15 LPA",
          "senior": "₹18-30 LPA",
          "top": "₹40-60 LPA",
          "source": "Nielsen/Kantar India salary data"
        },
        "exams": [
          "Google Analytics Certification",
          "SQL/Python certifications"
        ],
        "pros": [
          "Data-driven decision making is core to every business",
          "Diverse industries",
          "Analytical skills are highly transferable",
          "Can transition to data science"
        ],
        "cons": [
          "Can be repetitive",
          "Research firms sometimes undervalue analyst roles",
          "Clients may ignore findings",
          "Not as \"glamorous\" as consulting"
        ],
        "abroad": {
          "level": "High",
          "desc": "Nielsen, Kantar, IPSOS are global. Data analytics roles are visa-friendly."
        },
        "familyAngle": "\"Research? PhD karega?\" — market research is not academic research. You figure out why people buy Cadbury over Nestlé.",
        "eligibility": "Statistics/Math/Economics background preferred. Strong Excel/SQL skills.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "ecommerce-ops",
        "name": "E-commerce Operations",
        "icon": "🛒",
        "color": "#ff7e5f",
        "route": "BBA/BCom → E-commerce Platform Experience → Category Manager",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. E-commerce companies hire based on analytical skills, data interpretation, and consumer psychology."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BBA/BCom",
            "desc": "Study business, marketing, supply chain. Learn Excel, data analysis, basic SQL."
          },
          {
            "year": "2-3",
            "title": "E-com Entry",
            "desc": "Join Amazon, Flipkart, Meesho, Myntra as catalog exec. Learn seller management, pricing."
          },
          {
            "year": "3-4",
            "title": "Scale Up",
            "desc": "Category manager → senior category head. Or: start own D2C brand on Amazon/Flipkart."
          }
        ],
        "colleges": [
          "No specific college",
          "Any business degree + analytical skills"
        ],
        "cost": "₹2-5 Lakh",
        "salary": {
          "entry": "₹4-8 LPA",
          "mid": "₹10-22 LPA",
          "senior": "₹25-45 LPA",
          "top": "₹60L-1.5 Cr",
          "source": "Amazon/Flipkart India salary data"
        },
        "exams": [
          "SQL/Analytics certifications helpful"
        ],
        "pros": [
          "India's e-commerce market: $100 billion+",
          "Fast career growth",
          "Own D2C brand opportunity",
          "Data-heavy role"
        ],
        "cons": [
          "Intense KPI pressure",
          "Long hours during sale events",
          "High competition for limited management positions",
          "Logistics exposure needed"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Amazon, Shopify, eBay are global. E-commerce skills transfer to any market."
        },
        "familyAngle": "\"Online shopping wale mein kaam karega?\" — Amazon India is a $30 billion business.",
        "eligibility": "Any bachelor's. Analytical mindset. Data comfort essential.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "venture-capitalist",
        "name": "Venture Capitalist (VC/PE)",
        "icon": "🚀",
        "color": "#ff6b6b",
        "route": "BCom/MBA → IB/PE Experience → VC Fund",
        "timeline": "6-8 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Matters",
          "twelfth": "Matters",
          "description": "Need top college credentials to enter IB/PE first. Then VC firms hire from proven performers."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Elite Education",
            "desc": "SRCC/Stephens (BCom) or IIM MBA."
          },
          {
            "year": "3-6",
            "title": "IB/PE/Consulting",
            "desc": "Minimum 3 years at Goldman Sachs, Sequoia India, Accel Partners."
          },
          {
            "year": "6+",
            "title": "VC Associate",
            "desc": "Analyze startups, lead investments, board positions."
          }
        ],
        "colleges": [
          "Top IB firms: Goldman, JP Morgan, Kotak",
          "Tier 1 PE: Blackstone, KKR, Apollo",
          "Top VC: Sequoia, Accel, Founders Factory"
        ],
        "cost": "₹26-47 Lakh (MBA path)",
        "salary": {
          "entry": "₹15-25 LPA",
          "mid": "₹35-75 LPA",
          "senior": "₹1-3 Cr",
          "top": "₹5-20 Cr",
          "source": "PitchBook India VC salary data"
        },
        "exams": [
          "CAT/GMAT (MBA)",
          "CFA L1 helpful"
        ],
        "pros": [
          "Massive upside through fund returns",
          "Work on world-changing startups",
          "Build legendary networks"
        ],
        "cons": [
          "Extremely competitive",
          "90% of startups fail",
          "Years before significant compensation"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Sequoia/Accel have global operations. Transfer to Silicon Valley possible."
        },
        "familyAngle": "When you tell family you work at Sequoia Capital making ₹1 Cr+ in carry, conversations end.",
        "eligibility": "IB/PE background essential. Top educational pedigree.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce",
            "Science"
          ],
          "notes": "Needs: MBA + IB/PE experience"
        }
      },
      {
        "id": "management-consultant",
        "name": "Management Consultant (MBB)",
        "icon": "📈",
        "color": "#4c63ff",
        "route": "BCom/Engineering → IIM MBA → McKinsey/BCG/Bain",
        "timeline": "5-6 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Matters",
          "twelfth": "Matters",
          "description": "Top tier consulting firms filter on academics. Need 85%+ throughout."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "Strong UG + Work Experience",
            "desc": "Any top college. 1-2 years work exp. Prepare for CAT."
          },
          {
            "year": "4-6",
            "title": "IIM MBA (Top 5)",
            "desc": "CAT 99.5%ile+. Focus on consulting specialization."
          },
          {
            "year": "6+",
            "title": "Consultant → Manager → Partner",
            "desc": "Client projects, team leadership, practice building."
          }
        ],
        "colleges": [
          "McKinsey: Typically IIM A/B/C only",
          "BCG: IIM A/B/C + XLRI/ISB",
          "Bain: IIM Bangalore, IIM Calcutta"
        ],
        "cost": "₹20-30 Lakh (MBA)",
        "salary": {
          "entry": "₹18-28 LPA",
          "mid": "₹45-90 LPA",
          "senior": "₹1-2 Cr",
          "top": "₹3-10 Cr",
          "source": "Management consulting exit salary data 2024"
        },
        "exams": [
          "CAT 99.5%ile"
        ],
        "pros": [
          "Prestige unmatched in India",
          "Work on ₹100+ Cr transformation projects",
          "Exit opportunities: PE, CEO roles, startups"
        ],
        "cons": [
          "70-80 hour work weeks",
          "Only top 50-100 MBA grads get offers",
          "Travel is relentless",
          "Burnout rate is extreme"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "McKinsey/BCG/Bain are global. Rotation to NY/London offices common."
        },
        "familyAngle": "\"McKinsey mein kaam karta hai\" is the pinnacle of professional achievement in Indian upper-middle class circles.",
        "eligibility": "Top academics, IIM pedigree, communication excellence.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: IIM MBA from top tiers"
        }
      },
      {
        "id": "equity-research",
        "name": "Equity Research Analyst",
        "icon": "📊",
        "color": "#2e7d32",
        "route": "BCom/BBA → Equity Research Internship → Analyst",
        "timeline": "3-4 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Equity research values stock picking ability and financial modeling. Tests matter more than marks."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Strong Fundamentals",
            "desc": "BCom/BBA. Learn financial modeling, excel, valuation."
          },
          {
            "year": "2-3",
            "title": "Internship at Brokerage",
            "desc": "Nomura, Goldman Sachs, Kotak, ICICI Securities. Write stock reports."
          },
          {
            "year": "3+",
            "title": "Equity Research Analyst",
            "desc": "Cover sectors, write recommendation reports, appear on TV."
          }
        ],
        "colleges": [
          "No specific college",
          "Self-learn financial modeling (WSP, Aicen courses)"
        ],
        "cost": "₹2-5 Lakh",
        "salary": {
          "entry": "₹5-10 LPA",
          "mid": "₹15-30 LPA",
          "senior": "₹30-60 LPA",
          "top": "₹80L-1.5 Cr",
          "source": "Nomura/Goldman Sachs India salary data"
        },
        "exams": [
          "CFA L1/L2 highly beneficial",
          "FRM helpful"
        ],
        "pros": [
          "Stock market fascination becomes career",
          "Intellectual stimulation",
          "Can start own fund later",
          "Media presence possible"
        ],
        "cons": [
          "Wrong calls can be public failures",
          "Pressure to beat benchmarks",
          "Market volatility affects bonus"
        ],
        "abroad": {
          "level": "High",
          "desc": "CFA credential opens Wall Street analyst roles."
        },
        "familyAngle": "\"Stock market analyst hai? Gambling nahi?\" — actually, it's sophisticated analysis backed by deep financial knowledge.",
        "eligibility": "Strong financial modeling skills, quantitative mind, market understanding.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce",
            "Science"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "portfolio-manager",
        "name": "Portfolio Manager",
        "icon": "💼",
        "color": "#1565c0",
        "route": "BCom/MBA → Fund Houses → PM (10+ yrs experience)",
        "timeline": "10-12 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Performance in markets is everything."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "Build Knowledge",
            "desc": "BCom/MBA. Learn investments, markets, risk management."
          },
          {
            "year": "4-8",
            "title": "Fund Houses",
            "desc": "ICICI Prudential, HDFC Mutual Fund, Kotak. Start as analyst."
          },
          {
            "year": "8-10+",
            "title": "Portfolio Manager",
            "desc": "Manage ₹1000+ Cr AUM. Make daily allocation decisions."
          }
        ],
        "colleges": [
          "ICICI Prudential, HDFC MF, Kotak, UTI"
        ],
        "cost": "₹3-10 Lakh",
        "salary": {
          "entry": "₹6-12 LPA",
          "mid": "₹20-40 LPA",
          "senior": "₹50-100 LPA",
          "top": "₹1-3 Cr",
          "source": "Mutual fund annual reports, AMC data"
        },
        "exams": [
          "CFA L1/L2/L3 (strongly recommended)",
          "NISM certifications"
        ],
        "pros": [
          "Manage massive portfolios",
          "Performance-based bonuses are substantial",
          "Can start own fund",
          "Respected in finance community"
        ],
        "cons": [
          "Long career path (10+ years to PM)",
          "Market downturns hurt your reputation",
          "Constant pressure to beat benchmarks"
        ],
        "abroad": {
          "level": "High",
          "desc": "Asset management is global. Work for JP Morgan, Fidelity globally."
        },
        "familyAngle": "When your 10-year portfolio returns beat Sensex by 200%, family treats you like a god.",
        "eligibility": "Strong financial acumen, CFA certification, proven track record.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce",
            "Science"
          ],
          "notes": "Needs: 10+ years experience"
        }
      },
      {
        "id": "cfo",
        "name": "Chief Financial Officer (CFO)",
        "icon": "👔",
        "color": "#d32f2f",
        "route": "CA/CMA → Financial Analyst → Controller → CFO (15+ yrs)",
        "timeline": "15-20 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. CA/CMA qualification + decades of experience required."
        },
        "steps": [
          {
            "year": "1-5",
            "title": "CA/CMA Qualification",
            "desc": "Build financial expertise foundation."
          },
          {
            "year": "5-10",
            "title": "Big 4 / Corporate Finance",
            "desc": "Controller roles, financial planning, mergers."
          },
          {
            "year": "10-15",
            "title": "Senior Finance Leadership",
            "desc": "VP Finance, Chief Accounting Officer."
          },
          {
            "year": "15+",
            "title": "CFO",
            "desc": "Lead entire finance function. Board member."
          }
        ],
        "colleges": [
          "Big 4: Deloitte, PwC, EY, KPMG",
          "Fortune 500 companies"
        ],
        "cost": "₹1-4 Lakh (CA)",
        "salary": {
          "entry": "₹10-20 LPA",
          "mid": "₹40-80 LPA",
          "senior": "₹1-2 Cr",
          "top": "₹2-5 Cr",
          "source": "CEO/CFO compensation surveys"
        },
        "exams": [
          "CA qualification mandatory"
        ],
        "pros": [
          "Board-level strategic decisions",
          "Manage entire capital structure",
          "Executive compensation packages",
          "Ultimate finance career"
        ],
        "cons": [
          "Decades of work needed",
          "Extreme responsibility",
          "Board pressure during downturns"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "CA qualification + global experience = CFO roles at multinational HQs."
        },
        "familyAngle": "When your child becomes CFO of a Fortune 500 company, that's the ultimate Indian parenting achievement.",
        "eligibility": "CA/CMA + 15+ years of progressive finance leadership.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Commerce"
          ],
          "notes": "Needs: CA + 15+ years"
        }
      },
      {
        "id": "quantitative-analyst",
        "name": "Quantitative Analyst (Quants)",
        "icon": "🔢",
        "color": "#7b1fa2",
        "route": "BTech/BSc Math → Quant Internship → Trading/Fund",
        "timeline": "3-4 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Matters",
          "twelfth": "Matters",
          "description": "Top-tier quants firms (Goldman, Jane Street) heavily filter on math prowess. 90%+ in 12th math expected."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Strong Math/Physics Background",
            "desc": "BTech (top college) or BSc Math. Learn probability, statistics, coding."
          },
          {
            "year": "2-3",
            "title": "Learn Algorithmic Trading",
            "desc": "Python, C++, machine learning for markets."
          },
          {
            "year": "3+",
            "title": "Quant Trader / Developer",
            "desc": "Goldman Sachs, Jane Street, Citadel, Two Sigma."
          }
        ],
        "colleges": [
          "Jane Street looks for: IIT toppers, CMI, ISI",
          "Goldman Sachs: Top 20 engineering colleges",
          "Citadel: Any top tier with strong math"
        ],
        "cost": "₹8-12 Lakh (engineering)",
        "salary": {
          "entry": "₹20-40 LPA",
          "mid": "₹50-120 LPA",
          "senior": "₹1-3 Cr",
          "top": "₹5-15 Cr",
          "source": "Jane Street/Goldman Sachs quant salary"
        },
        "exams": [
          "Top coding interviews",
          "Probability/statistics interview round"
        ],
        "pros": [
          "Highest-paid tech roles globally",
          "Work on cutting-edge math/AI",
          "Autonomy in trading strategies",
          "Massive bonus potential"
        ],
        "cons": [
          "Insanely difficult entrance",
          "High stress trading environment",
          "Can lose massive amounts in bad markets",
          "Need PhD-level math understanding"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Quants from India top the global rankings at Jane Street, Citadel. Direct access to trading floors in NYC."
        },
        "familyAngle": "\"Ganit se shaadi ki\" — when your quant child is earning ₹5 Cr at Jane Street, families don't ask questions.",
        "eligibility": "Exceptional math skills. IIT/top college. Coding expertise.",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "12th with Math",
          "streams": [
            "Science-PCM"
          ],
          "notes": "Needs: 12th PCM from top school"
        }
      }
    ]
  },
  "it": {
    "id": "it",
    "name": "Information Technology & AI",
    "icon": "💻",
    "color": "#00897b",
    "tagline": "Software, AI, Data Science & Cloud",
    "description": "For students who love coding, solving tech problems, and building the future.",
    "preview": [
      "AI/ML Engineer",
      "Data Scientist",
      "Full Stack Developer",
      "Cloud Architect"
    ],
    "paths": [
      {
        "id": "ai-ml-engineer",
        "name": "AI/ML Engineer",
        "icon": "🤖",
        "color": "#1a237e",
        "route": "BTech CS → ML/AI Specialization → Tech Companies",
        "timeline": "4-5 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Coding projects and ML portfolio are what matter."
        },
        "steps": [
          {
            "year": "1-2",
            "title": "Strong DSA & Math",
            "desc": "Data structures, algorithms, linear algebra, probability, calculus."
          },
          {
            "year": "2-3",
            "title": "ML/Deep Learning",
            "desc": "Learn TensorFlow, PyTorch, LLMs. Build projects on GitHub."
          },
          {
            "year": "3-4",
            "title": "Internships",
            "desc": "Google, Microsoft, Amazon, Tesla, DeepMind."
          },
          {
            "year": "4-5",
            "title": "ML Engineer",
            "desc": "Production ML systems, LLM applications, computer vision."
          }
        ],
        "colleges": [
          "IIT Delhi, IIT Bombay, IIT Madras",
          "BITS Pilani, VIT",
          "Self-taught with strong portfolio"
        ],
        "cost": "₹8-12 Lakh (BTech)",
        "salary": {
          "entry": "₹18-35 LPA",
          "mid": "₹40-80 LPA",
          "senior": "₹1-2 Cr",
          "top": "₹3-5 Cr",
          "source": "Levels.fyi India salaries, Google/Meta pay data"
        },
        "exams": [
          "No formal exams",
          "Coding interview excellence needed"
        ],
        "pros": [
          "Highest demand tech role globally",
          "Work on cutting-edge AI models",
          "AI boom = job security",
          "Massive salary growth"
        ],
        "cons": [
          "Extremely competitive space",
          "PhD-level problems sometimes",
          "Rapidly evolving field = constant learning"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Google, Meta, OpenAI hire Indian AI engineers globally. Work visas easiest in this domain."
        },
        "familyAngle": "\"AI wale mein kaam karta hai? ChatGPT wala?\" — once they see the salary, suddenly AI is revolutionary.",
        "eligibility": "BTech CS with strong math. Exceptional coding skills.",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science-PCM"
          ],
          "notes": "Needs: 12th PCM"
        }
      },
      {
        "id": "data-scientist",
        "name": "Data Scientist",
        "icon": "📈",
        "color": "#0d47a1",
        "route": "Any Degree → Data Science Bootcamp/Self-learn → Tech/Finance",
        "timeline": "3-4 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Portfolio of projects speaks louder than credentials."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Any Graduation",
            "desc": "Any stream. Math/Stats/CS ideal but not required."
          },
          {
            "year": "2-3",
            "title": "Learn Data Science",
            "desc": "Python, SQL, Excel, Statistics. Coursera/DataCamp courses."
          },
          {
            "year": "3+",
            "title": "Data Scientist Role",
            "desc": "Analytics, predictive modeling, dashboards. Flipkart, Amazon, OYO."
          }
        ],
        "colleges": [
          "No specific college",
          "Self-taught with Kaggle projects"
        ],
        "cost": "₹2-5 Lakh",
        "salary": {
          "entry": "₹6-15 LPA",
          "mid": "₹20-45 LPA",
          "senior": "₹50-100 LPA",
          "top": "₹1-2 Cr",
          "source": "Levels.fyi, Blind community salary threads"
        },
        "exams": [
          "Kaggle competitions helpful",
          "Google Cloud/AWS certifications"
        ],
        "pros": [
          "Less gatekeeping than backend engineering",
          "Every company needs data scientists",
          "Work across industries"
        ],
        "cons": [
          "70% time = data cleaning, not ML",
          "Business stakeholder management can be frustrating",
          "Model performance varies by data quality"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Data science is globally in-demand. US H1B lottery friendly."
        },
        "familyAngle": "\"Data scientist = engineer?\" — close enough. Respect increases when salary ₹20 LPA mentioned.",
        "eligibility": "Math/stats background. Problem-solving mindset. Strong coding.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Any"
          ],
          "notes": "Needs: 12th Pass minimum"
        }
      },
      {
        "id": "fullstack-developer",
        "name": "Full Stack Developer",
        "icon": "⚙️",
        "color": "#1565c0",
        "route": "BTech CS / Self-taught → Frontend + Backend → Startup/Corporate",
        "timeline": "3-4 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks completely irrelevant. GitHub portfolio is your resume."
        },
        "steps": [
          {
            "year": "1-2",
            "title": "Learn Web Stack",
            "desc": "React/Vue.js (frontend), Node.js/Python (backend), SQL, APIs."
          },
          {
            "year": "2-3",
            "title": "Build Projects",
            "desc": "Full applications on GitHub. Deploy on Vercel/Heroku."
          },
          {
            "year": "3+",
            "title": "Developer Role",
            "desc": "Startups, Amazon, Google. Feature development, bug fixes, scaling."
          }
        ],
        "colleges": [
          "No specific college",
          "Coursera, Scrimba, freeCodeCamp (free)"
        ],
        "cost": "₹0-2 Lakh",
        "salary": {
          "entry": "₹5-12 LPA",
          "mid": "₹18-40 LPA",
          "senior": "₹50-100 LPA",
          "top": "₹1-2 Cr",
          "source": "Startups India salary data"
        },
        "exams": [
          "No formal exams",
          "Coding interviews critical"
        ],
        "pros": [
          "Most accessible tech role",
          "Can work for any company globally",
          "Freelancing = high hourly rates",
          "Startup equity potential"
        ],
        "cons": [
          "High competition at entry level",
          "Always learning new frameworks",
          "Can burn out on deadlines"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "US/UK/Canada desperately need developers. H1B easier, often leads to PR."
        },
        "familyAngle": "\"Website banata hai?\" — oversimplification but yes, basically that. Respect increases with each startup exit.",
        "eligibility": "Basic coding. Problem-solving. Persistence.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Any"
          ],
          "notes": "Needs: 12th Pass"
        }
      },
      {
        "id": "devops-engineer",
        "name": "DevOps Engineer",
        "icon": "🔧",
        "color": "#ff6f00",
        "route": "BTech → System Administration → Cloud (AWS/GCP) → DevOps",
        "timeline": "4-5 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Cloud certifications matter."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Systems & Networking",
            "desc": "Linux, Docker, Kubernetes basics."
          },
          {
            "year": "2-4",
            "title": "Cloud Platforms",
            "desc": "AWS (EC2, RDS, Lambda), GCP, Azure. Get certified."
          },
          {
            "year": "3-5",
            "title": "DevOps Engineer",
            "desc": "CI/CD pipelines, infrastructure as code, monitoring."
          }
        ],
        "colleges": [
          "Linux Academy, A Cloud Guru (online)"
        ],
        "cost": "₹2-4 Lakh",
        "salary": {
          "entry": "₹8-14 LPA",
          "mid": "₹20-40 LPA",
          "senior": "₹50-80 LPA",
          "top": "₹1-1.5 Cr",
          "source": "AWS salary data"
        },
        "exams": [
          "AWS Certified Solutions Architect",
          "Kubernetes certification"
        ],
        "pros": [
          "Fewer people know DevOps = less competition",
          "Everyone needs infrastructure",
          "Consulting opportunities"
        ],
        "cons": [
          "On-call emergencies at 2 AM",
          "Infrastructure issues = high pressure",
          "Less fun than building features"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Cloud expertise globally portable. Any tech hub needs DevOps."
        },
        "familyAngle": "\"Servers dekhta hai computer par?\" — oversimplification but family gets that it's technical.",
        "eligibility": "Linux + networking knowledge, cloud platform expertise.",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science-PCM"
          ],
          "notes": "Needs: 12th Pass"
        }
      },
      {
        "id": "cybersecurity",
        "name": "Cybersecurity Analyst",
        "icon": "🔐",
        "color": "#c62828",
        "route": "BTech CS → Security Specialization → Penetration Testing/SOC",
        "timeline": "4-5 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Certifications and hacking skills matter."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Network & Systems",
            "desc": "TCP/IP, Linux, networking protocols."
          },
          {
            "year": "2-4",
            "title": "Security Fundamentals",
            "desc": "Cryptography, encryption, vulnerability assessment."
          },
          {
            "year": "3-5",
            "title": "Ethical Hacker / Penetration Tester",
            "desc": "CEH, OSCP certifications. Find vulnerabilities for companies."
          }
        ],
        "colleges": [
          "EC-Council (CEH), Offensive Security (OSCP)"
        ],
        "cost": "₹3-8 Lakh",
        "salary": {
          "entry": "₹7-14 LPA",
          "mid": "₹18-35 LPA",
          "senior": "₹40-80 LPA",
          "top": "₹1-2 Cr",
          "source": "Cybersecurity salary surveys"
        },
        "exams": [
          "CEH (Certified Ethical Hacker)",
          "OSCP (Offensive Security Certified Professional)",
          "CompTIA Security+"
        ],
        "pros": [
          "Data breaches = constant demand",
          "High salary growth",
          "Can start own consulting firm"
        ],
        "cons": [
          "Burnout from on-call SOC work",
          "Legal liability if breaches happen",
          "Constant threat landscape evolution"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "US/UK desperately need cybersecurity experts. USCIS gives green cards."
        },
        "familyAngle": "\"Hacker ban gaya?\" — explain that you're a 'white hat' hacker who finds vulnerabilities to protect systems.",
        "eligibility": "Strong networking + Linux skills, problem-solving mindset.",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science-PCM"
          ],
          "notes": "Needs: 12th Pass"
        }
      },
      {
        "id": "cloud-architect",
        "name": "Cloud Architect (AWS/Azure/GCP)",
        "icon": "☁️",
        "color": "#0288d1",
        "route": "BTech → Cloud Engineer (3 yrs) → Cloud Architect",
        "timeline": "5-7 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Cloud expertise and certifications critical."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Cloud Engineer",
            "desc": "AWS/Azure/GCP. Manage infrastructure, deploy applications."
          },
          {
            "year": "3-5",
            "title": "Senior Cloud Engineer",
            "desc": "Design complex cloud systems, cost optimization."
          },
          {
            "year": "5-7",
            "title": "Cloud Architect",
            "desc": "Design enterprise-wide cloud strategies."
          }
        ],
        "colleges": [
          "AWS Training, Microsoft Learn, Google Cloud Academy"
        ],
        "cost": "₹2-5 Lakh",
        "salary": {
          "entry": "₹10-18 LPA",
          "mid": "₹28-50 LPA",
          "senior": "₹60-120 LPA",
          "top": "₹1-2 Cr",
          "source": "AWS architect salary data"
        },
        "exams": [
          "AWS Solutions Architect (Professional)",
          "Azure Architect Expert",
          "GCP Professional Cloud Architect"
        ],
        "pros": [
          "Every large company migrating to cloud",
          "Design decisions have massive impact",
          "Consulting fees can be ₹50L+ per project"
        ],
        "cons": [
          "Steep learning curve",
          "Cloud costs can spiral if misconfigured",
          "Global scale problems = extreme pressure"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Cloud architects from India work for AWS, Google, Microsoft global offices."
        },
        "familyAngle": "\"Clouds mein kaam karta hai?\" — explain that modern IT is built on cloud computing, not on-premises servers.",
        "eligibility": "Deep cloud platform knowledge, system design expertise.",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science-PCM"
          ],
          "notes": "Needs: 12th Pass + 5+ years experience"
        }
      }
    ]
  },
  "law": {
    "id": "law",
    "name": "Law & Civil Services",
    "icon": "⚖️",
    "color": "#5e35b1",
    "tagline": "Justice, Governance & Legal Practice",
    "description": "For students who believe in the rule of law and want to shape society.",
    "preview": [
      "IAS Officer",
      "Advocate",
      "IPS Officer",
      "Judge"
    ],
    "paths": [
      {
        "id": "ias-officer",
        "name": "IAS Officer (Indian Administrative Service)",
        "icon": "🏛️",
        "color": "#1a237e",
        "route": "Any Degree → UPSC CSE → IAS Officer",
        "timeline": "Variable",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. UPSC Civil Services Exam is entirely merit-based."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "Any Graduation",
            "desc": "Can be any stream. Engineering, Commerce, Arts all eligible."
          },
          {
            "year": "2-3 (onwards)",
            "title": "UPSC CSE Preparation",
            "desc": "1-2 years self-study or coaching. Indian polity, history, geography, current affairs."
          },
          {
            "year": "Clearing",
            "title": "Prelims → Mains → Interview",
            "desc": "Approximately 15-20 lakh attempt, 900-1000 selected as IAS, IPS, IFS combined."
          },
          {
            "year": "4-6",
            "title": "IAS Officer",
            "desc": "District Magistrate → Chief Secretary → Additional Chief Secretary."
          }
        ],
        "colleges": [
          "Any college for graduation",
          "UPSC Academy, Vajiram & Ravi (coaching)"
        ],
        "cost": "₹2-10 Lakh (coaching optional)",
        "salary": {
          "entry": "₹56,100/month",
          "mid": "₹1.5-2.5 LPA",
          "senior": "₹3-5 LPA",
          "top": "₹5-8 LPA",
          "source": "7th Pay Commission, Government of India"
        },
        "exams": [
          "UPSC Civil Services Exam",
          "No other exams after selection"
        ],
        "pros": [
          "Ultimate job security",
          "Shape policy at national level",
          "Pension is 50% of last salary",
          "Massive social respect"
        ],
        "cons": [
          "2.5L+ attempt, <1% success rate",
          "Multiple attempts often needed (avg 4-5 attempts)",
          "Transfers cause family upheaval"
        ],
        "abroad": {
          "level": "Low",
          "desc": "IAS is India-specific. Government service abroad requires different exams."
        },
        "familyAngle": "\"IAS ban gaya\" — this is the peak of Indian achievement narratives. Celebrations rival weddings.",
        "eligibility": "Bachelor's degree. Age 21-32. Indian citizenship.",
        "educationLevels": [
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "bachelor",
          "streams": [
            "Any"
          ],
          "notes": "Needs: Any graduation"
        }
      },
      {
        "id": "advocate",
        "name": "Advocate (Lawyer)",
        "icon": "📜",
        "color": "#2c3e50",
        "route": "12th → BA/BSc → LLB (5 yrs) / LLM → Advocate",
        "timeline": "5-7 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant for law practice. Bar exam performance is everything."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Bachelor's Degree (Any Stream)",
            "desc": "BA, BSc, BCom — doesn't matter. Law doesn't care about your background."
          },
          {
            "year": "3-5",
            "title": "5-Year LLB",
            "desc": "Constitutional Law, Criminal Law, Property Law, Contracts. Moot courts, internships."
          },
          {
            "year": "5-6",
            "title": "Bar Examination",
            "desc": "State bar exam. Separate for each state."
          },
          {
            "year": "6-7",
            "title": "Advocate Practice",
            "desc": "Court appearances, client counseling, case work."
          }
        ],
        "colleges": [
          "National Law University Delhi, Mumbai, Bangalore",
          "NALSAR Hyderabad, Gujarat National Law University",
          "Law colleges affiliated to regular universities"
        ],
        "cost": "₹5-15 Lakh (law college)",
        "salary": {
          "entry": "₹3-8 LPA",
          "mid": "₹15-40 LPA",
          "senior": "₹50-200 LPA",
          "top": "₹1-5 Cr",
          "source": "Law practice billing rates, bar association data"
        },
        "exams": [
          "CLAT (Common Law Admission Test)",
          "State Bar Examination"
        ],
        "pros": [
          "Own practice = unlimited earning potential",
          "Prestigious profession globally",
          "Help people with legal issues",
          "Flexible work structure"
        ],
        "cons": [
          "Initial years have very low income",
          "Cases can take 5-10 years",
          "Mental stress from client expectations",
          "Bar council politics can affect career"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Indian law degree doesn't directly transfer. Need bar exam in target country."
        },
        "familyAngle": "Lawyer is always respected in Indian society. One of the top aspirational careers.",
        "eligibility": "Any graduate. Strong communication. Analytical mind.",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Any"
          ],
          "notes": "Needs: 12th Pass"
        }
      },
      {
        "id": "corporate-lawyer",
        "name": "Corporate Lawyer",
        "icon": "💼",
        "color": "#1565c0",
        "route": "BA → LLB → Law Firm → Corporate Counsel",
        "timeline": "6-8 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Legal acumen and billable hours are what matter."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "Bachelor's + LLB",
            "desc": "Focus on corporate law, contracts, company law."
          },
          {
            "year": "4-6",
            "title": "Law Firm Associate",
            "desc": "Top firms: Trilegal, Khaitan & Co, J Sagar Associates. M&A, contracts, IP law."
          },
          {
            "year": "6-8",
            "title": "Senior Associate / Counsel",
            "desc": "Lead transactions, team management."
          }
        ],
        "colleges": [
          "National Law School India University",
          "Symbiosis Law School",
          "NALSAR"
        ],
        "cost": "₹5-15 Lakh",
        "salary": {
          "entry": "₹8-15 LPA",
          "mid": "₹25-50 LPA",
          "senior": "₹60-150 LPA",
          "top": "₹2-5 Cr",
          "source": "Top law firms billing data"
        },
        "exams": [
          "CLAT"
        ],
        "pros": [
          "M&A deals worth ₹1000+ Cr",
          "Work on cutting-edge commercial transactions",
          "Lucrative practice"
        ],
        "cons": [
          "80-hour work weeks during deals",
          "Document review can be monotonous",
          "Client pressure is relentless"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Top law firms have London/Singapore offices. Transfer possible for senior lawyers."
        },
        "familyAngle": "\"Corporate lawyer\" sounds more impressive than \"lawyer\" — implies high-value work.",
        "eligibility": "National Law School degree preferred. Excellent legal writing.",
        "educationLevels": [
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Any"
          ],
          "notes": "Needs: 12th Pass + top law school"
        }
      }
    ]
  },
  "sciencePCM": {
    "id": "sciencePCM",
    "name": "Science — PCM",
    "icon": "⚙️",
    "color": "#00D4AA",
    "tagline": "Physics, Chemistry & Mathematics",
    "description": "For students who love engineering, technology, math, and solving complex problems.",
    "preview": [
      "IIT/NIT Engineering",
      "Data Science / AI",
      "Defence Forces",
      "Pilot"
    ],
    "paths": [
      {
        "id": "iit-nit",
        "name": "Engineering — IIT / NIT / IIIT",
        "icon": "🏗️",
        "route": "12th PCM → JEE Main → JEE Advanced → BTech (4 yrs)",
        "timeline": "4-6 years",
        "difficulty": "Very High",
        "cost": "₹8-10 Lakh (IIT/NIT) + Coaching",
        "salary": {
          "entry": "₹15-25 LPA",
          "mid": "₹30-60 LPA",
          "senior": "₹80L-1.5 Cr",
          "top": "₹2-4 Cr"
        },
        "exams": [
          "JEE Main",
          "JEE Advanced",
          "BITSAT"
        ],
        "pros": [
          "IIT brand is a lifetime asset",
          "Best campus placements in India"
        ],
        "cons": [
          "Brutal preparation",
          "Not all branches have high pay"
        ]
      },
      {
        "id": "state-private-engg",
        "name": "Engineering — State / Private Colleges",
        "icon": "🔧",
        "route": "12th PCM → JEE Main / State CET → BTech (4 yrs)",
        "timeline": "4 years",
        "difficulty": "Medium",
        "cost": "₹3-20 Lakh",
        "salary": {
          "entry": "₹3.5-8 LPA",
          "mid": "₹10-25 LPA",
          "senior": "₹25-50 LPA",
          "top": "₹50L-1 Cr"
        },
        "exams": [
          "JEE Main",
          "State CET",
          "Private Entrances"
        ],
        "pros": [
          "More accessible",
          "Good skills can beat college name"
        ],
        "cons": [
          "Brand value is lower",
          "Mass recruiters pay less initially"
        ]
      },
      {
        "id": "data-science-ai",
        "name": "Data Science / AI / ML",
        "icon": "🤖",
        "route": "12th → BTech CS or BSc Math → Specialize in AI/ML",
        "timeline": "4-6 years",
        "difficulty": "High",
        "cost": "₹5-15 Lakh",
        "salary": {
          "entry": "₹8-18 LPA",
          "mid": "₹25-50 LPA",
          "senior": "₹50L-1.2 Cr",
          "top": "₹1.5-3 Cr"
        },
        "exams": [
          "JEE Main/Advanced",
          "GATE",
          "GRE"
        ],
        "pros": [
          "Highest demand skill globally",
          "Remote work opportunities"
        ],
        "cons": [
          "Rapidly changing field",
          "Entry level saturated with bootcamps"
        ]
      },
      {
        "id": "defence-pcm",
        "name": "Defence Forces (NDA / CDS)",
        "icon": "🎖️",
        "route": "12th → NDA Written → SSB Interview → Training Academy",
        "timeline": "4-5 years after 12th",
        "difficulty": "High",
        "cost": "ZERO",
        "salary": {
          "entry": "₹8-10 LPA",
          "mid": "₹14-18 LPA",
          "senior": "₹22-30 LPA",
          "top": "₹35-55 LPA"
        },
        "exams": [
          "NDA",
          "CDS",
          "AFCAT",
          "SSB"
        ],
        "pros": [
          "Honor and respect",
          "Free training and good perks"
        ],
        "cons": [
          "Physically demanding",
          "Dangerous postings"
        ]
      },
      {
        "id": "pilot",
        "name": "Commercial Pilot (CPL)",
        "icon": "✈️",
        "route": "12th PCM → DGCA CPL → Type Rating → Airline First Officer",
        "timeline": "2-4 years",
        "difficulty": "Medium-High",
        "cost": "₹25-50 Lakh",
        "salary": {
          "entry": "₹8-15 LPA",
          "mid": "₹20-35 LPA",
          "senior": "₹40-65 LPA",
          "top": "₹80L-1.2 Cr"
        },
        "exams": [
          "DGCA CPL Written",
          "Class 1 Medical",
          "Type Rating"
        ],
        "pros": [
          "Glamorous career",
          "High salaries"
        ],
        "cons": [
          "High upfront cost",
          "Vulnerable to economic slumps"
        ]
      },
      {
        "id": "cybersecurity",
        "name": "Cybersecurity & Ethical Hacking",
        "icon": "🛡️",
        "color": "#2980B9",
        "route": "BTech CS / BCA → CEH / OSCP Certifications → Security Analyst",
        "timeline": "4-5 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks don't matter. Certifications (CEH, OSCP, CISSP), CTF competition rankings, and bug bounty track record are what employers value. Many top hackers are self-taught."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BTech CS / BCA",
            "desc": "Learn networking (TCP/IP, DNS, firewalls), Linux, programming (Python, C). Take cybersecurity electives."
          },
          {
            "year": "2-4",
            "title": "Certifications + Practice",
            "desc": "CEH (Certified Ethical Hacker), CompTIA Security+, OSCP (Offensive Security). Practice on HackTheBox, TryHackMe, CTF competitions."
          },
          {
            "year": "4-5",
            "title": "Security Role",
            "desc": "Join SOC (Security Operations Center), penetration testing teams, or bug bounty hunting. Companies: Palo Alto, CrowdStrike, Wipro Cybersecurity, Big 4 cyber teams."
          }
        ],
        "colleges": [
          "Any CS/IT degree works",
          "CEH from EC-Council, OSCP from Offensive Security",
          "IIT Kanpur C3i Center (cybersecurity research)",
          "Online: HackTheBox Academy, TryHackMe"
        ],
        "cost": "₹5-15L (BTech) + ₹50K-2L (certifications)",
        "salary": {
          "entry": "₹5-10 LPA (SOC analyst / junior pentester)",
          "mid": "₹12-25 LPA (senior security engineer)",
          "senior": "₹30-60 LPA (CISO / security architect)",
          "top": "₹80L-2 Cr (CISO at large enterprise / bug bounty legends)",
          "source": "NASSCOM Cybersecurity Report 2024, CrowdStrike/Palo Alto India salary data, HackerOne bug bounty payouts"
        },
        "exams": [
          "CEH (Certified Ethical Hacker)",
          "OSCP (most respected hands-on cert)",
          "CompTIA Security+",
          "CISSP (for senior roles)"
        ],
        "pros": [
          "India needs 1 million+ cybersecurity professionals — massive shortage",
          "Bug bounty hunters earn $10K-100K+ per vulnerability found",
          "Remote work is very common",
          "Constantly evolving — never boring"
        ],
        "cons": [
          "Requires constant learning — threats change daily",
          "Initial certifications can be expensive",
          "On-call 24/7 during security incidents",
          "Legal grey areas in ethical hacking — know the law"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Global cybersecurity talent shortage. US, UK, Israel, Singapore actively recruit. OSCP/CISSP holders get visa sponsorship easily. Remote work from India for US companies common."
        },
        "familyAngle": "\"Hacking karta hai? Illegal nahi hai?\" — explaining \"ethical\" hacking to Indian parents requires patience. Show them bug bounty payouts from Google/Apple and they understand.",
        "eligibility": "CS/IT background preferred but not mandatory. Self-taught hackers are common. Curiosity and problem-solving mindset essential.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "game-dev",
        "name": "Game Development & Design",
        "icon": "🎮",
        "color": "#8E44AD",
        "route": "BTech CS / BSc Gaming / Self-taught → Portfolio → Studio",
        "timeline": "3-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Your game portfolio, coding skills (C++/C#/Unity/Unreal), and published games are what matter. Many successful game devs are self-taught."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Learn Game Development",
            "desc": "BTech CS for fundamentals OR self-learn Unity/Unreal Engine. C++ for Unreal, C# for Unity. Take game jams (Global Game Jam, Ludum Dare)."
          },
          {
            "year": "2-4",
            "title": "Build Portfolio",
            "desc": "Publish 3-5 games on itch.io, Steam, or mobile stores. Even small games show skill. Participate in game jams — employers love jam games."
          },
          {
            "year": "3-5",
            "title": "Studio or Indie",
            "desc": "Join studios: Ubisoft Pune, Rockstar India, SuperGaming, nCore Games. Or go indie — publish on Steam/mobile. Indie success stories: Raji (Indian mythology game)."
          }
        ],
        "colleges": [
          "No specific college needed",
          "BTech CS from any decent college",
          "Specialized: IITM Pravartak Game Dev, DSK Supinfocom (Pune)",
          "Online: Unity Learn (free), Unreal Engine tutorials (free)"
        ],
        "cost": "₹0-10L (self-taught to BTech)",
        "salary": {
          "entry": "₹3-8 LPA (junior game developer in India)",
          "mid": "₹10-22 LPA (senior dev / lead)",
          "senior": "₹25-45 LPA (game director / tech lead)",
          "top": "₹50L-2 Cr (studio head / successful indie dev)",
          "source": "NASSCOM Gaming Report 2024, Ubisoft Pune / Rockstar India salary data, Steam indie game revenue data"
        },
        "exams": [
          "No formal exams — portfolio is everything",
          "Unity Certified Developer (optional)",
          "Unreal Engine certifications (optional)"
        ],
        "pros": [
          "India's gaming market: $3.5 billion (2024) and growing 25%+ annually",
          "Creative + technical — best of both worlds",
          "Global remote work opportunities",
          "Indie games can generate passive income for years"
        ],
        "cons": [
          "Indian gaming industry still pays less than global average",
          "Crunch culture — 60-80 hour weeks before game launches",
          "AAA studios in India are limited (mostly outsourcing)",
          "\"Game khelna\" vs \"Game banana\" — families don't see the difference"
        ],
        "abroad": {
          "level": "High",
          "desc": "Ubisoft, EA, Riot, Epic actively hire from India. Canada (Vancouver/Montreal) is the gaming capital with good immigration pathways. Portfolio speaks louder than any visa requirement."
        },
        "familyAngle": "\"Din bhar game khelega kya?\" — the eternal Indian parent question when you say game development. Once you show them a game YOU built on the App Store, perspective shifts.",
        "eligibility": "Anyone with coding aptitude + creativity. No formal requirements.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "robotics",
        "name": "Robotics & Mechatronics",
        "icon": "🤖",
        "color": "#16A085",
        "route": "BTech Mechatronics/Robotics → MTech/MS → Research/Industry",
        "timeline": "4-6 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCM with 75%+ needed for JEE Main eligibility. For top robotics programs at IITs, need strong JEE rank. Board marks themselves don't affect robotics career — your projects and research do."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BTech Mechatronics / ECE / ME",
            "desc": "Study mechanics, electronics, programming, control systems. Build robots from Year 1. Join robotics clubs."
          },
          {
            "year": "2-4",
            "title": "Projects + Competitions",
            "desc": "Robocon, DRDO competitions, e-Yantra (IIT Bombay). Build autonomous robots, drones, manipulator arms. Document on YouTube."
          },
          {
            "year": "4-6",
            "title": "MTech/MS or Industry",
            "desc": "GATE for IIT MTech in Robotics. Or MS at CMU/MIT/ETH Zurich. Industry: Addverb Technologies, Grey Orange, GreyOrange, ISRO, DRDO."
          }
        ],
        "colleges": [
          "IIT Madras (Center for Robotics)",
          "IIT Delhi, IIT Bombay (ME/ECE)",
          "BITS Pilani (Mechatronics)",
          "Abroad: CMU (Robotics Institute — #1 globally), MIT, ETH Zurich"
        ],
        "cost": "₹5-15L (India BTech) + ₹30-70L (abroad MS)",
        "salary": {
          "entry": "₹5-12 LPA (robotics engineer in India)",
          "mid": "₹15-30 LPA (senior robotics engineer)",
          "senior": "₹35-60 LPA (robotics lead / R&D head)",
          "top": "₹80L-2 Cr (CTO robotics company / abroad roles)",
          "source": "Addverb Technologies salary data, IIT placement reports, Glassdoor robotics roles"
        },
        "exams": [
          "JEE Main/Advanced (for IIT)",
          "GATE (for MTech)",
          "GRE (for abroad MS)"
        ],
        "pros": [
          "India's warehouse robotics market is exploding (Amazon, Flipkart automation)",
          "ISRO and DRDO robotics programs are world-class",
          "Combines mechanical + electrical + software — holistic engineering",
          "Global demand for robotics engineers"
        ],
        "cons": [
          "Hardware projects are expensive — hard to practice at home",
          "India's robotics industry is still nascent compared to Japan/Germany",
          "Need MTech/MS for serious research roles",
          "Salary in India is lower than software engineering for similar skill level"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "CMU Robotics Institute is the Mecca. Boston Dynamics, Tesla AI, Waymo actively recruit. Japan and Germany have huge robotics industries. Indian robotics engineers are in high demand globally."
        },
        "familyAngle": "\"Robot banaega? Ye toh science fiction hai\" — until you show them Grey Orange robots running Amazon warehouses. Robotics is no longer fiction, it's a billion-dollar industry.",
        "eligibility": "12th PCM. Strong physics and math. Hands-on building aptitude.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "aerospace",
        "name": "Aerospace Engineering",
        "icon": "🚀",
        "color": "#E74C3C",
        "route": "BTech Aerospace (JEE/IIST) → ISRO/HAL/DRDO/Abroad",
        "timeline": "4-6 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "JEE Main 75% eligibility rule applies. IIST (Indian Institute of Space Science & Technology) admission through JEE Advanced. Board marks don't affect JEE rank but eligibility cutoff must be met."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BTech Aerospace",
            "desc": "Study aerodynamics, propulsion, structures, flight mechanics, orbital mechanics. IIST Trivandrum (ISRO's own institute — job guarantee at ISRO). IIT Bombay/Madras/Kanpur also excellent."
          },
          {
            "year": "3-4",
            "title": "Internships + Projects",
            "desc": "ISRO internship, HAL, NAL, ADA for defense aerospace. Airbus India, Boeing India for commercial aviation."
          },
          {
            "year": "4-6",
            "title": "Career",
            "desc": "ISRO (Scientist/Engineer 'SC'), HAL, DRDO, NAL for defense/space. Airbus, Boeing, Safran for commercial. MS at Stanford/MIT for global career."
          }
        ],
        "colleges": [
          "IIST Trivandrum (ISRO's institute — guaranteed ISRO placement)",
          "IIT Bombay, IIT Madras, IIT Kanpur (Aerospace dept)",
          "Abroad: MIT, Stanford, Caltech, Georgia Tech"
        ],
        "cost": "IIST: ₹4-6 Lakh total (fully subsidized). IIT: ₹8-10 Lakh. Abroad MS: ₹30-60 Lakh.",
        "salary": {
          "entry": "₹6-12 LPA (ISRO Scientist SC / HAL)",
          "mid": "₹15-25 LPA (ISRO SD/SE / Airbus India)",
          "senior": "₹30-50 LPA (ISRO SG+ / Boeing Lead)",
          "top": "₹80L-2 Cr (abroad aerospace roles / SpaceX/NASA contractors)",
          "source": "ISRO/HAL pay scales (7th CPC), Boeing/Airbus India salary data, IIST placement report"
        },
        "exams": [
          "JEE Advanced (for IIT/IIST)",
          "GATE Aerospace (for MTech/ISRO/DRDO)",
          "GRE (abroad MS)"
        ],
        "pros": [
          "India's space program is booming — Chandrayaan, Gaganyaan, PSLV commercial launches",
          "IIST guarantees ISRO placement",
          "Pride of working on rockets/satellites/aircraft",
          "Global opportunities — Boeing, Airbus, SpaceX"
        ],
        "cons": [
          "Limited private aerospace industry in India",
          "ISRO pays government salaries — not private sector level",
          "Defense sector involves security clearances and transfer policies",
          "Very theoretical — not as hands-on as software engineering"
        ],
        "abroad": {
          "level": "High",
          "desc": "MS from MIT/Stanford → NASA/JPL internships. Boeing, Airbus, Lockheed Martin, SpaceX hire globally. European Space Agency (ESA) also an option."
        },
        "familyAngle": "\"ISRO mein hai\" = instant respect. Chandrayaan success made aerospace cool in India. Every uncle wants to know about the Mars mission now.",
        "eligibility": "12th PCM. JEE Advanced rank for IIST/IIT. GATE for ISRO Scientist recruitment.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "cloud-arch",
        "name": "Cloud Architecture",
        "icon": "☁️",
        "color": "#2C3E50",
        "route": "BTech/BCA → AWS/Azure/GCP Certifications → Cloud Engineer → Architect",
        "timeline": "4-6 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks completely irrelevant. Cloud companies hire based on certifications (AWS Solutions Architect, Azure Administrator) and hands-on experience. Many top cloud architects don't have formal CS degrees."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BTech CS / BCA / Self-learn",
            "desc": "Learn Linux, networking, databases, basic programming. Understand how the internet works."
          },
          {
            "year": "2-4",
            "title": "Cloud Certifications",
            "desc": "AWS: Solutions Architect Associate → Professional. Azure: AZ-900 → AZ-104 → AZ-305. GCP equivalents. Cost: $150-300 per exam."
          },
          {
            "year": "3-5",
            "title": "Cloud Engineer Role",
            "desc": "Join cloud teams at TCS, Infosys, Wipro (large-scale migrations) or product companies. Build infrastructure for millions of users."
          },
          {
            "year": "5-6",
            "title": "Cloud Architect",
            "desc": "Design multi-cloud, hybrid-cloud architectures. Lead digital transformation projects. Companies: AWS, Microsoft, Google Cloud directly, or consulting firms."
          }
        ],
        "colleges": [
          "No specific college — certifications are king",
          "AWS re/Start program (free for freshers)",
          "Cloud Guru, Udemy, Coursera for prep"
        ],
        "cost": "₹0-15L (certifications are cheap — ₹10-25K per exam. Main cost is UG degree if any)",
        "salary": {
          "entry": "₹5-10 LPA (cloud engineer)",
          "mid": "₹15-30 LPA (senior cloud engineer)",
          "senior": "₹35-65 LPA (cloud architect)",
          "top": "₹80L-2 Cr (principal architect at AWS/Azure directly)",
          "source": "AWS/Microsoft India salary data, levels.fyi, LinkedIn Salary Insights"
        },
        "exams": [
          "AWS Solutions Architect (Associate + Professional)",
          "Azure Administrator / Solutions Architect",
          "GCP Professional Cloud Architect",
          "Kubernetes CKA/CKAD"
        ],
        "pros": [
          "Cloud market growing 25%+ annually — demand exceeds supply massively",
          "Certifications are cheap and quickly obtainable",
          "Remote work is the norm",
          "Indian cloud professionals are in huge global demand"
        ],
        "cons": [
          "Must constantly recertify — cloud services change every quarter",
          "On-call responsibilities during outages",
          "Enterprise migrations can be tedious",
          "Many \"cloud engineers\" are just doing basic server management"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Cloud skills are the easiest tech skills to take abroad. AWS/Azure certifications are globally recognized. Remote work from India for US companies at $80-120K/year is increasingly common."
        },
        "familyAngle": "\"Cloud mein kaam karta hai\" — parents imagine you literally working in clouds. Once you explain Amazon/Microsoft, they're impressed.",
        "eligibility": "Anyone with tech aptitude. Formal degree helpful but not mandatory.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "ar-vr",
        "name": "AR/VR Development (Spatial Computing)",
        "icon": "🥽",
        "color": "#D35400",
        "route": "BTech CS → Unity/Unreal + XR specialization → Apple Vision/Meta Quest",
        "timeline": "4-5 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Portfolio of AR/VR experiences you've built is everything. Unity/Unreal Engine skills, 3D math, and published XR apps are what matter."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BTech CS/IT + Learn XR",
            "desc": "Strong 3D mathematics (linear algebra, quaternions). Learn Unity or Unreal Engine. Build AR apps using ARKit/ARCore."
          },
          {
            "year": "2-4",
            "title": "Build XR Portfolio",
            "desc": "Create VR games for Meta Quest, AR filters for Instagram/Snapchat, enterprise VR training modules. Publish on Meta App Lab or Apple App Store."
          },
          {
            "year": "4-5",
            "title": "XR Career",
            "desc": "Join Meta Reality Labs, Apple Vision Pro team, Flipkart (AR try-on), Jio (immersive content). Enterprise training VR is booming post-COVID."
          }
        ],
        "colleges": [
          "No specialized colleges in India yet",
          "BTech CS + self-learn Unity/Unreal",
          "Online: Meta XR courses, Unity Learn, Coursera XR specialization"
        ],
        "cost": "₹5-15L (BTech) + ₹0-50K (software is free — Unity/Unreal are free to learn)",
        "salary": {
          "entry": "₹5-12 LPA (XR developer India)",
          "mid": "₹15-30 LPA (senior XR engineer)",
          "senior": "₹35-60 LPA (XR tech lead)",
          "top": "₹80L-2 Cr (Meta Reality Labs / Apple Vision Pro team)",
          "source": "Meta India salary data, Apple India hiring data, LinkedIn XR roles"
        },
        "exams": [
          "No formal exams",
          "Unity Certified XR Developer (optional)",
          "Portfolio >> certifications"
        ],
        "pros": [
          "Apple Vision Pro launch signals spatial computing is the future",
          "Very few skilled XR developers — first-mover advantage",
          "Enterprise VR training market is $6B+ globally",
          "Combines creativity with cutting-edge technology"
        ],
        "cons": [
          "Market is still early — limited job openings in India currently",
          "Hardware requirements are expensive for development",
          "Technology is rapidly evolving — what you build today may be obsolete in 2 years",
          "Consumer VR adoption in India is still very low"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Meta, Apple, Google, Microsoft XR teams hire globally. Silicon Valley is the hub. Very few qualified XR engineers exist worldwide — massive demand-supply gap."
        },
        "familyAngle": "\"VR goggles pahen ke kya karega?\" — this is the smartphone moment all over again. In 2007, nobody understood smartphones. In 2026, spatial computing is the new frontier.",
        "eligibility": "CS/IT background. Strong 3D math. Creative mindset.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "blockchain",
        "name": "Blockchain & Web3 Development",
        "icon": "⛓️",
        "color": "#F39C12",
        "route": "BTech CS → Solidity/Rust → Smart Contracts → Web3 Startup/Protocol",
        "timeline": "3-5 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Blockchain hires based on GitHub contributions, deployed smart contracts, DeFi protocol experience, and cryptography knowledge."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BTech CS / Self-learn",
            "desc": "Learn programming (JavaScript, Python). Study cryptography, distributed systems, consensus mechanisms."
          },
          {
            "year": "2-4",
            "title": "Learn Blockchain",
            "desc": "Solidity (Ethereum), Rust (Solana), Move (Aptos). Build and deploy smart contracts. Contribute to open-source Web3 projects."
          },
          {
            "year": "3-5",
            "title": "Web3 Career",
            "desc": "Join protocols (Polygon, WazirX, CoinDCX) or build DeFi/NFT projects. Web3 pays in crypto + fiat. Remote-first culture."
          }
        ],
        "colleges": [
          "No specific college — GitHub is your college",
          "Online: Alchemy University (free), buildspace, LearnWeb3",
          "IIT Kanpur blockchain research lab"
        ],
        "cost": "₹0-10L (self-taught is free, BTech costs vary)",
        "salary": {
          "entry": "₹8-15 LPA (blockchain developer India)",
          "mid": "₹20-40 LPA (senior Web3 engineer)",
          "senior": "₹40-80 LPA (protocol lead / core developer)",
          "top": "₹1-5 Cr (founding engineer at funded Web3 startup + token allocation)",
          "source": "Web3.career salary data, CoinDCX/Polygon India salary info, Electric Capital developer report"
        },
        "exams": [
          "No formal exams",
          "Alchemy Certified Developer (optional)",
          "Contributions >> certifications"
        ],
        "pros": [
          "Highest-paying developer niche globally right now",
          "Token allocations can be life-changing (equity equivalent in crypto)",
          "Remote-first culture — work from anywhere",
          "Early in the cycle — first-mover advantage"
        ],
        "cons": [
          "Crypto market is volatile — projects can collapse overnight",
          "Regulatory uncertainty in India (crypto tax: 30% + TDS)",
          "Many scammy projects — due diligence needed",
          "Fast-moving space — constant learning or become obsolete"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Web3 is borderless. Work for protocols based in Cayman Islands/Singapore from your Bangalore apartment. No visa needed for remote crypto work. Move to Singapore/Dubai/Lisbon (crypto-friendly hubs) if desired."
        },
        "familyAngle": "\"Crypto mein kaam karta hai? Illegal nahi hai?\" — India taxed crypto at 30%, meaning it's LEGAL. But parents still associate crypto with scams. Show them your HDFC salary slip (paid in INR from a crypto company) and concerns ease.",
        "eligibility": "CS background preferred. Strong logic and cryptography aptitude.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "prompt-eng",
        "name": "AI/ML & Prompt Engineering",
        "icon": "🧠",
        "color": "#C0392B",
        "route": "BTech CS/BCA → AI/ML specialization → LLM Ops / AI Engineering",
        "timeline": "3-5 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Your AI projects (Kaggle competitions, research papers, deployed ML models, fine-tuned LLMs) are your resume."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BTech CS / BCA + AI courses",
            "desc": "Learn Python, statistics, linear algebra. Study ML (Andrew Ng courses — free), deep learning (fast.ai — free), NLP."
          },
          {
            "year": "2-4",
            "title": "Specialize in LLMs/AI",
            "desc": "Learn prompt engineering, RAG architectures, fine-tuning LLMs (Llama, GPT), LangChain/LlamaIndex. Build AI applications."
          },
          {
            "year": "3-5",
            "title": "AI Career",
            "desc": "AI Engineer at Google, Microsoft, OpenAI equivalents. Or: AI consultant helping businesses adopt AI. Or: build AI SaaS products. Indian AI startups: Turing, Builder.ai, Sarvam AI."
          }
        ],
        "colleges": [
          "IIT Bombay/Delhi/Madras (AI/ML specialization)",
          "Online: fast.ai (free), Andrew Ng's ML course (free), Hugging Face courses",
          "No specific degree needed — skills are everything"
        ],
        "cost": "₹0-15L (online courses are free, BTech costs vary)",
        "salary": {
          "entry": "₹6-15 LPA (ML engineer / AI developer)",
          "mid": "₹18-40 LPA (senior AI engineer)",
          "senior": "₹40-80 LPA (AI lead / principal ML scientist)",
          "top": "₹1-4 Cr (AI researcher at Google Brain / founding AI engineer at startup)",
          "source": "levels.fyi India AI roles, Google/Microsoft India salary data, AI startup funding announcements"
        },
        "exams": [
          "No formal exams",
          "Kaggle competitions (top ranks = instant job offers)",
          "Google ML Engineer certification (optional)"
        ],
        "pros": [
          "AI is the defining technology of this decade — unlimited demand",
          "Remote work standard — work for SF companies from India",
          "Indian AI talent is globally sought after",
          "Can build AI SaaS products with very low capital"
        ],
        "cons": [
          "Field changes weekly — what you learn today may be obsolete in 6 months",
          "Requires strong math (linear algebra, calculus, statistics)",
          "Ethical concerns around AI are growing",
          "Many \"AI experts\" with shallow knowledge flooding the market"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Google, Meta, OpenAI, Anthropic, DeepMind actively recruit from India. AI salaries in US: $150-400K+. H1B sponsorship common for AI roles. Many work remotely from India earning US salaries."
        },
        "familyAngle": "\"AI mein kya karta hai?\" — \"I teach computers to think.\" Parents don't understand but they hear ₹30-80 LPA salaries and approve. When you tell them you work at Google AI, chai party mein naam aata hai.",
        "eligibility": "CS/math background preferred. Strong analytical skills essential.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "uiux-design",
        "name": "UI/UX Design",
        "icon": "🎨",
        "color": "#27AE60",
        "route": "BDes (UCEED) / BTech / Self-taught → Portfolio → Product Design",
        "timeline": "3-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant for UX career. UCEED entrance for IIT Design is separate. Self-taught designers with strong portfolios get hired at Google, Microsoft without any specific degree."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Learn Design",
            "desc": "BDes from IIT (UCEED), NID (DAT), or self-learn: Figma (free), design principles, user research, prototyping. Google UX certificate on Coursera."
          },
          {
            "year": "2-4",
            "title": "Build Portfolio",
            "desc": "Design 5-10 case studies showing your design process (research → wireframe → prototype → testing). Publish on Behance/Dribbble."
          },
          {
            "year": "3-5",
            "title": "Product Design Career",
            "desc": "Join as UX designer → Senior → Lead → Head of Design. Companies: Google, Microsoft, Flipkart, Swiggy, CRED, Razorpay."
          }
        ],
        "colleges": [
          "IIT Bombay/Delhi/Guwahati (BDes via UCEED)",
          "NID (via DAT entrance)",
          "Self-taught: Google UX Certificate, Coursera/Udemy"
        ],
        "cost": "₹0-10L (self-taught is nearly free, BDes: ₹5-8L)",
        "salary": {
          "entry": "₹4-10 LPA (junior UX designer)",
          "mid": "₹12-28 LPA (senior UX designer)",
          "senior": "₹30-55 LPA (design lead / principal designer)",
          "top": "₹70L-1.5 Cr (head of design at tech company / design director)",
          "source": "levels.fyi design roles India, Glassdoor UX salaries, CRED/Razorpay design team salary data"
        },
        "exams": [
          "UCEED (for IIT BDes)",
          "NID DAT",
          "No formal exam needed — portfolio is king"
        ],
        "pros": [
          "Every tech product needs UX — permanent demand",
          "Creative work with good pay — rare combination",
          "Remote work is very common",
          "Self-taught path is fully viable — no expensive degree needed"
        ],
        "cons": [
          "Everyone wants to be a UX designer now — junior market is crowded",
          "Need to constantly learn new tools (Figma replaced Sketch, what's next?)",
          "Stakeholder management can be frustrating (when they ignore your research)",
          "Indian UX salaries are lower than engineering for similar experience"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Google, Apple, Meta design teams hire from India. UX salaries in US: $120-200K+. Remote UX work for global companies from India is increasingly common."
        },
        "familyAngle": "\"Design karta hai? Drawing banata hai?\" — UX design is not art. It's making apps usable for 1 billion users. When you say \"I designed the Swiggy app your kid orders from\" — understanding clicks.",
        "eligibility": "Anyone with empathy and visual sense. No specific stream required.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "urban-planning",
        "name": "Urban Planning & Smart Cities",
        "icon": "🏙️",
        "color": "#34495E",
        "route": "BPlan (JEE Main Paper 2B) / BTech Civil → MTech Urban Planning",
        "timeline": "4-6 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "JEE Main 75% eligibility applies for BPlan admissions at IIT/NIT/SPA. Board marks don't affect JEE rank but eligibility cutoff must be met. For MTech, GATE score matters."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BPlan (Bachelor of Planning)",
            "desc": "JEE Main Paper 2B for SPA Delhi, IIT Kharagpur, CEPT Ahmedabad, MNIT. Study urban design, transportation, land use, GIS, environmental planning."
          },
          {
            "year": "3-4",
            "title": "Internships",
            "desc": "Smart Cities Mission projects, TCPO (Town & Country Planning Organization), municipal corporations, urban consulting firms."
          },
          {
            "year": "4-6",
            "title": "Career",
            "desc": "Town planner (govt), Smart Cities Mission, urban consulting (McKinsey Urban, Dalberg), real estate developers, international aid agencies (World Bank urban)."
          }
        ],
        "colleges": [
          "SPA Delhi (School of Planning & Architecture — #1)",
          "IIT Kharagpur (Urban Planning)",
          "CEPT University, Ahmedabad",
          "MNIT Jaipur, NIT Calicut"
        ],
        "cost": "₹3-8 Lakh",
        "salary": {
          "entry": "₹4-8 LPA (assistant town planner)",
          "mid": "₹10-22 LPA (senior planner / consultant)",
          "senior": "₹25-45 LPA (principal planner / practice head)",
          "top": "₹50-80 LPA (urban consulting partner / World Bank urbanist)",
          "source": "TCPO pay scales, SPA placement data, Smart Cities Mission project data"
        },
        "exams": [
          "JEE Main Paper 2B (for BPlan)",
          "GATE AR/PL (for MTech)",
          "UPSC TCPO (for govt planning roles)"
        ],
        "pros": [
          "India needs 500+ smart cities — 100 are already in development",
          "Directly shape how millions of people live",
          "Combines creativity with social impact",
          "Government has ₹2 Lakh Crore+ budget for Smart Cities Mission"
        ],
        "cons": [
          "Limited private sector opportunities compared to IT/finance",
          "Government planning roles involve bureaucratic friction",
          "India's urban planning implementation is often poor despite good plans",
          "Relatively niche field"
        ],
        "abroad": {
          "level": "Medium-High",
          "desc": "Urban planners work globally. World Bank, UN-Habitat, ADB have urban divisions. Singapore, Dubai, Netherlands are urban planning leaders. MS Planning from MIT/UCL/TU Delft opens global doors."
        },
        "familyAngle": "\"Shahar banana seekhega? Architect nahi ban raha kya?\" — urban planning is bigger than architecture. You're designing cities for 50 Lakh people, not just individual buildings.",
        "eligibility": "12th PCM. JEE Main Paper 2B for BPlan.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "sound-eng",
        "name": "Sound Engineering",
        "icon": "🎵",
        "color": "#1ABC9C",
        "route": "BSc/Diploma in Sound Engineering → Studio Work → Music Producer",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Your ear for music, knowledge of DAWs (Pro Tools, Logic Pro, Ableton), and portfolio of mixed/mastered tracks are everything."
        },
        "steps": [
          {
            "year": "1-2",
            "title": "Diploma/BSc Sound Engineering",
            "desc": "SAE Institute, FTII (Sound), Film & TV Institute. Learn acoustics, recording, mixing, mastering, DAWs."
          },
          {
            "year": "2-3",
            "title": "Studio Experience",
            "desc": "Assist at recording studios (YRF Studios, T-Series). Learn live sound for concerts. Build demo mixes."
          },
          {
            "year": "3+",
            "title": "Career",
            "desc": "Studio sound engineer, Bollywood film sound designer, music producer, live concert engineer, gaming audio, podcast production."
          }
        ],
        "colleges": [
          "SAE Institute (global network)",
          "FTII Sound Design dept",
          "Film & TV Institute (various)"
        ],
        "cost": "₹2-6 Lakh",
        "salary": {
          "entry": "₹2-4 LPA (assistant sound engineer)",
          "mid": "₹5-12 LPA (studio engineer / live sound)",
          "senior": "₹15-30 LPA (chief sound engineer / music producer)",
          "top": "₹40-80 LPA (Bollywood sound designer / Grammy-level producer)",
          "source": "Bollywood studio rate cards, SAE graduate survey, music industry data"
        },
        "exams": [
          "No formal exams",
          "Pro Tools certification (Avid authorized)"
        ],
        "pros": [
          "Music industry + film industry + gaming = growing demand",
          "Creative outlet for music lovers with technical aptitude",
          "Podcast boom created new demand for audio engineers",
          "Can freelance and work from home studio"
        ],
        "cons": [
          "Starting salary very low (₹8-15K/month)",
          "Irregular hours — recording sessions run late",
          "Equipment is expensive for home studio setup",
          "Highly competitive, relationship-driven industry"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Recording studios in LA, Nashville, London. Indian composers (AR Rahman) have global studios. Gaming audio for EA/Ubisoft/Riot is a growing field."
        },
        "familyAngle": "\"Music mein kya karega?\" — until you tell them you did sound design for a Shah Rukh Khan film. Then it's \"studio tour karwa\" requests from the whole family.",
        "eligibility": "Anyone with musical ear and tech interest. Physics understanding helps.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "marine-eng",
        "name": "Marine & Naval Engineering",
        "icon": "🚢",
        "color": "#9B59B6",
        "route": "BTech Marine Engineering (IMU CET) → Merchant Navy → Captain/Shore Jobs",
        "timeline": "4-6 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCM with 60%+ required for IMU CET eligibility. Physics and Math marks are important. Physical fitness and medical standards also required."
        },
        "steps": [
          {
            "year": "0",
            "title": "IMU CET",
            "desc": "Indian Maritime University Common Entrance Test. Tests Physics, Math, English, GK. Physical fitness + medical clearance including eyesight."
          },
          {
            "year": "1-4",
            "title": "BTech Marine Engineering",
            "desc": "Study at IMU campuses, MERI Mumbai, TMI Pune. Learn ship engines, marine systems, navigation, safety. Pre-sea training."
          },
          {
            "year": "4-6",
            "title": "Sea Career",
            "desc": "Junior Engineer → 4th Engineer → 3rd → 2nd → Chief Engineer. Or: Naval Architecture, Port Management, ship surveyor (shore jobs). Sail 6-8 months, home 4-6 months."
          }
        ],
        "colleges": [
          "IMU (Indian Maritime University — 6 campuses)",
          "MERI Mumbai (Marine Engineering Research Institute)",
          "TMI Pune (Tolani Maritime Institute)"
        ],
        "cost": "₹8-15 Lakh",
        "salary": {
          "entry": "₹6-10 LPA (Junior Engineer on ship — TAX FREE at sea)",
          "mid": "₹15-30 LPA (2nd/3rd Engineer)",
          "senior": "₹35-60 LPA (Chief Engineer)",
          "top": "₹70L-1.2 Cr (Master Mariner / Fleet Manager)",
          "source": "DG Shipping India salary scales, Anglo Eastern/Maersk salary data, IMU placement reports"
        },
        "exams": [
          "IMU CET",
          "CDC (Continuous Discharge Certificate) from DG Shipping",
          "CoC (Certificate of Competency) exams for promotion"
        ],
        "pros": [
          "Tax-free salary while at sea (Section 5B of IT Act)",
          "See the world — literally sail to 50+ countries",
          "Very high salary for engineering graduates",
          "Limited applicants = less competition than JEE"
        ],
        "cons": [
          "Away from family 6-8 months per year (this is the BIGGEST con)",
          "Isolation at sea — mental health concerns",
          "Physical risks: piracy zones, extreme weather",
          "Limited internet/connectivity on many ships"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Merchant navy IS an international career. You work for global shipping companies (Maersk, MSC, Hapag-Lloyd). Your office is the entire ocean."
        },
        "familyAngle": "\"Samundar pe jaayega? Ghar kab aayega?\" — the biggest family objection. Marriages and relationships are harder when you're at sea half the year. But tax-free ₹30 LPA silences many concerns.",
        "eligibility": "12th PCM 60%+. Physical fitness. Normal eyesight. IMU CET rank.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      },
      {
        "id": "materials-sci",
        "name": "Materials Science & Metallurgy",
        "icon": "⚗️",
        "color": "#3498DB",
        "route": "BTech Materials/Metallurgy → Industry (Steel/Aerospace) / Research",
        "timeline": "4-6 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "JEE Main 75% eligibility. For IIT metallurgy departments, JEE Advanced rank needed. Board marks don't affect career — your metallurgical knowledge does."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BTech Metallurgy / Materials Science",
            "desc": "IIT Bombay, IIT Madras, NIT Rourkela. Study thermodynamics, crystal structures, phase diagrams, composite materials, corrosion science."
          },
          {
            "year": "3-4",
            "title": "Internships",
            "desc": "Tata Steel, JSW, ISRO (materials division), DRDO (materials lab), Hindalco. Research internships at IISc."
          },
          {
            "year": "4-6",
            "title": "Career",
            "desc": "Steel/aluminum industry (Tata Steel, JSW, Hindalco), aerospace materials (ISRO, HAL), semiconductor fabs (TSMC, Intel), or MS/PhD for research."
          }
        ],
        "colleges": [
          "IIT Bombay, IIT Madras (Metallurgy/Materials)",
          "NIT Rourkela, Trichy",
          "IISc Bangalore (materials research)"
        ],
        "cost": "₹8-12 Lakh (IIT)",
        "salary": {
          "entry": "₹7-12 LPA (materials engineer at Tata Steel/JSW)",
          "mid": "₹15-25 LPA (senior metallurgist)",
          "senior": "₹30-50 LPA (head of materials / R&D director)",
          "top": "₹60L-1 Cr (CTO materials company / abroad positions)",
          "source": "Tata Steel/JSW annual reports, IIT placement data, ISRO salary scales"
        },
        "exams": [
          "JEE Main/Advanced",
          "GATE Metallurgy (for MTech/PSU jobs)"
        ],
        "pros": [
          "India is world's 2nd largest steel producer — massive industry",
          "Semiconductor fab construction (Tata-TSMC Dholera, Vedanta fab) creating new demand",
          "ISRO/DRDO materials research is world-class",
          "GATE Metallurgy is less competitive (easier to crack) than CS/EC GATE"
        ],
        "cons": [
          "Factory/plant locations (Jamshedpur, Rourkela, Bellary) — not metros",
          "Less trendy than CS/AI/Data Science",
          "Heavy industry can be physically demanding",
          "Research career requires PhD (long timeline)"
        ],
        "abroad": {
          "level": "High",
          "desc": "Materials science MS/PhD at MIT, Stanford, Cambridge. Semiconductor industry (TSMC, Intel, Samsung) in Taiwan/Korea/USA. Steel industry global companies."
        },
        "familyAngle": "\"Metallurgy? Ironsmith hai kya?\" — you're designing materials for ISRO rockets and Intel chips, not banging iron with a hammer. But the outdated perception persists.",
        "eligibility": "12th PCM. JEE Main/Advanced for IIT.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCM"
        }
      }
    ]
  },
  "sciencePCB": {
    "id": "sciencePCB",
    "name": "Science — PCB",
    "icon": "🧬",
    "color": "#FF6B6B",
    "tagline": "Physics, Chemistry & Biology",
    "description": "For students passionate about medicine, healthcare, life sciences, and biological research.",
    "preview": [
      "MBBS Doctor",
      "Dental / BDS",
      "Pharmacy",
      "Nursing"
    ],
    "paths": [
      {
        "id": "mbbs",
        "name": "MBBS — Doctor",
        "icon": "⚕️",
        "route": "12th PCB → NEET UG → MBBS (5.5 yrs) → MD/MS Specialization",
        "timeline": "7-12 years",
        "difficulty": "Very High",
        "cost": "₹30K-5 Lakh (Govt), up to ₹1.5 Cr (Private)",
        "salary": {
          "entry": "₹6-10 LPA",
          "mid": "₹15-30 LPA",
          "senior": "₹40-80 LPA",
          "top": "₹1-5 Cr"
        },
        "exams": [
          "NEET UG",
          "NEET PG"
        ],
        "pros": [
          "Respected profession",
          "Job security",
          "Meaningful work"
        ],
        "cons": [
          "Brutal competition",
          "Long learning path",
          "Stressful work"
        ]
      },
      {
        "id": "dental",
        "name": "Dental Surgeon (BDS)",
        "icon": "🦷",
        "route": "12th PCB → NEET UG → BDS (5 yrs) → MDS Specialization",
        "timeline": "5-9 years",
        "difficulty": "High",
        "cost": "₹2-60 Lakh",
        "salary": {
          "entry": "₹3-5 LPA",
          "mid": "₹6-15 LPA",
          "senior": "₹18-35 LPA",
          "top": "₹50L-1 Cr"
        },
        "exams": [
          "NEET UG",
          "NEET MDS"
        ],
        "pros": [
          "Better work-life balance",
          "Own clinic"
        ],
        "cons": [
          "Oversaturation",
          "Low starting pay",
          "High clinic setup cost"
        ]
      },
      {
        "id": "pharmacy",
        "name": "Pharmacy (BPharm)",
        "icon": "💊",
        "route": "12th PCB/PCM → BPharm (4 yrs) → MPharm / Industry",
        "timeline": "4-6 years",
        "difficulty": "Medium",
        "cost": "₹1-10 Lakh",
        "salary": {
          "entry": "₹2.5-5 LPA",
          "mid": "₹6-12 LPA",
          "senior": "₹15-30 LPA",
          "top": "₹40-80 LPA"
        },
        "exams": [
          "State CET",
          "GPAT"
        ],
        "pros": [
          "High demand in pharma industry",
          "Retail pharmacy option"
        ],
        "cons": [
          "Low starting pay",
          "Oversupply of graduates"
        ]
      },
      {
        "id": "nursing",
        "name": "Nursing (BSc Nursing)",
        "icon": "🏥",
        "route": "12th PCB → BSc Nursing (4 yrs) → Staff Nurse → Abroad",
        "timeline": "4-6 years",
        "difficulty": "Medium",
        "cost": "₹50K-8 Lakh",
        "salary": {
          "entry": "₹2.5-4 LPA (India), ₹40-75 LPA (Abroad)",
          "mid": "₹4-8 LPA (India)",
          "senior": "₹8-15 LPA (India)",
          "top": "₹40-75 LPA (Abroad)"
        },
        "exams": [
          "Nursing CET",
          "NCLEX-RN",
          "OET"
        ],
        "pros": [
          "Global shortage means guaranteed jobs",
          "High pay abroad"
        ],
        "cons": [
          "Poor pay in India",
          "Physically exhausting"
        ]
      },
      {
        "id": "biotech",
        "name": "Biotechnology / Life Sciences",
        "icon": "🧪",
        "route": "12th PCB → BTech/BSc Biotech → MSc/MTech → Research",
        "timeline": "4-8 years",
        "difficulty": "Medium-High",
        "cost": "₹3-10 Lakh",
        "salary": {
          "entry": "₹3-6 LPA",
          "mid": "₹8-18 LPA",
          "senior": "₹20-40 LPA",
          "top": "₹50L-1.5 Cr"
        },
        "exams": [
          "JEE Main",
          "GATE",
          "CSIR NET"
        ],
        "pros": [
          "Global significance",
          "Fully funded PhD options"
        ],
        "cons": [
          "Requires masters/PhD for good roles",
          "Low initial pay"
        ]
      },
      {
        "id": "bioinformatics",
        "name": "Bioinformatics",
        "icon": "🧮",
        "color": "#E74C3C",
        "route": "BSc Biology/Biotech → MSc Bioinformatics → Research/Pharma",
        "timeline": "5-6 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB marks needed for BSc admissions (merit-based at many colleges). For MSc/PhD, entrance exams and research aptitude matter more than board marks."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BSc Biotechnology/Biology + Learn Programming",
            "desc": "Study biology fundamentals. Simultaneously learn Python, R, SQL. Basic statistics and data analysis."
          },
          {
            "year": "3-5",
            "title": "MSc Bioinformatics",
            "desc": "JNU, Pondicherry University, IIT Madras, or abroad. Learn genomics data analysis, structural biology, drug design, machine learning for biology."
          },
          {
            "year": "5-6",
            "title": "Career",
            "desc": "Pharma R&D (genomics teams), CROs, biotech startups (Strand Life Sciences, MedGenome), or PhD for research."
          }
        ],
        "colleges": [
          "JNU, IISc, IIT Madras, Pondicherry University",
          "Abroad: MIT, Stanford, EMBL (Europe)",
          "Strand Life Sciences, MedGenome (India — bioinformatics companies)"
        ],
        "cost": "₹2-8 Lakh (India MSc) / ₹30-60L (abroad MS)",
        "salary": {
          "entry": "₹4-8 LPA (bioinformatics analyst)",
          "mid": "₹10-20 LPA (senior bioinformatician)",
          "senior": "₹25-45 LPA (lead / principal scientist)",
          "top": "₹60L-1.5 Cr (head of genomics at pharma / abroad)",
          "source": "MedGenome/Strand salary data, DBT JRF guidelines, NIH postdoc stipends"
        },
        "exams": [
          "GATE Biotechnology",
          "JNU/university entrances for MSc",
          "DBT JRF/BET for PhD funding",
          "GRE for abroad"
        ],
        "pros": [
          "COVID proved bioinformatics is essential — genome sequencing saved millions",
          "India's genomics market growing 20%+ annually",
          "Combines biology + CS — unique skillset",
          "PhD is fully funded in India (₹31K/month JRF) and abroad ($30K+/yr)"
        ],
        "cons": [
          "BSc-level bioinformatics jobs pay poorly",
          "Need MSc/PhD minimum for meaningful roles",
          "Few dedicated bioinformatics companies in India",
          "Academic career path is long (7-10 years to faculty)"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Bioinformatics PhDs are in massive demand at Boston/SF biotech hubs. NIH, EMBL, Wellcome Sanger Institute actively recruit. Fully funded PhDs available."
        },
        "familyAngle": "\"Bio informatics? Computer se bio padhaega?\" — the biology-meets-coding career is hard to explain to families. But COVID genome sequencing made it slightly more understandable.",
        "eligibility": "12th PCB + aptitude for coding. Or 12th PCM + interest in biology.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "clinical-research",
        "name": "Clinical Research",
        "icon": "🔬",
        "color": "#2C3E50",
        "route": "BSc/BPharm → PG Diploma in Clinical Research → CRO career",
        "timeline": "4-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB marks matter for BSc/BPharm admissions. After that, clinical research hiring is based on domain knowledge, GCP certification, and experience — not board marks."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BSc Life Sci / BPharm",
            "desc": "Study pharmacology, physiology, biochemistry. Understand how drugs work."
          },
          {
            "year": "3-4",
            "title": "PG Diploma in Clinical Research",
            "desc": "ICRI, Clinnova, Symbiosis (1 year). Learn GCP (Good Clinical Practice), regulatory affairs, data management, pharmacovigilance."
          },
          {
            "year": "4-5",
            "title": "Join CRO",
            "desc": "Contract Research Organizations: IQVIA, Parexel, Covance, Syneos Health, Cipla Mumbai. Roles: CRA (Clinical Research Associate), data manager, medical writer, pharmacovigilance."
          }
        ],
        "colleges": [
          "ICRI (Institute of Clinical Research India)",
          "Symbiosis (clinical research program)",
          "CROs provide on-job training: IQVIA, Parexel"
        ],
        "cost": "₹2-6 Lakh (BSc + PG Diploma)",
        "salary": {
          "entry": "₹3.5-6 LPA (clinical research coordinator)",
          "mid": "₹8-16 LPA (CRA / senior data manager)",
          "senior": "₹20-35 LPA (clinical operations manager)",
          "top": "₹50-80 LPA (VP Clinical Operations at pharma/CRO)",
          "source": "IQVIA India salary data, CDSCO (Central Drugs Standard Control Organization) guidelines, Glassdoor CRO roles"
        },
        "exams": [
          "No mandatory entrance",
          "GCP (Good Clinical Practice) certification",
          "ACRP certification (international)"
        ],
        "pros": [
          "India is a major global clinical trial hub — 2nd largest in Asia",
          "Structured career path with clear progression",
          "International travel for multi-country trials",
          "You're part of developing life-saving drugs"
        ],
        "cons": [
          "Starting salary is modest",
          "Extensive documentation and regulatory paperwork",
          "Frequent travel can be tiring (site monitoring visits)",
          "Regulatory delays in India can stall projects"
        ],
        "abroad": {
          "level": "High",
          "desc": "CRO professionals move easily to US/EU offices. IQVIA/Parexel have global mobility programs. Clinical research is needed everywhere drugs are developed."
        },
        "familyAngle": "\"Research karta hai? Scientist hai kya?\" — clinical research is different from lab research. You coordinate human drug trials, not pipette in a lab. But families like the word \"research\" regardless.",
        "eligibility": "BSc Life Sciences / BPharm / MBBS. PG Diploma recommended.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "public-health",
        "name": "Public Health (MPH)",
        "icon": "🌍",
        "color": "#D35400",
        "route": "BSc/MBBS → MPH (Master of Public Health) → WHO/UNICEF/Govt",
        "timeline": "5-7 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks matter for getting into good UG programs (BSc/MBBS). For MPH admissions, UG marks and entrance exams matter more. WHO/UNICEF don't care about board marks — they care about field experience and skills."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BSc / MBBS / BDS",
            "desc": "Any health science UG works. MBBS + MPH is the most powerful combination. BSc Community Health, Nursing also accepted."
          },
          {
            "year": "4-6",
            "title": "MPH (1-2 years)",
            "desc": "Study epidemiology, biostatistics, health policy, environmental health, nutrition. IIPH Gandhinagar, AIIMS, TISS, CMC Vellore, or abroad (Johns Hopkins, Harvard, LSHTM)."
          },
          {
            "year": "6+",
            "title": "Career",
            "desc": "WHO, UNICEF, Bill & Melinda Gates Foundation, NITI Aayog, Ministry of Health, NGOs (PATH, MSF). Design public health programs affecting millions."
          }
        ],
        "colleges": [
          "IIPH Gandhinagar, AIIMS (MPH)",
          "TISS Mumbai (Health), PHFI",
          "Abroad: Johns Hopkins (Bloomberg School), Harvard Chan, LSHTM London"
        ],
        "cost": "₹2-8L (India MPH) / ₹30-80L (abroad)",
        "salary": {
          "entry": "₹5-10 LPA (public health officer / researcher)",
          "mid": "₹15-30 LPA (program manager at WHO/UNICEF)",
          "senior": "₹35-60 LPA (country director / senior advisor)",
          "top": "₹80L-2 Cr (WHO senior leadership / global consulting)",
          "source": "WHO India salary scales, UNICEF pay bands (public data), PHFI placement data"
        },
        "exams": [
          "University-specific entrances for MPH",
          "TISS entrance",
          "GRE/IELTS for abroad MPH"
        ],
        "pros": [
          "COVID proved public health professionals save millions of lives",
          "Work with WHO, UNICEF, Gates Foundation — global prestige",
          "Directly impact population-level health outcomes",
          "Travel to underserved areas — extremely meaningful work"
        ],
        "cons": [
          "Initial salaries are modest compared to clinical medicine",
          "Academic/research career path can be slow",
          "Government health jobs involve bureaucracy",
          "Fieldwork in rural/remote areas is physically demanding"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "MPH from Johns Hopkins/Harvard = direct pipeline to WHO, UNICEF, CDC, World Bank. Global health positions available worldwide. Epidemiologists are in permanent global demand post-COVID."
        },
        "familyAngle": "\"Doctor nahi bana? Public health kya hai?\" — Indian families understand MBBS but not MPH. However, when COVID happened, it was public health professionals (not individual doctors) who coordinated the national response.",
        "eligibility": "BSc/MBBS/BDS/Nursing/any health science for MPH admission.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "nutrition",
        "name": "Nutrition & Dietetics",
        "icon": "🥗",
        "color": "#F39C12",
        "route": "BSc Nutrition → MSc → Registered Dietitian",
        "timeline": "5-6 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB marks needed for BSc Nutrition admissions. 50-60%+ expected. After that, career growth depends on clinical skills, certifications, and client base."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BSc Nutrition & Dietetics",
            "desc": "Study food science, human nutrition, clinical nutrition, community nutrition, food microbiology."
          },
          {
            "year": "3-5",
            "title": "MSc + Clinical Training",
            "desc": "MSc in Clinical Nutrition / Food Technology. Hospital internship is crucial for clinical dietetics."
          },
          {
            "year": "5+",
            "title": "Practice",
            "desc": "Hospital dietitian, sports nutrition, corporate wellness, YouTube/Instagram nutrition content, own clinic. Nmami Agarwal, Ryan Fernando are successful Indian examples."
          }
        ],
        "colleges": [
          "Lady Irwin College, Delhi (best in India)",
          "SNDT Mumbai, MS University Baroda",
          "NIFTEM (National Institute of Food Technology)",
          "All India Institute of Hygiene & Public Health"
        ],
        "cost": "₹2-5 Lakh total",
        "salary": {
          "entry": "₹2.5-5 LPA (hospital dietitian)",
          "mid": "₹6-12 LPA (chief dietitian / wellness consultant)",
          "senior": "₹15-25 LPA (own practice, corporate wellness head)",
          "top": "₹40-80 LPA (celebrity nutritionist / own brand)",
          "source": "Hospital salary data, Indian Dietetic Association survey, LinkedIn"
        },
        "exams": [
          "No specific national exam",
          "University entrances for BSc/MSc",
          "Specialized: ISAK (body composition), sports nutrition certifications"
        ],
        "pros": [
          "Health and wellness industry is exploding in India",
          "Instagram/YouTube nutrition influencers earn ₹5-50 LPA",
          "Growing demand for corporate wellness programs",
          "Can work independently — low setup cost for private practice"
        ],
        "cons": [
          "Hospital dietitians are severely underpaid (₹15-25K/month)",
          "Unregulated profession — anyone calls themselves a \"nutritionist\"",
          "Takes time to build private practice and clientele",
          "Dealing with fad diet misinformation is exhausting"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Registered Dietitian credential varies by country. Canada, Australia, UK have good demand. Need local licensing exams."
        },
        "familyAngle": "\"Diet plan banati hai? Ye koi career hai?\" — until a celebrity nutritionist charges ₹50K for a 1-month plan. The perception is changing as India gets more health-conscious.",
        "eligibility": "12th PCB. Some colleges accept PCM. Communication skills important for client-facing roles.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "food-tech",
        "name": "Food Technology & Processing",
        "icon": "🏭",
        "color": "#C0392B",
        "route": "12th PCB/PCM → BTech/BSc Food Technology → FMCG/Food Industry",
        "timeline": "4-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB/PCM marks needed for admission. NIFTEM entrance, state CET, or JEE Main for IIT Kharagpur food tech."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BTech/BSc Food Technology",
            "desc": "Study food chemistry, food microbiology, food processing engineering, quality control, FSSAI regulations."
          },
          {
            "year": "3-4",
            "title": "Industry Internship",
            "desc": "Intern at Nestlé, ITC Foods, Amul, Parle, Britannia, Haldiram's. Understand factory operations, QA/QC processes."
          },
          {
            "year": "4-5",
            "title": "Career",
            "desc": "FMCG giants (Nestlé, ITC, HUL, PepsiCo), food startups (Licious, Country Delight), FSSAI (govt regulator), food safety consulting."
          }
        ],
        "colleges": [
          "NIFTEM Kundli (National Institute of Food Technology)",
          "IIT Kharagpur (Food Process Engineering)",
          "CFTRI Mysore (premier research institute)",
          "IIFPT Thanjavur"
        ],
        "cost": "₹3-8 Lakh",
        "salary": {
          "entry": "₹3-6 LPA (QA/QC executive at FMCG)",
          "mid": "₹8-15 LPA (food technologist / R&D)",
          "senior": "₹20-35 LPA (head of R&D / plant manager)",
          "top": "₹50-80 LPA (VP Operations at large FMCG)",
          "source": "Nestlé/ITC/Amul annual reports, NIFTEM placement data, CFTRI salary scales"
        },
        "exams": [
          "JEE Main (for IIT Kharagpur food tech)",
          "NIFTEM entrance",
          "State CETs",
          "GATE Food Technology (for MTech/PSU jobs)"
        ],
        "pros": [
          "India's food processing industry: $500 billion — massive scale",
          "PM Modi's focus on food processing (PLI scheme)",
          "Combines science + industry — practical work",
          "Food startup boom: Licious ($72M funding), Country Delight, Zomato Kitchen"
        ],
        "cons": [
          "Starting salary is modest at many food companies",
          "Factory locations are often in industrial areas, not metros",
          "QC work can be repetitive",
          "Less glamorous than IT/finance careers"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Food safety professionals needed globally. FDA (USA), EFSA (EU) roles. Nestlé/PepsiCo global transfers possible. Food science MS abroad opens more doors."
        },
        "familyAngle": "\"Food factory mein kaam karega?\" — food tech is building the snacks your family eats. When you say \"I develop new Maggi flavors at Nestlé,\" everyone's interested.",
        "eligibility": "12th PCB or PCM. Chemistry knowledge important.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "optometry",
        "name": "Optometry",
        "icon": "👁️",
        "color": "#27AE60",
        "route": "12th PCB → BOptom (4 yrs) → Practice / Hospital / Eyewear Industry",
        "timeline": "4-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB marks (50-60%+) needed for BOptom admissions. Many state-level entrances or merit-based admission. After that, clinical skills matter."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BOptom (Bachelor of Optometry)",
            "desc": "Study visual science, ocular anatomy, contact lens fitting, low vision aids, orthoptics. Practical training in eye hospitals."
          },
          {
            "year": "4-5",
            "title": "Practice / Specialize",
            "desc": "Join eye hospitals (LV Prasad, Aravind Eye), optical chains (Lenskart, Titan Eye+), or start own optometry clinic."
          }
        ],
        "colleges": [
          "LVPEI (LV Prasad Eye Institute, Hyderabad) — gold standard",
          "BITS Pilani (Optometry program)",
          "Elite School of Optometry, Chennai (Sankara Nethralaya)",
          "AIIMS (optometry)"
        ],
        "cost": "₹2-6 Lakh",
        "salary": {
          "entry": "₹3-5 LPA (staff optometrist)",
          "mid": "₹6-12 LPA (senior optometrist / specialty practice)",
          "senior": "₹15-25 LPA (own clinic / head optometrist)",
          "top": "₹30-50 LPA (own chain of clinics / industry roles)",
          "source": "LVPEI, Aravind Eye Care data, Lenskart salary data, IOA salary survey"
        },
        "exams": [
          "State-level optometry entrances",
          "LVPEI entrance test",
          "No national-level exam currently"
        ],
        "pros": [
          "India has massive eye care gap — 600 million need vision correction",
          "Lenskart raised $1.5B — eyewear is booming",
          "Quick degree (4 years) with direct clinical practice",
          "Can open own clinic with ₹5-10 Lakh investment"
        ],
        "cons": [
          "Often confused with ophthalmology (MD eye doctor) — optometrists can't do surgery",
          "Starting salary is modest",
          "Limited specialization pathways compared to MBBS",
          "Public awareness of optometry as a profession is low"
        ],
        "abroad": {
          "level": "High",
          "desc": "Australia, UK, USA have optometry licensing pathways. Salary: $80-120K in USA. Optometry is a respected healthcare profession globally."
        },
        "familyAngle": "\"Eye doctor hai? MBBS kiya?\" — no, optometrists are NOT ophthalmologists. They're primary eye care providers. But the distinction is lost on most Indian families. Great career with good work-life balance.",
        "eligibility": "12th PCB with 50%+ marks.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "wildlife",
        "name": "Wildlife Conservation & Forestry",
        "icon": "🐅",
        "color": "#34495E",
        "route": "BSc Zoology/Forestry → WII (Wildlife Institute) → Forest Officer / Conservation",
        "timeline": "5-7 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB/PCM marks needed for BSc admissions. For IFS (Indian Forest Service) through UPSC, board marks are irrelevant. WII entrance is based on its own test."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BSc Zoology / Botany / Forestry",
            "desc": "Study ecology, animal behavior, conservation biology, plant science. Volunteer at wildlife NGOs, national parks."
          },
          {
            "year": "3-5",
            "title": "MSc Wildlife / WII Dehradun",
            "desc": "Wildlife Institute of India (WII Dehradun) — India's premier wildlife training institute. Or MSc Ecology at universities. Field-heavy training."
          },
          {
            "year": "5+",
            "title": "Career",
            "desc": "UPSC Indian Forest Service (IFS), State Forest Service, WWF India, WCS India, wildlife filmmaker, Project Tiger/Elephant coordination."
          }
        ],
        "colleges": [
          "WII Dehradun (Wildlife Institute of India)",
          "FRI Dehradun (Forest Research Institute)",
          "BNHS Mumbai, NCBS Bangalore (research)"
        ],
        "cost": "₹2-6 Lakh",
        "salary": {
          "entry": "₹4-7 LPA (research fellow / forest range officer)",
          "mid": "₹10-20 LPA (ACF / DFO level, IFS)",
          "senior": "₹20-35 LPA (CCF / PCCF level, IFS)",
          "top": "₹35-50 LPA (DG Forests / Head of State Forest)",
          "source": "UPSC IFS pay matrix (7th CPC), WII salary data, WWF India pay structure"
        },
        "exams": [
          "UPSC CSE (for Indian Forest Service — IFS)",
          "WII entrance exam",
          "State forest service exams",
          "GATE Ecology (for some research positions)"
        ],
        "pros": [
          "Live in forests, work with tigers, elephants, birds — dream job for nature lovers",
          "IFS officers are powerful — manage thousands of hectares of forest",
          "India has 100+ national parks and 500+ wildlife sanctuaries",
          "Conservation is increasingly funded — government and international"
        ],
        "cons": [
          "Remote postings — sometimes no electricity, internet, or basic facilities",
          "Dangerous — encounters with poachers, wild animals",
          "IFS through UPSC is extremely competitive",
          "Research positions pay modestly"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "International conservation organizations (WWF, IUCN, WCS) operate globally. PhD in ecology opens doors to research positions in USA/UK/Australia. Wildlife filmmaking is global (BBC Earth, Nat Geo)."
        },
        "familyAngle": "\"Jungle mein rahega? Shaadi kaun karega?\" — Indian families worry about forest postings. But IFS officers live in beautiful bungalows inside national parks, have government perks, and do profoundly meaningful work. Not bad at all.",
        "eligibility": "12th PCB/PCM. UPSC CSE age 21-32. Physical fitness important for fieldwork.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "audiology",
        "name": "Audiology & Speech Therapy (BASLP)",
        "icon": "🦻",
        "color": "#1ABC9C",
        "route": "12th PCB → BASLP (4 yrs) → Audiologist / Speech Therapist",
        "timeline": "4-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB with 50%+ for BASLP admission. Entrance exams at AIISH Mysuru, state universities. After that, clinical skills matter entirely."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BASLP (Audiology & Speech-Language Pathology)",
            "desc": "Study hearing science, speech disorders, language development, audiological assessment, cochlear implants, stuttering therapy."
          },
          {
            "year": "4-5",
            "title": "Practice",
            "desc": "ENT hospitals, rehabilitation centers, cochlear implant centers, special schools, own clinic. Teletherapy (online speech therapy) is growing post-COVID."
          }
        ],
        "colleges": [
          "AIISH Mysuru (All India Institute of Speech & Hearing) — India's #1",
          "TN Dr MGR Medical University, Chennai",
          "AYJNIHH Mumbai",
          "Various state university BASLP programs"
        ],
        "cost": "₹2-5 Lakh",
        "salary": {
          "entry": "₹3-5 LPA (speech therapist at hospital)",
          "mid": "₹6-12 LPA (senior audiologist / own practice)",
          "senior": "₹15-25 LPA (head of department / own center)",
          "top": "₹30-50 LPA (cochlear implant audiologist / international roles)",
          "source": "AIISH placement data, ISHA salary survey, hospital pay scale data"
        },
        "exams": [
          "AIISH entrance exam",
          "State-level BASLP entrances",
          "RCI registration (mandatory for practice)"
        ],
        "pros": [
          "India has 63 million hearing impaired people — massive underserved population",
          "Cochlear implant industry is growing 15%+ annually",
          "Online speech therapy opens national/international client base",
          "Deeply rewarding — helping children speak their first words"
        ],
        "cons": [
          "Very few people know this profession exists",
          "Starting salary is low at many hospitals",
          "Limited awareness means limited respect from family/society",
          "RCI registration process can be bureaucratic"
        ],
        "abroad": {
          "level": "High",
          "desc": "Speech therapists are in chronic shortage in USA, UK, Australia. ASHA (American Speech-Language-Hearing Association) certification pathway exists for Indian BASLP graduates. US salary: $60-90K."
        },
        "familyAngle": "\"Speech therapy? Ye kaunsa doctor hai?\" — most families have never heard of BASLP. But when a child starts speaking because of your therapy, parents become your biggest advocates. Under-the-radar but incredibly meaningful.",
        "eligibility": "12th PCB with 50%+. Good communication skills and patience essential.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "sports-medicine",
        "name": "Sports Medicine",
        "icon": "🏃",
        "color": "#9B59B6",
        "route": "MBBS → MD Sports Medicine → Team Doctor / Sports Clinic",
        "timeline": "8-10 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB 50%+ for NEET eligibility. After that, only NEET and NEET-PG scores matter. Board marks have zero impact on specialization choice."
        },
        "steps": [
          {
            "year": "1-6",
            "title": "MBBS",
            "desc": "Clear NEET. Complete 5.5 years MBBS (4.5 years + 1 year internship)."
          },
          {
            "year": "6-9",
            "title": "MD Sports Medicine (3 years)",
            "desc": "NEET-PG → MD Sports Medicine at AFMC Pune, AIIMS, GSMC Mumbai. Very limited seats (30-40 PG seats in entire India)."
          },
          {
            "year": "9+",
            "title": "Career",
            "desc": "IPL/ISL team doctor, BCCI medical staff, Sports Authority of India, own sports injury clinic, Olympic team medical squad."
          }
        ],
        "colleges": [
          "AFMC Pune, AIIMS Delhi (Sports Medicine PG)",
          "GSMC Mumbai, CMC Vellore",
          "Abroad: FIFA Medical Centre network"
        ],
        "cost": "₹5-25 Lakh (MBBS depending on govt/private) + PG costs",
        "salary": {
          "entry": "₹12-20 LPA (junior sports medicine consultant)",
          "mid": "₹25-40 LPA (team doctor / senior consultant)",
          "senior": "₹40-60 LPA (chief medical officer for sports team)",
          "top": "₹80L-2 Cr (IPL team head doctor / international consultancy)",
          "source": "BCCI medical team salary data, SAI pay scales, sports medicine practice earnings"
        },
        "exams": [
          "NEET UG",
          "NEET PG"
        ],
        "pros": [
          "Work with India's top cricketers, footballers, Olympians",
          "Combining medicine with passion for sports",
          "Growing field — injury prevention science is advancing rapidly",
          "International sports medicine organizations (FIFA, IOC) have programs"
        ],
        "cons": [
          "Only ~30-40 MD Sports Medicine seats in India — extremely competitive",
          "Long training (8-10 years minimum)",
          "Must be available during tournaments — irregular schedule",
          "Income is lower than surgical specialties"
        ],
        "abroad": {
          "level": "High",
          "desc": "FIFA Medical Centres, IOC medical commissions, Premier League / NBA team doctors. Sports medicine is a global field. Board certification varies by country."
        },
        "familyAngle": "\"Cricketer ka doctor banega?\" — actually yes. And earning ₹40 LPA while traveling with the Indian cricket team. Parents are very supportive of this combination.",
        "eligibility": "MBBS + NEET PG qualification. Physical fitness helpful.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "prosthetics",
        "name": "Prosthetics & Orthotics (BPO)",
        "icon": "🦿",
        "color": "#3498DB",
        "route": "12th PCB → BPO (Bachelor of Prosthetics & Orthotics) → Rehab Centers",
        "timeline": "4-4.5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB with 50%+ for BPO admission. Entrance at NIOH Kolkata, NILD. After that, clinical skills matter."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BPO (Bachelor of Prosthetics & Orthotics)",
            "desc": "Study anatomy, biomechanics, material science, prosthetic design, orthotic fabrication. Clinical training at rehabilitation centers."
          },
          {
            "year": "4+",
            "title": "Career",
            "desc": "Government rehabilitation centers, ALIMCO, private P&O clinics, Bhagwan Mahaveer Viklang Sahayata Samiti, research in smart prosthetics."
          }
        ],
        "colleges": [
          "NIOH Kolkata (National Institute for the Orthopedically Handicapped)",
          "NILD Kolkata",
          "CRC Lucknow/Ahmedabad",
          "NIMHANS Bangalore (affiliated)"
        ],
        "cost": "₹2-5 Lakh",
        "salary": {
          "entry": "₹3-5 LPA (prosthetist/orthotist)",
          "mid": "₹6-12 LPA (senior P&O professional)",
          "senior": "₹15-25 LPA (chief P&O / own center)",
          "top": "₹30-45 LPA (research lead / international P&O designer)",
          "source": "NIOH salary data, ALIMCO pay scales, rehabilitation center salary info"
        },
        "exams": [
          "NIOH entrance exam",
          "RCI registration (mandatory for practice)"
        ],
        "pros": [
          "Deeply meaningful — restore mobility to amputees and disabled people",
          "India has millions of amputees — massive underserved population",
          "3D-printed prosthetics is a growing innovation area",
          "Very few qualified P&O professionals — strong demand"
        ],
        "cons": [
          "Low awareness — most people don't know this profession exists",
          "Starting salary is modest",
          "Physically demanding — fabrication, fitting, adjustment",
          "Limited career ceiling compared to mainstream healthcare"
        ],
        "abroad": {
          "level": "Medium-High",
          "desc": "P&O professionals needed globally. USA, UK have certification pathways. WHO has global prosthetics programs for developing countries. International humanitarian organizations (ICRC) actively recruit."
        },
        "familyAngle": "\"Nakli haat-pair banata hai?\" — yes, and it changes someone's entire quality of life. One of the most underappreciated but deeply impactful healthcare professions in India.",
        "eligibility": "12th PCB. Empathy + engineering mindset. Manual dexterity.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      },
      {
        "id": "agri-science",
        "name": "Agriculture & Agronomy (BSc Agri)",
        "icon": "🌾",
        "color": "#2980B9",
        "route": "12th PCB/PCM → BSc Agriculture (ICAR) → Agri Officer / Agribusiness",
        "timeline": "4-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th PCB/PCM marks used for ICAR AIEEA UG entrance merit. 50%+ typically required. After degree, IBPS AFO (Agriculture Field Officer) exam doesn't need board marks."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BSc Agriculture (4 years)",
            "desc": "ICAR AIEEA UG entrance. Study agronomy, soil science, entomology, plant pathology, farm management, agricultural economics."
          },
          {
            "year": "3-4",
            "title": "Specialize",
            "desc": "Crop science, horticulture, soil science, agricultural extension, agribusiness management."
          },
          {
            "year": "4+",
            "title": "Career",
            "desc": "IBPS AFO (Agriculture Field Officer at banks), State Agriculture Department, FCI, NABARD, Bayer/Syngenta/UPL (agri-companies), own agribusiness startup."
          }
        ],
        "colleges": [
          "IARI Delhi (Pusa Institute — India's MIT of agriculture)",
          "TNAU Coimbatore, PAU Ludhiana, UAS Bangalore",
          "ICAR universities across India"
        ],
        "cost": "₹2-5 Lakh (heavily subsidized government colleges)",
        "salary": {
          "entry": "₹4-7 LPA (AFO / agri extension officer)",
          "mid": "₹8-16 LPA (senior agronomist / bank AFO)",
          "senior": "₹18-30 LPA (agribusiness head / NABARD)",
          "top": "₹40-70 LPA (agri-startup founder / global agribusiness)",
          "source": "IBPS AFO pay scale, ICAR scientist pay (7th CPC), Bayer/Syngenta India salary"
        },
        "exams": [
          "ICAR AIEEA UG",
          "IBPS AFO (for bank agriculture officer)",
          "UPSC (for ARS — Agricultural Research Service)",
          "GATE Agriculture (for MTech/PSU)"
        ],
        "pros": [
          "India's agricultural sector: $400 billion+ — foundational industry",
          "Government jobs with stability (IBPS AFO, state agriculture dept)",
          "AgriTech startups booming (DeHaat, AgroStar, Ninjacart)",
          "Directly impacting food security for 1.4 billion people"
        ],
        "cons": [
          "Fieldwork in rural areas — not metro lifestyle",
          "Agricultural jobs are undervalued socially despite being critical",
          "Salary growth is slower than IT/finance",
          "Weather dependence — drought/flood years are stressful"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "MS Agronomy at US land-grant universities (UC Davis, Purdue, Cornell). Global agribusiness companies (Cargill, Bayer, BASF). Australia/NZ agriculture sector hires."
        },
        "familyAngle": "\"Kisani karega padh-likh ke?\" — modern agriculture is precision farming with drones, AI-based crop analysis, and ₹100 Cr agri-startups. Not manual farming. But the perception gap is wide.",
        "eligibility": "12th PCB/PCM with 50%+. ICAR AIEEA rank.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Science"
          ],
          "notes": "Needs: Science PCB"
        }
      }
    ]
  },
  "humanities": {
    "id": "humanities",
    "name": "Humanities / Arts",
    "icon": "📚",
    "color": "#FFB347",
    "tagline": "Social Sciences, Law & Liberal Arts",
    "description": "For creative thinkers, social leaders, writers, and those who want to understand and shape society.",
    "preview": [
      "UPSC Civil Services",
      "Law (CLAT)",
      "Design (NID/NIFT)",
      "Psychology"
    ],
    "paths": [
      {
        "id": "upsc",
        "name": "UPSC Civil Services (IAS/IPS/IFS)",
        "icon": "🏛️",
        "route": "Any Graduation → UPSC CSE Prelims → Mains → Interview",
        "timeline": "4-8 years",
        "difficulty": "Extremely High",
        "cost": "₹1-5 Lakh (coaching)",
        "salary": {
          "entry": "₹1L/month effective",
          "mid": "₹1.4-2 Lakh/month",
          "senior": "₹2-2.5 Lakh/month",
          "top": "₹2.5 Lakh/month + extensive perks"
        },
        "exams": [
          "UPSC CSE (Prelims + Mains + Interview)"
        ],
        "pros": [
          "Unmatched power and impact",
          "Prestige",
          "Extensive perks"
        ],
        "cons": [
          "0.1% success rate",
          "Years of stressful prep",
          "Transfers"
        ]
      },
      {
        "id": "law",
        "name": "Law (CLAT → NLU)",
        "icon": "⚖️",
        "route": "12th → CLAT → BA LLB at NLU (5 yrs) → Corporate/Litigation",
        "timeline": "5-8 years",
        "difficulty": "High",
        "cost": "₹5-25 Lakh",
        "salary": {
          "entry": "₹10-18 LPA",
          "mid": "₹25-50 LPA",
          "senior": "₹80L-2 Cr",
          "top": "₹3-15 Cr"
        },
        "exams": [
          "CLAT",
          "AILET",
          "LSAT"
        ],
        "pros": [
          "Intellectually stimulating",
          "High corporate pay"
        ],
        "cons": [
          "Long hours",
          "Initial struggle in litigation"
        ]
      },
      {
        "id": "design",
        "name": "Design (NID / NIFT / IIT IDC)",
        "icon": "🎨",
        "route": "12th → NID DAT / NIFT / UCEED → BDes (4 yrs)",
        "timeline": "4-6 years",
        "difficulty": "Medium-High",
        "cost": "₹5-25 Lakh",
        "salary": {
          "entry": "₹4-8 LPA",
          "mid": "₹12-25 LPA",
          "senior": "₹30-50 LPA",
          "top": "₹60L-1.5 Cr"
        },
        "exams": [
          "NID DAT",
          "NIFT Entrance",
          "UCEED"
        ],
        "pros": [
          "Creative freedom",
          "High demand for UX/UI designers"
        ],
        "cons": [
          "Competitive entry",
          "Freelance instability"
        ]
      },
      {
        "id": "psychology",
        "name": "Psychology",
        "icon": "🧠",
        "route": "12th → BA Psychology → MA → MPhil Clinical Psych",
        "timeline": "7-9 years",
        "difficulty": "Medium-High",
        "cost": "₹1-15 Lakh",
        "salary": {
          "entry": "₹3-5 LPA",
          "mid": "₹6-12 LPA",
          "senior": "₹15-30 LPA",
          "top": "₹40-60 LPA"
        },
        "exams": [
          "CUET",
          "TISS Entrance",
          "NIMHANS Entrance",
          "RCI Registration"
        ],
        "pros": [
          "Meaningful work",
          "Growing demand"
        ],
        "cons": [
          "Long path to independent practice",
          "MPhil seat bottleneck"
        ]
      },
      {
        "id": "journalism",
        "name": "Journalism & Mass Communication",
        "icon": "📰",
        "route": "12th → BJMC (3 yrs) → PG Diploma/MJMC → Media career",
        "timeline": "3-5 years",
        "difficulty": "Medium",
        "cost": "₹1-8 Lakh",
        "salary": {
          "entry": "₹3-5 LPA",
          "mid": "₹8-15 LPA",
          "senior": "₹20-35 LPA",
          "top": "₹50L-2 Cr"
        },
        "exams": [
          "IIMC Entrance",
          "Jamia Entrance"
        ],
        "pros": [
          "Exciting work",
          "Digital media opportunities"
        ],
        "cons": [
          "Low starting pay",
          "High stress"
        ]
      },
      {
        "id": "international-relations",
        "name": "International Relations / Diplomacy",
        "icon": "🌐",
        "color": "#F39C12",
        "route": "BA Political Science → MA IR → UPSC IFS / Think Tanks / UN",
        "timeline": "5-7 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks matter for getting into top BA colleges (DU: 95%+ cutoff for Political Science at Stephens/Hindu). For UPSC IFS or think tank jobs, board marks are irrelevant."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BA Political Science / History",
            "desc": "Study at JNU, DU, Ashoka, Symbiosis, Jindal. Focus on global politics, diplomacy, international law, foreign policy."
          },
          {
            "year": "3-5",
            "title": "MA International Relations",
            "desc": "JNU (School of International Studies — India's best), Ashoka, OP Jindal. Or abroad: Oxford, LSE, SOAS, Georgetown, Columbia SIPA."
          },
          {
            "year": "5+",
            "title": "Career",
            "desc": "UPSC IFS (Indian Foreign Service), think tanks (ORF, IPCS, IDSA), UN system, NGOs, diplomatic consulting, foreign policy journalism."
          }
        ],
        "colleges": [
          "JNU (School of International Studies) — #1 for IR in India",
          "Ashoka University, OP Jindal",
          "Abroad: LSE, Oxford, Georgetown, Columbia SIPA"
        ],
        "cost": "₹2-10L (India) / ₹30-80L (abroad)",
        "salary": {
          "entry": "₹5-10 LPA (research associate at think tank / junior IFS)",
          "mid": "₹15-25 LPA (senior fellow / diplomat abroad posting)",
          "senior": "₹25-45 LPA (ambassador level / UN professional)",
          "top": "₹50L-1 Cr (UN director / senior ambassador with perks)",
          "source": "DoPT IFS pay matrix, UN salary scales (public), ORF/IDSA salary data"
        },
        "exams": [
          "CUET (for DU BA)",
          "JNU entrance",
          "UPSC CSE (for IFS — picked from same exam as IAS)",
          "GRE/IELTS for abroad"
        ],
        "pros": [
          "Travel the world as a diplomat — live in different countries every 3-4 years",
          "Directly shape India's foreign policy",
          "UN jobs offer tax-free salaries + international exposure",
          "Intellectually stimulating — global issues, geopolitics"
        ],
        "cons": [
          "IFS has fewer than 30 seats per year through UPSC — extremely competitive",
          "Think tank salaries can be low initially",
          "Diplomatic life = frequent moves, disruptive for families",
          "Academic career requires PhD + publication record"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "IFS = international postings. UN system based globally. MA IR from LSE/Georgetown = direct pipeline to international organizations. One of the most globally mobile careers."
        },
        "familyAngle": "\"Rajneeti mein jaayega?\" — families confuse IR with politics. It's actually about representing India globally. IFS officers live in embassies worldwide — hard to complain about that.",
        "eligibility": "BA in any stream. Strong reading, writing, analytical skills. Multiple languages are a huge advantage.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Humanities"
          ],
          "notes": "Needs: Humanities / Arts"
        }
      },
      {
        "id": "public-policy",
        "name": "Public Policy",
        "icon": "📜",
        "color": "#C0392B",
        "route": "BA (any) → Master of Public Policy (MPP) → Govt / Think Tank / Consulting",
        "timeline": "5-6 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks needed for good UG college admissions. For MPP, entrance exams and statement of purpose matter more. NLSIU, IIM, IIT MPP programs look at background holistically."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BA Economics / Political Science / Law",
            "desc": "Study governance, economics, sociology. Intern with MPs, government departments, NGOs during summers."
          },
          {
            "year": "3-5",
            "title": "MPP / MPA",
            "desc": "IIM Bangalore (MPP), IIT Delhi (MPP), Ashoka, NLSIU, ISB (PPP). Abroad: Harvard Kennedy School, Columbia SIPA, Lee Kuan Yew School."
          },
          {
            "year": "5+",
            "title": "Career",
            "desc": "NITI Aayog, PMO policy team, state government advisory, Dalberg/BCG public sector, Bill Gates Foundation, World Bank."
          }
        ],
        "colleges": [
          "IIM Bangalore (MPP — excellent)",
          "IIT Delhi (MPP)",
          "Ashoka, NLSIU",
          "Abroad: Harvard Kennedy, Princeton WWS, Lee Kuan Yew"
        ],
        "cost": "₹5-15L (India MPP) / ₹30-80L (abroad)",
        "salary": {
          "entry": "₹6-12 LPA (policy researcher / government fellow)",
          "mid": "₹15-30 LPA (policy advisor / consulting manager)",
          "senior": "₹30-50 LPA (senior advisor / think tank director)",
          "top": "₹60L-1.5 Cr (World Bank senior, McKinsey public sector partner)",
          "source": "NITI Aayog fellowship data, World Bank salary scales, McKinsey public sector practice"
        },
        "exams": [
          "CUET/university entrances for BA",
          "CAT/GMAT for IIM MPP",
          "GRE for abroad",
          "UPSC CSE (alternative path to policy through IAS)"
        ],
        "pros": [
          "Design policies that affect 1.4 billion people",
          "Growing demand — governments are data-driven now",
          "International organization salaries are excellent",
          "Deeply meaningful work — education, healthcare, poverty reduction"
        ],
        "cons": [
          "Government policy jobs pay less than private sector equivalents",
          "Bureaucratic inertia can be frustrating — change is slow",
          "Limited positions at top organizations",
          "Need patience — policy impact takes years to materialize"
        ],
        "abroad": {
          "level": "High",
          "desc": "MPP from Harvard/Princeton = World Bank, IMF, UN pipeline. Global public policy consulting (McKinsey, BCG) has international offices. Development sector is inherently global."
        },
        "familyAngle": "\"Sarkari kaam hai?\" — sort of, but you're advising the PM on education policy, not stamping passports. The distinction is lost on most relatives until you show your NITI Aayog badge.",
        "eligibility": "BA in any stream. Strong analytical and writing skills.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Humanities"
          ],
          "notes": "Needs: Humanities / Arts"
        }
      },
      {
        "id": "content-strategy",
        "name": "Content Strategy & Creator Economy",
        "icon": "✍️",
        "color": "#27AE60",
        "route": "BA English/Journalism → Content Roles → Strategy Lead / YouTube / Substack",
        "timeline": "3-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks are 100% irrelevant. Content quality, audience engagement, SEO skills, and writing ability are everything. Your best resume is your published work."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BA English/Journalism + Start Writing",
            "desc": "Study literature, communication. Start a blog, YouTube channel, or newsletter from Day 1. Build an audience while studying."
          },
          {
            "year": "2-4",
            "title": "Professional Content Roles",
            "desc": "Join as content writer → content strategist at startups/agencies. Learn SEO, social media strategy, content management systems."
          },
          {
            "year": "3-5",
            "title": "Lead or Create",
            "desc": "Head of Content at companies (₹15-30 LPA). OR: build own audience — YouTube (Ad revenue + brand deals), Substack (paid newsletter), Instagram content consulting."
          }
        ],
        "colleges": [
          "No specific college matters",
          "MICA Ahmedabad (if you want a master's in communications)",
          "Self-learning: HubSpot Content Academy, Google Certificates"
        ],
        "cost": "₹0-5 Lakh (self-taught route is free, UG costs vary)",
        "salary": {
          "entry": "₹3-6 LPA (content writer)",
          "mid": "₹8-18 LPA (content strategist / senior writer)",
          "senior": "₹20-40 LPA (head of content / editorial director)",
          "top": "₹50L-5 Cr (successful YouTube creator / content entrepreneur)",
          "source": "LinkedIn Salary Insights, YouTube Ad Revenue calculator (Social Blade), creator economy reports"
        },
        "exams": [
          "No formal exams",
          "Google/HubSpot certifications (free)",
          "Portfolio >>> certifications"
        ],
        "pros": [
          "Creator economy is $100 billion+ globally",
          "Work from anywhere — ultimate location freedom",
          "Multiple income streams: salary + freelance + own content + brand deals",
          "Indian content creators like Dhruv Rathee, Tanmay Bhat earn ₹1-10 Cr+/year"
        ],
        "cons": [
          "Extremely competitive — millions are trying to be \"content creators\"",
          "Income is unstable for independent creators initially",
          "Algorithm changes can kill your reach overnight",
          "Burnout from constantly producing content"
        ],
        "abroad": {
          "level": "Medium-High",
          "desc": "Content strategy skills are universal. Remote work for global companies from India. Successful creators earn in USD through YouTube/Substack. No visa needed if you're your own boss from India."
        },
        "familyAngle": "\"Likhta hai? Journalist ban ja\" — Indian families see writing as a hobby, not a career. Until you show them that top content strategists at Google earn ₹30 LPA and top YouTubers earn ₹1 Cr+. Then writing becomes \"smart choice.\"",
        "eligibility": "Anyone who can write well. No degree requirements.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Humanities"
          ],
          "notes": "Needs: Humanities / Arts"
        }
      },
      {
        "id": "special-education",
        "name": "Special Education (BEd SpEd)",
        "icon": "🧩",
        "color": "#34495E",
        "route": "12th → BEd Special Education (2-4 yrs) → Special Educator / Therapist",
        "timeline": "2-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks required for BEd admission (typically 50%+). RCI (Rehabilitation Council of India) recognition is mandatory for the program you join. After that, skills with children matter more than marks."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BEd Special Education / DEdSE",
            "desc": "Study learning disabilities, autism spectrum, hearing impairment, intellectual disabilities. Practical training in special schools."
          },
          {
            "year": "4+",
            "title": "Career",
            "desc": "Special schools, mainstream schools (inclusive education), early intervention centers, NGOs, own practice as learning disability specialist."
          }
        ],
        "colleges": [
          "RCI-recognized programs (mandatory)",
          "NIEPMD Chennai, AYJNIHH Mumbai",
          "Various state universities with RCI approval"
        ],
        "cost": "₹1-4 Lakh",
        "salary": {
          "entry": "₹2.5-4 LPA (special educator)",
          "mid": "₹5-10 LPA (senior special educator / coordinator)",
          "senior": "₹12-20 LPA (own center / training consultant)",
          "top": "₹25-40 LPA (founder of special education center chain)",
          "source": "RCI salary guidelines, special school salary data, NIEPMD placement"
        },
        "exams": [
          "RCI-CRE (common registration exam)",
          "State teacher eligibility tests (CTET category)",
          "University entrance exams"
        ],
        "pros": [
          "Deeply meaningful — you change children's lives",
          "Growing demand as India's NEP 2020 pushes inclusive education",
          "Can open own early intervention center",
          "Very few qualified special educators — strong demand"
        ],
        "cons": [
          "Significantly underpaid compared to mainstream education",
          "Emotionally demanding work",
          "Requires immense patience and empathy",
          "Parents of differently-abled children often face societal stigma"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Special education professionals needed globally. US, UK, Australia have certification requirements. International schools hire from India."
        },
        "familyAngle": "\"Special school mein?\" — some families don't understand the importance. But NEP 2020's inclusive education mandate means every school will need trained special educators. It's a calling more than a career.",
        "eligibility": "12th from any stream. Empathy and patience are non-negotiable.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Humanities"
          ],
          "notes": "Needs: Humanities / Arts"
        }
      },
      {
        "id": "criminology",
        "name": "Criminology",
        "icon": "🔎",
        "color": "#1ABC9C",
        "route": "BA Sociology/Psychology → MA Criminology → Police/Forensics/Research",
        "timeline": "5-6 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks needed for BA admissions at good universities. For criminology career (police, forensics), relevant exams and skills matter more than board marks."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BA Sociology / Psychology / Pol Science",
            "desc": "Study human behavior, social structures, law. Volunteer with legal aid clinics, police community programs."
          },
          {
            "year": "3-5",
            "title": "MA Criminology / Forensic Science",
            "desc": "TISS Mumbai, University of Madras, Panjab University. Study criminal behavior, penology, victimology, cyber crime, forensic psychology."
          },
          {
            "year": "5+",
            "title": "Career",
            "desc": "Police (through competitive exams), CBI/NIA analyst, NCRB data analyst, prison reform NGOs, forensic psychology, academic research."
          }
        ],
        "colleges": [
          "TISS Mumbai (Criminology & Justice)",
          "University of Madras (MA Criminology)",
          "Panjab University",
          "Abroad: Cambridge, UCL (Criminology MSc)"
        ],
        "cost": "₹2-8 Lakh",
        "salary": {
          "entry": "₹4-7 LPA (research associate / police sub-inspector)",
          "mid": "₹8-18 LPA (criminologist / senior researcher)",
          "senior": "₹20-35 LPA (CBI/NIA analyst / professor)",
          "top": "₹40-60 LPA (senior IPS / international crime consultant)",
          "source": "NCRB data, police pay scales (7th CPC), TISS placement data"
        },
        "exams": [
          "UPSC/State PSC (for police service)",
          "University entrances for MA",
          "CBI/NIA recruitment exams"
        ],
        "pros": [
          "Crime analysis is increasingly data-driven — tech-savvy criminologists are in demand",
          "Cyber crime is exploding — new specialization with few experts",
          "Direct impact on public safety",
          "Academic career path available (UGC NET → Professor)"
        ],
        "cons": [
          "Limited dedicated criminology roles in India",
          "Academic positions are competitive and slow to open",
          "Field can be emotionally heavy — dealing with crime, victims, prisons",
          "Less recognized as a distinct profession in India vs abroad"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Criminology is well-established in UK, USA, Australia. FBI, Interpol, academic positions. MA from Cambridge/UCL opens global doors. British Criminology programs are world-renowned."
        },
        "familyAngle": "\"Crime ka padhai? Police banna hai?\" — criminology is much broader than police work. But the association is inevitable in Indian families.",
        "eligibility": "BA in Social Sciences. Analytical mindset. Objectivity essential.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Humanities"
          ],
          "notes": "Needs: Humanities / Arts"
        }
      },
      {
        "id": "tech-writing",
        "name": "Technical Writing",
        "icon": "📝",
        "color": "#9B59B6",
        "route": "BA English/BTech → Tech Writing Courses → Documentation Role → Lead",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks 100% irrelevant. Your writing samples, ability to simplify complex topics, and understanding of technology are what employers evaluate. Google's tech writing course is free."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Any Degree + Learn Tech Writing",
            "desc": "BA English, BTech, BCA — any works. Take Google's Technical Writing course (free). Learn Markdown, Git, API documentation, DITA/XML."
          },
          {
            "year": "2-3",
            "title": "Build Portfolio",
            "desc": "Contribute to open-source documentation (GitHub). Write API docs, user guides, tutorials. Publish on Medium/dev.to."
          },
          {
            "year": "3-4",
            "title": "Career",
            "desc": "Tech writer at Google, Microsoft, Atlassian, Freshworks, Zoho. Senior tech writers earn ₹18-30 LPA in India. Can go fully remote."
          }
        ],
        "colleges": [
          "No specific college",
          "Google Technical Writing courses (free)",
          "tcworld certification (international standard)"
        ],
        "cost": "₹0-5 Lakh (free courses + UG degree costs)",
        "salary": {
          "entry": "₹4-8 LPA (junior tech writer)",
          "mid": "₹10-20 LPA (senior tech writer)",
          "senior": "₹22-35 LPA (lead / staff tech writer)",
          "top": "₹40-60 LPA (documentation manager at FAANG)",
          "source": "levels.fyi, Glassdoor tech writer India, Google/Microsoft India technical writing data"
        },
        "exams": [
          "No mandatory exams",
          "Google Tech Writing Fundamentals (free)",
          "ITCQF certificate (optional)"
        ],
        "pros": [
          "Every tech company needs documentation — permanent demand",
          "Remote work is standard",
          "Less competitive than software engineering",
          "Good work-life balance compared to coding roles",
          "Humanities + Tech combination = rare and valuable"
        ],
        "cons": [
          "Often seen as \"not a real tech role\" by engineers",
          "Career growth ceiling is lower than engineering/management",
          "Work can feel repetitive — documenting the same type of APIs",
          "Less prestigious than engineering in Indian tech culture"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Tech writing skills are universal. Google, Apple, Amazon hire tech writers globally. Remote work from India for US companies at US salaries is increasingly common."
        },
        "familyAngle": "\"Writer hai? Novel likhi kya?\" — technical writing is documentation, not creative writing. When you say \"I write the Google help articles that 1 billion people read,\" it lands differently.",
        "eligibility": "Anyone who can write clearly. BA English + tech curiosity is ideal combo.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Humanities"
          ],
          "notes": "Needs: Humanities / Arts"
        }
      },
      {
        "id": "anthropology",
        "name": "Anthropology & Archaeology",
        "icon": "🏺",
        "color": "#3498DB",
        "route": "BA History/Sociology → MA Anthropology → Research / ASI / Museums",
        "timeline": "5-7 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks needed for BA admissions at top universities. For archaeological career (ASI), UPSC or UGC NET qualify you — board marks are irrelevant at that stage."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BA History / Sociology / Anthropology",
            "desc": "Study human civilizations, social structures, archaeological methods. Delhi University, JNU, Ashoka."
          },
          {
            "year": "3-5",
            "title": "MA Anthropology / Archaeology",
            "desc": "JNU, DU, Deccan College Pune (archaeology). Fieldwork experience at excavation sites."
          },
          {
            "year": "5+",
            "title": "Career",
            "desc": "ASI (Archaeological Survey of India), INTACH, museums, university teaching (UGC NET), heritage conservation, forensic anthropology."
          }
        ],
        "colleges": [
          "JNU Delhi (Anthropology)",
          "Deccan College Pune (Archaeology — India's oldest)",
          "DU, Ashoka University",
          "Abroad: Cambridge, Oxford, UChicago"
        ],
        "cost": "₹1-5 Lakh",
        "salary": {
          "entry": "₹3-6 LPA (research associate / ASI fieldworker)",
          "mid": "₹8-16 LPA (ASI officer / assistant professor)",
          "senior": "₹18-30 LPA (senior ASI / professor)",
          "top": "₹35-50 LPA (director ASI / international archaeological consultant)",
          "source": "ASI pay scales (7th CPC), UGC pay scales for university faculty, INTACH salary data"
        },
        "exams": [
          "UGC NET (for teaching)",
          "UPSC (ASI recruitment)",
          "University entrances for MA"
        ],
        "pros": [
          "Fascinating work — discovering ancient civilizations, human origins",
          "India has 40+ UNESCO World Heritage Sites — rich archaeological heritage",
          "Fieldwork travel to remote historical sites",
          "Academic career with tenure and stability"
        ],
        "cons": [
          "Very niche — limited job openings",
          "Fieldwork is physically demanding (digging, remote locations, heat)",
          "Academic career requires PhD (long timeline)",
          "Low public awareness of anthropology as a career"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "PhD at Cambridge/Oxford/UChicago. International excavation projects. UN cultural heritage programs. Museum curator roles globally."
        },
        "familyAngle": "\"Purani cheezein dhundhta hai? Ye kaam hai?\" — when you explain you're excavating a 5,000-year-old Harappan city, the response changes to fascination. But initial skepticism is guaranteed.",
        "eligibility": "BA in any stream. Curiosity about human cultures. Physical fitness for fieldwork.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Humanities"
          ],
          "notes": "Needs: Humanities / Arts"
        }
      },
      {
        "id": "linguistics",
        "name": "Linguistics & Computational NLP",
        "icon": "🗣️",
        "color": "#2980B9",
        "route": "BA English/Languages → MA Linguistics → NLP/AI Industry / Academia",
        "timeline": "5-6 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Language aptitude, understanding of syntax/phonetics/semantics, and for computational linguistics — programming skills in Python are what matter."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BA English / Foreign Languages",
            "desc": "Study phonetics, morphology, syntax, semantics. Learn 2-3 languages. JNU, DU, EFL University Hyderabad."
          },
          {
            "year": "3-5",
            "title": "MA Linguistics / Computational Linguistics",
            "desc": "JNU, EFL University, IIT Bombay (Computational Linguistics). Learn NLP, speech processing, corpus linguistics."
          },
          {
            "year": "5+",
            "title": "Career",
            "desc": "NLP engineer at Google/Amazon/Microsoft (Alexa, Google Translate), computational linguist, language documentation, university professor, translation technology."
          }
        ],
        "colleges": [
          "JNU (Centre for Linguistics)",
          "EFL University Hyderabad (English & Foreign Languages)",
          "IIT Bombay (Computational Linguistics lab)",
          "Abroad: MIT, Stanford, Edinburgh"
        ],
        "cost": "₹1-5 Lakh (India) / ₹30-60L (abroad MS/PhD)",
        "salary": {
          "entry": "₹4-8 LPA (NLP data analyst / language specialist)",
          "mid": "₹12-25 LPA (NLP engineer / computational linguist)",
          "senior": "₹30-55 LPA (senior NLP scientist / professor)",
          "top": "₹70L-1.5 Cr (AI language team lead at Google/Amazon / expert witness)",
          "source": "Google/Amazon India NLP team salary data, EFL University placement, LinkedIn NLP roles"
        },
        "exams": [
          "University entrances for MA",
          "UGC NET (for teaching)",
          "No mandatory exam for industry — portfolio/skills matter"
        ],
        "pros": [
          "ChatGPT/AI revolution = linguists are suddenly in massive demand",
          "Google Translate, Alexa, Siri all need linguists for Indian languages",
          "India has 22 official languages — massive NLP work needed",
          "Combines humanities passion with tech industry salaries"
        ],
        "cons": [
          "Pure academic linguistics has limited career options",
          "Need to learn programming (Python) for industry roles",
          "Computational linguistics PhD is 5-7 years",
          "Often misunderstood: \"Oh, you speak many languages?\" — no, that's polyglotism, not linguistics"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Computational linguists at Google, Meta, Amazon command $120-200K+ in US. Stanford/MIT linguistics PhD programs are fully funded. NLP is one of the hottest AI subfields globally."
        },
        "familyAngle": "\"Language padh raha hai? Translator banega?\" — when you explain that Google hired you at ₹30 LPA to make Alexa understand Hindi, the \"translator\" concern dissolves rapidly.",
        "eligibility": "BA in any stream with language aptitude. For computational NLP: Python + statistics.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Humanities"
          ],
          "notes": "Needs: Humanities / Arts"
        }
      },
      {
        "id": "gender-studies",
        "name": "Gender Studies & Social Work",
        "icon": "⚖️",
        "color": "#8E44AD",
        "route": "BA Sociology/Political Sci → MA Gender Studies / MSW → NGO / Policy / UN",
        "timeline": "5-6 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks for BA admissions (DU cutoffs). For MSW/MA Gender Studies, university entrance and field experience matter more than board marks."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BA Sociology / Political Science / BSW",
            "desc": "Study gender, society, inequality, policy frameworks. Volunteer with women's rights organizations, LGBTQ+ groups."
          },
          {
            "year": "3-5",
            "title": "MA Gender Studies / MSW",
            "desc": "TISS Mumbai (Social Work — India's #1), JNU (Women's Studies), Ambedkar University Delhi. Field placement is critical — work with communities."
          },
          {
            "year": "5+",
            "title": "Career",
            "desc": "UN Women, Oxfam, ActionAid, National Commission for Women, corporate D&I (Diversity & Inclusion) roles, policy research, academic teaching."
          }
        ],
        "colleges": [
          "TISS Mumbai (Social Work — #1)",
          "JNU (Women's Studies Centre)",
          "Ambedkar University Delhi",
          "Abroad: LSE, SOAS, Columbia"
        ],
        "cost": "₹1-6 Lakh",
        "salary": {
          "entry": "₹3-6 LPA (social worker / NGO coordinator)",
          "mid": "₹8-18 LPA (program manager / D&I specialist)",
          "senior": "₹20-35 LPA (country director NGO / head of D&I)",
          "top": "₹40-70 LPA (UN senior staff / policy director)",
          "source": "TISS placement data, UN salary scales (public), Oxfam/ActionAid salary info"
        },
        "exams": [
          "TISS entrance (TISSNET)",
          "University entrances for MA",
          "UGC NET (for teaching)"
        ],
        "pros": [
          "Deeply meaningful work — advancing equality and justice",
          "Corporate D&I roles are booming (SEBI mandates diversity in boards)",
          "UN system pays very well with excellent benefits",
          "Growing recognition of gender studies in policy making"
        ],
        "cons": [
          "Many NGO roles are poorly paid (₹15-25K/month)",
          "Emotional labor is intense — dealing with violence, inequality daily",
          "Field can be politically charged",
          "Limited private sector opportunities outside D&I"
        ],
        "abroad": {
          "level": "High",
          "desc": "UN Women, UNICEF, World Bank gender programs. International NGOs (Oxfam, Save the Children). Academic positions at global universities. Gender expertise is in demand for international development."
        },
        "familyAngle": "\"Gender studies? Feminism padhegi?\" — yes, and UN Women will pay ₹25 LPA for that knowledge. Corporate D&I roles at Infosys/TCS pay ₹15-25 LPA. It's not just activism — it's a professional field.",
        "eligibility": "BA in any stream. Deep interest in social justice. Empathy and communication skills.",
        "educationLevels": [
          "after12",
          "afterGraduation"
        ],
        "prerequisites": {
          "minEducation": "class12",
          "streams": [
            "Humanities"
          ],
          "notes": "Needs: Humanities / Arts"
        }
      }
    ]
  },
  "vocational": {
    "id": "vocational",
    "name": "Vocational / Skills",
    "icon": "🛠️",
    "color": "#FF8A8A",
    "tagline": "Practical Skills, Trades & Emerging Careers",
    "description": "For students who prefer hands-on work, practical skills, or non-traditional career paths.",
    "preview": [
      "Hotel Management",
      "Animation/VFX",
      "Digital Marketing",
      "Ethical Hacking"
    ],
    "paths": [
      {
        "id": "hotel-mgmt",
        "name": "Hotel Management & Hospitality",
        "icon": "🏨",
        "route": "12th → NCHMCT JEE → BSc Hospitality (3-4 yrs)",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "cost": "₹3-15 Lakh",
        "salary": {
          "entry": "₹2.5-4.5 LPA",
          "mid": "₹6-12 LPA",
          "senior": "₹15-30 LPA",
          "top": "₹40-70 LPA"
        },
        "exams": [
          "NCHMCT JEE"
        ],
        "pros": [
          "Global career",
          "Hands-on learning"
        ],
        "cons": [
          "Long working hours",
          "Modest starting salary"
        ]
      },
      {
        "id": "animation-vfx",
        "name": "Animation & VFX",
        "icon": "🎬",
        "color": "#2C3E50",
        "route": "BSc Animation / Diploma → Portfolio → Studio",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Portfolio quality and demo reel are everything. Studios don't ask for marksheets — they ask for your animation showreel."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "BSc Animation / Diploma",
            "desc": "Learn 2D/3D animation, VFX compositing, motion graphics, character rigging. Software: Maya, Blender (free), After Effects, Nuke, Houdini."
          },
          {
            "year": "2-3",
            "title": "Build Demo Reel",
            "desc": "Create 1-2 minute showreel showcasing your best work. This IS your resume. Quality > quantity."
          },
          {
            "year": "3+",
            "title": "Studio Career",
            "desc": "Join animation studios: DNEG India, Prime Focus, Technicolor, Tata Elxsi (VFX). India does VFX for Hollywood: Marvel, Star Wars, Avatar."
          }
        ],
        "colleges": [
          "Arena Animation, Frameboxx (across India)",
          "Whistling Woods (Mumbai)",
          "DSK Supinfocom (Pune — connected to RUBIKA France)",
          "NID (Animation Film Design)"
        ],
        "cost": "₹2-8 Lakh (diploma/BSc)",
        "salary": {
          "entry": "₹2.5-5 LPA (junior animator / VFX artist)",
          "mid": "₹6-15 LPA (senior animator / lead VFX)",
          "senior": "₹18-35 LPA (VFX supervisor / animation director)",
          "top": "₹50L-1.5 Cr (studio head / Hollywood VFX supervisor)",
          "source": "DNEG/Prime Focus India salary data, FICCI-EY Media Report, Glassdoor animation roles"
        },
        "exams": [
          "NID DAT (for NID Animation Film Design)",
          "No standard entrance — portfolio review at most schools"
        ],
        "pros": [
          "India is Hollywood's VFX outsourcing hub — DNEG India worked on Dune, Tenet, Inception",
          "Blender is free — learn professional 3D animation for ₹0",
          "YouTube/Instagram animation content can go viral",
          "Growing Indian OTT demand (Netflix, Prime Video originals)"
        ],
        "cons": [
          "Starting salary is low — ₹10-18K/month at many studios",
          "Long hours during project crunches",
          "Repetitive work at junior level (rotoscoping, clean-up)",
          "Many private animation institutes are low quality — research before joining"
        ],
        "abroad": {
          "level": "High",
          "desc": "DNEG, Framestore, ILM, Pixar, DreamWorks hire from India. Canada (Vancouver/Montreal) is the animation capital with good visa pathway. India's VFX professionals work on the biggest Hollywood movies."
        },
        "familyAngle": "\"Cartoon banaega?\" — yes, the \"cartoons\" that earned ₹2000 Cr at the box office (Marvel movies use Indian VFX teams). Parents come around when they see the work.",
        "eligibility": "Anyone with artistic talent and patience. No stream restriction.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "culinary-arts",
        "name": "Culinary Arts / Chef",
        "icon": "👨‍🍳",
        "color": "#D35400",
        "route": "12th → IHM / Culinary School → Kitchen Training → Chef",
        "timeline": "3-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks used in NCHMCT JEE merit (20% weight). For private culinary schools, 12th pass is sufficient. Your cooking skill matters more than marks."
        },
        "steps": [
          {
            "year": "0",
            "title": "NCHMCT JEE / Direct Admission",
            "desc": "Government IHMs through JEE. Private culinary schools: Academy of Pastry Arts, Lavonne Academy Bangalore."
          },
          {
            "year": "1-3",
            "title": "Culinary Training",
            "desc": "Learn cuisines: French, Indian, Asian, pastry. Kitchen management, food costing, hygiene (HACCP). Practical training in hotel kitchens."
          },
          {
            "year": "3-5",
            "title": "Kitchen Career",
            "desc": "Commis → Demi Chef → Chef de Partie → Sous Chef → Executive Chef. Or: own restaurant / cloud kitchen / YouTube cooking channel."
          }
        ],
        "colleges": [
          "IHM Pusa Delhi (best government)",
          "Le Cordon Bleu (global brand — no India campus, train abroad)",
          "Academy of Pastry Arts, Mumbai/Bangalore",
          "Lavonne Academy Bangalore (pastry & baking)"
        ],
        "cost": "₹3-10 Lakh (India) / ₹15-40 Lakh (abroad culinary schools)",
        "salary": {
          "entry": "₹2-4 LPA (commis chef at hotel)",
          "mid": "₹6-12 LPA (Chef de Partie / Sous Chef)",
          "senior": "₹15-35 LPA (Executive Chef at 5-star)",
          "top": "₹50L-3 Cr (celebrity chef / own restaurant chain)",
          "source": "FHRAI data, Taj/Oberoi/Marriott India salary structures, Zomato restaurant industry data"
        },
        "exams": [
          "NCHMCT JEE",
          "No other mandatory exam — skill tests during hiring"
        ],
        "pros": [
          "Creative art form that feeds people — deeply satisfying",
          "Celebrity chef culture is growing in India (Vikas Khanna, Ranveer Brar)",
          "Cloud kitchen revolution — start a restaurant without a restaurant",
          "International career — chefs work worldwide"
        ],
        "cons": [
          "Kitchen work is physically brutal — 12-16 hour shifts on feet",
          "Starting salary is very low — ₹10-15K/month as commis",
          "Burns, cuts, heat exhaustion are occupational hazards",
          "\"Chef ka lifestyle\" is glamorous on TV, grueling in reality"
        ],
        "abroad": {
          "level": "High",
          "desc": "Indian chefs are valued worldwide. Cruise lines, Michelin restaurants, Middle East luxury hotels. Indian cuisine is globally popular — our chefs are in demand."
        },
        "familyAngle": "\"Khaana banaega career mein?\" — until they eat at a restaurant where the chef earns ₹30 LPA. Indian parents are slowly accepting culinary arts thanks to MasterChef India and celebrity chefs.",
        "eligibility": "12th from any stream. Passion for cooking mandatory. Physical fitness needed.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "fitness-training",
        "name": "Fitness Training & Sports Science",
        "icon": "💪",
        "color": "#F39C12",
        "route": "Certifications (ACE/ISSA/NSCA) or BSc Sports Science → Trainer → Own Gym/Brand",
        "timeline": "1-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks completely irrelevant. International certifications (ACE, ISSA, NSCA), your physique/fitness level, and client transformation results matter. Many top trainers are 12th pass with certifications."
        },
        "steps": [
          {
            "year": "0-1",
            "title": "Certifications",
            "desc": "ACE (American Council on Exercise), ISSA, NSCA-CPT, or Indian: K11 Academy Mumbai. Group fitness: Les Mills, Zumba instructor. Cost: ₹30K-1.5L."
          },
          {
            "year": "1-2",
            "title": "Build Clientele",
            "desc": "Train at gyms, build social media (Instagram transformation posts). Specialize: weight loss, bodybuilding, prenatal fitness, sports conditioning."
          },
          {
            "year": "2-4",
            "title": "Scale",
            "desc": "Online coaching (₹10-50K/client/month), launch fitness app, corporate wellness programs, own gym/studio, YouTube fitness channel."
          }
        ],
        "colleges": [
          "K11 Academy Mumbai (India's best fitness certification)",
          "ACE/ISSA/NSCA (international — online)",
          "BSc Sports Science from ACSM-affiliated universities"
        ],
        "cost": "₹30K-3 Lakh (certifications) — one of the cheapest career entry points",
        "salary": {
          "entry": "₹2-4 LPA (gym trainer)",
          "mid": "₹6-15 LPA (experienced personal trainer, multiple clients)",
          "senior": "₹20-40 LPA (celebrity trainer / own gym / online coaching)",
          "top": "₹50L-3 Cr (fitness influencer / gym chain owner)",
          "source": "Cult.fit salary data, Glassdoor fitness trainer roles, Instagram fitness influencer earnings data"
        },
        "exams": [
          "ACE-CPT / ISSA-CPT / NSCA-CPT (international)",
          "K11 certification (India)",
          "No standard national exam"
        ],
        "pros": [
          "India's fitness industry: $15 billion market",
          "Cult.fit, Gold's Gym, Anytime Fitness — massive chain expansion",
          "Online coaching = earn while sleeping (scalable)",
          "Instagram/YouTube fitness influencers earn ₹5-50 LPA in brand deals"
        ],
        "cons": [
          "Gym trainer salaries are very low initially (₹8-15K/month)",
          "Irregular hours — early mornings and late evenings",
          "High client drop-off rate — maintaining morale is challenging",
          "Many uncertified trainers damage the profession's credibility"
        ],
        "abroad": {
          "level": "Medium-High",
          "desc": "ACE/ISSA certifications are globally recognized. Indian trainers work in Dubai (huge market), UK, USA. Online coaching crosses borders — train global clients from India."
        },
        "familyAngle": "\"Gym trainer? Padhai nahi karni?\" — fitness training is now a legitimate, lucrative career. When you charge ₹50K/month per client and have 20 clients, suddenly it's a great career choice.",
        "eligibility": "Anyone physically fit. No academic requirements for most certifications. 12th pass minimum for BSc Sports Science.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "photography",
        "name": "Commercial Photography",
        "icon": "📸",
        "color": "#C0392B",
        "route": "Diploma/BFA Photography / Self-taught → Portfolio → Freelance/Studio",
        "timeline": "2-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks are 100% irrelevant. Your portfolio is your only resume. A self-taught photographer with stunning work will always be chosen over a degree holder with weak images."
        },
        "steps": [
          {
            "year": "0-2",
            "title": "Learn Photography",
            "desc": "Diploma/BFA at NIFT, SRFTI, Light & Life Academy (Ooty). OR: learn from YouTube (free), assist a professional photographer, practice daily."
          },
          {
            "year": "1-3",
            "title": "Build Portfolio",
            "desc": "Shoot weddings, events, products, fashion. Build Instagram presence. Create a professional website with best work."
          },
          {
            "year": "2-4",
            "title": "Specialize & Scale",
            "desc": "Wedding photography (₹50K-5L per wedding). Product photography for e-commerce (Flipkart/Amazon). Fashion (magazine shoots). Commercial (ad campaigns)."
          }
        ],
        "colleges": [
          "Light & Life Academy, Ooty (India's best photo school)",
          "SRFTI Kolkata, NID (Photography Communication Design)",
          "Self-taught route is extremely viable — YouTube + practice + assisting"
        ],
        "cost": "₹50K-5 Lakh (course) + ₹1-5 Lakh (equipment: camera, lenses, lights)",
        "salary": {
          "entry": "₹2-5 LPA (assistant / junior photographer)",
          "mid": "₹6-15 LPA (established freelancer)",
          "senior": "₹20-40 LPA (premium wedding / commercial photographer)",
          "top": "₹50L-2 Cr (celebrity/fashion photographer, own studio)",
          "source": "Wedding photography market data, freelance platform earnings, industry surveys"
        },
        "exams": [
          "No formal exams — portfolio is everything"
        ],
        "pros": [
          "Indian wedding market: ₹4+ Lakh Crore — photographers earn ₹50K-5L per wedding",
          "E-commerce product photography demand is massive (Flipkart, Amazon need millions of product images)",
          "Freedom to travel and work on your terms",
          "Low barrier to entry — smartphone photography is democratizing the field"
        ],
        "cons": [
          "Equipment is expensive (₹1-5L for professional gear)",
          "Very competitive — everyone with a DSLR thinks they're a photographer",
          "Income is seasonal (wedding season = September to March)",
          "Physical demands: shooting 12 hours straight at weddings"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Destination wedding photography is booming. Indian photographers shoot in Bali, Dubai, Europe. Fashion photography for international brands. Stock photography (Shutterstock/Getty) generates passive income globally."
        },
        "familyAngle": "\"Photo kheenchta hai? Hobby hai na?\" — until the wedding photographer charges ₹3 Lakh for 2 days of work. Photography is one of the highest-earning creative professions in India.",
        "eligibility": "Anyone with a creative eye. No academic requirements. Equipment investment needed.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "filmmaking",
        "name": "Cinematography / Filmmaking",
        "icon": "🎥",
        "color": "#27AE60",
        "route": "BA Film Studies / FTII / Self-taught → Portfolio → Film Industry",
        "timeline": "3-5 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks completely irrelevant. FTII, SRFTI have their own creative entrance tests. Film industry cares about your showreel, not your 12th percentage."
        },
        "steps": [
          {
            "year": "1-3",
            "title": "Film School / Self-learn",
            "desc": "FTII Pune, SRFTI Kolkata, Whistling Woods Mumbai. OR: buy a camera, learn editing (DaVinci Resolve is free), make short films, upload to YouTube/Vimeo."
          },
          {
            "year": "2-4",
            "title": "Build Portfolio",
            "desc": "Make 5-10 short films. Submit to Film Bazaar, MAMI, Dharamshala IFF. Assist established directors/cinematographers."
          },
          {
            "year": "3-5",
            "title": "Career",
            "desc": "Assistant director → Director / Cinematographer. Bollywood, OTT (Netflix/Prime), ad filmmaking, corporate videos, wedding cinematography."
          }
        ],
        "colleges": [
          "FTII Pune (Film & Television Institute of India) — India's #1",
          "SRFTI Kolkata",
          "Whistling Woods (Mumbai)",
          "Self-taught: YouTube + practice + assisting"
        ],
        "cost": "₹1-10L (film school) + ₹1-5L (equipment)",
        "salary": {
          "entry": "₹2-5 LPA (assistant director / junior editor)",
          "mid": "₹8-20 LPA (independent filmmaker / cinematographer)",
          "senior": "₹25-50 LPA (established director / DOP)",
          "top": "₹1-10 Cr+ (successful director / ad filmmaker)",
          "source": "FTII alumni data, Bollywood/OTT industry data, ad filmmaking rate cards"
        },
        "exams": [
          "FTII entrance (written + interview)",
          "SRFTI entrance",
          "No exam for self-taught route"
        ],
        "pros": [
          "India produces 2000+ films/year — world's largest film industry by volume",
          "OTT boom (Netflix, Prime, JioCinema) created massive demand for content",
          "Ad filmmaking pays extremely well (₹5-50 Lakh per ad)",
          "Creative expression + earning potential"
        ],
        "cons": [
          "Extremely uncertain income in early years",
          "Nepotism in Bollywood makes breaking in difficult for outsiders",
          "Physical demands: 16-18 hour shoot days are normal",
          "Success is not guaranteed — for every 1 successful filmmaker, 99 struggle"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "FTII grads work globally. Hollywood outsources VFX/post to India. Film festivals (Cannes, Toronto) are platforms for global recognition. YouTube/OTT makes distribution borderless."
        },
        "familyAngle": "\"Film line mein jaayega? Sapna dekhta hai\" — until your short film wins a Student Oscar nomination or your ad for Nike gets 100M views. Film is high-risk-high-reward, and Indian families fear the risk part.",
        "eligibility": "Anyone with creative vision. No academic requirements for most film schools (FTII has age limit: 20-25).",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "fashion-styling",
        "name": "Fashion Styling & Design",
        "icon": "👗",
        "color": "#34495E",
        "route": "Diploma/BDes NIFT → Styling Portfolio → Fashion Industry / Own Label",
        "timeline": "3-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "NIFT entrance (GAT + Situation Test) has 10% weight for 12th marks. NID DAT is purely entrance-based. For styling as a career, your fashion portfolio matters more than any marks."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "NIFT / Pearl Academy / NID",
            "desc": "NIFT (National Institute of Fashion Technology): 4-year BDes. Study textiles, draping, pattern making, fashion marketing. Pearl Academy, JD Institute for shorter programs."
          },
          {
            "year": "2-4",
            "title": "Build Portfolio",
            "desc": "Style photoshoots, intern with fashion magazines (Vogue India, Harper's Bazaar), assist celebrity stylists."
          },
          {
            "year": "3-5",
            "title": "Career",
            "desc": "Fashion designer (own label), celebrity stylist (₹50K-5L per engagement), Myntra/Ajio fashion buyer, brand stylist, costume designer for films."
          }
        ],
        "colleges": [
          "NIFT (16 campuses, Delhi HQ)",
          "NID Ahmedabad (textile design)",
          "Pearl Academy",
          "Abroad: Central Saint Martins, Parsons, FIT NYC"
        ],
        "cost": "₹2-10 Lakh (Indian schools) / ₹25-60L (abroad)",
        "salary": {
          "entry": "₹3-6 LPA (assistant designer / junior stylist)",
          "mid": "₹8-18 LPA (senior designer / Myntra buyer)",
          "senior": "₹20-40 LPA (creative director / brand head)",
          "top": "₹50L-5 Cr (own fashion label / celebrity stylist)",
          "source": "NIFT placement report, Myntra/Flipkart fashion team salary data, fashion industry surveys"
        },
        "exams": [
          "NIFT entrance (GAT + Situation Test + Portfolio)",
          "NID DAT",
          "UCEED (for IIT design)"
        ],
        "pros": [
          "India's fashion market: $100 billion+",
          "Celebrity styling is glamorous and well-paid",
          "E-commerce fashion (Myntra, Ajio) creating new career roles",
          "Own label can be started with ₹5-10 Lakh"
        ],
        "cons": [
          "Very competitive and trend-driven",
          "Fashion industry can be appearance-focused and superficial",
          "Independent designers struggle against fast fashion",
          "Starting salary is low at many fashion houses"
        ],
        "abroad": {
          "level": "Medium-High",
          "desc": "Indian fashion is gaining global recognition (Sabyasachi, Gaurav Gupta at Met Gala). Central Saint Martins/Parsons degree opens international doors. Luxury brands (Gucci, Dior) hiring Indian designers."
        },
        "familyAngle": "\"Darzi banega?\" — when Sabyasachi makes ₹200 Cr/year selling lehengas, it's not exactly \"darzi\" work. Indian families are warming up to fashion as a career, especially post-Shark Tank India featuring fashion entrepreneurs.",
        "eligibility": "Any stream for NIFT. Creative aptitude essential. Drawing skills helpful but not mandatory.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "interior-design",
        "name": "Interior Design & Architecture",
        "icon": "🛋️",
        "color": "#1ABC9C",
        "route": "BDes Interior / B.Arch Interior → Portfolio → Design Firm / Own Practice",
        "timeline": "3-5 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks needed for entrance exams (CEED, NID DAT, NATA). For interior design specifically, spatial thinking and portfolio matter more than marks."
        },
        "steps": [
          {
            "year": "1-4",
            "title": "BDes Interior / B.Arch",
            "desc": "Study spatial design, AutoCAD, SketchUp, 3ds Max, material science, lighting design. NID, CEPT, SPA Delhi, JJ School of Art."
          },
          {
            "year": "2-4",
            "title": "Build Portfolio",
            "desc": "Design residential, commercial, hospitality spaces. Create detailed 3D renders. Intern at interior design firms."
          },
          {
            "year": "3-5",
            "title": "Career",
            "desc": "Join firms: IIID members, Sameep Padora, Studio Lotus, or international firms (Gensler, HKS). Or start own practice — home renovation market is massive."
          }
        ],
        "colleges": [
          "NID Ahmedabad (Furniture & Interior Design)",
          "CEPT University, Ahmedabad",
          "SPA Delhi, JJ School of Art Mumbai"
        ],
        "cost": "₹3-10 Lakh",
        "salary": {
          "entry": "₹3-6 LPA (junior interior designer)",
          "mid": "₹8-18 LPA (senior designer / project lead)",
          "senior": "₹20-40 LPA (principal designer / own firm)",
          "top": "₹50L-3 Cr (celebrity interior designer / large firm owner)",
          "source": "IIID salary data, Glassdoor interior design roles, Houzz India market report"
        },
        "exams": [
          "CEED (for IIT/NID PG programs)",
          "NID DAT",
          "NATA (for architecture route)",
          "JEE Main Paper 2A (for B.Arch)"
        ],
        "pros": [
          "India's real estate boom = interior design demand",
          "Livspace, Houzz, DesignCafe — interior tech platforms creating new jobs",
          "Can start own practice with minimal capital",
          "Creative work with tangible, visible results"
        ],
        "cons": [
          "Clients often have unrealistic budgets and expectations",
          "Site visits can be physically demanding",
          "Competition from unqualified \"decorators\"",
          "Payment delays from clients are common"
        ],
        "abroad": {
          "level": "Medium",
          "desc": "Gensler, HKS, IA Interior Architects are global firms. Dubai, Singapore, London have huge demand for interior designers. NID/CEPT alumni work globally."
        },
        "familyAngle": "\"Interior decorator? Sofa lagata hai?\" — interior design involves spatial psychology, material science, and engineering. It's way more than choosing curtain colors.",
        "eligibility": "Any stream. Spatial thinking and visual sense important.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "tattoo-art",
        "name": "Tattoo Artistry",
        "icon": "🎨",
        "color": "#9B59B6",
        "route": "Art Training / Apprenticeship → Own Studio / Traveling Artist",
        "timeline": "2-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks are 0% relevant. Your drawing skills, hygiene standards, portfolio of tattooed work, and client reviews are everything. This is pure skill-based."
        },
        "steps": [
          {
            "year": "0-1",
            "title": "Learn Drawing",
            "desc": "Master drawing, shading, anatomy, different art styles (Japanese, realism, geometric, watercolor). Paper portfolio first."
          },
          {
            "year": "1-2",
            "title": "Apprenticeship",
            "desc": "Apprentice under a master tattoo artist for 6-12 months. Learn hygiene protocols, machine operation, color theory on skin, aftercare."
          },
          {
            "year": "2-4",
            "title": "Build Career",
            "desc": "Work at a studio → build Instagram portfolio → guest spots at other studios → own studio. Convention circuit for recognition."
          }
        ],
        "colleges": [
          "No formal education — apprenticeship is the path",
          "Tattoo conventions (Heartwork Tattoo Festival, Delhi)",
          "Online: YouTube tutorials for techniques and styles"
        ],
        "cost": "₹50K-3 Lakh (equipment: tattoo machine, inks, supplies, studio setup)",
        "salary": {
          "entry": "₹15-30K/month (apprentice / junior artist)",
          "mid": "₹3-8 LPA / ₹40-80K per month (established artist)",
          "senior": "₹10-25 LPA (popular artist with waiting list)",
          "top": "₹30-80 LPA (celebrity tattoo artist / own brand)",
          "source": "Indian tattoo industry estimates, Instagram tattoo artist rate cards, convention data"
        },
        "exams": [
          "No formal exams — portfolio and client reviews are everything"
        ],
        "pros": [
          "Creative art form with personal expression",
          "India's tattoo market growing 15-20% annually",
          "Instagram-driven business — great portfolio = clients come to you",
          "Can travel the world as a guest artist at studios globally"
        ],
        "cons": [
          "No job security — entirely dependent on your reputation",
          "Physical demands: sitting/standing for 6-8 hours in one position",
          "Health risks if hygiene is not maintained",
          "Social stigma in many Indian communities"
        ],
        "abroad": {
          "level": "High",
          "desc": "Tattoo art is borderless. Guest spots at studios in USA, Europe, Japan. Indian tattoo artists (Eric Jason D'souza) are internationally recognized. No visa issues for convention visits."
        },
        "familyAngle": "\"Tattoo banata hai? Log kya kahenge?\" — India's tattoo acceptance has shifted dramatically. Bollywood stars, cricketers all have tattoos. Business is booming despite a few raised eyebrows from older generations.",
        "eligibility": "Anyone with drawing talent. Minimum age 18 for tattooing. Strong hygiene and health standards.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "cabin-crew",
        "name": "Aviation Hospitality (Cabin Crew)",
        "icon": "✈️",
        "color": "#3498DB",
        "route": "12th Pass → Airline Training Academy → Cabin Crew → Purser",
        "timeline": "1-2 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks barely matter. Airlines look at: height (minimum 157cm F / 170cm M), appearance, communication skills, medical fitness. 12th pass is minimum requirement."
        },
        "steps": [
          {
            "year": "0-1",
            "title": "Training Academy / Direct Airline Recruitment",
            "desc": "Frankfinn, IATA, Aptech Aviation, or apply directly to airline recruitment drives. Learn safety procedures, first aid, hospitality, grooming standards."
          },
          {
            "year": "1",
            "title": "Join Airline",
            "desc": "IndiGo, Air India, Vistara, SpiceJet domestic. Emirates, Qatar Airways, Singapore Airlines for international. 3-6 months training by airline."
          },
          {
            "year": "2+",
            "title": "Career Growth",
            "desc": "Cabin crew → Senior crew → Purser/In-flight Manager. Or transition to ground operations, airline management, training instructor."
          }
        ],
        "colleges": [
          "Frankfinn Institute (India's largest aviation academy)",
          "IATA training programs",
          "Airlines' own training centers (IndiGo, Air India)"
        ],
        "cost": "₹50K-3 Lakh (training academy fees)",
        "salary": {
          "entry": "₹3-6 LPA (domestic airline crew)",
          "mid": "₹6-12 LPA (senior crew / international airline)",
          "senior": "₹12-25 LPA (purser / in-flight manager)",
          "top": "₹30-50 LPA (Emirates/Qatar senior purser / training head)",
          "source": "IndiGo/Air India salary structure, Emirates cabin crew salary (public), DGCA data"
        },
        "exams": [
          "No entrance exam",
          "Airline-specific physical and medical tests",
          "Swimming test (mandatory for most airlines)",
          "DGCA safety exam during training"
        ],
        "pros": [
          "Travel the world for free — international layovers in Dubai, London, Paris",
          "Free or heavily discounted air travel for self and family",
          "Quick career start — flying within 6-12 months of 12th",
          "Emirates/Qatar crew earn ₹10-20 LPA tax-free (Dubai base)"
        ],
        "cons": [
          "Irregular schedule — no weekends, festivals, birthdays at home",
          "Physical requirements: height, weight, skin (yes, appearance matters — controversial but real)",
          "Jet lag and fatigue are real occupational hazards",
          "Career ceiling — limited growth beyond purser without transitioning to ground roles"
        ],
        "abroad": {
          "level": "Very High",
          "desc": "Emirates, Qatar Airways, Singapore Airlines, Etihad — Middle Eastern and Asian airlines actively recruit Indian crew. Tax-free salary in Dubai. Career starts internationally from Day 1."
        },
        "familyAngle": "\"Air hostess banega/banegi?\" — some families love the glamour, others worry about \"izzat.\" Reality: cabin crew are trained safety professionals who can evacuate 300 people in 90 seconds. That's more than just serving coffee.",
        "eligibility": "12th pass. Height: 157cm (F) / 170cm (M) minimum. Good communication. Medical fitness. Swimming ability.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "gemology",
        "name": "Gemology & Jewelry Design",
        "icon": "💍",
        "color": "#2980B9",
        "route": "Diploma in Gemology (GIA/IGI) → Gem Testing / Jewelry Design / Trade",
        "timeline": "1-3 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks 100% irrelevant. GIA/IGI certification exams test your knowledge of gems, not school marks. Practical gem identification skills matter."
        },
        "steps": [
          {
            "year": "1",
            "title": "Gemology Certification",
            "desc": "GIA (Gemological Institute of America — world standard), IGI (Indian branch), Indian Institute of Gems & Jewellery (IIGJ). Learn diamond grading, colored stone identification, gem testing."
          },
          {
            "year": "1-2",
            "title": "Specialize",
            "desc": "Gem testing lab technician, jewelry CAD design (RhinoGold, MatrixGold), or gem trading business."
          },
          {
            "year": "2+",
            "title": "Career",
            "desc": "Tanishq/Malabar Gold (quality team), gem testing labs (GTL, GII), diamond trading (Surat hub), own jewelry brand, auction houses (Christie's, Sotheby's)."
          }
        ],
        "colleges": [
          "GIA India (Mumbai campus — world's most prestigious)",
          "IIGJ Jaipur/Mumbai (government-supported)",
          "IGI (International Gemological Institute)"
        ],
        "cost": "₹1-4 Lakh (GIA/IGI certification)",
        "salary": {
          "entry": "₹3-5 LPA (gemologist / lab grader)",
          "mid": "₹6-15 LPA (senior gemologist / jewelry designer)",
          "senior": "₹18-30 LPA (head gemologist / own trading)",
          "top": "₹50L-5 Cr (gem trader / jewelry brand owner)",
          "source": "GIA India placement data, GJEPC (Gem & Jewellery Export Promotion Council), Tanishq salary info"
        },
        "exams": [
          "GIA Graduate Gemologist (GG) — gold standard",
          "IGI certification",
          "IIGJ diploma programs"
        ],
        "pros": [
          "India's gem & jewelry industry: $75 billion+ (world's largest diamond cutting hub — Surat)",
          "Handle beautiful gemstones every day — unique work environment",
          "Gem trading can be very lucrative with low capital",
          "Quick certification (6-12 months GIA) — fast career start"
        ],
        "cons": [
          "Very niche field — limited job diversity",
          "Vision requirements — need sharp eyesight for grading",
          "Gem trading involves significant financial risk",
          "Surat/Mumbai-centric industry — limited geographic options"
        ],
        "abroad": {
          "level": "Medium-High",
          "desc": "Antwerp (Belgium), New York, Hong Kong are global gem trading hubs. GIA certification is globally recognized. Indian gem traders have presence worldwide."
        },
        "familyAngle": "\"Heera dekhta hai? Jeweler hai?\" — gemology is science + art + commerce. When you explain you certify a ₹50 Lakh diamond for authenticity, it sounds much more interesting than \"jeweler.\"",
        "eligibility": "Anyone interested. Good eyesight important. 10th/12th pass minimum.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      },
      {
        "id": "pet-grooming",
        "name": "Pet Care & Animal Training",
        "icon": "🐾",
        "color": "#8E44AD",
        "route": "Certification in Animal Behavior/Grooming → Pet Business / Veterinary Support",
        "timeline": "1-3 years",
        "difficulty": "Low-Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks 100% irrelevant. Your love for animals, patience, grooming skills, and animal behavior understanding are everything. No formal exam exists."
        },
        "steps": [
          {
            "year": "0-1",
            "title": "Training & Certification",
            "desc": "Pet grooming courses (Mutt Magic, Cozy Paws Academy). Dog training certifications (CPDT-KA international, or Indian equivalents). First aid for pets."
          },
          {
            "year": "1-2",
            "title": "Build Clientele",
            "desc": "Start with friends'/neighbors' pets. Build Instagram presence with pet grooming before/after photos. Partner with veterinary clinics."
          },
          {
            "year": "2+",
            "title": "Scale",
            "desc": "Own grooming salon/studio, pet boarding facility, mobile grooming service, pet product brand, YouTube pet content."
          }
        ],
        "colleges": [
          "No formal colleges — certification-based",
          "Mutt Magic (Pune — pet grooming training)",
          "Cozy Paws Academy",
          "Online: animal behavior courses from Udemy/Coursera"
        ],
        "cost": "₹30K-2 Lakh (training + grooming equipment)",
        "salary": {
          "entry": "₹1.5-3 LPA (pet groomer / assistant trainer)",
          "mid": "₹4-10 LPA (experienced groomer / own service)",
          "senior": "₹12-25 LPA (own pet salon / boarding chain)",
          "top": "₹30-60 LPA (pet business chain / pet brand founder)",
          "source": "India pet industry market reports, Supertails/Heads Up For Tails salary data, pet business estimates"
        },
        "exams": [
          "No mandatory exams",
          "CPDT-KA (international dog training cert)",
          "Pet first aid certifications"
        ],
        "pros": [
          "India's pet industry: $2 billion+ and growing 20%+ annually",
          "Emotionally rewarding — working with animals all day",
          "Low barrier to entry — start with minimal investment",
          "Mobile pet grooming is a growing trend in metros"
        ],
        "cons": [
          "Physical job — lifting heavy dogs, standing for hours",
          "Risk of bites, scratches, allergic reactions",
          "Income is highly variable and seasonal",
          "Not recognized as a \"proper career\" by many families"
        ],
        "abroad": {
          "level": "Low-Medium",
          "desc": "Pet industry is massive in US/UK ($150 billion in US alone). Experience transfers but local certifications needed. Pet care franchises are global."
        },
        "familyAngle": "\"Kutte nahahega career mein?\" — India's pet-owning population crossed 30 million. Premium pet groomers in Mumbai charge ₹2-5K per session. Do 5 pets/day and the math works out very well.",
        "eligibility": "Deep love for animals (non-negotiable). No allergies. Physical fitness. Patience.",
        "educationLevels": [
          "after10",
          "after12"
        ],
        "prerequisites": {
          "minEducation": "class10",
          "streams": [
            "Vocational"
          ],
          "notes": "Needs: Vocational / Any"
        }
      }
    ]
  },
  "engineering": {
    "id": "engineering",
    "name": "Engineering & Manufacturing",
    "icon": "🏗️",
    "color": "#FF6B35",
    "tagline": "Building the physical and digital world",
    "description": "For students who love building, creating, and solving complex problems.",
    "preview": [
      "Mechanical Engineer",
      "Civil Engineer",
      "Electrical Engineer",
      "Software Engineer"
    ],
    "paths": [
      {
        "id": "mechanical-engineer",
        "name": "Mechanical Engineer",
        "icon": "⚙️",
        "color": "#D32F2F",
        "route": "12th PCM → JEE → BTech Mechanical (4 yrs)",
        "timeline": "4-6 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. JEE rank is everything."
        },
        "steps": [
          {"year": "1-4", "title": "BTech Mechanical", "desc": "Design, thermodynamics, manufacturing, CAD. Internships at Maruti, Bajaj, TATA."},
          {"year": "4-6", "title": "Career", "desc": "Manufacturing engineer, design engineer, plant manager."}
        ],
        "colleges": ["IIT/NIT", "BITS Pilani", "VIT"],
        "cost": "₹8-20 Lakh",
        "salary": {"entry": "₹8-15 LPA", "mid": "₹20-40 LPA", "senior": "₹50-100 LPA", "top": "₹1-2 Cr", "source": "IIT placement data"},
        "exams": ["JEE Main", "JEE Advanced"],
        "pros": ["High demand in manufacturing", "Design freedom", "Excellent ROI"],
        "cons": ["Factory work can be tedious", "Limited creative outlets", "Automation reducing jobs"],
        "abroad": {"level": "High", "desc": "Mechanical skills transfer globally. Manufacturing hubs in Germany, Japan, USA."},
        "familyAngle": "Engineer = instant family pride. Mechanical engineer = respected profession.",
        "eligibility": "12th PCM. JEE qualification.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: 12th PCM"}
      },
      {
        "id": "civil-engineer",
        "name": "Civil Engineer",
        "icon": "🏢",
        "color": "#1976D2",
        "route": "12th PCM → JEE → BTech Civil (4 yrs)",
        "timeline": "4-6 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. JEE rank matters."
        },
        "steps": [
          {"year": "1-4", "title": "BTech Civil", "desc": "Structural design, road construction, water resources, geotechnical."},
          {"year": "4-6", "title": "Career", "desc": "Site engineer, project manager, structural consultant."}
        ],
        "colleges": ["IIT/NIT", "BITS", "VIT"],
        "cost": "₹8-20 Lakh",
        "salary": {"entry": "₹6-12 LPA", "mid": "₹18-35 LPA", "senior": "₹40-80 LPA", "top": "₹80L-1.5 Cr", "source": "IIT placement data"},
        "exams": ["JEE Main", "JEE Advanced"],
        "pros": ["Infrastructure boom in India", "Tangible impact (buildings/roads)", "Project management skills"],
        "cons": ["Site work is physically demanding", "Weather exposure", "Project delays common"],
        "abroad": {"level": "Medium", "desc": "Civil engineering valued globally. Middle East construction hubs pay well."},
        "familyAngle": "Civil engineer = traditional respect. Infrastructure development = nation building.",
        "eligibility": "12th PCM. JEE rank.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: 12th PCM"}
      },
      {
        "id": "electrical-engineer",
        "name": "Electrical Engineer",
        "icon": "⚡",
        "color": "#F57C00",
        "route": "12th PCM → JEE → BTech Electrical (4 yrs)",
        "timeline": "4-6 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. JEE rank critical."
        },
        "steps": [
          {"year": "1-4", "title": "BTech Electrical", "desc": "Power systems, electronics, control systems, renewable energy."},
          {"year": "4-6", "title": "Career", "desc": "Power engineer, renewable energy specialist, electrical design."}
        ],
        "colleges": ["IIT/NIT top tier"],
        "cost": "₹8-20 Lakh",
        "salary": {"entry": "₹8-16 LPA", "mid": "₹22-45 LPA", "senior": "₹50-100 LPA", "top": "₹1-2 Cr", "source": "IIT data"},
        "exams": ["JEE Advanced"],
        "pros": ["Energy boom", "Renewable energy opportunities", "High salary"],
        "cons": ["Theoretically heavy", "Complex concepts", "Limited hands-on initially"],
        "abroad": {"level": "Very High", "desc": "Power engineering globally in-demand. Germany, USA, Middle East."},
        "familyAngle": "Electrical engineer = smart student perception. Competitive entry.",
        "eligibility": "12th PCM. Top JEE rank.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: 12th PCM, top rank"}
      },
      {
        "id": "chemical-engineer",
        "name": "Chemical Engineer",
        "icon": "🧪",
        "color": "#7B1FA2",
        "route": "12th PCM → JEE → BTech Chemical (4 yrs)",
        "timeline": "4-6 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant for JEE."
        },
        "steps": [
          {"year": "1-4", "title": "BTech Chemical", "desc": "Organic chemistry, process design, plant operations, pharmaceuticals."},
          {"year": "4-6", "title": "Career", "desc": "Petroleum engineer, pharmaceutical engineer, process engineer."}
        ],
        "colleges": ["IIT Bombay/Delhi/Madras", "NIT Warangal"],
        "cost": "₹8-20 Lakh",
        "salary": {"entry": "₹12-20 LPA", "mid": "₹30-60 LPA", "senior": "₹70-150 LPA", "top": "₹1-3 Cr", "source": "IIT ChemE data"},
        "exams": ["JEE Advanced"],
        "pros": ["Highest average salary among engineers", "Pharma/petroleum boom", "Global demand"],
        "cons": ["Plant conditions harsh", "Health hazards potential", "Strict environmental laws"],
        "abroad": {"level": "Very High", "desc": "Chemical engineers in USA: $120K+. Middle East petroleum sector highly paid."},
        "familyAngle": "Chemical engineer = prestigious. High salary perception = family celebration.",
        "eligibility": "12th PCM. Strong JEE rank needed.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: 12th PCM"}
      },
      {
        "id": "aerospace-engineer",
        "name": "Aerospace Engineer",
        "icon": "✈️",
        "color": "#0288D1",
        "route": "12th PCM → JEE Advanced → BTech Aerospace (4 yrs)",
        "timeline": "4-6 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks don't matter for JEE."
        },
        "steps": [
          {"year": "1-4", "title": "BTech Aerospace", "desc": "Aircraft design, fluid mechanics, control systems, space technology."},
          {"year": "4-6", "title": "Career", "desc": "ISRO scientist, airline engineer, defense contractor."}
        ],
        "colleges": ["IIT Bombay", "IIT Madras", "IIST Thiruvananthapuram"],
        "cost": "₹8-20 Lakh",
        "salary": {"entry": "₹10-18 LPA", "mid": "₹25-50 LPA", "senior": "₹60-120 LPA", "top": "₹1-2 Cr", "source": "ISRO/Defense salaries"},
        "exams": ["JEE Advanced (top cutoff)"],
        "pros": ["Work on space/aircraft", "ISRO prestige", "High-tech work"],
        "cons": ["Very few seats (~50 in IIT)", "Theoretical heavy", "Government job constraints if ISRO route"],
        "abroad": {"level": "Very High", "desc": "NASA, SpaceX, Airbus hire Indian aerospace engineers. US salary: $130K+."},
        "familyAngle": "\"ISRO mein kaam karega?\" — India's space program = national pride. Family reaches nirvana."},
        "eligibility": "12th PCM. Very high JEE rank (top 50-100).",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: 12th PCM, top 1% JEE rank"}
      },
      {
        "id": "automobile-engineer",
        "name": "Automobile Engineer",
        "icon": "🚗",
        "color": "#E53935",
        "route": "12th PCM → JEE/BITSAT → BTech Mechanical/Automotive (4 yrs)",
        "timeline": "4-6 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant."
        },
        "steps": [
          {"year": "1-4", "title": "BTech Automotive/Mechanical", "desc": "Vehicle design, engine systems, emissions control, EV technology."},
          {"year": "4-6", "title": "Career", "desc": "Design engineer at Maruti/Hyundai/Skoda, electric vehicle startup engineer."}
        ],
        "colleges": ["BITS Pilani", "VIT", "IIT Bombay Mechanical with auto focus"],
        "cost": "₹10-20 Lakh",
        "salary": {"entry": "₹7-14 LPA", "mid": "₹18-40 LPA", "senior": "₹50-100 LPA", "top": "₹80L-1.5 Cr", "source": "Maruti/Hyundai salaries"},
        "exams": ["JEE Main", "BITSAT"],
        "pros": ["Automobile industry boom", "EV revolution", "Hands-on design work"],
        "cons": ["Manufacturing plant work", "Design constraints", "Emission regulations complexity"],
        "abroad": {"level": "High", "desc": "Tesla, BMW, Mercedes hire Indian auto engineers. Germany = auto hub."},
        "familyAngle": "Working on car design = cool factor. \"Maruti engineers ban gaya\" = pride.",
        "eligibility": "12th PCM. Good JEE rank.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: 12th PCM"}
      },
      {
        "id": "production-engineer",
        "name": "Production & Manufacturing Engineer",
        "icon": "🏭",
        "color": "#C62828",
        "route": "12th PCM → Engineering → Manufacturing Specialization",
        "timeline": "4-6 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks don't matter for JEE."
        },
        "steps": [
          {"year": "1-4", "title": "BTech Production/Manufacturing", "desc": "Quality control, process optimization, lean manufacturing, Six Sigma."},
          {"year": "4-6", "title": "Career", "desc": "Production manager, quality engineer, lean consultant."}
        ],
        "colleges": ["NIT Warangal", "IIT Delhi", "BITS"],
        "cost": "₹8-20 Lakh",
        "salary": {"entry": "₹6-12 LPA", "mid": "₹16-32 LPA", "senior": "₹40-80 LPA", "top": "₹70L-1 Cr", "source": "Manufacturing industry data"},
        "exams": ["JEE Main/BITSAT"],
        "pros": ["Manufacturing boom in India", "Quality management skills", "Consulting opportunities"],
        "cons": ["Plant floor work", "Shift work possible", "Quality issues = high stress"],
        "abroad": {"level": "Medium", "desc": "Manufacturing valued globally. Germany, Japan, USA automotive sector."},
        "familyAngle": "Production engineer = practical engineer. \"Factory chalata hai\" = respect.",
        "eligibility": "12th PCM. Engineering degree.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: 12th PCM"}
      },
      {
        "id": "vlsi-engineer",
        "name": "VLSI Design Engineer",
        "icon": "🔌",
        "color": "#1565C0",
        "route": "BTech ECE/CSE → VLSI Specialization → Semiconductor Company",
        "timeline": "4-6 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. VLSI skills through specialization/internships matter."
        },
        "steps": [
          {"year": "1-4", "title": "BTech ECE with VLSI focus", "desc": "Digital design, Verilog/VHDL, chip design, EDA tools."},
          {"year": "3-5", "title": "VLSI Internships", "desc": "Intel, Qualcomm, Broadcom, Synopsys. Design experience critical."},
          {"year": "4-6", "title": "VLSI Design Engineer", "desc": "Chip design, physical design, verification engineer."}
        ],
        "colleges": ["IIT Bombay", "IIT Madras", "BITS Pilani"],
        "cost": "₹8-20 Lakh",
        "salary": {"entry": "₹15-25 LPA", "mid": "₹35-70 LPA", "senior": "₹80-150 LPA", "top": "₹1-3 Cr", "source": "Qualcomm/Intel India salaries"},
        "exams": ["JEE Advanced"],
        "pros": ["Semiconductor boom", "High salary", "Cutting-edge technology"],
        "cons": ["Extremely competitive", "Complex domain", "Few companies in India"],
        "abroad": {"level": "Very High", "desc": "Silicon Valley, Taiwan, South Korea. US salary: $150-250K+."},
        "familyAngle": "\"Chip design karta hai\" = maximum technical prestige. Family treats as genius.",
        "eligibility": "BTech ECE. Strong digital design skills. IIT pedigree preferred.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: BTech ECE from top college"}
      },
      {
        "id": "robotics-engineer",
        "name": "Robotics & Automation Engineer",
        "icon": "🤖",
        "color": "#D32F2F",
        "route": "BTech Mechanical/ECE → Robotics Specialization → Tech Companies",
        "timeline": "4-6 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant."
        },
        "steps": [
          {"year": "1-4", "title": "BTech Mechanical/Electrical with Robotics", "desc": "Control systems, actuators, sensors, AI integration."},
          {"year": "2-4", "title": "Robotics Projects", "desc": "ROS (Robot Operating System), build robots, IITK/IITB robotics clubs."},
          {"year": "4-6", "title": "Robotics Engineer", "desc": "Boston Dynamics type roles, industrial automation, startup robotics."}
        ],
        "colleges": ["IIT Bombay", "IIT Madras", "BITS Pilani"],
        "cost": "₹8-20 Lakh",
        "salary": {"entry": "₹12-20 LPA", "mid": "₹30-60 LPA", "senior": "₹70-150 LPA", "top": "₹1-3 Cr", "source": "Robotics startup data"},
        "exams": ["JEE Advanced"],
        "pros": ["AI + Robotics boom", "Cutting-edge technology", "High salary"],
        "cons": ["Very few roles in India", "Global competition", "Niche domain"],
        "abroad": {"level": "Very High", "desc": "Boston Dynamics, Tesla, BMW. Robotics engineers in USA: $150-250K+."},
        "familyAngle": "\"Robots banata hai?\" = ultimate cool factor.",
        "eligibility": "BTech Mechanical/ECE. Robotics project experience.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: BTech from IIT"}
      }
    ]
  },
  "healthcare": {
    "id": "healthcare",
    "name": "Healthcare & Medical",
    "icon": "🏥",
    "color": "#E63946",
    "tagline": "Saving lives, improving health",
    "description": "For students passionate about medicine, healthcare, and patient care.",
    "preview": [
      "Doctor (MBBS)",
      "Dentist",
      "Nurse",
      "Pharmacist"
    ],
    "paths": [
      {
        "id": "doctor-mbbs",
        "name": "Doctor (MBBS)",
        "icon": "⚕️",
        "color": "#C62828",
        "route": "12th PCB → NEET → MBBS (5.5 yrs) → PG (3-5 yrs)",
        "timeline": "5.5-10.5 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters",
          "description": "12th marks matter for NEET eligibility but NEET score is everything. Need 50% aggregate in PCB."
        },
        "steps": [
          {"year": "1-2", "title": "NEET Preparation", "desc": "Biology, Chemistry, Physics. Coaching or self-study. ~12-15 Lakh aspirants, ~18K MBBS seats."},
          {"year": "2-7", "title": "MBBS (5.5 years)", "desc": "Anatomy, physiology, pathology, clinical training. Hospital rotations."},
          {"year": "7-10", "title": "PG Specialization (optional)", "desc": "MD/MS in specialty. DNB or DM super-specialty. Neet competitive exam."}
        ],
        "colleges": ["AIIMS", "CMC Vellore", "St. Johns Bangalore", "Government medical colleges"],
        "cost": "₹10-50 Lakh (government ~₹5L, private ~₹50L+)",
        "salary": {"entry": "₹4-7 LPA (resident doctor)", "mid": "₹15-35 LPA", "senior": "₹40-100 LPA", "top": "₹1-5 Cr", "source": "Medical council salary surveys"},
        "exams": ["NEET (undergraduate)", "NEET-PG (postgraduate)", "FMGE (foreign medical grad)"],
        "pros": ["Ultimate prestige in India", "Life-long job security", "Help people directly", "Unlimited earning through private practice"],
        "cons": ["Extremely competitive (15M attempt, 18K seats)", "Burnout from on-call duties", "Emotional trauma from patient loss"],
        "abroad": {"level": "High", "desc": "MBBS + FMGE → USA/UK practice. US salary: $200-400K+."},
        "familyAngle": "\"Doctor ban gaya\" — this is the ultimate Indian achievement. Even above engineer now.",
        "eligibility": "12th PCB with minimum 50%. NEET qualification.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCB"], "notes": "Needs: 12th PCB, NEET qualifying"}
      },
      {
        "id": "dentist-bds",
        "name": "Dentist (BDS)",
        "icon": "🦷",
        "color": "#1565C0",
        "route": "12th PCB → NEET → BDS (4 yrs) → MDS (3 yrs)",
        "timeline": "4-7 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "NEET score matters. 12th marks for eligibility only."
        },
        "steps": [
          {"year": "1-4", "title": "BDS (4 years)", "desc": "Prosthodontics, orthodontics, periodontology, surgery. Clinic rotations."},
          {"year": "4-7", "title": "MDS Specialization (optional)", "desc": "Orthodontist, surgeon, implantologist."}
        ],
        "colleges": ["Sri Ramachandra", "Manipal", "Government dental colleges"],
        "cost": "₹8-30 Lakh",
        "salary": {"entry": "₹3-6 LPA", "mid": "₹12-25 LPA", "senior": "₹30-70 LPA", "top": "₹50L-1 Cr", "source": "Dental association data"},
        "exams": ["NEET"],
        "pros": ["Dental practice lucrative", "Own clinic potential", "Better work-life balance than MD", "Aesthetic satisfaction"],
        "cons": ["Physical strain on back/hands", "Phobia patients draining", "Lower status than doctors"],
        "abroad": {"level": "Medium", "desc": "Australia, Canada value Indian dentists. Licensing exams needed."},
        "familyAngle": "\"Dentist ban gaya\" = good career but slightly lower than doctor in family hierarchy.",
        "eligibility": "12th PCB. NEET score (lower cutoff than medicine).",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCB"], "notes": "Needs: 12th PCB, NEET"}
      },
      {
        "id": "nurse-bsc",
        "name": "Nurse (BSc/ANM)",
        "icon": "👩‍⚕️",
        "color": "#E91E63",
        "route": "12th PCB → Nursing College → BSc/GNM (3-4 yrs)",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks for eligibility. Nursing merit entrance or NEET sub-specialty."
        },
        "steps": [
          {"year": "1-4", "title": "BSc Nursing (4 years)", "desc": "Anatomy, pharmacology, patient care, clinical training."},
          {"year": "4+", "title": "Nursing Career", "desc": "Hospital nurse, ICU, community health worker, nursing educator."}
        ],
        "colleges": ["AIIMS", "CMC", "Government nursing colleges", "Private nursing colleges"],
        "cost": "₹3-15 Lakh",
        "salary": {"entry": "₹2.5-4.5 LPA", "mid": "₹6-12 LPA", "senior": "₹15-30 LPA", "top": "₹35-60 LPA", "source": "Hospital salary data"},
        "exams": ["NEET (some colleges)", "Nursing entrance exams"],
        "pros": ["Critical healthcare demand", "Patient care satisfaction", "International opportunities", "Flexible shifts"],
        "cons": ["Physical exhaustion from 12-hour shifts", "Low pay initially", "Stress from patient emergencies"],
        "abroad": {"level": "Very High", "desc": "US, UK, Australia desperately need nurses. Work visa easy. Salary: $50-80K USD+."},
        "familyAngle": "Nursing = respectable but lower status than doctor in traditional families. Modern families appreciate it.",
        "eligibility": "12th PCB or 10+2 any stream. English proficiency.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCB"], "notes": "Needs: 12th"}
      },
      {
        "id": "pharmacist",
        "name": "Pharmacist (BPharm)",
        "icon": "💊",
        "color": "#00695C",
        "route": "12th PCB → BPharm (4 yrs) → MPharm (2 yrs)",
        "timeline": "4-6 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Matters slightly",
          "description": "BPharm entrance or NEET. 12th marks for eligibility."
        },
        "steps": [
          {"year": "1-4", "title": "BPharm (4 years)", "desc": "Pharmaceutics, pharmacology, drug formulation, clinical pharmacy."},
          {"year": "4-6", "title": "MPharm (optional)", "desc": "Specialization in pharmaceutics, pharmacology, or clinical pharmacy."}
        ],
        "colleges": ["BITS Pilani", "Manipal", "Government pharmacy colleges"],
        "cost": "₹5-20 Lakh",
        "salary": {"entry": "₹3-6 LPA", "mid": "₹8-18 LPA", "senior": "₹22-50 LPA", "top": "₹60L-1 Cr", "source": "Pharma industry data"},
        "exams": ["NEET (some colleges)", "BPharm entrance"],
        "pros": ["Pharma industry boom", "Medicine discovery work", "Research opportunities", "Clinical role impact"],
        "cons": ["Regulatory compliance heavy", "Quality assurance tedious", "Limited creative freedom"],
        "abroad": {"level": "High", "desc": "US, Europe need pharmacists. Regulatory pathways available."},
        "familyAngle": "\"Pharmacist ban gaya\" = decent career. Pharmacy degree = earning potential.",
        "eligibility": "12th PCB. BPharm entrance or merit.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCB"], "notes": "Needs: 12th PCB"}
      },
      {
        "id": "physiotherapist",
        "name": "Physiotherapist",
        "icon": "🧘",
        "color": "#4CAF50",
        "route": "12th PCB → BPTh (4 yrs) → Specialization",
        "timeline": "4-6 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks for eligibility. BPTh merit-based entrance."
        },
        "steps": [
          {"year": "1-4", "title": "BPTh (4 years)", "desc": "Anatomy, physiology, sports medicine, rehabilitation."},
          {"year": "4-6", "title": "MPTh (optional)", "desc": "Specialization in sports, orthopedic, neuro rehabilitation."}
        ],
        "colleges": ["AIIMS", "Manipal", "Government colleges"],
        "cost": "₹4-15 Lakh",
        "salary": {"entry": "₹2-4 LPA", "mid": "₹6-15 LPA", "senior": "₹18-40 LPA", "top": "₹40-80 LPA", "source": "Healthcare data"},
        "exams": ["BPTh entrance", "some colleges NEET"],
        "pros": ["Sports industry boom", "Own clinic potential", "Hands-on healing", "Flexible practice"],
        "cons": ["Physical demands on therapist", "Patient compliance issues", "Lower pay initially"],
        "abroad": {"level": "Medium", "desc": "Sports teams, rehab centers globally. Licensing varies by country."},
        "familyAngle": "\"Physiotherapist ban gaya\" = health professional respect.",
        "eligibility": "12th PCB. BPTh entrance.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCB"], "notes": "Needs: 12th PCB"}
      },
      {
        "id": "veterinary-doctor",
        "name": "Veterinary Doctor",
        "icon": "🐾",
        "color": "#FF6F00",
        "route": "12th PCB → B.V.Sc. (5 yrs) → M.V.Sc. (2 yrs)",
        "timeline": "5-7 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Vet entrance exam or merit. Board marks for eligibility."
        },
        "steps": [
          {"year": "1-5", "title": "BVSc (5 years)", "desc": "Veterinary anatomy, medicine, surgery, animal husbandry."},
          {"year": "5-7", "title": "MVSc (optional)", "desc": "Surgery, medicine, infectious diseases specialization."}
        ],
        "colleges": ["IVRI Izatnagar", "GADVASU", "Veterinary colleges"],
        "cost": "₹3-15 Lakh",
        "salary": {"entry": "₹2.5-5 LPA", "mid": "₹8-18 LPA", "senior": "₹20-45 LPA", "top": "₹40-80 LPA", "source": "Vet college data"},
        "exams": ["Veterinary entrance", "B.V.Sc."],
        "pros": ["Pet industry boom", "Own clinic potential", "Government vet jobs secure", "Animal welfare impact"],
        "cons": ["Lower prestige than human medicine", "Difficult cases emotionally", "Physical risk from animals"],
        "abroad": {"level": "Low-Medium", "desc": "Livestock/pet care internationally available. Licensing required."},
        "familyAngle": "\"Vet ban gaya\" = respectable but less prestigious than human medicine.",
        "eligibility": "12th PCB. Vet entrance.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCB"], "notes": "Needs: 12th PCB"}
      }
    ]
  },
  "creative": {
    "id": "creative",
    "name": "Creative, Media & Entertainment",
    "icon": "🎬",
    "color": "#FF1744",
    "tagline": "Creating, storytelling, and entertaining the world",
    "description": "For students who want to create, express, and entertain.",
    "preview": [
      "Film Director",
      "Actor",
      "Content Creator",
      "Graphic Designer"
    ],
    "paths": [
      {
        "id": "film-director",
        "name": "Film Director",
        "icon": "🎥",
        "color": "#D32F2F",
        "route": "BA/BFA Film → Assistant Director → Director",
        "timeline": "Variable",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Creativity, vision, and networking matter."
        },
        "steps": [
          {"year": "1-3", "title": "Film School (FTII/BITS)", "desc": "Cinematography, direction, editing, screenplay writing."},
          {"year": "3-7", "title": "Assistant Director", "desc": "Work on 3-5 films. Learn on-set management, storytelling."},
          {"year": "7+", "title": "Director", "desc": "Debut film, commercial success, critical acclaim."}
        ],
        "colleges": ["FTII Pune", "BITS Goa", "Self-taught route (Aamir Khan, SS Rajamouli paths)"],
        "cost": "₹0-20 Lakh (film school or self-taught)",
        "salary": {"entry": "₹0-3 LPA (assistant director)", "mid": "₹1-5 Cr (per film)", "senior": "₹10-50 Cr", "top": "₹100+ Cr", "source": "Bollywood director fees"},
        "exams": ["FTII entrance exam", "No formal exams for self-taught"],
        "pros": ["Creative expression at highest level", "Fame and recognition", "Massive financial upside", "Legacy building"],
        "cons": ["Extreme competition", "First 5-10 films may fail", "Audience reception unpredictable", "Very high financial risk"],
        "abroad": {"level": "High", "desc": "International film festival recognition. Hollywood opportunities post-success."},
        "familyAngle": "\"Director ban gaya\" = ultimate prestige if successful. Massive failure = family embarrassment.",
        "eligibility": "Storytelling passion, visual sense, persistence through rejection.",
        "educationLevels": ["after12", "afterGraduation"],
        "prerequisites": {"minEducation": "class12", "streams": ["Any"], "notes": "Needs: Passion + persistence"}
      },
      {
        "id": "actor-actress",
        "name": "Actor / Actress",
        "icon": "🎭",
        "color": "#E91E63",
        "route": "Theatre → Drama School / Auditions → Bollywood/OTT",
        "timeline": "Variable",
        "difficulty": "Unpredictable",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks completely irrelevant."
        },
        "steps": [
          {"year": "1-3", "title": "Drama/Acting Training", "desc": "Theatre, acting classes, performance experience."},
          {"year": "2-5", "title": "Auditions", "desc": "Theatre plays, webseries, film auditions. Lots of rejection."},
          {"year": "5+", "title": "Breakthrough", "desc": "Hit role in series/film. Career trajectory post-hit."}
        ],
        "colleges": ["NSD Delhi", "Barry John Acting Studio", "Theatre groups", "Self-taught route"],
        "cost": "₹0-20 Lakh",
        "salary": {"entry": "₹0-1 LPA (struggling)", "mid": "₹5-50 LPA (web series stars)", "senior": "₹50L-5 Cr", "top": "₹5-50+ Cr", "source": "Industry data"},
        "exams": ["NSD entrance (if formal route)", "Continuous audition rejections"],
        "pros": ["Fame", "Creative expression", "Massive earning potential if hit", "Cultural impact"],
        "cons": ["90% never get lead roles", "Constant rejection", "Pressure on looks/youth", "No job security"],
        "abroad": {"level": "Medium", "desc": "Bollywood success → Hollywood roles (Priyanka, Deepika path). International productions."},
        "familyAngle": "\"Actor ban gaya\" = family prestige if famous. Struggling actor = family shame in traditional families.",
        "eligibility": "Acting ability, looks (for lead roles), persistence.",
        "educationLevels": ["after12", "afterGraduation"],
        "prerequisites": {"minEducation": "class12", "streams": ["Any"], "notes": "Needs: Talent + luck + persistence"}
      },
      {
        "id": "content-creator",
        "name": "Content Creator / YouTuber",
        "icon": "📹",
        "color": "#FF5252",
        "route": "12th → YouTube/Instagram → Brand Deals → Full-time Creator",
        "timeline": "1-3 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Subscriber growth is your grade."
        },
        "steps": [
          {"year": "0-1", "title": "Start Creating", "desc": "Pick niche (tech, comedy, education, gaming, vlogs). Create 50-100 videos."},
          {"year": "1-2", "title": "Monetization", "desc": "1K subscribers + 4K watch hours = YouTube Partner Program. Brand deals at 10K+."},
          {"year": "2-3", "title": "Full-time Creator", "desc": "AdSense + sponsorships + affiliate marketing = income."}
        ],
        "colleges": ["No college needed"],
        "cost": "₹20K-1 Lakh (camera, lighting, editing software)",
        "salary": {"entry": "₹0 (first 1-2 years)", "mid": "₹2-10 LPA", "senior": "₹15-50 LPA", "top": "₹1-5 Cr", "source": "Famous YouTuber earnings"},
        "exams": ["No exams"],
        "pros": ["No gatekeeper", "Start immediately with phone", "Viral potential", "Passive income through AdSense", "Build personal brand"],
        "cons": ["90% channels fail <1K subs", "Algorithm unpredictable", "Burnout from constant content", "Harassment online"],
        "abroad": {"level": "High", "desc": "YouTube global. Creator earnings in USD. International sponsorships."},
        "familyAngle": "\"YouTuber hai?\" = family skepticism initially. Huge channel (1M+ subs) = respect and income proof.",
        "eligibility": "Consistency, video production skills, niche expertise, luck.",
        "educationLevels": ["after10"],
        "prerequisites": {"minEducation": "class10", "streams": ["Any"], "notes": "Needs: Phone + internet + persistence"}
      },
      {
        "id": "graphic-designer",
        "name": "Graphic Designer",
        "icon": "🎨",
        "color": "#9C27B0",
        "route": "12th → Design School / Self-taught → Design Agency / Freelance",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Portfolio is your resume."
        },
        "steps": [
          {"year": "1-2", "title": "Learn Design", "desc": "Adobe Creative Suite (Photoshop, Illustrator, InDesign). Design fundamentals, typography, color theory."},
          {"year": "2-3", "title": "Build Portfolio", "desc": "5-10 projects. Logo design, branding, print design, web design."},
          {"year": "3-4", "title": "Career", "desc": "Design agency → Senior designer → Art director. Or freelance on Fiverr/Upwork."}
        ],
        "colleges": ["NID Ahmedabad", "IIAD Delhi", "Self-taught via Coursera/YouTube"],
        "cost": "₹0-10 Lakh",
        "salary": {"entry": "₹3-6 LPA", "mid": "₹10-25 LPA", "senior": "₹25-50 LPA", "top": "₹50L-1 Cr", "source": "Design agency salary data"},
        "exams": ["No formal exams. Portfolio reviews are the exam."],
        "pros": ["Creative work", "High demand", "Freelancing pays well", "Remote work friendly"],
        "cons": ["Client feedback brutal", "Revision fatigue", "Eye strain", "Trends constantly change"],
        "abroad": {"level": "High", "desc": "Design agencies global. Freelancing on international platforms. US salary: $60-120K+."},
        "familyAngle": "\"Designer ban gaya\" = okay career. Creative but lower status than engineer.",
        "eligibility": "Visual sense, design software skills, creativity.",
        "educationLevels": ["after12", "afterGraduation"],
        "prerequisites": {"minEducation": "class12", "streams": ["Any"], "notes": "Needs: Design portfolio"}
      },
      {
        "id": "music-producer",
        "name": "Music Producer / Composer",
        "icon": "🎵",
        "color": "#FF6D00",
        "route": "Music Training → Music Production → Album / Film Music",
        "timeline": "3-5 years",
        "difficulty": "High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant."
        },
        "steps": [
          {"year": "1-3", "title": "Music Training", "desc": "Instrument (piano, guitar), music theory, composition, sound design."},
          {"year": "2-4", "title": "Production Skills", "desc": "DAW (FL Studio, Logic Pro, Ableton). Learn mixing, mastering."},
          {"year": "3-5", "title": "Career", "desc": "Film music composer, music producer for films/albums, streamed music."}
        ],
        "colleges": ["Berklee Online", "Self-taught via YouTube/Udemy"],
        "cost": "₹0-5 Lakh",
        "salary": {"entry": "₹0-2 LPA", "mid": "₹3-10 LPA", "senior": "₹10-50 LPA", "top": "₹50L-1 Cr", "source": "Bollywood music director fees"},
        "exams": ["No formal exams"],
        "pros": ["Creative freedom", "Passive income through royalties", "Film music prestige", "Global reach via streaming"],
        "cons": ["Difficult to get film commissions", "Artist mood dependency", "Market saturation", "Streaming royalties very low"],
        "abroad": {"level": "High", "desc": "International music production. Streaming platforms global."},
        "familyAngle": "\"Music director hai?\" = creative career, lower status than engineer/doctor.",
        "eligibility": "Musical talent, production software skills, creativity.",
        "educationLevels": ["after10"],
        "prerequisites": {"minEducation": "class10", "streams": ["Any"], "notes": "Needs: Music background"}
      },
      {
        "id": "copywriter",
        "name": "Copywriter / Content Writer",
        "icon": "✍️",
        "color": "#1565C0",
        "route": "Any Degree → Content Writing / Copywriting → Agency / In-house / Freelance",
        "timeline": "2-3 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Writing samples matter."
        },
        "steps": [
          {"year": "1-2", "title": "Learn Copywriting", "desc": "Persuasion psychology, SEO writing, email marketing, brand voice."},
          {"year": "1-2", "title": "Build Portfolio", "desc": "Blog posts, website copy, sales pages, social media copy."},
          {"year": "2-3", "title": "Career", "desc": "Agency copywriter, in-house writer, freelance on Upwork/Fiverr, personal brand."}
        ],
        "colleges": ["No specific college. Online courses: Copyblogger, ConvertKit"],
        "cost": "₹0-3 Lakh",
        "salary": {"entry": "₹3-6 LPA", "mid": "₹10-25 LPA", "senior": "₹25-60 LPA", "top": "₹60L-1 Cr", "source": "Content agency data"},
        "exams": ["No formal exams. Writing samples = portfolio"],
        "pros": ["High demand", "Freelancing very profitable (₹2-10K per article)", "Remote work", "Scalable income"],
        "cons": ["Constant writing deadline pressure", "Writer's block", "Client communication heavy", "Imposter syndrome"],
        "abroad": {"level": "Very High", "desc": "US/UK companies outsource to Indian writers. Freelance rates higher in $ USD."},
        "familyAngle": "\"Writer hai?\" = creative career. \"Freelance writer\" = skepticism until income shown.",
        "eligibility": "Excellent writing, marketing understanding, SEO knowledge.",
        "educationLevels": ["after12", "afterGraduation"],
        "prerequisites": {"minEducation": "class12", "streams": ["Any"], "notes": "Needs: English proficiency"}
      }
    ]
  },
  "sports": {
    "id": "sports",
    "name": "Sports, Fitness & Wellness",
    "icon": "⚽",
    "color": "#FBC02D",
    "tagline": "Athletics, fitness, and human potential",
    "description": "For students who love sports and helping others stay fit.",
    "preview": [
      "Sports Coach",
      "Fitness Trainer",
      "Professional Athlete",
      "Sports Manager"
    ],
    "paths": [
      {
        "id": "professional-athlete",
        "name": "Professional Athlete",
        "icon": "🏅",
        "color": "#FF6F00",
        "route": "School Sports → College / Academy → National Team",
        "timeline": "15-20 years",
        "difficulty": "Unpredictable",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Performance metrics are everything."
        },
        "steps": [
          {"year": "6-18", "title": "Talent Identification & Training", "desc": "Coaching academy, talent hunt programs (SAI, state academies)."},
          {"year": "18-25", "title": "National Competition", "desc": "Nationals, state championships, Asian games, Olympics."},
          {"year": "25+", "title": "Professional Career", "desc": "IPL/International team, sponsorships, endorsements."}
        ],
        "colleges": ["SAI National Institutes", "Sports Academies", "University sports programs"],
        "cost": "₹0-10 Lakh (government sponsorship often available)",
        "salary": {"entry": "₹0-2 LPA (state player)", "mid": "₹5-20 LPA (national player)", "senior": "₹20-100 LPA", "top": "₹1-50+ Cr", "source": "IPL/International player contracts"},
        "exams": ["Athletic performance tests"],
        "pros": ["National pride", "Sponsorships massive (Virat Kohli ₹1000+ Cr)", "Global fame", "Legacy building"],
        "cons": ["Only 0.01% make professional", "Career short (15-20 year peak)", "Injury risk", "Post-retirement income uncertainty"],
        "abroad": {"level": "Very High", "desc": "International teams, sponsorships, commentator roles post-retirement."},
        "familyAngle": "\"Cricketer ban gaya\" / \"Footballer ban gaya\" = national hero status. Ultimate prestige.",
        "eligibility": "Exceptional athletic talent, discipline, mental toughness.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Any"], "notes": "Needs: Exceptional talent + coaching"}
      },
      {
        "id": "fitness-trainer",
        "name": "Fitness Trainer / Personal Trainer",
        "icon": "💪",
        "color": "#4CAF50",
        "route": "12th → Fitness Certification → Gym / Personal Training",
        "timeline": "2-3 years",
        "difficulty": "Low-Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant."
        },
        "steps": [
          {"year": "1-2", "title": "Fitness Certification", "desc": "ACE, NASM, ISSA certifications. Exercise physiology, nutrition basics."},
          {"year": "2-3", "title": "Gym Employment / Personal Training", "desc": "Gold's Gym, Cult Fit, Fittr. Personal clients at ₹2-10K/month."}
        ],
        "colleges": ["ACE Academy India", "ISSA", "Online certifications"],
        "cost": "₹30K-2 Lakh",
        "salary": {"entry": "₹2-5 LPA (gym trainer)", "mid": "₹6-15 LPA (busy personal trainer)", "senior": "₹15-40 LPA", "top": "₹40L-1 Cr", "source": "Fitness industry data"},
        "exams": ["ACE, NASM, ISSCA certifications"],
        "pros": ["Fitness boom in India", "Personal training very lucrative", "Help people achieve goals", "Flexible work"],
        "cons": ["Physical demanding", "Client consistency issues", "Overuse injuries on trainers", "Competitive market"],
        "abroad": {"level": "Medium-High", "desc": "Fitness industry global. US trainers earn $50-100K+."},
        "familyAngle": "\"Trainer ban gaya\" = decent career. \"Successful personal trainer\" = good income."},
        "eligibility": "Fitness passion, motivational skills, body knowledge.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Any"], "notes": "Needs: Fitness certification"}
      },
      {
        "id": "sports-coach",
        "name": "Sports Coach",
        "icon": "🏆",
        "color": "#E53935",
        "route": "BTech/BA → Sports Coaching Certification → Academy / School",
        "timeline": "3-4 years",
        "difficulty": "Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant."
        },
        "steps": [
          {"year": "1-3", "title": "Sports Science / Education", "desc": "Learn sports physiology, coaching methodology, athlete psychology."},
          {"year": "2-4", "title": "Coaching Certification", "desc": "National coaching credentials, SAI coach programs."},
          {"year": "4+", "title": "Coaching Career", "desc": "School coach, academy coach, national team coach."}
        ],
        "colleges": ["NSNIS Bangalore", "LNCPE Chennai", "Sports Authority of India"],
        "cost": "₹2-8 Lakh",
        "salary": {"entry": "₹2.5-5 LPA", "mid": "₹6-15 LPA", "senior": "₹15-40 LPA", "top": "₹30-80 LPA", "source": "Coaching salary data"},
        "exams": ["National coach certification", "SAI exams"],
        "pros": ["Help athletes reach potential", "Government coaching stable", "Sports passion career"],
        "cons": ["Lower pay initially", "Emotional investment in athletes", "Success depends on athlete talent"],
        "abroad": {"level": "Medium", "desc": "International coaching opportunities. Australia, Europe hire Indian coaches."},
        "familyAngle": "\"Coach ban gaya\" = respected. National team coach = pride.",
        "eligibility": "Sports expertise, coaching certification, athlete understanding.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Any"], "notes": "Needs: Sports background + certification"}
      }
    ]
  },
  "emerging": {
    "id": "emerging",
    "name": "Emerging & Future Tech Careers",
    "icon": "🚀",
    "color": "#00BCD4",
    "tagline": "The future of work",
    "description": "For students who want to work on cutting-edge technology and innovation.",
    "preview": [
      "Blockchain Developer",
      "AI Researcher",
      "Drone Operator",
      "Sustainability Consultant"
    ],
    "paths": [
      {
        "id": "blockchain-developer",
        "name": "Blockchain Developer",
        "icon": "⛓️",
        "color": "#F57C00",
        "route": "BTech CS → Web3 Skills → Crypto/Web3 Company",
        "timeline": "3-4 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant. Coding skills + blockchain knowledge = salary."
        },
        "steps": [
          {"year": "1-2", "title": "Core Programming", "desc": "Python, JavaScript, Solidity. Smart contract development on Ethereum."},
          {"year": "2-3", "title": "Blockchain Specialization", "desc": "DeFi, NFTs, Layer 2 solutions. Build projects on GitHub."},
          {"year": "3-4", "title": "Web3 Company", "desc": "Polygon, Aave, OpenSea, Indian startups (Polygon India, Dune)"}
        ],
        "colleges": ["No specific college. Self-taught essential."],
        "cost": "₹0-3 Lakh",
        "salary": {"entry": "₹10-20 LPA", "mid": "₹25-60 LPA", "senior": "₹70-200 LPA", "top": "₹1-5 Cr", "source": "Web3 startup salary data"},
        "exams": ["No formal exams"],
        "pros": ["Crypto boom", "High salary", "Global remote work", "Stock options potential"],
        "cons": ["Crypto volatility risk", "Regulatory uncertainty", "Job market cyclical", "\"Scam\" association"],
        "abroad": {"level": "Very High", "desc": "Web3 fully remote. Singapore, Dubai, US based companies. USD salaries."},
        "familyAngle": "\"Blockchain mein kaam karta hai?\" = family confusion initially. Salary proof = acceptance.",
        "eligibility": "Strong programming, blockchain understanding, financial knowledge.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: BTech CS"}
      },
      {
        "id": "ai-researcher",
        "name": "AI Researcher / Ph.D. Researcher",
        "icon": "🔬",
        "color": "#7B1FA2",
        "route": "BTech CS → MS/PhD AI → Research Institute / Tech Company",
        "timeline": "5-8 years",
        "difficulty": "Very High",
        "boardMarks": {
          "tenth": "Matters",
          "twelfth": "Matters",
          "description": "Board marks matter for top college admissions. PhD research output is everything."
        },
        "steps": [
          {"year": "1-4", "title": "BTech CS", "desc": "Strong in ML, linear algebra, programming."},
          {"year": "4-6", "title": "MS or PhD", "desc": "Top university: CMU, Stanford, MIT, or domestic: IISc, IIIT Hyderabad."},
          {"year": "6-8", "title": "Research Career", "desc": "DeepMind, OpenAI, Meta AI, Google Brain, Tesla AI, ISRO."}
        ],
        "colleges": ["IISc Bangalore", "IIIT Hyderabad", "IIT-D (top CS Ph.D. programs)"],
        "cost": "₹2-50 Lakh (India), full scholarship (abroad for PhD)",
        "salary": {"entry": "₹15-30 LPA (researcher)", "mid": "₹35-80 LPA", "senior": "₹1-3 Cr", "top": "₹5-10 Cr", "source": "DeepMind/OpenAI researcher compensation"},
        "exams": ["PhD entrance", "Research publications"],
        "pros": ["Publish papers at top venues", "Global recognition", "Shape AI field", "Unlimited earning at top companies"],
        "cons": ["PhD is 5+ years of low stipend", "Publish or perish pressure", "Very competitive space", "Niche job market"],
        "abroad": {"level": "Very High", "desc": "PhD abroad fully funded. Faculty positions in top universities. Silicon Valley researcher roles."},
        "familyAngle": "\"AI research karta hai\" = ultimate intellectual prestige. Family boasts to relatives."},
        "eligibility": "PhD-level understanding of ML/AI, research publication ability.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science-PCM"], "notes": "Needs: BTech CS + PhD"}
      },
      {
        "id": "drone-operator",
        "name": "Drone Operator / Drone Pilot",
        "icon": "🛸",
        "color": "#00695C",
        "route": "12th → Drone Certification → Commercial Drone Operations",
        "timeline": "1-2 years",
        "difficulty": "Low-Medium",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks irrelevant."
        },
        "steps": [
          {"year": "1", "title": "Drone Certification", "desc": "DGCA Remote Pilot License. Theory + practical exams."},
          {"year": "1-2", "title": "Commercial Drone Work", "desc": "Photography, surveying, agriculture, real estate, film production."}
        ],
        "colleges": ["DGCA approved training centers", "Online drone courses"],
        "cost": "₹50K-3 Lakh",
        "salary": {"entry": "₹2-4 LPA", "mid": "₹6-15 LPA", "senior": "₹15-35 LPA", "top": "₹35-70 LPA", "source": "Drone services data"},
        "exams": ["DGCA Remote Pilot exam"],
        "pros": ["Rapidly growing field", "Low barriers to entry", "Diverse applications", "Own drone business potential"],
        "cons": ["Highly regulated (DGCA strict)", "Weather dependent work", "License renewal required", "Equipment expensive"],
        "abroad": {"level": "Medium", "desc": "Drone operations global. US drone operators earn $50-100K+."},
        "familyAngle": "\"Drone operate karta hai?\" = modern, cool job perception.",
        "eligibility": "DGCA license, technical aptitude, patience for regulations.",
        "educationLevels": ["after10"],
        "prerequisites": {"minEducation": "class10", "streams": ["Any"], "notes": "Needs: DGCA certification"}
      },
      {
        "id": "sustainability-consultant",
        "name": "Sustainability / ESG Consultant",
        "icon": "🌱",
        "color": "#2E7D32",
        "route": "BTech / BBA → MBA Sustainability / ESG → Consulting Firm",
        "timeline": "4-6 years",
        "difficulty": "Medium-High",
        "boardMarks": {
          "tenth": "Neutral",
          "twelfth": "Neutral",
          "description": "Board marks don't matter directly."
        },
        "steps": [
          {"year": "1-4", "title": "Bachelor's Degree", "desc": "Engineering or Business with sustainability focus."},
          {"year": "4-6", "title": "MBA / Masters Sustainability", "desc": "Certification in ESG, Carbon accounting, climate strategy."},
          {"year": "6+", "title": "Consulting", "desc": "McKinsey Sustainability, Deloitte ESG, corporate ESG head."}
        ],
        "colleges": ["IIM Calcutta (ESG focus)", "Top MBA programs"],
        "cost": "₹5-30 Lakh",
        "salary": {"entry": "₹7-15 LPA", "mid": "₹20-45 LPA", "senior": "₹50-100 LPA", "top": "₹1-2 Cr", "source": "Consulting salary data"},
        "exams": ["MBA entrance"],
        "pros": ["CSR boom in India", "Corporate ESG mandatory (SEBI)", "Global sustainability trend", "Meaningful work"],
        "cons": ["Niche market", "Corporate greenwashing issues", "Regulatory complexity", "Measurement challenges"],
        "abroad": {"level": "High", "desc": "EU/US ESG regulations driving demand. Consulting roles global."},
        "familyAngle": "\"Sustainability consultant\" = impact-driven, modern career.",
        "eligibility": "Sustainability knowledge, consulting skills, environmental passion.",
        "educationLevels": ["after12"],
        "prerequisites": {"minEducation": "class12", "streams": ["Science/Commerce"], "notes": "Needs: Bachelor's + sustainability focus"}
      }
    ]
  }
};
