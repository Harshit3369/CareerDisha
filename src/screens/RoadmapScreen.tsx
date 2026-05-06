import { User, Milestone, Target, TrendingUp, AlertCircle, CheckCircle2, Download, ExternalLink, School, Laptop, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ROADMAP_STEPS } from '../constants';

export default function RoadmapScreen() {
  return (
    <div className="space-y-8 pb-32">
      {/* Profile Header */}
      <section className="bg-light rounded-[32px] p-10 shadow-sm border border-[#D9D9D2]/30 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 text-dark/20/20 grayscale">
          <User size={160} />
        </div>
        <div className="space-y-6 relative z-10">
          <div className="space-y-2">
            <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">Journal Entry</h4>
            <h2 className="text-4xl font-serif italic text-dark">Atharv</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="bg-accent/30 text-primary px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest">Commerce Student</span>
            <span className="bg-accent/30 text-primary px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest">85% CBSE</span>
            <span className="bg-[#8A8A70]/10 text-primary-light px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest">Aspiration: Finance</span>
          </div>
        </div>
      </section>

      {/* Scores */}
      <section className="space-y-6">
        <h3 className="text-2xl font-serif flex items-center gap-3">
          <TrendingUp size={24} strokeWidth={1.5} className="text-primary" />
          Rhythm Scores
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {[
            { label: 'Financial Analyst', score: 8.5, color: 'bg-primary' },
            { label: 'Investment Banker', score: 7.5, color: 'bg-primary-light' },
            { label: 'Data Analyst', score: 7.0, color: 'bg-secondary' },
          ].map((item) => (
            <div key={item.label} className="bg-light p-6 rounded-[32px] border border-[#D9D9D2]/30 shadow-sm space-y-4">
              <div className="flex justify-between items-center px-2">
                <span className="text-lg font-serif italic text-on-surface">{item.label}</span>
                <span className="text-lg font-serif italic text-primary">{item.score} / 10</span>
              </div>
              <div className="w-full bg-accent/50 h-1.5 rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score * 10}%` }}
                  className={cn("h-full rounded-full", item.color)} 
                />
              </div>
              <p className="text-[10px] text-dark/70 italic px-2 tracking-wide font-medium">Caveat: High quantitative skills required.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-serif">Cultivation Path</h3>
          <span className="bg-primary text-light text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-widest">Preferred</span>
        </div>
        <div className="relative space-y-10 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-1 before:bg-accent/50">
          {ROADMAP_STEPS.map((step) => (
            <div key={step.id} className="relative pl-12">
              <div className={cn(
                "absolute left-0 top-1 w-8 h-8 rounded-full border-4 border-light shadow-sm flex items-center justify-center transition-all z-10",
                step.status === 'Completed' ? "bg-primary text-light" :
                step.status === 'Active' ? "bg-[#8A8A70] text-light" :
                "bg-[#D9D9D2] text-light"
              )}>
                {step.status === 'Completed' ? <CheckCircle2 size={16} /> : <span className="text-[10px] font-bold italic">{step.id}</span>}
              </div>
              <div className={cn(
                "bg-light p-8 rounded-[32px] shadow-sm border transition-all",
                step.status === 'Active' ? "border-primary/30 shadow-md" : "border-[#D9D9D2]/30"
              )}>
                <div className="flex justify-between items-start mb-4">
                  <h4 className={cn("text-xl font-serif leading-tight", step.status === 'Active' ? "text-primary italic" : "text-on-surface")}>
                    {step.title}
                  </h4>
                  {step.duration && <span className="text-[9px] font-bold text-dark/70 uppercase tracking-widest bg-accent/30 px-2 py-1 rounded">{step.duration}</span>}
                </div>
                <ul className="space-y-2">
                   {step.outcomes.map(o => (
                     <li key={o} className="text-xs text-dark/70 flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D2]" />
                       {o}
                     </li>
                   ))}
                </ul>
                {step.estSalary && (
                   <div className="mt-8 pt-6 border-t border-dashed border-accent flex items-center gap-3 text-primary font-serif italic text-lg">
                      <Milestone size={18} strokeWidth={1.5} /> Est. {step.estSalary}
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest Gaps */}
      <section className="bg-primary p-10 rounded-[40px] text-light space-y-8">
        <h3 className="text-3xl font-serif italic flex items-center gap-3">
          <AlertCircle size={24} />
          Honest Reflections
        </h3>
        <div className="space-y-6">
          <div className="flex gap-6">
            <div className="w-10 h-10 border border-light/30 rounded-full flex items-center justify-center text-light shadow-sm flex-shrink-0">
               <span className="font-serif italic text-xl">!</span>
            </div>
            <div>
              <h5 className="text-lg font-serif mb-1">Average CGPA</h5>
              <p className="text-xs text-light/70 leading-relaxed font-medium">Bridge: Focus on high scores in professional certifications (CFA/NISM) to offset acads.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-10 h-10 border border-light/30 rounded-full flex items-center justify-center text-light shadow-sm flex-shrink-0">
               <span className="font-serif italic text-xl">!</span>
            </div>
            <div>
              <h5 className="text-lg font-serif mb-1">Limited Technical Skills</h5>
              <p className="text-xs text-light/70 leading-relaxed font-medium">Bridge: Complete a 4-week intensive Excel & SQL bootcamp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="space-y-6">
        <h3 className="text-2xl font-serif">Practices & Guides</h3>
        <div className="space-y-4">
          {[
            { title: 'PM Kaushal Vikas Yojana', desc: 'Skill training govt scheme.', icon: ExternalLink, color: 'bg-primary' },
            { title: 'Institutes: IIMs & XLRI', desc: 'Executive finance courses.', icon: School, color: 'bg-primary-light' },
            { title: 'SWAYAM / NPTEL', desc: 'Free courses from IITs.', icon: Laptop, color: 'bg-secondary' },
          ].map(res => (
            <div key={res.title} className={cn("bg-light p-6 rounded-[32px] flex items-center justify-between border border-[#D9D9D2]/30 shadow-sm")}>
              <div className="flex items-center gap-4">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-light", res.color)}>
                  <res.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="text-lg font-serif">{res.title}</h5>
                  <p className="text-[10px] text-dark/70 uppercase tracking-widest font-bold">{res.desc}</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-dark/20" />
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <div className="fixed bottom-28 left-5 right-5 z-40">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary text-light py-5 rounded-full text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
        >
          <Download size={18} /> Download Journal
        </motion.button>
      </div>
    </div>
  );
}
