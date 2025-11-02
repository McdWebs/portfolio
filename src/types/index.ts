export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon?: string;
  category?: string;
}
