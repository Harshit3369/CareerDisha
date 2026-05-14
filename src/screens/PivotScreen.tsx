import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Loader2, Compass, AlertTriangle, CheckCircle, Zap, ShieldAlert, Navigation, Search, Building, Landmark, MapPin, Map, Award, BookOpen, IndianRupee, BookmarkPlus, Sparkles, Target, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI, Type } from '@google/genai';
import { doc, getDoc, setDoc, serverTimestamp, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { API_BASE } from '../lib/apiConfig';

export default function PivotScreen() {
  const navigate = useNavigate();
  const { userProfile, user, refreshProfile } = useAuth();
  
  // Form State
  const [courseChosen, setCourseChosen] = useState('');
  const [stream, setStream] = useState(userProfile?.stream || '');
  const [class10Score, setClass10Score] = useState(userProfile?.score10?.toString() || '');
  const [class12Score, setClass12Score] = useState(userProfile?.score12OrCurrent?.toString() || '');
  const [state, setState] = useState(userProfile?.city || '');
  const [category, setCategory] = useState('General');
  const [budget, setBudget] = useState('moderate');
  const [entranceExams, setEntranceExams] = useState('');
  const [activeTab, setActiveTab] = useState<'india' | 'city' | 'abroad'>('india');
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const saveToExamTracker = async (courseName: string, examName: string) => {
    if (!user) return;
    try {
      const docRef = doc(db, 'users', user.uid, 'settings', 'profile');
      const docSnap = await getDoc(docRef);
      let interests = [];
      if (docSnap.exists() && docSnap.data().interests) {
        interests = docSnap.data().interests;
      }
      
      const newInterest = `${courseName} (via ${examName || 'Entrance Exam'})`;
      if (!interests.includes(newInterest)) {
        interests.push(newInterest);
        await setDoc(docRef, { interests }, { merge: true });
        
        // Invalidate Exam Tracker cache so it fetches the new saved interest
        const trackerCacheRef = doc(db, `users/${user.uid}/examTracker_v2`, 'current');
        await deleteDoc(trackerCacheRef).catch(() => {});
        
        // Refresh local React context so other screens have the latest interests
        if (refreshProfile) {
          await refreshProfile();
        }
      }
      
      setToastMsg(`Saved ${courseName} to Exam Tracker!`);
      setTimeout(() => setToastMsg(null), 3000);
    } catch (e) {
      console.error(e);
      setToastMsg("Failed to save.");
      setTimeout(() => setToastMsg(null), 3000);
    }
  };

  // Pre-fill some data if available
  useEffect(() => {
    if (userProfile) {
      if (userProfile.stream) setStream(userProfile.stream);
      if (userProfile.score10) setClass10Score(userProfile.score10.toString());
      if (userProfile.score12OrCurrent) setClass12Score(userProfile.score12OrCurrent.toString());
      if (userProfile.city) setState(userProfile.city); // Using city as a stand-in for state/location for now
    }
  }, [userProfile]);

  const fetchRecommendations = async (forceRegenerate: boolean = false) => {
    if (!courseChosen.trim()) return;

    setIsAnalyzing(true);
    setErrorMsg(null);

    const courseSlug = courseChosen.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const docRef = user ? doc(db, `users/${user.uid}/collegeRecommendations_v2`, courseSlug) : null;

    try {
      // 1. Check Cache
      if (!forceRegenerate && docRef) {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          // Optional: Only use cache if the inputs match approximately? 
          // For now, prompt says cache it under courseSlug so if courseSlug is same, use it.
          setResult(data.recommendations);
          setIsAnalyzing(false);
          return;
        }
      }

      // 2. Fallback to API Generation
      const response = await fetch(`${API_BASE}/api/recommend-colleges`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          stream,
          class10Score,
          class12Score,
          entranceExams,
          state,
          category,
          courseChosen,
          budget,
          isPremium: userProfile?.isPremium || false
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        let errorToThrow = errData.error || 'Failed to generate college recommendations';
        
        if (typeof errorToThrow === 'object') {
          errorToThrow = errorToThrow.message || JSON.stringify(errorToThrow);
        } else if (typeof errorToThrow === 'string' && errorToThrow.includes('{')) {
          try {
             const parsed = JSON.parse(errorToThrow.substring(errorToThrow.indexOf('{')));
             if (parsed.error && parsed.error.message) errorToThrow = parsed.error.message;
          } catch(e) {}
        }

        if (errorToThrow.includes('API key not valid') || errorToThrow.includes('API_KEY_INVALID') || errorToThrow.includes('leaked') || errorToThrow.includes('not configured')) {
           errorToThrow = "Your Gemini API key is missing, invalid, or leaked. Please configure a valid API key in your environment variables.";
        } else if (errorToThrow.includes('quota') || errorToThrow.includes('429')) {
           errorToThrow = "API quota exceeded. Please try again later or check your billing plan.";
        } else if (errorToThrow.includes('503') || errorToThrow.includes('high demand') || errorToThrow.includes('UNAVAILABLE')) {
           errorToThrow = "The AI model is currently experiencing high demand. Please try again in a few moments.";
        }
        throw new Error(errorToThrow);
      }

      const parsed = await response.json();
      setResult(parsed);

      // 3. Cache the result in Firestore
      if (docRef) {
        try {
          await setDoc(docRef, {
            recommendations: parsed,
            inputs: {
              stream, class10Score, class12Score, entranceExams, state, category, courseChosen, budget
            },
            updatedAt: serverTimestamp()
          });
        } catch (e) {
          handleFirestoreError(e, OperationType.WRITE, `users/${user?.uid}/collegeRecommendations_v2/${courseSlug}`);
        }
      }

    } catch (error: any) {
      console.error("GenAI/Firestore Error:", error);
      setErrorMsg(error.message || 'Failed to generate college recommendations. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(null); // Clear previous result to show loader immediately if we are switching
    fetchRecommendations(false);
  };

  const handleRegenerate = () => {
    setResult(null);
    fetchRecommendations(true);
  };


  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-primary bg-primary/10 border-primary/20';
    return 'text-accent bg-accent/10 border-accent/20';
  };

  const renderCollegeCard = (college: any, cIndex: number) => (
    <div key={cIndex} className="bg-light p-5 rounded-2xl border border-dark/5 shadow-sm relative">
      <div className="flex justify-between items-start mb-3">
        <div className="pr-2">
          <h4 className="font-bold text-base leading-tight mb-1">{college.name}</h4>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-dark/50 font-medium">
            <span className="flex items-center gap-1"><MapPin size={12} /> {college.location}</span>
            <span className="flex items-center gap-1"><Building size={12} /> {college.type}</span>
          </div>
        </div>
        {college.matchScore && (
          <div className={cn("shrink-0 px-2 py-1 rounded-lg text-xs font-bold flex flex-col items-center border", getMatchScoreColor(college.matchScore))}>
            <span className="text-[10px] uppercase opacity-70">Match</span>
            <span>{college.matchScore}%</span>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-dark/5 rounded text-[10px] font-bold text-dark/70 uppercase">
          {college.course}
        </span>
        <span className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-[10px] font-bold uppercase">
          <IndianRupee size={10} /> {college.annualFee}
        </span>
        <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-bold uppercase">
          {college.admissionRoute}
        </span>
      </div>

      <div className="space-y-3">
        <div className="text-sm bg-dark/5 p-3 rounded-xl border border-dark/5">
          <p className="font-medium text-dark/80">{college.whyThisCollege}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 border border-dark/5 rounded-lg">
             <p className="text-[10px] font-bold text-dark/40 uppercase mb-0.5">Cutoff</p>
             <p className="text-xs font-bold">{college.cutoffIndicator}</p>
          </div>
          <div className="p-2 border border-dark/5 rounded-lg">
             <p className="text-[10px] font-bold text-dark/40 uppercase mb-0.5">Placements</p>
             <p className="text-xs font-bold text-green-600">{college.placementHighlight}</p>
          </div>
        </div>

        {college.reservationBenefit && college.reservationBenefit !== "N/A" && college.reservationBenefit !== "None" && (
          <div className="flex items-start gap-2 text-xs text-accent bg-accent/5 p-2 rounded-lg border border-accent/10">
            <ShieldAlert size={14} className="shrink-0 mt-0.5" />
            <p className="font-medium">{college.reservationBenefit}</p>
          </div>
        )}
        
        <button 
          onClick={() => saveToExamTracker(college.course, college.entranceExam)}
          className="mt-4 w-full py-2.5 bg-primary/5 text-primary border border-primary/20 font-bold rounded-xl hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <BookmarkPlus size={16} /> Save to Exam Tracker
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-dark overflow-hidden pb-20 relative">
      
      {/* Toast */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-24 left-1/2 z-50 bg-dark text-light px-6 py-3 rounded-full shadow-2xl font-bold text-sm whitespace-nowrap flex items-center gap-2 border border-white/10"
          >
            <CheckCircle size={16} className="text-green-400" />
            {toastMsg}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Header */}
      <header className="pt-10 pb-4 px-5 flex items-center gap-4 bg-[var(--color-bg)] sticky top-0 z-20 border-b border-dark/5 shadow-sm">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-light rounded-full flex items-center justify-center hover:bg-dark/5 transition-colors border border-dark/5 shadow-sm">
          <ArrowLeft size={20} className="text-dark" />
        </button>
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/20 rounded-lg">
            <Building size={18} className="text-primary" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-dark">College Suggestor</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-5 pt-6 pb-24">
        {!result ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-dark rounded-3xl p-6 text-light overflow-hidden relative shadow-lg">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl z-0" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">Find Your Best Fit</h2>
                <p className="text-light/70 text-sm leading-relaxed">
                  Enter your academic profile and your target course, and our AI will recommend realistic college options properly categorized into Reach (Tier 1), Match (Tier 2), and Safe (Tier 3) choices.
                </p>
              </div>
            </div>

            <form onSubmit={handleAnalyze} className="space-y-4 relative z-10">
              <div className="bg-light p-5 rounded-3xl border border-dark/5 shadow-sm space-y-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-dark/60 uppercase tracking-wider ml-1">Target Course / Branch *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. B.Tech Computer Science, MBBS, BA LLB"
                    value={courseChosen}
                    onChange={(e) => setCourseChosen(e.target.value)}
                    className="w-full bg-primary/10 border border-primary/20 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] transition-shadow placeholder:text-dark/40 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-dark/60 uppercase tracking-wider ml-1">Home State</label>
                    <input
                      type="text"
                      placeholder="e.g. Maharashtra"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-dark/5 border border-dark/5 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] transition-shadow placeholder:text-dark/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-dark/60 uppercase tracking-wider ml-1">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-dark/5 border border-dark/5 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] transition-shadow"
                    >
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="EWS">EWS</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-dark/60 uppercase tracking-wider ml-1">Class 10 Score (%)</label>
                    <input
                      type="text"
                      placeholder="e.g. 88"
                      value={class10Score}
                      onChange={(e) => setClass10Score(e.target.value)}
                      className="w-full bg-dark/5 border border-dark/5 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] transition-shadow placeholder:text-dark/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-dark/60 uppercase tracking-wider ml-1">Class 12 Score (%)</label>
                    <input
                      type="text"
                      placeholder="e.g. 76 or Expected"
                      value={class12Score}
                      onChange={(e) => setClass12Score(e.target.value)}
                      className="w-full bg-dark/5 border border-dark/5 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] transition-shadow placeholder:text-dark/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-dark/60 uppercase tracking-wider ml-1">Current Stream</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. PCM, Commerce, Arts"
                    value={stream}
                    onChange={(e) => setStream(e.target.value)}
                    className="w-full bg-dark/5 border border-dark/5 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] transition-shadow placeholder:text-dark/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-dark/60 uppercase tracking-wider ml-1">Entrance Exam Scores (if any)</label>
                  <textarea
                    placeholder="e.g. JEE Mains: 94 percentile, CUET: 85, etc."
                    value={entranceExams}
                    onChange={(e) => setEntranceExams(e.target.value)}
                    className="w-full bg-dark/5 border border-dark/5 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] transition-shadow placeholder:text-dark/30 min-h-[80px] resize-none"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-dark/60 uppercase tracking-wider ml-1">Budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-dark/5 border border-dark/5 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] transition-shadow"
                  >
                    <option value="low">Low (&lt;3L/year)</option>
                    <option value="moderate">Moderate (3-10L/year)</option>
                    <option value="high">High (&gt;10L/year)</option>
                  </select>
                </div>
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-2xl text-sm font-medium flex items-center gap-2">
                  <AlertTriangle size={16} className="shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isAnalyzing || !courseChosen}
                className="w-full h-14 bg-dark text-light font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 transition-transform active:scale-95"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Finding Best Colleges...
                  </>
                ) : (
                  <>
                    Generate College Recommendations <Navigation size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 relative z-10"
          >
            {/* Header / Nav */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold text-dark">Your College Report</h2>
              <div className="flex gap-2">
                <button 
                  onClick={handleRegenerate} 
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold hover:bg-primary/20 transition-colors flex items-center gap-1"
                >
                  <Zap size={14} /> Regenerate
                </button>
                <button 
                  onClick={() => setResult(null)} 
                  className="px-4 py-2 bg-dark/5 rounded-full text-sm font-bold hover:bg-dark/10 transition-colors"
                >
                  Refine Search
                </button>
              </div>
            </div>

            {/* Overall Verdict / Summary */}
            <div className="bg-primary/10 border border-primary/20 p-5 rounded-3xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-primary">
                <Compass size={18} /> Admission Roadmap
              </h3>
              <p className="text-sm text-dark/80 font-medium leading-relaxed mb-4">
                {result.admissionRoadmapSummary}
              </p>
              
              <div className="bg-white/60 p-4 rounded-xl border border-primary/10">
                <h4 className="font-bold text-sm mb-2 text-dark">Score Gap Analysis</h4>
                <ul className="space-y-2 text-sm text-dark/70">
                  <li><strong className="text-accent">Tier 1:</strong> {result.scoreGapAnalysis.tier1Gap}</li>
                  <li><strong className="text-blue-600">Tier 2:</strong> {result.scoreGapAnalysis.tier2Status}</li>
                  <li><strong className="text-green-600">Tier 3:</strong> {result.scoreGapAnalysis.tier3Status}</li>
                  <li className="pt-2 border-t border-dark/5 mt-2"><strong className="text-dark">Verdict:</strong> {result.scoreGapAnalysis.overallVerdict}</li>
                </ul>
              </div>
              
              {result.alternativeCourseSuggestion && (
                <div className="mt-4 p-3 bg-yellow-50 text-yellow-800 rounded-xl text-sm border border-yellow-100 flex items-start gap-2">
                  <Zap size={16} className="shrink-0 mt-0.5" />
                  <p><strong>Alternative:</strong> {result.alternativeCourseSuggestion}</p>
                </div>
              )}
            </div>

            {/* Personalized Insights */}
            {result.personalizedInsights && result.personalizedInsights.length > 0 && (
              <section className="space-y-3 pt-4">
                <h2 className="text-lg font-bold text-dark flex items-center gap-2">
                  <Sparkles size={18} className="text-secondary" /> AI Insights
                </h2>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x">
                  {result.personalizedInsights.map((insight: any, idx: number) => (
                    <div key={idx} className="min-w-[280px] snap-center bg-white border border-dark/5 shadow-sm p-4 rounded-2xl">
                      <h3 className="font-bold text-secondary mb-1 text-sm">{insight.title}</h3>
                      <p className="text-sm text-dark/80 leading-relaxed mb-3">{insight.message}</p>
                      {insight.actionable && (
                        <div className="bg-primary/5 text-primary text-xs font-bold p-2 rounded-lg inline-block">
                          Action: {insight.actionable}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Surprise Opportunities */}
            {result.surpriseOpportunities && result.surpriseOpportunities.length > 0 && (
              <section className="space-y-3 pt-4">
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Target size={20} className="text-orange-500" />
                    <h2 className="text-lg font-bold text-orange-800">Surprise Opportunities</h2>
                  </div>
                  <div className="space-y-4">
                    {result.surpriseOpportunities.map((opp: any, idx: number) => (
                      <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-orange-100">
                        <h3 className="font-bold text-dark leading-tight mb-2">{opp.name}</h3>
                        <p className="text-xs text-dark/70 bg-dark/5 p-2 rounded-lg italic border-l-2 border-orange-300">
                          "{opp.surpriseMessage}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Category Advantages */}
            {result.categoryAdvantages && result.categoryAdvantages.category && (
              <section className="space-y-3 pt-4">
                <h2 className="text-lg font-bold text-dark flex items-center gap-2">
                  <Sparkles size={18} className="text-purple-600" /> {result.categoryAdvantages.category} Advantages
                </h2>
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 shadow-sm">
                  <ul className="list-disc list-inside space-y-1 mb-2 text-sm text-purple-800 font-medium">
                    {result.categoryAdvantages.advantages?.map((adv: string, i: number) => (
                      <li key={i}>{adv}</li>
                    ))}
                  </ul>
                  {result.categoryAdvantages.importantNote && (
                    <div className="text-xs text-purple-700/80 italic mt-2 p-2 bg-purple-100 rounded-lg">
                      {result.categoryAdvantages.importantNote}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Tabs for College Lists */}
            <div className="mt-8 flex items-center justify-between border-b border-dark/10 overflow-x-auto no-scrollbar pb-2">
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTab('india')}
                  className={cn(
                    "whitespace-nowrap pb-2 font-bold transition-all border-b-2", 
                    activeTab === 'india' ? "text-primary border-primary" : "text-dark/50 border-transparent hover:text-dark/80"
                  )}
                >
                  <Award size={16} className="inline mr-1 mb-0.5" /> Top 30 India
                </button>
                <button 
                  onClick={() => setActiveTab('city')}
                  className={cn(
                    "whitespace-nowrap pb-2 font-bold transition-all border-b-2", 
                    activeTab === 'city' ? "text-accent border-accent" : "text-dark/50 border-transparent hover:text-dark/80"
                  )}
                >
                  <MapPin size={16} className="inline mr-1 mb-0.5" /> Top 10 State
                </button>
                <button 
                  onClick={() => setActiveTab('abroad')}
                  className={cn(
                    "whitespace-nowrap pb-2 font-bold transition-all border-b-2", 
                    activeTab === 'abroad' ? "text-blue-600 border-blue-600" : "text-dark/50 border-transparent hover:text-dark/80"
                  )}
                >
                  <Compass size={16} className="inline mr-1 mb-0.5" /> Top 50 Abroad
                  {!userProfile?.isPremium && <Lock size={12} className="inline ml-1 mb-0.5 text-dark/40" />}
                </button>
              </div>
            </div>

            {/* India Top 30 */}
            {activeTab === 'india' && result.indiaTop30 && result.indiaTop30.length > 0 && (
               <div className="space-y-4 mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                 <div className="grid gap-4">
                   {result.indiaTop30.map((college: any, cIndex: number) => renderCollegeCard(college, cIndex))}
                 </div>
               </div>
            )}

            {/* City Top 10 */}
            {activeTab === 'city' && result.cityTop10 && result.cityTop10.length > 0 && (
               <div className="space-y-4 mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                 <div className="grid gap-4">
                   {result.cityTop10.map((college: any, cIndex: number) => renderCollegeCard(college, cIndex))}
                 </div>
               </div>
            )}

            {/* Abroad Top 50 */}
            {activeTab === 'abroad' && (
               <div className="space-y-4 mt-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                 <div className="relative">
                   <div className={cn("grid gap-4 transition-all duration-500", !userProfile?.isPremium && "blur-md select-none pointer-events-none opacity-60")}>
                     {/* Premium users see real data, free users see dummy data */}
                     {userProfile?.isPremium && result.abroadTop50 ? (
                       result.abroadTop50.map((college: any, cIndex: number) => renderCollegeCard(college, cIndex))
                     ) : (
                       [1, 2, 3, 4, 5].map((_, cIndex) => renderCollegeCard({
                         name: "Harvard University",
                         location: "Cambridge, USA",
                         type: "Private",
                         course: "B.Sc Computer Science",
                         annualFee: "$55,000/year",
                         admissionRoute: "SAT + Profile",
                         matchScore: 92,
                         whyThisCollege: "A premier ivy league institution.",
                       }, cIndex))
                     )}
                   </div>
                   
                   {!userProfile?.isPremium && (
                     <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                       <div className="bg-dark/90 backdrop-blur-md text-light p-6 rounded-3xl max-w-[85%] text-center shadow-2xl border border-white/10 pointer-events-auto">
                         <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                           <Lock size={24} className="text-primary" />
                         </div>
                         <h4 className="font-bold text-lg mb-2">Premium Feature</h4>
                         <p className="text-sm text-light/70 mb-4">
                           Upgrade to Anti Gravity+ to unlock our exclusive list of Top 50 Abroad Colleges tailored to your profile.
                         </p>
                         <button className="bg-primary hover:bg-primary/90 text-white w-full py-3 rounded-xl font-bold transition-colors">
                           Upgrade Now
                         </button>
                       </div>
                     </div>
                   )}
                 </div>
               </div>
            )}

          </motion.div>
        )}
      </main>
    </div>
  );
}