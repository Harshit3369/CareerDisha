import { Search, SlidersHorizontal, Bookmark, ArrowRight, Building2, Landmark, GraduationCap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { SCHOLARSHIPS } from '../constants';
import { useState } from 'react';

const FILTERS = ['All', 'Merit-Based', 'Need-Based', 'Government', 'Private', 'Girls Only'];

export default function ScholarshipsScreen() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Banner */}
      <section className="h-64 bg-accent rounded-[40px] overflow-hidden relative group shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
        <div className="absolute bottom-8 left-10 text-light space-y-4">
          <span className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-80">Funding</span>
          <h2 className="text-4xl font-serif">Scholarships<br/>Made for You</h2>
          <p className="text-[12px] opacity-80 max-w-[200px] italic">Explore government, private & merit-based opportunities.</p>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 opacity-20 grayscale">
           <GraduationCap size={80} />
        </div>
      </section>

      {/* Search & Filter */}
      <section className="flex gap-4">
        <div className="relative flex-grow group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/70 group-focus-within:text-primary transition-colors" size={18} strokeWidth={1.5} />
          <input 
            type="text" 
            placeholder="Search by name, state..."
            className="w-full pl-11 pr-4 py-3.5 bg-light rounded-2xl border border-dark/30 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all text-[10px] uppercase tracking-widest font-bold shadow-sm"
          />
        </div>
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="p-3.5 bg-light border border-dark/30 rounded-2xl text-dark/70 shadow-sm active:scale-95 transition-transform"
        >
          <SlidersHorizontal size={20} strokeWidth={1.5} />
        </button>
      </section>

      {/* Filter Row */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={cn(
              "whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all",
              activeFilter === f 
                ? "bg-primary text-light shadow-lg shadow-primary/10" 
                : "bg-light border border-dark/30 text-dark/70"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Scholarship List */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-serif">Grants Dashboard</h3>
          <button className="text-[10px] font-bold text-dark/70 uppercase tracking-widest">View All</button>
        </div>
        <div className="space-y-5">
          {SCHOLARSHIPS.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "group relative bg-light p-8 rounded-[32px] border border-dark/30 shadow-sm hover:shadow-md transition-all flex flex-col gap-6"
              )}
            >
              <button className="absolute top-6 right-6 text-slate-300 hover:text-primary transition-colors">
                <Bookmark size={20} strokeWidth={1.5} />
              </button>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="bg-primary/5 text-primary px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest">
                    Deadline: {s.deadline}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-2xl font-serif leading-tight group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-[11px] text-dark/70 font-bold uppercase tracking-widest flex items-center gap-2 mt-1">
                    {s.type === 'Government' ? <Landmark size={14} /> : <Building2 size={14} />}
                    {s.provider}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map(tag => (
                    <span key={tag} className="bg-accent/30 text-primary px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-6 border-t border-accent">
                   <div className="text-primary font-serif italic text-2xl">{s.amount}</div>
                   <button className="bg-primary text-light px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                     Enroll Now <ArrowRight size={14} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter Modal */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-surface rounded-t-[40px] z-[70] px-10 pt-8 pb-12 max-h-[85vh] overflow-y-auto"
            >
              <div className="w-12 h-1.5 bg-[#D9D9D2] rounded-full mx-auto mb-10" />
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-serif italic">Preferences</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-3 bg-light border border-dark/30 rounded-full">
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                   <label className="text-[11px] font-bold text-dark/70 uppercase tracking-widest block mb-4">Class / Grade</label>
                   <div className="flex flex-wrap gap-2">
                     {['10th', '11th', '12th', 'UG', 'PG'].map(c => (
                       <button key={c} className={cn(
                         "px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all",
                         c === '12th' ? "bg-primary border-primary text-light shadow-lg shadow-primary/20" : "bg-light border-dark/30 text-dark/70"
                       )}>{c}</button>
                     ))}
                   </div>
                </div>

                <div>
                   <label className="text-[11px] font-bold text-dark/70 uppercase tracking-widest block mb-4">Category</label>
                   <div className="grid grid-cols-2 gap-2">
                     {['General', 'OBC', 'SC', 'ST'].map(c => (
                       <button key={c} className={cn(
                         "py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all",
                         c === 'OBC' ? "bg-primary border-primary text-light" : "bg-light border-dark/30 text-dark/70"
                       )}>{c}</button>
                     ))}
                   </div>
                </div>

                <div>
                   <label className="text-[11px] font-bold text-dark/70 uppercase tracking-widest block mb-4">Annual Family Income</label>
                   <div className="space-y-3">
                     {['Below 1L', '1–2.5L', '2.5–8L', 'Above 8L'].map(i => (
                       <label key={i} className="flex items-center gap-4 p-5 bg-light rounded-[24px] border border-dark/30 cursor-pointer group active:scale-[0.98] transition-transform">
                         <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors", i === 'Below 1L' ? "border-primary" : "border-dark group-hover:border-[#7A7A70]")}>
                            {i === 'Below 1L' && <div className="w-3 h-3 rounded-full bg-primary" />}
                         </div>
                         <span className="text-sm font-bold text-dark uppercase tracking-wider">{i}</span>
                       </label>
                     ))}
                   </div>
                </div>

                <div className="pt-6 flex flex-col gap-6">
                   <button className="w-full bg-primary text-light py-5 rounded-full font-bold uppercase tracking-widest shadow-xl shadow-primary/20">Apply Filters</button>
                   <button className="text-[11px] text-dark/70 font-bold uppercase tracking-widest text-center">Reset All</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Bottom Bar */}
      <div className="sticky bottom-0 -mx-5 px-10 py-6 bg-surface/95 backdrop-blur-md border-t border-accent shadow-soft flex items-center justify-between z-40">
        <div>
          <p className="text-[10px] font-bold text-dark/70 uppercase tracking-widest">Showing 24 grants</p>
          <p className="font-serif italic text-xl text-primary mt-1">Profile Matched</p>
        </div>
        <button 
           onClick={() => setIsFilterOpen(true)}
           className="bg-primary text-light px-10 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-primary/20"
        >
          Eligibility Filter
        </button>
      </div>
    </div>
  );
}
