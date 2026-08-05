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
      <div className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-5 text-slate-100 font-sans shadow-2xl">
        {/* Analytics Glassmorphic Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-bold font-mono tracking-wider text-slate-200">
              SOLANA & ETH PORTFOLIO
            </span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              🟢 Gas: 14 Gwei
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Live Feed
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
          <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-3">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Total Net Worth</span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-lg font-bold font-mono text-white">$142,850.40</span>
              <span className="text-[11px] font-bold text-emerald-400">+14.2%</span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-3">
            <span className="text-[10px] text-slate-400 uppercase font-mono">24h PnL</span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-lg font-bold font-mono text-emerald-400">+$12,410.00</span>
              <span className="text-[11px] font-mono text-slate-400">SOL/ETH</span>
            </div>
          </div>

          <div className="hidden sm:block rounded-xl bg-slate-900/60 border border-slate-800/80 p-3">
            <span className="text-[10px] text-slate-400 uppercase font-mono">Yield Vault APY</span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-lg font-bold font-mono text-purple-400">18.4% APY</span>
              <span className="text-[11px] text-slate-400">Staked</span>
            </div>
          </div>
        </div>

        {/* Chart Representation */}
        <div className="rounded-xl bg-slate-900/40 border border-slate-800 p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-semibold text-slate-300">Portfolio Performance Curve</span>
            <div className="flex gap-1 text-[10px]">
              {['1D', '1W', '1M', '1Y', 'ALL'].map((tf, i) => (
                <button
                  key={tf}
                  className={`px-2 py-0.5 rounded ${i === 2 ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-white'}`}
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
                className="w-full bg-gradient-to-t from-red-600/30 via-red-500/80 to-rose-400 rounded-t transition-all hover:bg-rose-300"
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
      <div className="w-full rounded-2xl bg-zinc-950 border border-zinc-800 p-4 text-zinc-100 font-sans shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-violet-400" />
            <span className="text-xs font-bold font-mono text-zinc-200">
              AI Agent Canvas Workbench (Gemini 2.5 Flash)
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
            ● Streaming Active
          </span>
        </div>

        {/* Chat Thread */}
        <div className="space-y-3 my-3 max-h-48 overflow-y-auto pr-1">
          {chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl text-xs max-w-[85%] ${
                msg.role === 'user'
                  ? 'bg-red-900/40 text-red-200 ml-auto border border-red-500/30'
                  : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
              }`}
            >
              <div className="text-[10px] font-mono text-zinc-400 mb-1">
                {msg.role === 'user' ? 'You' : 'Agent Assistant'}
              </div>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="flex items-center gap-2 mt-2 bg-zinc-900 border border-zinc-800 rounded-xl p-1.5">
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
            className="w-full bg-transparent px-2 text-xs text-white placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={() => {
              if (inputMsg.trim()) {
                setChatMessages([...chatMessages, { role: 'user', text: inputMsg }, { role: 'agent', text: `Executing component synthesis for: "${inputMsg}"` }]);
                setInputMsg('');
              }
            }}
            className="p-1.5 rounded-lg bg-red-600 text-white hover:bg-red-500"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    );
  }

  if (prompt.previewLayout === 'landing' || prompt.category === 'Landing Page' || prompt.category === 'SaaS') {
    return (
      <div className="w-full rounded-2xl bg-zinc-950 border border-zinc-800 p-5 text-zinc-100 font-sans shadow-2xl">
        {/* Mock SaaS Hero */}
        <div className="text-center py-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 border border-red-500/20 px-3 py-0.5 text-[10px] font-semibold text-red-400 mb-3">
            <Sparkles className="h-3 w-3" /> Next-Gen Developer Engine
          </span>
          <h4 className="text-xl font-extrabold text-white tracking-tight">
            Automate Vibe Coding Workflows
          </h4>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-1">
            Zero-config deployment with live AI prompt refinement and instant component generation.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <button className="flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-md shadow-red-600/30">
              Start Free Trial <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-300">
              View Demo
            </button>
          </div>
        </div>

        {/* Bento Grid Preview */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="rounded-xl bg-zinc-900/60 border border-zinc-800 p-3">
            <span className="text-[10px] font-bold text-red-400 uppercase">⚡ 100x Speed</span>
            <p className="text-[11px] text-zinc-300 mt-1">Instant React component generation from natural prompts.</p>
          </div>
          <div className="rounded-xl bg-zinc-900/60 border border-zinc-800 p-3">
            <span className="text-[10px] font-bold text-rose-400 uppercase">🛡️ Enterprise Ready</span>
            <p className="text-[11px] text-zinc-300 mt-1">Type-safe TypeScript output with built-in Tailwind accessibility.</p>
          </div>
        </div>
      </div>
    );
  }

  // Default Fallback Layout Preview
  return (
    <div className="w-full rounded-2xl bg-zinc-950 border border-zinc-800 p-5 text-zinc-100 font-sans shadow-2xl">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-3">
        <div className="flex items-center gap-2">
          <TerminalIcon className="h-4 w-4 text-red-400" />
          <span className="text-xs font-bold font-mono text-zinc-200">
            {prompt.title}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-[10px] font-mono border border-red-500/20">
          {prompt.style}
        </span>
      </div>

      <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800 space-y-2">
        <div className="text-xs font-mono text-zinc-400">
          Included Components:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {prompt.componentsIncluded.map((comp) => (
            <span key={comp} className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 border border-zinc-700">
              ✓ {comp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
