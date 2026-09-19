export interface ProfileData {
  name: string;
  headline: string;
  subheadline: string;
  summary: string;
  location: string;
  academicLocation: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  statusBadge: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    badge?: string;
    icon?: string;
  }[];
}

export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  technologies: string[];
  keyFeatures: string[];
  challenges: string[];
  solution: string;
  outcome: string;
  futureImprovements: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI / ML' | 'Frontend' | 'All';
  description: string;
  role: string;
  status: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  highlights: string[];
  caseStudy: ProjectCaseStudy;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  grade: string;
  period?: string;
  description: string;
  courseworkHighlights: string[];
}
