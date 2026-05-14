// Path Commitment System - Data & Types

export interface PathExam {
  examName: string;
  deadline: string;
  daysLeft: number;
  priority: 'high' | 'medium' | 'low';
  preparationTime: string;
}

export interface PathMilestone {
  task: string;
  dueDate: string;
  completed: boolean;
}

export interface PathLaneData {
  id: 'A' | 'B' | 'C' | 'D';
  title: string;
  archetype: string;
  tagline: string;
  description: string;
  emoji: string;
  gradient: string;
  glowColor: string;
  isPremium: boolean;
  exams: PathExam[];
  milestones: PathMilestone[];
  colleges: string[];
}

export const PATH_LANES: PathLaneData[] = [
  {
    id: 'A',
    title: 'The Safe Bet',
    archetype: 'Anchored Explorer',
    tagline: 'State-level BSc & local colleges',
    description: 'Minimal risk. You stay close to home, attend a solid state university, and build from there. Perfect if you want stability first.',
    emoji: '🏠',
    gradient: 'from-emerald-500 to-teal-600',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    isPremium: false,
    exams: [
      { examName: 'State BSc Entrance', deadline: '2026-07-15', daysLeft: 62, priority: 'high', preparationTime: '1-2 months recommended' },
      { examName: 'CUET UG (Optional)', deadline: '2026-08-20', daysLeft: 98, priority: 'medium', preparationTime: '2-3 months recommended' },
    ],
    milestones: [
      { task: 'Register for state entrance portal', dueDate: '2026-06-01', completed: false },
      { task: 'Complete mock test series', dueDate: '2026-06-20', completed: false },
      { task: 'Submit application form', dueDate: '2026-07-10', completed: false },
      { task: 'Appear for entrance exam', dueDate: '2026-07-15', completed: false },
    ],
    colleges: ['State University', 'Regional Science College', 'Govt. Degree College'],
  },
  {
    id: 'B',
    title: 'The Calculated Climb',
    archetype: 'Calculated Strategist',
    tagline: 'Regional engineering & private universities',
    description: 'Moderate effort, strong payoff. Target state-level engineering seats and top private universities with good placement records.',
    emoji: '📐',
    gradient: 'from-blue-500 to-indigo-600',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    isPremium: false,
    exams: [
      { examName: 'State Engineering CET', deadline: '2026-06-30', daysLeft: 47, priority: 'high', preparationTime: '2-3 months recommended' },
      { examName: 'Private University Entrance', deadline: '2026-07-25', daysLeft: 72, priority: 'medium', preparationTime: '1-2 months recommended' },
      { examName: 'COMEDK UGET', deadline: '2026-07-10', daysLeft: 57, priority: 'medium', preparationTime: '2 months recommended' },
    ],
    milestones: [
      { task: 'Complete state CET registration', dueDate: '2026-05-25', completed: false },
      { task: 'Finish revision of core subjects', dueDate: '2026-06-15', completed: false },
      { task: 'Take 5 full-length mock tests', dueDate: '2026-06-25', completed: false },
      { task: 'Appear for State CET', dueDate: '2026-06-30', completed: false },
    ],
    colleges: ['VIT Vellore', 'SRM Chennai', 'BITS Pilani (off-campus)', 'State NIT'],
  },
  {
    id: 'C',
    title: 'The High-Stakes Leap',
    archetype: 'Ambitious Dreamer',
    tagline: 'JEE Main, Advanced & top NITs/IITs',
    description: 'High effort, transformative outcome. This is the competitive route — JEE, state CETs, and elite institutions.',
    emoji: '🚀',
    gradient: 'from-orange-500 to-red-600',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    isPremium: true,
    exams: [
      { examName: 'JEE Main', deadline: '2026-06-15', daysLeft: 32, priority: 'high', preparationTime: '6+ months recommended' },
      { examName: 'JEE Advanced', deadline: '2026-07-20', daysLeft: 67, priority: 'high', preparationTime: '12+ months recommended' },
      { examName: 'State CET', deadline: '2026-06-30', daysLeft: 47, priority: 'medium', preparationTime: '2-3 months recommended' },
      { examName: 'Private Exam (BITSAT)', deadline: '2026-07-05', daysLeft: 52, priority: 'medium', preparationTime: '2 months recommended' },
    ],
    milestones: [
      { task: 'Complete JEE Main syllabus revision', dueDate: '2026-05-30', completed: false },
      { task: 'Solve 10 previous year papers', dueDate: '2026-06-10', completed: false },
      { task: 'Appear for JEE Main', dueDate: '2026-06-15', completed: false },
      { task: 'Begin JEE Advanced prep', dueDate: '2026-06-20', completed: false },
    ],
    colleges: ['IIT Bombay', 'IIT Delhi', 'NIT Trichy', 'BITS Pilani'],
  },
  {
    id: 'D',
    title: 'The Global Horizon',
    archetype: 'World Builder',
    tagline: 'Study abroad — SAT, IELTS, global universities',
    description: 'Think beyond borders. SAT, IELTS/TOEFL, and applications to universities in the US, UK, Canada, and more.',
    emoji: '🌍',
    gradient: 'from-purple-500 to-pink-600',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    isPremium: true,
    exams: [
      { examName: 'SAT', deadline: '2026-08-10', daysLeft: 88, priority: 'high', preparationTime: '3-4 months recommended' },
      { examName: 'IELTS / TOEFL', deadline: '2026-09-01', daysLeft: 110, priority: 'high', preparationTime: '2-3 months recommended' },
      { examName: 'Passport Application', deadline: '2026-06-15', daysLeft: 32, priority: 'high', preparationTime: 'Apply ASAP' },
    ],
    milestones: [
      { task: 'Start SAT prep (Khan Academy)', dueDate: '2026-05-20', completed: false },
      { task: 'Apply for passport', dueDate: '2026-06-01', completed: false },
      { task: 'Shortlist 10 universities', dueDate: '2026-07-01', completed: false },
      { task: 'Take IELTS/TOEFL', dueDate: '2026-09-01', completed: false },
    ],
    colleges: ['MIT', 'Stanford', 'University of Toronto', 'Imperial College London'],
  },
];
