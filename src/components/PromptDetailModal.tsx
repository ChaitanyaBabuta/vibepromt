import React, { useState, useEffect } from 'react';
import {
  X, Copy, Check, Heart, ArrowLeft, Terminal, Layers, Code2, BookOpen, Sliders, Wand2, Sparkles,
} from 'lucide-react';
import { UIPrompt } from '../types';
import { Badge, Button, Well } from './ui/primitives';
import { cn } from '../lib/utils';

interface PromptDetailModalProps {
  isOpen: boolean;
  prompt: UIPrompt | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  /** Increments the prompt's copy counter in App state. */
  onCopyPrompt?: (prompt: UIPrompt) => void;
  /** Switches to the builder view. */
  onOpenBuilderWithPrompt?: (prompt: UIPrompt) => void;
}

type DetailTab = 'prompt' | 'usage' | 'components';

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({
  isOpen,
  prompt,
  onClose,
  isFavorite,
  onToggleFavorite,
  onCopyPrompt,
  onOpenBuilderWithPrompt,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<DetailTab>('prompt');

  // Handle ESC key to exit detail view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Always land on the prompt tab when a new prompt is opened
  useEffect(() => {
    if (isOpen) setActiveTab('prompt');
  }, [isOpen, prompt?.id]);

  if (!isOpen || !prompt) return null;

  const primaryTool = prompt.targetTools[0] ?? 'your AI coding tool';

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.fullPrompt);
    onCopyPrompt?.(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const tabs: { value: DetailTab; label: string; icon: React.ComponentType<{ className?: string }>; count?: number }[] = [
    { value: 'prompt', label: 'System prompt', icon: Code2 },
    { value: 'usage', label: 'Usage', icon: BookOpen },
    { value: 'components', label: 'Components', icon: Layers, count: prompt.componentsIncluded.length },
  ];

  const specs: { label: string; value: React.ReactNode }[] = [
    { label: 'Category', value: prompt.category },
    { label: 'Design style', value: prompt.style },
    { label: 'Colour theme', value: prompt.colorTheme },
    { label: 'Published', value: prompt.createdAt },
    { label: 'Length', value: `${prompt.fullPrompt.length.toLocaleString()} chars` },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={prompt.title}
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background animate-fade-in"
    >
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="container-page flex h-14 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onClose}>
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Back</span>
            </Button>

            <nav
              aria-label="Breadcrumb"
              className="hidden min-w-0 items-center gap-2 font-mono text-xs text-subtle-foreground md:flex"
            >
              <span>{prompt.category}</span>
              <span aria-hidden="true">/</span>
              <span className="truncate text-muted-foreground">{prompt.title}</span>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onToggleFavorite(prompt.id)}
              aria-pressed={isFavorite}
            >
              <Heart className={cn('h-3.5 w-3.5', isFavorite && 'fill-current')} />
              <span className="hidden sm:inline">{isFavorite ? 'Saved' : 'Save'}</span>
            </Button>

            <Button variant="primary" size="sm" onClick={handleCopy}>
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Copy prompt'}</span>
            </Button>

            <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container-page flex-1 py-8 sm:py-10">
        {/* Title block */}
        <div className="border-b border-border pb-6">
          <div className="flex flex-wrap items-center gap-1.5">
            <Badge variant="outline" className="font-mono uppercase tracking-wide">
              {prompt.category}
            </Badge>
            {prompt.targetTools.map((tool) => (
              <Badge key={tool} variant="neutral">{tool}</Badge>
            ))}
          </div>

          <h1 className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
            {prompt.title}
          </h1>
          <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {prompt.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-subtle-foreground">
            <span>{prompt.author.handle}</span>
            <span>{prompt.copies.toLocaleString()} copies</span>
            <span>{prompt.likes.toLocaleString()} likes</span>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Main column */}
          <div className="min-w-0 lg:col-span-8">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Prompt details"
              className="flex items-center gap-1 overflow-x-auto border-b border-border scrollbar-none"
            >
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.value;
                return (
                  <button
                    key={tab.value}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.value)}
                    className={cn(
                      'relative flex shrink-0 cursor-pointer items-center gap-2 px-3 py-2.5 text-[13px] font-medium',
                      'transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{tab.label}</span>
                    {typeof tab.count === 'number' && (
                      <span className="font-mono text-[11px] text-subtle-foreground">{tab.count}</span>
                    )}
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-px h-px bg-foreground" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Panels */}
            <div className="mt-5">
              {activeTab === 'prompt' && (
                <div className="overflow-hidden rounded-lg border border-border">
                  <div className="flex items-center justify-between gap-3 border-b border-border bg-surface px-4 py-2.5">
                    <div className="flex min-w-0 items-center gap-2">
                      <Terminal className="h-3.5 w-3.5 shrink-0 text-subtle-foreground" />
                      <span className="truncate font-mono text-[11px] uppercase tracking-wider text-subtle-foreground">
                        system-prompt.md
                      </span>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex shrink-0 cursor-pointer items-center gap-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy all'}</span>
                    </button>
                  </div>
                  <pre className="max-h-[32rem] select-all overflow-auto bg-surface-secondary p-4 font-mono text-xs leading-relaxed text-foreground sm:p-5 sm:text-[13px]">
                    {prompt.fullPrompt}
                  </pre>
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Wand2 className="h-4 w-4 text-subtle-foreground" />
                    Recommended workflow
                  </h3>

                  <ol className="mt-4 space-y-3.5">
                    {[
                      <>Copy the system prompt with the <strong className="font-medium text-foreground">Copy prompt</strong> button above.</>,
                      <>Open your AI coding tool of choice — this prompt targets <strong className="font-medium text-foreground">{prompt.targetTools.join(', ')}</strong>.</>,
                      <>Paste it into the chat or custom-instructions field before describing your specific features.</>,
                      <>Adjust placeholders such as theme colours, brand name or endpoint URLs to match your project.</>,
                    ].map((step, index) => (
                      <li key={index} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-surface-secondary font-mono text-[11px] text-subtle-foreground">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  <Well className="mt-5 p-3.5">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      <strong className="font-medium text-foreground">Tip</strong> — for best results in{' '}
                      {primaryTool}, ask for component files one at a time rather than a single large file.
                    </p>
                  </Well>
                </div>
              )}

              {activeTab === 'components' && (
                <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Layers className="h-4 w-4 text-subtle-foreground" />
                    Included components
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Modules this prompt asks the model to produce.
                  </p>

                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {prompt.componentsIncluded.map((component, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 rounded-md border border-border bg-surface-secondary px-3 py-2 text-xs text-muted-foreground"
                      >
                        <Sparkles className="h-3.5 w-3.5 shrink-0 text-subtle-foreground" />
                        <span className="truncate">{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 space-y-5 lg:col-span-4">
            <div className="rounded-lg border border-border bg-surface">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <Sliders className="h-3.5 w-3.5 text-subtle-foreground" />
                <h3 className="font-mono text-[11px] uppercase tracking-wider text-subtle-foreground">
                  Specifications
                </h3>
              </div>
              <dl className="divide-y divide-border">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-start justify-between gap-4 px-4 py-2.5">
                    <dt className="text-xs text-muted-foreground">{spec.label}</dt>
                    <dd className="text-right text-xs font-medium text-foreground">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-subtle-foreground">
                Tech stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {prompt.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="font-mono">{tech}</Badge>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface-secondary p-4">
              <h3 className="text-sm font-semibold text-foreground">Ready to build?</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Copy this prompt straight into {primaryTool}, or start from it in the builder.
              </p>
              <div className="mt-4 space-y-2">
                <Button variant="primary" size="md" onClick={handleCopy} className="w-full">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  <span>{copied ? 'Copied' : 'Copy prompt'}</span>
                </Button>
                {onOpenBuilderWithPrompt && (
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => {
                      onOpenBuilderWithPrompt(prompt);
                      onClose();
                    }}
                    className="w-full"
                  >
                    <Wand2 className="h-3.5 w-3.5" />
                    <span>Open builder</span>
                  </Button>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
