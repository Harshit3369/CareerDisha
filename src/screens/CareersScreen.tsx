import { ArrowRight, MapPin, Briefcase, Search, Lock, Check } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { STREAMS } from "../data/streams";
import { useAuth } from "../contexts/AuthContext";
import PaywallBanner from "../components/PaywallBanner";

export default function CareersScreen() {
  const { stream } = useParams();
  const { userProfile } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "sciencePCM", label: "PCM" },
    { id: "sciencePCB", label: "PCB" },
    { id: "commerce", label: "Commerce" },
    { id: "humanities", label: "Humanities" },
    { id: "vocational", label: "Vocational" },
  ];

  const currentTabId = tabs.find((t) => t.id === stream)?.id || tabs[0].id;
  const currentStreamData = STREAMS[currentTabId];

  const isStreamLocked = userProfile?.stream !== currentTabId && !userProfile?.isPremium;

  if (!currentStreamData) {
    return <div className="p-10 text-center">Stream not found</div>;
  }

  const filteredPaths = currentStreamData.paths.filter(
    (path: any) =>
      path.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (path.tagline &&
        path.tagline.toLowerCase().includes(searchQuery.toLowerCase())) ||
      path.route.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6 pb-10 font-sans">
      {/* Hero Banner */}
      <motion.section
        className="bg-accent rounded-[32px] p-8 text-dark relative overflow-hidden shadow-lg shadow-[#F5A623]/20"
        style={
          currentStreamData.color
            ? { backgroundColor: currentStreamData.color, color: "white" }
            : {}
        }
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative z-10">
          <Link
            to="/"
            className="w-10 h-10 bg-light/20 rounded-full flex items-center justify-center mb-6 active:scale-95 transition-transform backdrop-blur-sm text-dark border border-dark/10"
            style={
              currentStreamData.color
                ? { color: "white", borderColor: "rgba(255,255,255,0.2)" }
                : {}
            }
          >
            <span className="text-xl">←</span>
          </Link>
          <motion.div className="flex items-center gap-3 mb-2">
            <motion.h2 
              className="text-3xl font-bold leading-tight tracking-tight drop-shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {currentStreamData.name}
            </motion.h2>
            {userProfile?.stream === currentTabId && (
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1 shadow-lg">
                <Check size={10} /> YOUR STREAM
              </div>
            )}
          </motion.div>
          <motion.p 
            className="text-sm opacity-90 font-medium mb-6 max-w-[85%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {currentStreamData.tagline}
          </motion.p>
          <motion.div 
            className="flex gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-dark/10 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 backdrop-blur-sm border border-dark/5">
              <span>🎯 {currentStreamData.paths.length} Paths</span>
            </div>
          </motion.div>
        </div>

        {/* Floating element */}
        <motion.div 
          className="absolute right-[-20px] top-6 text-9xl drop-shadow-xl z-0 opacity-50"
          animate={{ rotate: [12, -4, 12], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          {currentStreamData.icon}
        </motion.div>
      </motion.section>

      {/* Filter Tabs */}
      <section className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 py-2">
        {tabs.map((tab) => {
          const isTabUnlocked = userProfile?.stream === tab.id || userProfile?.isPremium;
          return (
            <button
              key={tab.id}
              onClick={() => navigate(`/careers/${tab.id}`)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-sm flex items-center gap-2",
                currentTabId === tab.id
                  ? "bg-dark text-light"
                  : "bg-light text-dark border border-dark/5",
              )}
            >
              {tab.label}
              {!isTabUnlocked && <Lock size={12} className="opacity-50" />}
            </button>
          );
        })}
      </section>

      {/* Paywall Banner at the top for locked streams */}
      {isStreamLocked && (
        <PaywallBanner />
      )}

      {/* Search Bar */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={18} className="text-dark/40" />
        </div>
        <input
          type="text"
          placeholder={`Search ${currentStreamData.paths.length} career paths...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-light border border-dark/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7]/50 shadow-sm transition-all focus:scale-[1.02]"
        />
      </motion.div>

      {/* Career Cards */}
      <motion.section 
        className="space-y-4"
        variants={{
          show: { transition: { staggerChildren: 0.15 } }
        }}
        initial="hidden"
        animate="show"
      >
        {filteredPaths.length === 0 ? (
          <div className="text-center py-8 text-dark/50">
            No career paths found matching "{searchQuery}"
          </div>
        ) : (
          filteredPaths.map((path: any, index: number) => (
            <motion.div
              key={path.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
              }}
              whileHover={isStreamLocked ? {} : { scale: 1.02, y: -5 }}
              className={cn(
                "rounded-[32px] p-6 relative overflow-hidden shadow-md transition-all",
                !path.color && index % 2 === 0
                  ? "bg-dark text-light"
                  : !path.color
                    ? "bg-primary/15 text-dark border border-primary/10"
                    : "text-light",
                isStreamLocked && "cursor-default"
              )}
              style={path.color ? { backgroundColor: path.color } : {}}
            >
              <div className={cn(
                "relative z-10 flex flex-col h-full",
                isStreamLocked && "blur-[3px] brightness-75 pointer-events-none"
              )}>
                {/* Regular content */}
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={cn(
                      "text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full",
                      !path.color && index % 2 !== 0
                        ? "bg-dark/5 text-primary"
                        : "bg-light/20 text-light",
                    )}
                  >
                    {path.difficulty}
                  </span>
                  <span className="text-3xl drop-shadow-sm">{path.icon}</span>
                </div>

                <h3 className="text-2xl font-bold leading-tight mb-4 w-[80%]">
                  {path.name}
                </h3>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-medium flex items-start gap-2 opacity-90 leading-relaxed">
                    <MapPin size={14} className="mt-0.5 shrink-0" />{" "}
                    {path.route}
                  </p>
                  <p className="text-xs font-medium flex items-center gap-2 opacity-90">
                    <Briefcase size={14} className="shrink-0" /> {path.timeline}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to={isStreamLocked ? "#" : `/career-details/${currentStreamData.id}/${path.id}`}
                    className={cn(
                      "flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-bold shadow-md transition-colors",
                      !path.color && index % 2 !== 0
                        ? "bg-dark text-light hover:bg-dark/90"
                        : "bg-light text-dark border border-dark/5 hover:bg-dark/5",
                    )}
                  >
                    View Roadmap <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Lock Overlay */}
              {isStreamLocked && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/10 backdrop-blur-[2px]">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 text-white shadow-2xl"
                  >
                    <Lock size={24} />
                  </motion.div>
                  <span className="mt-2 text-[10px] font-black text-white uppercase tracking-[0.2em] drop-shadow-md">
                    Unlock all streams
                  </span>
                </div>
              )}
            </motion.div>
          ))
        )}
      </motion.section>
    </div>
  );
}
