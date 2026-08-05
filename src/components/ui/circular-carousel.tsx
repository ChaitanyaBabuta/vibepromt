"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { UIPrompt } from "@/types";

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
  rawPrompt?: UIPrompt;
}

export interface CircularCarouselProps {
  items: CarouselItem[];
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
  onSelectItem?: (item: CarouselItem, index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const VISIBLE_COUNT = 5;
const RADIUS_X = 230;
const RADIUS_Y = 85;

function getItemPosition(index: number, activeIndex: number, total: number) {
  let adjustedOffset = index - activeIndex;
  const half = Math.floor(VISIBLE_COUNT / 2); // 2

  // Standardize wraparound for seamless active item rotation
  if (adjustedOffset > total / 2) adjustedOffset -= total;
  if (adjustedOffset < -total / 2) adjustedOffset += total;

  // Strictly display a maximum of 5 active items in rotation at a time (-2, -1, 0, 1, 2)
  if (Math.abs(adjustedOffset) > half) return null;

  const angle = (adjustedOffset / half) * (Math.PI / 3.2);
  const x = Math.sin(angle) * RADIUS_X;
  const y = (1 - Math.cos(angle)) * RADIUS_Y * 0.45 - RADIUS_Y * 0.25;

  const distance = Math.abs(adjustedOffset);
  const scale = distance === 0 ? 1 : distance === 1 ? 0.84 : 0.68;
  const opacity = distance === 0 ? 1 : distance === 1 ? 0.75 : 0.35;
  const zIndex = VISIBLE_COUNT - distance;

  return { x, y, scale, opacity, zIndex, adjustedOffset };
}

export function CircularCarousel({
  items,
  activeIndex: controlledIndex,
  onActiveChange,
  onSelectItem,
  autoPlay = true,
  autoPlayInterval = 4000,
  className,
}: CircularCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const total = items.length;
  const rawIndex = controlledIndex ?? internalIndex;
  const activeIndex = total > 0 ? ((rawIndex % total) + total) % total : 0;

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      const newIndex = ((index % total) + total) % total;
      if (controlledIndex === undefined) {
        setInternalIndex(newIndex);
      }
      onActiveChange?.(newIndex);
    },
    [total, controlledIndex, onActiveChange],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoPlay || isHovered || isFocused || total === 0) return;
    intervalRef.current = setInterval(next, autoPlayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, isHovered, isFocused, next, total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const el = containerRef.current;
    el?.addEventListener("keydown", handler);
    return () => el?.removeEventListener("keydown", handler);
  }, [next, prev]);

  const activeItem = items[activeIndex];

  if (!items || items.length === 0) {
    return null;
  }

  const handleCardClick = (i: number) => {
    if (i !== activeIndex) {
      goTo(i);
    }
    onSelectItem?.(items[i], i);
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Circular carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        "relative flex flex-col items-center justify-center gap-8 outline-none select-none",
        className,
      )}
    >
      {/* Circular track */}
      <div className="relative h-[280px] w-full max-w-lg">
        {/* Center content counter badge */}
        {activeItem && (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-0"
          >
            {/* Subtle background index watermark */}
            <span className="text-7xl font-black tracking-tighter text-white/5 font-mono select-none">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            {/* Center Badge showing active prompt out of total */}
            <div className="-mt-7 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-950/90 border border-zinc-800 shadow-xl backdrop-blur-md text-xs font-mono font-semibold text-white">
              <span className="text-red-400 font-extrabold">{activeIndex + 1}</span>
              <span className="text-zinc-500 font-normal">of</span>
              <span className="text-zinc-300 font-bold">{total}</span>
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const pos = getItemPosition(i, activeIndex, total);
            if (!pos) return null;

            const isActive = i === activeIndex;

            return (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 190,
                  damping: 24,
                  mass: 0.8,
                }}
                onClick={() => handleCardClick(i)}
                aria-label={item.title}
                aria-selected={isActive}
                role="option"
                className={cn(
                  "absolute left-1/2 top-1/2 flex h-36 w-52 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-start justify-between rounded-2xl border p-4 backdrop-blur-md transition-colors duration-200 group",
                  isActive
                    ? "border-red-500/80 bg-gradient-to-b from-zinc-900 via-red-950/20 to-zinc-950 shadow-[0_20px_50px_-10px_rgba(239,68,68,0.3)] ring-1 ring-red-500/40"
                    : "border-zinc-800/80 bg-zinc-900/90 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)] hover:border-red-500/50 hover:bg-zinc-800/90 hover:shadow-[0_12px_32px_-4px_rgba(239,68,68,0.15)]",
                )}
                style={{ transformOrigin: "center center" }}
              >
                <div className="flex items-center justify-between w-full">
                  {item.tag && (
                    <span className="rounded-md bg-red-500/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-red-400 border border-red-500/20">
                      {item.tag}
                    </span>
                  )}
                  {isActive && (
                    <span className="flex items-center gap-1 text-[9px] font-mono text-red-300 opacity-80 group-hover:opacity-100 transition-opacity">
                      <span>OPEN</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  )}
                </div>

                <div className="w-full text-left">
                  <h3
                    className={cn(
                      "font-bold leading-tight transition-colors duration-300 line-clamp-1",
                      isActive
                        ? "text-white text-sm group-hover:text-red-300"
                        : "text-zinc-400 text-xs group-hover:text-zinc-200",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 line-clamp-2 text-[11px] leading-relaxed transition-colors duration-300",
                      isActive ? "text-zinc-300" : "text-zinc-500",
                    )}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 z-10">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          aria-label="Previous item"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 backdrop-blur-sm transition-colors hover:bg-red-600 hover:text-white hover:border-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          <ChevronLeft className="size-4" />
        </motion.button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-6 bg-red-500"
                  : "w-1.5 bg-zinc-800 hover:bg-zinc-600",
              )}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          aria-label="Next item"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 backdrop-blur-sm transition-colors hover:bg-red-600 hover:text-white hover:border-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        >
          <ChevronRight className="size-4" />
        </motion.button>
      </div>
    </div>
  );
}

export default CircularCarousel;
