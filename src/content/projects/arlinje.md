---
title: "Årlinje: a personal timeline"
description: A browser-based timeline of the history you have actually encountered. Entries can be connected, and you can see where your knowledge gaps are.
date: 2026-10-30
link: https://timeline.aslakhellevik.no
linkLabel: Open the app
repo: https://github.com/aslakhellevik/timeline
tags: [react, typescript, vite, history, local-first]
featured: true
draft: false
---

My friend Eivind Hjertholm and I wanted a tool to track our knowledge of history, and the
connections we see in it. We wanted a personal timeline where we could add
events as we read, heard about, or discussed them, tag them as we liked, and
connect them as we liked. The timeline would then give a nice visual
representation of our personal historical knowledge and the connections we
have drawn.

Using Claude Code, we built this as a web app:
[Årlinje](https://timeline.aslakhellevik.no).

## How it works

Events are added by writing single lines with event + date, and the date is
automatically detected. Each event can be tagged, and can contain a note of
where and when you learnt it. Named eras (such as a world war) can also be
added, and are visually distinct. Two events can be connected, with the
option to add a note on why. Zoomed out, the timeline shows the density of
events added, and shows connections as arcs drawn over it. The view can be
filtered by tags.

There is a [demo](https://timeline.aslakhellevik.no/?demo) with a synthetic
timeline of 2,000 events to show how it can look after a lot of use.

The app runs in the browser for free, with no sign-in. Data is stored
locally, with optional automatic backups to a folder on your own computer.

## Stack

Vite + React + TypeScript + Tailwind, with Zustand for state, IndexedDB for
storage, a canvas renderer for the timeline, and Vitest for tests. Deployed
as a static bundle on a Cloudflare Worker.
