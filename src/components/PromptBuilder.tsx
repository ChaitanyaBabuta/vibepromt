import React, { useState } from 'react';
import { Sparkles, Copy, Check, Save, Wand2, Terminal, Layers, Palette, Cpu, Play, X } from 'lucide-react';
import { DesignStyle, TechStackItem, TargetTool, UIPrompt, PromptBuilderConfig } from '../types';

interface PromptBuilderProps {
  onSavePrompt: (prompt: UIPrompt) => void;
  onPreviewPrompt: (prompt: UIPrompt) => void;
  onBackToMain?: () => void;
}

const INTERFACE_TYPES = [
  'Dashboard',
  'SaaS Landing Page',
  'AI Agent UI',
  'E-commerce Store',
  'Analytics Portal',
  'Portfolio & CV',
  'Mobile App Layout',
  'Kanban Task Board',
];

const DESIGN_STYLES: DesignStyle[] = [
  'Minimalist',
  'Glassmorphism',
  'Cyberpunk Neon',
  'Obsidian Dark',
  'Bento Grid',
  'Neumorphic',
];

const TECH_STACK_OPTIONS: TechStackItem[] = [
  'Tailwind CSS',
  'Shadcn UI',
  'Framer Motion',
  'Lucide Icons',
  'Recharts',
  'Radix UI',
];

const COMPONENT_OPTIONS = [
  'Header Navigation',
  'Hero Section',
  'Recharts Area Chart',
  'Pricing Table',
  'Glassmorphic Cards',
  'Command Menu (⌘K)',
  'Sidebar Navigation',
  'Filter Pills',
];

const TARGET_TOOLS: TargetTool[] = ['v0', 'Cursor', 'Bolt.new', 'Claude', 'Windsurf'];

const COLOR_THEMES = [
  'Obsidian Slate & Indigo',
  'Cyber Slate & Neon Cyan',
  'Emerald Mint & Dark Zinc',
  'Sunset Violet & Magenta',
];

export const PromptBuilder: React.FC<PromptBuilderProps> = ({ onSavePrompt, onPreviewPrompt, onBackToMain }) => {
  const [config, setConfig] = useState<PromptBuilderConfig>({
    interfaceType: 'Dashboard',
    designStyle: 'Glassmorphism',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    components: ['Header Navigation', 'Sidebar Navigation', 'Glassmorphic Cards', 'Recharts Area Chart'],
    colorTheme: 'Obsidian Slate & Indigo',
    targetTool: 'v0',
    customInstructions: 'Ensure fluid micro-interactions, responsive mobile views, and clean typography.',
  });

  const [copied, setCopied] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [enhancedTextOverride, setEnhancedTextOverride] = useState<string | null>(null);

  const defaultPromptText = `Build a modern, dark-themed ${config.interfaceType} interface in a ${config.designStyle} style tailored for deployment with ${config.targetTool}.

Tech Stack: ${config.techStack.join(', ')}.
Palette: ${config.colorTheme} with high contrast dark backgrounds.
Key Components: ${config.components.join(', ')}.
${config.customInstructions ? `Directives: ${config.customInstructions}` : ''}

Deliver a single, clean TypeScript React component with production-ready Tailwind utility classes.`;

  const activePromptText = enhancedTextOverride || defaultPromptText;

  const handleToggleTech = (tech: TechStackItem) => {
    setEnhancedTextOverride(null);
    setConfig((prev) => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter((t) => t !== tech)
        : [...prev.techStack, tech],
    }));
  };

  const handleToggleComponent = (comp: string) => {
    setEnhancedTextOverride(null);
    setConfig((prev) => ({
      ...prev,
      components: prev.components.includes(comp)
        ? prev.components.filter((c) => c !== comp)
        : [...prev.components, comp],
    }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(activePromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEnhanceWithAI = async () => {
    setIsEnhancing(true);
    try {
      const response = await fetch('/api/enhance-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.enhancedPrompt) {
          setEnhancedTextOverride(data.enhancedPrompt);
        }
      } else {
        setEnhancedTextOverride(
          `System Role: UI Architect building for ${config.targetTool}.
Construct a ${config.interfaceType} with ${config.designStyle} visual language.

Stack: React 19 + TypeScript, Tailwind CSS, ${config.techStack.join(', ')}.
Theme: ${config.colorTheme}.
Modules: ${config.components.join(', ')}.
Custom Directives: ${config.customInstructions}`
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsEnhancing(false);
    }
  };

  const currentPromptObject: UIPrompt = {
    id: `custom-builder-${Date.now()}`,
    title: `Custom ${config.designStyle} ${config.interfaceType}`,
    description: `Tailored prompt for ${config.interfaceType} featuring ${config.components.slice(0, 3).join(', ')}.`,
    fullPrompt: activePromptText,
    category: (config.interfaceType.includes('SaaS') ? 'SaaS' : config.interfaceType.includes('Dashboard') ? 'Dashboard' : config.interfaceType.includes('AI') ? 'AI Agent UI' : 'Minimalist') as any,
    style: config.designStyle,
    techStack: config.techStack,
    targetTools: [config.targetTool],
    author: {
      name: 'Prompt Builder User',
      handle: '@vibe_coder',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    },
    likes: 1,
    copies: 0,
    createdAt: new Date().toISOString().split('T')[0],
    componentsIncluded: config.components,
    colorTheme: config.colorTheme,
    previewLayout: 'dashboard',
  };

  const handleSaveToLibrary = () => {
    onSavePrompt(currentPromptObject);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <section id="builder" className="py-10 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800/80">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <Wand2 className="h-6 w-6 text-cyan-400" />
              Prompt Builder
            </h2>
            <p className="text-zinc-400 text-xs mt-1">
              Configure specifications to generate a tailored system prompt.
            </p>
          </div>
          {onBackToMain && (
            <button
              onClick={onBackToMain}
              className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-all shadow-lg flex items-center gap-1.5 text-xs font-semibold cursor-pointer group"
              title="Close and go back to main page"
            >
              <span className="hidden sm:inline text-zinc-300 group-hover:text-white">Main Page</span>
              <X className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </button>
          )}
        </div>

        {/* Builder Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-5 bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/80">
            
            {/* Target Tool */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-red-400" /> Target Tool
              </label>
              <div className="flex flex-wrap gap-1.5">
                {TARGET_TOOLS.map((tool) => (
                  <button
                    key={tool}
                    onClick={() => {
                      setEnhancedTextOverride(null);
                      setConfig({ ...config, targetTool: tool });
                    }}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                      config.targetTool === tool
                        ? 'bg-red-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {tool}
                  </button>
                ))}
              </div>
            </div>

            {/* Interface Type & Style */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-red-400" /> Interface
                </label>
                <select
                  value={config.interfaceType}
                  onChange={(e) => {
                    setEnhancedTextOverride(null);
                    setConfig({ ...config, interfaceType: e.target.value });
                  }}
                  className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs text-zinc-200 focus:border-red-500 focus:outline-none"
                >
                  {INTERFACE_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 flex items-center gap-1.5">
                  <Palette className="h-3.5 w-3.5 text-red-400" /> Design Style
                </label>
                <select
                  value={config.designStyle}
                  onChange={(e) => {
                    setEnhancedTextOverride(null);
                    setConfig({ ...config, designStyle: e.target.value as DesignStyle });
                  }}
                  className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-3 py-2 text-xs text-zinc-200 focus:border-red-500 focus:outline-none"
                >
                  {DESIGN_STYLES.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                Tech Stack
              </label>
              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK_OPTIONS.map((tech) => {
                  const isChecked = config.techStack.includes(tech);
                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => handleToggleTech(tech)}
                      className={`px-2.5 py-1 rounded text-xs font-medium border transition-colors ${
                        isChecked
                          ? 'bg-zinc-800 text-red-300 border-red-500/80'
                          : 'bg-zinc-950 text-zinc-500 border-zinc-800 hover:text-zinc-300'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '} {tech}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Components */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                Components
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {COMPONENT_OPTIONS.map((comp) => {
                  const isChecked = config.components.includes(comp);
                  return (
                    <button
                      key={comp}
                      type="button"
                      onClick={() => handleToggleComponent(comp)}
                      className={`text-left px-2 py-1 rounded text-[11px] font-medium border transition-colors truncate ${
                        isChecked
                          ? 'bg-red-950/40 text-red-200 border-red-500/60'
                          : 'bg-zinc-950 text-zinc-500 border-zinc-800 hover:text-zinc-300'
                      }`}
                    >
                      {isChecked ? '✓ ' : '+ '} {comp}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Output Preview Column */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-zinc-950 border border-zinc-800 rounded-2xl p-5 shadow-lg">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-red-400" />
                  <span className="text-xs font-bold text-zinc-300 font-mono uppercase">
                    System Prompt
                  </span>
                </div>

                <button
                  onClick={handleEnhanceWithAI}
                  disabled={isEnhancing}
                  className="flex items-center gap-1 rounded bg-red-900/30 border border-red-500/30 px-2 py-1 text-[11px] text-red-300 hover:bg-red-900/50 transition-colors"
                >
                  <Wand2 className={`h-3 w-3 ${isEnhancing ? 'animate-spin' : ''}`} />
                  <span>{isEnhancing ? 'Refining...' : 'AI Refine'}</span>
                </button>
              </div>

              <div className="rounded-xl bg-zinc-900/90 border border-zinc-800 p-3.5 max-h-72 overflow-y-auto">
                <pre className="text-zinc-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                  {activePromptText}
                </pre>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 space-y-2">
              <button
                onClick={handleCopy}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 py-2.5 text-xs font-bold text-white transition-colors"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? 'Copied!' : 'Copy Prompt'}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleSaveToLibrary}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 py-2 text-xs font-semibold text-zinc-300 transition-colors"
                >
                  {savedSuccess ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Save className="h-3.5 w-3.5 text-zinc-400" />}
                  <span>{savedSuccess ? 'Saved' : 'Save'}</span>
                </button>

                <button
                  onClick={() => onPreviewPrompt(currentPromptObject)}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 py-2 text-xs font-semibold text-zinc-300 transition-colors"
                >
                  <Play className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Preview</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
