import React, { useState, useEffect } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Heart, 
  Share2, 
  Sparkles, 
  ArrowLeft, 
  Terminal, 
  Cpu, 
  Layers, 
  Zap, 
  ExternalLink, 
  Code2, 
  BookOpen, 
  Sliders,
  CheckCircle2,
  Wand2
} from 'lucide-react';
import { UIPrompt } from '../types';

interface PromptDetailModalProps {
  isOpen: boolean;
  prompt: UIPrompt | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onCopyPrompt: (prompt: UIPrompt) => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({
  isOpen,
  prompt,
  onClose,
  isFavorite,
  onToggleFavorite,
  onCopyPrompt,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'prompt' | 'instructions' | 'components'>('prompt');

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

  if (!isOpen || !prompt) return null;

  const handleCopy = () => {
    onCopyPrompt(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 text-zinc-100 overflow-y-auto flex flex-col animate-in fade-in duration-200">
      {/* Top Fixed Header Bar */}
      <header className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-zinc-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Prompts</span>
            <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500 bg-zinc-950 border border-zinc-800 rounded">
              Esc
            </kbd>
          </button>

          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span>/</span>
            <span className="text-zinc-400 font-medium">{prompt.category}</span>
            <span>/</span>
            <span className="text-zinc-300 truncate max-w-[200px]">{prompt.title}</span>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onToggleFavorite(prompt.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
              isFavorite
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20'
                : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span className="hidden sm:inline">{isFavorite ? 'Favorited' : 'Favorite'}</span>
          </button>

          {/* Large Copy CTA in Header */}
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg cursor-pointer ${
              copied
                ? 'bg-emerald-500 text-zinc-950 shadow-emerald-500/20'
                : 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950 shadow-cyan-400/20 hover:scale-[1.02]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Prompt Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Prompt</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition-all cursor-pointer"
            title="Close view"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Full-Screen View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 flex flex-col gap-8">
        
        {/* Title & Metadata Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-zinc-800/80">
          <div className="space-y-3 max-w-3xl">
            {/* Category & Tags Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
                {prompt.category}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                Optimized for {prompt.targetTool}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                {prompt.complexity || 'Intermediate'} Complexity
              </span>
            </div>

            {/* Prompt Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {prompt.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {prompt.description}
            </p>
          </div>

          {/* Large Action Box & Stats */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 min-w-[260px] bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800">
            <button
              onClick={handleCopy}
              className={`w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-bold transition-all shadow-xl cursor-pointer ${
                copied
                  ? 'bg-emerald-500 text-zinc-950 shadow-emerald-500/20'
                  : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-zinc-950 shadow-cyan-500/20 hover:scale-[1.01]'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copy System Prompt</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-around py-2 px-3 bg-zinc-950/80 rounded-xl border border-zinc-800/80 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Copy className="w-3.5 h-3.5 text-cyan-400" />
                <span><strong className="text-zinc-200">{prompt.copies.toLocaleString()}</strong> copies</span>
              </div>
              <span className="text-zinc-700">|</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span><strong className="text-zinc-200">{prompt.likes.toLocaleString()}</strong> likes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Left Section (Prompt Code & Details) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3">
              <button
                onClick={() => setActiveTab('prompt')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'prompt'
                    ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Full System Prompt</span>
              </button>

              <button
                onClick={() => setActiveTab('instructions')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'instructions'
                    ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Usage Tips</span>
              </button>

              <button
                onClick={() => setActiveTab('components')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'components'
                    ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Included Modules ({prompt.tags?.length || 0})</span>
              </button>
            </div>

            {/* Prompt Code Block View */}
            {activeTab === 'prompt' && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/90 rounded-t-2xl border border-zinc-800 border-b-0 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>system-prompt.md</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy All'}</span>
                  </button>
                </div>

                <div className="relative group bg-zinc-900/60 rounded-b-2xl border border-zinc-800 p-5 sm:p-6 font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed overflow-x-auto whitespace-pre-wrap select-all shadow-inner max-h-[600px] overflow-y-auto">
                  {prompt.promptText}
                </div>
              </div>
            )}

            {/* Usage Tips Tab */}
            {activeTab === 'instructions' && (
              <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-cyan-400" />
                  Recommended Prompting Workflow
                </h3>

                <ol className="list-decimal list-inside text-xs sm:text-sm text-zinc-300 space-y-3 leading-relaxed">
                  <li>
                    Copy the system prompt using the <strong className="text-cyan-400">Copy Prompt</strong> button above.
                  </li>
                  <li>
                    Open your AI coding tool of choice (<strong className="text-white">{prompt.targetTool}</strong>).
                  </li>
                  <li>
                    Paste the system prompt into your chat window or custom instructions section before describing your specific features.
                  </li>
                  <li>
                    Customize placeholder variables (such as theme color, branding name, or endpoint URLs) to match your requirements.
                  </li>
                </ol>

                <div className="mt-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300">
                  💡 <strong>Pro Tip:</strong> For best results in {prompt.targetTool}, ask the AI to generate component files individually rather than creating a single massive file.
                </div>
              </div>
            )}

            {/* Included Modules Tab */}
            {activeTab === 'components' && (
              <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800 p-6 space-y-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Key Components & Technical Specs
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {prompt.tags.map((tag, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center gap-2 text-xs text-zinc-300">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar Metadata */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Tech Specs Card */}
            <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800 p-5 space-y-4">
              <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                Prompt Specifications
              </h3>

              <div className="space-y-3 text-xs font-mono divide-y divide-zinc-800/80">
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-zinc-500">Target Tool</span>
                  <span className="text-cyan-400 font-bold">{prompt.targetTool}</span>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <span className="text-zinc-500">Category</span>
                  <span className="text-zinc-200">{prompt.category}</span>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <span className="text-zinc-500">Tech Stack</span>
                  <span className="text-zinc-200">{prompt.techStack || 'React, Tailwind CSS'}</span>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <span className="text-zinc-500">Complexity</span>
                  <span className="text-zinc-200">{prompt.complexity || 'Intermediate'}</span>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <span className="text-zinc-500">Total Length</span>
                  <span className="text-zinc-200">{prompt.promptText.length.toLocaleString()} characters</span>
                </div>
              </div>
            </div>

            {/* Tags Cloud */}
            <div className="bg-zinc-900/60 rounded-2xl border border-zinc-800 p-5 space-y-3">
              <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                Tags & Features
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {prompt.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Copy Banner */}
            <div className="bg-gradient-to-br from-cyan-950/40 via-zinc-900 to-blue-950/40 rounded-2xl border border-cyan-500/20 p-5 space-y-3 text-center">
              <Sparkles className="w-6 h-6 text-cyan-400 mx-auto" />
              <h4 className="text-sm font-bold text-white">Ready to build?</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Copy this prompt and paste it directly into {prompt.targetTool} to generate this component.
              </p>
              <button
                onClick={handleCopy}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-xs transition-all shadow-md cursor-pointer"
              >
                {copied ? 'Copied!' : 'Copy Prompt Code'}
              </button>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
};
