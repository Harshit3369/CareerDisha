import { UserProfile } from '../contexts/AuthContext';

export function getPersonalizedContent(profile: UserProfile) {
  const { stream, score12OrCurrent = 0, interests = [], classLevel = '', primaryGoal = '' } = profile;
  const name = profile.name?.split(' ')[0] || 'Student';

  return {
    heroHeading: getHeroHeading(stream || '', classLevel, score12OrCurrent),
    recommendedCareers: getTopCareers(stream || '', interests, score12OrCurrent),
    featuredExams: getRelevantExams(stream || '', classLevel),
    suggestedTools: getSuggestedTools(primaryGoal, interests),
    wellnessTip: getWellnessTip(score12OrCurrent, primaryGoal),
    unlockedStream: stream,      // only this stream is FREE
    lockedStreams: getAllOtherStreams(stream || '')
  };
}

function getHeroHeading(stream: string, classLevel: string, score: number) {
  if (stream === 'sciencePCM') {
    if (score >= 75) return "Your path to IIT/NIT starts here 🚀";
    return "Engineering isn't just IIT — 500+ colleges await 💪";
  }
  if (stream === 'sciencePCB') return "NEET, AIIMS, and beyond — your medical journey 🏥";
  if (stream === 'commerce') return "CA, MBA, Banking — build your financial empire 💰";
  if (stream === 'humanities') return "UPSC, Law, Journalism — change the world 🌍";
  if (stream === 'vocational') return "Design, Film, Sports — passion IS a career 🎨";
  
  return "Discover your perfect career roadmap 🎯";
}

function getTopCareers(stream: string, interests: string[], score: number) {
  // Simplified logic for simulation
  const careers = [];
  if (stream === 'sciencePCM') careers.push('Data Science', 'Aerospace Engineering', 'Robotics');
  if (stream === 'sciencePCB') careers.push('Clinical Research', 'Biotechnology', 'Psychology');
  if (stream === 'commerce') careers.push('Investment Banking', 'Actuarial Science', 'E-commerce');
  if (stream === 'humanities') careers.push('International Relations', 'Corporate Law', 'Digital Journalism');
  if (stream === 'vocational') careers.push('User Interface Design', 'Sports Management', 'Cinematography');
  
  return careers;
}

function getRelevantExams(stream: string, classLevel: string) {
  if (stream === 'sciencePCM') return ['JEE Main', 'JEE Advanced', 'BITSAT'];
  if (stream === 'sciencePCB') return ['NEET UG', 'CUET', 'ICAR'];
  if (stream === 'commerce') return ['CA Foundation', 'CLAT', 'IPMAT'];
  if (stream === 'humanities') return ['CUET', 'CLAT', 'NID DAT'];
  
  return ['CUET', 'Skill Assessment'];
}

function getSuggestedTools(primaryGoal: string, interests: string[]) {
  if (primaryGoal === 'abroad') return ['IELTS Prep', 'Scholarship Finder'];
  if (primaryGoal === 'business') return ['Founder AI', 'Pitch Deck Builder'];
  return ['Career Roadmap', 'AI Mentor'];
}

function getWellnessTip(score: number, primaryGoal: string) {
  if (score > 90) return "High achievement can bring pressure. Remember to take micro-breaks today! 🧘";
  if (primaryGoal === 'exploring') return "It's okay to not have all the answers yet. Curiosity is your greatest asset. 🌟";
  return "Consistency beats intensity. 15 minutes of focused learning every day! 🎯";
}

function getAllOtherStreams(currentStream: string) {
  const allStreams = ['sciencePCM', 'sciencePCB', 'commerce', 'humanities', 'vocational'];
  return allStreams.filter(s => s !== currentStream);
}
