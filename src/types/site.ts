export type LinkSet = {
  github?: string;
  demo?: string;
  documentation?: string;
  caseStudy?: string;
};

export type ProjectVideo = {
  title: string;
  description: string;
  embedUrl: string;
};

export type Project = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  description?: string;
  problem: string;
  solution: string;
  pipeline: string[];
  technologies: string[];
  results: string[];
  metrics?: string[];
  metricsTitle?: string;
  videos?: ProjectVideo[];
  links?: LinkSet;
  featured?: boolean;
  status?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  results?: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};
