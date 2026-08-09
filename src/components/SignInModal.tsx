import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, Check, Loader2, Terminal } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button, Input } from './ui/primitives';
import { cn } from '../lib/utils';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

/* Brand mark kept in Google's own colours — a provider logo, not part of the
   app's colour language. */
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
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

  const isBusy = activeProvider !== null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.14 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-overlay"
            aria-hidden="true"
          />

          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="sign-in-title"
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-xl border border-border bg-surface shadow-modal"
            >
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={onClose}
                disabled={isBusy || isSuccess}
                aria-label="Close"
                className="absolute right-3 top-3 z-10"
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="relative px-6 py-8">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-secondary text-foreground">
                    <Terminal className="h-4 w-4" />
                  </span>
                  <h2 id="sign-in-title" className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                    Sign in to VibePrompt
                  </h2>
                  <p className="mt-1.5 max-w-[16rem] text-[13px] leading-relaxed text-muted-foreground">
                    Continue with a provider or your email address.
                  </p>
                </div>

                {/* Success overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-surface/95 backdrop-blur-sm"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-success-muted">
                        <Check className="h-5 w-5 text-success" />
                      </span>
                      <p className="text-sm font-medium text-foreground">Signed in</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Providers */}
                <div className="mt-7 space-y-2">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => handleSignIn('github')}
                    disabled={isBusy}
                    className="w-full"
                  >
                    {activeProvider === 'github' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <GithubIcon />
                    )}
                    <span>Continue with GitHub</span>
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => handleSignIn('google')}
                    disabled={isBusy}
                    className="w-full"
                  >
                    {activeProvider === 'google' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <GoogleIcon />
                    )}
                    <span>Continue with Google</span>
                  </Button>
                </div>

                {/* Divider */}
                <div className="my-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-subtle-foreground">
                    or
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                {/* Email form */}
                <form onSubmit={(e) => handleSignIn('email', e)} className="space-y-2.5">
                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      aria-label="Email address"
                      disabled={isBusy}
                      className="h-11 pl-9"
                    />
                  </div>

                  <div className="relative">
                    <Lock
                      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      aria-label="Password"
                      disabled={isBusy}
                      className="h-11 pl-9 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isBusy}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className={cn(
                        'absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-subtle-foreground',
                        'transition-colors hover:text-foreground disabled:opacity-50',
                      )}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>

                  <Button type="submit" variant="primary" size="lg" disabled={isBusy} className="w-full">
                    {activeProvider === 'email' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    <span>Sign in</span>
                  </Button>
                </form>

                {/* Footer */}
                <div className="mt-6 space-y-3 text-center">
                  <p className="text-[13px] text-muted-foreground">
                    Don&apos;t have an account?{' '}
                    <button
                      type="button"
                      className="cursor-pointer font-medium text-accent underline-offset-4 transition-colors hover:underline"
                    >
                      Sign up
                    </button>
                  </p>
                  <p className="text-[11px] leading-relaxed text-subtle-foreground">
                    By continuing you agree to the Terms &amp; Privacy Policy.
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
