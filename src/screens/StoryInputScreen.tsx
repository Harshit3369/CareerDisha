import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Sparkles, Send, Lightbulb, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { API_BASE } from '../lib/apiConfig';
import type { LifePathsResponse } from '../types/lifePaths';

const PROMPT_HINTS = [
  "I'm from a small town in Bihar, my parents want me to stay close, I scored 78% in PCM, I want to do something with computers but I'm not sure if engineering is right for me",
  "I got 92% in boards but my family can't afford private colleges. I love biology and want to help people but NEET feels impossible. What life can I actually build?",
  "I'm a commerce student from Jaipur, scored 71%. Everyone says CA but I hate accounts. I like marketing and social media. What are my real options?",
  "I'm in class 11, PCM stream. I want to go abroad someday but my family says finish engineering first in India. Is there a middle path?",
];

export default function StoryInputScreen() {
  const navigate = useNavigate();
  const { userProfile, user } = useAuth();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [storyText, setStoryText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeHint, setActiveHint] = useState(0);

  // Cycle through hints
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHint((prev) => (prev + 1) % PROMPT_HINTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (storyText.trim().length < 20 || isGenerating) return;

    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/api/generate-life-paths`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          storyText: storyText.trim(),
          name: userProfile?.name || user?.displayName || undefined,
          city: userProfile?.city || undefined,
          classLevel: userProfile?.classLevel || undefined,
          stream: userProfile?.stream || undefined,
          score12OrCurrent: userProfile?.score12OrCurrent || undefined,
          score10: userProfile?.score10 || undefined,
          interests: userProfile?.interests || undefined,
          primaryGoal: userProfile?.primaryGoal || undefined,
          isPremium: userProfile?.isPremium || false,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Failed to generate paths');
      }

      const data: LifePathsResponse = await response.json();
      // Navigate to story map with generated data
      navigate('/story-map', { state: { pathsData: data, storyText: storyText.trim() } });
    } catch (err: any) {
      console.error('Story generation error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const useHint = (hint: string) => {
    setStoryText(hint);
    textareaRef.current?.focus();
  };

  const charCount = storyText.trim().length;
  const isValid = charCount >= 20;

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
            <Sparkles size={22} className="text-primary" /> Your Story
          </h1>
          <p className="text-xs text-dark/50 font-medium">Tell us about you — we'll show you your futures</p>
        </div>
      </motion.div>

      {/* Hero prompt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center space-y-2 py-4"
      >
        <h2 className="text-2xl font-black text-dark leading-tight">
          Not your marks.<br />
          <span className="text-primary">Your story.</span>
        </h2>
        <p className="text-sm text-dark/50 font-medium max-w-[300px] mx-auto leading-relaxed">
          Tell us where you're from, what confuses you, what excites you. We'll map out the lives waiting for you.
        </p>
      </motion.div>

      {/* Textarea card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        <div className="bg-white rounded-3xl border-2 border-dark/5 shadow-lg shadow-primary/5 overflow-hidden focus-within:border-primary/30 transition-colors">
          <textarea
            ref={textareaRef}
            value={storyText}
            onChange={(e) => setStoryText(e.target.value)}
            placeholder="I'm from a small town and I'm confused about..."
            rows={6}
            maxLength={2000}
            className="w-full p-5 pb-2 text-base font-medium text-dark bg-transparent resize-none focus:outline-none placeholder:text-dark/20 leading-relaxed"
          />

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-5 pb-4">
            <span className={`text-xs font-bold transition-colors ${charCount < 20 ? 'text-dark/30' : charCount > 1800 ? 'text-red-400' : 'text-primary/50'}`}>
              {charCount}/2000
            </span>
            <motion.button
              whileHover={isValid ? { scale: 1.05 } : {}}
              whileTap={isValid ? { scale: 0.95 } : {}}
              onClick={handleSubmit}
              disabled={!isValid || isGenerating}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all shadow-md
                ${isValid
                  ? 'bg-gradient-to-r from-primary to-[#5a4cf0] text-white shadow-primary/30 cursor-pointer'
                  : 'bg-dark/10 text-dark/30 cursor-not-allowed shadow-none'
                }`}
            >
              {isGenerating ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Weaving your paths...
                </>
              ) : (
                <>
                  <Send size={14} />
                  Show me my paths
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-medium border border-red-200"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prompt hints */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <div className="flex items-center gap-2">
          <Lightbulb size={14} className="text-accent" />
          <span className="text-xs font-bold text-dark/40 uppercase tracking-widest">Not sure what to write? Try these</span>
        </div>

        <div className="space-y-2">
          {PROMPT_HINTS.map((hint, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              onClick={() => useHint(hint)}
              className={`w-full text-left p-4 rounded-2xl border transition-all text-sm font-medium leading-relaxed
                ${idx === activeHint
                  ? 'bg-primary/5 border-primary/20 text-dark/80'
                  : 'bg-dark/[0.02] border-dark/5 text-dark/40 hover:bg-dark/5 hover:text-dark/60'
                }`}
            >
              <span className="text-dark/30 mr-2">"</span>
              {hint}
              <span className="text-dark/30 ml-1">"</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Loading overlay */}
      <AnimatePresence>
        {isGenerating && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[var(--color-bg)]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Animated path visualization */}
            <div className="relative w-32 h-32">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-4 border-accent/20"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={28} className="text-white" />
              </motion.div>
            </div>

            <div className="text-center space-y-3 max-w-[280px]">
              <h3 className="text-xl font-black text-dark">Weaving your life paths...</h3>
              <motion.p
                className="text-sm text-dark/50 font-medium"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AI is finding real colleges, honest placement data, and actual deadlines tailored to your story
              </motion.p>
            </div>

            {/* Path labels appearing one by one */}
            <div className="space-y-2 w-full max-w-[250px]">
              {['🏠 Finding safe options near you...', '📐 Scanning regional opportunities...', '🚀 Checking ambitious reaches...'].map((label, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + idx * 1.5 }}
                  className="flex items-center gap-2 text-sm text-dark/60 font-medium bg-white/80 rounded-xl px-4 py-2.5 border border-dark/5"
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
