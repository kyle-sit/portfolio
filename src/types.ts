export interface MediaItem {
  src: string;
  layout: "desktop" | "mobile";
  title?: string;
  description?: string;
}

export interface Project {
  title: string;
  summary: string;
  media: MediaItem[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}
