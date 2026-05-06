import { Career, Scholarship, RoadmapStep } from './types';

export const CAREERS: Career[] = [
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    salaryRange: '₹8–25 LPA',
    matchPercentage: 85,
    growth: 'High Growth',
    icon: 'Brain',
    description: 'Matches your analytical skills & interest in AI.',
    illustration: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'ai-specialist',
    title: 'AI Specialist',
    salaryRange: '₹12–40 LPA',
    matchPercentage: 80,
    growth: 'High Growth',
    icon: 'Cpu',
    description: 'Build the next generation of intelligent systems.',
    illustration: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    salaryRange: '₹6–18 LPA',
    matchPercentage: 75,
    growth: 'Steady Demand',
    icon: 'Palette',
    description: 'Design intuitive experiences for digital products.',
    illustration: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=400',
  },
  {
      id: 'aerospace-engineer',
      title: 'Aerospace Engineer',
      salaryRange: '₹12–30 LPA',
      matchPercentage: 70,
      growth: 'High Growth',
      icon: 'Rocket',
      description: 'Design and build the future of flight.',
      illustration: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400',
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'national-merit-2026',
    title: 'National Merit Scholarship 2026',
    provider: 'Ministry of Education, Govt of India',
    amount: '₹50,000/year',
    deadline: '15 July 2026',
    tags: ['Class 12', 'Merit', 'All India'],
    type: 'Merit-Based',
    borderLeftColor: 'border-blue-500',
  },
  {
    id: 'tata-trust-medical',
    title: 'Tata Trust Medical Scholarship',
    provider: 'Tata Trust Foundation',
    amount: '₹1,20,000/year',
    deadline: '10 Aug 2026',
    tags: ['MBBS', 'Need-Based'],
    type: 'Need-Based',
    borderLeftColor: 'border-green-500',
  },
  {
    id: 'reliance-foundation-grant',
    title: 'Reliance Foundation Undergrad Grant',
    provider: 'Reliance Foundation',
    amount: '₹2,00,000 Total',
    deadline: '10 Aug 2026',
    tags: ['Bachelor Degree', 'Merit + Need'],
    type: 'Private',
    borderLeftColor: 'border-indigo-500',
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    id: 1,
    title: 'Discover Yourself',
    duration: 'Completed',
    outcomes: ['Aptitude Test', 'Interest Mapping'],
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Explore Careers',
    duration: 'Completed',
    outcomes: ['Industry Research', 'Shadowing'],
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Build Skills',
    duration: '6-12 Months',
    outcomes: ['Certifications', 'Online Courses'],
    status: 'Active',
    estSalary: '₹3-5 LPA Entry'
  },
  {
    id: 4,
    title: 'Gain Experience',
    duration: 'Targeted',
    outcomes: ['Internships', 'Live Projects'],
    status: 'Upcoming'
  },
  {
    id: 5,
    title: 'Achieve Goal',
    duration: 'Ultimate',
    outcomes: ['Job Placement', 'Career Growth'],
    status: 'Upcoming'
  }
];
