import React, { useState, useEffect, useRef } from 'react';
import { PromptCard } from './PromptCard';
import { UIPrompt, TargetTool } from '../types';
import { ChevronDown, Search, SearchX, Grid, X } from 'lucide-react';
import { Button, Chip, EmptyState, FieldLabel, Select, Spinner } from './ui/primitives';
import { cn } from '../lib/utils';

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
  'FinTech',
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

  const isFavoritesView = selectedCategory === 'Favorites';

  return (
    <section id="prompts-grid" className="bg-background py-10 sm:py-12">
      <div className="container-page">
        {/* View heading */}
        <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {isFavoritesView ? 'Saved prompts' : 'Prompt library'}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {isFavoritesView
                ? 'Prompts you have saved in this browser.'
                : 'Browse, filter and copy production-ready system prompts.'}
            </p>
          </div>

          {onOpenAllPromptsModal && (
            <Button variant="secondary" size="sm" onClick={onOpenAllPromptsModal}>
              <Grid className="h-3.5 w-3.5" />
              <span>Full-screen view</span>
            </Button>
          )}
        </div>

        {/* Filter toolbar */}
        <div className="mt-6 space-y-4">
          {/* Categories */}
          <div>
            <FieldLabel>Category</FieldLabel>
            <div className="-mx-1 flex items-center gap-1.5 overflow-x-auto px-1 pb-1 scrollbar-none">
              {CATEGORY_TABS.map((cat) => (
                <Chip key={cat} selected={selectedCategory === cat} onClick={() => setSelectedCategory(cat)}>
                  {cat}
                </Chip>
              ))}
            </div>
          </div>

          {/* Search + tool + sort */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              {setSearchQuery && (
                <div className="w-full sm:w-72">
                  <FieldLabel>Search</FieldLabel>
                  <div className="relative">
                    <Search
                      className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-subtle-foreground"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Title, description, tech stack…"
                      aria-label="Search prompts"
                      className={cn(
                        'h-9 w-full rounded-md border border-border bg-input pl-8 pr-8 text-sm text-foreground',
                        'placeholder:text-subtle-foreground transition-colors duration-150',
                        'hover:border-border-strong focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/25',
                      )}
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer text-subtle-foreground transition-colors hover:text-foreground"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div>
                <FieldLabel>Target tool</FieldLabel>
                <div className="-mx-1 flex items-center gap-1.5 overflow-x-auto px-1 pb-1 scrollbar-none">
                  {TARGET_TOOLS_FILTER.map((tool) => (
                    <Chip key={tool} selected={selectedTool === tool} onClick={() => setSelectedTool(tool)}>
                      {tool}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-3">
              <div>
                <FieldLabel>Sort</FieldLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'popular' | 'copies' | 'newest')}
                  aria-label="Sort prompts"
                  className="w-36"
                >
                  <option value="popular">Most liked</option>
                  <option value="copies">Most copied</option>
                  <option value="newest">Newest first</option>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Result count */}
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
          <p className="font-mono text-xs text-subtle-foreground">
            <span className="text-foreground">{visiblePrompts.length}</span>
            <span> / {sortedPrompts.length} prompts</span>
          </p>
          {(selectedCategory !== 'All' || selectedTool !== 'All') && !isFavoritesView && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTool('All');
              }}
            >
              Clear filters
            </Button>
          )}
        </div>

        {/* Grid */}
        {sortedPrompts.length > 0 ? (
          <>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

            {/* Pagination */}
            {hasMore ? (
              <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8">
                <div
                  className="h-0.5 w-full max-w-xs overflow-hidden rounded-full bg-surface-tertiary"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={sortedPrompts.length}
                  aria-valuenow={visiblePrompts.length}
                >
                  <div
                    className="h-full bg-foreground transition-all duration-300"
                    style={{ width: `${Math.min(100, (visiblePrompts.length / sortedPrompts.length) * 100)}%` }}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="md" onClick={handleLoadMore} disabled={isLoadingMore}>
                    {isLoadingMore ? (
                      <>
                        <Spinner className="h-3.5 w-3.5" />
                        <span>Loading</span>
                      </>
                    ) : (
                      <>
                        <span>
                          Load {Math.min(ITEMS_PER_PAGE, sortedPrompts.length - visiblePrompts.length)} more
                        </span>
                        <ChevronDown className="h-3.5 w-3.5 text-subtle-foreground" />
                      </>
                    )}
                  </Button>
                  <Button variant="ghost" size="md" onClick={handleLoadAll}>
                    Show all {sortedPrompts.length}
                  </Button>
                </div>

                {/* Auto-load sentinel */}
                <div ref={observerTarget} className="h-4 w-full" aria-hidden="true" />
              </div>
            ) : (
              sortedPrompts.length > ITEMS_PER_PAGE && (
                <p className="mt-10 border-t border-border pt-6 text-center font-mono text-xs text-subtle-foreground">
                  All {sortedPrompts.length} prompts shown
                </p>
              )
            )}
          </>
        ) : (
          <EmptyState
            className="mt-6"
            icon={SearchX}
            title={isFavoritesView ? 'No saved prompts yet' : 'No prompts found'}
            description={
              isFavoritesView
                ? 'Save a prompt from the library and it will appear here.'
                : 'Nothing matches the current filters. Try a different keyword or clear the filters.'
            }
            action={
              isFavoritesView ? (
                <Button variant="secondary" size="md" onClick={() => setSelectedCategory('All')}>
                  Browse the library
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedTool('All');
                    setSearchQuery?.('');
                  }}
                >
                  Clear filters
                </Button>
              )
            }
          />
        )}
      </div>
    </section>
  );
};
