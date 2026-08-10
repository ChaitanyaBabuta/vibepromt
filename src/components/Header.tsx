import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Heart, Plus, Search, Grid, LogIn, LogOut, User, ChevronDown, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { ThemeToggle } from './ThemeToggle';
import { Button, SegmentedControl, SegmentedOption } from './ui/primitives';
import { cn } from '../lib/utils';

type Tab = 'library' | 'builder' | 'categories' | 'favorites';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
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

  // Close profile dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!isProfileOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsProfileOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isProfileOpen]);

  const tabs: SegmentedOption<Tab>[] = [
    { value: 'library', label: 'Prompts' },
    { value: 'builder', label: 'Builder' },
    { value: 'categories', label: 'Categories' },
    {
      value: 'favorites',
      label: 'Saved',
      icon: Heart,
      badge:
        favoritesCount > 0 ? (
          <span className="ml-0.5 font-mono text-[10px] text-subtle-foreground">{favoritesCount}</span>
        ) : undefined,
    },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="container-page">
        {/* Primary row */}
        <div className="flex h-14 items-center justify-between gap-3">
          {/* Wordmark */}
          <button
            onClick={() => setActiveTab('library')}
            className={cn(
              'group flex shrink-0 cursor-pointer items-center gap-2.5 rounded-md py-1 pr-2',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            )}
            aria-label="VibePrompt home"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface-secondary text-foreground transition-colors duration-150 group-hover:border-border-strong">
              <Terminal className="h-3.5 w-3.5" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">VibePrompt</span>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-1.5" aria-label="Primary">
            <SegmentedControl options={tabs} value={activeTab} onChange={setActiveTab} />
            {onOpenAllPromptsModal && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onOpenAllPromptsModal}
                className="gap-1.5"
                aria-label="View all prompts"
              >
                <Grid className="h-3.5 w-3.5" />
                <span className="hidden xl:inline">View all</span>
              </Button>
            )}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Search (desktop) */}
            <div className="relative hidden lg:block">
              <Search
                className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-subtle-foreground"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search prompts"
                aria-label="Search prompts"
                className={cn(
                  'h-8 w-40 rounded-md border border-border bg-input pl-8 pr-7 text-[13px] text-foreground xl:w-56',
                  'placeholder:text-subtle-foreground transition-colors duration-150',
                  'hover:border-border-strong focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25',
                )}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-subtle-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <ThemeToggle />

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenSubmitModal}
              className="hidden sm:inline-flex"
            >
              <Plus className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Submit</span>
            </Button>

            {/* Compact submit on the smallest screens */}
            <Button
              variant="primary"
              size="icon-sm"
              onClick={onOpenSubmitModal}
              aria-label="Submit a prompt"
              className="sm:hidden"
            >
              <Plus className="h-3.5 w-3.5" />
            </Button>

            {/* Auth */}
            {isAuthenticated && user ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  aria-haspopup="menu"
                  aria-expanded={isProfileOpen}
                  title={`Signed in as ${user.name}`}
                  className={cn(
                    'flex h-8 cursor-pointer items-center gap-1.5 rounded-md border border-border bg-surface pl-1 pr-1.5',
                    'transition-colors duration-150 hover:bg-hover hover:border-border-strong',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  )}
                >
                  <img src={user.avatar} alt="" className="h-6 w-6 rounded" />
                  <span className="hidden max-w-[90px] truncate text-[13px] font-medium text-foreground sm:inline">
                    {user.name}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-3 w-3 text-subtle-foreground transition-transform duration-150',
                      isProfileOpen && 'rotate-180',
                    )}
                  />
                </button>

                {isProfileOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-full z-50 mt-2 w-60 overflow-hidden rounded-lg border border-border bg-surface p-1 shadow-popover animate-fade-in-up"
                  >
                    <div className="flex items-center gap-3 rounded-md bg-surface-secondary p-3">
                      <img src={user.avatar} alt="" className="h-9 w-9 rounded-md" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-semibold text-foreground">{user.name}</p>
                        <p className="truncate text-xs text-muted-foreground">{user.email}</p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-subtle-foreground">
                          via {user.provider}
                        </p>
                      </div>
                    </div>

                    <div className="mt-1">
                      <button
                        role="menuitem"
                        className="flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px] text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
                      >
                        <User className="h-3.5 w-3.5 shrink-0" />
                        My profile
                      </button>
                      <button
                        role="menuitem"
                        onClick={() => {
                          setActiveTab('favorites');
                          setIsProfileOpen(false);
                        }}
                        className="flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px] text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground"
                      >
                        <Heart className="h-3.5 w-3.5 shrink-0" />
                        <span className="flex-1">Saved prompts</span>
                        {favoritesCount > 0 && (
                          <span className="font-mono text-[11px] text-subtle-foreground">{favoritesCount}</span>
                        )}
                      </button>
                    </div>

                    <div className="my-1 h-px bg-border" />

                    <button
                      role="menuitem"
                      onClick={() => {
                        signOut();
                        setIsProfileOpen(false);
                      }}
                      className="flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px] text-destructive transition-colors duration-150 hover:bg-destructive-muted"
                    >
                      <LogOut className="h-3.5 w-3.5 shrink-0" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button variant="secondary" size="sm" onClick={openAuthModal} aria-label="Sign in">
                <LogIn className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Sign in</span>
              </Button>
            )}
          </div>
        </div>

        {/* Secondary row — navigation below lg, where the segmented control
            does not fit alongside the actions. Search at these widths lives in
            the library view itself. */}
        <div className="flex items-center gap-2 border-t border-border py-2 lg:hidden">
          <div className="-mx-1 flex-1 overflow-x-auto px-1 scrollbar-none">
            <SegmentedControl options={tabs} value={activeTab} onChange={setActiveTab} size="sm" />
          </div>
          {onOpenAllPromptsModal && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={onOpenAllPromptsModal}
              aria-label="View all prompts"
            >
              <Grid className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>

      </div>
    </header>
  );
};
