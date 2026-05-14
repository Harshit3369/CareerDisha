// Life Path Story Map — Type Definitions

export interface CollegeInPath {
  name: string;
  location: string;
  course: string;
  annualFee: string;
  placementMedian: string;
  topRecruiters: string[];
  hostelNote: string;
  studentQuote: string;
}

export interface PathExam {
  name: string;
  deadline: string;
  daysLeft: number;
  priority: 'high' | 'medium' | 'low';
  prepTime: string;
}

export interface CountryPath {
  country: string;
  topUniversities: string[];
  estimatedCost: string;
  visaReality: string;
  scholarshipNote: string;
}

export interface LifePathData {
  id: 'A' | 'B' | 'C' | 'D';
  title: string;
  tagline: string;
  emoji: string;
  isPremium: boolean;

  // Narrative
  lifePreview: string;
  fourYearCost: string;
  placementMedian: string;
  topRecruiters: string[];
  hostelCulture: string;
  studentSentiment: string;

  // Concrete data
  colleges: CollegeInPath[];
  exams: PathExam[];

  // Abroad-only (Path D)
  countryBreakdown?: CountryPath[];
}

export interface LifePathsResponse {
  studentSummary: string;
  paths: LifePathData[];
  disclaimer: string;
}

// Request payload
export interface LifePathsRequest {
  storyText: string;
  name?: string;
  city?: string;
  classLevel?: string;
  stream?: string;
  score12OrCurrent?: number;
  score10?: number;
  interests?: string[];
  primaryGoal?: string;
  isPremium?: boolean;
}
