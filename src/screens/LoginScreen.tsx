import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ArrowRight, LogIn, UserPlus } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import StepBackground from '../components/Onboarding/StepBackground';

export default function LoginScreen() {
  const { user, signIn, loading, isSigningIn } = useAuth();
  const [step, setStep] = useState(0);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-bg">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-bg relative overflow-hidden font-sans">
      <StepBackground />
      
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10">
        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div
              key="step0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm"
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
                className="w-24 h-24 bg-light rounded-[2rem] flex items-center justify-center shadow-2xl border border-dark/5 mb-8 mx-auto rotate-12"
              >
                <div className="relative">
                  <div className="text-4xl">🚀</div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary blur-xl -z-10 rounded-full"
                  />
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl font-black text-dark mb-4 tracking-tighter"
              >
                Career<span className="text-primary">Disha+</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-dark/80 font-medium text-lg mb-12"
              >
                Your career journey starts here 🚀
              </motion.p>

              <div className="space-y-4">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(1)}
                  className="w-full bg-primary text-light py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-light/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <UserPlus size={22} />
                  Sign Up
                </motion.button>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(1)}
                  className="w-full bg-dark/5 backdrop-blur-md text-dark border border-dark/10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-colors hover:bg-dark/10"
                >
                  <LogIn size={22} />
                  Log In
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-sm"
            >
              <h2 className="text-3xl font-bold text-dark mb-2">Welcome Back</h2>
              <p className="text-dark/60 mb-12">Login or create an account to start your journey.</p>
              
              <div className="space-y-6">
                <button
                  onClick={signIn}
                  disabled={isSigningIn}
                  className="w-full bg-light text-dark py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-3 transition-all hover:bg-dark/5 disabled:opacity-50"
                >
                  {isSigningIn ? (
                    <div className="w-6 h-6 border-2 border-dark border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
                      Continue with Google
                    </>
                  )}
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-dark/10"></div></div>
                  <div className="relative flex justify-center text-xs uppercase"><span className="bg-bg px-2 text-dark/40">Or continue with</span></div>
                </div>

                <div className="space-y-4">
                  <div className="text-left">
                    <label className="text-dark/50 text-xs font-bold uppercase ml-4 mb-1 block">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      className="w-full bg-dark/5 border border-dark/10 rounded-2xl p-4 text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-dark/20"
                    />
                  </div>
                  <div className="text-left">
                    <label className="text-dark/50 text-xs font-bold uppercase ml-4 mb-1 block">Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full bg-dark/5 border border-dark/10 rounded-2xl p-4 text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-dark/20"
                    />
                  </div>
                </div>

                <button
                  className="w-full bg-primary text-light py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 group transition-all"
                >
                  Sign In
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <button 
                onClick={() => setStep(0)}
                className="mt-8 text-dark/40 font-bold hover:text-dark transition-colors"
              >
                ← Back to Welcome
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
