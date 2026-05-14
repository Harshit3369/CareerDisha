import { motion } from 'motion/react';
import { LayoutGrid } from 'lucide-react';

export default function ProgressScreen() {
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
          <h2 className="text-2xl font-bold text-dark tracking-tight">Progress</h2>
          <p className="text-sm font-medium text-dark/60">Your learning analytics</p>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center justify-center pt-8 space-y-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <div className="rounded-[32px] overflow-hidden border-4 border-dark shadow-xl bg-light rotate-2 hover:rotate-0 transition-transform">
          <img src="/meme.png" alt="Progress vo tho padhai karne se hogi" className="w-full h-auto max-w-[320px] object-cover" />
        </div>
        
        <div className="bg-accent/20 px-8 py-5 rounded-[24px] border-2 border-accent/30 shadow-sm relative">
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-dark rounded-full flex items-center justify-center text-light font-bold text-xl rotate-12">!</div>
          <p className="text-dark font-extrabold text-lg text-center tracking-tight">
            Just kidding we are coming soon with something
          </p>
        </div>
      </motion.div>
    </div>
  );
}
