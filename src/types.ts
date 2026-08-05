export type PromptCategory = 
  | 'Dashboard' 
  | 'Landing Page' 
  | 'SaaS' 
  | 'Dark Mode' 
  | 'Minimalist' 
  | 'E-commerce' 
  | 'Mobile App' 
  | 'Portfolio' 
  | 'AI Agent UI' 
  | 'Analytics'
  | 'Bento Grid'
  | 'FinTech';

export type DesignStyle = 
  | 'Minimalist' 
  | 'Glassmorphism' 
  | 'Cyberpunk Neon' 
  | 'Obsidian Dark' 
  | 'Bento Grid' 
  | 'Neumorphic' 
  | 'Gradient Accent' 
  | 'Retrowave Tech'
  | 'SaaS Modern'
  | 'Dark Mode'
  | 'Cyberpunk'
  | 'Neubrutalism'
  | 'Bento';

export type TechStackItem = 
  | 'Tailwind CSS' 
  | 'Shadcn UI' 
  | 'Framer Motion' 
  | 'Lucide Icons' 
  | 'Recharts' 
  | 'Radix UI' 
  | 'TypeScript' 
  | 'Next.js';

export type TargetTool = 'v0' | 'Cursor' | 'Bolt.new' | 'Claude' | 'Windsurf';

export interface Author {
  name: string;
  avatar: string;
  handle: string;
}

export interface UIPrompt {
  id: string;
  title: string;
  description: string;
  fullPrompt: string;
  category: PromptCategory;
  style: DesignStyle;
  techStack: TechStackItem[];
  targetTools: TargetTool[];
  author: Author;
  likes: number;
  copies: number;
  isFeatured?: boolean;
  createdAt: string;
  componentsIncluded: string[];
  colorTheme: string;
  previewLayout: 'dashboard' | 'landing' | 'saas' | 'ecommerce' | 'mobile' | 'ai_chat' | 'bento' | 'portfolio' | 'analytics' | 'generic';
}

export interface PromptBuilderConfig {
  interfaceType: string;
  designStyle: DesignStyle;
  techStack: TechStackItem[];
  components: string[];
  colorTheme: string;
  targetTool: TargetTool;
  customInstructions: string;
}
