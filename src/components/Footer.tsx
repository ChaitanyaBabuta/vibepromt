import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-6 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-tight">VibePrompt</span>
          <span>— Battle-Tested UI Prompt Library</span>
        </div>

        <div className="flex items-center gap-1">
          <span>Crafted for Vibe Coders</span>
          <Heart className="h-3 w-3 text-rose-500 fill-rose-500 mx-1" />
        </div>
      </div>
    </footer>
  );
};
