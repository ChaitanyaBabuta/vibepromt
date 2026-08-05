import { UIPrompt } from '../types';

export const PROMPTS_BATCH_5: UIPrompt[] = [
  {
    id: 'b2b-crm-pipeline-sales-dashboard',
    title: 'B2B CRM Enterprise Sales Pipeline & Deal Stage Dashboard',
    description: 'An enterprise CRM pipeline dashboard for sales leaders tracking deal stages, ARR forecast, quota attainment, and lead conversion.',
    fullPrompt: `Build a B2B CRM Enterprise Sales Pipeline & Deal Stage Dashboard using React, Tailwind CSS, Recharts, and Lucide icons.

Dashboard Modules:
1. Header Bar: Sales Rep Filter ("All Teams / Enterprise US"), Quota Period ("Q3 2026"), Total Pipeline Value ($4.2M ARR), and "+ New Deal" button.
2. Sales Pipeline Kanban Stages:
   - Prospecting ($850k - 12 Deals).
   - Discovery Call ($1.2M - 8 Deals).
   - Proposal Sent ($950k - 5 Deals).
   - Contract Negotiation ($820k - 3 Deals).
   - Closed Won ($420k - 4 Deals - Green Highlight).
   - Drag-and-drop style deal cards with company logo, deal amount ($120k ARR), probability percentage badge (75%), and key decision-maker contact.
3. Recharts Revenue Forecast & Rep Quota Leaderboard Chart.
4. Deal Activity Timeline Drawer with meeting notes and email log.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'CRM Flow',
      handle: '@crm_flow',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 390,
    copies: 1410,
    isFeatured: false,
    createdAt: '2026-01-18',
    componentsIncluded: ['Sales Pipeline Kanban', 'Deal Stage Cards', 'ARR Forecast Recharts', 'Rep Quota Leaderboard', 'Deal Activity Drawer'],
    colorTheme: 'Slate Blue & Emerald Closed Won',
    previewLayout: 'analytics'
  },
  {
    id: 'ai-translation-localization-hub',
    title: 'AI Multi-Language Translation & Software Localization Hub',
    description: 'A software localization studio for translating i18n JSON files across 40+ languages with context awareness, glossary rules, and pluralization.',
    fullPrompt: `Design an AI Multi-Language Translation & Software Localization Hub using React, Tailwind CSS, Lucide icons, and Framer Motion.

Studio Sections:
1. Header Bar: Project ("Mobile App iOS v3.4"), Source Language ("English US"), Target Languages (24 Active Languages), Translation Completion Bar (88%), and "Export i18n JSON" button.
2. i18n Translation Key Matrix Table:
   - Key string ID (\`auth.login.button_text\`).
   - Source English string ("Sign in to your account").
   - Target Language Columns (Spanish, German, Japanese, French, Arabic RTL support toggle).
   - AI Auto-Translation Status Tag (100% Verified, Needs Human Review, Untranslated).
3. AI Context & Glossary Rules Sidebar:
   - Non-translatable brand terms list ("VibePrompt", "Cursor", "v0").
   - Tone selector (Formal, Friendly, Concise).
   - Character length constraint validator for mobile UI buttons.`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'i18n Tech',
      handle: '@i18n_tech',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 340,
    copies: 1250,
    isFeatured: false,
    createdAt: '2026-01-15',
    componentsIncluded: ['i18n Matrix Table', 'RTL Support Toggle', 'AI Glossary Rules Panel', 'Character Length Validator', 'Export JSON Modal'],
    colorTheme: 'Slate Neutral & Electric Blue',
    previewLayout: 'saas'
  },
  {
    id: 'modern-billing-invoicing-saas',
    title: 'Automated Billing, Usage Metering & Stripe Invoicing Portal',
    description: 'A financial portal for SaaS companies managing subscription tiers, usage-based metering API billing, overdue invoice reminders, and tax rules.',
    fullPrompt: `Create an Automated Billing, Usage Metering & Stripe Invoicing Portal using React, Tailwind CSS, Recharts, and Lucide icons.

Portal Modules:
1. Top Financial KPI Strip:
   - Monthly Recurring Revenue ($184,200 MRR).
   - Net Revenue Retention (118% NRR).
   - Active Paid Subscriptions (1,420 Subscriptions).
   - Overdue Unpaid Invoices ($4,200 - 3 Invoices).
2. Subscription Customer Billing Management Table:
   - Account Name, Current Plan Tier (Enterprise Pro / Usage Metered), Billing Cycle (Annual), Monthly Spend, Payment Method (Visa ****4242), Status Badge (Active 🟢 / Past Due 🔴), and "View Invoice PDF" button.
3. Interactive Usage-Based Metering Recharts Chart:
   - API calls usage vs plan threshold over the billing month.
4. Custom Invoice Builder Modal with line items, tax calculator, and payment link generator.`,
    category: 'FinTech',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Billing Craft',
      handle: '@billing_craft',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 410,
    copies: 1490,
    isFeatured: false,
    createdAt: '2026-01-12',
    componentsIncluded: ['Financial KPI Strip', 'Customer Billing Table', 'Usage Metering Chart', 'Custom Invoice Builder Modal'],
    colorTheme: 'Slate Navy & Emerald Green',
    previewLayout: 'analytics'
  },
  {
    id: 'technical-writer-docs-portal',
    title: 'Developer Documentation Portal & Interactive API Reference',
    description: 'A documentation site with sticky sidebar navigation, search, interactive API code blocks, dark/light theme, and feedback widget.',
    fullPrompt: `Build a Developer Documentation Portal & Interactive API Reference using React, Tailwind CSS, Lucide icons, and Framer Motion.

Site Architecture:
1. Top Navigation Header:
   - Logo ("VibeDocs // API v2.0"), Search bar (⌘K shortcut), Quick Links (Guides, API Reference, SDKs, Changelog, Status Page), GitHub star button.
2. Left Sticky Documentation Sidebar:
   - Nested navigation tree (Getting Started, Authentication, Webhooks, Errors, Rate Limits, Endpoints -> \`GET /v1/prompts\`, \`POST /v1/generate\`).
3. Center Main Article Area:
   - Clear markdown-style content with breadcrumb header, code callouts (Info, Warning, Tip), table of contents on right, and "Was this page helpful? 👍 👎" feedback widget.
4. Right Interactive API Playground Block:
   - Method badge (\`POST\`), Endpoint URL (\`https://api.vibeprompt.com/v1/generate\`).
   - Request Header & Body JSON editor.
   - "Send Test Request" button with simulated JSON response preview block and copy code snippet selector (cURL, TypeScript, Python, Go).`,
    category: 'Portfolio',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Docs Craft',
      handle: '@docs_craft',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 480,
    copies: 1820,
    isFeatured: false,
    createdAt: '2026-01-10',
    componentsIncluded: ['Docs Sidebar Tree', 'API Request Playground', 'Code Snippet Selector', 'Feedback Widget', 'Table of Contents'],
    colorTheme: 'Dark Obsidian & Cyan Accent',
    previewLayout: 'portfolio'
  },
  {
    id: 'ai-form-builder-react-generator',
    title: 'AI Drag-and-Drop Form Builder & React Code Generator',
    description: 'A visual form designer for creating multi-step surveys, contact forms, and lead capture with instant React/Tailwind code export.',
    fullPrompt: `Create an AI Drag-and-Drop Form Builder & React Code Generator using React, Tailwind CSS, Lucide icons, and Framer Motion.

Features:
1. Top Action Header:
   - Form Title ("Enterprise Lead Intake Form"), Mode Switcher (Visual Builder / Live Preview / Export Code), and "Publish Form" button.
2. Left Form Elements Palette:
   - Input Fields: Short Text, Long Textarea, Email, Phone Number, Dropdown Select, Radio Group, File Upload Dropzone, Rating Stars, Date Picker.
3. Center Canvas Builder:
   - Drag-and-drop form canvas with reorderable field blocks, field label editor, required toggle switch, placeholder text input, and validation rules.
4. Right Instant React + Tailwind Code Export Drawer:
   - Generated clean TypeScript React component code with React Hook Form & Zod schema validation ready to copy.`,
    category: 'SaaS',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Form Craft',
      handle: '@form_craft',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 390,
    copies: 1450,
    isFeatured: false,
    createdAt: '2026-01-08',
    componentsIncluded: ['Elements Palette', 'Drag-and-drop Canvas', 'Form Validation Config', 'Export React Code Drawer'],
    colorTheme: 'Slate Neutral & Indigo Accent',
    previewLayout: 'saas'
  },
  {
    id: 'crypto-staking-yield-vaults-dashboard',
    title: 'Crypto Staking, DeFi Yield Vaults & Liquid Staking Dashboard',
    description: 'A Web3 yield optimization platform for staking crypto assets, monitoring APY interest returns, gas fees, and auto-compounding rewards.',
    fullPrompt: `Design a Crypto Staking, DeFi Yield Vaults & Liquid Staking Dashboard using React, Tailwind CSS, Recharts, and Lucide icons.

Key Modules:
1. Top Staking Portfolio Banner:
   - Total Staked Value ($184,500.00).
   - Lifetime Yield Earned (+$12,420.00).
   - Average Portfolio APY (8.4% APY).
   - 1-Click "Claim All Rewards" Button ($420.50 Pending).
2. Staking Vaults List Table:
   - Vault Asset (ETH Liquid Staking stETH, SOL Marinade, WBTC Yield Vault, USDC Auto-Compounder).
   - Lock Duration (Flexible 0 Days, 30 Days, 90 Days, 1 Year).
   - Current APY Rate (6.5% - 14.2%).
   - Total Value Locked ($42M TVL).
   - "Deposit & Stake" Action Modal.
3. Recharts Cumulative Yield Earnings Chart over time.`,
    category: 'FinTech',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Yield Tech',
      handle: '@yield_tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 430,
    copies: 1610,
    isFeatured: false,
    createdAt: '2026-01-05',
    componentsIncluded: ['Staking Portfolio Banner', 'Claim Rewards Button', 'Staking Vaults Table', 'Deposit Action Modal', 'Recharts Yield Chart'],
    colorTheme: 'Dark Obsidian & Neon Cyan/Emerald',
    previewLayout: 'analytics'
  },
  {
    id: 'ai-search-engine-answer-canvas',
    title: 'AI Search Engine & Perplexity-Style Research Answer Canvas',
    description: 'A web search engine featuring real-time AI answer synthesis, web citation source cards, follow-up query suggestions, and rich media results.',
    fullPrompt: `Create an AI Search Engine & Perplexity-Style Research Answer Canvas using React, Tailwind CSS, Lucide icons, and Framer Motion.

Interface Features:
1. Centered Search Header Bar:
   - Query Input ("What are the key technical breakthroughs in quantum computing for 2026?").
   - Search Focus selector (All Web 🌐, Academic Papers 🎓, Code Repositories 💻, Finance 📈).
2. AI Answer Synthesis Main Area:
   - Real-time streaming response text with inline footnote citation pills (e.g. \`[1]\`, \`[2]\`, \`[3]\`).
   - Web Citation Source Cards Carousel: Favicon, domain name, article title snippet, and match score badge.
3. Follow-Up Queries & Deep Dive Section:
   - Clickable follow-up question pills ("How does error correction scale in topological qubits?", "Who are the leading quantum computing companies in 2026?").
4. Export & Share Toolbar: Copy Markdown, Export PDF, Share Link.`,
    category: 'AI Agent UI',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Search AI Labs',
      handle: '@search_ai',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 620,
    copies: 2680,
    isFeatured: true,
    createdAt: '2026-01-02',
    componentsIncluded: ['Search Query Bar', 'Streaming AI Answer Canvas', 'Citation Source Cards Carousel', 'Follow-up Question Pills', 'Export Toolbar'],
    colorTheme: 'Pitch Dark Slate & Cyan Accent',
    previewLayout: 'saas'
  }
];
