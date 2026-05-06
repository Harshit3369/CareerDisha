export interface Career {
  id: string;
  title: string;
  salaryRange: string;
  matchPercentage: number;
  growth: 'High Growth' | 'Steady Demand' | 'Emerging';
  icon: string;
  description: string;
  illustration: string;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  tags: string[];
  type: 'Merit-Based' | 'Need-Based' | 'Government' | 'Private';
  borderLeftColor: string;
}

export interface RoadmapStep {
  id: number;
  title: string;
  duration?: string;
  outcomes: string[];
  estSalary?: string;
  status: 'Completed' | 'Active' | 'Upcoming';
}
