import React, { useState } from 'react';
import { Copy, Check, Heart } from 'lucide-react';
import { UIPrompt } from '../types';
import { formatNumber } from '../lib/utils';

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
    <div
      onClick={() => onSelectPrompt(prompt)}
      className="group relative flex flex-col justify-between rounded-xl bg-zinc-900/40 border border-zinc-800/80 p-4 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-red-500/5"
    >
      <div>
        {/* Category & Favorite */}
        <div className="flex items-center justify-between mb-3">
          <span className="rounded px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-zinc-800/90 text-zinc-300 border border-zinc-700/50">
            {prompt.category}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(prompt.id);
            }}
            className="p-1 rounded text-zinc-500 hover:text-red-400 transition-colors"
            title={isFavorite ? 'Remove from saved' : 'Save prompt'}
          >
            <Heart className={`h-3.5 w-3.5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1 mb-1.5">
          {prompt.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
          {prompt.description}
        </p>
      </div>

      {/* Footer Info & Copy Action */}
      <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between">
        <span className="text-[11px] text-zinc-500 font-mono">
          {prompt.author.handle}
        </span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md bg-zinc-800 hover:bg-red-600 hover:text-white px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>{formatNumber(prompt.copies)}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
