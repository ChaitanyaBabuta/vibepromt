import { UIPrompt } from '../types';

export const PROMPTS_BATCH_3: UIPrompt[] = [
  {
    id: 'ai-data-science-python-notebook',
    title: 'AI Data Science & Python Cloud Notebook Workspace',
    description: 'An interactive Jupyter-style cloud notebook for data scientists featuring code cell execution, DataFrame table view, and AI chart generator.',
    fullPrompt: `Design an AI Data Science & Python Cloud Notebook Workspace using React, Tailwind CSS, Recharts, and Lucide icons.

Workspace Layout:
1. Top Toolbar Bar:
   - Notebook Title ("customer_churn_prediction_v2.ipynb"), Python 3.11 Kernel Status pill ("🟢 Idle"), Run All Cells button, AI Auto-Code completion toggle, and GPU memory gauge (4.2GB / 16GB VRAM).
2. Notebook Cells Stream:
   - Cell 1 (Markdown Notes): Rich formatted text explaining dataset imports.
   - Cell 2 (Python Code Input):
     - Line-numbered code block importing pandas, numpy, and sklearn.
     - Inline "Run Cell (Shift+Enter)" play button.
   - Cell 3 (Interactive DataFrame Output Table):
     - Filterable and sortable data grid preview showing 1,000 rows x 18 columns with data types badge.
   - Cell 4 (AI Chart Cell Output):
     - Generated Recharts Scatter Plot showing Customer Lifetime Value vs Churn Probability with regression line.
3. Floating AI Data Assistant Chat Panel:
   - Quick prompts: "Clean missing values", "Generate correlation heatmap", "Feature importance graph".`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Data Science AI',
      handle: '@data_ai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 540,
    copies: 2100,
    isFeatured: true,
    createdAt: '2026-03-25',
    componentsIncluded: ['Notebook Toolbar', 'Python Code Cells', 'Interactive DataFrame Table', 'Recharts Scatter Plot Cell', 'Floating AI Assistant'],
    colorTheme: 'VS Code Dark Slate & Python Yellow',
    previewLayout: 'saas'
  },
  {
    id: 'electric-bike-sustainable-shop',
    title: 'Electric E-Bike & Commuter Mobility Storefront',
    description: 'A modern urban mobility store for electric commuter bikes featuring battery range calculator, motor specs comparison, and test ride scheduler.',
    fullPrompt: `Create an Electric E-Bike & Commuter Mobility Storefront using React, Tailwind CSS, Framer Motion, and Lucide icons.

Features:
1. Header Bar: Brand logo ("VELO E-BIKES"), navigation links (Commuter, Cargo, All-Terrain, Accessories, Test Ride Locations), cart icon.
2. Interactive Battery Range & Speed Calculator Hero:
   - Bike model preview image.
   - Rider Weight slider (120 lbs - 250 lbs), Terrain type selector (Flat City, Hilly Suburbs), and Assist Mode toggle (Eco, Tour, Turbo).
   - Live Estimated Battery Range Counter ("⚡ 65 Miles per Charge").
3. E-Bike Comparison Cards:
   - Model photos, motor wattage badge (750W Bafang Mid-Drive), battery capacity (48V 15Ah), top speed (28 MPH Class 3), hydraulic disc brakes, price ($1,899), and "Book Free Test Ride" CTA.
4. Test Ride Scheduler Modal:
   - Store location selector and appointment date picker.`,
    category: 'E-commerce',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Velo Design',
      handle: '@velo_bikes',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 1040,
    isFeatured: false,
    createdAt: '2026-03-22',
    componentsIncluded: ['Battery Range Calculator', 'Bike Spec Comparison Cards', 'Test Ride Modal', 'Location Selector'],
    colorTheme: 'Slate Grey & Electric Mint',
    previewLayout: 'ecommerce'
  },
  {
    id: 'habit-streak-builder-tracker-app',
    title: 'Smart Habit Streak Builder & Micro-Goal Tracker',
    description: 'A motivational habit tracking app with daily completion checkboxes, streak flame counters, habit category tags, and weekly consistency heatmaps.',
    fullPrompt: `Build a Smart Habit Streak Builder & Micro-Goal Tracker App using React, Tailwind CSS, Lucide icons, and Framer Motion.

App Layout & Components:
1. Top Header Profile Bar:
   - Date selector ("Tuesday, Oct 14"), total daily completion ring (5 / 7 Habits Completed - 71%), and overall active streak counter ("🔥 28 Days Unstoppable").
2. Daily Habit Checklist Grid:
   - Habit Cards:
     - Morning Meditation (10 mins) - Category: Mindfulness 🧘‍♂️ - Streak: 14 Days.
     - Drink 2.5L Water - Category: Health 💧 - Interactive progress bar (+250ml tap buttons).
     - Read 15 Pages - Category: Learning 📚 - Streak: 28 Days.
     - 45 Min Gym Workout - Category: Fitness 🏋️‍♀️ - Completed Checkbox with confetti animation.
3. GitHub-Style Weekly/Monthly Habit Consistency Heatmap:
   - Grid of green activity intensity blocks showing completion consistency over the past 30 days.
4. "+ Create New Habit" Modal:
   - Habit title, target frequency, color theme picker, and notification reminder time.`,
    category: 'Mobile App',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Habit Labs',
      handle: '@habit_labs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 390,
    copies: 1480,
    isFeatured: false,
    createdAt: '2026-03-20',
    componentsIncluded: ['Habit Checklist Cards', 'Completion Ring', 'GitHub-Style Consistency Heatmap', 'Confetti Animation', 'Create Habit Modal'],
    colorTheme: 'Dark Slate & Emerald Green',
    previewLayout: 'mobile'
  },
  {
    id: 'p2p-money-transfer-split-bill-app',
    title: 'P2P Money Transfer & Group Expense Split Bill App',
    description: 'A mobile web app for sending instant cash transfers, splitting group dinner & vacation bills, tracking owe balances, and QR payments.',
    fullPrompt: `Design a P2P Money Transfer & Group Expense Split Bill App using React, Tailwind CSS, Lucide icons, and Framer Motion.

Features & Interface:
1. Header Bar:
   - User profile balance ($640.50 available in Wallet), notification bell, and "Receive QR Code" button.
2. Group Trip / Expense Summary Card:
   - "Lake Tahoe Trip 🏔" (4 Members). Total group spent: $1,240.00.
   - Your net balance badge: "You are owed +$125.00" (or "You owe $45.00").
3. Split Bill Calculator Modal:
   - Select group members, total receipt amount, split mode (Split Equally, Split by Percent, Exact Amounts per item), and "Send Payment Request" button.
4. Recent P2P Transactions List:
   - Friend avatar, payment memo ("🍕 Pizza Night Split"), timestamp, amount, and instant "Settle Up" action button.`,
    category: 'FinTech',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Split Tech',
      handle: '@split_tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 330,
    copies: 1190,
    isFeatured: false,
    createdAt: '2026-03-18',
    componentsIncluded: ['Wallet Balance Card', 'Group Trip Summary Card', 'Split Bill Calculator Modal', 'P2P Transactions List'],
    colorTheme: 'Electric Purple & Mint Green',
    previewLayout: 'mobile'
  },
  {
    id: '3d-interactive-design-portfolio',
    title: '3D Interactive Motion & Spatial UI Designer Portfolio',
    description: 'A visually stunning designer portfolio showcasing 3D web interactive projects, client case studies, process breakdown, and project inquiry form.',
    fullPrompt: `Create a 3D Interactive Motion & Spatial UI Designer Portfolio using React, Tailwind CSS, Lucide icons, and Framer Motion.

Design Aesthetic:
- High Fashion Tech Dark Theme (#0a0a0f), glowing radial ambient lighting, smooth hover tilt effects, and bold typography.

Sections:
1. Header Navigation:
   - Designer Monogram ("LEX // 3D"), links (Selected Works, Spatial UI, Case Studies, About, Contact), and availability badge ("🟢 Available Q3 2026").
2. Hero Section:
   - Headline: "Crafting Immersive 3D Web Experiences & Spatial Interfaces".
   - Subtitle & interactive 3D card tilt preview.
3. Selected Case Studies Bento Grid:
   - Project 1: Spatial VisionOS Concept App (3D video preview, client name, tech stack tags, view case study button).
   - Project 2: WebGL Interactive Car Configurator.
   - Project 3: AI Spatial Audio Interface.
4. Interactive Client Inquiry Modal Form:
   - Project budget range selector ($10k-$25k, $25k-$50k, $50k+), timeline selector, project scope description textarea, and send button.`,
    category: 'Portfolio',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Lex Mercer',
      handle: '@lex_3d',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 480,
    copies: 1890,
    isFeatured: true,
    createdAt: '2026-03-15',
    componentsIncluded: ['Designer Nav', 'Hero 3D Tilt Preview', 'Case Study Bento Grid', 'Project Inquiry Modal'],
    colorTheme: 'High Fashion Dark & Cyan Glow',
    previewLayout: 'portfolio'
  },
  {
    id: 'ai-code-security-audit-agent',
    title: 'AI Code Security Audit Agent & Vulnerability Scanner',
    description: 'An AI security agent workspace for scanning repositories for SQL injections, hardcoded API secrets, XSS vulnerabilities, and automated patch PRs.',
    fullPrompt: `Build an AI Code Security Audit Agent & Vulnerability Scanner using React, Tailwind CSS, Lucide icons, and Framer Motion.

UI Modules:
1. Repository Security Overview Header:
   - Repository Selector ("acme-corp/payment-service-api"), Security Health Rating Score (B+ / 82 Security Rating), active branches, and "Run Full Security Scan" button.
2. Top Vulnerability KPI Summary:
   - Critical CVEs (1 Critical - Hardcoded JWT Secret).
   - High Risk (3 SQL Injection points in ORM query).
   - Medium Risk (8 Outdated NPM Dependencies).
   - Passed Tests (142 Clean Security Rules).
3. Detailed Vulnerabilities List & Code Diff Repair Panel:
   - Vulnerability item card showing file path (\`src/auth/jwt.ts:42\`), vulnerability description, CVSS score badge (9.8 Critical), and "Generate AI Fix PR" button.
   - Code Diff Viewer: Red removed unsafe line vs Green AI-repaired line with parameterized query replacement.
4. Automated GitHub Pull Request Creation Modal.`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'SecCode AI',
      handle: '@seccode_ai',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 510,
    copies: 2010,
    isFeatured: false,
    createdAt: '2026-03-12',
    componentsIncluded: ['Security Rating Header', 'Vulnerability KPI Cards', 'Code Diff Repair Viewer', 'Create PR Modal'],
    colorTheme: 'Dark Slate & Red/Green Diff',
    previewLayout: 'saas'
  },
  {
    id: 'travel-itinerary-map-journal-app',
    title: 'Smart Travel Itinerary & Interactive Map Trip Journal',
    description: 'A travel planning app featuring interactive day-by-day trip timelines, flight/hotel booking cards, map spot recommendations, and budget tracking.',
    fullPrompt: `Create a Smart Travel Itinerary & Interactive Map Trip Journal App using React, Tailwind CSS, Lucide icons, and Framer Motion.

Features & Screen Layout:
1. Trip Header Bar:
   - Trip Title ("Tokyo & Kyoto Autumn Adventure ⛩"), travel dates ("Oct 10 - Oct 22"), companion avatars (3 Travellers), and "Share Itinerary" link button.
2. Day-by-Day Timeline Navigator Tabs:
   - Day 1 (Shibuya & Harajuku), Day 2 (Asakusa Temples), Day 3 (Mount Fuji Day Trip), Day 4 (Bullet Train to Kyoto).
3. Daily Itinerary Items Stream:
   - 09:00 AM - Flight Arrival at Haneda Airport (Boarding pass barcode card & confirmation #).
   - 12:30 PM - Check-in at Hotel Gracery Shinjuku (Address & reservation voucher).
   - 03:00 PM - Visit TeamLab Planets Light Art (Ticket PDF preview & navigation link).
   - 07:30 PM - Dinner Reservation at Omoide Yokocho Ramen (Price estimate $35/person).
4. Trip Expense Budget Meter:
   - Total Trip Spend ($3,240 / $4,000 Budget) with category breakdown pie chart (Flights, Hotels, Food, Activities).`,
    category: 'Mobile App',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Travel Craft',
      handle: '@travel_craft',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 340,
    copies: 1220,
    isFeatured: false,
    createdAt: '2026-03-10',
    componentsIncluded: ['Trip Header', 'Day-by-Day Timeline Tabs', 'Itinerary Cards', 'Flight Barcode Card', 'Trip Expense Meter'],
    colorTheme: 'Clean Slate & Coral Orange',
    previewLayout: 'mobile'
  },
  {
    id: 'defi-automated-market-maker-ui',
    title: 'DeFi Automated Market Maker & Decentralized Liquidity Pool',
    description: 'A DeFi liquidity swap interface featuring slippage controls, pool yield APR percentage charts, impermanent loss calculator, and token swap.',
    fullPrompt: `Design a DeFi Automated Market Maker & Decentralized Liquidity Pool UI using React, Tailwind CSS, Recharts, and Lucide icons.

Interface Components:
1. Top Navigation Bar:
   - Web3 Wallet Connect Button (e.g. \`0x71C...42f\` - 1.45 ETH balance), network selector (Ethereum Mainnet, Arbitrum, Base, Solana), Swap / Pools / Yield Vaults tab selector.
2. Token Swap Widget (Centered Card):
   - Pay Token Input box (e.g. 2.5 ETH) with balance indicator & max button.
   - Token Switcher Arrow Button with rotation animation.
   - Receive Token Output box (e.g. 8,420 USDC) with live exchange rate info.
   - Slippage Settings Gear Modal (0.1%, 0.5%, 1.0%, Custom).
   - Price Impact Indicator ("0.02% - Minimal Impact").
   - Primary "Swap Tokens" Action Button.
3. Liquidity Pools Yield Table:
   - Pool Pair (ETH/USDC, WBTC/ETH, SOL/USDC), Total Value Locked (TVL $142M), Fee APR (24.8% APR), and "Add Liquidity" button.
4. Impermanent Loss Calculator Drawer.`,
    category: 'FinTech',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'DeFi Builder',
      handle: '@defi_builder',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 460,
    copies: 1850,
    isFeatured: false,
    createdAt: '2026-03-08',
    componentsIncluded: ['Web3 Wallet Connector', 'Token Swap Widget', 'Slippage Settings Modal', 'Liquidity Pools Table', 'Impermanent Loss Calculator'],
    colorTheme: 'Dark Obsidian & Cyan Glow',
    previewLayout: 'analytics'
  },
  {
    id: 'audiobook-podcast-player-app',
    title: 'Minimalist Audiobook Player & Smart Chapter Bookmarking App',
    description: 'An audiobook player interface with playback speed selector, chapter bookmarking notes, sleep timer modal, and audio equalizer.',
    fullPrompt: `Build a Minimalist Audiobook Player & Smart Chapter Bookmarking App using React, Tailwind CSS, Lucide icons, and Framer Motion.

Player Components:
1. Main Book Cover & Header View:
   - Book Cover Art with subtle blur shadow background, Title ("Dune - Frank Herbert"), Author, Narrator name, and current chapter pill ("Chapter 14: The Desert Walk").
2. Audio Scrubber Timeline & Controls:
   - Scrubbing progress line with time elapsed (01:42:10 / 03:15:00).
   - Center Controls: Skip Back 15s, Play/Pause, Skip Forward 15s.
   - Speed Selector Pills (0.75x, 1.0x, 1.25x, 1.5x, 2.0x).
3. Chapter List & Timestamp Notes Drawer:
   - Expandable chapters list with individual chapter durations and progress checkmarks.
   - User Bookmarks Section: Saved audio clips with personal text notes.
4. Sleep Timer Modal (Off, 15 Mins, 30 Mins, End of Chapter).`,
    category: 'Mobile App',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Audio Craft',
      handle: '@audio_craft',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 290,
    copies: 1020,
    isFeatured: false,
    createdAt: '2026-03-05',
    componentsIncluded: ['Book Cover View', 'Audio Scrubber Bar', 'Playback Speed Selector', 'Chapters List Drawer', 'Sleep Timer Modal'],
    colorTheme: 'Warm Dark Charcoal & Amber',
    previewLayout: 'mobile'
  },
  {
    id: 'bento-grid-fintech-security',
    title: 'FinTech Security & Compliance Bento Grid Showcase',
    description: 'A security feature showcase bento grid highlighting 256-bit encryption, instant fraud detection AI, zero knowledge proofs, and multi-factor auth.',
    fullPrompt: `Design a FinTech Security & Compliance Bento Grid Showcase using React, Tailwind CSS, Lucide icons, and Framer Motion.

Bento Layout:
1. Box 1 (2x2 Large):
   - "Real-Time AI Fraud Prevention": Interactive transaction simulation stream automatically flagging suspicious login attempts from unknown devices.
2. Box 2 (1x2 Vertical):
   - "Biometric & Hardware Key MFA": Animated FaceID and YubiKey security verification visual badge.
3. Box 3 (2x1 Horizontal):
   - "SOC2 Type II & PCI-DSS Level 1": Verified compliance badges with downloadable audit reports.
4. Box 4 (1x1 Square):
   - "256-bit AES Vault Encryption": Rotating cryptographic key animation.
5. Box 5 (1x1 Square):
   - "Zero Knowledge Proofs": Privacy verification meter showing zero raw data exposure.

Design Style:
- Pitch dark slate canvas (#060911), emerald green (#10b981) security badges, metallic card borders, and crisp typography.`,
    category: 'Bento Grid',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'SecBento Studio',
      handle: '@sec_bento',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 410,
    copies: 1590,
    isFeatured: false,
    createdAt: '2026-03-02',
    componentsIncluded: ['AI Fraud Stream Box', 'Biometric MFA Visual', 'SOC2 Compliance Badges', 'AES Encryption Key Widget', 'Bento Cards'],
    colorTheme: 'Dark Slate & Emerald Security Green',
    previewLayout: 'bento'
  },
  {
    id: 'ai-creative-writing-companion',
    title: 'AI Creative Writing & Novel Chapter Outliner Studio',
    description: 'A workspace for authors featuring character profile builder, plot thread timeline, story worldbuilding wiki, and AI prose continuation.',
    fullPrompt: `Create an AI Creative Writing & Novel Chapter Outliner Studio using React, Tailwind CSS, Lucide icons, and Framer Motion.

Interface Features:
1. Left Worldbuilding & Character Sidebar:
   - Characters List (Protagonist, Antagonist, Supporting) with avatar, motivation, and flaw notes.
   - World Lore Wiki (Locations, Magic/Tech Rules, Factions).
2. Center Distraction-Free Prose Editor:
   - Chapter title input ("Chapter 4: The Whispering Forest").
   - Rich text editor area with word count counter, reading time estimate, and focus mode toggle.
   - AI Inline Prose Assistant trigger (⌘J): "Continue Scene", "Describe Setting", "Enhance Dialogue Tension".
3. Right Plot Arc & Chapter Outliner:
   - Visual plot tree (Inciting Incident -> Rising Action -> Climax -> Resolution).
   - Chapter cards with status badge (Drafting, Editing, Complete).`,
    category: 'AI Agent UI',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Novel AI',
      handle: '@novel_ai',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 380,
    copies: 1420,
    isFeatured: false,
    createdAt: '2026-02-28',
    componentsIncluded: ['Worldbuilding Sidebar', 'Distraction-Free Prose Editor', 'AI Prose Continuation Popover', 'Plot Arc Outliner Tree'],
    colorTheme: 'Warm Paper Cream & Espresso',
    previewLayout: 'saas'
  },
  {
    id: 'architect-spatial-design-studio-portfolio',
    title: 'Architectural Design Studio & Spatial Interior Portfolio',
    description: 'An architectural portfolio showcasing residential projects, 3D render gallery, floorplan blueprint viewer, and project consultation form.',
    fullPrompt: `Build an Architectural Design Studio & Spatial Interior Portfolio using React, Tailwind CSS, Framer Motion, and Lucide icons.

Aesthetic Guidelines:
- High Minimalist Architecture Style: Crisp off-white canvas (#fafafa), stark black typography, generous negative space, and full-resolution photograph framing.

Sections:
1. Navigation Bar:
   - Architectural Monogram ("STUDIO NØRD // ARCHITECTURE"), links (Projects, Philosophy, Blueprint Gallery, Press, Contact).
2. Hero Section:
   - Full-width architectural photograph of modern brutalist concrete villa.
   - Heading: "Architecture Grounded in Natural Light & Raw Materials".
3. Selected Architecture Projects Grid:
   - Project Cards: High-res photograph, location ("Reykjavik, Iceland"), project type ("Residential Villa - 450 sqm"), year, and "Explore Blueprint & Gallery" button.
4. Interactive Floorplan Blueprint Viewer Modal:
   - Toggle between 3D Exterior Render, 2D Floorplan Blueprint, and Interior Specs.`,
    category: 'Portfolio',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Studio Nørd',
      handle: '@studio_nord',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 320,
    copies: 1110,
    isFeatured: false,
    createdAt: '2026-02-25',
    componentsIncluded: ['Architectural Navbar', 'Full-width Photo Hero', 'Project Grid Cards', 'Interactive Floorplan Viewer Modal'],
    colorTheme: 'Monochrome Off-White & Stark Black',
    previewLayout: 'portfolio'
  },
  {
    id: 'customer-feedback-survey-analytics-saas',
    title: 'Customer NPS Feedback & User Survey Sentiment Analytics',
    description: 'A SaaS platform for collecting Net Promoter Score (NPS) surveys, analyzing user sentiment with AI keyword extraction, and tracking CSAT trends.',
    fullPrompt: `Design a Customer NPS Feedback & User Survey Sentiment Analytics SaaS Platform using React, Tailwind CSS, Recharts, and Lucide icons.

Modules:
1. Navigation Bar: NPS Score, Feedback Stream, Survey Builder, AI Sentiment Topics, Customer Churn Risk.
2. Top NPS Overview Metric Cards:
   - Net Promoter Score (+64 NPS Score - Excellent).
   - Promoters Count (72% - 1,420 Users).
   - Passives Count (20%).
   - Detractors Count (8% - 158 Users requiring follow-up).
3. Recharts NPS Trend Line Chart over past 12 months.
4. AI Sentiment Keyword Word Cloud & Topics Table:
   - Keyword tags (e.g. "Fast Onboarding" 🟢 +84 Positive, "Pricing Too High" 🔴 -32 Negative, "Great UI Design" 🟢 +112 Positive).
5. Customer Feedback Inbox Stream:
   - Customer name, plan, NPS score rating (0-10), comment text, AI sentiment tag (Positive/Negative/Neutral), and 1-click "Respond to Customer" button.`,
    category: 'Analytics',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'NPS Flow',
      handle: '@nps_flow',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 290,
    copies: 980,
    isFeatured: false,
    createdAt: '2026-02-22',
    componentsIncluded: ['NPS Score Cards', 'Recharts NPS Trend Chart', 'AI Sentiment Topics Table', 'Customer Feedback Stream'],
    colorTheme: 'Slate Neutral & Emerald/Red NPS Pills',
    previewLayout: 'analytics'
  },
  {
    id: 'ai-resume-interview-coach-app',
    title: 'AI Resume Optimization & Technical Interview Coach',
    description: 'An AI career preparation tool for scanning resumes against job descriptions, identifying ATS keywords, and generating mock interview questions.',
    fullPrompt: `Create an AI Resume Optimization & Technical Interview Coach App using React, Tailwind CSS, Lucide icons, and Framer Motion.

Workflow Steps:
1. Resume & Job Description Scanner:
   - Upload Resume PDF box.
   - Target Job Description Textarea (e.g. "Staff Frontend Engineer at Stripe").
   - "Scan Match Score" AI button.
2. Resume Match Analysis Dashboard:
   - Overall Match Score Ring (84% Match Score).
   - Missing Keywords List (e.g. "GraphQL", "Web Vitals", "System Architecture").
   - Resume Bullet Point Enhancer (Original bullet vs AI-enhanced metric-driven bullet).
3. AI Mock Technical Interview Simulator:
   - Generated interview questions customized to job description.
   - Answer practice voice/text input box.
   - AI Instant Feedback Card (Clarity, Technical Depth, STAR method alignment).`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Career AI',
      handle: '@career_ai',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 420,
    copies: 1680,
    isFeatured: false,
    createdAt: '2026-02-20',
    componentsIncluded: ['Resume Scanner Box', 'Match Score Ring', 'Missing Keywords List', 'Bullet Point Enhancer', 'Mock Interview Simulator'],
    colorTheme: 'Indigo Slate & Emerald Match Score',
    previewLayout: 'saas'
  },
  {
    id: 'digital-asset-preset-storefront',
    title: 'Digital Creator Assets, Lightroom Presets & 3D Packs Shop',
    description: 'An online digital storefront for creators selling Lightroom presets, 3D Blender assets, UI kits, and video transitions.',
    fullPrompt: `Build a Digital Creator Assets, Lightroom Presets & 3D Packs Shop using React, Tailwind CSS, Framer Motion, and Lucide icons.

Shop Design:
1. Header Bar: Brand logo ("PIXEL & GRAIN // ASSETS"), category links (Lightroom Presets 📸, 3D Assets 🎨, UI Kits 💻, Sound Effects 🎵), cart drawer.
2. Featured Digital Pack Hero:
   - "Cinematic Film Emulation Preset Bundle (10 Presets)" with interactive Before/After photo comparison slider.
   - Price badge ($39.00), instant digital download guarantee pill, and "Buy Pack Instant" button.
3. Digital Catalog Grid:
   - Asset cards showing file format tags (.cube, .blend, .figma), preview image, star rating, price, and instant checkout button.
4. Instant License Checkout Modal:
   - Personal vs Commercial License selector, instant download link generation, and receipt email input.`,
    category: 'E-commerce',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Pixel Grain',
      handle: '@pixel_grain',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 1090,
    isFeatured: false,
    createdAt: '2026-02-18',
    componentsIncluded: ['Creator Shop Header', 'Before/After Comparison Slider', 'Digital Asset Cards', 'File Format Badges', 'Instant Download Modal'],
    colorTheme: 'Dark Obsidian & Amber Orange',
    previewLayout: 'ecommerce'
  }
];
