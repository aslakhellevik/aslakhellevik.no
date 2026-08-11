---
title: Personal webpage
description: This site, and the design decisions behind it. Astro + Tailwind, statically generated, deployed to Cloudflare.
date: 2026-04-21
repo: https://github.com/aslakhellevik/aslakhellevik.no
tags: [astro, tailwind, cloudflare, design]
featured: true
---

The site you're reading. A small, hand-coded personal webpage that doubles as a place to write, list projects, and point people at consulting work.

## Stack

Astro for static generation, with zero JavaScript on most pages. Tailwind CSS v4 with a small set of custom properties driving light and dark theming, TypeScript in strict mode, and Astro Content Collections for the blog and projects. Pagefind indexes the site for client-side search at build time; Shiki handles code blocks and KaTeX the maths. Hosted on Cloudflare as static assets, with fonts from Bunny Fonts — a GDPR-friendly Google Fonts mirror.

## Design

Two backdrop motifs render as fixed, page-wide SVG: a **Penrose** rhombus tiling on technical pages (home, projects, services), and a **contour** topographic pattern on the more personal pages (about, writing, contact, 404). Both share a single warm-amber horizon glow at the top and bottom of the viewport, so the palette stays restrained — one accent, no secondary colours.

The header carries a small Penrose star as a brand mark. The 404 page hides a patch of the 2023 Hat aperiodic monotile as an easter egg. The full design specification lives in `DESIGN.md` in the repo.

## Built with Claude Code

Written incrementally over a few months with [Claude Code](https://claude.com/claude-code), following roughly the workflow described on the projects page. I kept creative control of structure, design and tone, reviewing and redirecting as it went.
