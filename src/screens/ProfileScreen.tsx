import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, Settings, GraduationCap, Award, Brain, Moon, Sun } from 'lucide-react';

export default function ProfileScreen() {
  const { user, userProfile, logOut } = useAuth();
  
  const firstName = user?.displayName ? user.displayName.split(' ')[0] : 'Jacob';
  const profileImg = user?.photoURL || `https://api.dicebear.com/7.x/notionists/svg?seed=${firstName}&backgroundColor=EAE8FD`;

  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  
  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const stats = [
    { label: 'Progress', value: '76%', icon: Award, color: 'text-accent', bg: 'bg-accent/15' },
    { label: 'Coins', value: userProfile?.points?.toString() || '0', icon: GraduationCap, color: 'text-primary', bg: 'bg-primary/15' },
    { label: 'Streak', value: userProfile?.streak?.toString() || '1', icon: Brain, color: 'text-green-600', bg: 'bg-green-500/10' },
  ];

  return (
    <div className="space-y-6 pb-10 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-dark tracking-tight">Profile</h2>
        <button className="w-10 h-10 bg-light rounded-full flex items-center justify-center shadow-sm border border-dark/5 active:scale-95 transition-transform" onClick={logOut}>
          <LogOut size={18} className="text-dark" />
        </button>
      </div>

      <section className="bg-light rounded-[32px] p-6 shadow-sm border border-dark/5 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="w-24 h-24 rounded-full overflow-hidden bg-light border-4 border-light shadow-md mb-4 relative z-10">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-dark leading-tight capitalize z-10">{user?.displayName || 'User'}</h3>
        <p className="text-dark/60 text-sm font-medium z-10">{user?.email}</p>
        
        <div className="mt-4 bg-primary/15 px-4 py-2 rounded-full flex items-center gap-2 z-10 border border-primary/10">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">{userProfile?.stream || 'Explorer'}</span>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`${stat.bg} rounded-[24px] p-4 flex flex-col items-center justify-center text-center shadow-sm`}>
              <div className="w-8 h-8 bg-light/60 rounded-full flex items-center justify-center mb-2">
                <Icon size={16} className={stat.color} />
              </div>
              <p className="text-xl font-bold text-dark leading-none mb-1">{stat.value}</p>
              <p className="text-[9px] uppercase tracking-widest font-bold text-dark/50">{stat.label}</p>
            </div>
          );
        })}
      </section>

      <section className="bg-light rounded-[32px] p-2 shadow-sm border border-dark/5">
        <div className="p-4 flex items-center justify-between border-b border-dark/5 cursor-pointer hover:bg-dark/5 transition-colors rounded-t-[24px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-dark/10 rounded-full flex items-center justify-center text-dark">
              <User size={18} />
            </div>
            <span className="font-bold text-dark">Personal Info</span>
          </div>
          <span className="text-dark/40">›</span>
        </div>
        
        <div className="p-4 flex items-center justify-between border-b border-dark/5 cursor-pointer hover:bg-dark/5 transition-colors" onClick={toggleDarkMode}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-dark/10 rounded-full flex items-center justify-center text-dark">
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </div>
            <span className="font-bold text-dark">Dark Mode</span>
          </div>
          <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors ${isDark ? 'bg-primary' : 'bg-dark/20'}`}>
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isDark ? 'translate-x-6' : 'translate-x-0'}`} />
          </div>
        </div>

        <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-dark/5 transition-colors rounded-b-[24px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-dark/10 rounded-full flex items-center justify-center text-dark">
              <Settings size={18} />
            </div>
            <span className="font-bold text-dark">Settings</span>
          </div>
          <span className="text-dark/40">›</span>
        </div>
      </section>
      
      {/* Interests section */}
      {userProfile?.interests && userProfile.interests.length > 0 && (
        <section className="bg-light rounded-[32px] p-6 shadow-sm border border-dark/5">
          <h4 className="font-bold text-dark text-base mb-4">My Interests</h4>
          <div className="flex flex-wrap gap-2">
            {userProfile.interests.map((interest, idx) => (
              <span key={idx} className="bg-dark/10 text-dark px-3 py-1.5 rounded-full text-xs font-bold border border-dark/5">
                {interest}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
