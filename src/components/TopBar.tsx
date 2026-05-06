import { Bell, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation, Link } from 'react-router-dom';

export default function TopBar() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const firstName = user?.displayName ? user.displayName.split(' ')[0] : 'Jacob';
  const profileImg = user?.photoURL || `https://api.dicebear.com/7.x/notionists/svg?seed=${firstName}&backgroundColor=EAE8FD`;

  if (pathname === '/login') return null;

  return (
    <header className="pt-8 pb-4 flex justify-between items-center bg-[var(--color-bg)] sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Link to="/profile" className="w-12 h-12 rounded-full overflow-hidden bg-light border-2 border-light shadow-sm flex-shrink-0 relative group cursor-pointer block">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
        </Link>
        
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-semibold leading-tight text-[var(--color-dark)] capitalize">
            Hello, {firstName}
          </h1>
          <div className="flex items-center gap-1 mt-0.5 text-primary font-medium text-xs">
            <Zap size={12} className="fill-current" />
            <span>Progress: 76%</span>
          </div>
        </div>
      </div>

      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-light shadow-sm border border-dark/5 relative active:scale-95 transition-transform">
        <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-400 rounded-full border border-light z-10" />
        <Bell size={18} strokeWidth={2} className="text-[var(--color-dark)]" />
      </button>
    </header>
  );
}
