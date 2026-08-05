import { UIPrompt } from '../types';

export const PROMPTS_BATCH_4: UIPrompt[] = [
  {
    id: 'ai-synthetic-data-generator-lab',
    title: 'AI Synthetic Data Generator & Anonymization Engine',
    description: 'A developer platform for generating privacy-compliant synthetic datasets, anonymizing PII data, and exporting JSON/CSV schemas.',
    fullPrompt: `Design an AI Synthetic Data Generator & Anonymization Engine using React, Tailwind CSS, Lucide icons, and Framer Motion.

Platform Features:
1. Header Bar: Project selector ("FinTech-ML-Training-Data"), dataset schema selector, total rows generated counter (1,000,000 Rows), and "Generate Batch" button.
2. Schema Configuration Canvas:
   - Field Definition Rows: Field name (e.g., \`user_id\`, \`credit_score\`, \`email\`, \`purchase_amount\`), Data Type dropdown (UUID, Gaussian Distribution, Anonymized PII, Categorical), Null percentage slider (0-10%), and constraints rule modal.
3. Live Preview Generated Table:
   - Preview grid displaying 10 sample synthetic rows generated with realistic distributions and zero real PII exposure.
4. Privacy Compliance Benchmark Meter:
   - Differential Privacy Epsilon Score ($\epsilon = 0.5$ - High Privacy Protection), Re-identification Risk Rating (0.01% - Extremely Safe).
5. Export Data Modal: Format options (CSV, Parquet, JSON lines, Direct SQL Insert script).`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Lucide Icons', 'TypeScript'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Synth AI',
      handle: '@synth_data',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 470,
    copies: 1720,
    isFeatured: true,
    createdAt: '2026-02-15',
    componentsIncluded: ['Schema Definition Canvas', 'Synthetic Data Preview Grid', 'Differential Privacy Meter', 'Data Export Modal'],
    colorTheme: 'Dark Obsidian & Emerald Cyan',
    previewLayout: 'saas'
  },
  {
    id: 'local-community-event-discovery-app',
    title: 'Local Community Event Discovery & RSVP Ticketing App',
    description: 'A vibrant mobile app for discovering local concerts, art pop-ups, tech meetups, food festivals, and instant QR ticket check-ins.',
    fullPrompt: `Create a Local Community Event Discovery & RSVP Ticketing App using React, Tailwind CSS, Lucide icons, and Framer Motion.

App Layout:
1. Header Bar: Location selector ("San Francisco, CA 📍"), date filter (Today, This Weekend, Next Week), search bar, and user profile.
2. Event Category Chips:
   - Music & Concerts 🎷, Tech Meetups 💻, Art & Design 🎨, Food & Wine 🍷, Outdoor Sports 🚴‍♂️, Pop-ups 🛍.
3. Featured Event Carousel Banner:
   - High-impact promo card for "Design Systems SF 2026", venue address, ticket price ($25.00 or Free RSVP badge), remaining seats counter ("🔥 Only 12 tickets left!"), and "Get Ticket" CTA.
4. Interactive Events Grid:
   - Event Cards: Image, event title, host avatar, date & time, distance ("1.2 miles away"), attending count ("142 Attending"), and quick bookmark button.
5. Digital QR Ticket Pass Modal:
   - Event pass with scannable QR code, seat info, calendar Sync button, and directions button.`,
    category: 'Mobile App',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'City Vibe',
      handle: '@city_vibe',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 1120,
    isFeatured: false,
    createdAt: '2026-02-12',
    componentsIncluded: ['Event Category Chips', 'Featured Event Banner', 'Events Grid Cards', 'Digital QR Ticket Pass Modal'],
    colorTheme: 'Clean Slate & Vibrant Orange',
    previewLayout: 'mobile'
  },
  {
    id: 'international-remittance-crypto-portal',
    title: 'International Remittance & Low-Fee Cross-Border Portal',
    description: 'A global money transfer portal offering live foreign exchange rate comparisons, low-fee multi-currency transfers, and payout status tracking.',
    fullPrompt: `Build an International Remittance & Low-Fee Cross-Border Portal using React, Tailwind CSS, Recharts, and Lucide icons.

Portal Modules:
1. Currency Converter & Transfer Widget (Centered Hero Card):
   - Send Amount Input (e.g., $1,000 USD).
   - Recipient Currency Selector (e.g., 🇲🇽 MXN - Mexican Peso, 🇮🇳 INR - Indian Rupee, 🇵🇭 PHP - Philippine Peso).
   - Live Exchange Rate Display ($1 USD = 17.24 MXN - Guaranteed Rate for 20 Mins).
   - Fee Transparency Breakdown: Bank Fee ($25.00) vs Our Fee ($2.50) -> "You save $22.50!".
   - Estimated Delivery Time Pill ("⚡ In 5 Minutes via Direct Bank Deposit").
   - Primary "Send Money Now" Action Button.
2. Live Foreign Exchange Rate Recharts Comparison Chart.
3. Active Transfer Tracking Timeline:
   - Step 1: Payment Received -> Step 2: FX Converted -> Step 3: Sent to Partner Bank -> Step 4: Deposited to Recipient.`,
    category: 'FinTech',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Global Pay',
      handle: '@global_pay',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 360,
    copies: 1310,
    isFeatured: false,
    createdAt: '2026-02-10',
    componentsIncluded: ['Remittance Converter Card', 'Fee Transparency Breakdown', 'FX Rate Recharts', 'Transfer Tracking Step Timeline'],
    colorTheme: 'Emerald Green & Slate Navy',
    previewLayout: 'analytics'
  },
  {
    id: 'motion-designer-reel-portfolio',
    title: 'Motion Designer Reel & Commercial Case Studies Showcase',
    description: 'A dark high-impact portfolio for motion graphics artists featuring video reel embeds, client brand logos, project breakdowns, and contact modal.',
    fullPrompt: `Create a Motion Designer Reel & Commercial Case Studies Showcase using React, Tailwind CSS, Framer Motion, and Lucide icons.

Aesthetic Concept:
- Ultra-Dark Cinematic Theme (#08080a), full-bleed video aspect ratios, smooth video autoplay previews on hover, and bold display typography.

Sections:
1. Navigation Header:
   - Monogram ("KAI // MOTION"), links (Showreel 2026, Commercial, 3D Art, Brands, Contact), and availability badge.
2. Full-Width Showreel Hero Viewport:
   - Embedded video container with custom minimalist play/pause button, mute toggle, and full-screen trigger.
   - Headline: "Crafting High-Octane Motion Graphics & Brand Identities".
3. Selected Client Projects Grid:
   - Video Cards: Nike Air Max 3D Commercial (Client: Nike - Role: Lead 3D Animator), Apple Keynote Graphic Sequence, Cyberpunk Game Trailer.
   - Hover effect: Instant silent video loop preview.
4. Client Brands Ticker & Contact Form Modal.`,
    category: 'Portfolio',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Kai Motion',
      handle: '@kai_motion',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 420,
    copies: 1540,
    isFeatured: false,
    createdAt: '2026-02-08',
    componentsIncluded: ['Showreel Hero Viewport', 'Hover Autoplay Video Cards', 'Client Brand Logos Ticker', 'Contact Modal'],
    colorTheme: 'Cinematic Dark & Electric Cyan',
    previewLayout: 'portfolio'
  },
  {
    id: 'ai-workflow-automation-agent-canvas',
    title: 'AI Visual Workflow Automation & Multi-Agent Swarm Canvas',
    description: 'A node-based workflow editor for building autonomous AI agent flows connecting APIs, LLMs, database triggers, and email actions.',
    fullPrompt: `Build an AI Visual Workflow Automation & Multi-Agent Swarm Canvas using React, Tailwind CSS, Lucide icons, and React Flow / Node Canvas UI.

Canvas Layout & Components:
1. Top Toolbar:
   - Workflow Title ("Automated Customer Support & CRM Sync"), Test Run button, Enable Active Trigger toggle switch, and Export Workflow JSON button.
2. Left Drag-and-Drop Node Palette Drawer:
   - Triggers: Webhook Received ⚡, Schedule Cron ⏰, New Email Inbox 📧.
   - AI Agents: Gemini 1.5 Pro Agent 🤖, Claude Summarizer 📝, Web Scraping Agent 🌐.
   - Actions: Slack Notification 💬, Database Insert 🗄, Send Email ✉️.
3. Center Interactive Node Graph Canvas:
   - Connected node cards with status indicators (Green checkmark for success, glowing pulse for active execution).
   - Node 1: Webhook Trigger ("User Signup").
   - Node 2: Gemini AI Agent ("Generate Personalized Welcome Email").
   - Node 3: SendGrid Email Action ("Send Email").
4. Right Node Configuration Drawer:
   - Input parameters, model temperature settings, and live test output preview console.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Swarm AI',
      handle: '@swarm_ai',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 680,
    copies: 2950,
    isFeatured: true,
    createdAt: '2026-02-05',
    componentsIncluded: ['Workflow Toolbar', 'Node Palette Drawer', 'Interactive Node Canvas Graph', 'Node Config Panel', 'Execution Test Console'],
    colorTheme: 'Dark Obsidian & Electric Purple/Cyan',
    previewLayout: 'saas'
  },
  {
    id: 'micro-saas-niche-keyword-researcher',
    title: 'Micro-SaaS Niche Keyword & SEO Opportunity Finder',
    description: 'A specialized SEO research tool for micro-SaaS founders analyzing search volume, keyword difficulty, competitor SERP domain authority, and MRR potential.',
    fullPrompt: `Design a Micro-SaaS Niche Keyword & SEO Opportunity Finder using React, Tailwind CSS, Recharts, and Lucide icons.

Key Features:
1. Search Bar Header:
   - Niche Topic Input (e.g. "AI PDF Summarizer for Lawyers"), country filter, and "Analyze Keyword Opportunity" button.
2. Keyword Opportunity Score KPI Cards:
   - Search Volume (18,400 Searches / mo).
   - Keyword Difficulty Score (28/100 - Easy Niche Opportunity 🟢).
   - Average CPC ($4.20).
   - Estimated Niche MRR Potential ($12,000 / mo).
3. SERP Competitor Analysis Table:
   - Rank #1-10 websites, Domain Rating (DR), Backlink count, estimated organic traffic, and content gap analysis badge.
4. Related Low-Competition Long-Tail Keywords List:
   - Table with keyword, monthly search volume, trend sparkline, and 1-click "Export CSV" button.`,
    category: 'SaaS',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'SEO Tech',
      handle: '@seo_tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 380,
    copies: 1390,
    isFeatured: false,
    createdAt: '2026-02-02',
    componentsIncluded: ['Keyword Search Bar', 'Opportunity Score KPI Cards', 'SERP Competitor Table', 'Long-Tail Keywords List'],
    colorTheme: 'Slate Grey & Emerald Green',
    previewLayout: 'analytics'
  },
  {
    id: 'full-stack-freelancer-hire-page',
    title: 'Full-Stack Senior Freelancer Engineering & Hire Page',
    description: 'A high-converting personal hiring landing page for senior freelance developers featuring rate calculator, tech stack badges, client testimonials, and booking calendar.',
    fullPrompt: `Create a Full-Stack Senior Freelancer Engineering & Hire Page using React, Tailwind CSS, Framer Motion, and Lucide icons.

Layout Sections:
1. Navigation Bar:
   - Developer Name ("ALEX RIVERA // SR. FULL-STACK ENGINEER"), links (Services, Tech Stack, Past Clients, Hourly Rate, Book Call), availability status badge ("🟢 1 Spot Available for Q3").
2. Hero Section:
   - Headline: "Senior React, Node.js & AI Systems Engineer for Hire".
   - Subtitle: "Helping venture-backed startups ship production-ready web applications at breakneck speed."
   - Dual CTAs: "Book 15-Min Intro Call" and "View Tech Stack & Rates".
3. Interactive Project Estimator & Rate Calculator:
   - Select Project Type (MVP Web App, AI Integration, Performance Optimization).
   - Estimated Duration slider (2 Wks - 12 Wks).
   - Estimated Project Cost Range ($8,000 - $35,000).
4. Tech Stack Experience Cards & Client Testimonials Carousel.`,
    category: 'Portfolio',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Alex Rivera',
      handle: '@alex_dev',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 430,
    copies: 1620,
    isFeatured: false,
    createdAt: '2026-01-28',
    componentsIncluded: ['Freelancer Header', 'Hero Value Proposition', 'Interactive Project Estimator Calculator', 'Tech Stack Grid', 'Testimonials Carousel'],
    colorTheme: 'Dark Slate & Electric Blue',
    previewLayout: 'portfolio'
  },
  {
    id: 'ai-game-worldbuilder-lore-tool',
    title: 'AI Game Worldbuilder & Quest Lore Generator Workspace',
    description: 'An AI worldbuilding workspace for RPG game designers featuring map node connections, NPC dialogue generator, item loot tables, and quest outlines.',
    fullPrompt: `Build an AI Game Worldbuilder & Quest Lore Generator Workspace using React, Tailwind CSS, Lucide icons, and Framer Motion.

UI Sections:
1. Left World Directory Tree:
   - Regions (e.g., "The Frozen Wastes of Frostfall"), Factions, Key NPCs, Magic Artifacts, Quests.
2. Center World Canvas & Quest Writer:
   - Quest Title ("The Lost Amulet of Aethelgard").
   - Quest Briefing, Objectives checklist, Level Requirement (Level 25+).
   - AI NPC Dialogue Generator Component:
     - Select NPC Personality (Grumpy Dwarf Smith, Wise Elf Mage, Mysterious Rogue).
     - Generated branching dialogue trees with player response choices.
3. Right Item Loot Generator & Stat Balance Matrix:
   - Generated Legendary Sword Card with stats (Damage, Crit Chance, Elemental Fire Damage), rarity color badge (Purple Legendary), and lore flavor text.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Game AI Studio',
      handle: '@game_ai',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 510,
    copies: 1920,
    isFeatured: false,
    createdAt: '2026-01-25',
    componentsIncluded: ['World Directory Tree', 'Quest Writer Canvas', 'AI NPC Dialogue Generator', 'Item Loot Card Generator'],
    colorTheme: 'Dark Fantasy Metallic & Gold/Purple',
    previewLayout: 'saas'
  },
  {
    id: 'micro-investing-round-up-app',
    title: 'Micro-Investing Spare Change & Automated Stock Round-Up App',
    description: 'A mobile web app that automatically rounds up daily credit card purchases to the nearest dollar and invests spare change into fractional shares.',
    fullPrompt: `Create a Micro-Investing Spare Change & Automated Stock Round-Up App using React, Tailwind CSS, Recharts, and Lucide icons.

App Layout & Features:
1. Top Balance Banner:
   - Total Invested Spare Change ($1,840.50).
   - Total Earnings (+14.8% Lifetime Growth).
   - Monthly Round-Up Multiplier Selector (1x, 2x, 3x, 5x Round-Up Boost).
2. Recent Transactions Round-Up Feed:
   - Starbucks Coffee ($4.25 -> Rounded to $5.00 -> +$0.75 Invested into Apple Stock 🍏).
   - Uber Ride ($18.10 -> Rounded to $19.00 -> +$0.90 Invested into S&P 500 Index 📈).
   - Supermarket ($42.60 -> Rounded to $43.00 -> +$0.40 Invested into Tesla Stock ⚡).
3. Recharts Automated Compound Growth Projection Chart.
4. Linked Bank Account & Card Security Status Card.`,
    category: 'FinTech',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'RoundUp Pay',
      handle: '@roundup_pay',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 340,
    copies: 1180,
    isFeatured: false,
    createdAt: '2026-01-22',
    componentsIncluded: ['Round-Up Balance Banner', 'Multiplier Selector Buttons', 'Transactions Round-Up Feed', 'Recharts Compound Chart'],
    colorTheme: 'Emerald Green & Slate Dark',
    previewLayout: 'mobile'
  },
  {
    id: 'bento-grid-hardware-spec-showcase',
    title: 'Next-Gen Hardware Specs & Silicon Chip Bento Grid Showcase',
    description: 'A high-tech hardware product landing page bento grid showcasing 3nm chip architecture, neural engine TOPS, battery efficiency, and liquid cooling.',
    fullPrompt: `Design a Next-Gen Hardware Specs & Silicon Chip Bento Grid Showcase using React, Tailwind CSS, Lucide icons, and Framer Motion.

Bento Box Layout:
1. Box 1 (2x2 Large):
   - "3nm M4 Ultra Architecture": Interactive 3D chip transistor visualization with animated glowing electron paths and 38-Core GPU badge.
2. Box 2 (1x2 Vertical):
   - "50 Neural TOPS for On-Device AI": Performance comparison bar vs previous generation.
3. Box 3 (2x1 Horizontal):
   - "Vapor Chamber Liquid Cooling": Animated temperature heat sink gauge (32°C under peak heavy workload).
4. Box 4 (1x1 Square):
   - "22 Hours Battery Life": Battery percentage ring with fast charging specs (50% in 20 mins).
5. Box 5 (1x1 Square):
   - "Thunderbolt 5 - 80 Gbps": High-speed data throughput speed meter.

Aesthetic Style:
- Deep titanium dark canvas (#0a0c10), electric neon cyan (#06b6d4) lighting, crisp metallic borders, and high-tech typography.`,
    category: 'Bento Grid',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Silicon Lab',
      handle: '@silicon_lab',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 450,
    copies: 1740,
    isFeatured: false,
    createdAt: '2026-01-20',
    componentsIncluded: ['3D Chip Visualizer Box', 'Neural TOPS Bar', 'Vapor Chamber Cooling Gauge', 'Thunderbolt Speed Meter', 'Bento Cards'],
    colorTheme: 'Titanium Dark & Electric Cyan',
    previewLayout: 'bento'
  }
];
