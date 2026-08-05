import { UIPrompt } from '../types';

export const PROMPTS_BATCH_2: UIPrompt[] = [
  {
    id: 'ai-legal-contract-analyzer',
    title: 'AI Legal Contract Analyzer & Compliance Risk Workspace',
    description: 'An AI-powered legal workspace for scanning contracts, highlighting risky liability clauses, generating summary key terms, and redline editing.',
    fullPrompt: `Create an AI Legal Contract Analyzer & Compliance Risk Workspace using React, Tailwind CSS, Lucide icons, and Framer Motion.

UI Architecture:
1. Left Document Navigator:
   - Upload PDF/DOCX contract dropzone.
   - List of analyzed documents with risk score badge (High Risk 🔴, Medium Risk 🟡, Safe 🟢).
   - Filter by document type (NDAs, Service Agreements, Employment, Vendor Master Agreements).
2. Center Contract Document Viewer & Redline Editor:
   - Interactive document text view with color-coded risk highlights (Red highlight for unlimited indemnification, yellow for non-compete duration).
   - Clickable risk tags in text opening AI explanation popover with suggested safer alternative clause text and "Accept Redline Suggestion" button.
3. Right AI Risk Audit Summary Panel:
   - Overall Contract Risk Rating Score (72/100 - Moderate Risk).
   - Liability Cap Breakdown Card.
   - Key Obligations Checklist (Payment terms, termination notice period, governing law jurisdiction).
   - "Export Redlined PDF" and "Download Executive Summary" action buttons.`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Legal Tech AI',
      handle: '@legal_ai',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 430,
    copies: 1560,
    isFeatured: true,
    createdAt: '2026-05-18',
    componentsIncluded: ['Document List', 'Redline Text Editor', 'Interactive Clause Popover', 'Contract Risk Summary Panel', 'Export Buttons'],
    colorTheme: 'Navy Blue & Crimson Red Risk',
    previewLayout: 'saas'
  },
  {
    id: 'food-recipe-grocery-planner-app',
    title: 'Smart Recipe Discovery & Grocery List Meal Planner App',
    description: 'A mobile-friendly recipe finder app with macro nutrition calculator, step-by-step cooking mode, pantry inventory manager, and automated grocery list.',
    fullPrompt: `Build a Smart Recipe Discovery & Grocery List Meal Planner App using React, Tailwind CSS, Lucide icons, and Framer Motion.

App Layout & Features:
1. Header Bar:
   - Search recipes bar, dietary filters (Keto 🥑, Vegan 🌿, High Protein 🍗, Gluten Free 🌾, Quick 15-Min ⏱), and saved favorites bookmark count.
2. Weekly Meal Planner Carousel:
   - Mon - Sun calendar cards with assigned meals (Breakfast, Lunch, Dinner, Snack) and total daily calories target bar (e.g. 2,100 / 2,300 kcal).
3. Recipe Cards Grid:
   - High-res food image, prep time badge ("20 Mins"), difficulty rating, macro breakdown pill (Protein 38g, Carbs 24g, Fat 12g), and "Add to Meal Plan" button.
4. Interactive Step-by-Step Cooking Modal:
   - Hands-free cooking assistant view with large step text, built-in timer countdown trigger, ingredient checklist with checkboxes, and scale serving size multiplier button (2x, 4x, 6x).
5. Automated Grocery List Drawer:
   - Items auto-categorized by supermarket aisle (Produce, Dairy, Meat, Pantry) with tap to check off item.`,
    category: 'Mobile App',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Chef Nina',
      handle: '@nina_cooks',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 1120,
    isFeatured: false,
    createdAt: '2026-05-15',
    componentsIncluded: ['Dietary Chips Filter', 'Weekly Meal Planner', 'Recipe Cards', 'Step-by-Step Cooking View', 'Grocery List Drawer'],
    colorTheme: 'Emerald Green & Warm Coral',
    previewLayout: 'mobile'
  },
  {
    id: 'cloud-cost-optimization-dashboard',
    title: 'Cloud Cost Optimization & AWS/GCP FinOps Management',
    description: 'A cloud infrastructure cost dashboard tracking idle server waste, reserved instance savings, Kubernetes pod costs, and monthly spending forecasts.',
    fullPrompt: `Design a Cloud Cost Optimization & AWS/GCP FinOps Management Dashboard using React, Tailwind CSS, Recharts, and Lucide icons.

Features:
1. Navigation Sidebar: Overview, AWS/GCP Multi-Cloud, Waste Detection, Reserved Instances, Kubernetes Costs, Budgets & Alerts.
2. Top Summary KPI Cards:
   - Current Monthly Cloud Spend ($42,850 / $50,000 budget).
   - Identified Waste Savings ($8,420 / mo potential savings).
   - Idle Resources Count (14 Unattached EBS volumes, 6 Idle EC2 instances).
   - Forecasted End-of-Month Cost ($48,200).
3. Recharts Cost Trend Area Chart:
   - Stacked area chart displaying spending breakdown by cloud service (EC2 Compute, S3 Storage, RDS Database, EKS Kubernetes, CloudFront CDN).
4. Automated Cost Saving Recommendations Table:
   - Service name, action recommendation ("Rightsize t3.2xlarge to t3.large"), potential monthly savings ($340/mo), risk level tag (Low Risk), and 1-click "Apply Auto-Fix" button.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'FinOps Labs',
      handle: '@finops_labs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 490,
    copies: 1820,
    isFeatured: false,
    createdAt: '2026-05-12',
    componentsIncluded: ['FinOps KPI Cards', 'Multi-Cloud Service Cost Chart', 'Waste Detection Table', 'Auto-Fix Action Modal'],
    colorTheme: 'Slate Grey & Emerald Savings',
    previewLayout: 'analytics'
  },
  {
    id: 'mechanical-keyboard-customizer-store',
    title: 'Custom Mechanical Keyboard Builder & Sound Test Studio',
    description: 'An interactive e-commerce product customizer for building custom mechanical keyboards with live 3D keycap view, switch selection, and audio sound test.',
    fullPrompt: `Build a Custom Mechanical Keyboard Builder & Sound Test Studio using React, Tailwind CSS, Lucide icons, and Framer Motion.

Key Interactive Elements:
1. Keyboard Visualizer Preview Canvas:
   - Interactive keyboard layout rendering (60%, 65%, 75%, TKL, Full Size).
   - Live keycap colorway theme switcher (Cyberpunk Neon, Retro Chalk, Botanical Green, Minimalist Monochrome).
2. Step-by-Step Customizer Controls Panel:
   - Step 1: Case Material (Aluminum Anodized, Polycarbonate, Frosted Acrylic).
   - Step 2: Switch Type (Linear Red 🔴, Tactile Brown 🟤, Clicky Blue 🔵) with built-in "Listen to Switch Sound Test" audio preview button.
   - Step 3: Keycap Profile & PBT Material.
   - Step 4: Plate Type (Brass, FR4, Carbon Fiber) & PCB Hot-Swap options.
3. Live Price Calculation Bar:
   - Itemized parts breakdown list, total estimated price ($285.00), assembly service checkbox, and "Add Custom Build to Cart" button.`,
    category: 'E-commerce',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Keeb Studio',
      handle: '@keeb_studio',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 520,
    copies: 1980,
    isFeatured: true,
    createdAt: '2026-05-10',
    componentsIncluded: ['Keyboard Layout Visualizer', 'Switch Sound Test Audio Button', 'Customizer Step Selector', 'Itemized Price Calculator'],
    colorTheme: 'Obsidian Black & Violet Neon',
    previewLayout: 'ecommerce'
  },
  {
    id: 'mindfulness-meditation-sleep-app',
    title: 'Mindfulness Meditation & Ambient Sleep Soundscapes App',
    description: 'A calming mental wellness app featuring breathing loop guides, ambient sound mixer, mood journal, and daily mindfulness streak tracker.',
    fullPrompt: `Design a Mindfulness Meditation & Ambient Sleep Soundscapes App using React, Tailwind CSS, Framer Motion, and Web Audio synthesizers / Lucide icons.

Design Guidelines:
- Aesthetic: Ultra-soothing twilight dark theme (#0c101c), soft indigo-400 breathing rings, ambient radial lighting, and peaceful minimalist typography.

App Features:
1. Header Bar:
   - Daily mindfulness streak pill ("🔥 21 Days Calm"), time-based greeting ("Good Evening, Serena 🌙"), and user settings.
2. Animated Diaphragmatic Breathing Circle Widget:
   - Expanding and contracting sine-wave glowing circle with guiding prompt text: "Inhale (4s) -> Hold (4s) -> Exhale (4s)".
   - Session duration timer (5 mins, 10 mins, 20 mins).
3. Ambient Sound Mixer Grid:
   - Sound Tiles with independent volume sliders: Rain on Roof 🌧, Forest Wind 🌲, Waves 🌊, White Noise 📻, Singing Bowl 🧘‍♂️.
   - Play All Mix button.
4. Mood Journal & Sleep Tracking Card:
   - Tap emotion buttons (Calm, Anxious, Focused, Tired, Grateful) and write a quick 1-line journal reflection.`,
    category: 'Mobile App',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Zen Design',
      handle: '@zen_design',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 410,
    copies: 1420,
    isFeatured: false,
    createdAt: '2026-05-08',
    componentsIncluded: ['Breathing Loop Widget', 'Ambient Sound Mixer Sliders', 'Mood Tracker Buttons', 'Daily Streak Banner'],
    colorTheme: 'Twilight Dark & Soothing Indigo',
    previewLayout: 'mobile'
  },
  {
    id: 'crypto-algorithmic-trading-terminal',
    title: 'Crypto Algorithmic Trading & High-Frequency Order Book Terminal',
    description: 'An advanced trading view terminal with live candlestick charting, real-time depth order book, automated grid trading bot setup, and risk parameters.',
    fullPrompt: `Create a Crypto Algorithmic Trading & High-Frequency Order Book Terminal using React, Tailwind CSS, Recharts / TradingView chart style, and Lucide icons.

Terminal Modules:
1. Top Market Bar:
   - Pair selector (BTC/USDT $94,250.00 +4.8%), 24h High/Low, 24h Volume ($2.4B), Funding Rate (+0.01%), and Connection Status (⚡ WS Live).
2. Center Candlestick Charting Viewport:
   - OHLC Candlestick chart representation with technical indicators overlay toggles (EMA 20/50, RSI 14, MACD, Bollinger Bands).
   - Timeframe bar (1m, 5m, 15m, 1H, 4H, 1D).
3. Right Live Depth Order Book & Recent Trades:
   - Asymmetric red (Ask) and green (Bid) order book wall visualization with cumulative volume depth bars.
4. Bottom Order Placement & Algorithmic Bot Control Dock:
   - Manual Order Entry: Limit, Market, Stop-Loss / Take-Profit trigger inputs with leverage slider (1x - 50x).
   - Automated Grid Bot Setup tab: Upper Price limit, Lower Price limit, Grid Count (10 - 100), and "Start Automated Bot" button.
5. Open Positions & Active Orders Table.`,
    category: 'FinTech',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Recharts', 'Lucide Icons', 'TypeScript'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Quant Trader',
      handle: '@quant_tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 620,
    copies: 2650,
    isFeatured: true,
    createdAt: '2026-05-05',
    componentsIncluded: ['Market Ticker Bar', 'Candlestick Chart View', 'Live Order Book Depth', 'Leverage Order Dock', 'Grid Bot Config', 'Positions Table'],
    colorTheme: 'High-Contrast Dark & Emerald/Red',
    previewLayout: 'analytics'
  },
  {
    id: 'ai-copywriter-social-media-planner',
    title: 'AI Copywriter & Social Media Multi-Platform Content Studio',
    description: 'An AI content generator for creating, scheduling, and auto-formatting posts across X/Twitter, LinkedIn, Instagram, and YouTube Shorts.',
    fullPrompt: `Build an AI Copywriter & Social Media Multi-Platform Content Studio using React, Tailwind CSS, Lucide icons, and Framer Motion.

Workflow Sections:
1. Left Content Generator Form:
   - Topic / Link / Product Input field.
   - Tone Selector chips (Professional, Witty, Controversial, Educational, Minimalist).
   - Target Platform Selector toggles (X/Twitter Thread, LinkedIn Article, Instagram Carousel Caption, YouTube Shorts Script).
   - "Generate Multi-Platform Campaign" AI button.
2. Center Content Preview & Editing Canvas:
   - Simulated Platform Preview Cards:
     - Twitter Thread Preview with character count limit pill (280 max) and hook optimizer.
     - LinkedIn Post View with "Read More" fold line indicator and image attachment block.
     - Instagram Caption View with auto-generated hashtags block.
3. Right Content Calendar Schedule & Analytics:
   - Calendar grid for scheduling posts with drag-and-drop time slots.
   - Optimal posting time recommendations badge ("🎯 Best time to post today: 2:30 PM EST").`,
    category: 'AI Agent UI',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Content AI Labs',
      handle: '@content_ai',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 380,
    copies: 1390,
    isFeatured: false,
    createdAt: '2026-05-02',
    componentsIncluded: ['Topic Input Form', 'Platform Toggle Buttons', 'Simulated Social Post Previews', 'Hashtag Generator', 'Posting Calendar'],
    colorTheme: 'Clean Slate & Cyan Accent',
    previewLayout: 'saas'
  },
  {
    id: 'hotel-resort-booking-admin-dashboard',
    title: 'Boutique Hotel & Luxury Resort Reservation Management',
    description: 'An admin portal for hotel managers to view room occupancy calendars, guest check-in status, housekeeping schedules, and revenue metrics.',
    fullPrompt: `Create a Boutique Hotel & Luxury Resort Reservation Management Admin Portal using React, Tailwind CSS, Recharts, and Lucide icons.

Admin Features:
1. Header Bar:
   - Resort property switcher ("The Grand Azure Resort - Bali"), today's date, quick guest search, and "+ Manual Reservation" button.
2. Top Occupancy Metric Badges:
   - Occupancy Rate (88% - 44 / 50 Rooms Occupied).
   - Today's Arrivals (12 Check-ins scheduled).
   - Today's Departures (8 Check-outs).
   - RevPAR (Revenue Per Available Room - $240.00).
3. Interactive Room Occupancy Gantt Chart Calendar:
   - Visual timeline grid of room numbers (Suite 101, Villa 202, Penthouse 301) across dates with guest name bar blocks, check-in status badges (Checked In, Pending, VIP Guest), and drag-and-adjust booking duration.
4. Housekeeping & Maintenance Request Table:
   - Room number, cleaning status (Clean, Inspection Needed, Dirty), assigned staff member, and status toggle.
5. Revenue Recharts Bar Chart: Daily room revenue vs food & beverage sales.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Hospitality Tech',
      handle: '@hospitality_ui',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 295,
    copies: 980,
    isFeatured: false,
    createdAt: '2026-04-28',
    componentsIncluded: ['Resort Metric Cards', 'Occupancy Timeline Gantt Chart', 'Housekeeping Status Table', 'Revenue Recharts'],
    colorTheme: 'Luxury Gold & Slate Navy',
    previewLayout: 'analytics'
  },
  {
    id: 'video-streaming-analytics-dashboard',
    title: 'OTT Video Streaming Platform & Content Performance Dashboard',
    description: 'An analytics dashboard for streaming platforms monitoring video playback buffering, concurrent viewers, subscriber churn, and top videos.',
    fullPrompt: `Design an OTT Video Streaming Platform & Content Performance Analytics Dashboard using React, Tailwind CSS, Recharts, and Lucide icons.

Analytics Modules:
1. Palette: Netflix-style dark slate canvas (#0d0e15), vivid red (#ef4444) playback accents, cyan viewer nodes, and crisp white typography.
2. Top KPI Cards:
   - Live Concurrent Viewers (142,500 Viewers Online right now).
   - Average Buffer Rate (0.12% - Excellent CDN Performance).
   - Monthly Recurring Revenue ($1.24M MRR).
   - Subscriber Churn Rate (1.8% - Down 0.4%).
3. Recharts Concurrent Viewers Real-Time Chart:
   - Smooth area chart updating viewers by region (North America, Europe, Asia-Pacific, Latin America).
4. Top Performing Content Media Grid:
   - Movie/Show thumbnail card with play count, average watch duration percentage (82% completion rate), thumbs up rating, and genre tags.
5. CDN Edge Server Health Table:
   - Server location, bandwidth usage, error rate, and response latency (ms).`,
    category: 'Analytics',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Stream Tech',
      handle: '@stream_analytics',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 370,
    copies: 1290,
    isFeatured: false,
    createdAt: '2026-04-25',
    componentsIncluded: ['Live Viewers KPI', 'Recharts Viewers Chart', 'Top Movies Media Cards', 'CDN Server Table'],
    colorTheme: 'Dark Obsidian & Streaming Red',
    previewLayout: 'analytics'
  },
  {
    id: 'school-lms-teacher-gradebook',
    title: 'Modern K-12 & University LMS Teacher Gradebook Portal',
    description: 'An educational management portal for teachers to grade assignments, track student attendance, post class announcements, and monitor progress.',
    fullPrompt: `Build a Modern K-12 & University LMS Teacher Gradebook Portal using React, Tailwind CSS, Recharts, and Lucide icons.

Key Features:
1. Navigation Bar: Classes, Student Gradebook, Assignments, Attendance, Analytics, Messages.
2. Header Bar: Class selector ("AP Computer Science A - Period 3"), active term ("Fall 2026"), and "+ New Assignment" button.
3. Interactive Gradebook Spreadsheet Matrix Table:
   - Student avatar & name, overall GPA/grade percentage (e.g. 94.5% - A), individual assignment scores with color-coded grade pills (Green: >90%, Yellow: 70-89%, Red: <70%), missing assignment alerts, and inline score editing.
4. Class Performance Recharts Histogram:
   - Grade distribution bell curve chart (A, B, C, D, F count).
5. Quick Attendance Marking Drawer:
   - Tap student status: Present 🟢, Late 🟡, Absent 🔴 with instant daily summary stats.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'EdTech Labs',
      handle: '@edtech_ui',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    likes: 260,
    copies: 880,
    isFeatured: false,
    createdAt: '2026-04-22',
    componentsIncluded: ['Gradebook Table', 'Grade Distribution Histogram', 'Attendance Marking Drawer', 'Assignment Creation Modal'],
    colorTheme: 'Indigo Slate & Emerald Grade Pills',
    previewLayout: 'analytics'
  },
  {
    id: 'gaming-guild-community-dashboard',
    title: 'Esports Gaming Guild & Web3 Community Tournament Platform',
    description: 'A dark gaming portal for esports teams featuring tournament brackets, live Twitch stream embed, member leaderboard, and prize pool tracker.',
    fullPrompt: `Design an Esports Gaming Guild & Web3 Community Tournament Platform using React, Tailwind CSS, Lucide icons, and Framer Motion.

Design Style:
- Gaming Aesthetic: Pitch dark canvas (#070913), electric neon cyan (#00f0ff) and purple (#a855f7) accents, metallic dark card borders, and bold gaming typography.

Core Sections:
1. Header Bar:
   - Guild logo ("VALKYRIE GUILD // ⚔️"), active tournament ticker, member profile with Level 42 badge, XP progress bar, and wallet balance.
2. Featured Live Tournament Banner:
   - "Apex Champions Winter Major - $50,000 Prize Pool" with live countdown timer, match schedule, and "Register Team" button.
3. Interactive Tournament Elimination Bracket View:
   - Quarterfinals, Semifinals, Grand Finals visual tree connector lines with team logos, match scores, and live match status badge ("IN PROGRESS").
4. Guild Member Leaderboard Table:
   - Rank position (🥇 Gold trophy for #1), player gamer tag, avatar, win rate percentage (78% Win Rate), total earnings ($12,400), and main game badge.
5. Embedded Live Stream Viewport with Community Chat Drawer.`,
    category: 'Dashboard',
    style: 'Cyberpunk',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'GamerX UI',
      handle: '@gamerx_ui',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 470,
    copies: 1720,
    isFeatured: false,
    createdAt: '2026-04-20',
    componentsIncluded: ['Gaming Header', 'Tournament Bracket Tree', 'Leaderboard Table', 'Embedded Stream Container', 'Prize Tracker'],
    colorTheme: 'Dark Metallic & Neon Cyan/Purple',
    previewLayout: 'generic'
  },
  {
    id: 'supply-chain-warehouse-manager',
    title: 'Supply Chain Automated Warehouse & RFID Inventory Hub',
    description: 'An industrial inventory management system tracking shelf locations, SKU barcode scanning, low-stock reorder triggers, and automated robots.',
    fullPrompt: `Build a Supply Chain Automated Warehouse & RFID Inventory Hub using React, Tailwind CSS, Recharts, and Lucide icons.

System Features:
1. Header Bar:
   - Warehouse location selector ("Facility #4 - Chicago Hub"), system status badge ("🟢 Automated AGVs Operational"), search SKU input bar, and "+ Add New Stock" button.
2. Warehouse Inventory KPI Cards:
   - Total SKUs Managed (18,420 Items).
   - Capacity Utilization (84% Full - 122 Bay Slots Available).
   - Low-Stock Alerts (8 SKUs Below Threshold).
   - Daily Outbound Orders Picked (2,450 Orders - 99.2% Accuracy).
3. Visual Bay Location Map Grid:
   - Aisle and shelf visual matrix (Aisle A1 - E10) showing color-coded stock levels (Green: Stocked, Yellow: Low Stock, Red: Empty). Clicking a bay opens item inventory list.
4. Recent Stock Inbound/Outbound Movements Table:
   - SKU ID, product description, bay location code, quantity change, handler ID/robot ID, and timestamp.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Logi Stack',
      handle: '@logi_stack',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 270,
    copies: 890,
    isFeatured: false,
    createdAt: '2026-04-18',
    componentsIncluded: ['Warehouse KPI Cards', 'Aisle Grid Map', 'Low-Stock Alerts', 'Inbound/Outbound Movement Table'],
    colorTheme: 'Industrial Slate & Amber Warning',
    previewLayout: 'analytics'
  },
  {
    id: 'personal-wealth-tax-planner',
    title: 'Personal Wealth & Tax Optimization Planner Workspace',
    description: 'A private wealth management tool for tracking net worth across bank accounts, real estate, stocks, crypto, and calculating tax write-offs.',
    fullPrompt: `Create a Personal Wealth & Tax Optimization Planner Workspace using React, Tailwind CSS, Recharts, and Lucide icons.

Layout Features:
1. Navigation Bar: Net Worth Overview, Asset Allocation, Tax Deductions, Retirement Projection, Document Vault.
2. Top Asset Breakdown Metric Strip:
   - Total Net Worth ($1,240,500).
   - Cash Liquid ($180,000).
   - Investment Stocks ($620,000).
   - Real Estate Equity ($380,000).
   - Crypto / Alternatives ($60,500).
3. Recharts Donut Asset Allocation Chart & Recharts Retirement Projection Line Chart.
4. Tax Write-Off & Deductions Optimizer Table:
   - Expense category (Home Office, Health Insurance, 401k Max, HSA, Business Mileage), estimated tax saving amount ($14,200 total write-off), compliance status tag, and receipt attachment indicator.
5. Interactive Retirement Target Calculator Slider.`,
    category: 'FinTech',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Wealth Craft',
      handle: '@wealth_craft',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 380,
    copies: 1320,
    isFeatured: false,
    createdAt: '2026-04-15',
    componentsIncluded: ['Net Worth Strip', 'Donut Asset Allocation Chart', 'Retirement Projection Chart', 'Tax Write-off Table', 'Target Calculator Slider'],
    colorTheme: 'Slate Navy & Emerald Green',
    previewLayout: 'analytics'
  },
  {
    id: 'fitness-gym-owner-dashboard',
    title: 'Fitness Gym Owner & Class Scheduling Portal',
    description: 'A management portal for gym owners to track member subscriptions, daily class check-ins, trainer schedules, and recurring billing.',
    fullPrompt: `Design a Fitness Gym Owner & Class Scheduling Portal using React, Tailwind CSS, Recharts, and Lucide icons.

Portal Modules:
1. Header Bar: Gym location ("Pulse Fitness - Downtown"), active members badge (1,240 Members), quick member lookup bar, and "+ Register New Member" button.
2. Today's Gym Overview KPI Cards:
   - Daily Check-ins Today (342 Members checked in).
   - Monthly Recurring Membership Revenue ($68,400 MRR).
   - Active Group Class Attendance (92% Capacity filled).
   - Membership Churn Rate (2.1%).
3. Today's Class Schedule Timeline:
   - Class cards (HIIT Workout 07:00 AM, Yoga Flow 09:00 AM, CrossFit 12:00 PM, Heavy Lifting 05:30 PM) showing assigned trainer name, booked slots (e.g., 22/25 Booked), and "Check In Class" button.
4. Recent Member Check-in Stream & Subscription Expiration Warnings Table.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Fit Owner UI',
      handle: '@fit_owner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 250,
    copies: 870,
    isFeatured: false,
    createdAt: '2026-04-12',
    componentsIncluded: ['Gym KPI Cards', 'Class Schedule Timeline Cards', 'Member Check-in Feed', 'Subscription Table'],
    colorTheme: 'Dark Slate & Electric Neon Orange',
    previewLayout: 'analytics'
  },
  {
    id: 'podcast-analytics-recording-studio',
    title: 'Podcast Creator Analytics & Episode Host Studio',
    description: 'An analytics and episode publisher dashboard for podcasters monitoring episode downloads, audience retention drop-off, sponsor ad revenue, and RSS distribution.',
    fullPrompt: `Create a Podcast Creator Analytics & Episode Host Studio using React, Tailwind CSS, Recharts, and Lucide icons.

Key UI Sections:
1. Header Bar: Show selector ("The Tech Vibe Podcast - Season 4"), total show downloads (1.4M Total Downloads), RSS feed sync status pill ("🟢 Spotify & Apple Sync Active"), and "+ Upload Episode" button.
2. Top Show Metrics Cards:
   - Total Episode Downloads (142,800 this month).
   - Average Completion Rate (78% Listeners finish episode).
   - Sponsor Ad Revenue ($8,400 / mo).
   - Apple Podcasts Rating (4.9 ⭐ - 1.2K Reviews).
3. Recharts Episode Retention & Audience Growth Chart:
   - Area chart showing listener retention curve throughout an episode (identifying where listeners drop off).
4. Recent Episodes Performance Table:
   - Episode number & title, publish date, audio duration, total downloads, sponsor CPM rate, and quick audio preview player button.`,
    category: 'Analytics',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Podcast Tech',
      handle: '@podcast_tech',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 310,
    copies: 1080,
    isFeatured: false,
    createdAt: '2026-04-10',
    componentsIncluded: ['Podcast KPI Cards', 'Recharts Audience Retention Curve', 'Episode Performance Table', 'Audio Preview Player Widget'],
    colorTheme: 'Slate Grey & Violet Purple',
    previewLayout: 'analytics'
  },
  {
    id: 'ev-charging-network-dashboard',
    title: 'EV Charging Station Network & Smart Grid Center',
    description: 'A smart grid management dashboard for electric vehicle charging stations tracking charger availability, energy delivery, kWh pricing, and maintenance.',
    fullPrompt: `Build an EV Charging Station Network & Smart Grid Center using React, Tailwind CSS, Recharts, and Lucide icons.

Features:
1. Navigation Sidebar: Network Map, Stations Status, Energy Dispatch, Pricing Rules, Maintenance Alerts, Revenue.
2. Top KPI Cards:
   - Active Chargers (482 / 500 Chargers Online - 96.4% Uptime).
   - Total Energy Delivered Today (18,450 kWh).
   - Revenue Generated Today ($6,458.00).
   - Average Charging Session Duration (38 Minutes).
3. Interactive Station Location Map & Charger Status Grid:
   - Location cards (Downtown Supercharger Hub - 12 Stalls) showing DC Fast Charge wattage (250 kW), live occupation status (8 Occupied / 4 Free), current kWh rate ($0.38/kWh), and connector types (CCS, NACS Tesla).
4. Recharts kWh Consumption Peak Demand Graph.`,
    category: 'Dashboard',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'EV Grid UI',
      handle: '@ev_grid',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 290,
    copies: 940,
    isFeatured: false,
    createdAt: '2026-04-08',
    componentsIncluded: ['Charger KPI Cards', 'Station Status Grid', 'DC Fast Charge Wattage Badges', 'Recharts Peak Demand Chart'],
    colorTheme: 'Dark Slate & Electric Cyan',
    previewLayout: 'analytics'
  },
  {
    id: 'developer-api-gateway-portal',
    title: 'Developer API Gateway & Rate-Limit Management Portal',
    description: 'A developer portal for managing API keys, tracking request latency, setting rate limits, and viewing webhook delivery logs.',
    fullPrompt: `Design a Developer API Gateway & Rate-Limit Management Portal using React, Tailwind CSS, Recharts, and Lucide icons.

Portal Sections:
1. Header Bar: Organization selector ("Acme Dev Team"), API Environment pill (Production / Sandbox toggle), search endpoints bar, and "+ Create API Key" button.
2. Top Gateway KPI Cards:
   - Total API Requests (14.2M Requests / month).
   - Average Response Latency (18ms).
   - Error Rate (0.02% - 2xx 99.98%).
   - Active API Keys (18 Keys Issued).
3. API Keys Management Table:
   - Key name, masked secret key (\`sk_live_98x...\`), rate limit quota (1,000 req/min), last used timestamp, IP restriction whitelist, and 1-click Revoke key button.
4. Recharts API Request Volume & 4xx/5xx Errors Chart.
5. Real-Time Webhook Delivery Logs Drawer with response payload viewer.`,
    category: 'SaaS',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'API Craft',
      handle: '@api_craft',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 420,
    copies: 1510,
    isFeatured: false,
    createdAt: '2026-04-05',
    componentsIncluded: ['API Gateway KPI Cards', 'API Key Management Table', 'Recharts Request Volume Chart', 'Webhook Log Stream Drawer'],
    colorTheme: 'Slate Neutral & Emerald Green',
    previewLayout: 'saas'
  },
  {
    id: 'ai-voice-conversation-trainer',
    title: 'AI Voice Conversation Trainer & Real-Time Call Simulator',
    description: 'An AI sales and customer service voice roleplay trainer with live audio conversation waveform, speech fluency scoring, and transcript analysis.',
    fullPrompt: `Create an AI Voice Conversation Trainer & Real-Time Call Simulator using React, Tailwind CSS, Lucide icons, and Framer Motion.

UI Architecture:
1. Call Simulation Active Canvas:
   - AI Persona Card (e.g. "Skeptical Enterprise Buyer - VP of Engineering").
   - Live Voice Waveform Visualizer for AI voice speaker and user microphone input.
   - Live Call Duration Timer & Mute/End Call action controls.
2. Real-Time Conversation Transcript Stream:
   - Speaker dialogue bubbles with speech sentiment tags (Confident, Hesitant, Interrupting).
3. Post-Call AI Performance Scorecard Modal:
   - Overall Call Performance Rating (88/100).
   - Objections Handled Score (4/5 Objections successfully addressed).
   - Talk-to-Listen Ratio Ring (User 45% / AI 55% - Optimal balance).
   - Recommended Follow-Up Action Bullet Points.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Voice AI Labs',
      handle: '@voice_ai',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 490,
    copies: 1790,
    isFeatured: false,
    createdAt: '2026-04-02',
    componentsIncluded: ['Voice Waveform Canvas', 'AI Persona Card', 'Live Transcript Stream', 'Talk Ratio Ring', 'Post-call Scorecard Modal'],
    colorTheme: 'Dark Obsidian & Neon Indigo',
    previewLayout: 'saas'
  },
  {
    id: 'artisan-ceramic-studio-shop',
    title: 'Artisan Ceramic Studio & Pottery Handmade Storefront',
    description: 'A tranquil minimalist online boutique for handmade ceramic pottery, vases, and tableware with earthy natural aesthetic.',
    fullPrompt: `Build an Artisan Ceramic Studio & Pottery Handmade Storefront using React, Tailwind CSS, Framer Motion, and Lucide icons.

Aesthetic Style:
- Wabi-Sabi Natural Minimalist: Sand beige background (#f5f2eb), warm terracotta brown (#a85d42), sage green accents (#84937e), and elegant editorial layout spacing.

Key Modules:
1. Header Bar: Brand logo ("TERRA CERAMICS"), navigation links (Vases, Tableware, Sculptures, Studio Story, Workshops), cart drawer trigger.
2. Full-Width Editorial Hero Banner:
   - High-res ceramic pottery photo, heading: "Handcrafted Ceramics Shaped by Fire & Earth", and "Explore Studio Works" outline button.
3. Collection Grid Cards:
   - Ceramic item photos with natural shadow, clay material tag ("Speckled Stoneware"), dimensions ("8.5 x 4.0 in"), price ($85.00), and "Add to Cart" button.
4. Pottery Workshop Booking Card:
   - Schedule hands-on wheel throwing weekend classes with available date selector.`,
    category: 'E-commerce',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Terra Studio',
      handle: '@terra_ceramics',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    likes: 280,
    copies: 910,
    isFeatured: false,
    createdAt: '2026-03-28',
    componentsIncluded: ['Editorial Navbar', 'Full-width Hero Banner', 'Ceramic Item Cards', 'Stoneware Clay Badges', 'Workshop Booking Card'],
    colorTheme: 'Sand Beige & Terracotta',
    previewLayout: 'ecommerce'
  }
];
