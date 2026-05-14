export interface CareerData {
  career: string;
  aliases: string[];
  category: string;
  emoji: string;
  tagline: string;
  averagePrepTime: string;
  successRate: string;
  competitorCount: string;
  whatYouGiveUp: string[];
  whatHappensIfYouDont: { path: string; detail: string }[];
  whatPeopleWhoMadeItSay: string;
  hardestPartAccordingToThem: string;
  alternativePaths: { name: string; why: string; effort: string }[];
  honestVerdict: string;
  motivationNote: string;
}

export const CAREER_DATABASE: CareerData[] = [
  {
    career: "IAS Officer",
    aliases: ["ias","civil services","upsc","ias officer","civil servant","collector","dm","district magistrate","ips","ifs officer","irs officer","ips officer"],
    category: "civil",
    emoji: "🏛️",
    tagline: "The most prestigious exam in India — and the hardest waiting game.",
    averagePrepTime: "3–5 years after graduation (full-time prep)",
    successRate: "UPSC CSE 2023: 0.16% selection rate (1,016 selected from 6.4 lakh applicants)",
    competitorCount: "~10 lakh aspirants register; ~5 lakh appear; 1,016 finally selected.",
    whatYouGiveUp: [
      "₹6–15 LPA corporate income foregone during prep years",
      "Social life — weddings, events, friendships drift during isolation",
      "Relationship strain — partners, family lose patience after year 2",
      "Your 20s — most aspirants are 23–28 during their serious prep window",
      "Certainty — 6 attempts maximum, no guarantee after any",
      "Mental health — anxiety, depression rates are high in the community"
    ],
    whatHappensIfYouDont: [
      { path: "State PCS / SDM / Tehsildar", detail: "Most serious aspirants qualify state services — real power, real respect, better odds." },
      { path: "Banking (PO / Manager)", detail: "IBPS/SBI PO — stable, respectable, 3–4 lakh salary. Many pivot here after 2–3 UPSC attempts." },
      { path: "Teaching / Coaching", detail: "Ex-aspirants become UPSC coaches — Vajiram, Vision IAS pay well. Knowledge is never wasted." },
      { path: "Private sector management", detail: "MBA after UPSC prep — analytical skills make strong consultants and strategists." }
    ],
    whatPeopleWhoMadeItSay: "Honestly? The posting is great but the preparation broke me twice. I cried after my second mains failure. What kept me going wasn't motivation — it was stubbornness. If you're not okay with 4 years of uncertainty, think hard before starting.",
    hardestPartAccordingToThem: "The years between attempts — not knowing if you'll ever clear, watching peers build careers, explaining to relatives why you're 'still preparing'.",
    alternativePaths: [
      { name: "State PCS Officer", why: "Same governance work, 5–10x better odds, faster career progression in your home state.", effort: "1–2 years prep" },
      { name: "IB/ACIO / SSC CGL Grade B", why: "Central government role, stability, pension — without the brutal UPSC timeline.", effort: "6–12 months" },
      { name: "Policy Analyst / Think Tank", why: "Real policy impact at organizations like ORF, PRS — without the exam gamble.", effort: "Strong academics + research" }
    ],
    honestVerdict: "UPSC is not a career choice — it's a life choice. The exam tests everything: knowledge, stamina, emotional resilience, and privilege. Go in only if you've genuinely exhausted the 'why' behind the dream — not for prestige, not for parents.",
    motivationNote: "If after knowing all this you still want it — that clarity itself is your edge. Most aspirants are running from something. You'd be running toward something. That matters more than rank."
  },
  {
    career: "Doctor",
    aliases: ["doctor","mbbs","neet","surgeon","physician","medical","aiims","cardiologist","neurologist","dermatologist","pediatrician","gynecologist","orthopedic","psychiatrist","radiologist","anesthesiologist","oncologist","general physician","general surgeon"],
    category: "medical",
    emoji: "🏥",
    tagline: "The longest, most respected, and most demanding education in India.",
    averagePrepTime: "MBBS: 5.5 years → PG prep: 1–3 years → MD/MS: 3 more years. You're 30 before you earn independently.",
    successRate: "NEET UG 2024: ~11.5 lakh qualified; ~1.08 lakh MBBS seats. Govt college (AIIMS/top): under 0.1%.",
    competitorCount: "~24 lakh appear for NEET. ~1.8 lakh MBBS seats (govt+private). Govt MBBS seats: ~55,000.",
    whatYouGiveUp: [
      "Your entire 20s — MBBS internship ends at 24–25, PG at 28–30",
      "₹50–80 lakh in private college fees if govt seat isn't secured",
      "Social freedom — 80-hour weeks during residency are normal",
      "Mental health — doctor burnout and depression rates in India are alarmingly high",
      "Relationship timeline — marriages, kids delayed significantly",
      "Sleep — chronic sleep deprivation during internship and residency"
    ],
    whatHappensIfYouDont: [
      { path: "AYUSH (BAMS/BHMS)", detail: "Alternative medicine degrees — lower cutoffs, still a doctor, growing acceptance." },
      { path: "BDS (Dentist)", detail: "Dental degree, clinical practice, own clinic possible within years of graduation." },
      { path: "Allied Health Sciences", detail: "Physiotherapy, MLT, Radiology Tech — shorter, good income, healthcare adjacent." },
      { path: "Biotech / Pharma Research", detail: "B.Sc + M.Sc / MBA Pharma — strong careers in drug discovery and clinical research." }
    ],
    whatPeopleWhoMadeItSay: "MBBS was worth it but nobody told me about the PG grind. I cleared NEET PG on my third attempt. The first two failures while working as an intern were the lowest points of my life. The degree is real but the road after MBBS is another mountain.",
    hardestPartAccordingToThem: "NEET PG — competing again after 5.5 years of MBBS, while doing 12-hour hospital shifts, with no income.",
    alternativePaths: [
      { name: "BDS + Specialization", why: "Clinical practice, own setup, strong income — without NEET UG's brutal competition for govt seats.", effort: "5 years" },
      { name: "Physiotherapist (BPT)", why: "Growing field, independent practice, sports physio is booming in India.", effort: "4.5 years" },
      { name: "Clinical Research / Pharmacovigilance", why: "Pharma industry pays well, B.Sc life sciences is enough to enter.", effort: "3 years + certification" }
    ],
    honestVerdict: "Medicine is genuinely noble and genuinely brutal. The financial cost (private college) and time cost (30 before peak earning) are things families underestimate. If you can get a govt seat and have the stamina for 10 years of training — it's one of the most fulfilling paths in India.",
    motivationNote: "Every doctor you respect has a story of a night they wanted to quit. The ones who stayed didn't have more talent — they had more clarity about why they started. Find your 'why' before the NEET grind starts."
  },
  {
    career: "Software Engineer",
    aliases: ["software engineer","developer","programmer","coder","full stack","backend","frontend","web developer","app developer","sde","software developer","it engineer","iit","jee","computer science","cs engineer","it professional"],
    category: "tech",
    emoji: "💻",
    tagline: "High ceiling, low floor — but the market just got brutally competitive.",
    averagePrepTime: "4 years B.Tech + 6–18 months for top product companies (DSA + system design prep)",
    successRate: "FAANG/top-product India: <2% of applicants. Tier-1 IT (TCS/Infosys): 15–25% of applicants. Startup ecosystem: variable.",
    competitorCount: "~15 lakh CS/IT graduates per year in India. ~3–4 lakh placed in tech roles annually.",
    whatYouGiveUp: [
      "Work-life balance — product companies expect 50–60 hour weeks",
      "Geographic flexibility — Bangalore, Hyderabad, Pune or remote (limited options in India)",
      "Stability in downturns — 2022–24 layoffs hit India hard, no job is safe",
      "Non-tech interests — the field demands constant upskilling or you fall behind",
      "Manager track ambiguity — IC vs management ladder is a real career dilemma at 5+ years"
    ],
    whatHappensIfYouDont: [
      { path: "Service-based IT (TCS, Wipro, Infosys)", detail: "Steady income, work-life balance, less pay — chosen by the majority of CS grads." },
      { path: "Product Manager", detail: "Many engineers pivot to PM roles — higher pay, less coding, more strategy." },
      { path: "Data Analyst / BI Developer", detail: "SQL + Excel + dashboards — lower bar, strong demand, ₹8–18 LPA range." },
      { path: "Govt IT / PSU", detail: "ECIL, BSNL, DRDO — stable, pensioned, no layoffs, modest pay." }
    ],
    whatPeopleWhoMadeItSay: "Got into a FAANG at 24. The pay is real. So is the on-call at 2AM, the performance reviews that cut 10% every year, the constant feeling that someone younger is catching up. It's a treadmill. A very well-paid treadmill.",
    hardestPartAccordingToThem: "The constant anxiety of becoming irrelevant — every 3 years, there's a new framework, a new paradigm, and you have to learn it or get left behind.",
    alternativePaths: [
      { name: "Data Analyst", why: "Overlapping skills, gentler learning curve, strong demand across all industries.", effort: "6–12 months upskilling" },
      { name: "DevOps / Cloud Engineer", why: "High demand, good pay, less algorithm-heavy than SDE roles.", effort: "6–12 months certification" },
      { name: "Product Manager (tech background)", why: "Uses your tech knowledge without daily coding — higher ceiling at senior levels.", effort: "2–3 years SDE experience first" }
    ],
    honestVerdict: "Software engineering is one of India's best bets — but 'any software job' and 'a great software career' are very different things. The 2023–24 market reset showed that mass hiring is over. Quality of skills, portfolio, and communication matter more than ever.",
    motivationNote: "The field rewards curiosity more than any other. If you genuinely like building things and solving puzzles — not just the salary — you will outlast every market cycle. The ones who quit were never really here for the code."
  },
  {
    career: "Chartered Accountant",
    aliases: ["ca","chartered accountant","icai","ca final","ca intermediate","ca foundation","accountant","auditor","tax consultant","cost accountant","icwa","cma"],
    category: "finance", emoji: "📊",
    tagline: "India's most respected finance credential — earned through pain.",
    averagePrepTime: "4–6 years from CA Foundation (articleship + 3 exam levels)",
    successRate: "CA Final: 8–14% pass rate per attempt. Most clear in 3–5 attempts.",
    competitorCount: "~3 lakh appear for CA Final annually. ~35,000 qualify per year.",
    whatYouGiveUp: ["College social life — articleship starts at 18–19", "₹2,000–15,000/month stipend for 3 years of articleship", "6-month timeline extension per failed attempt", "Sleep during exam windows — 14–16 hour study days", "Peer salary comparison — B.Com friends earn more during your prep years"],
    whatHappensIfYouDont: [
      { path: "ACCA / CMA", detail: "Global accounting credentials, shorter timeline, good pay." },
      { path: "MBA Finance", detail: "2-year degree, ₹18–35 LPA placement, broader options." },
      { path: "Company Secretary (CS)", detail: "Complementary credential, easier exams, strong corporate demand." },
      { path: "Tax practice (CA Inter)", detail: "Many CA Inter-qualified run independent tax practices." }
    ],
    whatPeopleWhoMadeItSay: "Failed CA Final twice. Cleared on third attempt at 24. My B.Com friends were at ₹8 LPA. At 28, I'm at ₹22 LPA in Big 4. The math works — but those 6 years were genuinely hard.",
    hardestPartAccordingToThem: "The articleship — working full-time for ₹5,000/month while studying for one of India's hardest exams.",
    alternativePaths: [
      { name: "ACCA", why: "Recognized in 180 countries, faster than Indian CA.", effort: "2–3 years" },
      { name: "CFA", why: "Top investment/portfolio credential, no articleship.", effort: "3–4 years" },
      { name: "MBA Finance (IIM)", why: "₹18–35 LPA placement, 2 years, broader roles.", effort: "CAT + 2 years" }
    ],
    honestVerdict: "CA is worth it if you want Big 4, CFO track, or independent practice in India. But 6 years at poverty wages is not for everyone.",
    motivationNote: "The exam filters for resilience, not just intelligence. If you're still here after one failure, you already have what it takes."
  },
  {
    career: "Lawyer",
    aliases: ["lawyer","advocate","attorney","clat","nlu","llb","llm","judge","high court","supreme court","corporate lawyer","criminal lawyer","legal"],
    category: "law", emoji: "⚖️",
    tagline: "Prestige is real. The road to it is longer than anyone tells you.",
    averagePrepTime: "5-year BA LLB + 2–5 years building junior practice",
    successRate: "Top NLU (NLSIU/NALSAR): 0.2–0.5% of CLAT applicants. Junior advocates earn under ₹3 LPA for years 1–5.",
    competitorCount: "~80,000 appear for CLAT. ~2,400 NLU seats. 1.5 million registered advocates in India.",
    whatYouGiveUp: ["₹8,000–25,000/month as junior advocate for 3–7 years", "Work-life balance — senior lawyers work 70+ hour weeks", "Geographic roots — High Courts mean city-specific careers", "Quick financial returns — credibility takes a decade", "Dependence on senior's goodwill in early years"],
    whatHappensIfYouDont: [
      { path: "In-house Corporate Legal", detail: "Company legal teams, ₹12–30 LPA after 3–5 years." },
      { path: "LPO (Legal Process Outsourcing)", detail: "MNC legal work from India, ₹6–15 LPA, better hours." },
      { path: "Judiciary / Civil Services", detail: "Law background is an asset for UPSC and judicial services." },
      { path: "Compliance Officer", detail: "Banks, NBFCs, MNCs — ₹8–20 LPA without litigation grind." }
    ],
    whatPeopleWhoMadeItSay: "₹15,000/month for 2 years after NLSIU. Engineering friends at ₹12 LPA. At 32, I'm at a Tier-1 firm at ₹28 LPA. I'd do it again — but I'd warn my younger self about the money.",
    hardestPartAccordingToThem: "The first 5 years — invisible, underpaid, completely dependent on your senior's goodwill.",
    alternativePaths: [
      { name: "Company Secretary (CS)", why: "Corporate governance, faster credential, better early income.", effort: "2–3 years" },
      { name: "Compliance Officer", why: "LLB in high demand at banks/MNCs — ₹8–20 LPA.", effort: "LLB + 1–2 years" },
      { name: "LPO Consultant", why: "Remote, international clients, no courtroom hierarchy.", effort: "LLB + certification" }
    ],
    honestVerdict: "Law has a 7–12 year gap between lean early years and wealthy senior years. Be financially prepared to survive that gap.",
    motivationNote: "The best lawyers loved justice, not arguing. If that's your driver, the struggle feels like investment."
  },
  {
    career: "Commercial Pilot",
    aliases: ["pilot","commercial pilot","cpl","airline pilot","captain","aviation","airforce","flying","flight"],
    category: "aviation", emoji: "✈️",
    tagline: "The most expensive dream in India — literally.",
    averagePrepTime: "3–4 years CPL + 1,500 flying hours before airline hiring",
    successRate: "~500 first-officer positions open annually across all Indian airlines. CPL completion: ~60% of enrolled students.",
    competitorCount: "~3,000–4,000 CPL holders graduate per year. Very long queue for limited openings.",
    whatYouGiveUp: ["₹35–65 lakh training fees — most families take loans", "Age window — airlines prefer under 28 for first officer", "Health dependency — medical disqualification ends your career overnight", "Geographic certainty — postings anywhere, frequent transfers", "Regular family life — irregular schedules, night layovers"],
    whatHappensIfYouDont: [
      { path: "Aircraft Maintenance Engineer (AME)", detail: "DGCA-regulated, airlines always hiring, ₹8–20 LPA." },
      { path: "Air Traffic Controller (AAI)", detail: "Government job, pension, aviation field." },
      { path: "Flight Dispatcher / Operations", detail: "Aviation career without the debt, ₹5–15 LPA." },
      { path: "Drone Pilot / UAV Operator", detail: "Emerging field, DGCA licensing, industrial demand growing." }
    ],
    whatPeopleWhoMadeItSay: "Spent ₹55 lakh. Waited 14 months for IndiGo to call. Captain salary in 7 years: ₹4.5–7 lakh/month. The loan is real but so is the paycheck. Life away from home is lonelier than I expected.",
    hardestPartAccordingToThem: "The post-CPL gap — qualified, in debt, waiting for an airline to call. Some wait 1–2 years with no income.",
    alternativePaths: [
      { name: "AME (Aircraft Maintenance)", why: "Aviation career, no ₹50L debt, always in demand.", effort: "3–4 years post Class 12" },
      { name: "Air Traffic Controller", why: "Govt job, pension, aviation — no flying school debt.", effort: "AAI exam + training" },
      { name: "Drone Pilot", why: "DGCA licensing, growing demand, much lower investment.", effort: "6–12 months" }
    ],
    honestVerdict: "Great career if you can afford training without crippling loans. The debt, wait, and health risk are rarely discussed upfront.",
    motivationNote: "Every captain was once a terrified student on their first solo. The cockpit is earned, not gifted."
  },
  {
    career: "Actor",
    aliases: ["actor","actress","bollywood","film actor","cinema","movies","theatre","ott","web series","performing arts","film director","filmmaker","screenwriter","director"],
    category: "creative", emoji: "🎬",
    tagline: "The industry where 10,000 try and 100 survive.",
    averagePrepTime: "No fixed timeline. Most working actors spent 5–10 years struggling before a break.",
    successRate: "Under 1% of people who come to Mumbai 'make it' by any definition.",
    competitorCount: "~50,000+ active aspirants in Mumbai alone. Thousands arrive monthly from across India.",
    whatYouGiveUp: ["Financial security — years of zero income is normal", "Family peace — most families actively resist this path", "Predictability — auditions cancel, projects fall through", "Alternative career build-up — acting years don't transfer to resumes", "Geographic roots — must move to Mumbai/Chennai/Hyderabad"],
    whatHappensIfYouDont: [
      { path: "Theatre / Regional Cinema", detail: "Marathi, Punjabi, Tamil cinema — respected careers with better odds." },
      { path: "Content Creation / YouTube", detail: "Acting skills transfer — several successful creators are ex-aspirants." },
      { path: "Casting / Direction / Production", detail: "Behind-camera roles — many directors started as struggling actors." },
      { path: "Voiceover / Corporate Films", detail: "Stable income from ad films, corporate videos, OTT dubbing." }
    ],
    whatPeopleWhoMadeItSay: "7 years of struggle — small roles, rejections, shared rooms in Andheri. My break came from a web series. Nobody talks about how many of us are one month of zero income away from going home.",
    hardestPartAccordingToThem: "The uncertainty — not knowing if you're 6 months or 6 years from a break. You keep going or you don't.",
    alternativePaths: [
      { name: "Content Creator / YouTuber", why: "Same performance skills, direct audience, you control your break.", effort: "1–2 years consistent output" },
      { name: "Voiceover Artist", why: "Acting skills, stable income, remote — OTT dubbing is booming.", effort: "Training + demo reel" },
      { name: "Theatre Director / Acting Coach", why: "Respected, steady income, uses every skill you've built.", effort: "5+ years experience" }
    ],
    honestVerdict: "Bollywood is the most lottery-like career in India. Talent is necessary but not sufficient — networking, timing, and luck play equal roles. Build a financial floor first.",
    motivationNote: "The actors who made it weren't the most talented — they stayed in Mumbai the longest without giving up. Stubbornness is a competitive advantage here."
  },
  {
    career: "Cricketer",
    aliases: ["cricketer","cricket","ipl","bcci","india team","team india","test cricket","odi","t20","ranji","domestic cricket","bowler","batsman","wicket keeper","professional cricketer"],
    category: "sports", emoji: "🏏",
    tagline: "11 spots in Team India. Millions chasing them.",
    averagePrepTime: "10–15 years of structured cricket from age 8–10 before professional opportunity.",
    successRate: "India playing XI: 11 players. Active domestic pool: ~10,000. India team probability: 0.1%.",
    competitorCount: "~30 million recreational cricketers. ~10,000 play Ranji/state level. 15–18 in India core squad.",
    whatYouGiveUp: ["Normal schooling — sacrificed from age 12–14", "Financial security — Ranji pay: ₹1–5 lakh per match, not per year", "Career backup — cricket years leave no corporate-transferable skills", "Body — injuries are inevitable; careers end without warning", "Home life — academies and state teams mean leaving early"],
    whatHappensIfYouDont: [
      { path: "Domestic Cricket / State Team", detail: "Ranji, Vijay Hazare — BCCI contracts pay ₹26–50 lakh/year." },
      { path: "Cricket Coaching (NCA Certified)", detail: "Well-paid, respected, NCA certifications in demand." },
      { path: "Commentary / Sports Media", detail: "Ex-cricketers with communication skills build strong media careers." },
      { path: "Sports Management", detail: "IPL franchises, BCCI, sports brands need cricket domain experts." }
    ],
    whatPeopleWhoMadeItSay: "Played Ranji 8 years, never got into the national team. At 31, my body said enough. I don't regret it — but I wish someone told me at 16 to develop one skill outside cricket. Just one.",
    hardestPartAccordingToThem: "Watching younger players picked for India while you've been in domestic cricket for 8 years. The selection committee becomes your judge, jury, and executioner.",
    alternativePaths: [
      { name: "NCA Certified Cricket Coach", why: "Cricket knowledge is valuable in coaching — BCCI certifications pay well.", effort: "Certification + experience" },
      { name: "Sports Journalist / Commentator", why: "Domain knowledge + communication → media career with longevity.", effort: "Experience + communication skills" },
      { name: "Physical Education Teacher (B.P.Ed)", why: "Govt school PE job, pension, stability after sports career.", effort: "2-year degree" }
    ],
    honestVerdict: "Cricket is meritocratic and political simultaneously. Even exceptional talent doesn't guarantee national selection. Play only if you love cricket — not the IPL dream.",
    motivationNote: "Sachin played 664 first-class matches. Effort at every level matters. The doors that open won't always be the ones you imagined — but they'll be real."
  },
  {
    career: "Entrepreneur",
    aliases: ["entrepreneur","startup","startup founder","founder","business owner","self employed","small business","business","venture"],
    category: "business", emoji: "🚀",
    tagline: "Everybody wants to be a founder. Very few are built for the chaos.",
    averagePrepTime: "No fixed prep — but most successful founders had 3–7 years of industry experience first.",
    successRate: "90% of Indian startups fail within 5 years. VC-funded: ~1% achieve significant scale.",
    competitorCount: "~80,000 DPIIT-recognized startups. ~1,000 VC-funded/year. ~100 reach Series B.",
    whatYouGiveUp: ["Salary certainty — founders pay themselves nothing for 1–3 years", "Comfort — stress is constant, your decisions affect employees", "Social life — startup mode is effectively 24/7", "Career safety net — a failed startup at 30 means rebuilding your resume", "Health — founder burnout, anxiety, insomnia are occupational hazards"],
    whatHappensIfYouDont: [
      { path: "Product Manager at tech company", detail: "Builder mindset, ownership, strategy — without personal financial risk." },
      { path: "Corporate Intrapreneur", detail: "Many companies fund internal innovation — safer platform." },
      { path: "Freelance Consultant", detail: "Independence, good income, no employee/investor responsibility." },
      { path: "Franchisee", detail: "Proven model, brand support — 10x better odds than independent startup." }
    ],
    whatPeopleWhoMadeItSay: "My first startup failed in 14 months. ₹28 lakh of savings gone. I couldn't tell my parents for 3 months. Second startup is profitable with 12 people. Both were necessary. But I won't romanticize the first one.",
    hardestPartAccordingToThem: "Not the market or product — managing yourself. Loneliness, self-doubt, imposter syndrome at 2AM when runway is 60 days.",
    alternativePaths: [
      { name: "Product Manager", why: "Same builder instinct, no personal risk, ₹15–40 LPA at good companies.", effort: "2–3 years experience" },
      { name: "Freelance Consultant", why: "Independence, multiple clients, often better income than early-stage startups.", effort: "Domain expertise first" },
      { name: "Franchisee", why: "Proven model, brand support — far better survival odds.", effort: "Capital + local knowledge" }
    ],
    honestVerdict: "Most people want the founder identity — the title, the TED talk. Very few want the reality: years of uncertainty and possible total failure. Be honest about which one you want.",
    motivationNote: "Every great company started with someone who chose to begin — not with a perfect plan, but with a clear problem and the stubbornness to solve it."
  },
];

// Category fallbacks for careers not individually listed
const CATEGORY_FALLBACKS: Record<string, Omit<CareerData,'career'|'aliases'|'category'>> = {
  finance: {
    emoji:"💰", tagline:"High reward, high pressure — and a longer road than the salary figures suggest.",
    averagePrepTime:"3–5 years education + 2–3 years to reach meaningful seniority",
    successRate:"Top roles (Goldman, McKinsey, Big 4 partner): under 2% of applicants. Mid-tier: accessible with right credentials.",
    competitorCount:"Lakhs of commerce/MBA graduates compete. Top positions are genuinely scarce.",
    whatYouGiveUp:["Work-life balance in early years","High education investment (MBA/CA/CFA)","Geographic flexibility — finance hubs are Mumbai, Delhi, Bangalore","Slow income growth in early years relative to hours worked"],
    whatHappensIfYouDont:[
      {path:"Corporate Finance / Analyst roles", detail:"Stable ₹8–20 LPA, 50-hour weeks — a quieter but solid path."},
      {path:"Banking (PO/Manager)", detail:"IBPS/SBI — government stability, pension, lower ceiling but lower stress."},
      {path:"Insurance / Wealth Management", detail:"Commission-based but scalable income, lower barrier to entry."}
    ],
    whatPeopleWhoMadeItSay:"The pay is real at the top. The years getting there are not glamorous. Junior years in finance are often thankless, long, and underpaid relative to the hours.",
    hardestPartAccordingToThem:"The gap between where you start and where you want to be — and the decade it takes to close it.",
    alternativePaths:[
      {name:"Corporate Finance Analyst", why:"Same skills, 50-hour weeks, ₹10–22 LPA — without the extreme grind.", effort:"MBA/CA + application"},
      {name:"Financial Educator / Coach", why:"Growing demand, independence, help people with money decisions.", effort:"Domain expertise + certification"},
      {name:"Government Finance (UPSC/EPFO)", why:"Stability, pension, financial domain — without corporate pressure.", effort:"Competitive exam"}
    ],
    honestVerdict:"Finance careers reward patience and credentials. The ceiling is high but the floor takes years to clear. Know your timeline before you commit.",
    motivationNote:"Every CFO started as an analyst no one listened to. The compound effect of small financial decisions — including your career ones — is real."
  },
  tech: {
    emoji:"⚙️", tagline:"India's most in-demand field — and now its most competitive.",
    averagePrepTime:"4-year degree + 6–18 months specialisation for top roles",
    successRate:"Tier-1 product companies: 2–5% of applicants. Service companies: 15–25%.",
    competitorCount:"~15 lakh tech graduates per year. ~3–4 lakh placed in real tech roles.",
    whatYouGiveUp:["Constant upskilling pressure — skills expire in 3–4 years","Work-life balance at top product companies","Job security in market downturns (2022–24 layoffs were real)","Non-tech hobbies — the field demands continuous learning"],
    whatHappensIfYouDont:[
      {path:"IT Services (TCS/Wipro/Infosys)", detail:"Steady income, work-life balance, less pay — chosen by most CS grads."},
      {path:"Data Analyst / BI", detail:"SQL + dashboards, ₹8–18 LPA, strong demand across industries."},
      {path:"Tech PM / Business Analyst", detail:"Strategy + tech, higher ceiling, less coding, good pay."}
    ],
    whatPeopleWhoMadeItSay:"The salary is great. The on-call at 2AM, the yearly performance cuts, the constant fear of being replaced by someone younger or a model — nobody mentions those.",
    hardestPartAccordingToThem:"Staying relevant. Every 3 years there's a new paradigm and you have to relearn or fall behind.",
    alternativePaths:[
      {name:"Data Analyst", why:"Overlapping skills, gentler curve, strong demand.", effort:"3–6 months upskilling"},
      {name:"DevOps / Cloud Engineer", why:"High demand, good pay, less algorithm-heavy.", effort:"6–12 months certification"},
      {name:"Tech Sales / Solution Engineering", why:"Tech background + communication = high-paying hybrid role.", effort:"1–2 years exp"}
    ],
    honestVerdict:"Tech is still India's best bet for upward mobility — but 'any tech job' and 'a great tech career' are very different. Specialise early.",
    motivationNote:"The field rewards curiosity more than credentials. If you genuinely love building — not just the salary — you will outlast every market cycle."
  },
  medical: {
    emoji:"🩺", tagline:"Noble, demanding, and longer than anyone outside medicine realises.",
    averagePrepTime:"MBBS 5.5 years → PG prep 1–3 years → MD/MS 3 years. Age 30 before independent earning.",
    successRate:"NEET UG 2024: 24 lakh appear, ~55,000 govt MBBS seats. Specialisation: even harder.",
    competitorCount:"24 lakh NEET applicants for ~1.8 lakh total MBBS seats (govt+private).",
    whatYouGiveUp:["Your 20s — completely","₹50–80 lakh in private college fees if govt seat missed","80-hour hospital weeks during residency","Delayed relationships, delayed financial independence"],
    whatHappensIfYouDont:[
      {path:"AYUSH / BDS", detail:"Alternative medicine or dentistry — lower cutoffs, clinical practice."},
      {path:"Allied Health (Physiotherapy/MLT)", detail:"Shorter duration, good income, healthcare adjacent."},
      {path:"Pharma / Biotech / Clinical Research", detail:"B.Sc + industry path — strong careers in drug development."}
    ],
    whatPeopleWhoMadeItSay:"Medicine is worth it. But the PG grind after MBBS — competing again while doing 12-hour shifts for no pay — that nearly broke me.",
    hardestPartAccordingToThem:"NEET PG — a second brutal exam after 5.5 years of MBBS, while working full-time, with no income.",
    alternativePaths:[
      {name:"BDS + Specialisation", why:"Own clinic possible, lower competition than MBBS.", effort:"5 years"},
      {name:"Physiotherapist (BPT)", why:"Growing field, independent practice, sports physio booming.", effort:"4.5 years"},
      {name:"Clinical Research", why:"Pharma industry, B.Sc sufficient, ₹6–18 LPA.", effort:"Degree + certification"}
    ],
    honestVerdict:"Medicine is deeply fulfilling and deeply demanding. The time and money cost is real. Go in with eyes fully open.",
    motivationNote:"Every doctor you respect wanted to quit at least once. The ones who stayed had clarity about why they started."
  },
  creative: {
    emoji:"🎨", tagline:"The most personal career — and the one with the least guaranteed return.",
    averagePrepTime:"No fixed timeline. Most creatives spend 3–7 years building before stable income.",
    successRate:"Creative fields vary widely. Top-tier positions in any creative field: under 5% of aspirants.",
    competitorCount:"Extremely crowded. The internet lowered barriers to entry for everyone — including your competition.",
    whatYouGiveUp:["Financial predictability — income is feast-or-famine for years","Family approval — creative careers face social stigma in India","Stable career narrative — hard to explain gaps on a resume","Geographic stability — major creative industries concentrate in 3–4 cities"],
    whatHappensIfYouDont:[
      {path:"Design at tech/corporate companies", detail:"UI/UX, brand, marketing design — creative work with stability."},
      {path:"Content marketing / Copywriting", detail:"Creative writing skills, ₹6–20 LPA, remote-friendly."},
      {path:"Creative direction in advertising", detail:"Ad agencies — structured creative career, better pay than pure arts."}
    ],
    whatPeopleWhoMadeItSay:"The work is everything I wanted. The income took 7 years to stabilise. Most people who romanticise creative careers haven't lived the years before anyone paid attention.",
    hardestPartAccordingToThem:"Building an audience or a client base before you have proof of work. The chicken-and-egg problem of creative careers.",
    alternativePaths:[
      {name:"Design at Tech Companies (UI/UX)", why:"Creative work, ₹8–25 LPA, stable income, design tools transfer.", effort:"Portfolio + 1 year focused upskilling"},
      {name:"Content Strategy / Copywriter", why:"Writing/creative skills, brand work, ₹6–20 LPA, WFH.", effort:"Portfolio + experience"},
      {name:"Creative Director (Advertising)", why:"Structured creative leadership, better pay than freelance arts.", effort:"5–8 years in the field"}
    ],
    honestVerdict:"Creative careers are real careers. But they require a longer financial runway and more emotional resilience than most. Build a platform before you need income from it.",
    motivationNote:"Every creator who matters built their audience in obscurity. The work you do before anyone watches is the work that makes you worth watching."
  },
  law: {
    emoji:"🏛️", tagline:"One of India's most respected professions — with one of its steepest early-career climbs.",
    averagePrepTime:"5-year LLB + 3–5 years building practice",
    successRate:"Top NLUs: 0.2–0.5% of CLAT applicants. Most lawyers earn under ₹5 LPA in their first 5 years.",
    competitorCount:"~80,000 CLAT applicants. 2,400 NLU seats. 1.5 million registered advocates in India.",
    whatYouGiveUp:["Very low income in early years (₹10,000–25,000/month)","Work-life balance — senior lawyers work 70+ hours/week","Geographic freedom — practice is court-specific","Quick success — credibility takes 10 years minimum"],
    whatHappensIfYouDont:[
      {path:"In-house Legal / Compliance", detail:"Company legal teams pay ₹12–30 LPA after experience."},
      {path:"LPO / Legal Tech", detail:"International legal work from India, better work-life balance."},
      {path:"Judicial Services", detail:"Law background is valuable for UPSC and state judiciary exams."}
    ],
    whatPeopleWhoMadeItSay:"The first 5 years are genuinely hard. Junior advocate, dependent on senior, low pay. At 35 I have a strong practice. But nobody told me about the decade between.",
    hardestPartAccordingToThem:"The invisible years of junior practice — underpaid, dependent, waiting for your own cases.",
    alternativePaths:[
      {name:"Compliance Officer", why:"LLB in high demand, ₹8–20 LPA, no courtroom grind.", effort:"LLB + 1–2 years"},
      {name:"Legal Journalist / Policy", why:"Combines law and writing — think tanks, legal media.", effort:"Journalism experience"},
      {name:"Company Secretary (CS)", why:"Faster credential, corporate governance, better early pay.", effort:"2–3 years"}
    ],
    honestVerdict:"Law rewards patience and credibility. The financial gap between early and senior years is one of the widest in any profession. Plan for it.",
    motivationNote:"Every great advocate had years no one knew their name. The groundwork you lay in obscurity determines how high you rise in public."
  },
  aviation: {
    emoji:"🛫", tagline:"A world-class career — with world-class costs and risks.",
    averagePrepTime:"3–4 years training + 1–2 years wait after CPL",
    successRate:"~500 first-officer openings annually. CPL completion rate: ~60%.",
    competitorCount:"~3,000–4,000 CPL graduates per year competing for limited airline slots.",
    whatYouGiveUp:["₹35–65 lakh training investment","Health as a job requirement — one medical failure ends everything","Irregular family life permanently","Geographic flexibility"],
    whatHappensIfYouDont:[
      {path:"AME (Aircraft Maintenance)", detail:"Aviation without debt, always in demand, DGCA regulated."},
      {path:"Air Traffic Controller", detail:"Government job, aviation field, pension."},
      {path:"Aviation Operations", detail:"Airport/airline operations, ₹5–15 LPA, no flying school."}
    ],
    whatPeopleWhoMadeItSay:"The career is everything I imagined — but nobody warned me about the loneliness, the debt, and the 14-month wait after CPL.",
    hardestPartAccordingToThem:"Post-CPL limbo — qualified, in debt, waiting for an airline's call.",
    alternativePaths:[
      {name:"AME", why:"Aviation career, a fraction of the cost, steady demand.", effort:"3–4 years"},
      {name:"Air Traffic Controller", why:"Govt job, aviation, pension.", effort:"AAI exam"},
      {name:"Drone Pilot", why:"DGCA licensed, growing demand, low investment.", effort:"6–12 months"}
    ],
    honestVerdict:"Aviation is great if you can afford it without crippling loans. Know all the costs — financial, personal, health — before committing.",
    motivationNote:"The sky rewards preparation and persistence. If this is your calling, build your financial base first so the debt doesn't ground you."
  },
  sports: {
    emoji:"🏅", tagline:"India's most watched dream — and its hardest career.",
    averagePrepTime:"10–15 years of structured training before professional opportunity.",
    successRate:"National team in any sport: fraction of a percent. Professional earning: under 5% of serious athletes.",
    competitorCount:"Millions compete. Hundreds earn. Dozens reach national level.",
    whatYouGiveUp:["Normal schooling and career build-up","Financial security — most athletes earn very little until they reach the top","Body — injuries end careers without warning","Career backup — sports years don't transfer elsewhere easily"],
    whatHappensIfYouDont:[
      {path:"Coaching / Academy Training", detail:"Your sport knowledge has real value training others."},
      {path:"Sports Administration / Management", detail:"BCCI, AIFF, federation roles — behind the scenes but impactful."},
      {path:"Sports Journalism / Commentary", detail:"Domain knowledge + communication = media career."},
      {path:"Physical Education Teacher (B.P.Ed)", detail:"Government job, stability, pension."}
    ],
    whatPeopleWhoMadeItSay:"I gave everything to my sport. I don't regret the journey. But I wish someone had told me earlier to also build one skill outside it — just one.",
    hardestPartAccordingToThem:"Selection politics — watching less talented players get picked because of connections or state politics.",
    alternativePaths:[
      {name:"Sports Coach", why:"Your knowledge has real monetary value training the next generation.", effort:"Certification + experience"},
      {name:"Sports Journalist", why:"Domain knowledge → media career with longevity.", effort:"Communication skills"},
      {name:"Physical Education Teacher", why:"Stable government job, pension, sports adjacent.", effort:"B.P.Ed degree"}
    ],
    honestVerdict:"Pursue sport if you love it — not for the dream of national selection. The journey has real value even if the destination changes.",
    motivationNote:"The discipline sport builds — physical and mental — transfers to everything else in life. That training is never wasted."
  },
  research: {
    emoji:"🔭", tagline:"The most intellectually rewarding path — with the most patient timeline.",
    averagePrepTime:"B.Sc + M.Sc + PhD = 10–12 years before independent research position.",
    successRate:"ISRO/DRDO Scientist B: ~500–1,000 positions annually vs. lakhs of applicants.",
    competitorCount:"~5 lakh science graduates annually. ~2,000 premier research positions open each year.",
    whatYouGiveUp:["PhD stipend: ₹31,000–37,000/month (CSIR/UGC)","Certainty — 4-year PhD can yield zero publishable results","Industry salary comparison — IT peers earn 3–5x more","Quick feedback — years before validation of your work"],
    whatHappensIfYouDont:[
      {path:"R&D at Private Company", detail:"Pharma, biotech, IT R&D — better pay than govt labs."},
      {path:"University Lecturer (NET/SET)", detail:"Teaching + research, stable tenure track."},
      {path:"Data Scientist / Analyst", detail:"Maths/science background → ₹10–30 LPA in industry."}
    ],
    whatPeopleWhoMadeItSay:"My PhD took 6 years. Stipend ₹35,000/month. Friends in IT at ₹12 LPA from year one. I work on problems that matter. I chose this with open eyes. Make sure you do too.",
    hardestPartAccordingToThem:"The invisible years of a PhD — repeated failures, no external validation, questioning if it's worth it.",
    alternativePaths:[
      {name:"Data Scientist (Industry)", why:"Maths background → ₹10–30 LPA, immediate impact.", effort:"6–12 months upskilling"},
      {name:"University Lecturer", why:"Research + teaching, govt stability.", effort:"NET/SET + PhD"},
      {name:"Science Policy Analyst", why:"Shapes national research priorities — real impact.", effort:"Strong academics + interest"}
    ],
    honestVerdict:"Research is for people driven by curiosity, not compensation. The intrinsic reward must outweigh the financial one — because for years, it will have to.",
    motivationNote:"Every discovery that changed the world came from someone who kept going after the 50th failed experiment."
  },
  design: {
    emoji:"✏️", tagline:"Where creativity meets commerce — a field that rewards craft and business sense equally.",
    averagePrepTime:"4-year B.Des/B.Arch + 2–3 years building a portfolio and client base.",
    successRate:"NID/NIFT: extremely competitive. Independent practice with stable income: achieved by under 20% of graduates.",
    competitorCount:"Thousands of design graduates annually. Top institutes accept under 2% of applicants.",
    whatYouGiveUp:["Low starting salary — ₹12,000–25,000/month at most studios","Creative compromise — junior years mean executing others' visions","Client unpredictability — projects cancel, payments delay","Years before your own creative voice gets space"],
    whatHappensIfYouDont:[
      {path:"UI/UX at Tech Companies", detail:"Design skills in digital context — ₹8–25 LPA, stable, growing."},
      {path:"Brand / Marketing Design", detail:"Corporate in-house design roles — steady income, structured career."},
      {path:"Freelance / Independent Practice", detail:"Takes 3–5 years to build but offers maximum creative freedom."}
    ],
    whatPeopleWhoMadeItSay:"5 years before a client I was proud of. The craft is everything I wanted. The business side — invoices, clients, contracts — nobody teaches you that in design school.",
    hardestPartAccordingToThem:"The decade between graduation and design authority — executing other people's mediocre ideas while developing your own voice.",
    alternativePaths:[
      {name:"UI/UX Designer", why:"Design skills, ₹8–25 LPA, tech company stability.", effort:"Portfolio + 6–12 months focused training"},
      {name:"Brand Designer (In-house)", why:"Creative role, stable income, structured career growth.", effort:"Portfolio + application"},
      {name:"Design Educator", why:"Teach what you know, NID/NIFT/private institutes have demand.", effort:"Experience + teaching skills"}
    ],
    honestVerdict:"Design is a craft that rewards decades of dedication. The income lags the skill for a long time. Build your business sense alongside your creative skills.",
    motivationNote:"Every designer whose work you admire spent years making work they're embarrassed by. The only way through is through."
  },
  media: {
    emoji:"📡", tagline:"Storytelling at scale — with shrinking salaries and shifting platforms.",
    averagePrepTime:"3-year BJMC/journalism degree + 1–3 years freelancing before stable position.",
    successRate:"Reputed national outlets: highly competitive. Starting salaries: ₹10,000–25,000/month for most outlets.",
    competitorCount:"Lakhs of journalism/mass comm graduates annually. Print shrinking. Digital growing but underpaid.",
    whatYouGiveUp:["Financial comfort — journalism pays poorly until senior levels","Regular hours — breaking news means 2AM calls, weekend work","Job security — media layoffs in India accelerated since 2018","Personal opinion expression — editorial neutrality is professionally required"],
    whatHappensIfYouDont:[
      {path:"Content Marketing / Copywriting", detail:"Writing skills → brand content, ₹6–20 LPA, stable."},
      {path:"Public Relations (PR)", detail:"Communication skills, much better pay than journalism."},
      {path:"Social Media Manager", detail:"Content + communication, digital roles growing rapidly."}
    ],
    whatPeopleWhoMadeItSay:"3 years covering local government for ₹15,000/month. I stayed because I believed in what I was doing. I still do. I just wish it paid more.",
    hardestPartAccordingToThem:"Staying independent when your employer has interests. Knowing what you know and measuring every word.",
    alternativePaths:[
      {name:"Content Strategist", why:"Writing skills, better pay, brand journalism growing.", effort:"Portfolio + 1–2 years"},
      {name:"PR Manager", why:"Communication skills, corporate side, significantly better pay.", effort:"PR experience"},
      {name:"Independent Documentarian", why:"YouTube + journalism skills = your own platform.", effort:"Camera + storytelling + patience"}
    ],
    honestVerdict:"Journalism is one of India's most important and worst-paying professions. Go in only if you feel a genuine compulsion to inform and hold power accountable.",
    motivationNote:"Every story that changed policy was filed by someone who chose to stay in a difficult profession. That work is real."
  },
  business: {
    emoji:"📈", tagline:"The broadest career field — which means competition comes from every direction.",
    averagePrepTime:"4-year BBA/B.Com + MBA (2 years) = 6 years to reach serious roles.",
    successRate:"IIM placement (top 3): median ₹25–30 LPA. Tier-2 MBA: ₹8–15 LPA. Most management roles are accessible with experience.",
    competitorCount:"~3.5 lakh CAT applicants. ~4,000 IIM seats. ~50,000 MBA graduates from all institutes annually.",
    whatYouGiveUp:["MBA investment: ₹25–35 lakh (IIM) — significant debt","Generalist curse — business skills alone don't differentiate you","Early career confusion — too many paths, too little direction","Time — MBA + experience = 30+ before strategic roles"],
    whatHappensIfYouDont:[
      {path:"Sales / Business Development", detail:"High-demand, commission-driven, fast growth if you perform."},
      {path:"Operations / Supply Chain", detail:"Underrated field, strong demand, good pay at senior levels."},
      {path:"Entrepreneurship", detail:"Business skills + domain = your own venture."}
    ],
    whatPeopleWhoMadeItSay:"MBA opened doors nothing else would. But the ₹30 lakh debt and 2 years out of the market are real costs. Choose your MBA institute very carefully — the brand matters enormously in India.",
    hardestPartAccordingToThem:"Justifying the MBA investment before you've seen the payoff — and the pressure to take any job to start repaying the loan.",
    alternativePaths:[
      {name:"CFA / CA", why:"Finance-specific credential, no 2-year pause, lower cost.", effort:"3–4 years self-study"},
      {name:"Operations / Supply Chain Role", why:"Strong demand, technical business skill, underrated career.", effort:"Relevant degree + experience"},
      {name:"Sales Leader / BDM", why:"Commission-driven, fast growth, no MBA required.", effort:"Hunger + field experience"}
    ],
    honestVerdict:"Business careers are wide open — but only if you specialise. A generalist MBA without domain expertise has a shrinking market in India's current economy.",
    motivationNote:"The best business careers were built by people who understood one thing deeply before they tried to lead everything."
  },
};

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  finance: ["bank","finance","financial","invest","account","audit","tax","wealth","equity","stock","market","economic","actuary","credit","treasury","ca ","cfa","cma","cs ","cfp","broker","insurance","underwrite","fund","portfolio"],
  tech: ["engineer","developer","programmer","software","data","cloud","cyber","ai ","ml ","devops","blockchain","iot","vlsi","embedded","robotics","network","database","sre","qa ","testing","architect","hardware","firmware","tech"],
  medical: ["doctor","medical","health","hospital","clinic","surgeon","dentist","nurse","pharma","physio","therapist","ayurved","homeo","mbbs","bds","bams","neet","allied","paramedic","radiol","pathol","oncol","cardiol","neurol","dermat","pediat","gynae","ortho","anaest","endocrin","nephrol","pulmon","gastro","epidem","genetic","microb","virol"],
  creative: ["actor","actress","film","cinema","direct","screen","animat","vfx","graphic","design","photo","fashion","artist","music","sing","danc","dj ","choreograph","paint","sculpt","illust","content","social media","influenc","blog","vlog","podcast","media","creative","model","makeup","voice"],
  law: ["lawyer","legal","law","advocate","judge","court","clat","nlu","llb","llm","clat","barrister","solicitor","attorney","paralegal","compliance","notary","judiciary","forensic lawl"],
  aviation: ["pilot","aviation","fly","flight","aircraft","airline","atc","air traffic","cabin crew","airhostess","steward","airport","avionics","ame","dgca","airforce","air force"],
  sports: ["cricketer","cricket","football","soccer","badminton","tennis","athlete","sport","ipl","hockey","kabaddi","wrestler","boxer","swimmer","gymnast","runner","cyclist","shooter","archer"],
  research: ["scientist","research","isro","drdo","physics","chemistry","biology","mathematics","astronomer","astrophys","meteorol","ocean","botanist","zoolog","paleont","statistician","nuclear","particle","nanotechnolog"],
  design: ["architect","architecture","interior","landscape","urban plan","product design","industrial design","ui ","ux ","furniture","ceramic","footwear","jewelry","visual","brand design","packaging","typography"],
  media: ["journalist","reporter","anchor","journalist","bjmc","mjmc","mass comm","news","media","pr ","public relation","copywriter","editor","broadcast","radio","rj ","vj "],
  business: ["manager","management","mba","business","entrepreneur","founder","startup","operations","supply chain","marketing","brand","sales","bda","bdm","procurement","logistics","retail","export","import","franchis","corporate","strategy","consultant"],
};

export function findCareer(input: string): CareerData | null {
  const q = input.toLowerCase().trim();
  if (!q) return null;

  // 1. Try exact alias match
  for (const c of CAREER_DATABASE) {
    if (c.aliases.some(a => q === a || q.includes(a) || a.includes(q))) {
      return c;
    }
  }

  // 2. Try partial alias match (any word in query matches alias)
  const words = q.split(/\s+/);
  for (const c of CAREER_DATABASE) {
    if (c.aliases.some(a => words.some(w => w.length > 2 && a.includes(w)))) {
      return c;
    }
  }

  // 3. Category keyword fallback
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(k => q.includes(k))) {
      const fb = CATEGORY_FALLBACKS[cat];
      if (fb) return { career: input, aliases: [], category: cat, ...fb };
    }
  }

  return null;
}
