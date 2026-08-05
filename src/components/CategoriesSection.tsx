import React from 'react';
import { 
  BarChart2, Layout, Zap, Bot, Grid, ShoppingBag, Smartphone, User, TrendingUp, X
} from 'lucide-react';
import { UIPrompt } from '../types';

interface CategoriesSectionProps {
  prompts: UIPrompt[];
  onSelectCategory: (cat: string) => void;
  onBackToMain?: () => void;
}

const CATEGORIES_META = [
  { name: 'Dashboard', icon: BarChart2, description: 'Analytics, crypto metrics, and data visualization command centers.' },
  { name: 'Landing Page', icon: Layout, description: 'Hero layouts, product showcases, and high-converting sections.' },
  { name: 'SaaS', icon: Zap, description: 'Subscription platforms, pricing matrices, and account panels.' },
  { name: 'AI Agent UI', icon: Bot, description: 'Prompt workbenches, execution node graphs, and streaming chat.' },
  { name: 'Bento Grid', icon: Grid, description: 'Modular Bento card layouts with animated lighting borders.' },
  { name: 'E-commerce', icon: ShoppingBag, description: 'Storefronts, filter drawers, slide-over carts, and checkout modals.' },
  { name: 'Mobile App', icon: Smartphone, description: 'Viewport layouts, fitness rings, and touch-optimized controls.' },
  { name: 'Portfolio', icon: User, description: 'Developer CVs, project showcases, and interactive terminals.' },
  { name: 'Analytics', icon: TrendingUp, description: 'Telemetry dashboards, Recharts, and real-time log viewers.' },
];

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ prompts, onSelectCategory, onBackToMain }) => {
  return (
    <section id="categories" className="py-10 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800/80">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Categories
            </h2>
            <p className="text-zinc-400 text-xs mt-1">
              Browse prompts organized by functional UI archetype.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES_META.map((cat) => {
            const Icon = cat.icon;
            const count = prompts.filter((p) => p.category === cat.name).length;

            return (
              <div
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className="group relative rounded-xl bg-zinc-900/40 border border-zinc-800 p-5 hover:border-red-500/50 hover:bg-zinc-900/80 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 border border-zinc-800 text-red-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                    {count} {count === 1 ? 'Prompt' : 'Prompts'}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors mb-1">
                  {cat.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
