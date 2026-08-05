import { UIPrompt } from '../types';

export const PROMPTS_BATCH_1: UIPrompt[] = [
  {
    id: 'glassmorphism-crypto-analytics',
    title: 'Glassmorphism Crypto & Portfolio Analytics Dashboard',
    description: 'A sleek, frosted-glass dashboard for crypto metrics, asset allocation pie charts, live market tickers, and transaction history.',
    fullPrompt: `Build a modern, dark-themed Glassmorphism Crypto & Portfolio Analytics Dashboard using React, Tailwind CSS, Shadcn UI components, Recharts, and Lucide icons.

Key Visual Features:
1. Palette: Deep obsidian slate (#090d16) background with frosted glass backdrop-blur-md cards (bg-slate-900/40 border border-slate-800/80). Neon cyan (#06b6d4) and purple (#8b5cf6) gradient accents.
2. Header Navigation: Sticky frosted glass top bar with search trigger (⌘K), live gas price pill, wallet connection status indicator, notification bell with badge, and user avatar dropdown.
3. Left Collapsible Sidebar: Clean icon navigation with active glow bar (Dashboard, Portfolio, Markets, Trading Swap, Analytics, Yield Vaults, Settings).
4. Main Overview Metrics Grid:
   - Total Net Worth counter with 24h percentage change tag (+14.2% in green pill) and micro line sparkline chart.
   - 24h Realized PnL card with breakdown tooltip.
   - Gas Tracker pill & Market Volatility index widget.
5. Interactive Charts Section:
   - Recharts AreaChart showing Portfolio Value Performance over time (1D, 1W, 1M, 1Y, ALL toggle buttons).
   - Asset Allocation Donut Chart showing percentage breakdown (BTC 45%, ETH 30%, SOL 15%, Stablecoins 10%) with interactive legends.
6. Real-Time Token Watchlist & Recent Transactions Table:
   - Table with token icon, symbol, live price, 24h trend badge, holding amount, total value, and instant quick-swap button.
   - Search bar filter & tab filter (All, DeFi, Layer 1, NFTs).
7. Interactive Dialogs & Modals:
   - Quick Buy/Swap modal with token selector and slippage settings.

Ensure fluid framer-motion page transitions, responsive mobile drawer, accessible tooltips, and crisp typography with monospace formatting for crypto values.`,
    category: 'Dashboard',
    style: 'Glassmorphism',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Vibe Architect',
      handle: '@vibe_architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 342,
    copies: 1280,
    isFeatured: true,
    createdAt: '2026-08-01',
    componentsIncluded: ['Header', 'Sidebar', 'Recharts Area Chart', 'Donut Chart', 'Token Table', 'Quick Swap Modal', 'Stat Cards'],
    colorTheme: 'Obsidian Slate & Neon Cyan',
    previewLayout: 'analytics'
  },
  {
    id: 'saas-bento-grid-landing',
    title: 'SaaS B2B Dark Minimal Landing Page with Animated Bento Grid',
    description: 'A high-converting B2B SaaS landing page featuring a sticky navigation bar, headline with glowing gradient badge, interactive feature bento grid, and pricing table.',
    fullPrompt: `Create a high-converting B2B SaaS Landing Page with an animated Bento Grid section using React, Tailwind CSS, Lucide icons, and Framer Motion.

Design Architecture:
- Theme: Ultra-clean Dark Theme with pitch black background (#030712), subtle zinc-900 border grid lines, indigo-500 radial lighting glow behind hero text, and crisp white typography.

Key Page Sections:
1. Navigation Bar:
   - Glassmorphic top bar with logo, nav links (Product, Bento Features, Integrations, Pricing, FAQ), theme status, and primary "Start Free Trial" CTA button with gradient border effect.
2. Hero Section:
   - Pill badge: "✨ Introducing Vibe Engine v2.0 ->" with subtle pulse animation.
   - Main Heading: "Automate Your Developer Workflow at the Speed of Light" with gradient text clip (Indigo to Cyan).
   - Subtitle: Clear value proposition text.
   - Dual CTAs: "Get Started Free" button and "Book 1-on-1 Demo" outline button with video modal trigger.
   - Social Proof Strip: Logos of top tech companies using the platform.
3. Interactive Bento Grid Feature Showcase:
   - Box 1 (Large 2x2): Live Interactive Code Terminal showcasing instant API response speeds.
   - Box 2 (1x2 Vertical): Real-time collaboration cursor animations showing team members working simultaneously.
   - Box 3 (2x1 Horizontal): Automated CI/CD pipeline visual graph with animated status dots.
   - Box 4 (1x1 Square): Security Compliance Badge with animated checkmarks (SOC2, ISO27001, HIPAA).
4. Interactive Pricing Cards (Monthly / Annual Toggle with 20% discount badge):
   - Starter, Pro (Popular ribbon), Enterprise plans with feature checklist and CTA buttons.
5. Customer Testimonials Carousel & FAQ Accordion:
   - Clean expandable accordion items with smooth height animation.
6. Footer: Multi-column links, newsletter subscription input, copyright & social links.`,
    category: 'Landing Page',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'TypeScript'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Elena Rostova',
      handle: '@elena_ui',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 512,
    copies: 2150,
    isFeatured: true,
    createdAt: '2026-07-28',
    componentsIncluded: ['Sticky Navbar', 'Hero with Light Radial', 'Animated Bento Grid', 'Pricing Toggle', 'Accordion FAQ', 'Newsletter Footer'],
    colorTheme: 'Pitch Black & Electric Indigo',
    previewLayout: 'bento'
  },
  {
    id: 'ai-copilot-workbench-ide',
    title: 'AI Copilot & Autonomous Coding Workbench IDE',
    description: 'An AI-powered web IDE layout featuring multi-pane code editor, live terminal logs, prompt chat sidebar, and visual artifact preview frame.',
    fullPrompt: `Design an advanced AI Copilot & Autonomous Coding Workbench IDE layout using React, Tailwind CSS, Monaco Editor / Code Syntax blocks, and Lucide icons.

Layout Structure (3-Column Desktop Layout):
1. Left Sidebar (Collapsible File Explorer & Agent Tools):
   - File tree with folder icons, file creation buttons, Git status indicators (modified/added).
   - Agent Skills list (Web Search, Refactor, Test Runner, DB Migration).
2. Center Pane (Code Editor & Tabs):
   - Multi-tab file manager (e.g. \`App.tsx\`, \`server.ts\`, \`schema.sql\`).
   - Line-numbered code viewport with active line highlight and syntax highlighting badges.
   - Floating AI inline assistant popup trigger (⌘I) offering "Explain Code", "Fix Bug", "Add Unit Tests".
   - Bottom Dock: Collapsible Terminal with live output logs, execution status badge, and command input prompt.
3. Right Pane (AI Copilot Chat & Agent Stream):
   - Header with active model switcher dropdown (Gemini 1.5 Pro, Claude 3.5 Sonnet, GPT-4o).
   - Message Stream showing user prompts, agent reasoning step accordion ("Searching file tree...", "Diffing changes..."), code diff previews with green/red additions, and "Apply Changes" button.
   - Input Box: Rich textarea with file attachment, voice mode toggle, and send button.

Design Aesthetic:
- High-contrast dark developer theme (#0d1117), vibrant cyan/emerald status highlights, crisp monospace code fonts, and subtle glass borders.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'DevX Studio',
      handle: '@devx_studio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 689,
    copies: 3100,
    isFeatured: true,
    createdAt: '2026-07-25',
    componentsIncluded: ['File Explorer', 'Code Editor Viewport', 'Inline AI Prompt Bar', 'Terminal Console', 'Agent Chat Panel', 'Model Switcher'],
    colorTheme: 'GitHub Obsidian & Mint Emerald',
    previewLayout: 'saas'
  },
  {
    id: 'cyberpunk-e-commerce-tech',
    title: 'Cyberpunk Futuristic Tech Gear E-Commerce Storefront',
    description: 'A futuristic tech storefront featuring glowing neon neon borders, 3D product view cards, filter drawer, matrix background, and floating cart drawer.',
    fullPrompt: `Build a Cyberpunk Futuristic Tech Gear E-Commerce Storefront using React, Tailwind CSS, Framer Motion, and Lucide icons.

Visual Direction:
- Cyberpunk Aesthetic: Dark obsidian canvas (#0a0a10) with neon cyan (#00f0ff) and magenta (#ff0055) accents, scanline overlays, neon border glows, and angular cut-corner cards.

Key UI Features:
1. Header Bar:
   - Glitch effect logo text ("CYBER_GEAR // v3"), search bar with auto-suggestions, category links (Neural Wear, Cybernetics, Optics, Audio, Tactical), currency switcher, and glowing cart button with item counter.
2. Hero Banner:
   - High-impact promo card: "NEXT-GEN NEURAL HEADSETS // 20% OFF TODAY" with countdown timer, ambient neon glow, and "SHOP NOW" button.
3. Product Filter & Catalog Grid:
   - Sidebar filters: Price slider, Tech Grade rating, Brand, In-Stock toggle.
   - Product Cards:
     - High-res product image with hover tilt effect.
     - Tech Specs tags (e.g., "100ms Latency", "OLED Display", "Titanium Frame").
     - Price badge in cyan text, star rating, quick wishlist heart button, and "ADD TO CART" button with neon press state.
4. Product Quick Detail Modal:
   - Multi-angle image selector, spec matrix table, inventory status pill, and quantity selector.
5. Slide-Over Cart Drawer:
   - Item list with quantity adjustments, promo code input field, subtotal breakdown, and checkout button.`,
    category: 'E-commerce',
    style: 'Cyberpunk',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Kai Takahashi',
      handle: '@kai_cyber',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 410,
    copies: 1450,
    isFeatured: false,
    createdAt: '2026-07-20',
    componentsIncluded: ['Glitch Header', 'Hero Banner', 'Product Grid Cards', 'Filter Sidebar', 'Slide-over Cart Drawer'],
    colorTheme: 'Neon Cyan & Magenta Dark',
    previewLayout: 'ecommerce'
  },
  {
    id: 'neubrutalism-fintech-mobile',
    title: 'Neubrutalism High-Contrast Mobile Web Banking Dashboard',
    description: 'A bold neubrutalist mobile banking dashboard with thick black borders, vivid pastel color blocks, card swipe gesture UI, and budget tracking widgets.',
    fullPrompt: `Create a Neubrutalism Mobile Web Banking & Expense Dashboard using React, Tailwind CSS, Recharts, Lucide icons, and Framer Motion.

Design Aesthetic:
- Neubrutalism: Bold 3px black borders (\`border-3 border-black\`), hard black drop shadows (\`shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]\`), bright pastel color fills (yellow #fef08a, mint #a7f3d0, lavender #c084fc, coral #f87171), and stark black typography.

Features & Screen Layout:
1. Header Bar:
   - User avatar in yellow square with thick border, greeting ("Hey Sarah! 💸"), notification badge, and scan QR code button.
2. Main Credit Card Carousel:
   - Interactive card widget with card balance, masked card number, expiration date, and copy card number button. Colored in bright lime green with hard shadow.
3. Quick Action Buttons Grid (4 Columns):
   - Send Money 📤, Request 📥, Pay Bills 📄, Top Up ⚡ with pastel background tiles.
4. Budget Goals & Monthly Spending Chart:
   - Recharts Bar Chart showcasing weekly spend across categories (Food, Shopping, Bills, Transport).
5. Recent Activity Feed:
   - List items with merchant icon, category badge, date, amount (-$42.50 in bold), and receipt download icon.
6. Bottom Fixed Navigation Bar:
   - High-contrast bottom tab bar (Home, Analytics, Cards, Profile).`,
    category: 'FinTech',
    style: 'Neubrutalism',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Sora Kim',
      handle: '@sora_design',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    },
    likes: 388,
    copies: 1520,
    isFeatured: false,
    createdAt: '2026-07-18',
    componentsIncluded: ['Neubrutalist Header', 'Card Carousel', 'Quick Action Buttons', 'Spending Bar Chart', 'Activity List', 'Bottom Tabs'],
    colorTheme: 'Bright Pastels & Hard Black Borders',
    previewLayout: 'mobile'
  },
  {
    id: 'health-vitals-mobile-tracker',
    title: 'Minimalist iOS Fitness & Health Metrics Mobile Tracker',
    description: 'An elegant health dashboard featuring activity ring indicators, daily calorie breakdown, water intake logger, and sleep quality charts.',
    fullPrompt: `Design a Minimalist iOS Fitness & Health Metrics Mobile Tracker App layout using React, Tailwind CSS, Recharts, and Lucide icons.

Layout & Component Architecture:
- Aesthetic: Soft dark zinc canvas (#09090b), rounded-3xl container cards, vibrant health accents (neon pink #ec4899 for move, lime green #84cc16 for workout, electric cyan #06b6d4 for stand).

Components:
1. Top Header Profile Bar:
   - User greeting ("Good morning, Alex 👋"), streak counter badge ("🔥 14 Day Streak"), and avatar button.
2. Apple-Style Activity Rings / Progress Cards:
   - Move (650 / 800 kcal) with circular progress indicator.
   - Exercise (42 / 30 mins) with target met indicator.
   - Stand (10 / 12 hrs).
3. Metric Mini Grid:
   - Heart Rate Widget with live bpm sparkline and status pill ("72 BPM - Resting").
   - Water Intake Log widget with quick "+250ml" tap button.
   - Sleep Quality Card (7h 45m with Deep/REM sleep bar chart).
4. Weekly Activity Bar Chart (Recharts BarChart):
   - Bar chart showing calorie burn for Mon - Sun with active day highlighted.
5. Bottom Mobile Dock Navigation:
   - Fixed bottom bar with icons: Home, Workouts, Analytics, Profile, and central floating "+" log workout action button.`,
    category: 'Mobile App',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Maya Lin',
      handle: '@maya_fitui',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    likes: 290,
    copies: 1120,
    isFeatured: false,
    createdAt: '2026-07-15',
    componentsIncluded: ['Activity Rings', 'Metric Cards', 'Water Tracker Button', 'Weekly Bar Chart', 'Fixed Bottom Dock'],
    colorTheme: 'Neon Lime & Hot Pink',
    previewLayout: 'mobile'
  },
  {
    id: 'clean-developer-portfolio-terminal',
    title: 'Clean Minimalist Personal Portfolio & Interactive Terminal',
    description: 'A developer portfolio featuring a bio hero, project showcase bento grid, interactive CLI terminal emulator, and contact form modal.',
    fullPrompt: `Build a Clean Minimalist Developer Portfolio with an Interactive CLI Terminal Emulator using React, Tailwind CSS, Lucide icons, and Framer Motion.

Theme & Aesthetics:
- Monochromatic dark slate palette (#090d16), emerald green (#10b981) CLI cursor accent, clean sans typography paired with Fira Code monospace font.

Sections:
1. Navigation Bar:
   - Monogram logo ("<Dev.Code />"), navigation items (About, Projects, Terminal CLI, Experience, Contact), and availability status pill ("🟢 Open for Work").
2. Hero Introduction:
   - Big bold typography: "Crafting High-Performance Web Apps & AI Systems".
   - Sub-headline, location tag, social links (GitHub, X/Twitter, LinkedIn, Discord).
   - "Explore Projects" & "Download Resume" buttons.
3. Interactive Terminal Component:
   - Executable pseudo-CLI with commands like help, skills, projects, contact, clear, theme.
   - Autocomplete & command history memory (up/down arrow navigation).
4. Selected Projects Grid:
   - Project Cards with tech stack tags, star counts, live demo link, github code link, and screenshot preview.
5. Experience Timeline:
   - Vertical timeline showcasing roles, company names, key achievements bullet points, and dates.
6. Contact Modal & Footer:
   - Quick message form with input fields and send confirmation toast.`,
    category: 'Portfolio',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons', 'TypeScript'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Jordan Smith',
      handle: '@jordan_dev',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
    },
    likes: 450,
    copies: 1670,
    isFeatured: false,
    createdAt: '2026-07-12',
    componentsIncluded: ['Nav Header', 'Hero Intro', 'CLI Terminal Component', 'Project Cards Grid', 'Experience Timeline', 'Contact Form'],
    colorTheme: 'Emerald Terminal & Dark Slate',
    previewLayout: 'portfolio'
  },
  {
    id: 'healthcare-telemedicine-dashboard',
    title: 'Healthcare Patient Portal & Telemedicine Doctor Workspace',
    description: 'A modern medical portal for managing appointments, video consultations, EHR records, vital signs, and prescription refills.',
    fullPrompt: `Build a Healthcare Patient Portal & Telemedicine Doctor Workspace using React, Tailwind CSS, Recharts, and Lucide Icons.

Key Architecture:
1. Theme: Soft clean medical light slate theme (#f8fafc) with indigo-600 primary accents, emerald-500 status pills, and accessible contrast ratios.
2. Sidebar: Navigation for Overview, Appointments, Medical History, Prescriptions, Lab Results, Messages, Billing.
3. Top Bar: Patient profile banner, next appointment countdown badge ("⏱ In 25 minutes: Dr. Aris Thorne"), and quick Emergency SOS button.
4. Main Dashboard Widgets:
   - Vital Signs Metric Grid: Heart rate (74 bpm), Blood Pressure (118/78), Blood Glucose (95 mg/dL), Oxygen Level (99%) with min/max healthy ranges.
   - Recharts Line Chart: 30-Day Blood Pressure & Heart Rate trends over time.
   - Upcoming Telemedicine Consultations Card with "Join Video Call" button.
   - Active Prescriptions Table with dosage, remaining refills counter, and 1-click "Request Refill" button.
5. Video Call Modal Simulation:
   - Doctor camera preview window, mute/video controls, live chat notes panel, and digital prescription generator drawer.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Dr. Clara Vance',
      handle: '@clara_health',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 980,
    isFeatured: false,
    createdAt: '2026-07-10',
    componentsIncluded: ['Medical Sidebar', 'Vital Signs Grid', 'Recharts Vitals Chart', 'Prescription Refill Table', 'Video Call Modal'],
    colorTheme: 'Soft Medical Slate & Indigo',
    previewLayout: 'analytics'
  },
  {
    id: 'devops-kubernetes-cluster-monitor',
    title: 'DevOps Kubernetes & Cloud Infrastructure Cluster Dashboard',
    description: 'A high-density observability dashboard for real-time pod metrics, node CPU/Memory usage, log stream, and incident alert response.',
    fullPrompt: `Design a DevOps Kubernetes & Cloud Infrastructure Cluster Dashboard using React, Tailwind CSS, Recharts, and Lucide icons.

Layout Features:
1. Palette: High-contrast dark terminal background (#090d16), electric blue (#3b82f6), emerald (#10b981), amber (#f59e0b) for warnings, and red (#ef4444) for critical pod failures.
2. Header Bar:
   - Cluster selector dropdown (Production-US-East, Staging-EU-West), active region status, global cluster health badge ("99.98% Uptime - 128 Nodes Healthy"), search bar, and cluster alert ticker.
3. Metric Top Cards:
   - Total CPU Core Utilization (42 / 64 Cores - 65%) with live gauge sparkline.
   - Memory Consumption (128GB / 256GB - 50%).
   - Active Pods Count (1,240 Running, 3 Pending, 1 CrashLoopBackOff).
   - Network Throughput (1.2 GB/s In / 850 MB/s Out).
4. Interactive Node Grid & Cluster Map:
   - Visual grid of Kubernetes nodes with color-coded status blocks (Green: Healthy, Yellow: High Memory, Red: Crashed). Clicking a node opens pod details drawer.
5. Real-Time Log Console Stream:
   - Monospace terminal window with log severity filters (DEBUG, INFO, WARN, ERROR), pause auto-scroll toggle, search filter, and export logs button.
6. Recharts Pod Latency & Request Throughput Line Charts.`,
    category: 'Dashboard',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Recharts', 'Lucide Icons', 'TypeScript'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Alex Rivera',
      handle: '@alex_devops',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 540,
    copies: 1890,
    isFeatured: true,
    createdAt: '2026-07-08',
    componentsIncluded: ['Cluster Top Bar', 'System Metric Cards', 'Kubernetes Node Map', 'Real-time Log Stream Console', 'Latency Recharts'],
    colorTheme: 'Terminal Dark & Electric Blue',
    previewLayout: 'analytics'
  },
  {
    id: 'smart-home-iot-automation-ui',
    title: 'Smart Home Automation & IoT Device Command Center',
    description: 'An intuitive smart home control panel for room temperatures, light dimming sliders, security camera feeds, and automation triggers.',
    fullPrompt: `Create a Smart Home Automation & IoT Device Command Center using React, Tailwind CSS, Framer Motion, and Lucide icons.

Design Theme:
- Warm luxury dark theme with deep charcoal background (#121218), soft amber glowing accents (#f59e0b), and smooth touch-friendly controls.

Key UI Elements:
1. Header Bar:
   - Home name selector ("Villa Sunset Palms"), weather widget ("72°F Sunny in San Francisco"), security mode toggle (Disarmed, Armed Away, Armed Night), and user profile.
2. Room Filter Tabs:
   - Horizontal tab bar (All Rooms, Living Room, Master Bedroom, Kitchen, Outdoor Patio, Garage).
3. Quick Stats Ribbon:
   - Overall Power Consumption (2.4 kW - 12% lower than yesterday), Indoor Temperature average (71°F), Security Status ("All Doors Locked").
4. Interactive Smart Devices Grid:
   - Smart Lighting Card: Color picker palette, brightness percentage slider, on/off toggle switch.
   - Climate Thermostat Dial: Interactive temperature adjust buttons (+/-), mode selector (Cool, Heat, Eco, Auto), humidity gauge.
   - Security Camera Live Card: Video stream container with live snapshot overlay, motion detection alert indicator, and full-screen view button.
   - Smart Lock Card: Tap to lock/unlock door with animated deadbolt state.
5. Scene Automation Routines Section:
   - One-tap scene buttons: "Good Morning 🌅", "Movie Night 🎬", "Leave Home 🚗", "Sleep Mode 🌙" with custom color themes.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Marcus Vance',
      handle: '@marcus_iot',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 325,
    copies: 1190,
    isFeatured: false,
    createdAt: '2026-07-05',
    componentsIncluded: ['Room Tabs', 'Interactive Thermostat', 'Lighting Dimmer Slider', 'Security Camera Card', 'Scene Automation Quick Buttons'],
    colorTheme: 'Warm Charcoal & Amber Glow',
    previewLayout: 'generic'
  },
  {
    id: 'ai-voice-generator-studio',
    title: 'AI Voice Generator & Audio Synthesis Workbench',
    description: 'A professional web app for text-to-speech voice generation, voice cloning, pitch/speed adjustment waveform editor, and audio export.',
    fullPrompt: `Build an AI Voice Generator & Audio Synthesis Studio Workbench using React, Tailwind CSS, Lucide icons, and Wavesurfer waveform UI elements.

Interface Overview:
1. Left Voice Selector Sidebar:
   - Searchable voice library with audio preview play buttons, language filters (English, Spanish, Japanese, German), gender filters, and voice style badges (Narrative, Conversational, Dynamic, Deep).
   - "Clone New Voice" upload button.
2. Main Studio Canvas:
   - Rich Text Area with multi-speaker dialogue tags (e.g. \`[Speaker 1 - Professional]\`, \`[Speaker 2 - Friendly]\`).
   - Phoneme & Emphasis formatting toolbar (Pause, Pitch, Speed, Emotion adjustments).
   - Character count indicator & API credit balance widget.
   - Primary "Generate Audio Synthesis" button with glowing pulse effect.
3. Bottom Waveform & Track Timeline Editor:
   - Interactive audio waveform viewer with play/pause button, time scrubber, zoom controls, volume slider, and track speed modifier (0.5x - 2.0x).
   - Export options modal (MP3, WAV, FLAC, Stem separation, SRT closed captions download).`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Audio AI Labs',
      handle: '@audio_ai',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 480,
    copies: 1720,
    isFeatured: true,
    createdAt: '2026-07-02',
    componentsIncluded: ['Voice Library Sidebar', 'Script Editor Area', 'Voice Parameter Controls', 'Audio Waveform Timeline', 'Export Options Modal'],
    colorTheme: 'Deep Violet & Neon Pink',
    previewLayout: 'saas'
  },
  {
    id: 'fintech-expense-card-manager',
    title: 'Corporate Expense & Virtual Card Management Platform',
    description: 'A SaaS platform for issuing virtual corporate cards, tracking team budgets, approving expense claims, and automated receipt matching.',
    fullPrompt: `Design a Corporate Expense & Virtual Card Management SaaS Platform using React, Tailwind CSS, Recharts, and Lucide icons.

Key Modules:
1. Sidebar Navigation: Overview, Virtual Cards, Team Expenses, Approvals, Accounting Sync, Company Settings.
2. Top Bar: Company selector ("Acme Corp Inc."), spend limit bar, active user list, and "+ Issue Virtual Card" button.
3. Overview Stat Cards:
   - Total Monthly Corporate Spend ($142,850 / $200,000 budget limit).
   - Active Virtual Cards (84 Active / 6 Paused).
   - Pending Expense Approvals (12 Requests waiting).
   - Saved Tax Deductions ($18,400).
4. Virtual Cards Gallery & Management:
   - Visual debit/credit cards with customizable spending limits, merchant lock controls, single-use burn cards, and instant freeze toggle.
5. Recharts Bar Chart: Departmental Spend comparison (Engineering, Marketing, Sales, Operations).
6. Expense Claims Audit Table:
   - Employee name, department, category, transaction date, amount, attached receipt thumbnail badge, and Approve/Reject action buttons.`,
    category: 'FinTech',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Finance Craft',
      handle: '@finance_craft',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 395,
    copies: 1380,
    isFeatured: false,
    createdAt: '2026-06-28',
    componentsIncluded: ['Corporate Cards Grid', 'Department Spend Bar Chart', 'Expense Claims Audit Table', 'Issue Card Modal', 'Freeze Card Toggle'],
    colorTheme: 'Slate Blue & Emerald Green',
    previewLayout: 'analytics'
  },
  {
    id: 'bento-grid-developer-tools',
    title: 'Modern Developer Infrastructure Feature Bento Grid',
    description: 'An interactive 6-card bento grid showcasing zero-latency edge databases, vector search, automated backups, and global CDN routing.',
    fullPrompt: `Build an Interactive 6-Card Feature Bento Grid for a Developer Infrastructure product page using React, Tailwind CSS, Lucide icons, and Framer Motion.

Bento Grid Layout Structure:
1. Box 1 (Top Left - Large 2x2):
   - "Global Edge Replication": Interactive world map with glowing ping nodes showing latency (e.g., Tokyo 8ms, London 12ms, NYC 4ms). Hovering nodes triggers live ping animation.
2. Box 2 (Top Right - 1x2):
   - "Vector Embeddings Search": Visual cluster graph displaying AI semantic search indexing with cosine similarity score badge (0.984 match).
3. Box 3 (Center - 2x1 Horizontal):
   - "Instant Schema Branching": Git-style branch graph visualization with 1-click preview database creation.
4. Box 4 (Bottom Left - 1x1):
   - "SOC2 & End-to-End Encryption": Animated lock icon with rotating security keys.
5. Box 5 (Bottom Middle - 1x1):
   - "Zero Downtime Migrations": 100% uptime badge with live request counter ticker.
6. Box 6 (Bottom Right - 2x1):
   - "1-Line SDK Integration": Interactive copyable code snippet block in TypeScript, Python, and Go.

Style & Aesthetics:
- Deep dark canvas (#030712), thin zinc-800 borders, subtle purple backdrop lighting, and smooth hover elevation cards.`,
    category: 'Bento Grid',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Bento Master',
      handle: '@bento_master',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 620,
    copies: 2400,
    isFeatured: true,
    createdAt: '2026-06-25',
    componentsIncluded: ['Interactive World Ping Map', 'Vector Cluster Diagram', 'Branch Graph Widget', 'Code Snippet Selector', 'Bento Cards'],
    colorTheme: 'Dark Obsidian & Purple Indigo Glow',
    previewLayout: 'bento'
  },
  {
    id: 'luxury-watch-storefront',
    title: 'Luxury Swiss Horology & Watchmaker E-Commerce Showcase',
    description: 'An ultra-premium e-commerce experience for high-end luxury timepieces with full-bleed hero videos, 360 viewer preview, and bespoke order booking.',
    fullPrompt: `Design a Luxury Swiss Horology & Watchmaker E-Commerce Showcase using React, Tailwind CSS, Framer Motion, and Lucide icons.

Aesthetic Guidelines:
- High Fashion & Luxury: Deep black charcoal tone (#0a0a0c) paired with champagne gold accents (#d4af37), elegant serif headings (Playfair Display / Cormorant Garamond), and spacious luxury layout spacing.

Key Sections:
1. Navigation Header:
   - Centered luxury monogram logo ("CHRONOS & CO."), subtle links (Collections, Grand Complications, Craftsmanship, Boutique Finder), currency selector, and boutique appointment CTA.
2. Full-Bleed Hero Section:
   - High-resolution watch macro photograph, headline: "The Art of Precision & Timeless Complications", and "Discover Collection" gold border button.
3. Curated Timepiece Gallery:
   - Product Cards: High-res images, reference number, movement type (Automatic Tourbillon, Power Reserve 72h), gold-accented price, and "Explore Timepiece" button.
4. Interactive 360° Specs Inspector Component:
   - Case diameter, water resistance depth, sapphire crystal glass, gold alloy composition, and watch movement skeleton view.
5. VIP Boutique Booking Modal:
   - Form to schedule private in-person viewing at flagship boutiques (Geneva, New York, Tokyo, London).`,
    category: 'E-commerce',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Horology Studio',
      handle: '@swiss_design',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 315,
    copies: 1040,
    isFeatured: false,
    createdAt: '2026-06-22',
    componentsIncluded: ['Luxury Header', 'Full-Bleed Hero', 'Timepiece Showcase Cards', 'Watch Spec Inspector', 'VIP Booking Modal'],
    colorTheme: 'Deep Charcoal & Champagne Gold',
    previewLayout: 'ecommerce'
  },
  {
    id: 'ai-research-notebook-canvas',
    title: 'AI Research Assistant & RAG Knowledge Graph Canvas',
    description: 'An interactive research workspace for querying academic papers, RAG PDF context extraction, citation graph visualizer, and note generation.',
    fullPrompt: `Create an AI Research Assistant & RAG Knowledge Graph Canvas using React, Tailwind CSS, Recharts, and Lucide icons.

UI Sections:
1. Left Document Library:
   - Upload PDF dropzone, list of ingested research papers with reading progress, tag filters (Machine Learning, Quantum, Biotech), and vector embedding status.
2. Center Main Reading & Synthesis Workspace:
   - Split view: PDF Document Viewer on left, AI Note Synthesis on right.
   - Text selection popover trigger: "Ask AI to Summarize", "Extract Equations", "Find Related Citations".
   - Rich Markdown Note Editor with automatically inserted citation reference pills (e.g. \`[Vaswani et al., 2017]\`).
3. Right AI Chat & Interactive Citation Graph:
   - Chat interface for asking questions across uploaded papers.
   - Visual graph container displaying connected papers and node topic relevance.
   - Quick export report to PDF/LaTeX button.`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Dr. Aris Thorne',
      handle: '@aris_research',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 570,
    copies: 2210,
    isFeatured: true,
    createdAt: '2026-06-20',
    componentsIncluded: ['Document Library Sidebar', 'PDF Workspace Split View', 'Markdown Editor with Citations', 'Interactive Node Graph', 'AI Research Chat'],
    colorTheme: 'Clean Slate & Cyan Accent',
    previewLayout: 'saas'
  },
  {
    id: 'cybersecurity-threat-intel-dashboard',
    title: 'Cybersecurity Threat Intelligence & SIEM Security Operations',
    description: 'A SOC security dashboard monitoring live firewall events, DDoS attack origin maps, zero-day vulnerabilities, and incident response tickets.',
    fullPrompt: `Build a Cybersecurity Threat Intelligence & SIEM Operations Dashboard using React, Tailwind CSS, Recharts, and Lucide icons.

Interface Features:
1. Palette: Dark SOC matrix theme (#050811), crimson red alert badges (#ef4444), cyan network nodes, and emerald safe indicators.
2. Top Threat Ticker Bar:
   - Live security alert feed ticker ("CRITICAL: CVE-2026-8812 SQL Injection attempt blocked from IP 185.220.101.4"), active firewall status, and Emergency Lockdown trigger button.
3. Top Metric Cards:
   - Blocked Attacks (142,890 in past 24h).
   - Mean Time to Detect (1.2 Seconds).
   - Vulnerabilities Found (3 Critical, 12 Medium).
   - Network Bandwidth Anomaly Score (Normal - 12%).
4. World Map Threat Vector Visualizer & Recharts Attack Chart:
   - Attack origin geographic distribution chart.
   - Line chart monitoring packet spikes vs baseline traffic.
5. Live Security Log Stream & Incident Ticket Table:
   - Filtering by Severity (Critical, High, Medium, Info), IP address lookup tool, and 1-click "Ban IP & Isolation" button.`,
    category: 'Dashboard',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Recharts', 'Lucide Icons', 'TypeScript'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'SOC Team',
      handle: '@sec_ops',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 490,
    copies: 1780,
    isFeatured: false,
    createdAt: '2026-06-18',
    componentsIncluded: ['Live Alert Ticker', 'SOC Metric Cards', 'Attack Origin Visualizer', 'Recharts Traffic Chart', 'IP Ban Security Table'],
    colorTheme: 'SOC Matrix Dark & Crimson Red',
    previewLayout: 'analytics'
  },
  {
    id: 'logistics-fleet-tracking-dashboard',
    title: 'Logistics Fleet Tracking & Freight Supply Chain Center',
    description: 'A real-time logistics dashboard tracking delivery trucks, driver dispatch routes, fuel efficiency metrics, and warehouse inventory.',
    fullPrompt: `Design a Logistics Fleet Tracking & Freight Supply Chain Center using React, Tailwind CSS, Recharts, and Lucide icons.

Layout Features:
1. Navigation: Fleet Map, Driver Dispatch, Fuel Analytics, Maintenance Schedule, Shipments, Warehouse Stock.
2. Top Summary Widgets:
   - Total Active Fleet (142 Vehicles / 138 En Route / 4 Servicing).
   - On-Time Delivery Rate (98.4%).
   - Total Distance Covered (18,420 Miles today).
   - Fuel Efficiency Average (8.2 MPG).
3. Map Route View & Active Driver Status:
   - Map route simulation with truck icons, route progress bar (e.g. "Truck #42: Chicago -> Atlanta - 68% Complete"), ETA timer, and temperature sensor readout for refrigerated cargo.
4. Driver Communications & Dispatch Drawer:
   - Quick messaging panel, delay alert notifications, and route optimization prompt.
5. Recharts Bar Chart: Fleet fuel consumption and driver performance rankings.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Freight Tech',
      handle: '@freight_tech',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 275,
    copies: 910,
    isFeatured: false,
    createdAt: '2026-06-15',
    componentsIncluded: ['Fleet Status Bar', 'Interactive Route Map Card', 'Recharts Fuel Chart', 'Driver Dispatch Panel', 'Shipment Status Table'],
    colorTheme: 'Industrial Blue & Amber',
    previewLayout: 'analytics'
  },
  {
    id: 'ai-prompt-engineering-sandbox',
    title: 'AI System Prompt Engineering & Evaluation Sandbox',
    description: 'An evaluation playground for prompt engineers to compare model outputs side-by-side, benchmark latency/cost, and test temperature settings.',
    fullPrompt: `Create an AI System Prompt Engineering & Evaluation Sandbox using React, Tailwind CSS, Lucide icons, and Framer Motion.

Key Features:
1. Top Controls Bar:
   - Prompt Version selector (v1.4, v2.0-draft), "Save Version" button, "Run Batch Evaluation" button, and test dataset upload.
2. System Prompt Editor Pane:
   - Syntax-highlighted prompt editor with variables insertion pills (e.g. \`{{user_context}}\`, \`{{json_schema}}\`), variable values tester, and system instructions template picker.
3. Multi-Model Side-by-Side Comparison Columns:
   - Model A (Claude 3.5 Sonnet) vs Model B (Gemini 1.5 Pro) vs Model C (GPT-4o).
   - Individual model settings: Temperature slider (0.0 - 1.0), Max tokens input, Top-P, Stop sequences.
   - Live Output Cards: Response text, Time to First Token (TTFT ms), Total Generation Time, Token count, and Cost calculation ($0.0024).
   - Human Evaluation Rating thumbs up/down and quality score (1-5 stars).
4. Automated Benchmark Evaluation Matrix Table:
   - Accuracy score percentage, hallucination rate, formatting compliance pass rate.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Lucide Icons', 'TypeScript'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Prompt Crafter',
      handle: '@prompt_crafter',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 610,
    copies: 2540,
    isFeatured: true,
    createdAt: '2026-06-12',
    componentsIncluded: ['System Prompt Editor', 'Variable Pills Toolbar', 'Side-by-Side Model Comparison', 'Latency & Cost Metrics', 'Eval Matrix Table'],
    colorTheme: 'Obsidian Zinc & Cyan Glow',
    previewLayout: 'saas'
  },
  {
    id: 'real-estate-investment-calculator',
    title: 'Real Estate Investment & Property Portfolio Financial Tool',
    description: 'An interactive real estate analysis tool for calculating cap rates, cash-on-cash return, monthly rental cash flow, and mortgage amortization.',
    fullPrompt: `Build a Real Estate Investment & Property Portfolio Financial Tool using React, Tailwind CSS, Recharts, and Lucide icons.

Features & Controls:
1. Property Header:
   - Image gallery slider, address, asking price ($650,000), property type (Multi-Family 4-Plex), and quick favorite heart icon.
2. Investment Parameter Inputs Column:
   - Purchase Price slider, Down Payment percentage (20%), Interest Rate (6.5%), Loan Term (30 Years), Estimated Monthly Rent ($5,200), Property Tax, Insurance, HOA, and Maintenance Reserve sliders.
3. Live Financial Metrics Summary Cards:
   - Cap Rate (7.4% - Excellent Green Badge).
   - Cash-on-Cash Return (11.2%).
   - Net Operating Income (NOI - $48,100 / yr).
   - Monthly Cash Flow (+$1,240 / mo).
4. Recharts Amortization & Equity Growth Chart:
   - Stacked area chart showing Property Value appreciation vs Remaining Loan Principal over 30 years.
5. Expense Breakdown Pie Chart & Rental Sensitivity Matrix Table.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'PropTech Labs',
      handle: '@proptech_labs',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 1020,
    isFeatured: false,
    createdAt: '2026-06-10',
    componentsIncluded: ['Property Header', 'Financial Input Sliders', 'Cap Rate & Cashflow Cards', 'Recharts Equity Chart', 'Expense Breakdown Chart'],
    colorTheme: 'Emerald Green & Slate Neutral',
    previewLayout: 'analytics'
  },
  {
    id: 'coffee-roaster-ecommerce-store',
    title: 'Artisan Specialty Coffee Roaster & Bean Subscription Shop',
    description: 'A cozy minimalist e-commerce store for specialty coffee roasters featuring origin tasting notes, grind selector, and custom subscription builder.',
    fullPrompt: `Create an Artisan Specialty Coffee Roaster & Bean Subscription Shop using React, Tailwind CSS, Framer Motion, and Lucide icons.

Aesthetic Concept:
- Warm Coffee Aesthetic: Cream canvas (#fdfbf7), deep espresso brown (#2c1d11), warm terracotta accents (#c86d51), and refined serif typography.

Key Modules:
1. Navbar: Brand logo ("VELVET ROAST CO."), links (Single Origins, Blends, Espresso, Subscriptions, Our Farms), cart icon with badge.
2. Hero Section:
   - "Freshly Roasted Organic Beans Hand-Delivered to Your Door".
   - Roast level filter chips (Light Roast 🍋, Medium Roast 🍯, Dark Roast 🍫).
3. Product Grid:
   - Bean Cards: Bag photo, Origin badge ("Ethiopia Yirgacheffe - Single Origin"), Tasting Notes tags ("Jasmine, Bergamot, Blueberry"), Elevation (2,100m), Process (Washed), Price ($22 / 12oz), and "Add to Bag" button.
4. Interactive Coffee Subscription Builder Modal:
   - Step 1: Choose Roast Preference.
   - Step 2: Choose Grind Type (Whole Bean, French Press, Drip, Espresso).
   - Step 3: Delivery Frequency (Every 1 Wk, 2 Wks, 1 Mo) with 15% discount badge.
   - Step 4: Summary & Checkout button.`,
    category: 'E-commerce',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Roast Master',
      handle: '@coffee_craft',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    },
    likes: 340,
    copies: 1150,
    isFeatured: false,
    createdAt: '2026-06-08',
    componentsIncluded: ['Coffee Navbar', 'Hero Roast Filter', 'Bean Origin Cards', 'Tasting Notes Badges', 'Subscription Builder Modal'],
    colorTheme: 'Warm Cream & Espresso Brown',
    previewLayout: 'ecommerce'
  },
  {
    id: 'creator-link-in-bio-bento-portfolio',
    title: 'Creator Link-in-Bio & Personal Media Bento Hub',
    description: 'A social bio page featuring embedded Spotify audio player, latest YouTube video embed, newsletter signup box, and digital product shop.',
    fullPrompt: `Build a Creator Link-in-Bio & Personal Media Bento Hub using React, Tailwind CSS, Framer Motion, and Lucide icons.

Design Architecture:
- Mobile-first bento container layout centered on dark frosted backdrop-blur glass.

Components:
1. Profile Header:
   - Glowing avatar ring, verified checkmark badge, creator handle ("@alexa_creates"), bio snippet ("Design Engineering & AI Content Creator").
   - Social links icon bar (X/Twitter, YouTube, GitHub, Instagram, Figma, Discord).
2. Bento Grid Items:
   - Card 1 (Large Top): Featured YouTube Video Preview card with play button, view counter, and instant click to watch.
   - Card 2 (Audio): Embedded Podcast / Spotify Player widget with live audio waveform and play pause button.
   - Card 3 (Newsletter): "Join 25,000+ Designers" email input box with instant subscribe button.
   - Card 4 (Product): Digital Product Download Card ("Figma Design System v3 - $29") with instant buy button.
   - Card 5 (Book Calendar): "Book 1-on-1 Mentorship Call" button with available slot status tag.
3. Customization Footer:
   - Share profile button, QR code popup button, and dark/light theme switch toggle.`,
    category: 'Portfolio',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Alexa Vance',
      handle: '@alexa_creates',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 420,
    copies: 1610,
    isFeatured: false,
    createdAt: '2026-06-05',
    componentsIncluded: ['Bio Profile Header', 'Video Card', 'Audio Player Widget', 'Newsletter Input', 'Digital Product Card', 'Mentorship Booking'],
    colorTheme: 'Dark Frosted Glass & Neon Violet',
    previewLayout: 'bento'
  },
  {
    id: 'ai-image-video-canvas-studio',
    title: 'AI Multi-Modal Image & Video Generation Canvas',
    description: 'An AI creative studio workbench featuring text-to-image prompting, negative prompt settings, style presets carousel, aspect ratio selector, and seed history.',
    fullPrompt: `Design an AI Multi-Modal Image & Video Generation Canvas using React, Tailwind CSS, Lucide icons, and Framer Motion.

Layout Architecture:
1. Left Prompt Parameter Drawer:
   - Main Prompt Textarea with "Enhance Prompt" AI sparkle button.
   - Negative Prompt Textarea.
   - Style Preset Carousel (Photorealistic, Cyberpunk 3D, Anime, Minimalist Vector, Cinematic Oil Painting).
   - Model Switcher (Midjourney v6, Flux Pro, SDXL Turbo, Runway Gen-2 Video).
   - Aspect Ratio Selector pills (1:1, 16:9, 9:16, 4:3, 21:9).
   - Guidance Scale (CFG), Seed input, Steps slider (20-50 steps).
   - Primary "Generate Image (4 Credits)" button.
2. Center Generation Canvas & Grid:
   - Main high-resolution viewport with comparison slider (Before/After Upscale).
   - Action Toolbar: Upscale 4X, Inpaint Edit, Remove Background, Animate to Video, Variation generation.
3. Bottom History Carousel:
   - Recent generation thumbnails gallery with instant prompt re-use and download button.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Flux Studio',
      handle: '@flux_ai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 640,
    copies: 2890,
    isFeatured: true,
    createdAt: '2026-06-02',
    componentsIncluded: ['Prompt Parameter Drawer', 'Style Preset Chips', 'Aspect Ratio Buttons', 'Main Image Viewport', 'Upscale & Inpaint Bar', 'Generation History'],
    colorTheme: 'Pitch Obsidian & Electric Cyan',
    previewLayout: 'saas'
  },
  {
    id: 'hr-talent-recruitment-ats-dashboard',
    title: 'HR Talent Acquisition & Applicant Tracking System (ATS)',
    description: 'An enterprise ATS dashboard with candidate Kanban recruitment pipeline, resume parser drawer, interview scheduler, and hiring metrics.',
    fullPrompt: `Build an Enterprise HR Talent Acquisition & Applicant Tracking System (ATS) using React, Tailwind CSS, Recharts, and Lucide icons.

Interface Design:
1. Navigation Sidebar: Jobs, Candidates, Kanban Pipeline, Interviews, Analytics, Team Members, Settings.
2. Header Bar: Active job filter ("Senior Frontend Engineer - Remote"), total applicants badge (128 Candidates), search candidate bar, and "+ Post New Job" CTA button.
3. Candidate Recruitment Kanban Board:
   - Columns: Sourced (24), Applied (48), Screening (12), Tech Interview (8), Offer Sent (3), Hired (2).
   - Drag-and-drop style candidate cards showing name, current company, match rating score badge (94% Match), match skills tags, application date, and quick action menu.
4. Candidate Resume Drawer (Opens on card click):
   - Candidate summary, parsed skills list, work history timeline, interview scorecards from team members, and "Schedule Interview" calendar modal.
5. Recharts Hiring Funnel Conversion Chart.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Talent Flow',
      handle: '@talent_flow',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 285,
    copies: 940,
    isFeatured: false,
    createdAt: '2026-05-28',
    componentsIncluded: ['ATS Header', 'Recruitment Kanban Board', 'Candidate Cards', 'Parsed Resume Drawer', 'Hiring Funnel Recharts'],
    colorTheme: 'Indigo Slate & Emerald Status',
    previewLayout: 'analytics'
  },
  {
    id: 'customer-support-ai-ticket-helpdesk',
    title: 'Customer Support AI Helpdesk & Live Ticket Queue',
    description: 'A customer support agent workspace featuring AI auto-suggested replies, SLA countdown timers, ticket priority queues, and customer context sidebar.',
    fullPrompt: `Create a Customer Support AI Helpdesk & Live Ticket Queue Workspace using React, Tailwind CSS, Lucide icons, and Framer Motion.

Layout Structure:
1. Left Ticket Queue List:
   - Search bar & status filters (Open, Unassigned, Urgent SLA, Resolved).
   - Ticket item cards with priority color badge (Red: High, Yellow: Medium), customer name, channel icon (Email, Chat, Twitter), SLA countdown timer ("⏱ 12m left"), and unread indicator.
2. Center Message Conversation View:
   - Customer conversation history with timestamp tags and attachments preview.
   - AI Smart Assistant Bar: Auto-generated draft reply pill with confidence score ("98% AI Confidence - Click to Insert").
   - Rich Response Composer with canned responses dropdown, internal notes tab, macro triggers, and "Send & Resolve Ticket" button.
3. Right Customer Context Sidebar:
   - Customer profile details, subscription plan tier ("Enterprise VIP"), lifetime value ($24,500), recent order history, and CSAT sentiment indicator.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Support Stack',
      handle: '@support_stack',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 1100,
    isFeatured: false,
    createdAt: '2026-05-25',
    componentsIncluded: ['Ticket Queue Sidebar', 'Conversation Thread', 'AI Smart Reply Draft', 'Rich Composer', 'Customer Profile Panel'],
    colorTheme: 'Slate Neutral & Electric Blue',
    previewLayout: 'analytics'
  },
  {
    id: 'solar-energy-grid-dashboard',
    title: 'Solar Energy Grid & Battery Storage IoT Dashboard',
    description: 'A green-tech clean energy dashboard monitoring live solar array generation, battery storage capacity, carbon offset stats, and grid feedback.',
    fullPrompt: `Build a Solar Energy Grid & Battery Storage IoT Dashboard using React, Tailwind CSS, Recharts, and Lucide icons.

UI Features:
1. Theme: Clean Eco-Tech dark theme (#0c121e), electric emerald (#10b981), solar yellow (#facc15), and sky blue (#0ea5e9).
2. Top Stat Badges:
   - Current Solar Power Production (8.4 kW - Peak Output).
   - Home Power Consumption (3.2 kW).
   - Power Exported to Grid (+5.2 kW Earning $0.18/kWh).
   - Battery Storage Level (88% Charged - Tesla Powerwall).
   - CO2 Offset Saved Today (42.5 kg Equivalent to 2 Trees Planted).
3. Recharts Area Chart: Solar Generation vs Home Usage over 24 hours.
4. Interactive Energy Flow Visualizer:
   - Animated directional power flow lines connecting Solar Panels -> Inverter -> Home -> Battery -> Electric Grid.
5. Inverter System Diagnostics Table & Battery Health Card.`,
    category: 'Dashboard',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'EcoGrid Tech',
      handle: '@eco_grid',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 360,
    copies: 1240,
    isFeatured: false,
    createdAt: '2026-05-22',
    componentsIncluded: ['Eco Stat Badges', 'Energy Flow Animation', 'Recharts Solar Generation Chart', 'Inverter Status Table'],
    colorTheme: 'Eco Dark Slate & Solar Yellow',
    previewLayout: 'analytics'
  },
  {
    id: 'neobank-wealth-investing-app',
    title: 'Neobank Wealth Management & Automated Micro-Investing Web App',
    description: 'A modern neobank web platform for automated recurring investments, index fund portfolios, round-up savings, and net worth tracking.',
    fullPrompt: `Design a Neobank Wealth Management & Automated Micro-Investing Web App using React, Tailwind CSS, Recharts, and Lucide icons.

Layout Features:
1. Navigation Bar: Home, Portfolios, Automated Round-Ups, Recurring Deposit, Analytics, Tax Documents.
2. Top Total Net Worth Card:
   - Total Balance ($48,250.80), +$4,120.50 (11.4% YTD gain), 1-click "Deposit Funds" and "Withdraw" buttons.
3. Automated Investment Portfolios Grid:
   - Tech Growth Fund (80% Stocks / 20% Bonds - 14.2% Return).
   - ESG Clean Energy Portfolio (ESG Compliant - 9.8% Return).
   - Crypto Staking Basket (Yield 6.5%).
   - S&P 500 Index Automated DCA.
4. Recharts Compound Interest Calculator Widget:
   - Interactive slider for monthly contribution ($100 - $2,000/mo) showing projected growth over 5, 10, 20, 30 years.
5. Spare Change Round-Up Activity List:
   - Recent card transactions showing round-up cents invested into stock index.`,
    category: 'FinTech',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Neobank Labs',
      handle: '@neobank_ui',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 410,
    copies: 1480,
    isFeatured: false,
    createdAt: '2026-05-20',
    componentsIncluded: ['Net Worth Banner', 'Investment Portfolio Cards', 'Recharts Growth Projection Chart', 'Round-Up Transaction List'],
    colorTheme: 'Emerald Teal & Midnight Slate',
    previewLayout: 'analytics'
  }
];
