import React, { useState, useEffect } from 'react';
import { X, Plus, Check } from 'lucide-react';
import { UIPrompt, PromptCategory, DesignStyle, TechStackItem, TargetTool } from '../types';
import { Button, FieldLabel, Input, Select, Textarea } from './ui/primitives';

interface SubmitPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (prompt: UIPrompt) => void;
}

const CATEGORY_OPTIONS: PromptCategory[] = [
  'Dashboard',
  'Landing Page',
  'SaaS',
  'AI Agent UI',
  'Bento Grid',
  'E-commerce',
  'Mobile App',
  'Portfolio',
  'Analytics',
  'FinTech',
];

const STYLE_OPTIONS: DesignStyle[] = [
  'Glassmorphism',
  'Minimalist',
  'Cyberpunk Neon',
  'Obsidian Dark',
  'Bento Grid',
  'Neumorphic',
  'Gradient Accent',
];

const TARGET_TOOL_OPTIONS: TargetTool[] = ['v0', 'Cursor', 'Bolt.new', 'Claude', 'Windsurf'];

export const SubmitPromptModal: React.FC<SubmitPromptModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fullPrompt, setFullPrompt] = useState('');
  const [category, setCategory] = useState<PromptCategory>('Dashboard');
  const [style, setStyle] = useState<DesignStyle>('Glassmorphism');
  const [techStackInput, setTechStackInput] = useState('Tailwind CSS, Shadcn UI, Framer Motion');
  const [componentsInput, setComponentsInput] = useState('Header, Sidebar, Recharts Area Chart, Data Table');
  const [targetTool, setTargetTool] = useState<TargetTool>('v0');
  const [authorName, setAuthorName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape and lock page scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !fullPrompt) return;

    const techArray = techStackInput.split(',').map((s) => s.trim() as TechStackItem).filter(Boolean);
    const compArray = componentsInput.split(',').map((s) => s.trim()).filter(Boolean);

    const newPrompt: UIPrompt = {
      id: `user-submitted-${Date.now()}`,
      title,
      description: description || title,
      fullPrompt,
      category,
      style,
      techStack: techArray.length ? techArray : ['Tailwind CSS', 'Shadcn UI', 'Framer Motion'],
      targetTools: [targetTool],
      author: {
        name: authorName || 'Community Vibe Coder',
        handle: `@${(authorName || 'vibe_coder').toLowerCase().replace(/\s+/g, '_')}`,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      },
      likes: 1,
      copies: 0,
      createdAt: new Date().toISOString().split('T')[0],
      componentsIncluded: compArray.length ? compArray : ['Header', 'Main View'],
      colorTheme: 'Dark Slate & Indigo',
      previewLayout: category.toLowerCase().includes('landing') ? 'landing' : category.toLowerCase().includes('ai') ? 'ai_chat' : 'dashboard',
    };

    onSubmit(newPrompt);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  // NOTE: this early return must stay below every hook above it.
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6">
      {/* Scrim */}
      <div
        className="fixed inset-0 bg-overlay animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="submit-prompt-title"
        className="relative z-10 mx-auto my-4 w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-surface shadow-modal animate-scale-in"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-surface-secondary text-muted-foreground">
              <Plus className="h-4 w-4" />
            </span>
            <div>
              <h2 id="submit-prompt-title" className="text-[15px] font-semibold tracking-tight text-foreground">
                Submit a prompt
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Saved to your library in this browser.
              </p>
            </div>
          </div>

          <Button variant="ghost" size="icon-sm" onClick={onClose} aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="max-h-[65vh] space-y-5 overflow-y-auto px-5 py-5 sm:px-6">
            <div>
              <FieldLabel>
                Title <span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Glassmorphism crypto analytics dashboard"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel>Category</FieldLabel>
                <Select value={category} onChange={(e) => setCategory(e.target.value as PromptCategory)}>
                  {CATEGORY_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Select>
              </div>

              <div>
                <FieldLabel>Design style</FieldLabel>
                <Select value={style} onChange={(e) => setStyle(e.target.value as DesignStyle)}>
                  {STYLE_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <FieldLabel>Short description</FieldLabel>
              <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What does this prompt generate?"
              />
            </div>

            <div>
              <FieldLabel>
                Full system prompt <span className="text-destructive">*</span>
              </FieldLabel>
              <Textarea
                required
                rows={7}
                value={fullPrompt}
                onChange={(e) => setFullPrompt(e.target.value)}
                placeholder="Paste the full, detailed prompt instructions here…"
                className="font-mono text-xs"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel>Target tool</FieldLabel>
                <Select value={targetTool} onChange={(e) => setTargetTool(e.target.value as TargetTool)}>
                  {TARGET_TOOL_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Select>
              </div>

              <div>
                <FieldLabel>Author name</FieldLabel>
                <Input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Alex Vibe"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel>Tech stack</FieldLabel>
                <Input
                  type="text"
                  value={techStackInput}
                  onChange={(e) => setTechStackInput(e.target.value)}
                  placeholder="Comma separated"
                />
                <p className="mt-1.5 text-[11px] text-subtle-foreground">Comma separated.</p>
              </div>

              <div>
                <FieldLabel>Components included</FieldLabel>
                <Input
                  type="text"
                  value={componentsInput}
                  onChange={(e) => setComponentsInput(e.target.value)}
                  placeholder="Comma separated"
                />
                <p className="mt-1.5 text-[11px] text-subtle-foreground">Comma separated.</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 border-t border-border bg-surface-secondary px-5 py-4 sm:px-6">
            <Button type="button" variant="ghost" size="md" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="md">
              {submitted ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Saved</span>
                </>
              ) : (
                <span>Publish prompt</span>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
