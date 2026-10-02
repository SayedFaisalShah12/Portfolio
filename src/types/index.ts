export interface Project {
  id: string;
  name: string;
  category: 'Agentic AI' | 'Generative AI / SaaS' | 'Machine Learning' | 'AI / Aviation' | 'AI / Anomaly Detection' | 'Deep Learning / Audio' | 'Machine Learning / Recommendation' | 'Computer Vision';
  description: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  featured: boolean;
  tagline?: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  badgeColor: string;
}

export interface JourneyMilestone {
  period: string;
  stage: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  tools: string[];
}
