import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Lock, Sparkles, Target, Clock, CheckCircle2, Circle, ChevronRight, Zap, Trophy, AlertTriangle, Crown, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { PATH_LANES, type PathLaneData } from '../data/pathData';
import confetti from 'canvas-confetti';

/* ─── Particle Canvas ─── */
function ParticleGlow({ color, active }: { color: string; active: boolean }) {
  if (!active) return null;
  return (
    <motion.div
      className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ background: color, filter: `blur(1px)` }}
          initial={{
            x: '50%', y: '50%', opacity: 0, scale: 0
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 1.5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
}

/* ─── Priority Badge ─── */
function PriorityBadge({ priority }: { priority: string }) {
  const styles = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-amber-100 text-amber-700 border-amber-200',
    low: 'bg-green-100 text-green-700 border-green-200',
  };
  return (
    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${styles[priority as keyof typeof styles]}`}>
      {priority}
    </span>
  );
}

/* ─── Progress Segments ─── */
function ProgressBar({ milestones }: { milestones: { completed: boolean }[] }) {
  const completed = milestones.filter(m => m.completed).length;
  const total = milestones.length;
  const pct = total > 0 ? (completed / total) * 100 : 0;
  const labels = ['Exam Prep', 'Application', 'Result', 'Admission'];

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[9px] font-bold text-dark/50 uppercase tracking-wider">
        {labels.map((l, i) => (
          <span key={l} className={i < completed ? 'text-primary' : ''}>{l}</span>
        ))}
      </div>
      <div className="h-2.5 bg-dark/10 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <p className="text-[11px] text-dark/60 font-medium">{completed}/{total} milestones completed</p>
    </div>
  );
}

/* ─── Path Lane Card ─── */
function PathLaneCard({
  path,
  isSelected,
  isPremiumUser,
  onSelect,
}: {
  path: PathLaneData;
  isSelected: boolean;
  isPremiumUser: boolean;
  onSelect: (id: string) => void;
}) {
  const isLocked = path.isPremium && !isPremiumUser;
  const nextExam = path.exams.reduce((a, b) => a.daysLeft < b.daysLeft ? a : b);

  return (
    <motion.div
      layout
      className="relative"
      whileHover={!isLocked ? { scale: 1.02 } : {}}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
    >
      <AnimatePresence>
        <ParticleGlow color={path.glowColor} active={isSelected} />
      </AnimatePresence>

      {/* Glow ring when selected */}
      {isSelected && (
        <motion.div
          className="absolute -inset-1 rounded-[28px] z-0"
          style={{ background: `linear-gradient(135deg, ${path.glowColor}, transparent)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <div
        onClick={() => !isLocked && onSelect(path.id)}
        className={`relative z-10 rounded-3xl p-5 cursor-pointer transition-all duration-300 border-2 overflow-hidden
          ${isSelected
            ? 'bg-white border-primary/40 shadow-xl shadow-primary/10'
            : isLocked
              ? 'bg-dark/5 border-dark/10 opacity-70 cursor-not-allowed'
              : 'bg-white border-dark/5 hover:border-primary/20 shadow-sm hover:shadow-md'
          }`}
      >
        {/* Lock overlay */}
        {isLocked && (
          <div className="absolute inset-0 bg-dark/5 backdrop-blur-[2px] z-20 rounded-3xl flex flex-col items-center justify-center gap-2">
            <div className="w-12 h-12 bg-dark/10 rounded-full flex items-center justify-center">
              <Lock size={20} className="text-dark/40" />
            </div>
            <span className="text-xs font-bold text-dark/50 flex items-center gap-1">
              <Crown size={12} /> Premium Only
            </span>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${path.gradient} flex items-center justify-center text-2xl shadow-lg`}>
              {path.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-primary/60 uppercase tracking-widest">Path {path.id}</span>
                {isSelected && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-[9px] font-black bg-primary text-white px-2 py-0.5 rounded-full"
                  >
                    ACTIVE
                  </motion.span>
                )}
              </div>
              <h3 className="font-bold text-dark text-lg leading-tight">{path.title}</h3>
            </div>
          </div>
        </div>

        <p className="text-xs text-dark/50 font-semibold italic mb-1">"{path.archetype}"</p>
        <p className="text-sm text-dark/70 mb-4 leading-relaxed">{path.description}</p>

        {/* Quick stats */}
        <div className="flex gap-2 mb-3 flex-wrap">
          <div className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Target size={10} /> {path.exams.length} exams
          </div>
          <div className="bg-accent/10 text-accent text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Clock size={10} /> Next in {nextExam.daysLeft}d
          </div>
          <div className="bg-dark/5 text-dark/60 text-[10px] font-bold px-3 py-1 rounded-full">
            {path.colleges.length} colleges
          </div>
        </div>

        {/* CTA */}
        {!isLocked && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => { e.stopPropagation(); onSelect(path.id); }}
            className={`w-full py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all
              ${isSelected
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20'
                : 'bg-dark/5 text-dark hover:bg-primary/10 hover:text-primary'
              }`}
          >
            {isSelected ? (
              <><Zap size={16} /> Chasing This Path</>
            ) : (
              <><ChevronRight size={16} /> I want this path</>
            )}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Commitment Modal ─── */
function CommitmentModal({
  path,
  onConfirm,
  onClose,
}: {
  path: PathLaneData;
  onConfirm: () => void;
  onClose: () => void;
}) {
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
        {/* Glow bg */}
        <div className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-5`} />

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
            You're chasing Path {path.id}.
          </h3>
          <p className="text-sm text-dark/60 font-medium mb-1">Let's make it real.</p>
          <p className="text-xs text-dark/40 mb-6">
            {path.exams.length} exams to track · {path.milestones.length} milestones ahead
          </p>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={onConfirm}
            className={`w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${path.gradient} shadow-lg text-base flex items-center justify-center gap-2`}
          >
            <Sparkles size={18} /> Commit to Path {path.id}
          </motion.button>

          <p className="text-[10px] text-dark/30 mt-3">You can change your path anytime</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Path Tracker Panel ─── */
function PathTrackerPanel({ path }: { path: PathLaneData }) {
  const nextExam = path.exams.reduce((a, b) => a.daysLeft < b.daysLeft ? a : b);
  const isUrgent = nextExam.daysLeft <= 30;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-4"
    >
      {/* Tracker Header */}
      <div className={`rounded-2xl p-5 border-2 ${isUrgent ? 'bg-red-50 border-red-200' : 'bg-primary/5 border-primary/20'}`}>
        <div className="flex items-center gap-2 mb-3">
          <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${isUrgent ? 'bg-red-100 text-red-700' : 'bg-primary/10 text-primary'}`}>
            Path {path.id} Active
          </div>
          <span className="text-xs text-dark/50 font-medium">
            You're {path.exams.length} exams away
          </span>
        </div>

        <div className="bg-white rounded-xl p-4 border border-dark/5">
          <div className="flex items-center gap-2 mb-1">
            {isUrgent && <AlertTriangle size={14} className="text-red-500" />}
            <span className="text-[10px] font-black uppercase text-dark/40 tracking-wider">Next Deadline</span>
          </div>
          <h4 className="font-bold text-dark text-lg">{nextExam.examName}</h4>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-dark/60">Application closes in</span>
            <span className={`text-2xl font-black ${isUrgent ? 'text-red-600' : 'text-primary'}`}>
              {nextExam.daysLeft} <span className="text-xs font-bold">days</span>
            </span>
          </div>
          <PriorityBadge priority={nextExam.priority} />
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-2xl p-5 border border-dark/5">
        <h4 className="font-bold text-dark mb-3 flex items-center gap-2">
          <Trophy size={16} className="text-accent" /> Your Progress
        </h4>
        <ProgressBar milestones={path.milestones} />
      </div>

      {/* All Exams */}
      <div className="bg-white rounded-2xl p-5 border border-dark/5">
        <h4 className="font-bold text-dark mb-4 flex items-center gap-2">
          <Target size={16} className="text-primary" /> Required Exams
        </h4>
        <div className="space-y-3">
          {path.exams.map((exam, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-dark/[0.02] rounded-xl border border-dark/5">
              <div className="flex-1">
                <h5 className="font-bold text-dark text-sm">{exam.examName}</h5>
                <p className="text-[11px] text-dark/50">{exam.preparationTime}</p>
              </div>
              <div className="text-right">
                <div className={`text-lg font-black ${exam.daysLeft <= 30 ? 'text-red-600' : exam.daysLeft <= 60 ? 'text-amber-600' : 'text-green-600'}`}>
                  {exam.daysLeft}d
                </div>
                <PriorityBadge priority={exam.priority} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white rounded-2xl p-5 border border-dark/5">
        <h4 className="font-bold text-dark mb-4 flex items-center gap-2">
          <CheckCircle2 size={16} className="text-green-500" /> Milestones
        </h4>
        <div className="space-y-3">
          {path.milestones.map((ms, idx) => (
            <div key={idx} className="flex items-start gap-3">
              {ms.completed ? (
                <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
              ) : (
                <Circle size={18} className="text-dark/20 mt-0.5 shrink-0" />
              )}
              <div className="flex-1">
                <p className={`text-sm font-semibold ${ms.completed ? 'text-dark/40 line-through' : 'text-dark'}`}>
                  {ms.task}
                </p>
                <p className="text-[10px] text-dark/40 font-medium">Due: {ms.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Target Colleges */}
      <div className="bg-white rounded-2xl p-5 border border-dark/5">
        <h4 className="font-bold text-dark mb-3">🎓 Target Colleges</h4>
        <div className="flex flex-wrap gap-2">
          {path.colleges.map((college) => (
            <span key={college} className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
              {college}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN SCREEN
   ═══════════════════════════════════════════════════ */

export default function PathCommitmentScreen() {
  const navigate = useNavigate();
  const { userProfile } = useAuth();
  const isPremium = userProfile?.isPremium ?? false;

  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [committedPath, setCommittedPath] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingPathId, setPendingPathId] = useState<string | null>(null);

  const handleSelectPath = useCallback((pathId: string) => {
    if (committedPath === pathId) return; // already committed
    setPendingPathId(pathId);
    setShowModal(true);
    // Haptic feedback on mobile
    if (navigator.vibrate) navigator.vibrate(50);
  }, [committedPath]);

  const handleConfirmCommitment = useCallback(() => {
    if (!pendingPathId) return;
    setCommittedPath(pendingPathId);
    setSelectedPath(pendingPathId);
    setShowModal(false);
    // Celebration confetti
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
    if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
  }, [pendingPathId]);

  const activePath = PATH_LANES.find(p => p.id === committedPath);
  const modalPath = PATH_LANES.find(p => p.id === pendingPathId);

  return (
    <div className="min-h-screen font-sans pb-32 space-y-6">
      {/* Header */}
      <motion.div
        className="flex items-center gap-3 pt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-dark/5 rounded-full transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-black text-dark tracking-tight flex items-center gap-2">
            <Sparkles size={22} className="text-primary" /> Your Path Map
          </h1>
          <p className="text-xs text-dark/50 font-medium">Choose your journey. Commit. Conquer.</p>
        </div>
      </motion.div>

      {/* Free vs Premium indicator */}
      {!isPremium && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3"
        >
          <Crown size={20} className="text-amber-500 shrink-0" />
          <div className="flex-1">
            <p className="text-xs font-bold text-dark">Free Tier: Paths A & B visible</p>
            <p className="text-[10px] text-dark/50">Upgrade to CareerDisha+ to unlock all 4 paths</p>
          </div>
          <button className="text-[10px] font-black bg-amber-100 text-amber-700 px-3 py-1.5 rounded-lg shrink-0">
            ₹99/mo
          </button>
        </motion.div>
      )}

      {/* Path Lanes */}
      <div className="space-y-4">
        {PATH_LANES.map((path, idx) => (
          <motion.div
            key={path.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <PathLaneCard
              path={path}
              isSelected={committedPath === path.id}
              isPremiumUser={isPremium}
              onSelect={handleSelectPath}
            />
          </motion.div>
        ))}
      </div>

      {/* Active Path Tracker */}
      <AnimatePresence>
        {activePath && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="pt-4 border-t-2 border-primary/10">
              <h2 className="text-xl font-black text-dark mb-4 flex items-center gap-2">
                <Zap size={20} className="text-accent" /> Path {activePath.id} Tracker
              </h2>
              <PathTrackerPanel path={activePath} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Commitment Modal */}
      <AnimatePresence>
        {showModal && modalPath && (
          <CommitmentModal
            path={modalPath}
            onConfirm={handleConfirmCommitment}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
