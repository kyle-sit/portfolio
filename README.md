# Portfolio

Personal portfolio site — single-page React app showcasing projects.

**Live:** https://kyle-sit.github.io/portfolio/

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Hosted on GitHub Pages, deployed via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:5173/portfolio/ (note the `/portfolio/` path — it matches the production base path).

## Adding a project

1. Drop a screenshot in `src/assets/` (e.g. `my-project.png`).
2. Edit [src/data/projects.ts](src/data/projects.ts) — import the screenshot and add an entry to the `projects` array.
3. Commit and push to `main`. GitHub Actions rebuilds and redeploys automatically.

## Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages.

**One-time setup** (after the first push):

1. Go to the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**
3. Re-run the workflow if needed (Actions tab → latest run → Re-run jobs)

## Build locally

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ at http://localhost:4173/portfolio/
```
