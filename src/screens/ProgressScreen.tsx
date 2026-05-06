import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { ChevronDown, Star, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function ProgressScreen() {
  const [timeframe, setTimeframe] = useState<'Weekly' | 'Month'>('Weekly');

  const data = [
    { name: 'Mon', value: 39 },
    { name: 'Tue', value: 14 },
    { name: 'Wed', value: 48 },
    { name: 'Thr', value: 24 },
    { name: 'Fri', value: 22 },
  ];

  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-dark tracking-tight">Progress</h2>
        <button className="flex items-center gap-2 bg-light px-4 py-2 rounded-full shadow-sm border border-dark/5 text-xs font-bold text-dark">
          <span className="w-4 h-4 bg-primary/15 rounded flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C6FF7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
          </span>
          All subjects
          <ChevronDown size={14} className="text-dark/40" />
        </button>
      </div>

      {/* Main Chart Card */}
      <div className="bg-accent/15 rounded-[40px] p-6 shadow-sm relative overflow-hidden border border-accent/20">
        {/* Toggle */}
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-light shadow-md">
            <TrendingUp size={24} />
          </div>
          <div className="bg-[#EBDBC8] p-1 rounded-full flex gap-1 shadow-inner">
            <button 
              onClick={() => setTimeframe('Weekly')}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold transition-all",
                timeframe === 'Weekly' ? "bg-dark text-light shadow-sm" : "text-dark/60 hover:text-dark"
              )}
            >
              Weekly
            </button>
            <button 
              onClick={() => setTimeframe('Month')}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold transition-all",
                timeframe === 'Month' ? "bg-dark text-light shadow-sm" : "text-dark/60 hover:text-dark"
              )}
            >
              Month
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mb-8 relative z-10">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-dark">48</span>
              <span className="text-sm font-semibold text-dark/70">subjects</span>
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold text-dark">12</span>
              <span className="text-sm font-semibold text-dark/70">hours</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[220px] w-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }} barSize={32}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#1A1A2E', fontSize: 11, fontWeight: 600, opacity: 0.6 }} 
                dy={10}
              />
              {/* Fake background bars using a custom shape or just simple styling. We'll stick to simple Recharts bars to avoid breaking things. */}
              <Bar dataKey="value" radius={[16, 16, 16, 16]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#F5A623' : '#D49242'} />
                ))}
                <LabelList dataKey="value" position="top" fill="#1A1A2E" fontSize={10} fontWeight="bold" dy={-10} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          {/* Decorative background dashed lines for the chart area */}
          <div className="absolute inset-0 pointer-events-none flex justify-between px-4 pb-8 pt-4">
             <div className="w-[1px] h-full border-l border-dashed border-accent/30" />
             <div className="w-[1px] h-full border-l border-dashed border-accent/30" />
             <div className="w-[1px] h-full border-l border-dashed border-accent/30" />
             <div className="w-[1px] h-full border-l border-dashed border-accent/30" />
             <div className="w-[1px] h-full border-l border-dashed border-accent/30" />
          </div>
        </div>

        {/* Decorative corner background */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-light rounded-full opacity-40 blur-xl" />
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4 mb-6">
        <div className="w-2 h-2 rounded-full border border-dark flex items-center justify-center">
           <div className="w-1 h-1 rounded-full bg-dark" />
        </div>
        <div className="w-2 h-2 rounded-full bg-dark/20" />
        <div className="w-2 h-2 rounded-full bg-dark/20" />
      </div>

      {/* Top Students Rating Card */}
      <div className="bg-light rounded-[32px] p-5 shadow-sm border border-dark/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent/15 rounded-full flex items-center justify-center shadow-inner">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-light">
              <Star size={16} fill="currentColor" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-dark text-base leading-tight mb-0.5">Rating of students</h4>
            <p className="text-xs text-dark/50 font-medium">10 best students</p>
          </div>
        </div>
        
        <div className="flex -space-x-3">
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=X" className="w-8 h-8 rounded-full border-2 border-light bg-primary/15" />
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Y" className="w-8 h-8 rounded-full border-2 border-light bg-accent/15" />
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Z" className="w-8 h-8 rounded-full border-2 border-light bg-green-500/15" />
        </div>
      </div>
    </div>
  );
}
