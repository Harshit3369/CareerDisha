import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Loader2, Plus, Trash2, CheckCircle, Download, BookOpen, Target, Award, Info, AlertTriangle, Lightbulb, Map, BookmarkPlus, BookmarkCheck } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GoogleGenAI, Type } from '@google/genai';
import { doc, setDoc, getDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

interface DegreeEntry {
  id: string;
  type: string;
  field: string;
  institution: string;
  score: string;
  status: 'Completed' | 'Pursuing' | 'Planned';
}

interface RoadmapData {
  profileSummary: string;
  careerFitScores: {
    goal: string;
    score: number;
    reason: string;
    caveat: string;
  }[];
  primaryPath: {
    goalTitle: string;
    phases: {
      name: string;
      timeline: string;
      actions: string[];
      exams: string[];
      salary: string;
    }[];
  };
  alternativePath: {
    goalTitle: string;
    milestones: {
      phase: string;
      timeline: string;
      actions: string[];
      salary: string;
    }[];
  };
  gaps: {
    gap: string;
    severity: string;
    fix: string;
  }[];
  quickWins: {
    action: string;
    detail: string;
  }[];
  resources: {
    govtSchemes: string[];
    coaching: string[];
    freePlatforms: string[];
    communities: string[];
  };
  motivationalQuote: string;
}

export default function CareerRoadmapScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  
  // Step State
  const [step, setStep] = useState(searchParams.get('id') ? 5 : 1);
  const totalSteps = 4;
  
  // Form Data
  const [score10th, setScore10th] = useState('');
  const [board10th, setBoard10th] = useState('CBSE');
  
  const [score12th, setScore12th] = useState('');
  const [stream12th, setStream12th] = useState('Science PCM');
  const [board12th, setBoard12th] = useState('CBSE');
  const [skipped12th, setSkipped12th] = useState(false);
  
  const [degrees, setDegrees] = useState<DegreeEntry[]>([{
    id: '1',
    type: 'B.Tech',
    field: '',
    institution: '',
    score: '',
    status: 'Pursuing'
  }]);
  
  const [careerGoals, setCareerGoals] = useState(searchParams.get('goal') || '');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [roadmap, setRoadmap] = useState<RoadmapData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFetchingBookmarked, setIsFetchingBookmarked] = useState(!!searchParams.get('id'));

  useEffect(() => {
    const roadmapId = searchParams.get('id');
    if (!roadmapId) return;
    
    // Set step to 5 immediately so we don't show the form if an ID is present
    setStep(5);

    if (!user) return; // Wait for user to be available

    const fetchRoadmap = async () => {
      setIsFetchingBookmarked(true);
      
      try {
        const docRef = doc(db, 'users', user.uid, 'roadmaps', roadmapId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const rData = JSON.parse(docSnap.data().content) as RoadmapData;
          setRoadmap(rData);
          setIsSaved(true);
        } else {
          alert('Saved roadmap not found.');
          setStep(1);
        }
      } catch (err: any) {
        if (err.code === 'permission-denied') {
          handleFirestoreError(err, OperationType.GET, `users/${user.uid}/roadmaps/${roadmapId}`);
        }
        console.error('Error fetching bookmarked roadmap:', err);
        setStep(1);
      } finally {
        setIsFetchingBookmarked(false);
      }
    };
    
    fetchRoadmap();
  }, [searchParams, user]);

  const handleAddDegree = () => {
    setDegrees(prev => [...prev, {
      id: Date.now().toString(),
      type: 'Degree',
      field: '',
      institution: '',
      score: '',
      status: 'Planned'
    }]);
  };

  const handleRemoveDegree = (id: string) => {
    setDegrees(prev => prev.filter(d => d.id !== id));
  };

  const handleDegreeChange = (id: string, field: keyof DegreeEntry, value: string) => {
    setDegrees(prev => prev.map(d => d.id === id ? { ...d, [field]: value } : d));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setRoadmap(null);
    setStep(5); // Generating/Result step
    
    try {
      const profileInfo = `
        10th: ${score10th}% (${board10th})
        12th: ${skipped12th ? 'Not provided/skipped' : `${score12th}% (${stream12th}, ${board12th})`}
        Degrees: ${JSON.stringify(degrees.map(d => `${d.type} in ${d.field} at ${d.institution} - ${d.score} (${d.status})`))}
        Career Goals: ${careerGoals}
      `;

      const instruction = `
You are an expert Indian Career Advisor. Generate a highly personalized career roadmap based on this student profile.
Respond ONLY with valid JSON exactly matching this structure. Always provide detailed strings. Make it inspiring and completely relevant to Indian pathways, exams, and salaries (in INR/LPA).
      `.trim();

      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Student Profile:\n${profileInfo}`,
          systemInstruction: instruction,
          schema: {
            type: "object",
            properties: {
              profileSummary: { type: "string" },
              careerFitScores: {
                type: "array",
                items: {
                  type: "object",
                  properties: { goal: { type: "string" }, score: { type: "number" }, reason: { type: "string" }, caveat: { type: "string" } },
                  required: ["goal", "score", "reason", "caveat"]
                }
              },
              primaryPath: {
                type: "object",
                properties: {
                  goalTitle: { type: "string" },
                  phases: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: { name: { type: "string" }, timeline: { type: "string" }, actions: { type: "array", items: { type: "string" } }, exams: { type: "array", items: { type: "string" } }, salary: { type: "string" } },
                      required: ["name", "timeline", "actions", "exams", "salary"]
                    }
                  }
                },
                required: ["goalTitle", "phases"]
              },
              alternativePath: {
                type: "object",
                properties: {
                  goalTitle: { type: "string" },
                  milestones: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: { phase: { type: "string" }, timeline: { type: "string" }, actions: { type: "array", items: { type: "string" } }, salary: { type: "string" } },
                      required: ["phase", "timeline", "actions", "salary"]
                    }
                  }
                },
                required: ["goalTitle", "milestones"]
              },
              gaps: {
                type: "array",
                items: {
                  type: "object",
                  properties: { gap: { type: "string" }, severity: { type: "string" }, fix: { type: "string" } },
                  required: ["gap", "severity", "fix"]
                }
              },
              quickWins: {
                type: "array",
                items: {
                  type: "object",
                  properties: { action: { type: "string" }, detail: { type: "string" } },
                  required: ["action", "detail"]
                }
              },
              resources: {
                type: "object",
                properties: {
                  govtSchemes: { type: "array", items: { type: "string" } },
                  coaching: { type: "array", items: { type: "string" } },
                  freePlatforms: { type: "array", items: { type: "string" } },
                  communities: { type: "array", items: { type: "string" } }
                },
                required: ["govtSchemes", "coaching", "freePlatforms", "communities"]
              },
              motivationalQuote: { type: "string" }
            },
            required: ["profileSummary", "careerFitScores", "primaryPath", "alternativePath", "gaps", "quickWins", "resources", "motivationalQuote"]
          }
        })
      });
      
      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      setRoadmap(data);
      setIsSaved(false);
    } catch (err: any) {
      console.error(err);
      // Fallback
      setRoadmap({
        profileSummary: "A dedicated student planning to transition their academic background into a successful career aligned with their aspirations.",
        careerFitScores: [
          { goal: careerGoals.split(',')[0] || "Target Role", score: 8, reason: "Good alignment with your analytical skills.", caveat: "Requires upskilling in specific tools." }
        ],
        primaryPath: {
          goalTitle: careerGoals.split(',')[0] || "Primary Goal",
          phases: [
            { name: "Phase 1: Foundation", timeline: "6-12 Months", actions: ["Complete core certification", "Build basic portfolio"], exams: ["Relevant Basic Exam"], salary: "Entry Level" },
            { name: "Phase 2: Growth", timeline: "1-2 Years", actions: ["Secure junior position", "Specialize in niche skill"], exams: ["Advanced Cert"], salary: "Mid Level" }
          ]
        },
        alternativePath: {
          goalTitle: "Alternative Goal",
          milestones: [
            { phase: "Skill building", timeline: "6 Months", actions: ["Take beginner courses"], salary: "-" },
            { phase: "Job search", timeline: "3 Months", actions: ["Apply for internships"], salary: "Entry Level" }
          ]
        },
        gaps: [
          { gap: "Lack of practical experience", severity: "Medium", fix: "Undertake internships or freelance projects." }
        ],
        quickWins: [
          { action: "Update Resume", detail: "Highlight your recent academic achievements and projects." }
        ],
        resources: {
          govtSchemes: ["National Career Service (NCS)", "PMKVY"],
          coaching: ["Local institutes", "Online platforms"],
          freePlatforms: ["NPTEL", "Swayam", "YouTube"],
          communities: ["LinkedIn groups", "Reddit communities"]
        },
        motivationalQuote: "The expert in anything was once a beginner."
      });
      setIsSaved(false);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveRoadmap = async () => {
    if (!user || !roadmap || isSaving || isSaved) return;
    
    setIsSaving(true);
    try {
      const roadmapId = Date.now().toString();
      const roadmapRef = doc(db, 'users', user.uid, 'roadmaps', roadmapId);
      
      await setDoc(roadmapRef, {
        title: roadmap.primaryPath.goalTitle,
        content: JSON.stringify(roadmap),
        createdAt: serverTimestamp()
      });
      setIsSaved(true);
    } catch (err: any) {
      if (err.code === 'permission-denied') {
        handleFirestoreError(err, OperationType.WRITE, `users/${user.uid}/roadmaps`);
      }
      console.error('Error saving roadmap:', err);
      alert('Failed to save roadmap. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  // ---------------------------------------------------------
  // RENDER: FORM STEPS
  // ---------------------------------------------------------
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Let's start with your 10th details.</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-dark/70 mb-2">10th Score (%)</label>
                <input type="number" placeholder="e.g. 85" value={score10th} onChange={e => setScore10th(e.target.value)} className="w-full bg-light border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-[#7C6FF7]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-dark/70 mb-2">Board</label>
                <select value={board10th} onChange={e => setBoard10th(e.target.value)} className="w-full bg-light border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-[#7C6FF7]">
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                </select>
              </div>
            </div>
            <button disabled={!score10th} onClick={() => setStep(2)} className="w-full bg-dark text-light py-4 rounded-full font-bold shadow-lg disabled:opacity-50">Next Step</button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Now, your 12th standard details.</h2>
            <div className="space-y-4">
              <button 
                onClick={() => { setSkipped12th(true); setStep(3); }}
                className="w-full p-4 border border-dashed border-dark/20 rounded-xl text-dark/60 font-medium hover:bg-dark/5"
              >
                Skip — I haven't completed 12th
              </button>
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-dark/10"></div>
                <span className="flex-shrink-0 mx-4 text-dark/30 text-xs font-bold uppercase">or fill details</span>
                <div className="flex-grow border-t border-dark/10"></div>
              </div>
              <div>
                <label className="block text-sm font-bold text-dark/70 mb-2">12th Score (%)</label>
                <input type="number" placeholder="e.g. 78" value={score12th} onChange={e => setScore12th(e.target.value)} className="w-full bg-light border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-[#7C6FF7]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-dark/70 mb-2">Stream</label>
                <select value={stream12th} onChange={e => setStream12th(e.target.value)} className="w-full bg-light border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-[#7C6FF7]">
                  <option>Science PCM</option>
                  <option>Science PCB</option>
                  <option>Commerce</option>
                  <option>Humanities</option>
                  <option>Vocational</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep(1)} className="px-6 bg-light border border-dark/10 text-dark py-4 rounded-full font-bold shadow-sm">Back</button>
              <button disabled={!score12th} onClick={() => { setSkipped12th(false); setStep(3); }} className="flex-1 bg-dark text-light py-4 rounded-full font-bold shadow-lg disabled:opacity-50">Next Step</button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">Tell us about your Degrees/Diplomas.</h2>
            <div className="space-y-4">
              {degrees.map((degree, idx) => (
                <div key={degree.id} className="bg-light p-4 rounded-2xl border border-dark/5 shadow-sm space-y-3 relative group">
                  {degrees.length > 1 && (
                    <button onClick={() => handleRemoveDegree(degree.id)} className="absolute top-2 right-2 p-2 text-red-500 bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 size={16} />
                    </button>
                  )}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-dark/60 mb-1">Type</label>
                      <select value={degree.type} onChange={e => handleDegreeChange(degree.id, 'type', e.target.value)} className="w-full bg-light border border-dark/5 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7C6FF7]">
                        <option>B.Tech</option>
                        <option>B.Com</option>
                        <option>B.Sc</option>
                        <option>B.A</option>
                        <option>BCA</option>
                        <option>BBA</option>
                        <option>Diploma</option>
                        <option>Masters</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-dark/60 mb-1">Status</label>
                      <select value={degree.status} onChange={e => handleDegreeChange(degree.id, 'status', e.target.value as any)} className="w-full bg-light border border-dark/5 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7C6FF7]">
                        <option>Completed</option>
                        <option>Pursuing</option>
                        <option>Planned</option>
                      </select>
                    </div>
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-dark/60 mb-1">Field of Study</label>
                     <input type="text" placeholder="e.g. Computer Science" value={degree.field} onChange={e => handleDegreeChange(degree.id, 'field', e.target.value)} className="w-full bg-light border border-dark/5 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7C6FF7]" />
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-dark/60 mb-1">Institution</label>
                     <input type="text" placeholder="e.g. Delhi University" value={degree.institution} onChange={e => handleDegreeChange(degree.id, 'institution', e.target.value)} className="w-full bg-light border border-dark/5 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7C6FF7]" />
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-dark/60 mb-1">Score / CGPA</label>
                     <input type="text" placeholder="e.g. 8.5 CGPA" value={degree.score} onChange={e => handleDegreeChange(degree.id, 'score', e.target.value)} className="w-full bg-light border border-dark/5 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7C6FF7]" />
                  </div>
                </div>
              ))}
              
              <button onClick={handleAddDegree} className="w-full p-4 border border-dashed border-primary/30 bg-primary/5 text-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
                <Plus size={18} /> Add Another Degree
              </button>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep(2)} className="px-6 bg-light border border-dark/10 text-dark py-4 rounded-full font-bold shadow-sm">Back</button>
              <button onClick={() => setStep(4)} className="flex-1 bg-dark text-light py-4 rounded-full font-bold shadow-lg">Next Step</button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <h2 className="text-2xl font-bold text-dark">What are your career goals?</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-dark/70 mb-2">Target Roles, Aspirations, Skills</label>
                <textarea 
                  rows={4}
                  placeholder="e.g. Software Engineer at MAANG, Data Scientist, or planning for UPSC..." 
                  value={careerGoals} 
                  onChange={e => setCareerGoals(e.target.value)} 
                  className="w-full bg-light border border-dark/10 rounded-xl px-4 py-3 text-dark focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] resize-none" 
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {['Software Engineer', 'Data Scientist', 'IAS Officer', 'Investment Banker', 'CA', 'Doctor', 'Product Manager'].map(role => (
                  <button 
                    key={role} 
                    onClick={() => setCareerGoals(prev => prev ? `${prev}, ${role}` : role)}
                    className="px-3 py-1.5 bg-light border border-dark/10 rounded-full text-xs font-bold text-dark/70 hover:border-primary hover:text-primary"
                  >
                    + {role}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#7C6FF7]/10 to-[#F5A623]/10 p-4 rounded-2xl border border-dark/5 flex gap-3">
              <Info size={24} className="text-primary shrink-0" />
              <p className="text-xs text-dark/80 leading-relaxed font-medium">Ready? Our AI will analyze your academic background against your goals and generate a complete roadmap to success.</p>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setStep(3)} className="px-6 bg-light border border-dark/10 text-dark py-4 rounded-full font-bold shadow-sm">Back</button>
              <button disabled={!careerGoals.trim()} onClick={handleGenerate} className="flex-1 bg-gradient-to-r from-[#7C6FF7] to-[#F5A623] text-[#FFFFFF] py-4 rounded-full font-bold shadow-lg disabled:opacity-50">Generate Roadmap</button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-sans flex flex-col relative print:bg-light print:p-0">
      
      {/* Top Navigation - hidden when generating or viewing roadmap */}
      {step < 5 && (
        <div className="pt-10 pb-4 px-6 flex justify-between items-center sticky top-0 z-30 bg-[var(--color-bg)]/80 backdrop-blur-md print:hidden">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-light rounded-full flex items-center justify-center shadow-sm border border-dark/5 text-dark">
            <ArrowLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className={cn("w-2 h-2 rounded-full transition-colors", s === step ? "bg-dark ring-2 ring-dark/20" : s < step ? "bg-primary" : "bg-dark/10")} />
            ))}
          </div>
          <div className="w-10" />
        </div>
      )}

      {/* Main Content Area */}
      <div className={cn("flex-1 px-6 pb-20 print:px-0 print:pb-0 overflow-y-auto no-scrollbar", step === 5 ? "pt-0 px-0" : "")}>
        <AnimatePresence mode="wait">
          {step < 5 && renderStep()}
          
          {step === 5 && (isGenerating || isFetchingBookmarked) && (
            <motion.div key="generating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center space-y-6 pt-20 px-6 print:hidden">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                <div className="absolute inset-2 bg-accent/20 rounded-full animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 size={40} className="text-dark animate-spin" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-dark">{isFetchingBookmarked ? 'Loading Bookmark...' : 'Crafting your roadmap'}</h3>
                <p className="text-dark/60 font-medium">{isFetchingBookmarked ? 'Fetching your saved roadmap.' : 'Analyzing pathways, exams, and milestones for your goals...'}</p>
              </div>
            </motion.div>
          )}

          {step === 5 && roadmap && (
            <motion.div key="roadmap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[var(--color-bg)] min-h-screen text-dark font-sans pb-10 print:bg-light print:pb-0">
              
              {/* Toolbar */}
              <div className="px-6 py-4 flex justify-between items-center bg-light border-b border-dark/5 sticky top-0 z-50 print:hidden">
                <div />
                <div className="flex gap-2">
                  <button 
                    onClick={handleSaveRoadmap} 
                    disabled={isSaving || isSaved}
                    className={cn(
                      "flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full shadow-md transition-colors",
                      isSaved ? "bg-green-500 text-light" : "bg-dark text-light hover:bg-dark/80",
                      isSaving && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSaving ? <Loader2 size={16} className="animate-spin" /> : 
                     isSaved ? <BookmarkCheck size={16} /> : <BookmarkPlus size={16} />} 
                    {isSaved ? 'Saved to Profile' : 'Save Roadmap'}
                  </button>
                </div>
              </div>

              {/* 1. Header Banner */}
              <div className="bg-gradient-to-r from-[#1A1A2E] to-[#2A2A4E] text-[#FFFFFF] p-8 relative overflow-hidden print:bg-none print:text-dark">
                <div className="absolute right-0 top-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 print:hidden" />
                <div className="relative z-10">
                    <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Career Suggestor Intelligence</p>
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 tracking-tight text-[#FFFFFF] print:text-dark">Your Personalized<br/>Career Roadmap</h1>
                  <p className="text-[#FFFFFF]/80 max-w-xl leading-relaxed print:text-dark/80">{roadmap.profileSummary}</p>
                </div>
              </div>

              <div className="p-4 md:p-8 space-y-6 md:space-y-8 max-w-5xl mx-auto">
                
                {/* 2 & 3. Career Fit Scores */}
                <section>
                  <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Target size={24} className="text-primary" /> Career Fit Scores</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {roadmap.careerFitScores.map((fit, idx) => (
                      <div key={idx} className="bg-light p-5 rounded-3xl border border-dark/5 shadow-sm relative overflow-hidden">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-bold text-lg leading-tight w-[60%]">{fit.goal}</h3>
                          
                          {/* Circle Progress */}
                          <div className="relative w-14 h-14 shrink-0">
                            <svg className="w-14 h-14 transform -rotate-90">
                              <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-[#FFFFFF]" />
                              <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="6" fill="transparent" 
                                strokeDasharray={150.8} 
                                strokeDashoffset={150.8 - (150.8 * fit.score) / 10} 
                                className={fit.score >= 8 ? 'text-green-500' : fit.score >= 5 ? 'text-accent' : 'text-red-500'} 
                                strokeLinecap="round" 
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">{fit.score}</div>
                          </div>
                        </div>
                        <p className="text-sm text-dark/70 mb-3">{fit.reason}</p>
                        <div className="bg-light p-3 rounded-xl border border-dark/5 text-xs text-dark/60 italic border-l-4 border-l-[#F5A623]">
                          Note: {fit.caveat}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 4. Recommended Roadmap */}
                <section>
                  <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Map size={24} className="text-dark" /> Recommended Path: {roadmap.primaryPath.goalTitle}</h2>
                  <div className="overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex flex-col md:flex-row gap-4 min-w-[max-content]">
                      {roadmap.primaryPath.phases.map((phase, idx) => (
                        <div key={idx} className="bg-light p-5 rounded-[24px] border border-dark/5 shadow-sm w-[280px] shrink-0 relative">
                          <div className="absolute top-0 left-6 w-1 h-full bg-dark/5 -z-10 print:hidden" />
                          <div className="bg-primary/15 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3 border border-primary/20">
                            {phase.timeline}
                          </div>
                          <h3 className="font-bold text-dark text-lg mb-3">{phase.name}</h3>
                          <ul className="space-y-2 mb-4">
                            {phase.actions.map((act, i) => (
                              <li key={i} className="text-sm text-dark/80 flex leading-tight">
                                <span className="mr-2 text-primary">•</span> {act}
                              </li>
                            ))}
                          </ul>
                          {phase.exams.length > 0 && (
                            <div className="mb-4">
                              <span className="text-xs font-bold block mb-1">Key Exams/Certs:</span>
                              <div className="flex flex-wrap gap-1">
                                {phase.exams.map((ex, i) => (
                                  <span key={i} className="bg-dark/10 text-xs px-2 py-1 rounded-md text-dark/70">{ex}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          <div className="mt-auto pt-4 border-t border-dark/5">
                            <span className="text-xs text-dark/50 font-medium block">Expected Salary</span>
                            <span className="font-bold text-dark">{phase.salary}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 5. Alternative Path */}
                <section>
                  <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Map size={24} className="text-dark/40" /> Plan B: {roadmap.alternativePath.goalTitle}</h2>
                  <div className="bg-light rounded-3xl p-5 border border-dark/5 shadow-sm">
                    <div className="flex flex-col gap-6 relative">
                      {roadmap.alternativePath.milestones.map((ms, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-4 items-start relative pb-6 border-b border-dark/5 last:border-0 last:pb-0">
                          <div className="w-full md:w-1/4 shrink-0">
                            <span className="text-sm font-bold text-accent block">{ms.timeline}</span>
                            <span className="text-lg font-bold text-dark block">{ms.phase}</span>
                          </div>
                          <div className="w-full md:w-2/4 text-sm text-dark/80">
                            <ul className="space-y-1">
                              {ms.actions.map((a, i) => <li key={i}>• {a}</li>)}
                            </ul>
                          </div>
                          <div className="w-full md:w-1/4 md:text-right">
                            <span className="text-xs text-dark/50 font-medium block">Expected</span>
                            <span className="font-bold text-dark">{ms.salary}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 6. Honest Gaps */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-accent/15 rounded-3xl p-6 border border-accent/20">
                    <h2 className="text-lg font-bold flex items-center gap-2 mb-4 text-accent"><AlertTriangle size={20} /> Honest Gaps</h2>
                    <div className="space-y-4">
                      {roadmap.gaps.map((gap, idx) => (
                        <div key={idx} className="bg-light/60 p-4 rounded-xl">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-bold text-dark">{gap.gap}</span>
                            <span className={cn("text-[10px] font-bold px-2 py-1 rounded-md uppercase", gap.severity === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-700')}>{gap.severity}</span>
                          </div>
                          <p className="text-sm text-dark/70"><strong>Fix:</strong> {gap.fix}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-primary/15 rounded-3xl p-6 border border-primary/20">
                    <h2 className="text-lg font-bold flex items-center gap-2 mb-4 text-primary"><Lightbulb size={20} /> Quick Wins</h2>
                    <div className="space-y-4">
                      {roadmap.quickWins.map((win, idx) => (
                        <div key={idx} className="bg-light/60 p-4 rounded-xl flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-primary text-light flex items-center justify-center font-bold text-xs shrink-0">{idx + 1}</div>
                          <div>
                            <span className="font-bold text-dark block">{win.action}</span>
                            <p className="text-sm text-dark/70">{win.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 8. India Resources */}
                <section>
                  <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><BookOpen size={24} className="text-dark" /> Helpful Resources</h2>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="bg-light p-4 rounded-2xl border border-dark/5">
                        <h4 className="font-bold text-sm text-primary mb-2">Govt Schemes</h4>
                        <ul className="text-xs space-y-2 text-dark/70">{roadmap.resources.govtSchemes.map((r,i) => <li key={i}>• {r}</li>)}</ul>
                     </div>
                     <div className="bg-light p-4 rounded-2xl border border-dark/5">
                        <h4 className="font-bold text-sm text-accent mb-2">Coaching/Prep</h4>
                        <ul className="text-xs space-y-2 text-dark/70">{roadmap.resources.coaching.map((r,i) => <li key={i}>• {r}</li>)}</ul>
                     </div>
                     <div className="bg-light p-4 rounded-2xl border border-dark/5">
                        <h4 className="font-bold text-sm text-green-600 mb-2">Free Platforms</h4>
                        <ul className="text-xs space-y-2 text-dark/70">{roadmap.resources.freePlatforms.map((r,i) => <li key={i}>• {r}</li>)}</ul>
                     </div>
                     <div className="bg-light p-4 rounded-2xl border border-dark/5">
                        <h4 className="font-bold text-sm text-blue-600 mb-2">Communities</h4>
                        <ul className="text-xs space-y-2 text-dark/70">{roadmap.resources.communities.map((r,i) => <li key={i}>• {r}</li>)}</ul>
                     </div>
                   </div>
                </section>

                {/* 9. Motivational Footer */}
                <div className="bg-gradient-to-r from-[#7C6FF7] to-[#F5A623] text-[#FFFFFF] p-8 rounded-3xl text-center shadow-lg relative overflow-hidden mt-8">
                  <div className="relative z-10">
                    <p className="text-2xl font-serif italic mb-4">"{roadmap.motivationalQuote}"</p>
                    <p className="font-bold tracking-widest uppercase text-sm mb-8">We believe in you • Career Suggestor</p>
                    
                    {!isSaved ? (
                      <button 
                        onClick={handleSaveRoadmap}
                        disabled={isSaving}
                        className="mx-auto flex items-center justify-center gap-2 bg-light text-dark px-8 py-4 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                      >
                        {isSaving ? <Loader2 size={24} className="animate-spin" /> : <Download size={24} />}
                        Save Roadmap to Profile
                      </button>
                    ) : (
                      <div className="mx-auto inline-flex items-center justify-center gap-2 bg-light/20 backdrop-blur-sm text-light px-8 py-4 rounded-full font-black text-lg border border-light/30">
                        <CheckCircle size={24} className="text-green-300" />
                        Roadmap Saved
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
