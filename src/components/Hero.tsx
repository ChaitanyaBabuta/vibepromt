import React, { useMemo, useState } from 'react';
import { ArrowRight, Check, Copy, Grid, Wand2 } from 'lucide-react';
import { UIPrompt } from '../types';
import { CircularCarousel, CarouselItem } from './ui/circular-carousel';
import { Badge, Button } from './ui/primitives';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onOpenBuilder: () => void;
  onOpenAllPromptsModal?: () => void;
  prompts?: UIPrompt[];
  onSelectPrompt?: (prompt: UIPrompt) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBuilder,
  onOpenAllPromptsModal,
  prompts = [],
  onSelectPrompt,
}) => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);

  // Map prompts array into CircularCarousel item structure
  const carouselItems: CarouselItem[] = useMemo(() => {
    if (!prompts || prompts.length === 0) return [];
    return prompts.slice(0, 8).map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      tag: p.category,
      rawPrompt: p,
    }));
  }, [prompts]);

  // Library figures, derived from the real catalogue
  const stats = useMemo(() => {
    const categories = new Set(prompts.map((p) => p.category));
    const tools = new Set(prompts.flatMap((p) => p.targetTools));
    return [
      { label: 'Prompts', value: prompts.length },
      { label: 'Categories', value: categories.size },
      { label: 'Target tools', value: tools.size },
    ];
  }, [prompts]);

  const activeItem = carouselItems[activeCarouselIndex] || carouselItems[0];

  const handleCarouselSelect = (item: CarouselItem) => {
    if (item.rawPrompt) {
      onSelectPrompt?.(item.rawPrompt);
    } else {
      const found = prompts.find((p) => p.id === item.id);
      if (found) {
        onSelectPrompt?.(found);
      }
    }
  };

  const handleCopyActivePrompt = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItem?.rawPrompt) {
      navigator.clipboard.writeText(activeItem.rawPrompt.fullPrompt || activeItem.description);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2200);
    }
  };

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Hairline grid, masked to a whisper — the only decorative element */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.55] dark:opacity-25" aria-hidden="true" />

      <div className="container-page relative">
        <div className="pt-14 pb-12 sm:pt-20 sm:pb-16">
          {/* Copy block */}
          <div className="max-w-3xl">
            <Badge variant="outline" className="font-mono uppercase tracking-wider">
              Prompt library &amp; builder
            </Badge>

            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              Battle-tested prompts for building interfaces
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A curated library of production-grade system prompts for v0, Cursor, Bolt.new, Claude and
              Windsurf — plus a builder for composing your own. Copy, paste, ship.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              {onOpenAllPromptsModal && (
                <Button variant="primary" size="lg" onClick={onOpenAllPromptsModal}>
                  <Grid className="h-4 w-4" />
                  <span>Browse all prompts</span>
                </Button>
              )}
              <Button variant="secondary" size="lg" onClick={onOpenBuilder}>
                <Wand2 className="h-4 w-4" />
                <span>Open builder</span>
                <ArrowRight className="h-3.5 w-3.5 text-subtle-foreground" />
              </Button>
            </div>

            {/* Library figures */}
            <dl className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-mono text-2xl font-medium tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                  <dt className="mt-0.5 text-xs font-medium uppercase tracking-wider text-subtle-foreground">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* Showcase carousel */}
          {carouselItems.length > 0 && (
            <div className="mt-14 overflow-hidden rounded-xl border border-border bg-surface-secondary sm:mt-16">
              <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-subtle-foreground">
                  Featured
                </span>
                <span className="font-mono text-[11px] text-subtle-foreground">
                  {activeCarouselIndex + 1} / {carouselItems.length}
                </span>
              </div>

              <div className="px-4 py-4 sm:px-6 sm:py-6">
                <CircularCarousel
                  items={carouselItems}
                  activeIndex={activeCarouselIndex}
                  onActiveChange={setActiveCarouselIndex}
                  onSelectItem={handleCarouselSelect}
                  autoPlay={true}
                  autoPlayInterval={3600}
                />
              </div>

              {/* Action bar for the current item */}
              {activeItem && (
                <div className="flex flex-col gap-3 border-t border-border bg-surface px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="truncate text-[13px] font-medium text-foreground">
                      {activeItem.title}
                    </span>
                    {activeItem.tag && <Badge variant="neutral">{activeItem.tag}</Badge>}
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <Button variant="secondary" size="sm" onClick={handleCopyActivePrompt}>
                      {copiedToast ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-success" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => activeItem && handleCarouselSelect(activeItem)}
                    >
                      <span>Open</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
