---
title: Personal webpage
description: This site — Astro + Tailwind, statically generated, deployed to Cloudflare. Hand-coded with Claude Code as a pair programmer.
year: "2026"
repo: https://github.com/AslakH/aslakhellevik.no
tags: [astro, tailwind, cloudflare, design]
featured: true
---

The site you're reading. A small, hand-coded personal webpage that doubles as a place to write, list projects, and point people at consulting and teaching.

## Stack

- **Astro** for static-site generation. Zero JavaScript on most pages by default.
- **Tailwind CSS v4** for styling, with a small set of CSS custom properties driving light/dark theming.
- **TypeScript** (strict) and Astro Content Collections for the blog and projects.
- **Pagefind** for client-side search, indexed at build time.
- **Shiki** dual themes for code blocks; **KaTeX** for math.
- **Cloudflare** for hosting, served as static assets via Wrangler.
- Fonts via **Bunny Fonts** (GDPR-friendly Google Fonts mirror): Inter for UI, Newsreader for article prose.

## Design

Two backdrop motifs render as fixed, page-wide SVG: a **Penrose** rhombus tiling on technical pages (home, projects, services), and a **contour** topographic pattern on the more personal pages (about, writing, contact, 404). Both share a single warm-amber horizon glow at the top and bottom of the viewport, so the palette stays restrained — one accent, no secondary colors.

The header carries a small Penrose star as a brand mark. The 404 page hides a small patch of the 2023 Hat aperiodic monotile as an easter egg. The full design specification lives in `DESIGN.md` in the repo.

## Built with Claude Code

The codebase was written incrementally over a few months in pair-programming sessions with [Claude Code](https://claude.com/claude-code), Anthropic's terminal-based coding assistant. I kept creative control of the structure, design, and tone — Claude wrote most of the boilerplate, the SVG geometry, and a lot of the smaller Astro components, with me reviewing, redirecting, and rewriting as needed.

It is, in part, a working artifact of the kind of AI-assisted building I consult and teach about.

## What's next

Mostly content — more writing, real project case-studies, and the inevitable small tweaks that show up once a site is actually used. The repo is public for anyone curious about the implementation details.
