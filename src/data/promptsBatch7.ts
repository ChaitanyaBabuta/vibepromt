import { UIPrompt } from '../types';

export const PROMPTS_BATCH_7: UIPrompt[] = [
  {
    id: 'ai-financial-fraud-graph-network',
    title: 'AI Financial Fraud & AML Network Relationship Graph',
    description: 'A cyber threat & anti-money-laundering intelligence workspace visualising transaction money flow graphs, shell company nodes, and high-risk flags.',
    fullPrompt: `Design an AI Financial Fraud & AML Network Relationship Graph Workspace using React, Tailwind CSS, Recharts, and Lucide icons.

Workspace Features:
1. Top Investigation Header:
   - Case File ID ("AML-CASE-8942 - Offshore Shell Network Investigation"), Risk Level Tag (CRITICAL RISK 🔴), Assigned Investigator Avatar, and "Generate SAR Regulatory Report" button.
2. Interactive Transaction Node Network Graph Viewport:
   - Node clusters representing bank accounts, shell corporations, crypto wallets, and wire transfers with color-coded risk highlights.
   - Clickable entity node popover showing entity owner, registration jurisdiction (Cayman Islands), flagged transaction volume ($4.2M transferred in 24 hours), and risk score.
3. Flagged Suspicious Activity Stream:
   - Rapid velocity transfers, structuring under $10k threshold, unknown IP addresses stream.
4. AI Regulatory Suspicious Activity Report (SAR) Modal.`,
    category: 'FinTech',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Cyber Fraud AI',
      handle: '@cyber_fraud',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 490,
    copies: 1890,
    isFeatured: true,
    createdAt: '2025-12-02',
    componentsIncluded: ['AML Node Graph Viewport', 'Entity Popover Modal', 'Suspicious Activity Stream', 'SAR Report Generator Modal'],
    colorTheme: 'Dark Obsidian & Crimson Danger',
    previewLayout: 'analytics'
  },
  {
    id: 'electric-supercar-launch-page',
    title: 'Electric Hypercar Launch & 3D Interactive Configurator',
    description: 'An ultra-luxury electric hypercar showcase page featuring aerodynamic specs, zero-to-sixty acceleration timers, carbon body finish, and order deposit.',
    fullPrompt: `Build an Electric Hypercar Launch & 3D Interactive Configurator using React, Tailwind CSS, Framer Motion, and Lucide icons.

Aesthetic Style:
- High Luxury Dark Matte Canvas (#09090b), electric cyan accent lines, bold metallic typography, and full-bleed high-res renders.

Page Modules:
1. Full-Width Cinematic Hero Banner:
   - Hypercar video/render header.
   - Headline: "1,900 HP. 0-60 MPH in 1.74s. The Future of Velocity."
   - Dual CTAs: "Reserve Allocation ($5,000 Deposit)" and "Configure Hypercar".
2. Key Performance Metrics Grid:
   - Acceleration: 1.74s ⚡
   - Top Speed: 258 MPH 🏎
   - Range: 380 Miles 🔋
   - Horsepower: 1,900 HP 🏁
3. Interactive Body Color & Wheel Customizer:
   - Exterior Finish: Stealth Matte Black, Liquid Silver, Electric Hyper Cyan, Exposed Carbon Fiber.
   - Wheel Trim: 21" Forged Magnesium Wheels.
   - Live price calculator ($2,400,000 MSRP).`,
    category: 'Landing Page',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Apex Motors',
      handle: '@apex_motors',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 560,
    copies: 2150,
    isFeatured: false,
    createdAt: '2025-11-28',
    componentsIncluded: ['Cinematic Hero Banner', 'Performance Spec Grid', 'Interactive Car Configurator', 'Reservation Deposit Modal'],
    colorTheme: 'Stealth Black & Electric Cyan',
    previewLayout: 'landing'
  },
  {
    id: 'bento-grid-ai-video-synthesis',
    title: 'AI Generative Video & Cinematic Physics Bento Grid',
    description: 'An AI video generation engine product landing bento grid highlighting 4K camera movement control, character consistency, physics, and lip-sync.',
    fullPrompt: `Design an AI Generative Video & Cinematic Physics Bento Grid Showcase using React, Tailwind CSS, Lucide icons, and Framer Motion.

Bento Grid Layout:
1. Box 1 (2x2 Large):
   - "4K 60FPS Cinematic Generation": Video player viewport simulation showing camera orbit movement controls (Pan, Tilt, Zoom, FPV Drone Shot) with live prompt guidance text.
2. Box 2 (1x2 Vertical):
   - "Multi-Shot Character Consistency": Side-by-side frame comparison maintaining identical character faces across different scenes.
3. Box 3 (2x1 Horizontal):
   - "Realistic Fluid & Lighting Physics": Motion physics simulation metric.
4. Box 4 (1x1 Square):
   - "Lip-Sync Audio Match": Voice audio track alignment meter.
5. Box 5 (1x1 Square):
   - "10x Render Speed": Real-time frame generation speed.

Design Style:
- Deep obsidian dark background (#06080e), glowing indigo/cyan accents, and metallic card borders.`,
    category: 'Bento Grid',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'VideoBento',
      handle: '@video_bento',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 470,
    copies: 1790,
    isFeatured: false,
    createdAt: '2025-11-25',
    componentsIncluded: ['4K Video Control Box', 'Character Consistency Box', 'Fluid Physics Box', 'Bento Cards'],
    colorTheme: 'Obsidian Dark & Indigo Glow',
    previewLayout: 'bento'
  },
  {
    id: 'ai-clinical-health-ehr-copilot',
    title: 'AI Clinical EHR Assistant & Medical Diagnosis Copilot',
    description: 'A clinical decision support workspace for doctors summarizing patient histories, checking drug interactions, and drafting encounter notes.',
    fullPrompt: `Create an AI Clinical EHR Assistant & Medical Diagnosis Copilot using React, Tailwind CSS, Lucide icons, and Framer Motion.

Clinical Workspace:
1. Header Bar: Patient Selector ("Sarah Jenkins - Age 48"), Medical Record ID (#EHR-98420), Vitals Summary (BP 120/80, HR 72, O2 98%), and "Draft Clinical Note" button.
2. Left Patient History Timeline:
   - Past visits, lab result trends, allergies alert box (🔴 Severe Penicillin Allergy Alert), active medications list.
3. Center AI Diagnostic Copilot & Encounter Note Assistant:
   - Chief Complaint: "Persistent cough & fatigue for 2 weeks".
   - AI Differential Diagnosis Recommendations with probability scores (e.g., Acute Bronchitis 78%, Bacterial Pneumonia 18%).
   - Drug Interaction Checker Tool: Warns against prescribing contraindicated drugs with current medications.
4. Export SOAP Note Modal (Subjective, Objective, Assessment, Plan).`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'MedAI Tech',
      handle: '@med_ai',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 430,
    copies: 1610,
    isFeatured: false,
    createdAt: '2025-11-22',
    componentsIncluded: ['Patient Vitals Header', 'Allergies Alert Box', 'AI Differential Diagnosis Panel', 'Drug Interaction Checker', 'SOAP Note Modal'],
    colorTheme: 'Clean Slate & Medical Cyan/Teal',
    previewLayout: 'saas'
  },
  {
    id: 'crypto-neobank-debit-card-app',
    title: 'Crypto Neobank & Visa Metal Card Spending Dashboard',
    description: 'A digital banking app seamlessly integrating fiat checking balances, crypto holdings, instant debit card cashback rewards, and virtual card issuance.',
    fullPrompt: `Design a Crypto Neobank & Visa Metal Card Spending Dashboard using React, Tailwind CSS, Recharts, and Lucide icons.

App Layout & Features:
1. Balance Header Card:
   - Combined Net Balance ($42,850.00 - $32,000 USD Fiat / $10,850 BTC/ETH Crypto).
   - Monthly Cashback Earned ($124.50 paid in Bitcoin ⚡).
   - Virtual Card Toggle (Instant Apple Pay / Google Pay Sync).
2. Visa Metal Card Visualizer Widget:
   - Interactive 3D card render with card freeze/unfreeze toggle switch, set spending limits slider ($1,000/day), and reveal CVV security code button.
3. Recent Transactions Stream:
   - Transaction list showing merchant logo, category tag, fiat/crypto payment mode badge, and cashback earned.
4. Recharts Monthly Cashflow & Crypto Yield Chart.`,
    category: 'FinTech',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'NeoBank Tech',
      handle: '@neobank_tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 380,
    copies: 1420,
    isFeatured: false,
    createdAt: '2025-11-18',
    componentsIncluded: ['Combined Balance Card', 'Visa Metal Card Visualizer', 'Freeze Card Switch', 'Transactions Stream', 'Recharts Cashflow Chart'],
    colorTheme: 'Dark Obsidian & Neon Gold/Cyan',
    previewLayout: 'mobile'
  },
  {
    id: 'ai-codebase-refactoring-agent',
    title: 'AI Codebase Refactoring & Tech Debt Reduction Agent',
    description: 'An AI engineering agent scanning legacy codebases, detecting anti-patterns, converting JavaScript to TypeScript, and executing automated refactorings.',
    fullPrompt: `Build an AI Codebase Refactoring & Tech Debt Reduction Agent using React, Tailwind CSS, Lucide icons, and Framer Motion.

UI Sections:
1. Repository Health Header:
   - Repository ("enterprise-mono-repo"), Tech Debt Score (C- Grade / 42 Hours estimated debt), JS -> TS Conversion Progress Bar (64% Migrated), and "Run Refactor Batch" button.
2. Refactoring Opportunities Grid:
   - Anti-Pattern 1: Unhandled Promise Rejections (14 occurrences).
   - Anti-Pattern 2: Missing TypeScript Types (\`any\` usage in 48 files).
   - Anti-Pattern 3: Deprecated React Class Components -> Functional Hooks conversion.
3. Interactive Side-by-Side Code Refactor View:
   - Left: Legacy CJS / \`any\` JS code.
   - Right: Modern ESM / Strict TypeScript + Zod validation refactored code.
   - "Apply Refactor & Create PR" CTA.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Refactor AI',
      handle: '@refactor_ai',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 510,
    copies: 2040,
    isFeatured: false,
    createdAt: '2025-11-15',
    componentsIncluded: ['Tech Debt Health Header', 'Anti-Pattern Cards Grid', 'Side-by-side Refactor View', 'Create PR Modal'],
    colorTheme: 'VS Code Slate Dark & Cyan/Green Diff',
    previewLayout: 'saas'
  },
  {
    id: 'luxury-real-estate-property-listing',
    title: 'Luxury Real Estate Architectural Estate & Penthouse Showcase',
    description: 'A high-end real estate portal for browsing multi-million dollar architectural estates with 3D virtual tours, floorplans, and private viewing booking.',
    fullPrompt: `Create a Luxury Real Estate Architectural Estate & Penthouse Showcase using React, Tailwind CSS, Framer Motion, and Lucide icons.

Aesthetic Concept:
- Editorial Luxury Real Estate: Warm taupe canvas (#f8f6f0), charcoal typography (#1f2421), gold accent badges (#d4af37), and full-bleed architectural photography.

Features:
1. Navigation Bar: Brand logo ("LUXE ESTATES // BEVERLY HILLS"), links (Properties, Private Collection, Virtual Tours, Press, Contact).
2. Featured Trophy Property Hero:
   - High-res photo of ultra-modern glass villa overlooking ocean.
   - Property Name: "The Bel Air Sky Villa", Price ($28,500,000), Key Specs (6 Beds | 8 Baths | 12,000 sq ft | Infinity Pool).
   - Dual CTAs: "Schedule Private Tour" and "View 3D Virtual Walkthrough".
3. Filterable Property Gallery Grid:
   - Property cards, location badges, square footage, price, and instant inquiry button.
4. Private Tour Booking Modal with agent concierge contact form.`,
    category: 'E-commerce',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Luxe Real Estate',
      handle: '@luxe_estates',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 1080,
    isFeatured: false,
    createdAt: '2025-11-12',
    componentsIncluded: ['Trophy Property Hero', 'Key Spec Badges', 'Filterable Property Gallery', 'Private Tour Booking Modal'],
    colorTheme: 'Taupe Cream & Luxury Gold',
    previewLayout: 'ecommerce'
  },
  {
    id: 'ai-podcast-transcript-search-saas',
    title: 'AI Podcast Search, Transcription & Quotable Clip Creator',
    description: 'An AI application for transcribing audio podcasts, searching exact spoken timestamps, generating quote social graphics, and summary show notes.',
    fullPrompt: `Build an AI Podcast Search, Transcription & Quotable Clip Creator using React, Tailwind CSS, Lucide icons, and Framer Motion.

SaaS Features:
1. Header Bar: Podcast Show ("The Lex Fridman Podcast"), Episode ("#412 - Sam Altman"), Search Spoken Keywords Bar ("⌘K Search transcript..."), and "+ Upload Episode Audio" button.
2. Search Results Spoken Timestamp List:
   - Search query matches highlighted in timestamped dialogue lines (e.g. \`[01:14:22]\` - "...AGI architecture scaling laws...").
   - Click timestamp to jump audio playback instantly to exact second.
3. Interactive Quotable Social Graphic Generator Modal:
   - Highlight any sentence in transcript -> "Generate Social Quote Card".
   - Theme options: Dark Mode, Pastel Gradient, Minimalist Monochrome.
   - Export PNG / Video snippet with animated captions.
4. Auto-Generated Show Notes & Key Bullet Points Panel.`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Podcast AI',
      handle: '@podcast_ai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 420,
    copies: 1560,
    isFeatured: false,
    createdAt: '2025-11-08',
    componentsIncluded: ['Transcript Search Bar', 'Clickable Timestamp Audio Stream', 'Social Quote Card Generator Modal', 'Show Notes Panel'],
    colorTheme: 'Slate Navy & Violet Purple',
    previewLayout: 'saas'
  },
  {
    id: 'bento-grid-open-source-community',
    title: 'Open Source Framework & GitHub Stars Bento Grid Showcase',
    description: 'An open-source library product showcase bento grid highlighting 50k+ GitHub stars, zero dependencies, TypeScript types, and global CDN speed.',
    fullPrompt: `Design an Open Source Framework & GitHub Stars Bento Grid Showcase using React, Tailwind CSS, Lucide icons, and Framer Motion.

Bento Grid Layout:
1. Box 1 (2x2 Large):
   - "50,000+ GitHub Stars & 2M Monthly NPM Downloads": Interactive growth counter chart with live star ticker animation and top contributor avatars.
2. Box 2 (1x2 Vertical):
   - "Zero External Dependencies": Lightweight bundle size gauge (<2.4KB minified + gzipped).
3. Box 3 (2x1 Horizontal):
   - "100% Strict TypeScript": First-class autocomplete IntelliSense demo block.
4. Box 4 (1x1 Square):
   - "Edge Runtime Ready": Deploys instantly to Cloudflare Workers, Vercel, and AWS Lambda.
5. Box 5 (1x1 Square):
   - "Active Discord Community": 12,000+ developers online.

Style:
- GitHub Dark Mode theme (#0d1117), amber gold star accents (#f59e0b), and clean typography.`,
    category: 'Bento Grid',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'OSS Craft',
      handle: '@oss_craft',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 480,
    copies: 1780,
    isFeatured: false,
    createdAt: '2025-11-05',
    componentsIncluded: ['GitHub Stars Ticker Box', 'Bundle Size Gauge', 'TypeScript IntelliSense Box', 'Bento Cards'],
    colorTheme: 'GitHub Dark Slate & Gold Star Yellow',
    previewLayout: 'bento'
  },
  {
    id: 'ai-video-subtitle-caption-editor',
    title: 'AI Video Captioning & Viral TikTok/Reels Subtitle Generator',
    description: 'An AI video editor for generating auto-synced word-by-word animated captions, highlight emojis, subtitle color themes, and export.',
    fullPrompt: `Create an AI Video Captioning & Viral TikTok/Reels Subtitle Generator using React, Tailwind CSS, Lucide icons, and Framer Motion.

Studio Layout:
1. Header Bar: Video File ("Short_Form_Reel_v1.mp4"), Aspect Ratio Selector (9:16 Vertical, 16:9 Landscape, 1:1 Square), Subtitle Preset Theme (Alex Hormozi Yellow 🟡, Cyber Neon ⚡, Clean Minimal 🤍), and "Export HD Video" button.
2. Center Vertical Video Preview Canvas:
   - 9:16 mobile video container preview with active animated word-by-word subtitle highlight overlay (words pop up in sync with speech audio).
3. Bottom Subtitle Timestamp & Karaoke Word Editor:
   - Editable transcript text boxes with timing sliders, emoji auto-insertion toggles, and text color picker.
4. Export Options Modal (1080p, 4K, Burn-in Subtitles, SRT Export).`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Caption AI',
      handle: '@caption_ai',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 540,
    copies: 2190,
    isFeatured: false,
    createdAt: '2025-11-02',
    componentsIncluded: ['Vertical Video Canvas', 'Animated Subtitle Overlay', 'Karaoke Word Editor', 'Emoji Auto-Inserter', 'Export HD Video Modal'],
    colorTheme: 'Dark Slate & Hormozi Yellow',
    previewLayout: 'saas'
  },
  {
    id: 'fintech-corporate-card-expense-hub',
    title: 'Corporate Smart Card & Employee Expense Approval Portal',
    description: 'An enterprise expense management platform for issuing physical/virtual corporate credit cards, setting spending limits, and automated receipt matching.',
    fullPrompt: `Build a Corporate Smart Card & Employee Expense Approval Portal using React, Tailwind CSS, Recharts, and Lucide icons.

Portal Modules:
1. Header Bar: Department Filter ("All Departments / Engineering & Marketing"), Total Monthly Company Spend ($242,500 / $300,000 budget), and "+ Issue Virtual Card" button.
2. Employee Corporate Cards Grid:
   - Cardholder Name & Avatar, Virtual/Physical badge, Monthly Limit progress bar ($4,500 / $5,000 limit), Card Status (Active 🟢 / Frozen ❄️), and 1-click "Change Limit" button.
3. Pending Expense Approval Receipts Queue Table:
   - Employee, Merchant, Amount, Category (Travel, Software, Client Dinner), Attached Receipt Thumbnail, AI Receipt Match Score (100% Auto-Matched), and "Approve / Reject" action buttons.
4. Recharts Company Spending by Department Pie Chart.`,
    category: 'FinTech',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'CorpPay Tech',
      handle: '@corppay_tech',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 360,
    copies: 1340,
    isFeatured: false,
    createdAt: '2025-10-28',
    componentsIncluded: ['Company Spend Header', 'Employee Cards Grid', 'Pending Receipts Approval Queue', 'Recharts Department Spend Chart'],
    colorTheme: 'Slate Navy & Emerald Green',
    previewLayout: 'analytics'
  },
  {
    id: 'ai-agronomy-vertical-farm-dashboard',
    title: 'AI Agronomy & Indoor Vertical Farm Automated Control Center',
    description: 'An automated IoT agronomy portal tracking hydroponic nutrient pH levels, LED spectrum lighting, crop harvest dates, and temperature.',
    fullPrompt: `Design an AI Agronomy & Indoor Vertical Farm Automated Control Center using React, Tailwind CSS, Recharts, and Lucide icons.

Control Center Modules:
1. Top Farm Overview KPIs:
   - Active Crop Yield Forecast (1,240 kg Organic Microgreens).
   - Hydroponic Water pH (6.2 pH - Optimal Range).
   - LED Lighting Spectrum (92% Efficiency - Full Spectrum Growth).
   - Projected Harvest Date ("🔥 4 Days Until Harvest - Rack B3").
2. Vertical Farm Rack Matrix Map:
   - Rack Status Cards (Rack A1 to Rack D6): Crop Type (Butterhead Lettuce, Basil, Microgreens), Growth Stage percentage bar (84%), and nutrient level gauge.
3. Recharts Hydroponic Temperature & EC Conductivity Graph.
4. Automated Nutrient Dosing Control Drawer.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Agri Tech',
      handle: '@agri_tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 1020,
    isFeatured: false,
    createdAt: '2025-10-25',
    componentsIncluded: ['Farm KPI Cards', 'Rack Matrix Map', 'Hydroponic Recharts Graph', 'Nutrient Dosing Drawer'],
    colorTheme: 'Dark Slate & Eco Emerald Green',
    previewLayout: 'analytics'
  },
  {
    id: 'developer-web3-dao-governance-portal',
    title: 'Web3 DAO Governance, Proposal Voting & Treasury Portal',
    description: 'A Web3 governance platform for voting on protocol proposals, viewing DAO treasury balances, and tracking delegate voting power.',
    fullPrompt: `Create a Web3 DAO Governance, Proposal Voting & Treasury Portal using React, Tailwind CSS, Recharts, and Lucide icons.

Portal Sections:
1. DAO Header Bar:
   - DAO Name ("AETHEL PROTOCOL DAO"), Treasury Balance ($42.8M in DAO Vault), Active Proposals Count (3 Open Proposals), Connected Wallet (\`0x89A...22f\` - 14,200 Governance Votes), and "Create Proposal" CTA.
2. Active Governance Proposals List:
   - Proposal Card 1: "AIP-42: Deploy Liquidity Pool on Base Network".
     - Status: Active Voting (Ends in 2 Days).
     - Voting Progress Bar: FOR 88% (4.2M Votes) vs AGAINST 12% (580k Votes).
     - Action Buttons: "Vote For", "Vote Against", "Abstain".
3. Treasury Allocation Recharts Donut Chart (ETH, USDC, Protocol Native Tokens).
4. Delegate Voting Power Leaderboard Table.`,
    category: 'FinTech',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'DAO Craft',
      handle: '@dao_craft',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 390,
    copies: 1450,
    isFeatured: false,
    createdAt: '2025-10-22',
    componentsIncluded: ['DAO Treasury Header', 'Proposal Voting Cards', 'Voting Progress Bars', 'Treasury Donut Chart', 'Delegate Leaderboard Table'],
    colorTheme: 'Dark Obsidian & Neon Cyan',
    previewLayout: 'analytics'
  },
  {
    id: 'ai-fashion-virtual-tryon-app',
    title: 'AI Fashion Virtual Try-On & Personal Stylist Assistant',
    description: 'A fashion app allowing users to virtually try on clothing with AI avatar rendering, mix and match outfit combinations, and instant checkout.',
    fullPrompt: `Build an AI Fashion Virtual Try-On & Personal Stylist Assistant using React, Tailwind CSS, Lucide icons, and Framer Motion.

App Layout & Features:
1. Top Avatar & Stylist Bar:
   - User Personal AI Avatar preview ("3D Body Model - Size S"), Daily Outfit Vibe Selector (Streetwear, Minimalist Chic, Professional, Evening Gala), and "Ask AI Stylist" chat trigger.
2. Virtual Try-On Fitting Room Canvas:
   - Interactive avatar preview showing selected clothing item fitted in real-time.
   - Outfit Layers Toggle: Tops 🧥, Bottoms 👖, Shoes 👟, Accessories 🕶.
3. Recommended Outfit Collections Carousel:
   - Curated clothing items with price, fit score badge ("🎯 98% Size Match for your body shape"), and 1-tap "Add Full Outfit to Cart" button.
4. AI Personal Stylist Chat Drawer.`,
    category: 'Mobile App',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Stylist AI',
      handle: '@stylist_ai',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    likes: 410,
    copies: 1520,
    isFeatured: false,
    createdAt: '2025-10-18',
    componentsIncluded: ['AI Avatar Try-on Canvas', 'Outfit Layer Toggles', 'Fit Score Badges', 'AI Stylist Chat Drawer'],
    colorTheme: 'Soft Cream & Coral Pink',
    previewLayout: 'mobile'
  },
  {
    id: 'ai-customer-support-co-pilot-agent',
    title: 'AI Customer Support Co-Pilot & Real-Time Ticket Resolver',
    description: 'A support agent workspace providing AI suggested ticket replies, instant knowledge base lookup, customer sentiment rating, and auto-escalation.',
    fullPrompt: `Design an AI Customer Support Co-Pilot & Real-Time Ticket Resolver using React, Tailwind CSS, Lucide icons, and Framer Motion.

Agent Workspace:
1. Left Ticket Queue Inbox:
   - Ticket List item cards sorted by SLA urgency (e.g. "Order #8420 Delayed - SLA 12 mins remaining 🔴").
   - Customer name, tier badge (VIP Enterprise Customer), and AI sentiment tag (Frustrated 🔴).
2. Center Active Ticket Chat & AI Co-Pilot:
   - Customer message dialogue box.
   - AI Suggested Response Box: Auto-generated polite resolution with tracking link and discount code pre-inserted.
   - Action Buttons: "Send AI Response (⌘Enter)", "Edit Response", "Regenerate".
3. Right Customer Context & Order Details Panel:
   - Purchase history, total lifetime value ($4,250), recent shipping carrier status, and 1-click refund button.`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Support AI',
      handle: '@support_ai',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 480,
    copies: 1810,
    isFeatured: false,
    createdAt: '2025-10-15',
    componentsIncluded: ['SLA Urgency Ticket Queue', 'AI Suggested Response Box', 'Customer Context Panel', 'Refund Action Button'],
    colorTheme: 'Slate Grey & Electric Indigo',
    previewLayout: 'saas'
  }
];
