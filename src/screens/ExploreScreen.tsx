import { Brain, ClipboardList, Map, Bot, BookOpen, PenTool, LayoutGrid, Sparkles, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const EXPLORE_ITEMS = [
  {
    path: '/careers/sciencePCM',
    title: 'Career Paths',
    desc: 'Step-by-step paths for 50+ careers',
    icon: Map,
    bg: 'bg-dark',
    text: 'text-light',
    iconBg: 'bg-light/10',
    iconColor: 'text-light'
  },
  {
    path: '/career-roadmap',
    title: 'AI Custom Roadmap',
    desc: 'Generate a personalized guide',
    icon: Sparkles,
    bg: 'bg-gradient-to-br from-[#7C6FF7] to-[#F5A623]',
    text: 'text-light',
    iconBg: 'bg-light/20',
    iconColor: 'text-light'
  },
  {
    path: '/pivot',
    title: 'Pivot GPT',
    desc: 'Find alternative career tracks',
    icon: RefreshCcw,
    bg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    text: 'text-light',
    iconBg: 'bg-light/20',
    iconColor: 'text-light'
  },
  {
    path: '/compare',
    title: 'Compare Colleges',
    desc: 'Analytics & placement data',
    icon: PenTool,
    bg: 'bg-primary/15',
    text: 'text-dark',
    iconBg: 'bg-primary/20',
    iconColor: 'text-primary'
  },
  {
    path: '/advisor',
    title: 'Disha AI Advisor',
    desc: '24/7 personal career counselor',
    icon: Bot,
    bg: 'bg-primary',
    text: 'text-light',
    iconBg: 'bg-light/20',
    iconColor: 'text-light'
  },
  {
    path: '/minddisha',
    title: 'MindDisha',
    desc: 'Mental wellness & focus hub',
    icon: Brain,
    bg: 'bg-accent/15',
    text: 'text-dark',
    iconBg: 'bg-accent/20',
    iconColor: 'text-accent'
  },
  {
    path: '/exam-tracker',
    title: 'Exam Tracker',
    desc: 'Track entrance exam deadlines',
    icon: ClipboardList,
    bg: 'bg-light',
    text: 'text-dark',
    iconBg: 'bg-dark/10',
    iconColor: 'text-dark/60',
    border: 'border border-dark/5'
  }
];

export default function ExploreScreen() {
  return (
    <div className="space-y-6 pb-20 font-sans min-h-screen">
      <motion.div 
        className="flex items-center gap-3 pt-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="p-2 bg-primary/10 rounded-xl">
          <LayoutGrid size={24} className="text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-dark tracking-tight">Explore</h2>
          <p className="text-sm font-medium text-dark/60">Discover everything Disha offers</p>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 gap-4"
        variants={{
          show: { transition: { staggerChildren: 0.1 } }
        }}
        initial="hidden"
        animate="show"
      >
        {EXPLORE_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="h-full"
            >
              <Link 
                to={item.path}
                className={`${item.bg} ${item.text} ${item.border || ''} rounded-[24px] p-5 flex flex-col justify-between shadow-sm min-h-[160px] h-full overflow-hidden relative group`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-light/5 rounded-full blur-xl group-hover:scale-150 transition-transform" />
                <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center mb-4 relative z-10`}>
                  <Icon size={20} className={item.iconColor} strokeWidth={2.5} />
                </div>
                <div className="relative z-10 mt-auto">
                  <h3 className="font-bold text-base leading-tight mb-1">{item.title}</h3>
                  <p className={`text-[10px] font-medium leading-relaxed opacity-80 mt-2`}>{item.desc}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
