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
const CARD_WIDTH = 208; // w-52

/** Widest arc that still keeps the outermost card inside the container. */
function radiusForWidth(width: number) {
  if (!width) return RADIUS_X;
  const outermostScale = 0.68;
  const room = width / 2 - (CARD_WIDTH * outermostScale) / 2;
  return Math.max(96, Math.min(RADIUS_X, room / Math.sin(Math.PI / 3.2)));
}

function getItemPosition(index: number, activeIndex: number, total: number, radiusX: number) {
  let adjustedOffset = index - activeIndex;
  const half = Math.floor(VISIBLE_COUNT / 2); // 2

  // Standardize wraparound for seamless active item rotation
  if (adjustedOffset > total / 2) adjustedOffset -= total;
  if (adjustedOffset < -total / 2) adjustedOffset += total;

  // Strictly display a maximum of 5 active items in rotation at a time (-2, -1, 0, 1, 2)
  if (Math.abs(adjustedOffset) > half) return null;

  const angle = (adjustedOffset / half) * (Math.PI / 3.2);
  const x = Math.sin(angle) * radiusX;
  const y = (1 - Math.cos(angle)) * RADIUS_Y * 0.45 - RADIUS_Y * 0.25;

  const distance = Math.abs(adjustedOffset);
  const scale = distance === 0 ? 1 : distance === 1 ? 0.84 : 0.68;
  const opacity = distance === 0 ? 1 : distance === 1 ? 0.85 : 0.55;
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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);

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

  // Keep the arc inside the track on narrow viewports.
  useEffect(() => {
    const el = trackRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(([entry]) => setTrackWidth(entry.contentRect.width));
    observer.observe(el);
    setTrackWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  const radiusX = radiusForWidth(trackWidth);
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
        "relative flex flex-col items-center justify-center gap-6 outline-none select-none",
        className,
      )}
    >
      {/* Circular track */}
      <div ref={trackRef} className="relative h-[250px] w-full max-w-lg">
        {/* Center index watermark */}
        {activeItem && (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-0"
          >
            <span className="font-mono text-7xl font-medium tracking-tighter text-foreground/[0.06] select-none">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
          </motion.div>
        )}

        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const pos = getItemPosition(i, activeIndex, total, radiusX);
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
                  "group absolute left-1/2 top-1/2 flex h-36 w-44 -translate-x-1/2 sm:w-52 -translate-y-1/2 cursor-pointer flex-col items-start justify-between rounded-lg border p-3.5 transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "border-border-strong bg-surface shadow-popover"
                    : "border-border bg-surface-secondary hover:border-border-strong hover:bg-hover",
                )}
                style={{ transformOrigin: "center center" }}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  {item.tag && (
                    <span
                      className={cn(
                        "truncate rounded px-1.5 py-0.5 font-mono text-[9px] font-medium uppercase tracking-wider",
                        isActive
                          ? "bg-surface-tertiary text-muted-foreground"
                          : "text-subtle-foreground",
                      )}
                    >
                      {item.tag}
                    </span>
                  )}
                  {isActive && (
                    <span className="flex shrink-0 items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-subtle-foreground transition-colors group-hover:text-accent">
                      <span>Open</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </span>
                  )}
                </div>

                <div className="w-full text-left">
                  <h3
                    className={cn(
                      "line-clamp-1 font-semibold leading-tight transition-colors duration-200",
                      isActive ? "text-[13px] text-foreground" : "text-xs text-muted-foreground",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-1 line-clamp-2 text-[11px] leading-relaxed transition-colors duration-200",
                      isActive ? "text-muted-foreground" : "text-subtle-foreground",
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
      <div className="z-10 flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous item"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ChevronLeft className="size-4" />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 cursor-pointer rounded-full transition-all duration-200",
                i === activeIndex
                  ? "w-5 bg-foreground"
                  : "w-1.5 bg-border-strong hover:bg-subtle-foreground",
              )}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next item"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border bg-surface text-muted-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

export default CircularCarousel;
