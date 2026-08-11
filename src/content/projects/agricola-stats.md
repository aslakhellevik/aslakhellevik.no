---
title: Agricola card statistics
description: A progressive web app for looking up card statistics in my favourite board game, Agricola.
date: 2026-02-23
link: https://agri-stat-displayer.aslakhellevik2002.workers.dev
repo: https://github.com/aslakhellevik/agri_stat_displayer
tags: [react, typescript, vite, pwa, board-games]
featured: false
---

Agricola is a strategy board game about building a farm. I have been playing it semi-regularly for the last few years, and also enjoy participating in tournaments hosted by the community. It has a large set of cards that are essential to play, and being able to view card statistics easily is helpful — especially when trying to improve. So I made a small installable web app which displays card information along with useful statistics. It is built for phone use, but also works well on a laptop.

## Features

- **Card search** over a snapshot of card metadata from [AgricolaCards](https://www.agricolacards.com/get-cards): name, text, cost, edition, and type.
- **Dataset switcher.** The metadata snapshot carries full card text; the [Agricola Norge](https://agricola.no/) play records carry per-card play rate and ADP/PWR. You choose which you are looking at.
- **Hand-strength panel** with a precomputed Monte Carlo baseline for opening hands in the 4-player Agricola Norge data.
- **Works offline.** Workbox caches the datasets and baselines on first load.

## Stack

Vite, React, and TypeScript. Zod validates every dataset at runtime. vite-plugin-pwa handles the service worker and the installable manifest, and Vitest covers the ingest scripts and the search logic. Hosted on Cloudflare Workers via Wrangler.

## Data pipeline

A small set of TypeScript scripts fetch and validate snapshots from the upstream sources, with a manual import path for BoardGameGeek and CSV templates.
