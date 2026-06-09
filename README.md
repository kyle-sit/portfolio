# Portfolio

Personal portfolio — a single-page React app showcasing professional and personal projects, skills, and an about/contact section. Dark graphite theme with a sky→blue→indigo→violet accent gradient and Space Grotesk typography.

**Live:** https://kyle-sit.github.io/portfolio/

## Stack

- React 19 + TypeScript + Vite
- Plain CSS with design tokens (CSS custom properties) — no UI framework
- Space Grotesk via Google Fonts; skill logos via the Devicon CDN
- Hosted on GitHub Pages, deployed via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:5173/portfolio/ (note the `/portfolio/` path — it matches the production base path set in [vite.config.ts](vite.config.ts)).

## Project structure

```
src/
├── main.tsx              # entry; imports index.css + the shared styles/*
├── App.tsx               # composes Navbar + sections + Footer, wires scroll-spy/reveal
├── index.css             # design tokens (:root) + global resets
├── styles/               # shared CSS: layout, reveal animation, utilities
├── components/           # reusable UI (Button, Tag, Kicker, Chip, Icon, Navbar, …)
│                         #   each as Component/Component.tsx + Component.css + index.ts
├── sections/             # page sections (Hero, Projects, Skills, About, Footer)
│                         #   section-private subcomponents live in their own subfolders
│                         #   (e.g. Projects/ProjectCard, Projects/Media, Skills/SkillItem)
├── data/                 # content: projects, skills, nav, socials, roles
├── constants/excerpts.ts # long-form blurbs (hero, subtitles, about bio, footer)
├── hooks/                # useScrollSpy, useReveal, useTypewriter
├── utils/                # media (isVideo), scroll helpers
└── assets/               # imported images (hashed at build time)

public/
├── favicon.svg
└── videos/               # project demo .mp4s (served as static files, not imported)
```

Convention: short UI strings live as `const`s at the top of each file; multi-sentence prose lives in [src/constants/excerpts.ts](src/constants/excerpts.ts).

## Editing content

Most updates are data-only — no component changes needed:

- **Projects** — [src/data/projects.ts](src/data/projects.ts)
- **Skills** — [src/data/skills.ts](src/data/skills.ts) (logos resolve from the Devicon CDN; logo-less skills fall back to a lettered chip)
- **Nav links** — [src/data/nav.ts](src/data/nav.ts) (each `id` must match a section's `id`)
- **Social links** — [src/data/socials.ts](src/data/socials.ts)
- **Hero rotating roles** — [src/data/roles.ts](src/data/roles.ts)
- **Long blurbs** — [src/constants/excerpts.ts](src/constants/excerpts.ts)

### Adding a project

Each entry in the `projects` array is one card (a single media item + title + description). Cards are grouped into **Professional** / **Personal** by `kind`.

1. Add the media:
   - **Image** — drop it in `src/assets/` and `import` it at the top of [src/data/projects.ts](src/data/projects.ts).
   - **Video** — drop the `.mp4` in `public/videos/` and reference it with the `video("name.mp4")` helper (handles the base path).
2. Add an entry to the `projects` array:

   ```ts
   {
     kind: "Professional",            // or "Personal"
     title: "Project Title",
     description: "One short paragraph.",
     media: { src: video("demo.mp4"), layout: "mobile" },  // or { src: imported, layout: "desktop" }
     tech: ["React", "TypeScript"],
     highlights: ["Bullet point shown under the description."],   // optional
     notes: ["Must be in mobile view"],                           // optional * footnotes
     liveUrl: "https://…",            // optional → "View live" button
     repoUrl: "https://…",            // optional → "Source" button
   }
   ```

   `layout: "mobile"` letterboxes the media (contained) instead of cropping; videos autoplay muted/looping.
3. Commit and push to `main` — GitHub Actions rebuilds and redeploys automatically.

## Build locally

```bash
npm run build      # tsc -b (type-check) + production build into dist/
npm run preview    # serve dist/ at http://localhost:4173/portfolio/
npm run lint       # eslint
```

## Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages.

**One-time setup** (after the first push):

1. Repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**
3. Re-run the workflow if needed (Actions tab → latest run → Re-run jobs)
