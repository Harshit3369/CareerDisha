import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, Scale, AlertTriangle, Clock, TrendingDown,
  Users, X, Flame, Lightbulb, CornerDownRight, RotateCcw,
  ChevronRight, Quote, Shield
} from 'lucide-react';
import { findCareer } from '../data/dreamCostData';

interface AlternativePath {
  name: string;
  why: string;
  effort: string;
}

interface WhatHappenItem {
  path: string;
  detail: string;
}

interface DreamCostResult {
  career: string;
  emoji: string;
  tagline: string;
  averagePrepTime: string;
  successRate: string;
  competitorCount: string;
  whatYouGiveUp: string[];
  whatHappensIfYouDont: WhatHappenItem[];
  whatPeopleWhoMadeItSay: string;
  hardestPartAccordingToThem: string;
  alternativePaths: AlternativePath[];
  honestVerdict: string;
  motivationNote: string;
}

const EXAMPLE_CAREERS = ['IAS Officer', 'Surgeon (AIIMS)', 'IIT Professor', 'Bollywood Actor', 'Cricketer (India Team)'];

function StatCard({ label, value, icon: Icon, accent }: { label: string; value: string; icon: any; accent: string }) {
  return (
    <div className={`flex-1 min-w-0 rounded-2xl p-4 border ${accent} bg-white/[0.03]`}>
      <Icon size={16} className="mb-2 opacity-60" />
      <div className="text-xs uppercase tracking-widest opacity-50 mb-1 font-bold">{label}</div>
      <div className="font-bold text-sm leading-snug">{value}</div>
    </div>
  );
}

export default function DreamCostScreen() {
  const [career, setCareer] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DreamCostResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (careerInput = career) => {
    const trimmed = careerInput.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setResult(null);
    setError(null);

    // Simulate brief "thinking" then look up internally
    setTimeout(() => {
      const found = findCareer(trimmed);
      if (found) {
        setResult(found as any);
        setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      } else {
        setError(`We don't have data for "${trimmed}" yet. Try: IAS Officer, Doctor, Software Engineer, CA, Lawyer, Pilot, Actor, Cricketer, or Entrepreneur.`);
      }
      setLoading(false);
    }, 800);
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setCareer('');
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div className="min-h-screen font-sans pb-28" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)' }}>

      {/* ── Header ── */}
      <motion.div
        className="pt-6 pb-8 px-1"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
            <Scale size={18} className="text-amber-400" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight leading-none">The Cost of The Dream</h1>
            <p className="text-xs text-white/40 font-medium mt-0.5">No sugar-coating. Just the real weight.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2 mt-4">
          <AlertTriangle size={13} className="text-amber-400 shrink-0" />
          <span className="text-amber-300/90 text-xs font-medium">This is a reality check, not a rejection. Students who know the cost carry it better.</span>
        </div>
      </motion.div>

      {/* ── Input Zone ── */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={career}
            onChange={e => setCareer(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Type your dream career…"
            className="w-full bg-white/[0.06] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/25 text-base font-medium outline-none focus:border-amber-500/50 focus:bg-white/[0.08] transition-all pr-14"
            autoFocus
          />
          <button
            onClick={() => handleSubmit()}
            disabled={!career.trim() || loading}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-amber-500 rounded-xl flex items-center justify-center disabled:opacity-30 transition-all active:scale-95 hover:bg-amber-400"
          >
            <ArrowRight size={16} className="text-black" />
          </button>
        </div>

        {/* Quick examples */}
        {!result && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {EXAMPLE_CAREERS.map(ex => (
              <button
                key={ex}
                onClick={() => { setCareer(ex); handleSubmit(ex); }}
                className="text-xs bg-white/[0.05] border border-white/10 text-white/50 px-3 py-1.5 rounded-full hover:bg-white/[0.09] hover:text-white/80 transition-all"
              >
                {ex}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* ── Loading ── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 mt-4"
          >
            <div className="text-center py-8">
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                className="text-4xl mb-4"
              >
                ⚖️
              </motion.div>
              <p className="text-white/50 text-sm font-medium">Calculating the real cost…</p>
              <p className="text-white/25 text-xs mt-1">Pulling from real Indian data</p>
            </div>
            {[1, 2, 3].map(i => (
              <div key={i} className="h-20 rounded-2xl bg-white/[0.04] animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Error ── */}
      {error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4 text-rose-300 text-sm flex items-center gap-2">
          <X size={14} /> {error}
        </motion.div>
      )}

      {/* ── Result ── */}
      <AnimatePresence>
        {result && (
          <motion.div
            ref={resultRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >

            {/* 1 ── Hero Block */}
            <div className="rounded-3xl overflow-hidden bg-white/[0.04] border border-white/[0.07] p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
              <div className="text-5xl mb-3">{result.emoji}</div>
              <h2 className="text-2xl font-black text-white mb-2 leading-tight">{result.career}</h2>
              <p className="text-white/50 text-sm font-medium italic leading-relaxed">"{result.tagline}"</p>
            </div>

            {/* 2 ── The Numbers */}
            <div>
              <SectionLabel icon={TrendingDown} label="The Numbers" color="text-rose-400" />
              <div className="flex gap-3">
                <StatCard label="Prep Time" value={result.averagePrepTime} icon={Clock} accent="border-rose-500/20 text-rose-300" />
                <StatCard label="Success Rate" value={result.successRate} icon={TrendingDown} accent="border-rose-500/30 text-rose-200" />
              </div>
              <div className="mt-3 bg-white/[0.04] border border-white/[0.07] rounded-2xl px-4 py-3 flex items-center gap-2">
                <Users size={14} className="text-white/40 shrink-0" />
                <span className="text-white/60 text-xs font-medium">{result.competitorCount}</span>
              </div>
            </div>

            {/* 3 ── What You Give Up */}
            <div>
              <SectionLabel icon={X} label="What You Give Up" color="text-amber-400" />
              <div className="bg-white/[0.03] border border-amber-500/15 rounded-2xl p-4 space-y-2.5">
                {result.whatYouGiveUp.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-amber-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <X size={10} className="text-amber-400" />
                    </div>
                    <span className="text-white/75 text-sm leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 4 ── What Happens if You Don't Make It */}
            <div>
              <SectionLabel icon={CornerDownRight} label="What People Who Didn't Make It Did Next" color="text-sky-400" />
              <div className="bg-white/[0.03] border border-sky-500/15 rounded-2xl p-4 space-y-3">
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-3">This is the reality of the majority — and most of them built good lives.</p>
                {result.whatHappensIfYouDont.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight size={14} className="text-sky-400/60 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white/80 text-sm font-semibold">{item.path}</div>
                      <div className="text-white/40 text-xs leading-snug mt-0.5">{item.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 5 ── What People Who Made It Say */}
            <div>
              <SectionLabel icon={Quote} label="What People Who Made It Say" color="text-violet-400" />
              <div className="bg-white/[0.03] border border-violet-500/15 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-3 left-3 text-violet-400/20 font-serif text-7xl leading-none select-none">"</div>
                <p className="text-white/70 text-sm leading-relaxed italic relative z-10 pl-4">{result.whatPeopleWhoMadeItSay}</p>
              </div>
            </div>

            {/* 6 ── The Hardest Part */}
            <div className="bg-gradient-to-br from-rose-500/10 to-amber-500/5 border border-rose-500/25 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Flame size={14} className="text-rose-400" />
                <span className="text-rose-300 text-xs font-black uppercase tracking-widest">What They Say Was Hardest</span>
              </div>
              <p className="text-white text-base font-semibold leading-snug">{result.hardestPartAccordingToThem}</p>
            </div>

            {/* 7 ── Adjacent Paths */}
            <div>
              <SectionLabel icon={Lightbulb} label="Adjacent Paths — Same Skills, Less Sacrifice" color="text-emerald-400" />
              <div className="space-y-3">
                {result.alternativePaths.map((path, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white/[0.04] border border-emerald-500/15 rounded-2xl p-4 flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0 text-emerald-400 font-black text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-bold text-sm">{path.name}</div>
                      <div className="text-white/50 text-xs mt-0.5 leading-snug">{path.why}</div>
                      <div className="inline-block mt-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {path.effort}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 8 ── Honest Verdict */}
            <div className="bg-white/[0.05] border border-white/[0.09] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={14} className="text-white/50" />
                <span className="text-white/40 text-xs font-black uppercase tracking-widest">The Honest Verdict</span>
              </div>
              <p className="text-white/85 text-sm leading-relaxed italic">{result.honestVerdict}</p>
            </div>

            {/* Motivation Note */}
            <div className="bg-gradient-to-br from-amber-500/8 to-transparent border border-amber-500/20 rounded-2xl p-5">
              <p className="text-amber-200/80 text-sm leading-relaxed font-medium">{result.motivationNote}</p>
            </div>

            {/* Reset */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 bg-white/[0.06] border border-white/10 text-white/60 py-4 rounded-2xl text-sm font-semibold hover:bg-white/[0.1] hover:text-white/90 transition-all"
            >
              <RotateCcw size={15} />
              Check Another Dream
            </motion.button>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionLabel({ icon: Icon, label, color }: { icon: any; label: string; color: string }) {
  return (
    <div className={`flex items-center gap-2 mb-3 ${color}`}>
      <Icon size={14} />
      <span className="text-xs font-black uppercase tracking-widest opacity-80">{label}</span>
    </div>
  );
}
