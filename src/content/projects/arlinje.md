---
title: "Årlinje: a personal timeline of history"
description: A browser-based timeline of the history you have actually encountered. Add events as you read or hear about them, tag and connect them, and see where your knowledge is dense and where the gaps are.
date: 2026-10-30
link: https://timeline.aslakhellevik.no
linkLabel: Open the app
tags: [react, typescript, vite, history, local-first]
featured: true
draft: false
---

A friend and I wanted a tool for keeping track of what we know about
history, and of the connections we see in it. Most timelines are canonical:
someone else has decided what belongs on them. We wanted a personal one,
where we could add events as we read, heard or talked about them, tag them
as we liked, and connect them as we liked. The timeline would then show us
the shape of our own knowledge: which parts of history we know best, where
the gaps are, and which connections we have drawn.

Using Claude Code, we built it as a web app:
[Årlinje](https://timeline.aslakhellevik.no), Norwegian for "year-line".

## How it works

Adding an event is one line in the capture box, `battle of lepanto 1571
#europe #war`, and Enter. Dates can be exact, a year, a range, or fuzzy
("mid-3rd century BC"). Each event also records when and where you learnt
it, so the timeline can be replayed against your own life.

Two events can be connected, and a connection carries its own note: the
argument for why the two belong together. Named eras, such as the Cold War
or your own life, are drawn as lanes under the axis.

Zoomed out, dense periods show up as mass, a density plot of what you know.
Zooming in dissolves the mass into marks and labels, and connections are
drawn as arcs over it. Filtering by tag moves the weight around, so a thin
subject stays visibly thin.

There is a demo with a synthetic timeline of 2,000 events, so you can see a
full one before starting your own.

## Private by design

Everything runs in the browser. Your timeline is stored locally, with
optional automatic backups to a folder on your own computer and a versioned
JSON export. No sign-in, no server, no analytics, and free to use. It
installs as an app and works offline.

## Stack

Vite + React + TypeScript + Tailwind, with Zustand for state, IndexedDB for
storage, a hand-written canvas renderer for the timeline, and Vitest for
tests. Deployed as a static bundle on a Cloudflare Worker.
