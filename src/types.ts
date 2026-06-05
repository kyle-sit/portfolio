export interface MediaItem {
  src: string;
  layout: "desktop" | "mobile";
  title?: string;
  description?: string;
}

export interface Project {
  kind: "Professional" | "Personal";
  title: string;
  summary: string;
  media: MediaItem[];
  tech: string[];
  highlights?: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  glyph: "github" | "linkedin" | "mail";
}

export interface SkillItem {
  name: string;
  icon?: string;
  mono?: boolean;
  text?: boolean;
}

export interface SkillCategory {
  cat: string;
  items: SkillItem[];
}
