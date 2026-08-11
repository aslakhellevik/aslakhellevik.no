# aslakhellevik.no

Personal site for Aslak Hellevik. Astro + Tailwind v4, static-site generated, deployed to Cloudflare.

## Quick start

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → ./dist/
npm run preview  # preview the production build locally
```

## Repo layout

```
src/
├── pages/                 # routes (file-based)
│   ├── index.astro        # home
│   ├── about.astro
│   ├── contact.astro
│   ├── services.astro
│   ├── 404.astro
│   ├── blog/              # blog index + [...slug].astro
│   └── projects/          # projects index + [...slug].astro
├── content/               # Astro Content Collections
│   ├── blog/              # *.md posts
│   └── projects/          # *.md case studies
├── layouts/
│   └── BaseLayout.astro   # shared <html>, header, footer, page backdrop
├── components/
│   ├── Header.astro       # nav, search trigger, theme toggle, Penrose star
│   ├── Footer.astro
│   ├── ThemeToggle.astro
│   ├── PageBackdrop.astro # routes to a backdrop variant
│   ├── backdrops/         # one .astro file per motif (contour, penrose)
│   ├── Icon.astro         # inline SVG icon set
│   ├── IconBadge.astro    # accent-tinted chip wrapping an Icon
│   ├── HatTile.astro      # 404-only easter egg
│   └── *.ts               # iconTypes, backdropTypes
├── styles/
│   └── global.css         # CSS variables, fonts, base styles
└── consts.ts              # SITE, NAV_LINKS, SOCIAL_LINKS, WORK, EDUCATION
```

## Design system

The full visual specification lives in `DESIGN.md`. Highlights:

- **Two backdrop motifs**, page-wide fixed SVG: `contour` / `contour-soft` (topographic lines, softened variant for writing surfaces) and `penrose` (P3 rhombus tiling for technical pages). A `none` escape hatch is also available. Picked per page via `<BaseLayout backdrop="...">`.
- **Warm horizon glow** at top + bottom of every page in the accent color.
- **One accent color** (amber). No secondary accents.
- **Two type families**: Inter for UI, Newsreader (serif) for article prose.
- **Light + dark mode** via CSS custom properties + a `.dark` class on `<html>`. Pre-paint script in `<head>` avoids FOUC.

When extending the design, read `DESIGN.md` first.

## Adding content

**Blog post:** create `src/content/blog/<slug>.md` with frontmatter:

```yaml
---
title: Post title
date: 2026-04-21
description: One-line description for meta + listing.
tags: [tag1, tag2]
draft: false
---
```

**Project:** create `src/content/projects/<slug>.md` with frontmatter:

```yaml
---
title: Project title
description: One-line description.
date: 2026-02-23
link: https://example.com  # optional
repo: https://github.com/...  # optional
tags: [tag1]
featured: false
draft: false
---
```

`date` is a real date, not a year string — projects sort by it (newest first) and
render as "February 2026". Drafts (`draft: true`) are excluded from the build.
`featured` is declared in the schema but not yet read by any page.

## Deployment

Static site, ships from `./dist/`. Pagefind search index is generated as part of `npm run build`. Currently deployed to Cloudflare (see `CONTEXT.md` for infrastructure details).

## Operational context

`CONTEXT.md` (gitignored) holds the project goals, infrastructure state, and pre-launch checklist. Read it before launch-adjacent work.

## Stack

- [Astro](https://docs.astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — utility CSS
- [Pagefind](https://pagefind.app) — full-text search at build time
- [Bunny Fonts](https://fonts.bunny.net) — GDPR-friendly Google Fonts mirror
- TypeScript (strict)
