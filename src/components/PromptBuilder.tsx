import React, { useState } from 'react';
import { Copy, Check, Save, Wand2, Terminal, Play, X, AlertTriangle } from 'lucide-react';
import { DesignStyle, TechStackItem, TargetTool, UIPrompt, PromptBuilderConfig } from '../types';
import {
  Button,
  Chip,
  ErrorNotice,
  FieldLabel,
  SectionHeader,
  Select,
  Textarea,
  Well,
} from './ui/primitives';

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
  const [refineNotice, setRefineNotice] = useState<string | null>(null);

  const defaultPromptText = `Build a modern, dark-themed ${config.interfaceType} interface in a ${config.designStyle} style tailored for deployment with ${config.targetTool}.

Tech Stack: ${config.techStack.join(', ')}.
Palette: ${config.colorTheme} with high contrast dark backgrounds.
Key Components: ${config.components.join(', ')}.
${config.customInstructions ? `Directives: ${config.customInstructions}` : ''}

Deliver a single, clean TypeScript React component with production-ready Tailwind utility classes.`;

  const activePromptText = enhancedTextOverride || defaultPromptText;

  /** Any config edit invalidates a previous AI refinement. */
  const resetRefinement = () => {
    setEnhancedTextOverride(null);
    setRefineNotice(null);
  };

  const handleToggleTech = (tech: TechStackItem) => {
    resetRefinement();
    setConfig((prev) => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter((t) => t !== tech)
        : [...prev.techStack, tech],
    }));
  };

  const handleToggleComponent = (comp: string) => {
    resetRefinement();
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
    setRefineNotice(null);
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
        setRefineNotice('AI refinement is unavailable, so a local template was generated instead.');
      }
    } catch (err) {
      console.error(err);
      setRefineNotice('Could not reach the refinement service. Check your connection and try again.');
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
    <section id="builder" className="bg-background py-10 sm:py-12">
      <div className="container-page">
        <SectionHeader
          title="Prompt builder"
          description="Configure the specification and generate a tailored system prompt."
          actions={
            onBackToMain && (
              <Button variant="ghost" size="sm" onClick={onBackToMain} title="Back to the library">
                <span>Back to library</span>
                <X className="h-3.5 w-3.5" />
              </Button>
            )
          }
        />

        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          {/* ---------------- Configuration ---------------- */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
              {/* Target tool */}
              <div className="p-4 sm:p-5">
                <FieldLabel>Target tool</FieldLabel>
                <div className="flex flex-wrap gap-1.5">
                  {TARGET_TOOLS.map((tool) => (
                    <Chip
                      key={tool}
                      selected={config.targetTool === tool}
                      onClick={() => {
                        resetRefinement();
                        setConfig({ ...config, targetTool: tool });
                      }}
                    >
                      {tool}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Interface + style + palette */}
              <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
                <div>
                  <FieldLabel>Interface</FieldLabel>
                  <Select
                    value={config.interfaceType}
                    onChange={(e) => {
                      resetRefinement();
                      setConfig({ ...config, interfaceType: e.target.value });
                    }}
                    aria-label="Interface type"
                  >
                    {INTERFACE_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </Select>
                </div>

                <div>
                  <FieldLabel>Design style</FieldLabel>
                  <Select
                    value={config.designStyle}
                    onChange={(e) => {
                      resetRefinement();
                      setConfig({ ...config, designStyle: e.target.value as DesignStyle });
                    }}
                    aria-label="Design style"
                  >
                    {DESIGN_STYLES.map((style) => (
                      <option key={style} value={style}>{style}</option>
                    ))}
                  </Select>
                </div>

                <div className="sm:col-span-2">
                  <FieldLabel>Colour theme</FieldLabel>
                  <Select
                    value={config.colorTheme}
                    onChange={(e) => {
                      resetRefinement();
                      setConfig({ ...config, colorTheme: e.target.value });
                    }}
                    aria-label="Colour theme"
                  >
                    {COLOR_THEMES.map((theme) => (
                      <option key={theme} value={theme}>{theme}</option>
                    ))}
                  </Select>
                </div>
              </div>

              {/* Tech stack */}
              <div className="p-4 sm:p-5">
                <FieldLabel>Tech stack</FieldLabel>
                <div className="flex flex-wrap gap-1.5">
                  {TECH_STACK_OPTIONS.map((tech) => (
                    <Chip
                      key={tech}
                      tone="soft"
                      selected={config.techStack.includes(tech)}
                      onClick={() => handleToggleTech(tech)}
                    >
                      {config.techStack.includes(tech) && <Check className="h-3 w-3" />}
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Components */}
              <div className="p-4 sm:p-5">
                <FieldLabel>Components</FieldLabel>
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {COMPONENT_OPTIONS.map((comp) => (
                    <Chip
                      key={comp}
                      tone="soft"
                      selected={config.components.includes(comp)}
                      onClick={() => handleToggleComponent(comp)}
                      className="justify-start overflow-hidden"
                    >
                      {config.components.includes(comp) && <Check className="h-3 w-3 shrink-0" />}
                      <span className="truncate">{comp}</span>
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Directives */}
              <div className="p-4 sm:p-5">
                <FieldLabel>Additional directives</FieldLabel>
                <Textarea
                  rows={3}
                  value={config.customInstructions}
                  onChange={(e) => {
                    resetRefinement();
                    setConfig({ ...config, customInstructions: e.target.value });
                  }}
                  placeholder="Anything specific the generated UI must respect…"
                  aria-label="Additional directives"
                />
              </div>
            </div>
          </div>

          {/* ---------------- Output ---------------- */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-20">
              <div className="overflow-hidden rounded-lg border border-border bg-surface">
                <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-2.5">
                  <div className="flex min-w-0 items-center gap-2">
                    <Terminal className="h-3.5 w-3.5 shrink-0 text-subtle-foreground" />
                    <span className="truncate font-mono text-[11px] uppercase tracking-wider text-subtle-foreground">
                      system-prompt.md
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleEnhanceWithAI} disabled={isEnhancing}>
                    <Wand2 className={isEnhancing ? 'h-3.5 w-3.5 animate-spin' : 'h-3.5 w-3.5'} />
                    <span>{isEnhancing ? 'Refining' : 'AI refine'}</span>
                  </Button>
                </div>

                <Well className="m-0 rounded-none border-0 border-b border-border">
                  <pre className="max-h-80 overflow-y-auto whitespace-pre-wrap p-4 font-mono text-xs leading-relaxed text-muted-foreground">
                    {activePromptText}
                  </pre>
                </Well>

                <div className="space-y-2.5 p-4">
                  {refineNotice && (
                    <ErrorNotice>
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      <span>{refineNotice}</span>
                    </ErrorNotice>
                  )}

                  <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-subtle-foreground">
                    <span>{activePromptText.length.toLocaleString()} characters</span>
                    <span>{enhancedTextOverride ? 'AI refined' : 'Template'}</span>
                  </div>

                  <Button variant="primary" size="md" onClick={handleCopy} className="w-full">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? 'Copied to clipboard' : 'Copy prompt'}</span>
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="secondary" size="md" onClick={handleSaveToLibrary}>
                      {savedSuccess ? <Check className="h-3.5 w-3.5 text-success" /> : <Save className="h-3.5 w-3.5" />}
                      <span>{savedSuccess ? 'Saved' : 'Save'}</span>
                    </Button>
                    <Button variant="secondary" size="md" onClick={() => onPreviewPrompt(currentPromptObject)}>
                      <Play className="h-3.5 w-3.5" />
                      <span>Preview</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
