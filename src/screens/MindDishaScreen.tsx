import { Brain, Heart, Wind, Coffee, ArrowRight, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MindDishaScreen() {
  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Hero Banner */}
      <section className="bg-primary/15 rounded-[32px] p-8 text-dark relative overflow-hidden shadow-lg shadow-[#7C6FF7]/10">
        <div className="relative z-10">
          <Link to="/" className="w-10 h-10 bg-light/50 rounded-full flex items-center justify-center mb-6 active:scale-95 transition-transform backdrop-blur-sm shadow-sm border border-dark/5">
            <span className="text-xl text-primary">←</span>
          </Link>
          <h2 className="text-3xl font-bold leading-tight mb-2 tracking-tight">
            Mental Wellness <br/>Hub 🧠
          </h2>
          <p className="font-medium text-sm leading-relaxed mb-6 text-dark/70 max-w-[80%]">
            Your safe space to breathe, reflect, and grow.
          </p>
          
          <button className="bg-primary text-light px-6 py-3 rounded-full text-xs font-bold shadow-md hover:bg-[#6859e0] transition-colors flex items-center gap-2">
            <UserPlus size={16} />
            Book Counsellor
          </button>
        </div>
        
        {/* Floating element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-8xl transform rotate-12 drop-shadow-sm opacity-50 z-0 mix-blend-multiply">🌸</div>
      </section>

      <h3 className="font-bold text-dark text-lg px-1">Quick Relief Exercises</h3>

      {/* Quick Access Grid */}
      <section className="grid grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="bg-accent/15 rounded-[24px] p-5 flex flex-col justify-between shadow-sm border border-accent/10 h-[140px] relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-colors" />
          <div className="w-10 h-10 bg-light/60 rounded-full flex items-center justify-center text-accent mb-2 backdrop-blur-sm z-10 border border-accent/10">
            <Wind size={20} strokeWidth={2.5} />
          </div>
          <div className="z-10 mt-auto">
            <h4 className="font-bold text-dark text-base leading-tight mb-0.5">Box Breathing</h4>
            <p className="text-[10px] text-dark/60 font-medium">2 mins to calm</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-green-500/10 rounded-[24px] p-5 flex flex-col justify-between shadow-sm border border-green-500/10 h-[140px] relative overflow-hidden group">
           <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/20 transition-colors" />
          <div className="w-10 h-10 bg-light/60 rounded-full flex items-center justify-center text-green-600 mb-2 backdrop-blur-sm z-10 border border-green-500/10">
             <Coffee size={20} strokeWidth={2.5} />
          </div>
          <div className="z-10 mt-auto">
            <h4 className="font-bold text-dark text-base leading-tight mb-0.5">Mindful Break</h4>
            <p className="text-[10px] text-dark/60 font-medium">5 mins reset</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-rose-500/15 rounded-[24px] p-5 flex flex-col justify-between shadow-sm border border-rose-400/10 h-[140px] relative overflow-hidden group">
           <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-rose-400/10 rounded-full blur-xl group-hover:bg-rose-400/20 transition-colors" />
          <div className="w-10 h-10 bg-light/60 rounded-full flex items-center justify-center text-rose-500 mb-2 backdrop-blur-sm z-10 border border-rose-400/10">
             <Heart size={20} strokeWidth={2.5} />
          </div>
          <div className="z-10 mt-auto">
            <h4 className="font-bold text-dark text-base leading-tight mb-0.5">Gratitude Log</h4>
            <p className="text-[10px] text-dark/60 font-medium">Daily reflection</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-light rounded-[24px] p-5 flex flex-col justify-between shadow-sm border border-primary/20 h-[140px] relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors" />
          <div className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center text-primary mb-2 z-10 border border-primary/10">
             <Brain size={20} strokeWidth={2.5} />
          </div>
          <div className="z-10 mt-auto flex justify-between items-end">
            <div>
              <h4 className="font-bold text-dark text-base leading-tight mb-0.5">AI Journal</h4>
              <p className="text-[10px] text-dark/60 font-medium">Chat now</p>
            </div>
            <ArrowRight size={14} className="text-dark/40" />
          </div>
        </div>
      </section>

      {/* Daily Affirmation */}
      <section className="bg-dark rounded-[32px] p-6 text-light text-center shadow-lg relative overflow-hidden mt-2">
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
        <p className="font-serif italic text-lg leading-relaxed relative z-10">
          "I am capable of achieving my goals, but my worth is not defined by my productivity."
        </p>
        <div className="mt-4 text-primary font-bold text-xs uppercase tracking-widest relative z-10">Daily Affirmation</div>
      </section>
    </div>
  );
}
