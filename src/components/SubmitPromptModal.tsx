import React, { useState } from 'react';
import { X, Plus, Terminal, Check, Layers, Cpu, Code2 } from 'lucide-react';
import { UIPrompt, PromptCategory, DesignStyle, TechStackItem, TargetTool } from '../types';

interface SubmitPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (prompt: UIPrompt) => void;
}

export const SubmitPromptModal: React.FC<SubmitPromptModalProps> = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8 z-10 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600/20 text-red-400 border border-red-500/30">
              <Plus className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Submit a Vibe Prompt</h2>
              <p className="text-xs text-zinc-400">Share your battle-tested UI prompts with the Vibe Coding community.</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-400 text-xs font-semibold text-zinc-300 hover:text-white transition-all shadow-md group cursor-pointer"
            title="Close and go back to main page"
          >
            <span className="hidden sm:inline">Main Page</span>
            <X className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 block">
              Prompt Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Glassmorphism Crypto & Portfolio Analytics Dashboard"
              className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3.5 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:border-red-500 focus:outline-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 block">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as PromptCategory)}
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-zinc-200 focus:outline-none"
              >
                <option value="Dashboard">Dashboard</option>
                <option value="Landing Page">Landing Page</option>
                <option value="SaaS">SaaS</option>
                <option value="AI Agent UI">AI Agent UI</option>
                <option value="Bento Grid">Bento Grid</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Analytics">Analytics</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 block">
                Design Aesthetic Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value as DesignStyle)}
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-zinc-200 focus:outline-none"
              >
                <option value="Glassmorphism">Glassmorphism</option>
                <option value="Minimalist">Minimalist</option>
                <option value="Cyberpunk Neon">Cyberpunk Neon</option>
                <option value="Obsidian Dark">Obsidian Dark</option>
                <option value="Bento Grid">Bento Grid</option>
                <option value="Neumorphic">Neumorphic</option>
                <option value="Gradient Accent">Gradient Accent</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 block">
              Short Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief summary of what this interface prompt generates..."
              className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3.5 py-2 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 block">
              Full System Prompt Text *
            </label>
            <textarea
              required
              rows={5}
              value={fullPrompt}
              onChange={(e) => setFullPrompt(e.target.value)}
              placeholder="Paste the full, detailed prompt instructions here..."
              className="w-full rounded-xl bg-zinc-900 border border-zinc-800 p-3 text-xs text-zinc-200 font-mono placeholder-zinc-600 focus:border-red-500 focus:outline-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 block">
                Tech Stack (comma separated)
              </label>
              <input
                type="text"
                value={techStackInput}
                onChange={(e) => setTechStackInput(e.target.value)}
                placeholder="Tailwind CSS, Shadcn UI, Recharts..."
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-zinc-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1 block">
                Author Name / Handle
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="e.g. Alex Vibe"
                className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-zinc-200 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-red-600/30"
            >
              {submitted ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" /> Submitted!
                </>
              ) : (
                'Publish Prompt'
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
