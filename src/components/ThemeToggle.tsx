import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Moon, Sun, Check } from 'lucide-react';
import { useTheme, ThemeMode } from '../contexts/ThemeContext';
import { cn } from '../lib/utils';
import { Tooltip } from './ui/primitives';

const OPTIONS: { value: ThemeMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
];

/**
 * Header theme control. Click toggles light/dark immediately; the caret opens
 * the full Light / Dark / System menu.
 */
export const ThemeToggle: React.FC = () => {
  const { mode, resolvedTheme, setMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const ActiveIcon = mode === 'system' ? Monitor : resolvedTheme === 'dark' ? Moon : Sun;

  return (
    <div ref={containerRef} className="relative flex items-center">
      <div className="flex items-center rounded-md border border-border bg-surface">
        <Tooltip label={resolvedTheme === 'dark' ? 'Switch to light' : 'Switch to dark'}>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className={cn(
              'flex h-8 w-8 cursor-pointer items-center justify-center rounded-l-md text-muted-foreground',
              'transition-colors duration-150 hover:bg-hover hover:text-foreground',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset',
            )}
          >
            <ActiveIcon className="h-4 w-4" />
          </button>
        </Tooltip>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Theme options"
          aria-haspopup="menu"
          aria-expanded={isOpen}
          className={cn(
            'flex h-8 w-5 cursor-pointer items-center justify-center rounded-r-md border-l border-border',
            'text-subtle-foreground transition-colors duration-150 hover:bg-hover hover:text-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset',
          )}
        >
          <svg viewBox="0 0 10 6" className="h-1.5 w-2.5 fill-current" aria-hidden="true">
            <path d="M0 0h10L5 6z" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          role="menu"
          className={cn(
            'absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-lg border border-border',
            'bg-surface p-1 shadow-popover animate-fade-in-up',
          )}
        >
          {OPTIONS.map((option) => {
            const Icon = option.icon;
            const isActive = mode === option.value;
            return (
              <button
                key={option.value}
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => {
                  setMode(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  'flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px]',
                  'transition-colors duration-150',
                  isActive
                    ? 'bg-hover font-medium text-foreground'
                    : 'text-muted-foreground hover:bg-hover hover:text-foreground',
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="flex-1">{option.label}</span>
                {isActive && <Check className="h-3.5 w-3.5 shrink-0 text-accent" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
