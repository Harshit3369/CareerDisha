import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Target, Clock, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { LifePathData } from '../types/lifePaths';

export default function StoryTrackerScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  const committedPath = (location.state as any)?.committedPath as LifePathData | undefined;

  useEffect(() => {
    if (!committedPath) {
      navigate('/my-story', { replace: true });
    }
  }, [committedPath, navigate]);

  if (!committedPath) return null;

  // Sort exams by days left
  const sortedExams = [...committedPath.exams].sort((a, b) => a.daysLeft - b.daysLeft);
  const nextExam = sortedExams[0];

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
            <Sparkles size={22} className="text-primary" /> Path Tracker
          </h1>
          <p className="text-xs text-dark/50 font-medium">Tracking your journey to Path {committedPath.id}</p>
        </div>
      </motion.div>

      {/* Hero tracking card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-dark to-[#1a1a2e] text-white rounded-3xl p-6 shadow-xl relative overflow-hidden space-y-4"
      >
        <div className="absolute right-4 top-4 text-6xl opacity-10">{committedPath.emoji}</div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-black bg-primary/30 text-primary-light px-2.5 py-1 rounded-full uppercase tracking-wider">
            Active Journey
          </span>
          <span className="text-xs text-white/50 font-bold">Path {committedPath.id}</span>
        </div>

        <div>
          <h2 className="text-2xl font-black leading-tight">{committedPath.title}</h2>
          <p className="text-sm text-white/70 font-medium mt-1">{committedPath.tagline}</p>
        </div>

        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">Next Milestone</div>
            <div className="text-sm font-black text-primary-light mt-0.5">{nextExam ? nextExam.name : 'All set!'}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider">Deadline</div>
            <div className="text-lg font-black text-white mt-0.5">{nextExam ? `${nextExam.daysLeft} days` : '—'}</div>
          </div>
        </div>
      </motion.div>

      {/* Progress Journey Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-5 border border-dark/5 space-y-3"
      >
        <h3 className="text-xs font-bold uppercase tracking-widest text-dark/40">Journey Progress</h3>
        <div className="relative h-3 bg-dark/5 rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-accent rounded-full w-1/4" />
        </div>
        <div className="flex justify-between text-xs font-bold text-dark/50">
          <span>Phase 1: Prep & Exams</span>
          <span>Phase 2: Counseling</span>
          <span>Phase 3: Campus Life</span>
        </div>
      </motion.div>

      {/* Required Exams List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black text-dark flex items-center gap-2">
            <Target size={16} className="text-primary" /> Required Entrance Exams ({sortedExams.length})
          </h3>
          <span className="text-xs font-bold text-dark/40">2026 Cycle</span>
        </div>

        <div className="space-y-3">
          {sortedExams.map((exam, idx) => {
            const isUrgent = exam.daysLeft <= 30;
            return (
              <motion.div
                key={exam.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className={`bg-white rounded-2xl p-4 border-2 transition-all flex items-center justify-between gap-3 ${
                  isUrgent ? 'border-red-200 bg-red-50/30' : 'border-dark/5'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-dark text-base">{exam.name}</h4>
                    {isUrgent && (
                      <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <AlertCircle size={10} /> Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-dark/50 font-medium mt-0.5">Deadline: {exam.deadline} · {exam.prepTime}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className={`text-xl font-black ${isUrgent ? 'text-red-600' : 'text-primary'}`}>
                    {exam.daysLeft}<span className="text-xs font-bold">d</span>
                  </div>
                  <span className="text-[10px] font-bold text-dark/40">remaining</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Target Colleges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h3 className="text-sm font-black text-dark">Target Colleges in Path {committedPath.id}</h3>
        <div className="space-y-3">
          {committedPath.colleges.map((college) => (
            <div key={college.name} className="bg-white rounded-2xl p-4 border border-dark/5 flex items-center justify-between gap-3">
              <div>
                <h4 className="font-bold text-dark text-sm">{college.name}</h4>
                <p className="text-xs text-dark/50 font-medium">{college.location} · {college.course}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm font-black text-dark">{college.placementMedian}</div>
                <div className="text-[10px] text-dark/40 font-bold uppercase">median</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
