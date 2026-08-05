import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, Check, Shield, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const { signIn } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeProvider, setActiveProvider] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignIn = async (provider: string, e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (activeProvider || isSuccess) return;

    setActiveProvider(provider);
    
    try {
      if (provider === 'email') {
        await signIn('email', email, password);
      } else {
        await signIn(provider as 'github' | 'google');
      }
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setActiveProvider(null);
        setEmail('');
        setPassword('');
        onClose();
      }, 1500);
    } catch (error) {
      console.error('Sign in failed:', error);
      setActiveProvider(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-md overflow-hidden bg-zinc-950 border border-zinc-800/80 rounded-3xl pointer-events-auto"
            >
              {/* Top glow effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                disabled={activeProvider !== null || isSuccess}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-800 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative p-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <Shield className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                  <p className="text-sm text-zinc-400 max-w-[280px]">
                    Sign in to save prompts, sync favorites, and unlock premium features.
                  </p>
                </div>

                {/* Success State Overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-zinc-950/90 backdrop-blur-sm rounded-3xl"
                    >
                      <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4"
                      >
                        <Check className="w-8 h-8 text-emerald-400" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">Signed in successfully</h3>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Social Buttons */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => handleSignIn('github')}
                    disabled={activeProvider !== null}
                    className="relative w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-zinc-900 border border-zinc-700 hover:border-indigo-500/50 rounded-xl text-white font-medium transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/10 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed group"
                  >
                    {activeProvider === 'github' ? (
                      <Loader2 className="w-5 h-5 animate-spin text-indigo-400" />
                    ) : (
                      <>
                        <GithubIcon />
                        Continue with GitHub
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handleSignIn('google')}
                    disabled={activeProvider !== null}
                    className="relative w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-zinc-900 border border-zinc-700 hover:border-indigo-500/50 rounded-xl text-white font-medium transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/10 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed group"
                  >
                    {activeProvider === 'google' ? (
                      <Loader2 className="w-5 h-5 animate-spin text-indigo-400" />
                    ) : (
                      <>
                        <GoogleIcon />
                        Continue with Google
                      </>
                    )}
                  </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center mb-6">
                  <div className="flex-grow border-t border-zinc-800"></div>
                  <span className="flex-shrink-0 mx-4 text-xs text-zinc-500 uppercase tracking-wider">
                    or continue with email
                  </span>
                  <div className="flex-grow border-t border-zinc-800"></div>
                </div>

                {/* Email Form */}
                <form onSubmit={(e) => handleSignIn('email', e)} className="space-y-4">
                  <div className="space-y-3">
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="w-full bg-zinc-900/80 border border-zinc-800 focus:border-indigo-500 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-zinc-500 outline-none transition-colors"
                        disabled={activeProvider !== null}
                      />
                    </div>
                    
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full bg-zinc-900/80 border border-zinc-800 focus:border-indigo-500 rounded-xl py-3.5 pl-11 pr-12 text-white placeholder-zinc-500 outline-none transition-colors"
                        disabled={activeProvider !== null}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={activeProvider !== null}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 disabled:opacity-50"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={activeProvider !== null}
                    className="relative w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:brightness-110 rounded-xl text-white font-bold shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {activeProvider === 'email' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center space-y-4">
                  <p className="text-zinc-400">
                    Don't have an account?{' '}
                    <button className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                      Sign Up
                    </button>
                  </p>
                  <p className="text-xs text-zinc-500">
                    By continuing, you agree to our Terms & Privacy Policy
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
