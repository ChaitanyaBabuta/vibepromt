import React, { useState } from 'react';
import { 
  BarChart2, TrendingUp, Cpu, Activity, Bot, Send, Search, Terminal as TerminalIcon, 
  ShoppingCart, Heart, Play, Pause, Check, ArrowRight, Shield, RefreshCw, Zap,
  Globe, Sparkles, Sliders, ChevronRight, PieChart, Layers
} from 'lucide-react';
import { UIPrompt } from '../types';

interface InteractiveUIPreviewProps {
  prompt: UIPrompt;
}

export const InteractiveUIPreview: React.FC<InteractiveUIPreviewProps> = ({ prompt }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [chatMessages, setChatMessages] = useState([
    { role: 'user', text: 'Generate a glassmorphic crypto dashboard layout with Recharts.' },
    { role: 'agent', text: 'Constructed responsive Crypto & Portfolio Analytics Dashboard. Rendered live gas tickers and allocation donut charts.' }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [cartCount, setCartCount] = useState(1);

  // Render different mini-preview interactive widgets based on layout type:
  if (prompt.previewLayout === 'analytics' || prompt.category === 'Dashboard' || prompt.category === 'Analytics') {
    return (
      <div className="w-full rounded-lg bg-surface border border-border p-4 sm:p-5 text-foreground font-sans shadow-popover">
        {/* Analytics Glassmorphic Header */}
        <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-semibold font-mono tracking-wider text-foreground">
              SOLANA & ETH PORTFOLIO
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-success-muted text-success border border-transparent">
              🟢 Gas: 14 Gwei
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-tertiary text-muted-foreground border border-border">
              Live Feed
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          <div className="rounded-md bg-surface-secondary border border-border p-3">
            <span className="text-[10px] text-muted-foreground uppercase font-mono">Total Net Worth</span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-lg font-semibold font-mono text-foreground">$142,850.40</span>
              <span className="text-[11px] font-semibold text-success">+14.2%</span>
            </div>
          </div>

          <div className="rounded-md bg-surface-secondary border border-border p-3">
            <span className="text-[10px] text-muted-foreground uppercase font-mono">24h PnL</span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-lg font-semibold font-mono text-success">+$12,410.00</span>
              <span className="text-[11px] font-mono text-muted-foreground">SOL/ETH</span>
            </div>
          </div>

          <div className="hidden sm:block rounded-md bg-surface-secondary border border-border p-3">
            <span className="text-[10px] text-muted-foreground uppercase font-mono">Yield Vault APY</span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-lg font-semibold font-mono text-muted-foreground">18.4% APY</span>
              <span className="text-[11px] text-muted-foreground">Staked</span>
            </div>
          </div>
        </div>

        {/* Chart Representation */}
        <div className="rounded-md bg-surface-secondary border border-border p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-muted-foreground">Portfolio Performance Curve</span>
            <div className="flex gap-1 text-[10px]">
              {['1D', '1W', '1M', '1Y', 'ALL'].map((tf, i) => (
                <button
                  key={tf}
                  className={`px-2 py-0.5 rounded ${i === 2 ? 'bg-primary text-primary-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          {/* Simulated Wave Chart */}
          <div className="h-28 w-full flex items-end justify-between gap-1 pt-4 px-2">
            {[40, 55, 35, 65, 80, 70, 90, 85, 110, 95, 120, 140, 130, 160, 150].map((h, i) => (
              <div
                key={i}
                className="w-full rounded-t bg-foreground/25 transition-colors hover:bg-foreground/40"
                style={{ height: `${(h / 160) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (prompt.previewLayout === 'ai_chat' || prompt.category === 'AI Agent UI') {
    return (
      <div className="w-full rounded-lg bg-surface border border-border p-4 text-foreground font-sans shadow-popover">
        <div className="flex items-center justify-between pb-3 border-b border-border mb-3">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-semibold font-mono text-foreground">
              AI Agent Canvas Workbench (Gemini 2.5 Flash)
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-success-muted text-success text-[10px] font-mono border border-transparent">
            ● Streaming Active
          </span>
        </div>

        {/* Chat Thread */}
        <div className="space-y-3 my-3 max-h-48 overflow-y-auto pr-1">
          {chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-md text-xs max-w-[85%] ${
                msg.role === 'user'
                  ? 'bg-accent-muted text-foreground ml-auto border border-accent-border'
                  : 'bg-surface-secondary text-muted-foreground border border-border'
              }`}
            >
              <div className="text-[10px] font-mono text-muted-foreground mb-1">
                {msg.role === 'user' ? 'You' : 'Agent Assistant'}
              </div>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="flex items-center gap-2 mt-2 bg-surface-secondary border border-border rounded-md p-1.5">
          <input
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && inputMsg.trim()) {
                setChatMessages([...chatMessages, { role: 'user', text: inputMsg }, { role: 'agent', text: `Executing component synthesis for: "${inputMsg}"` }]);
                setInputMsg('');
              }
            }}
            placeholder="Prompt AI Agent to modify interface layout..."
            className="w-full bg-transparent px-2 text-xs text-foreground placeholder:text-subtle-foreground focus:outline-none"
          />
          <button
            onClick={() => {
              if (inputMsg.trim()) {
                setChatMessages([...chatMessages, { role: 'user', text: inputMsg }, { role: 'agent', text: `Executing component synthesis for: "${inputMsg}"` }]);
                setInputMsg('');
              }
            }}
            className="p-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary-hover"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    );
  }

  if (prompt.previewLayout === 'landing' || prompt.category === 'Landing Page' || prompt.category === 'SaaS') {
    return (
      <div className="w-full rounded-lg bg-surface border border-border p-5 text-foreground font-sans shadow-popover">
        {/* Mock SaaS Hero */}
        <div className="text-center py-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-tertiary border border-border px-3 py-0.5 text-[10px] font-semibold text-muted-foreground mb-3">
            <Sparkles className="h-3 w-3" /> Next-Gen Developer Engine
          </span>
          <h4 className="text-xl font-semibold text-foreground tracking-tight">
            Automate Vibe Coding Workflows
          </h4>
          <p className="text-xs text-muted-foreground max-w-sm mx-auto mt-1">
            Zero-config deployment with live AI prompt refinement and instant component generation.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
              Start Free Trial <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button className="rounded-lg border border-border bg-surface-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground">
              View Demo
            </button>
          </div>
        </div>

        {/* Bento Grid Preview */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="rounded-md bg-surface-secondary border border-border p-3">
            <span className="text-[10px] font-semibold text-muted-foreground uppercase">⚡ 100x Speed</span>
            <p className="text-[11px] text-muted-foreground mt-1">Instant React component generation from natural prompts.</p>
          </div>
          <div className="rounded-md bg-surface-secondary border border-border p-3">
            <span className="text-[10px] font-semibold text-muted-foreground uppercase">🛡️ Enterprise Ready</span>
            <p className="text-[11px] text-muted-foreground mt-1">Type-safe TypeScript output with built-in Tailwind accessibility.</p>
          </div>
        </div>
      </div>
    );
  }

  // Default Fallback Layout Preview
  return (
    <div className="w-full rounded-lg bg-surface border border-border p-5 text-foreground font-sans shadow-popover">
      <div className="flex items-center justify-between pb-3 border-b border-border mb-3">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-semibold font-mono text-foreground">
            {prompt.title}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-surface-tertiary text-muted-foreground text-[10px] font-mono border border-border">
          {prompt.style}
        </span>
      </div>

      <div className="bg-surface-secondary rounded-md p-4 border border-border space-y-2">
        <div className="text-xs font-mono text-muted-foreground">
          Included Components:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {prompt.componentsIncluded.map((comp) => (
            <span key={comp} className="px-2 py-0.5 rounded bg-surface-tertiary text-[10px] text-muted-foreground border border-border">
              ✓ {comp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
