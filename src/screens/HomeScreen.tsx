import { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Brain, ClipboardList, Map, Bot, BookOpen, PenTool, Star, Bookmark, Sparkles, AlertCircle, Video, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { GoogleGenAI } from '@google/genai';
import { getPersonalizedContent } from '../utils/personalizationEngine';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

const UPCOMING_WEBINARS = [
  {
    id: 1,
    title: "Cracking JEE Advanced 2026: Master Strategy",
    speaker: "Aman Dhattarwal",
    date: "12 May 2026",
    time: "6:00 PM IST",
    tags: ["Engineering", "JEE"],
    interestedCount: 1240,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  },
  {
    id: 2,
    title: "Careers in AI without a CS Degree",
    speaker: "Google Developer Expert",
    date: "15 May 2026",
    time: "5:00 PM IST",
    tags: ["Technology", "AI"],
    interestedCount: 856,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
  },
  {
    id: 3,
    title: "Design Portfolio Masterclass",
    speaker: "Product Designer @ Spotify",
    date: "18 May 2026",
    time: "7:00 PM IST",
    tags: ["Design", "Portfolio"],
    interestedCount: 541,
    color: "bg-pink-500/10 text-pink-600 border-pink-500/20"
  }
];

export default function HomeScreen() {
  const { userProfile, user } = useAuth();
  const firstName = userProfile?.name?.split(' ')[0] || user?.displayName?.split(' ')[0] || 'Jacob';
  const [roadmaps, setRoadmaps] = useState<any[]>([]);
  const [insights, setInsights] = useState<string[]>([]);
  const [loadingInsights, setLoadingInsights] = useState(true);

  const personalized = useMemo(() => {
    if (!userProfile) return null;
    return getPersonalizedContent(userProfile);
  }, [userProfile]);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoadingInsights(true);
        let promptText = `Provide 3 short, catchy career tips or market trends for Indian students in 2026. Each tip should be under 15 words. Return them as a JSON array of strings.`;
        if (userProfile) {
          promptText = `Provide 3 personalized, short, catchy career tips or actionable insights for an Indian student in 2026 based on this profile: 
          - Class Level: ${userProfile.classLevel || 'N/A'}
          - Stream: ${userProfile.stream || 'N/A'}
          - Interests: ${(userProfile.interests || []).join(', ') || 'N/A'}
          - Primary Goal: ${userProfile.primaryGoal || 'N/A'}.
          Each tip should be under 15 words and directly address their specific interests. Return them as a JSON array of strings.`;
        }

        const response = await fetch('/api/generate-content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: promptText })
        });
        
        if (!response.ok) throw new Error('Failed to fetch insights');
        
        const data = await response.json();
        const text = data.text || '';
        const cleaned = text.replace(/```json|```/g, '').trim();
        const parsedInsights = JSON.parse(cleaned);
        setInsights(parsedInsights);
      } catch (err) {
        // Fallback insights on error
        setInsights([
          'Explore internships early to build practical experience.',
          'Networking with alumni can open hidden career doors.',
          'Focus on developing strong communication and technical skills.'
        ]);
      } finally {
        setLoadingInsights(false);
      }
    };

    fetchInsights();
  }, [userProfile?.stream, userProfile?.classLevel, userProfile?.interests, userProfile?.primaryGoal]);

  useEffect(() => {
    if (!user) return;
    
    const roadmapsRef = collection(db, 'users', user.uid, 'roadmaps');
    const q = query(roadmapsRef, orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedRoadmaps = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRoadmaps(fetchedRoadmaps);
    }, (error) => {
      if (error.code === 'permission-denied') {
        handleFirestoreError(error, OperationType.GET, `users/${user.uid}/roadmaps`);
      }
      console.error('Error fetching roadmaps:', error);
    });

    return () => unsubscribe();
  }, [user]);
  
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Personalized Hero Card */}
      <motion.section 
        className="bg-primary rounded-[32px] p-8 text-[#FFFFFF] relative overflow-hidden shadow-lg shadow-[#7C6FF7]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative z-10 w-[80%]">
          <motion.p 
            className="text-[#FFFFFF]/80 font-bold text-sm tracking-widest uppercase mb-1 drop-shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome, {firstName}!
          </motion.p>
          <motion.h2 
            className="text-3xl font-bold leading-tight mb-3 tracking-tight text-balance drop-shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {personalized ? personalized.heroHeading : "Your career journey starts here 🚀"}
          </motion.h2>
          <motion.p 
            className="text-[#FFFFFF]/90 font-medium text-sm leading-relaxed mb-6 drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {personalized?.wellnessTip || "Let's explore paths tailored for you."}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-2"
          >
            <Link to={userProfile?.stream ? `/careers/${userProfile.stream}` : '/explore'} className="inline-flex h-12 px-6 bg-dark text-light font-bold rounded-full items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-lg">
              Explore My Path <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
        
        {/* Floating icons based on stream */}
        <motion.div 
          className="absolute right-6 top-8 text-6xl drop-shadow-xl z-10"
          animate={{ rotate: [12, -5, 12], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          {userProfile?.stream === 'sciencePCM' ? '🚀' : userProfile?.stream === 'sciencePCB' ? '🏥' : '🎓'}
        </motion.div>
        
        <div className="absolute bottom-16 right-[-10px] w-48 h-48 bg-light/10 rounded-full blur-2xl" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl" />
      </motion.section>

      {/* Recommended Careers (Personalized) */}
      {personalized?.recommendedCareers && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-secondary" />
            <h3 className="font-bold text-dark text-lg">Top Picks for You</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {personalized.recommendedCareers.map((career, idx) => (
              <motion.div 
                key={career}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-light p-4 rounded-2xl border border-dark/5"
              >
                <Link to={userProfile?.stream ? `/careers/${userProfile?.stream}` : '/explore'} className="flex items-center justify-between hover:opacity-80 transition-opacity">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary transform group-hover:scale-110 transition-transform">
                      <Star size={18} />
                    </div>
                    <span className="font-bold text-dark">{career}</span>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-black rounded-lg">HIGH MATCH</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Exams (Personalized) */}
      {personalized?.featuredExams && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
             <h3 className="font-bold text-dark text-lg flex items-center gap-2">
               <ClipboardList size={18} className="text-primary" /> Popular Exams
             </h3>
             <span className="text-xs text-primary font-bold">See All</span>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {personalized.featuredExams.map(exam => (
              <div key={exam} className="bg-white border-2 border-primary/20 p-4 rounded-2xl min-w-[140px] shadow-sm">
                <div className="text-[10px] font-black text-primary/60 uppercase mb-1">Coming Soon</div>
                <div className="font-bold text-dark mb-2">{exam}</div>
                <div className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded inline-block font-bold">2026 CYCLE</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Webinars */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-dark text-lg flex items-center gap-2">
            <Video size={18} className="text-primary" /> Live Webinars
          </h3>
          <span className="text-xs text-primary font-bold hover:underline cursor-pointer">View All</span>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x">
          {UPCOMING_WEBINARS.map((webinar) => (
            <div 
              key={webinar.id} 
              className={`min-w-[280px] md:min-w-[320px] snap-center rounded-3xl p-5 border shadow-sm ${webinar.color} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-black uppercase tracking-wider">{webinar.date}</div>
                  <div className="flex items-center gap-1 text-xs font-bold bg-white/50 px-2 py-1 rounded-full px-2">
                    <Users size={12} /> {webinar.interestedCount}
                  </div>
                </div>
                <h4 className="font-bold text-lg leading-tight mb-1">{webinar.title}</h4>
                <p className="text-sm opacity-80 font-medium mb-4">by {webinar.speaker}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs font-bold opacity-80">{webinar.time}</span>
                <button className="bg-white/50 hover:bg-white text-current font-bold py-2 px-4 rounded-xl text-sm transition-colors shadow-sm">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Insights */}
      <motion.section 
        className="bg-dark rounded-[32px] p-6 text-white overflow-hidden relative shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
         <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-secondary" />
            <h3 className="font-bold text-md tracking-tight">Personalized AI Insights</h3>
         </div>
         
         {loadingInsights ? (
            <div className="h-20 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
         ) : (
            <div className="space-y-4">
              {insights.map((insight, idx) => (
                <div key={idx} className="flex gap-3 items-start border-l-2 border-secondary/30 pl-4 py-1">
                  <p className="text-sm font-medium leading-normal opacity-90">{insight}</p>
                </div>
              ))}
            </div>
         )}
      </motion.section>

      {/* Your Interests */}
      {userProfile?.interests && userProfile.interests.length > 0 && (
        <section className="space-y-3">
          <h3 className="font-bold text-dark text-lg">Your Interest Map</h3>
          <div className="flex flex-wrap gap-2">
            {userProfile.interests.map((interest, idx) => (
              <span 
                key={idx} 
                className="bg-light border border-dark/5 px-4 py-2 rounded-full text-sm font-bold text-dark shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
