import React, { useState, useMemo } from 'react';
import { Search, Command, Grid } from 'lucide-react';
import { UIPrompt } from '../types';
import { CircularCarousel, CarouselItem } from './ui/circular-carousel';

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
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
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
    <section className="relative min-h-[85vh] pt-12 pb-20 overflow-hidden bg-supaste-gradient text-white selection:bg-cyan-400/30 selection:text-cyan-100">
      
      {/* Background Lighting Effects & Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-blue-600/10 to-transparent pointer-events-none" />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Primary Hero Title */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight text-white uppercase font-sans-display" style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>
            VibePrompt
          </h1>
        </div>

        {/* Floating macOS Container (Dark Frosted Glassmorphism Effect) */}
        <div className="mt-14 relative mx-auto max-w-5xl rounded-3xl md:rounded-[32px] bg-zinc-950/80 backdrop-blur-3xl border border-white/20 p-4 sm:p-7 shadow-[0_30px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
          
          {/* macOS Window Controls Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 px-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-sm inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/90 shadow-sm inline-block" />
              <span className="ml-3 text-xs font-mono text-zinc-400 hidden sm:inline-block">
                VibePrompt.app — macOS System Deck
              </span>
            </div>

            {/* Global Hotkey Indicator */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-lg">
              <Command className="w-3 h-3" />
              <span>Shift V</span>
            </div>
          </div>



          {/* Circular Carousel Showcase */}
          {carouselItems.length > 0 && (
            <div className="mt-6 relative rounded-2xl bg-zinc-900/50 border border-white/10 p-4 sm:p-6 overflow-hidden">
              <CircularCarousel
                items={carouselItems}
                activeIndex={activeCarouselIndex}
                onActiveChange={setActiveCarouselIndex}
                onSelectItem={handleCarouselSelect}
                autoPlay={true}
                autoPlayInterval={3600}
              />

              {/* Action bar for current selected item */}
              {activeItem && (
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 px-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-white font-bold">{activeItem.title}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full text-[10px] uppercase font-semibold">
                      {activeItem.tag}
                    </span>
                  </div>

                  {onOpenAllPromptsModal && (
                    <button
                      onClick={onOpenAllPromptsModal}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 px-3.5 py-1.5 text-xs font-bold text-zinc-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
                    >
                      <Grid className="w-3.5 h-3.5" />
                      <span>View All Prompts</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};


