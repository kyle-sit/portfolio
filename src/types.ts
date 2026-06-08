export interface MediaItem {
  src: string;
  layout: "desktop" | "mobile";
}

export interface Project {
  kind: "Professional" | "Personal";
  title: string;
  description: string;
  media: MediaItem;
  tech: string[];
  highlights?: string[];
  notes?: string[];
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
