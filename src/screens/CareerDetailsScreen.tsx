import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { STREAMS } from '../data/streams';
import { cn } from '../lib/utils';
import { ArrowLeft, Clock, BarChart, Banknote, Target, ScrollText, CheckCircle2, XCircle, Globe, Users, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import PaywallBanner from '../components/PaywallBanner';

export default function CareerDetailsScreen() {
  const { streamId, pathId } = useParams();
  const { userProfile } = useAuth();
  const navigate = useNavigate();
  
  const stream = STREAMS[streamId as string];
  const path = stream?.paths.find(p => p.id === pathId);

  const isStreamLocked = userProfile?.stream !== streamId && !userProfile?.isPremium;
  const isRoadmapPartiallyLocked = !userProfile?.isPremium && (userProfile?.stream !== streamId);

  if (!stream || !path) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-10 text-dark min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Career Path Not Found</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-2 bg-primary text-light rounded-full font-bold shadow-md">
          Go Back
        </button>
      </div>
    );
  }

  const eligibility = path?.eligibility || "Basic eligibility usually involves completing 12th in the related stream with minimum 50-60% marks.";
    
  const boardMarks = path?.boardMarks || { tenth: 'Neutral', twelfth: 'Important', description: "12th board marks are generally important as a basic qualifying criteria (usually 50-60% minimum). 10th marks are less relevant for final placements." };
    
  const allSteps = path?.steps || [
    { year: 'Start', title: 'Initial Education', desc: 'Complete basic foundational education as per the route.' },
    { year: 'Mid', title: 'Specialization & Exams', desc: 'Clear necessary entrance exams and secure admission.' },
    { year: 'End', title: 'Professional Training', desc: 'Complete degree/certification and start job hunting.' }
  ];

  // If roadmap is locked, only show first 3 steps
  const steps = isRoadmapPartiallyLocked ? allSteps.slice(0, 3) : allSteps;

  const topColleges = path?.colleges || ['Top National Institutes', 'Leading Central/State Universities', 'Premium Private Institutions'];

  const abroad = path?.abroad || { level: 'Moderate', desc: 'Good opportunities exist globally after gaining 2-3 years of Indian work experience.' };

  const familyAngle = path?.familyAngle || "Most families appreciate this stable and respected path, though it requires dedication and hard work.";

  return (
    <div 
      className="min-h-screen text-dark font-sans pb-10" 
      style={{ backgroundColor: path.color ? `${path.color}11` : 'transparent' }}
    >
      <div className="max-w-5xl mx-auto space-y-6 pt-6 px-6 md:px-10 lg:px-16">
        
        {/* Top bar */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity"
            style={{ color: path.color || '#7C6FF7' }}
          >
            ← Back
          </button>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="flex gap-4 items-start pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="text-5xl mt-1 origin-bottom"
            animate={{ rotate: [-5, 5, -5], scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            {path.icon}
          </motion.div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-dark">
              {path.name}
            </h1>
            <p className="text-dark/60 text-sm md:text-base font-medium">
              {path.route}
            </p>
          </div>
        </motion.div>

        {/* 4 Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={{
            show: { transition: { staggerChildren: 0.1 } }
          }}
          initial="hidden"
          animate="show"
        >
          <InfoCard icon={<Clock size={16} style={{ color: path.color || '#7C6FF7' }} />} title="Duration" value={path.timeline} />
          <InfoCard icon={<BarChart size={16} style={{ color: path.color || '#7C6FF7' }} />} title="Difficulty" value={path.difficulty} />
          <InfoCard icon={<Banknote size={16} style={{ color: path.color || '#7C6FF7' }} />} title="Starting Salary" value={path.salary.entry} />
          <InfoCard icon={<ScrollText size={16} style={{ color: path.color || '#7C6FF7' }} />} title="Key Exams" value={path.exams?.join(', ') || 'N/A'} />
        </motion.div>

        {/* Eligibility */}
        <Section title="Eligibility" icon="📄" delay={0.1}>
          <p className="text-dark/80 text-sm leading-relaxed">
            {eligibility}
          </p>
        </Section>

        {/* Step-by-Step Roadmap */}
        <Section title="Step-by-Step Roadmap" icon="🗺️" delay={0.1}>
          <div className="ml-4 border-l-2 space-y-8 py-2 relative" style={{ borderColor: `${path.color || '#7C6FF7'}33` }}>
            {steps.map((step: any, idx: number) => (
              <motion.div 
                key={idx} 
                className="relative pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
              >
                <div 
                  className="absolute left-[-17px] top-1 text-xs font-bold px-2 py-0.5 rounded-full shadow-sm origin-left"
                  style={{ backgroundColor: `${path.color || '#7C6FF7'}1A`, color: path.color || '#7C6FF7', border: `1px solid ${path.color || '#7C6FF7'}4D` }}
                >
                  {step.year}
                </div>
                <h4 className="text-dark font-bold text-base mb-1">{step.title}</h4>
                <p className="text-dark/70 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}

            {/* Locked Content Overlay */}
            {isRoadmapPartiallyLocked && allSteps.length > 3 && (
              <div className="pt-4 mt-8 flex flex-col items-center">
                 <div className="w-full h-24 bg-gradient-to-b from-transparent to-white absolute bottom-0 left-0"></div>
                 <motion.div 
                   className="bg-white border-2 border-[#7C6FF7]/20 p-8 rounded-[2rem] shadow-xl text-center relative z-10 max-w-sm mx-auto"
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                 >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                      <Lock size={24} />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Roadmap Locked</h4>
                    <p className="text-xs text-dark/60 font-medium mb-6">
                      You are seeing a preview. Unlock the full {allSteps.length}-step roadmap and 50+ career paths for just ₹39.
                    </p>
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform">
                      <Sparkles size={18} /> Unlock Final Steps <ArrowRight size={18} />
                    </button>
                 </motion.div>
              </div>
            )}
          </div>
        </Section>

        {/* Salary Trajectory */}
        <Section title="Salary Trajectory" icon="💰" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <SalaryBox label="Entry Level" amount={path.salary.entry} color="white" pathColor={path.color} index={0} />
            <SalaryBox label="Mid Career (5-8 yrs)" amount={path.salary.mid} color="emerald" pathColor={path.color} index={1}/>
            <SalaryBox label="Senior (15+ yrs)" amount={path.salary.senior} color="cyan" pathColor={path.color} index={2} />
            <SalaryBox label="Top Level" amount={path.salary.top} color="yellow" pathColor={path.color} index={3}/>
          </div>
          <p className="text-xs text-dark/50 italic">
            📚 Source: {path.salary.source || 'Industry data and average placement reports'}
          </p>
        </Section>

        {/* Top Colleges */}
        <Section title="Top Colleges" icon="🎓" delay={0.1}>
          <ul className="space-y-4">
            {topColleges.map((college: string, idx: number) => (
              <motion.li 
                key={idx} 
                className="flex gap-3 text-sm text-dark/80 border-b border-dark/5 pb-4 last:border-0 last:pb-0 font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span style={{ color: path.color || '#7C6FF7' }}>🎓</span> {college}
              </motion.li>
            ))}
          </ul>
        </Section>

        {/* Pros & Cons */}
        <Section title="Pros & Cons" icon="⚖️" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              className="bg-[#E8F8F5] rounded-2xl p-5 border border-[#1ABC9C]/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="flex items-center gap-2 font-bold text-[#16A085] mb-3">
                <CheckCircle2 size={18} /> Pros
              </h4>
              <ul className="space-y-2">
                {(path.pros || []).map((pro: string, idx: number) => (
                  <li key={idx} className="flex gap-2 text-sm text-dark/80">
                    <span className="text-[#16A085] font-bold">✓</span> {pro}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="bg-[#FDEDEC] rounded-2xl p-5 border border-[#E74C3C]/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="flex items-center gap-2 font-bold text-[#C0392B] mb-3">
                <XCircle size={18} /> Cons
              </h4>
              <ul className="space-y-2">
                {(path.cons || []).map((con: string, idx: number) => (
                  <li key={idx} className="flex gap-2 text-sm text-dark/80">
                    <span className="text-[#C0392B] font-bold">✗</span> {con}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        {/* Global Paywall Banner if locked */}
        {isRoadmapPartiallyLocked && (
          <PaywallBanner className="mt-12" />
        )}
        
        <div className="h-10"></div>
      </div>
    </div>
  );
}

// Subcomponents

function InfoCard({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <motion.div 
      className="bg-light rounded-2xl border border-dark/5 p-4 flex flex-col gap-1 shadow-sm"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
      }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-center gap-2 text-xs font-bold text-dark/60">
        {icon} {title}
      </div>
      <div className="text-sm font-bold text-dark leading-snug">
        {value}
      </div>
    </motion.div>
  );
}

function Section({ title, icon, children, delay = 0 }: { title: string, icon: string, children: React.ReactNode, delay?: number }) {
  return (
    <motion.div 
      className="bg-light rounded-[32px] border border-dark/5 p-6 shadow-sm overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 200, damping: 20 }}
    >
      <h3 className="flex items-center gap-3 text-lg font-bold text-dark mb-5">
        <span className="text-2xl">{icon}</span> {title}
      </h3>
      {children}
    </motion.div>
  );
}

function SalaryBox({ label, amount, color, pathColor, index = 0 }: { label: string, amount: string, color: 'white' | 'emerald' | 'cyan' | 'yellow', pathColor?: string, index?: number }) {
  const colorMap: any = {
    white: "text-dark",
    emerald: pathColor || "text-primary",
    cyan: "text-blue-500",
    yellow: "text-accent"
  };
  
  return (
    <motion.div 
      className="bg-light rounded-xl border border-dark/5 p-4 flex flex-col items-center justify-center text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-[10px] text-dark/50 uppercase tracking-widest font-bold mb-1">{label}</div>
      <div 
        className={cn("text-sm font-bold", !pathColor && color === 'emerald' ? colorMap[color] : (color !== 'emerald' ? colorMap[color] : ""))}
        style={color === 'emerald' && pathColor ? { color: pathColor } : undefined}
      >
        {amount}
      </div>
    </motion.div>
  );
}

function Badge({ text, isMatters, pathColor }: { text: string, isMatters: boolean, pathColor?: string }) {
  if (isMatters) {
    return <span className="bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-bold border border-accent/20 shadow-sm">{text}</span>;
  }
  return <span 
    className="px-3 py-1 rounded-full text-xs font-bold shadow-sm"
    style={{ backgroundColor: `${pathColor || '#7C6FF7'}1A`, color: pathColor || '#7C6FF7', border: `1px solid ${pathColor || '#7C6FF7'}4D` }}
  >{text}</span>;
}
