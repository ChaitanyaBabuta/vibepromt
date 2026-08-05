import React, { useState, useEffect, useRef } from 'react';
import { PromptCard } from './PromptCard';
import { UIPrompt, TargetTool } from '../types';
import { ArrowUpDown, SearchX, Grid, Search, ChevronDown, Sparkles, Loader2 } from 'lucide-react';

interface PromptGridProps {
  prompts: UIPrompt[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectPrompt: (prompt: UIPrompt) => void;
  onCopyPrompt: (prompt: UIPrompt) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery?: (query: string) => void;
  onOpenAllPromptsModal?: () => void;
}

const CATEGORY_TABS = [
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
];

const TARGET_TOOLS_FILTER: (TargetTool | 'All')[] = ['All', 'v0', 'Cursor', 'Bolt.new', 'Claude', 'Windsurf'];

const ITEMS_PER_PAGE = 18;

export const PromptGrid: React.FC<PromptGridProps> = ({
  prompts,
  favorites,
  onToggleFavorite,
  onSelectPrompt,
  onCopyPrompt,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  onOpenAllPromptsModal,
}) => {
  const [selectedTool, setSelectedTool] = useState<TargetTool | 'All'>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'copies' | 'newest'>('popular');
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const observerTarget = useRef<HTMLDivElement | null>(null);

  // Reset pagination count when filters/search/sort change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [selectedCategory, selectedTool, sortBy, searchQuery]);

  const filteredPrompts = prompts.filter((p) => {
    if (selectedCategory === 'Favorites') {
      if (!favorites.includes(p.id)) return false;
    } else if (selectedCategory !== 'All' && p.category !== selectedCategory) {
      return false;
    }

    if (selectedTool !== 'All' && !p.targetTools.includes(selectedTool as TargetTool)) {
      return false;
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchPrompt = p.fullPrompt.toLowerCase().includes(q);
      const matchTech = p.techStack.some((t) => t.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchPrompt && !matchTech) {
        return false;
      }
    }

    return true;
  });

  const sortedPrompts = [...filteredPrompts].sort((a, b) => {
    if (sortBy === 'copies') return b.copies - a.copies;
    if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return b.likes - a.likes;
  });

  const visiblePrompts = sortedPrompts.slice(0, visibleCount);
  const hasMore = visibleCount < sortedPrompts.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, sortedPrompts.length));
      setIsLoadingMore(false);
    }, 200);
  };

  const handleLoadAll = () => {
    setVisibleCount(sortedPrompts.length);
  };

  // Infinite scroll observer
  useEffect(() => {
    if (!hasMore) return;

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
  }, [hasMore, visibleCount, sortedPrompts.length]);

  return (
    <section id="prompts-grid" className="py-8 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80 mb-6">
          
          {/* Categories */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORY_TABS.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tools & Sorting */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 text-xs">
              {TARGET_TOOLS_FILTER.map((tool) => (
                <button
                  key={tool}
                  onClick={() => setSelectedTool(tool)}
                  className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                    selectedTool === tool
                      ? 'bg-zinc-800 text-red-300'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg px-2 py-1 text-xs text-zinc-300">
              <ArrowUpDown className="h-3 w-3 text-zinc-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-zinc-300 focus:outline-none cursor-pointer"
              >
                <option value="popular">Popular</option>
                <option value="copies">Copied</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

        </div>

        {/* Search Bar & Count & Full View Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            {setSearchQuery && (
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search prompts..."
                  className="w-full bg-zinc-900/90 border border-zinc-700/80 rounded-xl py-1.5 pl-9 pr-8 text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400 hover:text-white"
                  >
                    ×
                  </button>
                )}
              </div>
            )}
            <p className="text-xs font-mono text-zinc-400 whitespace-nowrap">
              Showing <span className="text-white font-bold">{visiblePrompts.length}</span> of <span className="text-cyan-300 font-bold">{sortedPrompts.length}</span> prompts
            </p>
          </div>
          <div className="flex items-center gap-3">
            {onOpenAllPromptsModal && (
              <button
                onClick={onOpenAllPromptsModal}
                className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 px-3 py-1 text-xs font-bold text-cyan-300 hover:text-white transition-all shadow-sm"
              >
                <Grid className="w-3.5 h-3.5 text-cyan-400" />
                <span>View All Prompts Modal</span>
              </button>
            )}
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-xs text-red-400 hover:underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Prompts Grid */}
        {sortedPrompts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visiblePrompts.map((prompt) => (
                <PromptCard
                  key={prompt.id}
                  prompt={prompt}
                  isFavorite={favorites.includes(prompt.id)}
                  onToggleFavorite={onToggleFavorite}
                  onSelectPrompt={onSelectPrompt}
                  onCopyPrompt={onCopyPrompt}
                />
              ))}
            </div>

            {/* Pagination Controls & Load More */}
            {hasMore ? (
              <div className="mt-8 pt-6 border-t border-zinc-800/60 flex flex-col items-center justify-center gap-3">
                
                {/* Progress bar */}
                <div className="w-full max-w-md bg-zinc-900 rounded-full h-1.5 overflow-hidden border border-zinc-800">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${Math.min(100, (visiblePrompts.length / sortedPrompts.length) * 100)}%` }}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-500/50 text-xs font-bold text-zinc-200 hover:text-white transition-all shadow-lg hover:shadow-cyan-500/10 cursor-pointer disabled:opacity-50"
                  >
                    {isLoadingMore ? (
                      <>
                        <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                        <span>Loading more...</span>
                      </>
                    ) : (
                      <>
                        <span>Load More Prompts (+{Math.min(ITEMS_PER_PAGE, sortedPrompts.length - visiblePrompts.length)})</span>
                        <ChevronDown className="w-4 h-4 text-cyan-400" />
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleLoadAll}
                    className="px-3.5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
                  >
                    Show All ({sortedPrompts.length})
                  </button>
                </div>

                {/* Auto Scroll Sentinel */}
                <div ref={observerTarget} className="h-4 w-full" />
              </div>
            ) : sortedPrompts.length > ITEMS_PER_PAGE && (
              <div className="mt-8 text-center text-xs text-zinc-500 font-mono">
                ✓ Showing all {sortedPrompts.length} prompts
              </div>
            )}
          </>
        ) : (
          <div className="py-16 text-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/20">
            <SearchX className="mx-auto h-10 w-10 text-zinc-600 mb-2" />
            <h3 className="text-sm font-bold text-white">No Prompts Found</h3>
            <p className="text-xs text-zinc-500 mt-1">
              Try adjusting your search or resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTool('All');
              }}
              className="mt-3 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

