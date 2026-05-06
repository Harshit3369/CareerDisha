import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';
import StepBackground from '../components/Onboarding/StepBackground';
import { 
  CLASS_LEVELS, 
  STREAMS, 
  INTERESTS, 
  GOALS, 
  URGENCY_LEVELS, 
  INDIAN_CITIES 
} from '../data/onboardingData';

export default function OnboardingScreen() {
  const { user, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for back
  const totalSteps = 7;
  
  const [profileData, setProfileData] = useState({
    name: '',
    city: '',
    classLevel: '',
    stream: '',
    score10: 75,
    score12OrCurrent: 75,
    strongSubjects: [] as string[],
    interests: [] as string[],
    primaryGoal: '',
    urgency: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [citySearch, setCitySearch] = useState('');

  const filteredCities = INDIAN_CITIES.filter(city => 
    city.toLowerCase().includes(citySearch.toLowerCase())
  ).slice(0, 5);

  const handleNext = () => {
    if (validateStep()) {
      setDirection(1);
      setStep(prev => prev + 1);
    } else {
      // Trigger shake or error
    }
  };

  const handleSkip = () => {
    setDirection(1);
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    setStep(prev => prev - 1);
  };

  const validateStep = () => {
    switch(step) {
      case 1: return profileData.name.trim() !== '';
      case 2: return profileData.classLevel !== '';
      case 3: return profileData.stream !== '';
      case 5: return profileData.interests.length >= 2;
      case 6: return profileData.primaryGoal !== '' && profileData.urgency !== '';
      default: return true;
    }
  };

  const isSkippable = (currentStep: number) => {
    return [4, 5, 6].includes(currentStep);
  };

  const handleComplete = async () => {
    if (!user || isSubmitting) return;
    setIsSubmitting(true);
    const profilePath = `users/${user.uid}/settings/profile`;
    try {
      const docRef = doc(db, 'users', user.uid, 'settings', 'profile');
      await setDoc(docRef, {
        ...profileData,
        onboardingCompleted: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      // Also update the main user doc for easier flag checking if needed
      await setDoc(doc(db, 'users', user.uid), { onboardingCompleted: true }, { merge: true });

      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7C6FF7', '#F59E0B', '#10B981']
      });

      setTimeout(async () => {
        await refreshProfile();
        navigate('/');
      }, 2500);
    } catch (error: any) {
      if (error.code === 'permission-denied') {
        handleFirestoreError(error, OperationType.WRITE, profilePath);
      }
      console.error("Error saving profile:", error);
      setIsSubmitting(false);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const getScoreColor = (score: number) => {
    if (score < 40) return '#EF4444'; // red
    if (score < 60) return '#F59E0B'; // orange
    if (score < 75) return '#EAB308'; // yellow
    if (score < 90) return '#10B981'; // green
    return '#7C6FF7'; // purple
  };

  const getMotivationalCopy = (score: number) => {
    if (score < 40) return "Don't worry — there are great paths for every score! 💪";
    if (score < 60) return "Good foundation! Many top careers open here 🌟";
    if (score < 75) return "Solid scores! Lots of opportunities ahead 🎯";
    if (score < 90) return "Great scores! Premium career paths available 🔥";
    return "Exceptional! Top-tier careers await you 🏆";
  };

  // Helper for multi-select
  const toggleItem = (list: string[], item: string) => {
    return list.includes(item) ? list.filter(i => i !== item) : [...list, item];
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg overflow-hidden font-sans relative text-dark">
      <StepBackground />
      
      {/* Progress Bar */}
      {step < totalSteps && (
        <div className="fixed top-0 left-0 right-0 z-50 pt-6 px-6">
          <div className="flex gap-2 justify-center max-w-sm mx-auto">
            {Array.from({ length: totalSteps - 1 }).map((_, i) => (
              <div key={i} className="h-1.5 flex-1 bg-dark/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-accent to-primary"
                  initial={{ width: '0%' }}
                  animate={{ width: step > i + 1 ? '100%' : step === i + 1 ? '50%' : '0%' }}
                  transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back Button */}
      {step > 1 && step < totalSteps && (
        <button 
          onClick={handleBack}
          className="fixed top-6 left-6 z-50 w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center hover:bg-dark/10 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      )}

      <div className="flex-1 flex flex-col pt-24 px-6 pb-32">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col"
          >
            {step === 1 && (
              <div className="space-y-8 text-center pt-10">
                <h2 className="text-4xl font-bold">What's your name?</h2>
                <input 
                  autoFocus
                  type="text" 
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  placeholder="Type your name here..."
                  className="w-full bg-transparent border-b-2 border-dark/20 pb-4 text-3xl font-medium text-center focus:outline-none focus:border-primary transition-colors placeholder:text-dark/20"
                />
                
                <div className="pt-12 space-y-4">
                  <p className="text-dark/60 text-lg">What city are you from? (Optional)</p>
                  <input 
                    type="text"
                    value={citySearch}
                    onChange={(e) => {
                      setCitySearch(e.target.value);
                      setProfileData({...profileData, city: e.target.value});
                    }}
                    placeholder="Search your city..."
                    className="w-full bg-dark/5 border border-dark/10 rounded-2xl p-4 focus:outline-none focus:border-primary"
                  />
                  <div className="flex flex-wrap justify-center gap-2">
                    {filteredCities.map(city => (
                      <button
                        key={city}
                        onClick={() => {
                          setProfileData({...profileData, city});
                          setCitySearch(city);
                        }}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-bold transition-all border",
                          profileData.city === city ? "bg-primary border-primary text-light" : "bg-dark/5 border-dark/10 text-dark/60"
                        )}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 pt-10">
                <h2 className="text-3xl font-bold leading-tight">Nice to meet you, {profileData.name || 'there'}! Which class are you in right now?</h2>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {CLASS_LEVELS.map(level => (
                    <motion.button
                      key={level.id}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setProfileData({...profileData, classLevel: level.id})}
                      className={cn(
                        "p-4 rounded-3xl border flex flex-col items-center text-center gap-3 transition-all relative overflow-hidden",
                        profileData.classLevel === level.id 
                          ? "bg-primary/10 border-primary ring-1 ring-primary" 
                          : "bg-dark/5 border-dark/10"
                      )}
                    >
                      <span className="text-4xl">{level.emoji}</span>
                      <span className="text-sm font-bold leading-tight">{level.label}</span>
                      {profileData.classLevel === level.id && (
                        <div className="absolute top-2 right-2 bg-primary text-light rounded-full p-1">
                          <Check size={12} />
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
                {(profileData.classLevel === 'class10appearing' || profileData.classLevel === 'class10passed') && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/10 border border-primary/20 p-4 rounded-2xl text-center text-primary-foreground text-sm font-medium"
                  >
                    🚀 We'll help you choose the right stream for Class 11!
                  </motion.div>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 overflow-y-auto pr-2 no-scrollbar pt-10">
                <h2 className="text-3xl font-bold leading-tight">Which stream are you in or planning to take?</h2>
                <div className="grid grid-cols-1 gap-4">
                  {STREAMS.map(stream => (
                    <motion.button
                      key={stream.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setProfileData({...profileData, stream: stream.id})}
                      className={cn(
                        "p-5 rounded-3xl border text-left transition-all relative overflow-hidden flex items-center gap-4",
                        profileData.stream === stream.id 
                          ? "bg-primary/10 border-primary" 
                          : "bg-dark/5 border-dark/10"
                      )}
                    >
                      <span className="text-4xl shrink-0">{stream.emoji}</span>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{stream.label}</div>
                        <div className="text-dark/60 text-xs font-medium leading-relaxed mt-1">{stream.description}</div>
                        <div className="mt-2 text-[10px] uppercase tracking-widest font-black text-primary/80">
                          {stream.pill}
                        </div>
                      </div>
                      {profileData.stream === stream.id && (
                        <div className="bg-primary text-light rounded-full p-1">
                          <Check size={16} />
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-12 pt-10">
                <h2 className="text-3xl font-bold leading-tight">Got it! What are your academic scores?</h2>
                
                {/* Scoring Logic Based on Class */}
                {profileData.classLevel.includes('class10') ? (
                  <div className="space-y-10">
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <label className="text-dark/60 font-bold">Class 10 Percentage / CGPA</label>
                        <span className="text-4xl font-black text-primary">{profileData.score10}%</span>
                      </div>
                      <input 
                        type="range" min="0" max="100" 
                        value={profileData.score10}
                        onChange={(e) => setProfileData({...profileData, score10: parseInt(e.target.value)})}
                        style={{ accentColor: getScoreColor(profileData.score10) }}
                        className="w-full h-2 bg-dark/10 rounded-full appearance-none cursor-pointer"
                      />
                      <p className="text-center font-bold text-sm h-6" style={{ color: getScoreColor(profileData.score10) }}>
                        {getMotivationalCopy(profileData.score10)}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-dark/60 font-bold uppercase text-xs tracking-wider">Subject Strengths</p>
                      <div className="flex flex-wrap gap-2">
                        {['Maths', 'Science', 'English', 'Social Science', 'Hindi'].map(sub => (
                          <button
                            key={sub}
                            onClick={() => setProfileData({...profileData, strongSubjects: toggleItem(profileData.strongSubjects, sub)})}
                            className={cn(
                              "px-4 py-2 rounded-xl text-sm font-bold border transition-all",
                              profileData.strongSubjects.includes(sub) ? "bg-dark text-light border-dark" : "bg-dark/5 border-dark/10 text-dark/60"
                            )}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-10">
                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <label className="text-dark/60 font-bold">Current Score / Approx %</label>
                        <span className="text-4xl font-black text-primary">{profileData.score12OrCurrent}%</span>
                      </div>
                      <input 
                        type="range" min="0" max="100" 
                        value={profileData.score12OrCurrent}
                        onChange={(e) => setProfileData({...profileData, score12OrCurrent: parseInt(e.target.value)})}
                        style={{ accentColor: getScoreColor(profileData.score12OrCurrent) }}
                        className="w-full h-2 bg-dark/10 rounded-full appearance-none cursor-pointer"
                      />
                      <p className="text-center font-bold text-sm h-6" style={{ color: getScoreColor(profileData.score12OrCurrent) }}>
                        {getMotivationalCopy(profileData.score12OrCurrent)}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-dark/40 text-[10px] font-black uppercase tracking-widest">Class 10 %</label>
                        <input 
                          type="number" 
                          placeholder="0"
                          value={profileData.score10}
                          onChange={(e) => setProfileData({...profileData, score10: parseInt(e.target.value) || 0})}
                          className="w-full bg-dark/5 border border-dark/10 rounded-2xl p-4 font-bold"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-dark/40 text-[10px] font-black uppercase tracking-widest">Strongest Sub</label>
                        <select 
                          className="w-full bg-dark/5 border border-dark/10 rounded-2xl p-4 font-bold appearance-none"
                          onChange={(e) => setProfileData({...profileData, strongSubjects: [e.target.value]})}
                        >
                          <option value="">Select...</option>
                          <option value="Physics">Physics</option>
                          <option value="Chemistry">Chemistry</option>
                          <option value="Biology">Biology</option>
                          <option value="Accountancy">Accountancy</option>
                          <option value="Economics">Economics</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6 overflow-y-auto no-scrollbar pb-10 pt-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold leading-tight pr-4">What subjects or fields are you most interested in?</h2>
                  <div className={cn(
                    "shrink-0 h-14 w-14 rounded-full flex items-center justify-center font-bold text-lg",
                    profileData.interests.length >= 2 ? "bg-green-500 text-light" : "bg-dark/10 text-dark"
                  )}>
                    {profileData.interests.length}/2
                  </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                  {INTERESTS.map(interest => (
                    <motion.button
                      key={interest.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setProfileData({...profileData, interests: toggleItem(profileData.interests, interest.id)})}
                      className={cn(
                        "p-3 rounded-xl flex flex-col items-center justify-center gap-2 text-xs font-bold border transition-all text-center",
                        profileData.interests.includes(interest.id) 
                          ? "bg-gradient-to-br from-primary to-[#5a4cf0] border-primary text-light shadow-md" 
                          : "bg-dark/5 border-dark/10 text-dark/70"
                      )}
                    >
                      <span className="text-2xl">{interest.icon}</span>
                      <span className="leading-tight">{interest.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-10 pt-10">
                <h2 className="text-3xl font-bold">Awesome choices, {profileData.name}! What's your main goal right now?</h2>
                <div className="space-y-3">
                  {GOALS.map(goal => (
                    <button
                      key={goal.id}
                      onClick={() => setProfileData({...profileData, primaryGoal: goal.id})}
                      className={cn(
                        "w-full p-4 rounded-2xl border flex items-center gap-4 text-left font-bold transition-all",
                        profileData.primaryGoal === goal.id ? "bg-primary border-primary text-light" : "bg-dark/5 border-dark/10"
                      )}
                    >
                      <span className="text-2xl">{goal.emoji}</span>
                      {goal.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-dark/80">When do you need career guidance?</h3>
                  <div className="flex flex-wrap gap-2">
                    {URGENCY_LEVELS.map(urgency => (
                      <button
                        key={urgency}
                        onClick={() => setProfileData({...profileData, urgency})}
                        className={cn(
                          "px-6 py-3 rounded-full text-sm font-bold border transition-all",
                          profileData.urgency === urgency ? "bg-dark text-light border-dark" : "bg-dark/5 border-dark/10 text-dark/50"
                        )}
                      >
                        {urgency}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 7 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-10 pt-10">
                <motion.div 
                  initial={{ scale: 0, rotate: -30 }} 
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center shadow-2xl relative"
                >
                  <motion.svg 
                    viewBox="0 0 24 24" 
                    className="w-20 h-20 text-white"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <motion.path 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      d="M5 13l4 4L19 7" 
                      strokeDasharray="0 1"
                    />
                  </motion.svg>
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 bg-green-500 rounded-full -z-10"
                  />
                </motion.div>

                <div className="space-y-4">
                  <h2 className="text-4xl font-black">All Set, {profileData.name.split(' ')[0]}!</h2>
                  <p className="text-dark/60 text-lg">Your personalized Career Suggestor experience is ready!</p>
                </div>

                {/* Summary Card */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                  className="w-full bg-light/50 backdrop-blur-xl border border-dark/10 rounded-[2.5rem] p-8 space-y-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-black text-light shadow-xl">
                      {profileData.name?.[0]}
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-black text-xl">{profileData.name}</div>
                      <div className="text-dark/40 text-sm font-bold uppercase tracking-wider">{profileData.city}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 bg-primary/20 text-primary rounded-lg text-xs font-black uppercase tracking-tighter border border-primary/30">
                      {STREAMS.find(s => s.id === profileData.stream)?.label}
                    </div>
                    <div className="px-3 py-1 bg-dark/10 text-dark/60 rounded-lg text-xs font-black uppercase tracking-tighter border border-dark/5">
                      Class {profileData.classLevel.replace('class', '')}
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-500 rounded-lg text-xs font-black uppercase tracking-tighter border border-green-500/30">
                      Score: {profileData.score12OrCurrent}%
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 border-t border-dark/5 pt-6">
                    {profileData.interests.slice(0, 3).map(id => (
                      <div key={id} className="px-3 py-2 bg-dark/5 rounded-xl text-xs font-bold text-dark/50">
                        {INTERESTS.find(i => i.id === id)?.icon} {INTERESTS.find(i => i.id === id)?.label}
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <button
                  onClick={handleComplete}
                  disabled={isSubmitting}
                  className="w-full bg-primary text-light py-5 rounded-[2rem] font-black text-xl shadow-[0_20px_50px_rgba(124,111,247,0.4)] flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-light border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Explore My Career Paths
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                  <div className="absolute inset-0 bg-light/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistence Controls */}
      {step < totalSteps && (
        <div className="fixed bottom-10 left-0 right-0 px-6 flex items-center justify-center gap-4 z-40 max-w-[500px] mx-auto w-full">
          {isSkippable(step) && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSkip}
              className="flex-1 max-w-[120px] bg-dark/5 text-dark/70 py-5 rounded-[2rem] font-bold text-base hover:bg-dark/10 transition-colors"
            >
              Skip
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            disabled={!validateStep()}
            className="flex-1 bg-dark text-light py-5 rounded-[2rem] font-black text-lg shadow-2xl flex items-center justify-center gap-3 disabled:opacity-30 disabled:grayscale transition-all"
          >
            Continue
            <ArrowRight size={20} />
          </motion.button>
        </div>
      )}
    </div>
  );
}
