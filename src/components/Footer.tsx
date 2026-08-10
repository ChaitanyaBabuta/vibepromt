import React from 'react';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-surface-secondary">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded border border-border bg-surface text-muted-foreground">
            <Terminal className="h-3 w-3" />
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-foreground">VibePrompt</span>
          <span className="text-[13px] text-muted-foreground">Battle-tested UI prompt library</span>
        </div>

        <p className="font-mono text-[11px] text-subtle-foreground">Crafted for vibe coders</p>
      </div>
    </footer>
  );
};
