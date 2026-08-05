import { UIPrompt } from '../types';

export const PROMPTS_BATCH_6: UIPrompt[] = [
  {
    id: 'ai-voice-cloning-dubbing-studio',
    title: 'AI Multi-Lingual Voice Cloning & Video Dubbing Studio',
    description: 'A video localization studio for AI voice cloning, lip-sync translation, multi-speaker track editing, and subtitle burning.',
    fullPrompt: `Create an AI Multi-Lingual Voice Cloning & Video Dubbing Studio using React, Tailwind CSS, Lucide icons, and Framer Motion.

Studio Workflow:
1. Header Bar: Video Project Name ("Product Launch Keynote 2026.mp4"), Original Audio Track ("English - Female Speaker 1"), Target Dubbing Language Selector ("Spanish (Latin America)", "Japanese", "French", "German"), and "Generate AI Dubbed Video" button.
2. Video Player & Audio Waveform Viewport:
   - Video preview player container with timecodes.
   - Dual-track waveform display: Original Vocal Track vs Synthesized AI Voice Track with lip-sync alignment indicators.
3. Multi-Speaker Voice Clone Settings Panel:
   - Voice Speaker 1 (Cloned Voice Match 98% Similarity) -> Emotion Pitch Selector (Neutral, Energetic, Professional, Warm).
   - Speed Multiplier (1.0x - Auto-time stretched to match lip movements).
4. Subtitle & Translation Script Editor:
   - Side-by-side subtitle editor with real-time translation correction and timestamp triggers.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Dub AI Labs',
      handle: '@dub_ai',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 540,
    copies: 2210,
    isFeatured: true,
    createdAt: '2025-12-28',
    componentsIncluded: ['Video Dubbing Player', 'Dual-track Audio Waveform', 'Voice Clone Settings Panel', 'Subtitle Translation Editor'],
    colorTheme: 'Dark Slate & Electric Neon Purple',
    previewLayout: 'saas'
  },
  {
    id: 'smart-home-iot-automation-hub',
    title: 'Smart Home IoT Automation & Energy Efficiency Control Hub',
    description: 'An interactive IoT dashboard for controlling smart home lighting, thermostat temperatures, solar battery storage, and security cameras.',
    fullPrompt: `Build a Smart Home IoT Automation & Energy Efficiency Control Hub using React, Tailwind CSS, Recharts, and Lucide icons.

Control Center Modules:
1. Header Bar: Home Location ("Main Residence - Austin, TX"), Active IoT Devices (38 / 42 Devices Online), Total Power Usage (1.8 kW - Solar Powered ☀️), and Quick Scenes ("Good Morning", "Movie Night", "Away Mode").
2. Climate & Thermostat Widget Card:
   - Circular temperature dial control (72°F target), Mode selector (Cool, Heat, Eco, Auto), and Humidity gauge (45%).
3. Room-by-Room Device Toggles Matrix:
   - Living Room: Smart Hue Lights 💡 (Dimmer Slider 80%), Smart TV 📺, AC ❄️.
   - Master Bedroom: Ambient Lighting 🌙, Smart Blinds 🪟 (Closed 100%).
   - Kitchen: Espresso Machine ☕, Refrigerator Temp 🧊.
4. Home Solar & Battery Storage Recharts Power Flow Graph.
5. Live Security Camera Feeds Grid with Motion Detection Alerts.`,
    category: 'Dashboard',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'IoT Home UI',
      handle: '@iot_home',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 410,
    copies: 1520,
    isFeatured: false,
    createdAt: '2025-12-25',
    componentsIncluded: ['Thermostat Dial Control', 'Room Device Toggle Cards', 'Solar Recharts Graph', 'Security Camera Grid', 'Quick Scene Buttons'],
    colorTheme: 'Dark Obsidian & Solar Amber',
    previewLayout: 'analytics'
  },
  {
    id: 'bento-grid-developer-productivity',
    title: 'Developer Productivity & AI Code Intelligence Bento Grid',
    description: 'A developer tool feature bento grid showcasing instant code autocomplete, inline bug detection, git time travel, and automated test suite generation.',
    fullPrompt: `Design a Developer Productivity & AI Code Intelligence Bento Grid Showcase using React, Tailwind CSS, Lucide icons, and Framer Motion.

Bento Grid Layout:
1. Box 1 (2x2 Large):
   - "Sub-10ms AI Code Autocomplete": Interactive VS Code-style editor preview with inline gray ghost text completion accepting tab suggestions.
2. Box 2 (1x2 Vertical):
   - "Git Time Travel & Instant Rollback": Visual commit tree timeline with 1-click restore point nodes.
3. Box 3 (2x1 Horizontal):
   - "Automated Unit Test Generator": Generated Jest / Vitest test cases with 100% code coverage badge.
4. Box 4 (1x1 Square):
   - "Zero Runtime Crashes": Type safety checker gauge showing 0 TypeScript errors.
5. Box 5 (1x1 Square):
   - "100x Faster Builds": Rust-powered bundler benchmark comparison chart.

Design Style:
- Deep dark slate canvas (#0d1117), neon green (#2ea043) GitHub accents, metallic card borders, and monospace font pairings.`,
    category: 'Bento Grid',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'DevBento',
      handle: '@dev_bento',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 520,
    copies: 1980,
    isFeatured: false,
    createdAt: '2025-12-22',
    componentsIncluded: ['Autocomplete Editor Box', 'Git Time Travel Timeline', 'Unit Test Generator Box', 'Bundler Benchmark Chart', 'Bento Cards'],
    colorTheme: 'GitHub Dark Slate & Neon Green',
    previewLayout: 'bento'
  },
  {
    id: 'peer-to-peer-car-rental-app',
    title: 'Peer-to-Peer Car Sharing & Electric Vehicle Rental App',
    description: 'A car rental marketplace app for booking luxury sports cars and electric SUVs from local hosts with contactless mobile key unlock.',
    fullPrompt: `Create a Peer-to-Peer Car Sharing & Electric Vehicle Rental App using React, Tailwind CSS, Lucide icons, and Framer Motion.

App Features:
1. Top Search Header:
   - Pick-up Location ("Los Angeles Airport - LAX ✈️"), Trip Dates ("Nov 12 - Nov 15"), Vehicle Type Filter (Electric ⚡, Sports Car 🏎, Luxury SUV 🚙, Convertible ☀️).
2. Featured Vehicle Cards Grid:
   - Car Photo, Model Name ("Porsche Taycan Turbo S ⚡"), Host Rating (4.98 ⭐ - Superhost), Daily Rate ($189/day), Instant Mobile Key Unlock badge, and "Book Vehicle" button.
3. Interactive Car Detail & Unlock Modal:
   - Vehicle battery range (280 Miles 100% Charged), pickup location map, insurance protection coverage options (Basic, Standard, Premium Zero Deductible), and "Tap to Unlock Door" bluetooth simulation button.`,
    category: 'E-commerce',
    style: 'SaaS Modern',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Drive Club',
      handle: '@drive_club',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
    },
    likes: 330,
    copies: 1140,
    isFeatured: false,
    createdAt: '2025-12-20',
    componentsIncluded: ['Vehicle Search Bar', 'Featured Car Cards', 'Superhost Badges', 'Mobile Key Unlock Modal', 'Insurance Protection Options'],
    colorTheme: 'Slate Grey & Electric Blue',
    previewLayout: 'ecommerce'
  },
  {
    id: 'ai-prompt-engineering-eval-bench',
    title: 'AI Prompt Engineering & LLM Regression Evaluation Bench',
    description: 'An AI developer tool for testing prompts across Claude 3.5, GPT-4o, and Gemini 1.5, measuring latency, token cost, and accuracy scores.',
    fullPrompt: `Build an AI Prompt Engineering & LLM Regression Evaluation Bench using React, Tailwind CSS, Recharts, and Lucide icons.

Bench Layout:
1. Top Evaluation Run Bar:
   - Test Dataset Selector ("Customer Service Edge Cases - 50 Test Items"), Run Evaluation Batch button, Total Benchmark Cost ($0.14), and Pass Rate Percentage (94.2% Pass Rate).
2. Side-by-Side LLM Model Comparison Columns:
   - Column 1: GPT-4o (Latency: 420ms | Cost: $0.002/item | Accuracy: 96%).
   - Column 2: Claude 3.5 Sonnet (Latency: 310ms | Cost: $0.0015/item | Accuracy: 98% 🏆 Winner).
   - Column 3: Gemini 1.5 Flash (Latency: 180ms | Cost: $0.0004/item | Accuracy: 92% ⚡ Fastest).
3. Test Case Item Matrix Table:
   - Test Input Query, Expected Output vs Model Generated Outputs with highlighted semantic diffs, and Pass/Fail status badge.
4. Token Usage & Cost Efficiency Recharts Bar Chart.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Prompt Bench AI',
      handle: '@prompt_bench',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 610,
    copies: 2480,
    isFeatured: true,
    createdAt: '2025-12-18',
    componentsIncluded: ['Evaluation Run Header', 'Side-by-side Model Columns', 'Semantic Output Diff Table', 'Recharts Cost Chart'],
    colorTheme: 'Dark Obsidian & Emerald Winner Badges',
    previewLayout: 'saas'
  },
  {
    id: 'personal-finance-cashflow-budget-app',
    title: 'Personal Finance Cash Flow & Subscription Tracker App',
    description: 'A personal finance management app for tracking monthly recurring subscriptions, setting category budgets, and visualizing savings targets.',
    fullPrompt: `Design a Personal Finance Cash Flow & Subscription Tracker App using React, Tailwind CSS, Recharts, and Lucide icons.

App Layout:
1. Top Total Financial Health Banner:
   - Monthly Net Cash Flow (+ $2,450.00 Income surplus).
   - Total Monthly Subscriptions Spent ($284.00 / mo - 14 Subscriptions).
   - Savings Target Progress Ring ($8,400 / $10,000 Emergency Fund Goal).
2. Recurring Subscriptions Audit List:
   - Netflix ($19.99/mo), Spotify ($11.99/mo), OpenAI ChatGPT Plus ($20.00/mo), Gym Membership ($49.00/mo), Adobe CC ($54.99/mo).
   - "Unused Subscription Alert" banner ("⚠️ You haven't used Adobe CC in 45 days - Cancel & Save $660/yr").
3. Recharts Expense Category Pie Chart (Housing, Food, Subscriptions, Transport, Investments).
4. "+ Add Subscription" Modal with automatic billing renewal reminder.`,
    category: 'FinTech',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Recharts', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Finance Craft',
      handle: '@finance_craft',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    likes: 360,
    copies: 1290,
    isFeatured: false,
    createdAt: '2025-12-15',
    componentsIncluded: ['Cash Flow Banner', 'Subscription Audit List', 'Unused Subscription Alert', 'Recharts Expense Pie Chart', 'Add Subscription Modal'],
    colorTheme: 'Clean Slate & Emerald Green',
    previewLayout: 'mobile'
  },
  {
    id: 'ai-3d-model-mesh-generator',
    title: 'AI 3D Mesh Generator & Spatial Asset Studio',
    description: 'An AI spatial tool for generating 3D textured mesh models from text prompts, inspecting wireframes, and exporting GLTF/USDZ files.',
    fullPrompt: `Create an AI 3D Mesh Generator & Spatial Asset Studio using React, Tailwind CSS, Lucide icons, and Framer Motion.

Studio Layout:
1. Left Prompt & Generation Controls Sidebar:
   - Prompt Input ("Cyberpunk hovercraft vehicle with metallic weathered rust texture").
   - Polygon Poly Count Slider (Low Poly 5k - High Poly 100k verts).
   - Texture Resolution dropdown (1K, 2K, 4K PBR Maps).
   - "Generate 3D Model" AI button.
2. Center 3D Model Interactive Viewport:
   - Simulated 3D rotatable viewport with orbit controls, lighting studio environments (Studio Neutral, Sunset, Cyberpunk Neon), and rendering mode toggles (Shaded PBR, Wireframe, UV Map Unwrapped, Depth Map).
3. Right Mesh Inspection & Asset Export Panel:
   - Mesh Statistics (Triangles: 24,500, Vertices: 12,800, Material Slots: 3).
   - Export 3D Format Buttons: Download .GLTF, Download .USDZ (Apple VisionOS ready), Download .OBJ.`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Spatial AI',
      handle: '@spatial_ai',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    likes: 580,
    copies: 2340,
    isFeatured: false,
    createdAt: '2025-12-12',
    componentsIncluded: ['3D Prompt Sidebar', 'Rotatable 3D Viewport', 'Wireframe Render Mode Toggle', 'Mesh Stats Panel', 'Export GLTF/USDZ Buttons'],
    colorTheme: 'Dark Obsidian & Cyber Cyan',
    previewLayout: 'saas'
  },
  {
    id: 'sustainable-fashion-thrifting-marketplace',
    title: 'Sustainable Vintage Fashion & Peer Thrifting Marketplace',
    description: 'A circular fashion e-commerce marketplace for buying and selling verified pre-loved designer clothing with eco-impact carbon savings badges.',
    fullPrompt: `Build a Sustainable Vintage Fashion & Peer Thrifting Marketplace using React, Tailwind CSS, Framer Motion, and Lucide icons.

Marketplace Interface:
1. Navigation Bar: Category links (Vintage Denim, Designer Archives, Streetwear, Shoes, Sustainability Impact), search bar, cart & saved favorites.
2. Eco Carbon Savings Hero Banner:
   - "Shopping Pre-Loved Saved 14,200 kg of CO2 & 1.2M Liters of Water This Month 🌿".
3. Product Grid Cards:
   - High-res fashion photo, brand badge ("Vintage Y2K Levi's 501"), seller rating (5.0 ⭐), size pill ("Size M / 32 W"), price ($65.00), estimated carbon saved ("🌱 12kg CO2 Saved"), and "Buy Item" button.
4. Seller Instant Listing Modal:
   - Upload clothes photos, auto-detect brand & category tags with AI, set condition rating (Like New, Good, Vintage Character), and set price.`,
    category: 'E-commerce',
    style: 'Minimalist',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Thrift Lab',
      handle: '@thrift_lab',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    likes: 290,
    copies: 980,
    isFeatured: false,
    createdAt: '2025-12-10',
    componentsIncluded: ['Eco Carbon Savings Banner', 'Vintage Item Cards', 'Carbon Saved Badges', 'Seller Instant Listing Modal'],
    colorTheme: 'Sand Beige & Eco Sage Green',
    previewLayout: 'ecommerce'
  },
  {
    id: 'bento-grid-ai-agent-memory',
    title: 'AI Agent Long-Term Vector Memory & Knowledge Bento Grid',
    description: 'An AI infrastructure product showcase bento grid highlighting semantic vector search, long-term memory graph, sub-millisecond retrieval, and privacy.',
    fullPrompt: `Design an AI Agent Long-Term Vector Memory & Knowledge Bento Grid Showcase using React, Tailwind CSS, Lucide icons, and Framer Motion.

Bento Grid Layout:
1. Box 1 (2x2 Large):
   - "Interactive Vector Knowledge Graph": Visual node cluster chart showing semantic connections between agent memories with clickable memory recall popovers.
2. Box 2 (1x2 Vertical):
   - "Sub-5ms Vector Search Latency": Speed comparison gauge showing HNSW index retrieval.
3. Box 3 (2x1 Horizontal):
   - "Auto-Summarization & Decay Engine": Animated memory compression visual compressing 1,000 raw chat logs into a concise knowledge graph.
4. Box 4 (1x1 Square):
   - "Zero Memory Leaks": Role-based tenant isolation security badge.
5. Box 5 (1x1 Square):
   - "Multi-Modal Embeddings": Supports Text, Images, Audio, and Code vectors.

Style:
- Deep obsidian dark background (#090b10), glowing violet (#8b5cf6) memory nodes, metallic card borders, and crisp monospace text.`,
    category: 'Bento Grid',
    style: 'Bento',
    techStack: ['Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Bolt.new'],
    author: {
      name: 'Vector Lab',
      handle: '@vector_lab',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    likes: 490,
    copies: 1840,
    isFeatured: false,
    createdAt: '2025-12-08',
    componentsIncluded: ['Vector Knowledge Graph Box', 'Vector Search Latency Gauge', 'Memory Decay Animation', 'Bento Cards'],
    colorTheme: 'Obsidian Dark & Neon Violet',
    previewLayout: 'bento'
  },
  {
    id: 'ai-sound-music-producer-studio',
    title: 'AI Sound Design & Synthetic Music Track Producer Studio',
    description: 'An AI music generation studio for generating background soundtracks, stem separation, tempo BPM adjustments, and royalty-free audio export.',
    fullPrompt: `Create an AI Sound Design & Synthetic Music Track Producer Studio using React, Tailwind CSS, Lucide icons, and Framer Motion.

Studio Interface:
1. Left Prompt & Genre Controls Sidebar:
   - Music Genre Chips (Lofi Chill 🎧, Cyberpunk Synthwave 🎹, Cinematic Orchestral 🎻, Ambient Techno 🔊).
   - Mood Selector (Uplifting, Melancholic, Energetic, Tense).
   - Tempo BPM Slider (60 BPM - 180 BPM) & Key Selector (C Minor, A Major).
   - "Generate Track" AI button.
2. Center DAW Multi-Track Audio Timeline:
   - Visual audio stems: Drums Track 🥁, Bassline 🎸, Melody Synth 🎹, Ambient Pads 🌊.
   - Solo / Mute toggles for each stem track and volume fader sliders.
3. Right Track Export & Licensing Panel:
   - Commercial Royalty-Free License Badge.
   - Export Stems Modal (.WAV 24-bit, .MP3 320kbps, MIDI file export).`,
    category: 'AI Agent UI',
    style: 'Dark Mode',
    techStack: ['Tailwind CSS', 'Shadcn UI', 'Framer Motion', 'Lucide Icons'],
    targetTools: ['v0', 'Cursor', 'Claude', 'Windsurf'],
    author: {
      name: 'Sound AI',
      handle: '@sound_ai',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    },
    likes: 460,
    copies: 1720,
    isFeatured: false,
    createdAt: '2025-12-05',
    componentsIncluded: ['Genre & BPM Controls', 'DAW Multi-track Waveform Timeline', 'Stem Separation Sliders', 'Audio Export Modal'],
    colorTheme: 'Dark Slate & Electric Neon Cyan',
    previewLayout: 'saas'
  }
];
