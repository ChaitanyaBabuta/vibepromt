import React, { useState, useEffect, useMemo, useRef } from 'react';
import { X, Search, Plus, SearchX, Heart, ChevronDown } from 'lucide-react';
import { UIPrompt, TargetTool } from '../types';
import { PromptCard } from './PromptCard';
import { Button, Chip, EmptyState, Select, Spinner } from './ui/primitives';
import { cn } from '../lib/utils';

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
  'FinTech',
  'Favorites',
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
    <div
      role="dialog"
      aria-modal="true"
      aria-label="All prompts"
      className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-background animate-fade-in"
    >
      {/* Header */}
      <div className="shrink-0 border-b border-border bg-background">
        <div className="container-page">
          <div className="flex h-14 items-center justify-between gap-3">
            <div className="flex min-w-0 items-baseline gap-2.5">
              <h2 className="text-[15px] font-semibold tracking-tight text-foreground">All prompts</h2>
              <span className="font-mono text-xs text-subtle-foreground">
                {sortedPrompts.length} of {prompts.length}
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {onOpenSubmitModal && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    onClose();
                    onOpenSubmitModal();
                  }}
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Submit</span>
                </Button>
              )}
              <Button variant="ghost" size="sm" onClick={onClose} title="Close (Esc)">
                <span className="hidden sm:inline">Close</span>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-3 border-t border-border py-3 lg:flex-row lg:items-center">
            <div className="relative lg:w-80">
              <Search
                className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-subtle-foreground"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search keyword, tech stack, component…"
                aria-label="Search all prompts"
                autoFocus
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

            <div className="flex flex-1 items-center gap-2 overflow-x-auto scrollbar-none">
              {TARGET_TOOLS_FILTER.map((tool) => (
                <Chip key={tool} selected={selectedTool === tool} onClick={() => setSelectedTool(tool)}>
                  {tool}
                </Chip>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
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

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  Reset
                </Button>
              )}
            </div>
          </div>

          {/* Category row */}
          <div className="-mx-1 flex items-center gap-1.5 overflow-x-auto border-t border-border px-1 py-2.5 scrollbar-none">
            {CATEGORY_FILTERS.map((cat) => (
              <Chip key={cat} selected={selectedCategory === cat} onClick={() => setSelectedCategory(cat)}>
                {cat === 'Favorites' ? (
                  <>
                    <Heart className={cn('h-3 w-3', favorites.length > 0 && 'fill-current')} />
                    <span>Saved ({favorites.length})</span>
                  </>
                ) : (
                  cat
                )}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        <div className="container-page py-6">
          {sortedPrompts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                            Load {Math.min(MODAL_ITEMS_PER_PAGE, sortedPrompts.length - visiblePrompts.length)} more
                          </span>
                          <ChevronDown className="h-3.5 w-3.5 text-subtle-foreground" />
                        </>
                      )}
                    </Button>
                    <Button variant="ghost" size="md" onClick={handleLoadAll}>
                      Show all {sortedPrompts.length}
                    </Button>
                  </div>

                  <div ref={observerTarget} className="h-4 w-full" aria-hidden="true" />
                </div>
              ) : (
                sortedPrompts.length > MODAL_ITEMS_PER_PAGE && (
                  <p className="mt-10 border-t border-border pt-6 text-center font-mono text-xs text-subtle-foreground">
                    All {sortedPrompts.length} prompts shown
                  </p>
                )
              )}
            </>
          ) : (
            <EmptyState
              className="mx-auto max-w-xl"
              icon={SearchX}
              title="No prompts match your filters"
              description={
                <>
                  Nothing found for{' '}
                  <span className="font-mono text-foreground">
                    “{searchQuery || selectedCategory}”
                  </span>
                  . Try a different keyword or reset the filters.
                </>
              }
              action={
                <Button variant="secondary" size="md" onClick={resetFilters}>
                  Reset filters
                </Button>
              }
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 border-t border-border bg-surface-secondary">
        <div className="container-page flex h-10 items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-subtle-foreground">
            Showing {visiblePrompts.length} of {sortedPrompts.length}
          </p>
          <p className="hidden items-center gap-1.5 font-mono text-[11px] text-subtle-foreground sm:flex">
            <kbd className="inline-flex h-5 items-center rounded border border-border bg-surface px-1.5 text-[10px]">
              Esc
            </kbd>
            <span>to close</span>
          </p>
        </div>
      </div>
    </div>
  );
};
