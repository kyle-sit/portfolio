export interface Project {
  title: string;
  summary: string;
  images: string[];
  tech: string[];
  layout?: "desktop" | "mobile";
  liveUrl?: string;
  repoUrl?: string;
}