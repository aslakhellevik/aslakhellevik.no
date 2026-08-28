---
title: Personal webpage
description: The project behind this webpage, and its design decisions. Astro + Tailwind, statically generated, deployed to Cloudflare.
date: 2026-08-11
repo: https://github.com/aslakhellevik/aslakhellevik.no
tags: [astro, tailwind, cloudflare, design]
featured: true
---

I made this personal site to have a place to write, list projects, and point people to when they ask about my consulting. This project page covers the site and the design decisions behind it. The repo is public if you are interested in taking a look. The code and design are [MIT-licensed](https://github.com/aslakhellevik/aslakhellevik.no/blob/main/LICENSE), so feel free to borrow or take inspiration; the writing and images are not, and should not be copied without asking. I built the site incrementally with Claude Code. Below are some details on the implementation and the design.

## Stack

Astro is used for static generation, and most pages contain zero JavaScript. Tailwind CSS v4 with a small set of custom properties drives the light and dark theming. Astro Content Collections handles writing and projects. Pagefind indexes the site for client-side search at build time; Shiki handles code blocks and KaTeX the maths. The site is hosted on Cloudflare as static assets. Fonts come from Bunny Fonts, a GDPR-friendly Google Fonts mirror.

## Design

Two backdrop motifs are rendered as fixed, page-wide SVGs: a **Penrose** rhombus tiling on technical pages (home, projects, services), and a **contour** topographic pattern on the more personal pages (about, writing, contact, 404). Both share a single warm-amber horizon glow at the top and bottom of the viewport.

The header carries a small Penrose star as a brand mark. The 404 page hides a patch of the 2023 Hat aperiodic monotile as an easter egg. The full design specification lives in `DESIGN.md` in the repo.
