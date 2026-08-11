---
title: Personal webpage
description: This site, and the design decisions behind it. Astro + Tailwind, statically generated, deployed to Cloudflare.
date: 2026-04-21
repo: https://github.com/aslakhellevik/aslakhellevik.no
tags: [astro, tailwind, cloudflare, design]
featured: true
---

I wanted to make a personal site to have a place to write, list projects, and point people at my consulting services. This project page covers the site and the design decisions behind it, and the repo is public if you are interested. Feel free to borrow or take inspiration from elements of the site. I built the site incrementally with Claude Code. Below are some details on the implementation and the design.

## Stack

Astro is used for static generation; most pages contain zero JavaScript. Tailwind CSS v4 with a small set of custom properties drives the light and dark theming. Astro Content Collections handles the blog and projects. Pagefind indexes the site for client-side search at build time; Shiki handles code blocks and KaTeX the maths. The site is hosted on Cloudflare as static assets. Fonts come from Bunny Fonts, a GDPR-friendly Google Fonts mirror.

## Design

Two backdrop motifs render as fixed, page-wide SVG: a **Penrose** rhombus tiling on technical pages (home, projects, services), and a **contour** topographic pattern on the more personal pages (about, writing, contact, 404). Both share a single warm-amber horizon glow at the top and bottom of the viewport.

The header carries a small Penrose star as a brand mark. The 404 page hides a patch of the 2023 Hat aperiodic monotile as an easter egg. The full design specification lives in `DESIGN.md` in the repo.
