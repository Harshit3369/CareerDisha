import { Home, Compass, BarChart2, Bot, User } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function BottomNav() {
  const location = useLocation();

  if (location.pathname === '/advisor') return null;

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/advisor', icon: Bot, label: 'AI Advisor', isSpecial: true },
    { to: '/explore', icon: Compass, label: 'Explore' },
    { to: '/career-growth', icon: BarChart2, label: 'Progress' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-5 max-w-[390px] mx-auto">
      <nav className="bg-dark text-light/50 px-2 py-3 rounded-full flex justify-between items-center shadow-2xl relative">
        {navItems.map((item) => {
          if (item.isSpecial) {
            return (
              <div key={item.label} className="w-1/5 flex items-center justify-center relative">
                <NavLink
                  to={item.to}
                  className="w-10 h-10 bg-gradient-to-tr from-[#7C6FF7] to-[#F5A623] text-light shadow-sm shadow-[#7C6FF7]/30 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform"
                >
                  <item.icon size={22} strokeWidth={2.5} />
                </NavLink>
              </div>
            );
          }

          return (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-center w-1/5 h-10 rounded-full transition-all duration-300",
                  isActive ? "text-light" : "hover:text-light"
                )
              }
            >
              <item.icon size={22} strokeWidth={2.5} />
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
