import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Award, ArrowLeft, Loader2, BarChart3, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI, Type } from '@google/genai';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

interface CollegeData {
  id: string;
  name: string;
  course: string;
  avgPackage: number;
  medianPackage: number;
  lowestPackage: number;
  studentsPlaced: number;
  batchSize: number;
  placementPercentage: number;
}

const COLORS = [
  '#7C6FF7', // Primary Purple
  '#F5A623', // Accent Orange
  '#20B2AA'  // Light Sea Green (for variety)
];

const COLOR_CLASSES = [
  'bg-primary',
  'bg-accent',
  'bg-[#20B2AA]'
];

export default function CompareScreen() {
  const navigate = useNavigate();
  const [colleges, setColleges] = useState<CollegeData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [courseQuery, setCourseQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || colleges.length >= 3 || isSearching) return;

    setIsSearching(true);
    setSearchError(null);
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `You are an expert education counselor. The user is asking about the college: "${searchQuery}" and course: "${courseQuery || 'overall'}". 
First, explicitly check if this college actually exists in the real world (e.g., "IIT Pakistan" does NOT exist). 
If it does NOT exist, set "exists" to false and fill the other fields with 0 or "N/A". 
If it DOES exist, set "exists" to true and provide the latest roughly accurate or estimated placement statistics. Keep values realistic (in LPA for packages). Try to guess total batch size and students placed reasonably.`,
          schema: {
            type: "object",
            properties: {
              exists: { type: "boolean", description: "True if the college is a real institution, false if it doesn't exist" },
              name: { type: "string", description: "Full proper name of the college, e.g. IIT Delhi" },
              course: { type: "string", description: "Course or branch name, e.g. B.Tech Computer Science" },
              avgPackage: { type: "number", description: "Average package in LPA" },
              medianPackage: { type: "number", description: "Median package in LPA" },
              lowestPackage: { type: "number", description: "Lowest package in LPA" },
              studentsPlaced: { type: "integer", description: "Number of students placed" },
              batchSize: { type: "integer", description: "Total batch size" },
            },
            required: ["exists", "name", "course", "avgPackage", "medianPackage", "lowestPackage", "studentsPlaced", "batchSize"]
          }
        })
      });

      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      
      if (data.exists === false || data.name.toLowerCase().includes('does not exist') || data.name === 'N/A') {
        setSearchError(`It looks like "${searchQuery}" doesn't exist. Please check the college name and try again.`);
        return;
      }

      const newCollege: CollegeData = {
        id: Date.now().toString(),
        name: data.name,
        course: data.course,
        avgPackage: data.avgPackage,
        medianPackage: data.medianPackage,
        lowestPackage: data.lowestPackage,
        studentsPlaced: data.studentsPlaced,
        batchSize: data.batchSize,
        placementPercentage: Math.max(0, Math.min(100, Math.round((data.studentsPlaced / data.batchSize) * 100))) || 0
      };

      setColleges(prev => [...prev, newCollege]);
      setSearchQuery('');
      setCourseQuery('');
    } catch (error: any) {
      console.error(error);
      setSearchError("Failed to fetch college data. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const removeCollege = (id: string) => {
    setColleges(prev => prev.filter(c => c.id !== id));
  };

  const metrics = [
    { key: 'avgPackage' as keyof CollegeData, label: 'Average Package', suffix: ' LPA' },
    { key: 'medianPackage' as keyof CollegeData, label: 'Median Package', suffix: ' LPA' },
    { key: 'lowestPackage' as keyof CollegeData, label: 'Lowest Package', suffix: ' LPA' },
    { key: 'placementPercentage' as keyof CollegeData, label: 'Placement Rate', suffix: '%' },
    { key: 'studentsPlaced' as keyof CollegeData, label: 'Students Placed', suffix: '' },
    { key: 'batchSize' as keyof CollegeData, label: 'Batch Size', suffix: '' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] text-dark overflow-hidden pb-20">
      
      {/* Header */}
      <header className="pt-10 pb-4 px-5 flex items-center gap-4 bg-[var(--color-bg)] sticky top-0 z-20 border-b border-dark/5 shadow-sm">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-light rounded-full flex items-center justify-center hover:bg-dark/5 transition-colors border border-dark/5 shadow-sm">
          <ArrowLeft size={20} className="text-dark" />
        </button>
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-primary/20 rounded-lg">
            <BarChart3 size={18} className="text-primary" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-dark">Compare Colleges</h1>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">
        
        {/* Search Area */}
        <div className="space-y-4">
          <p className="text-sm text-dark/60 font-medium">Add up to 3 colleges & courses to compare their placement statistics.</p>
          
          <form onSubmit={handleSearch} className="flex flex-col gap-3">
            {searchError && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm font-medium border border-red-100 flex items-start gap-2 justify-between">
                <span>{searchError}</span>
                <button type="button" onClick={() => setSearchError(null)} className="text-red-400 hover:text-red-600 shrink-0 mt-0.5">
                  <X size={16} />
                </button>
              </div>
            )}
            <div className="flex flex-col gap-2 relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-dark/40" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  disabled={colleges.length >= 3 || isSearching}
                  placeholder="College Name (e.g. BITS Pilani)"
                  className="w-full bg-light border border-dark/10 rounded-xl py-3 pl-10 pr-4 text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] disabled:opacity-50 shadow-sm"
                />
              </div>
              
              <div className="relative flex gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BookOpen size={18} className="text-dark/40" />
                  </div>
                  <input
                    type="text"
                    value={courseQuery}
                    onChange={(e) => setCourseQuery(e.target.value)}
                    disabled={colleges.length >= 3 || isSearching}
                    placeholder="Course/Branch (e.g. B.Tech CSE)"
                    className="w-full bg-light border border-dark/10 rounded-xl py-3 pl-10 pr-4 text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] disabled:opacity-50 shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!searchQuery.trim() || colleges.length >= 3 || isSearching}
                  className="px-6 bg-primary text-light font-bold text-sm rounded-xl flex items-center justify-center shadow-md disabled:opacity-50 transition-transform active:scale-95"
                >
                  {isSearching ? <Loader2 size={18} className="animate-spin" /> : 'Compare'}
                </button>
              </div>
            </div>
          </form>

          {/* Selected Colleges / Legend */}
          <div className="flex flex-wrap gap-2 pt-2">
            <AnimatePresence>
              {colleges.map((college, idx) => (
                <motion.div
                  key={college.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm border border-dark/5",
                    COLOR_CLASSES[idx]
                  )}
                >
                  <div className="flex flex-col text-light drop-shadow-sm">
                    <span>{college.name}</span>
                    <span className="text-[9px] opacity-80 font-medium">{college.course}</span>
                  </div>
                  <button onClick={() => removeCollege(college.id)} className="p-0.5 ml-1 bg-dark/10 hover:bg-dark/20 rounded-full transition-colors">
                    <X size={14} className="text-light" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {colleges.length === 0 && (
              <div className="text-xs text-dark/40 font-medium italic mt-2">No colleges selected yet.</div>
            )}
          </div>
        </div>

        {/* Comparison Section */}
        {colleges.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {metrics.map((metric) => {
              // Find the max value to calculate chart bar widths
              const maxValue = Math.max(...colleges.map(c => Number(c[metric.key]) || 0), 1);
              // Find best value (highest)
              const bestValue = Math.max(...colleges.map(c => Number(c[metric.key]) || 0));

              return (
                <div key={metric.key} className="bg-light border border-dark/5 rounded-2xl p-5 shadow-sm space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-dark text-sm uppercase tracking-wider">{metric.label}</h3>
                  </div>

                  <div className="space-y-4">
                    {colleges.map((college, idx) => {
                      const value = Number(college[metric.key]) || 0;
                      const isBest = value === bestValue && value > 0 && colleges.length > 1;
                      const widthPercent = (value / maxValue) * 100;
                      
                      return (
                        <div key={college.id} className="space-y-2">
                          <div className="flex justify-between items-end text-xs font-semibold">
                            <span className="text-dark/80 truncate mr-2 flex flex-col">
                              {college.name}
                              {college.course && <span className="text-[10px] text-dark/50 font-normal">{college.course}</span>}
                            </span>
                            <div className="flex items-center gap-1.5 shrink-0">
                              {isBest && (
                                <span className="bg-accent/20 text-accent text-[9px] px-1.5 py-0.5 rounded flex items-center gap-0.5 border border-accent/30 uppercase tracking-widest font-bold">
                                  <Award size={10} />
                                  Best
                                </span>
                              )}
                              <span className="text-dark font-bold">{value.toLocaleString()}{metric.suffix}</span>
                            </div>
                          </div>
                          <div className="h-2.5 w-full bg-primary/15 rounded-full overflow-hidden flex shadow-inner">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${widthPercent}%` }}
                              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                              className={cn("h-full rounded-full bg-opacity-90", COLOR_CLASSES[idx])}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
}
