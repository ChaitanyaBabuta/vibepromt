import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

/* ==========================================================================
   Shared UI primitives.

   Every interactive surface in the app is built from these so that hover,
   focus, disabled and selected states stay identical everywhere. They consume
   only semantic tokens from src/index.css, which is what makes both themes
   work without any component knowing which theme is active.
   ========================================================================== */

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

/* -------------------------------------------------------------------------- */
/* Button                                                                     */
/* -------------------------------------------------------------------------- */

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon' | 'icon-sm';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const buttonVariants: Record<ButtonVariant, string> = {
  // Neutral near-black / near-white. The app's only "loud" control.
  primary:
    'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary disabled:hover:bg-primary',
  // Default control: bordered surface.
  secondary:
    'bg-surface text-foreground border border-border hover:bg-hover hover:border-border-strong active:bg-active disabled:hover:bg-surface',
  // Borderless, for toolbars and tertiary actions.
  ghost:
    'text-muted-foreground hover:bg-hover hover:text-foreground active:bg-active disabled:hover:bg-transparent',
  // Restrained accent tint — reserved for a single emphasised action per view.
  accent:
    'bg-accent-muted text-accent border border-accent-border hover:bg-accent hover:text-accent-foreground active:opacity-90',
  destructive:
    'text-destructive hover:bg-destructive-muted active:bg-destructive-muted',
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5 rounded-md',
  md: 'h-9 px-3.5 text-sm gap-2 rounded-md',
  lg: 'h-11 px-5 text-sm gap-2 rounded-lg',
  icon: 'h-9 w-9 rounded-md',
  'icon-sm': 'h-8 w-8 rounded-md',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...props
}) => (
  <button
    disabled={disabled || loading}
    className={cn(
      'inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap',
      'transition-colors duration-150 cursor-pointer select-none',
      'disabled:pointer-events-none disabled:opacity-50',
      focusRing,
      buttonVariants[variant],
      buttonSizes[size],
      className,
    )}
    {...props}
  >
    {loading && <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin" aria-hidden="true" />}
    {children}
  </button>
);

/* -------------------------------------------------------------------------- */
/* Inputs                                                                     */
/* -------------------------------------------------------------------------- */

const fieldBase = cn(
  'w-full bg-input text-foreground text-sm rounded-md border border-border',
  'placeholder:text-subtle-foreground',
  'transition-colors duration-150',
  'hover:border-border-strong',
  'focus:outline-none focus:border-accent focus:ring-2 focus:ring-ring/25',
  'disabled:opacity-50 disabled:cursor-not-allowed',
);

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input className={cn(fieldBase, 'h-9 px-3', className)} {...props} />
);

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className,
  ...props
}) => <textarea className={cn(fieldBase, 'px-3 py-2.5 leading-relaxed resize-y', className)} {...props} />;

/** Native select — the built-in caret follows `color-scheme`, so it stays
 *  correct in both themes without a custom indicator. */
export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  className,
  children,
  ...props
}) => (
  <select className={cn(fieldBase, 'h-9 cursor-pointer pl-2.5 pr-2', className)} {...props}>
    {children}
  </select>
);

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className,
  children,
  ...props
}) => (
  <label
    className={cn('block text-xs font-medium text-muted-foreground mb-1.5', className)}
    {...props}
  >
    {children}
  </label>
);

/** Small uppercase label for grouping controls and metadata blocks. */
export const FieldLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <span
    className={cn(
      'block text-[11px] font-semibold uppercase tracking-wider text-subtle-foreground mb-2',
      className,
    )}
  >
    {children}
  </span>
);

/* -------------------------------------------------------------------------- */
/* Containers                                                                 */
/* -------------------------------------------------------------------------- */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds hover affordance for cards that act as links/buttons. */
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({ interactive = false, className, children, ...props }) => (
  <div
    className={cn(
      'rounded-lg border border-border bg-surface',
      interactive &&
        'transition-colors duration-150 cursor-pointer hover:border-border-strong hover:bg-hover',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

/** Inert, recessed surface: code blocks, previews, stat wells. */
export const Well: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div
    className={cn('rounded-lg border border-border bg-surface-secondary', className)}
    {...props}
  >
    {children}
  </div>
);

/* -------------------------------------------------------------------------- */
/* Badge / Chip / Kbd                                                         */
/* -------------------------------------------------------------------------- */

type BadgeVariant = 'neutral' | 'outline' | 'accent' | 'success' | 'destructive';

const badgeVariants: Record<BadgeVariant, string> = {
  neutral: 'bg-surface-tertiary text-muted-foreground border border-transparent',
  outline: 'bg-transparent text-muted-foreground border border-border',
  accent: 'bg-accent-muted text-accent border border-accent-border',
  success: 'bg-success-muted text-success border border-transparent',
  destructive: 'bg-destructive-muted text-destructive border border-transparent',
};

export const Badge: React.FC<{
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}> = ({ variant = 'neutral', className, children }) => (
  <span
    className={cn(
      'inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium leading-5 whitespace-nowrap',
      badgeVariants[variant],
      className,
    )}
  >
    {children}
  </span>
);

/**
 * Toggleable chip.
 * `tone="solid"` (default) for single-select filters — the choice reads as one
 * clear selection. `tone="soft"` for multi-select groups, where several solid
 * fills at once would overwhelm the panel.
 */
export const Chip: React.FC<{
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  title?: string;
  tone?: 'solid' | 'soft';
  children: React.ReactNode;
}> = ({ selected = false, onClick, className, title, tone = 'solid', children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={selected}
    title={title}
    className={cn(
      'inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium',
      'transition-colors duration-150 cursor-pointer whitespace-nowrap',
      focusRing,
      selected
        ? tone === 'solid'
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-active text-foreground border-border-strong'
        : 'bg-surface text-muted-foreground border-border hover:bg-hover hover:text-foreground hover:border-border-strong',
      className,
    )}
  >
    {children}
  </button>
);

export const Kbd: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <kbd
    className={cn(
      'inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-surface-secondary px-1.5',
      'font-mono text-[10px] font-medium text-subtle-foreground',
      className,
    )}
  >
    {children}
  </kbd>
);

/* -------------------------------------------------------------------------- */
/* Segmented control — used for primary nav and in-view tabs                  */
/* -------------------------------------------------------------------------- */

export interface SegmentedOption<T extends string> {
  value: T;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: React.ReactNode;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  className,
  size = 'md',
}: {
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
  size?: 'sm' | 'md';
}) {
  return (
    <div
      role="tablist"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-lg border border-border bg-surface-secondary p-0.5',
        className,
      )}
    >
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              'inline-flex items-center justify-center gap-1.5 rounded-md font-medium',
              'transition-colors duration-150 cursor-pointer whitespace-nowrap',
              focusRing,
              size === 'sm' ? 'h-7 px-2.5 text-xs' : 'h-8 px-3 text-[13px]',
              isActive
                ? 'bg-surface text-foreground border border-border'
                : 'border border-transparent text-muted-foreground hover:text-foreground hover:bg-hover',
            )}
          >
            {Icon && <Icon className="h-3.5 w-3.5" />}
            <span>{option.label}</span>
            {option.badge}
          </button>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Feedback states                                                            */
/* -------------------------------------------------------------------------- */

export const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <Loader2 className={cn('h-4 w-4 animate-spin text-subtle-foreground', className)} aria-hidden="true" />
);

export const EmptyState: React.FC<{
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}> = ({ icon: Icon, title, description, action, className }) => (
  <div
    className={cn(
      'flex flex-col items-center justify-center rounded-lg border border-dashed border-border',
      'bg-surface-secondary/60 px-6 py-16 text-center',
      className,
    )}
  >
    {Icon && (
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
        <Icon className="h-4.5 w-4.5 text-subtle-foreground" />
      </div>
    )}
    <h3 className="text-sm font-semibold text-foreground">{title}</h3>
    {description && (
      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>
    )}
    {action && <div className="mt-5">{action}</div>}
  </div>
);

/** Inline, dismissible-free error notice for failed async work. */
export const ErrorNotice: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    role="alert"
    className={cn(
      'flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive-muted px-3 py-2',
      'text-xs leading-relaxed text-destructive',
      className,
    )}
  >
    {children}
  </div>
);

/** Skeleton block for loading states. */
export const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('animate-pulse rounded-md bg-surface-tertiary', className)} />
);

/* -------------------------------------------------------------------------- */
/* Tooltip — CSS-only, no dependency, works in both themes                    */
/* -------------------------------------------------------------------------- */

export const Tooltip: React.FC<{
  label: string;
  children: React.ReactNode;
  side?: 'top' | 'bottom';
  className?: string;
}> = ({ label, children, side = 'bottom', className }) => (
  <span className={cn('group/tooltip relative inline-flex', className)}>
    {children}
    <span
      role="tooltip"
      className={cn(
        'pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap',
        'rounded-md border border-border bg-surface px-2 py-1 text-[11px] font-medium text-foreground',
        'opacity-0 shadow-popover transition-opacity duration-150',
        // Hover only. Showing on focus leaves the tooltip stranded when the
        // trigger keeps focus after opening a modal or menu.
        'group-hover/tooltip:opacity-100',
        side === 'bottom' ? 'top-full mt-1.5' : 'bottom-full mb-1.5',
      )}
    >
      {label}
    </span>
  </span>
);

/* -------------------------------------------------------------------------- */
/* Section heading — one hierarchy for every view header                      */
/* -------------------------------------------------------------------------- */

export const SectionHeader: React.FC<{
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}> = ({ title, description, actions, className }) => (
  <div
    className={cn(
      'flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6',
      className,
    )}
  >
    <div className="min-w-0">
      <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{title}</h2>
      {description && (
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
    {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
  </div>
);
