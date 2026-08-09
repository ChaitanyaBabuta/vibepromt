import React, { useState } from 'react';
import { Copy, Check, Heart } from 'lucide-react';
import { UIPrompt } from '../types';
import { formatNumber, cn } from '../lib/utils';
import { Badge } from './ui/primitives';

interface PromptCardProps {
  prompt: UIPrompt;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectPrompt: (prompt: UIPrompt) => void;
  onCopyPrompt: (prompt: UIPrompt) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  prompt,
  isFavorite,
  onToggleFavorite,
  onSelectPrompt,
  onCopyPrompt,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.fullPrompt);
    onCopyPrompt(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Open ${prompt.title}`}
      onClick={() => onSelectPrompt(prompt)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectPrompt(prompt);
        }
      }}
      className={cn(
        'group flex h-full cursor-pointer flex-col rounded-lg border border-border bg-surface p-4',
        'transition-colors duration-150 hover:border-border-strong hover:bg-hover',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      )}
    >
      {/* Meta row */}
      <div className="flex items-start justify-between gap-2">
        <Badge variant="neutral" className="font-mono uppercase tracking-wide">
          {prompt.category}
        </Badge>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(prompt.id);
          }}
          aria-label={isFavorite ? 'Remove from saved' : 'Save prompt'}
          aria-pressed={isFavorite}
          className={cn(
            '-mr-1 -mt-1 flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md',
            'transition-colors duration-150 hover:bg-active',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            isFavorite ? 'text-foreground' : 'text-subtle-foreground hover:text-foreground',
          )}
        >
          <Heart className={cn('h-3.5 w-3.5', isFavorite && 'fill-current')} />
        </button>
      </div>

      {/* Body */}
      <h3 className="mt-3 line-clamp-2 text-[13px] font-semibold leading-snug tracking-tight text-foreground">
        {prompt.title}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
        {prompt.description}
      </p>

      {/* Tech stack */}
      <div className="mt-3 mb-4 flex items-center gap-1 overflow-hidden">
        {prompt.techStack.slice(0, 2).map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-subtle-foreground"
          >
            {tech}
          </span>
        ))}
        {prompt.techStack.length > 2 && (
          <span className="px-1 py-0.5 font-mono text-[10px] text-subtle-foreground">
            +{prompt.techStack.length - 2}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between gap-2 border-t border-border pt-3">
        <span className="truncate font-mono text-[11px] text-subtle-foreground">
          {prompt.author.handle}
        </span>

        <button
          onClick={handleCopy}
          aria-label={`Copy ${prompt.title}`}
          className={cn(
            'flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md border border-border px-2 py-1',
            'text-[11px] font-medium transition-colors duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            copied
              ? 'border-transparent bg-success-muted text-success'
              : 'bg-surface text-muted-foreground hover:border-border-strong hover:bg-active hover:text-foreground',
          )}
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span className="font-mono">{formatNumber(prompt.copies)}</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};
