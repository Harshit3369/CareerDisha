import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeft, Loader2, CalendarClock, Target, AlertTriangle, ShieldAlert, Sparkles, Navigation } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { cn } from '../lib/utils';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';
import { API_BASE } from '../lib/apiConfig';

export default function ExamTrackerScreen() {
  const navigate = useNavigate();
  const { userProfile, user } = useAuth();
  
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchData = async (forceRegenerate: boolean = false) => {
    setIsLoading(true);
    setErrorMsg(null);
    
    // Simple caching mechanism
    const docRef = user ? doc(db, `users/${user.uid}/examTracker_v2`, 'current') : null;

    try {
      if (!forceRegenerate && docRef) {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const cachedData = docSnap.data();
          // Check expiration (7 days)
          const generatedAt = cachedData.generatedAt?.toDate() || new Date(0);
          const now = new Date();
          const diffDays = (now.getTime() - generatedAt.getTime()) / (1000 * 3600 * 24);
          
          if (diffDays < 7) {
            setData(cachedData.data);
            setIsLoading(false);
            return;
          }
        }
      }

      const response = await fetch(`${API_BASE}/api/exam-tracker`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: userProfile?.name || user?.displayName || 'Student',
          classLevel: userProfile?.classLevel || 'class12',
          stream: userProfile?.stream || 'sciencePCM',
          state: userProfile?.city || '',
          category: 'General', // Default, should ideally be in user profile
          gender: 'Male', // Default
          score12OrCurrent: userProfile?.score12OrCurrent || null,
          interestedCareers: userProfile?.interests || [],
          isPremium: userProfile?.isPremium || false
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        
        let errorToThrow = errData.error || 'Failed to generate exam tracker data';
        
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
      setData(parsed);

      if (docRef) {
        try {
          await setDoc(docRef, {
            data: parsed,
            generatedAt: serverTimestamp()
          });
        } catch (e) {
          handleFirestoreError(e, OperationType.WRITE, `users/${user?.uid}/examTracker_v2/current`);
        }
      }

    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Failed to generate exam tracker data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check if we already have it in state, else fetch
    if (userProfile && !data && !isLoading) {
      fetchData();
    }
  }, [userProfile]);

  return (
    <div className="min-h-screen bg-light text-dark font-sans flex flex-col max-w-[390px] mx-auto relative shadow-2xl">
      {/* Header */}
      <header className="bg-white px-5 pt-8 pb-4 sticky top-0 z-10 border-b border-dark/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-dark/5 rounded-full transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-dark flex items-center gap-2">
              <CalendarClock size={20} className="text-primary" /> Exam Tracker
            </h1>
          </div>
        </div>
        <button 
          onClick={() => fetchData(true)}
          className="text-xs font-bold text-primary hover:bg-primary/10 px-3 py-1.5 rounded-full transition-colors"
        >
          Refresh
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-5 pb-24 space-y-6">
        
        {isLoading && !data && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Loader2 size={40} className="animate-spin text-primary mb-4" />
            <h3 className="text-lg font-bold">Scanning Exam Deadlines...</h3>
            <p className="text-sm text-dark/60 max-w-[250px] mt-2">
              Our AI is searching for cross-stream opportunities and verifying state quotas.
            </p>
          </div>
        )}

        {errorMsg && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium">
            {errorMsg}
          </div>
        )}

        {data && !isLoading && (
          <>
            {/* Overview Card */}
            <div className="bg-gradient-to-br from-primary to-[#5a4add] text-white p-5 rounded-2xl shadow-lg">
              <div className="text-sm opacity-90 mb-1 font-medium uppercase tracking-wider">{data.stream}</div>
              <div className="text-2xl font-black mb-3">Hi {data.studentName?.split(' ')[0] || 'There'}</div>
              <div className="flex items-center gap-4 bg-white/10 rounded-xl p-3">
                <div className="flex-1">
                  <div className="text-xs opacity-80 uppercase tracking-wider font-bold">Tracking</div>
                  <div className="text-xl font-bold">{data.totalExamsFound} Exams</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="flex-1">
                  <div className="text-xs opacity-80 uppercase tracking-wider font-bold">Updated</div>
                  <div className="text-sm font-bold mt-1 max-w-[90px] truncate">{data.generatedAt}</div>
                </div>
              </div>
            </div>

            {/* Upgrade Banner for Non-Premium */}
            {!userProfile?.isPremium && (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-4 rounded-2xl flex items-start gap-3 shadow-sm mt-4">
                <ShieldAlert size={24} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-dark text-sm">Free Tier Limit Reached</h3>
                  <p className="text-xs text-dark/70 mt-1 mb-2">
                    You are currently tracking a maximum of 5 exams. Upgrade to Anti Gravity+ (CareerDisha+) to track unlimited exams and never miss a deadline.
                  </p>
                  <button className="text-xs font-bold bg-orange-100 text-orange-700 px-3 py-1.5 rounded-lg hover:bg-orange-200 transition-colors">
                    Upgrade Now
                  </button>
                </div>
              </div>
            )}

            {/* Primary Exams */}
            {data.primaryExams && data.primaryExams.length > 0 && (
              <section className="space-y-3 pt-4">
                <h2 className="text-lg font-bold text-dark flex items-center gap-2">
                  <Navigation size={18} className="text-primary" /> Tracking Core Exams
                </h2>
                <div className="space-y-3">
                  {data.primaryExams.map((exam: any, idx: number) => (
                    <div key={idx} className="bg-white border border-dark/5 rounded-2xl p-4 shadow-sm">
                      <div className="text-[10px] font-black text-primary uppercase mb-1 tracking-wider flex justify-between">
                        <span>{exam.examType}</span>
                        {exam.dates?.isDateConfirmed ? (
                          <span className="text-green-600 bg-green-50 px-1.5 py-0.5 rounded">Confirmed</span>
                        ) : (
                          <span className="text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded">Tentative</span>
                        )}
                      </div>
                      <h3 className="font-bold text-dark mb-1">{exam.name}</h3>
                      <div className="text-xs text-dark/60 mb-3 leading-snug">{exam.whyRelevant}</div>
                      
                      <div className={cn(
                        "p-3 rounded-xl mb-3 flex items-center justify-between",
                        exam.countdown?.applicationStatus === 'URGENT' ? "bg-red-50 text-red-700" :
                        exam.countdown?.applicationStatus === 'OPEN' ? "bg-green-50 text-green-700" :
                        "bg-blue-50 text-blue-700"
                      )}>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold opacity-80">Application Deadline</span>
                          <span className="font-bold text-sm">{exam.dates?.applicationCloseDate}</span>
                        </div>
                        <div className="font-black text-xl text-right">
                          {exam.countdown?.applicationDaysLeft} <span className="text-xs font-normal">days left</span><br/>
                          <span className="text-[10px] uppercase opacity-80">{exam.dates?.examDate}</span>
                        </div>
                      </div>

                      {exam.categoryBenefit && (
                         <div className="bg-purple-50 text-purple-800 p-2 rounded-lg text-xs font-medium mb-3 border border-purple-100 italic">
                           🚀 {exam.categoryBenefit}
                         </div>
                      )}
                      
                      <div className="flex items-center justify-between text-[11px] pt-2 border-t border-dark/5">
                        <span className="text-dark/80 font-bold tracking-wide">FEE: {exam.fees?.studentFee || "TBD"}</span>
                        <a href={exam.officialWebsite?.startsWith('http') ? exam.officialWebsite : `https://${exam.officialWebsite}`} target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline py-1 px-2 bg-primary/10 rounded">
                          Official Site
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Summary Message */}
            {data.summaryMessage && (
              <div className="mt-8 mb-4 p-4 bg-primary/10 text-primary border border-primary/20 rounded-2xl italic text-sm font-medium leading-relaxed">
                {data.summaryMessage}
              </div>
            )}

          </>
        )}
      </main>
    </div>
  );
}
