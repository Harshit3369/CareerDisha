import React from 'react';
import { motion } from 'motion/react';
import { Lock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface PaywallBannerProps {
  onUnlock?: () => void;
  className?: string;
}

export default function PaywallBanner({ onUnlock, className }: PaywallBannerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-gradient-to-br from-[#7C6FF7] via-[#5a4cf0] to-[#F59E0B] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Lock size={120} className="rotate-12" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/30">
          <Zap size={32} className="text-yellow-300 fill-current" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-3xl font-black tracking-tight">Unlock Everything</h3>
          <p className="text-white/80 font-medium max-w-[280px]">
            Get lifetime access to all 5 streams and detailed 10-step career roadmaps.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 w-full pt-4">
          <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
            <CheckCircle2 size={14} className="text-green-300" /> All 5 Streams
          </div>
          <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
            <CheckCircle2 size={14} className="text-green-300" /> Full Roadmaps
          </div>
          <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
            <CheckCircle2 size={14} className="text-green-300" /> AI Career Chat
          </div>
          <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
            <CheckCircle2 size={14} className="text-green-300" /> Premium Tips
          </div>
        </div>

        <button 
          onClick={onUnlock}
          className="w-full bg-white text-[#7C6FF7] py-5 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform group"
        >
          Unlock Now — ₹39
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
          One-time payment • Lifetime access
        </p>
      </div>
      
      {/* Animated shine effect */}
      <motion.div 
        animate={{ x: ['100%', '-100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 bottom-0 w-32 bg-white/5 -skew-x-12 translate-x-full"
      />
    </motion.div>
  );
}
