import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, Sparkles, Lock, Crown, ChevronDown, ChevronUp,
  GraduationCap, IndianRupee, Building2, Users, MessageSquareQuote,
  Target, Clock, Zap, X, Heart, Globe, Plane, AlertTriangle,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import confetti from 'canvas-confetti';
import type { LifePathsResponse, LifePathData } from '../types/lifePaths';

/* ─── Gradient maps ─── */
const PATH_STYLES: Record<string, { gradient: string; glow: string; bg: string; border: string }> = {
  A: { gradient: 'from-emerald-500 to-teal-600', glow: 'rgba(16,185,129,0.35)', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  B: { gradient: 'from-blue-500 to-indigo-600', glow: 'rgba(99,102,241,0.35)', bg: 'bg-blue-50', border: 'border-blue-200' },
  C: { gradient: 'from-orange-500 to-red-600', glow: 'rgba(239,68,68,0.35)', bg: 'bg-orange-50', border: 'border-orange-200' },
  D: { gradient: 'from-purple-500 to-pink-600', glow: 'rgba(168,85,247,0.35)', bg: 'bg-purple-50', border: 'border-purple-200' },
};

/* ─── College mini card ─── */
function CollegeCard({ college }: { college: LifePathData['colleges'][0] }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-dark/5 space-y-2.5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h5 className="font-bold text-dark text-sm leading-tight">{college.name}</h5>
          <p className="text-[11px] text-dark/50 font-medium">{college.location} · {college.course}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-xs font-black text-primary">{college.placementMedian}</div>
          <div className="text-[10px] text-dark/40">median</div>
        </div>
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
          <IndianRupee className="inline w-2.5 h-2.5" /> {college.annualFee}/yr
        </span>
        {college.topRecruiters.slice(0, 3).map((r) => (
          <span key={r} className="text-[10px] font-bold bg-dark/5 text-dark/50 px-2 py-0.5 rounded-full">{r}</span>
        ))}
      </div>
      {college.hostelNote && (
        <p className="text-[11px] text-dark/50 italic leading-snug">🏠 {college.hostelNote}</p>
      )}
      <div className="bg-dark/[0.02] rounded-xl p-2.5 border border-dark/5">
        <p className="text-[11px] text-dark/60 font-medium leading-snug">
          <MessageSquareQuote className="inline w-3 h-3 mr-1 text-primary/50" />
          "{college.studentQuote}"
        </p>
      </div>
    </div>
  );
}

/* ─── Exam badge ─── */
function ExamBadge({ exam }: { exam: LifePathData['exams'][0] }) {
  const isUrgent = exam.daysLeft <= 30;
  const isNear = exam.daysLeft <= 60;
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl border ${isUrgent ? 'bg-red-50 border-red-200' : isNear ? 'bg-amber-50 border-amber-200' : 'bg-dark/[0.02] border-dark/5'}`}>
      <div className="flex-1">
        <h5 className="font-bold text-dark text-sm">{exam.name}</h5>
        <p className="text-[10px] text-dark/40">{exam.deadline} · {exam.prepTime}</p>
      </div>
      <div className="text-right">
        <div className={`text-lg font-black ${isUrgent ? 'text-red-600' : isNear ? 'text-amber-600' : 'text-green-600'}`}>
          {exam.daysLeft}<span className="text-[10px] font-bold">d</span>
        </div>
        <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full ${
          exam.priority === 'high' ? 'bg-red-100 text-red-700' :
          exam.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
          'bg-green-100 text-green-700'
        }`}>{exam.priority}</span>
      </div>
    </div>
  );
}

/* ─── Country card (abroad) ─── */
function CountryCard({ country }: { country: NonNullable<LifePathData['countryBreakdown']>[0] }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-dark/5 space-y-2">
      <div className="flex items-center gap-2">
        <Globe size={16} className="text-purple-500" />
        <h5 className="font-bold text-dark">{country.country}</h5>
      </div>
      <div className="flex flex-wrap gap-1">
        {country.topUniversities.map((u) => (
          <span key={u} className="text-[10px] font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full">{u}</span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div><span className="text-dark/40 font-bold">Cost:</span> <span className="text-dark/70 font-medium">{country.estimatedCost}</span></div>
        <div><span className="text-dark/40 font-bold">Visa:</span> <span className="text-dark/70 font-medium">{country.visaReality}</span></div>
      </div>
      <p className="text-[11px] text-dark/50 italic">💡 {country.scholarshipNote}</p>
    </div>
  );
}

/* ─── Path Card (the big one) ─── */
function LifePathCard({
  path,
  isCommitted,
  isPremiumUser,
  hasFreeCommitment,
  onCommit,
}: {
  path: LifePathData;
  isCommitted: boolean;
  isPremiumUser: boolean;
  hasFreeCommitment: boolean;
  onCommit: (path: LifePathData) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const style = PATH_STYLES[path.id] || PATH_STYLES.A;
  const isLocked = path.isPremium && !isPremiumUser;
  const cantCommit = !isPremiumUser && hasFreeCommitment && !isCommitted;

  return (
    <motion.div
      layout
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Timeline connector dot */}
      <div className="absolute -left-[29px] top-6 w-4 h-4 rounded-full bg-white border-4 border-dark/10 z-10" />
      {isCommitted && (
        <motion.div
          className="absolute -left-[29px] top-6 w-4 h-4 rounded-full z-10"
          style={{ background: style.glow }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <div className={`rounded-3xl overflow-hidden border-2 transition-all duration-300 ${
        isCommitted ? `${style.border} shadow-xl` : isLocked ? 'border-dark/10 opacity-70' : 'border-dark/5 shadow-sm hover:shadow-md'
      }`}>
        {/* Lock overlay */}
        {isLocked && (
          <div className="absolute inset-0 bg-dark/5 backdrop-blur-[2px] z-20 rounded-3xl flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 bg-dark/10 rounded-full flex items-center justify-center">
              <Lock size={20} className="text-dark/40" />
            </div>
            <span className="text-xs font-bold text-dark/50 flex items-center gap-1">
              <Crown size={12} /> Premium — Unlock abroad paths
            </span>
          </div>
        )}

        {/* Header gradient */}
        <div className={`bg-gradient-to-r ${style.gradient} p-5 text-white relative overflow-hidden`}>
          <div className="absolute right-4 top-4 text-4xl opacity-30">{path.emoji}</div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Path {path.id}</span>
              {isCommitted && (
                <span className="text-[9px] font-black bg-white/20 px-2 py-0.5 rounded-full">✓ YOUR PATH</span>
              )}
            </div>
            <h3 className="text-xl font-black leading-tight">{path.title}</h3>
            <p className="text-sm opacity-90 font-medium mt-1">{path.tagline}</p>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white p-5 space-y-4">
          {/* Life preview */}
          <p className="text-sm text-dark/70 leading-relaxed font-medium">{path.lifePreview}</p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className={`${style.bg} rounded-xl p-2.5 text-center`}>
              <div className="text-[10px] font-bold text-dark/40 uppercase">4yr Cost</div>
              <div className="text-sm font-black text-dark">{path.fourYearCost}</div>
            </div>
            <div className={`${style.bg} rounded-xl p-2.5 text-center`}>
              <div className="text-[10px] font-bold text-dark/40 uppercase">Placement</div>
              <div className="text-sm font-black text-dark">{path.placementMedian}</div>
            </div>
            <div className={`${style.bg} rounded-xl p-2.5 text-center`}>
              <div className="text-[10px] font-bold text-dark/40 uppercase">Exams</div>
              <div className="text-sm font-black text-dark">{path.exams.length}</div>
            </div>
          </div>

          {/* Recruiters */}
          <div className="flex flex-wrap gap-1.5">
            <Building2 size={12} className="text-dark/30 mt-0.5" />
            {path.topRecruiters.map((r) => (
              <span key={r} className="text-[10px] font-bold bg-dark/5 text-dark/60 px-2 py-0.5 rounded-full">{r}</span>
            ))}
          </div>

          {/* Reddit-style sentiment */}
          <div className="bg-dark/[0.02] rounded-xl p-3 border border-dark/5">
            <div className="flex items-start gap-2">
              <MessageSquareQuote size={14} className="text-primary/50 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-dark/70 font-medium leading-relaxed italic">"{path.studentSentiment}"</p>
                <p className="text-[10px] text-dark/30 mt-1 font-bold">Student sentiment · based on reviews</p>
              </div>
            </div>
          </div>

          {/* Hostel culture */}
          <p className="text-[11px] text-dark/50 font-medium">🏠 <span className="italic">{path.hostelCulture}</span></p>

          {/* Expand/Collapse button */}
          <button
            onClick={() => !isLocked && setExpanded(!expanded)}
            className="w-full flex items-center justify-center gap-1 text-xs font-bold text-primary py-2 hover:bg-primary/5 rounded-xl transition-colors"
          >
            {expanded ? <><ChevronUp size={14} /> Less detail</> : <><ChevronDown size={14} /> See colleges & exams</>}
          </button>

          {/* Expanded details */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-4"
              >
                {/* Colleges */}
                <div className="space-y-2">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-dark">
                    <GraduationCap size={16} className="text-primary" /> Colleges in this path
                  </h4>
                  {path.colleges.map((c) => <CollegeCard key={c.name} college={c} />)}
                </div>

                {/* Exams */}
                <div className="space-y-2">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-dark">
                    <Target size={16} className="text-primary" /> Required Exams
                  </h4>
                  {path.exams.map((e) => <ExamBadge key={e.name} exam={e} />)}
                </div>

                {/* Country breakdown (abroad path) */}
                {path.countryBreakdown && path.countryBreakdown.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-dark">
                      <Plane size={16} className="text-purple-500" /> Country Breakdown
                    </h4>
                    {path.countryBreakdown.map((c) => <CountryCard key={c.country} country={c} />)}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA button */}
          {!isLocked && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onCommit(path)}
              disabled={isCommitted}
              className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                ${isCommitted
                  ? `bg-gradient-to-r ${style.gradient} text-white shadow-lg`
                  : cantCommit
                    ? 'bg-dark/5 text-dark/30 cursor-not-allowed'
                    : 'bg-dark/5 text-dark hover:bg-primary/10 hover:text-primary cursor-pointer'
                }`}
            >
              {isCommitted ? (
                <><Zap size={16} /> I'm chasing this path</>
              ) : cantCommit ? (
                <><Crown size={14} /> Upgrade to save more paths</>
              ) : (
                <><Heart size={16} /> I want this path</>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Commitment Modal ─── */
function CommitModal({
  path,
  onConfirm,
  onClose,
}: {
  path: LifePathData;
  onConfirm: () => void;
  onClose: () => void;
}) {
  const style = PATH_STYLES[path.id] || PATH_STYLES.A;
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-3xl p-6 w-full max-w-[360px] relative overflow-hidden"
        initial={{ y: 100, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 100, scale: 0.9 }}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-5`} />

        <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:bg-dark/10 rounded-full z-10">
          <X size={20} className="text-dark/40" />
        </button>

        <div className="relative z-10 text-center">
          <motion.div
            className="text-5xl mb-4"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: 1 }}
          >
            {path.emoji}
          </motion.div>

          <h3 className="text-xl font-black text-dark mb-2">
            You want Path {path.id}.
          </h3>
          <p className="text-sm text-dark/60 font-medium mb-1">{path.title}</p>
          <p className="text-xs text-dark/40 mb-2">This will save:</p>

          <div className="bg-dark/[0.02] rounded-xl p-3 text-left text-xs text-dark/60 space-y-1 mb-6 border border-dark/5">
            <p>✓ <strong>{path.colleges.length} colleges</strong> to your tracker</p>
            <p>✓ <strong>{path.exams.length} entrance exams</strong> with deadlines</p>
            <p>✓ Personalized countdown & milestones</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={onConfirm}
            className={`w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${style.gradient} shadow-lg text-base flex items-center justify-center gap-2`}
          >
            <Heart size={18} /> I want this path
          </motion.button>

          <p className="text-[10px] text-dark/30 mt-3">You can change your path anytime</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN SCREEN
   ═══════════════════════════════════════════════════ */

export default function StoryMapScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userProfile, user } = useAuth();
  const isPremium = userProfile?.isPremium ?? false;

  // Get data from navigation state
  const pathsData = (location.state as any)?.pathsData as LifePathsResponse | undefined;
  const storyText = (location.state as any)?.storyText as string | undefined;

  const [committedPathId, setCommittedPathId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingPath, setPendingPath] = useState<LifePathData | null>(null);

  // If no data, redirect back
  useEffect(() => {
    if (!pathsData?.paths?.length) {
      navigate('/my-story', { replace: true });
    }
  }, [pathsData, navigate]);

  const handleCommit = useCallback((path: LifePathData) => {
    setPendingPath(path);
    setShowModal(true);
    if (navigator.vibrate) navigator.vibrate(50);
  }, []);

  const handleConfirmCommitment = useCallback(async () => {
    if (!pendingPath || !user) return;

    setCommittedPathId(pendingPath.id);
    setShowModal(false);

    // Celebrate
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);

    // Save to Firestore
    try {
      const pathDocRef = doc(db, 'users', user.uid, 'lifePaths', pendingPath.id);
      await setDoc(pathDocRef, {
        ...pendingPath,
        storyText,
        committedAt: serverTimestamp(),
      });

      // Update profile with committed path
      const profileRef = doc(db, 'users', user.uid, 'settings', 'profile');
      await setDoc(profileRef, {
        committedPathId: pendingPath.id,
        updatedAt: serverTimestamp(),
      }, { merge: true });
    } catch (err) {
      console.error('Error saving path commitment:', err);
    }
  }, [pendingPath, user, storyText]);

  if (!pathsData?.paths?.length) return null;

  const hasFreeCommitment = committedPathId !== null;

  return (
    <div className="min-h-screen font-sans pb-32 space-y-6">
      {/* Header */}
      <motion.div
        className="flex items-center gap-3 pt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button onClick={() => navigate('/my-story')} className="p-2 -ml-2 hover:bg-dark/5 rounded-full transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-black text-dark tracking-tight flex items-center gap-2">
            <Sparkles size={22} className="text-primary" /> Your Life Paths
          </h1>
          <p className="text-xs text-dark/50 font-medium">Choose your journey. Not a rank — a life.</p>
        </div>
      </motion.div>

      {/* Student summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary to-[#5a4cf0] text-white rounded-2xl p-5 relative overflow-hidden"
      >
        <div className="absolute right-4 top-4 text-4xl opacity-20">🎯</div>
        <div className="relative z-10">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-2">We heard you</p>
          <p className="text-sm font-medium leading-relaxed opacity-95">{pathsData.studentSummary}</p>
        </div>
      </motion.div>

      {/* Free tier indicator */}
      {!isPremium && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3"
        >
          <Crown size={20} className="text-amber-500 shrink-0" />
          <div className="flex-1">
            <p className="text-xs font-bold text-dark">Free: Save 1 path · Premium: All 4 + abroad</p>
            <p className="text-[10px] text-dark/50">Upgrade to see what your profile looks like across 5 countries</p>
          </div>
        </motion.div>
      )}

      {/* Path cards with timeline */}
      <div className="relative pl-6 border-l-2 border-dark/10 space-y-6 ml-2">
        {pathsData.paths.map((path, idx) => (
          <motion.div
            key={path.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
          >
            <LifePathCard
              path={path}
              isCommitted={committedPathId === path.id}
              isPremiumUser={isPremium}
              hasFreeCommitment={hasFreeCommitment}
              onCommit={handleCommit}
            />
          </motion.div>
        ))}
      </div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-start gap-2 text-[11px] text-dark/30 font-medium p-3"
      >
        <AlertTriangle size={14} className="shrink-0 mt-0.5" />
        <p>{pathsData.disclaimer}</p>
      </motion.div>

      {/* Sticky bottom: committed path CTA */}
      <AnimatePresence>
        {committedPathId && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-0 right-0 z-50 px-5 max-w-[390px] mx-auto"
          >
            <button
              onClick={() => navigate('/story-tracker', {
                state: {
                  committedPath: pathsData.paths.find(p => p.id === committedPathId),
                  allPaths: pathsData.paths,
                }
              })}
              className="w-full bg-gradient-to-r from-primary to-[#5a4cf0] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-primary/30"
            >
              <Zap size={16} /> Go to Path Tracker →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Commitment Modal */}
      <AnimatePresence>
        {showModal && pendingPath && (
          <CommitModal
            path={pendingPath}
            onConfirm={handleConfirmCommitment}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
