---
title: Agricola card statistics
description: A progressive web app for looking up card statistics in my favourite board game, Agricola.
date: 2026-02-23
link: https://agri-stat-displayer.aslakhellevik2002.workers.dev
repo: https://github.com/aslakhellevik/agri_stat_displayer
tags: [react, typescript, vite, pwa, board-games]
featured: false
---

A small installable web app for Agricola players who want to look up a card by name or text, see the metadata (cost, edition, type, player count), and check per-card statistics from one of a few playable datasets. Built phone-first; works offline once installed.

## What's in it

- **Card search** across a snapshot of card metadata from [AgricolaCards](https://www.agricolacards.com/get-cards) — name, text, cost, edition, type.
- **Dataset switcher** between the metadata snapshot and a play-record dataset from [Agricola Norge](https://agricola.no/), with per-card play rate and ADP/PWR statistics where available.
- **Hand-strength panel** showing a precomputed Monte Carlo baseline of opening-hand strength for the 4-player Agricola Norge dataset.
- **Offline-capable PWA** via Workbox; datasets and baselines are cached on first load.

## Stack

- **Vite + React + TypeScript** with **Zod** for runtime dataset validation.
- **vite-plugin-pwa** for the service worker and installable manifest.
- **Vitest** for unit tests covering the ingest scripts and search logic.
- **Cloudflare Workers** for hosting (static assets binding); deploys via Wrangler.

## Data pipeline

A small set of TypeScript scripts (`scripts/`) fetch and validate snapshots from the upstream sources, with a manual import path for BoardGameGeek and CSV templates. Each shipped dataset carries an explicit `licenseNote` field declaring whether it has been approved for redistribution. Generation is reproducible — `DATASET_GENERATED_AT` pins manifest timestamps for deterministic output.

## Why

I play a fair amount of Agricola, and an offline-capable lookup tool with stats was something my playgroup wanted. The project also served as an excuse to practice end-to-end PWA work (Vite + Workbox + dataset validation + cached offline content) on a small, self-contained problem.
