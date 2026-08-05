import React, { useState, useEffect, useMemo, useRef } from 'react';
import { X, Search, Sparkles, SlidersHorizontal, ArrowUpDown, Filter, Terminal, SearchX, Check, Heart, Grid, ChevronDown, Loader2 } from 'lucide-react';
import { UIPrompt, TargetTool } from '../types';
import { PromptCard } from './PromptCard';

interface AllPromptsModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompts: UIPrompt[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectPrompt: (prompt: UIPrompt) => void;
  onCopyPrompt: (prompt: UIPrompt) => void;
  onOpenSubmitModal?: () => void;
}

const CATEGORY_FILTERS = [
  'All',
  'Dashboard',
  'Landing Page',
  'SaaS',
  'AI Agent UI',
  'Bento Grid',
  'E-commerce',
  'Mobile App',
  'Portfolio',
  'Analytics',
  'Dark Mode',
  'Minimalist',
  'Favorites'
];

const TARGET_TOOLS_FILTER: (TargetTool | 'All')[] = ['All', 'v0', 'Cursor', 'Bolt.new', 'Claude', 'Windsurf'];

const MODAL_ITEMS_PER_PAGE = 20;

export const AllPromptsModal: React.FC<AllPromptsModalProps> = ({
  isOpen,
  onClose,
  prompts,
  favorites,
  onToggleFavorite,
  onSelectPrompt,
  onCopyPrompt,
  onOpenSubmitModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTool, setSelectedTool] = useState<TargetTool | 'All'>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'copies' | 'newest'>('popular');
  const [visibleCount, setVisibleCount] = useState<number>(MODAL_ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const observerTarget = useRef<HTMLDivElement | null>(null);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset pagination count when filters/search/sort change
  useEffect(() => {
    setVisibleCount(MODAL_ITEMS_PER_PAGE);
  }, [selectedCategory, selectedTool, sortBy, searchQuery]);

  const filteredPrompts = useMemo(() => {
    return prompts.filter((p) => {
      // Category filter
      if (selectedCategory === 'Favorites') {
        if (!favorites.includes(p.id)) return false;
      } else if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }

      // Tool filter
      if (selectedTool !== 'All' && !p.targetTools.includes(selectedTool as TargetTool)) {
        return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchPrompt = p.fullPrompt.toLowerCase().includes(q);
        const matchTech = p.techStack.some((t) => t.toLowerCase().includes(q));
        const matchCategory = p.category.toLowerCase().includes(q);
        const matchStyle = p.style.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchPrompt && !matchTech && !matchCategory && !matchStyle) {
          return false;
        }
      }

      return true;
    });
  }, [prompts, favorites, selectedCategory, selectedTool, searchQuery]);

  const sortedPrompts = useMemo(() => {
    return [...filteredPrompts].sort((a, b) => {
      if (sortBy === 'copies') return b.copies - a.copies;
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return b.likes - a.likes;
    });
  }, [filteredPrompts, sortBy]);

  const visiblePrompts = useMemo(() => {
    return sortedPrompts.slice(0, visibleCount);
  }, [sortedPrompts, visibleCount]);

  const hasMore = visibleCount < sortedPrompts.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + MODAL_ITEMS_PER_PAGE, sortedPrompts.length));
      setIsLoadingMore(false);
    }, 200);
  };

  const handleLoadAll = () => {
    setVisibleCount(sortedPrompts.length);
  };

  // Infinite scroll observer for modal
  useEffect(() => {
    if (!isOpen || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [isOpen, hasMore, visibleCount, sortedPrompts.length]);

  if (!isOpen) return null;

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTool('All');
    setSortBy('popular');
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || selectedTool !== 'All';

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-zinc-950/98 text-zinc-100 backdrop-blur-2xl animate-in fade-in duration-200 overflow-hidden">
      
      {/* Modal Top Header Bar */}
      <div className="shrink-0 border-b border-zinc-800/80 bg-zinc-950/90 px-4 sm:px-6 py-4 shadow-xl">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Header Title & Counter */}
          <div className="flex items-center justify-between md:justify-start gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/20">
                <Grid className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
                  All Curated Prompts
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {sortedPrompts.length} {sortedPrompts.length === 1 ? 'Prompt' : 'Prompts'}
                  </span>
                </h2>
                <p className="text-xs text-zinc-400 hidden sm:block">
                  Browse, search, and copy production-ready system prompts for v0, Cursor, and Bolt.
                </p>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white"
              title="Go back to main page"
            >
              <X className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* Search Field */}
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all prompts by keyword, tech stack, or component..."
              className="w-full bg-zinc-900/90 border border-zinc-700/80 rounded-2xl py-2.5 pl-10 pr-10 text-xs sm:text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ×
              </button>
            )}
          </div>

          {/* Actions & Close Desktop Button */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {onOpenSubmitModal && (
              <button
                onClick={() => {
                  onClose();
                  onOpenSubmitModal();
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-600/20 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Submit Prompt</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="flex items-center gap-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-400 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:text-white transition-all cursor-pointer shadow-md group"
              title="Go back to main page (ESC)"
            >
              <span>Main Page</span>
              <X className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </button>
          </div>

        </div>

        {/* Filter Controls Bar */}
        <div className="mx-auto max-w-7xl mt-4 pt-3 border-t border-zinc-800/60 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Category Chips Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-zinc-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat === 'Favorites' ? (
                  <span className="flex items-center gap-1">
                    <Heart className={`w-3 h-3 ${favorites.length > 0 ? 'fill-red-400 text-red-400' : ''}`} />
                    Favorites ({favorites.length})
                  </span>
                ) : (
                  cat
                )}
              </button>
            ))}
          </div>

          {/* Tools & Sort Selection */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2 shrink-0">
            
            {/* Target Tools Filter */}
            <div className="flex items-center gap-1 bg-zinc-900/90 border border-zinc-800 rounded-xl p-1 text-xs">
              <span className="text-[10px] uppercase font-mono text-zinc-500 px-1.5 hidden sm:inline">Tool:</span>
              {TARGET_TOOLS_FILTER.map((tool) => (
                <button
                  key={tool}
                  onClick={() => setSelectedTool(tool)}
                  className={`px-2 py-0.5 rounded-lg text-[11px] font-medium transition-colors ${
                    selectedTool === tool
                      ? 'bg-zinc-800 text-cyan-300 font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 rounded-xl px-2.5 py-1 text-xs text-zinc-300">
              <ArrowUpDown className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-[10px] text-zinc-500 font-mono uppercase hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-zinc-200 font-medium focus:outline-none cursor-pointer"
              >
                <option value="popular" className="bg-zinc-900 text-white">Most Popular</option>
                <option value="copies" className="bg-zinc-900 text-white">Most Copied</option>
                <option value="newest" className="bg-zinc-900 text-white">Newest First</option>
              </select>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-cyan-400 hover:text-cyan-300 hover:underline px-2 py-1 font-semibold"
              >
                Reset Filters
              </button>
            )}

          </div>

        </div>
      </div>

      {/* Modal Main Scrollable Body: Full-Screen Prompts Grid */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-7xl">
          
          {sortedPrompts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-6">
                {visiblePrompts.map((prompt) => (
                  <PromptCard
                    key={prompt.id}
                    prompt={prompt}
                    isFavorite={favorites.includes(prompt.id)}
                    onToggleFavorite={onToggleFavorite}
                    onSelectPrompt={(p) => {
                      // Open prompt detail
                      onSelectPrompt(p);
                    }}
                    onCopyPrompt={onCopyPrompt}
                  />
                ))}
              </div>

              {/* Load More Pagination */}
              {hasMore ? (
                <div className="pb-12 pt-4 flex flex-col items-center justify-center gap-3">
                  <div className="w-full max-w-sm bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-zinc-800">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-300 rounded-full"
                      style={{ width: `${Math.min(100, (visiblePrompts.length / sortedPrompts.length) * 100)}%` }}
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-500/50 text-xs font-bold text-zinc-200 hover:text-white transition-all shadow-lg cursor-pointer disabled:opacity-50"
                    >
                      {isLoadingMore ? (
                        <>
                          <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                          <span>Loading more...</span>
                        </>
                      ) : (
                        <>
                          <span>Load More Prompts (+{Math.min(MODAL_ITEMS_PER_PAGE, sortedPrompts.length - visiblePrompts.length)})</span>
                          <ChevronDown className="w-4 h-4 text-cyan-400" />
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleLoadAll}
                      className="px-3.5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
                    >
                      Show All ({sortedPrompts.length})
                    </button>
                  </div>

                  <div ref={observerTarget} className="h-4 w-full" />
                </div>
              ) : (
                <div className="pb-12 text-center text-xs text-zinc-500 font-mono">
                  ✓ Showing all {sortedPrompts.length} system prompts
                </div>
              )}
            </>
          ) : (
            <div className="my-16 py-16 text-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/30 max-w-xl mx-auto px-6">
              <SearchX className="mx-auto h-12 w-12 text-zinc-600 mb-3" />
              <h3 className="text-base font-extrabold text-white">No Prompts Match Your Criteria</h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto leading-relaxed">
                We couldn't find any system prompts matching <span className="text-cyan-300 font-mono">"{searchQuery || selectedCategory}"</span>. Try adjusting your filters or search keywords.
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-600/20 transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Modal Bottom Footer Info */}
      <div className="shrink-0 border-t border-zinc-800/80 bg-zinc-950 px-4 sm:px-6 py-2.5 text-xs text-zinc-500 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Showing <strong className="text-zinc-200">{sortedPrompts.length}</strong> of <strong className="text-zinc-200">{prompts.length}</strong> system prompts</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">ESC</kbd> to close</span>
        </div>
      </div>

    </div>
  );
};
