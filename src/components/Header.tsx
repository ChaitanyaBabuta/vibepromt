import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Plus, Heart, Command, Sparkles, Search, Grid, X, LogIn, LogOut, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  activeTab: 'library' | 'builder' | 'categories' | 'favorites';
  setActiveTab: (tab: 'library' | 'builder' | 'categories' | 'favorites') => void;
  favoritesCount: number;
  onOpenSubmitModal: () => void;
  onOpenAllPromptsModal?: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  favoritesCount,
  onOpenSubmitModal,
  onOpenAllPromptsModal,
  searchQuery,
  setSearchQuery,
}) => {
  const { user, isAuthenticated, signOut, openAuthModal } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl pointer-events-auto rounded-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] ring-1 ring-white/10 transition-all">
        
        {/* Minimal macOS Style Logo */}
        <button
          onClick={() => setActiveTab('library')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/20 transition-transform group-hover:scale-105">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-sm font-bold text-white tracking-tight font-sans-display flex items-center gap-1.5">
              VibePrompt
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold uppercase">
                macOS
              </span>
            </span>
          </div>
        </button>

        {/* Floating Menu Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 rounded-full p-1 border border-white/5">
          <button
            onClick={() => setActiveTab('library')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'library'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Prompts
          </button>

          {onOpenAllPromptsModal && (
            <button
              onClick={onOpenAllPromptsModal}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-cyan-300 hover:text-white hover:bg-cyan-500/10 transition-all flex items-center gap-1.5"
            >
              <Grid className="w-3.5 h-3.5 text-cyan-400" />
              <span>View All</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('builder')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'builder'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Builder
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'categories'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Categories
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
              activeTab === 'favorites'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Heart className={`h-3.5 w-3.5 ${favoritesCount > 0 ? 'fill-cyan-400 text-cyan-400' : ''}`} />
            <span>Saved</span>
            {favoritesCount > 0 && (
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-cyan-400/20 text-cyan-200">
                {favoritesCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2.5">
          {activeTab !== 'library' && (
            <button
              onClick={() => setActiveTab('library')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 hover:border-cyan-400 text-xs font-semibold text-zinc-300 hover:text-white transition-all shadow-md group cursor-pointer"
              title="Go back to main library page"
            >
              <X className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Main Page</span>
            </button>
          )}

          {/* Quick Search */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search (⌘K)..."
              className="bg-zinc-900/90 border border-white/10 rounded-full pl-8 pr-7 py-1.5 text-xs text-zinc-200 w-44 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder-zinc-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>

          {/* High-Contrast Dark CTA Button */}
          <button
            onClick={onOpenSubmitModal}
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-zinc-900 border border-white/15 px-4 py-1.5 text-xs font-bold text-white shadow-xl hover:bg-zinc-800 hover:border-cyan-400/50 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Submit Prompt</span>
            <span className="hidden sm:inline-flex items-center gap-0.5 ml-1 text-[10px] font-mono text-zinc-400 bg-zinc-800/80 px-1.5 py-0.5 rounded border border-white/10">
              <Command className="w-2.5 h-2.5" />
              N
            </span>
          </button>

          {/* Auth: Sign In / User Profile */}
          {isAuthenticated && user ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-full bg-zinc-900/80 border border-white/10 hover:border-indigo-500/50 transition-all group cursor-pointer"
                title={`Signed in as ${user.name}`}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-6 h-6 rounded-full ring-2 ring-indigo-500/40 group-hover:ring-indigo-400/60 transition-all"
                />
                <span className="text-xs font-semibold text-zinc-200 hidden sm:inline max-w-[80px] truncate">
                  {user.name}
                </span>
                <ChevronDown className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-zinc-800 shadow-2xl shadow-black/60 p-1.5 animate-in fade-in slide-in-from-top-2 duration-200 z-[60]">
                  {/* Glow accent */}
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                  
                  {/* User info */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/50 mb-1">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-xl ring-2 ring-indigo-500/30"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">{user.name}</p>
                      <p className="text-xs text-zinc-400 truncate">{user.email}</p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] text-emerald-400 font-medium capitalize">
                          via {user.provider}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Menu items */}
                  <button
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all group"
                  >
                    <User className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                    My Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('favorites')}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all group"
                  >
                    <Heart className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                    Saved Prompts
                    {favoritesCount > 0 && (
                      <span className="ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-cyan-400/15 text-cyan-300">
                        {favoritesCount}
                      </span>
                    )}
                  </button>

                  <div className="my-1 border-t border-zinc-800/80" />

                  <button
                    onClick={() => {
                      signOut();
                      setIsProfileOpen(false);
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all group"
                  >
                    <LogOut className="w-3.5 h-3.5 text-red-500/60 group-hover:text-red-400 transition-colors" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-xs font-bold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:brightness-110 transition-all group cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
