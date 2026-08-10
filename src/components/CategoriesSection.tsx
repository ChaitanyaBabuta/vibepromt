import React from 'react';
import {
  BarChart2, Layout, Zap, Bot, Grid, ShoppingBag, Smartphone, User, TrendingUp,
  Landmark, ArrowRight, X,
} from 'lucide-react';
import { UIPrompt } from '../types';
import { Button, SectionHeader } from './ui/primitives';
import { cn } from '../lib/utils';

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
  { name: 'FinTech', icon: Landmark, description: 'Banking consoles, fraud and AML investigation workspaces, and trading desks.' },
];

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ prompts, onSelectCategory, onBackToMain }) => {
  return (
    <section id="categories" className="bg-background py-10 sm:py-12">
      <div className="container-page">
        <SectionHeader
          title="Categories"
          description="Browse prompts organised by functional UI archetype."
          actions={
            onBackToMain && (
              <Button variant="ghost" size="sm" onClick={onBackToMain} title="Back to the library">
                <span>Back to library</span>
                <X className="h-3.5 w-3.5" />
              </Button>
            )
          }
        />

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES_META.map((cat) => {
            const Icon = cat.icon;
            const count = prompts.filter((p) => p.category === cat.name).length;

            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={cn(
                  'group flex cursor-pointer flex-col rounded-lg border border-border bg-surface p-4 text-left',
                  'transition-colors duration-150 hover:border-border-strong hover:bg-hover',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-secondary text-muted-foreground transition-colors duration-150 group-hover:text-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-xs text-subtle-foreground">
                    {count} {count === 1 ? 'prompt' : 'prompts'}
                  </span>
                </div>

                <h3 className="mt-3.5 flex items-center gap-1.5 text-sm font-semibold tracking-tight text-foreground">
                  {cat.name}
                  <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-subtle-foreground opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100" />
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{cat.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
