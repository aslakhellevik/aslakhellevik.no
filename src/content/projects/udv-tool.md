---
title: SimNorge — practice environment for utdanningsvalg
description: A browser full of clearly-fake Norwegian public services where lower-secondary pupils practise paying a bill with KID, logging in with an electronic ID, booking a doctor, and applying to upper secondary.
date: 2026-08-01
link: https://udv-tool.aslakhellevik2002.workers.dev
tags: [react, typescript, vite, education, norwegian]
featured: false
draft: true
---

Norwegian pupils leave ungdomsskolen able to discuss the national budget but
often unsure how to pay an invoice. **SimNorge** is a practice environment for
*utdanningsvalg* (8.–10. trinn): a simulated browser whose tabs are clean,
deliberately fake copies of the services every Norwegian adult has to use.

Everything is in Norwegian — bokmål and nynorsk, switchable from the address
bar — because the audience is a Norwegian classroom.

## How it works

Each pupil gets a fictional persona: a name, an address, a bank account with
2 450 kr on it, and two unpaid bills. From there they work through nine
**oppdrag** — pay the 850 kr dentist bill before the deadline, book a doctor's
appointment, order a frikort before a summer job, apply to videregående with
prioritised choices, write a job application.

Tasks are validated against application state rather than a click-path, so any
route that reaches the right outcome counts. Every oppdrag ends with an
«I virkeligheten» note mapping the practice flow onto the real service:
where it lives, what is identical, and what differs.

## The seven services

- **SimBank** — online banking with real mod-10 KID and mod-11 account-number
  validation, and the KID-or-message rule actual banks enforce.
- **SimID** — a BankID-style login shared across services, including the
  two-word reference check that teaches the core anti-phishing habit: *make
  sure the words on the phone match the screen before you approve.*
- **SimHelse** — booking with your fastlege, plus the triage every Norwegian
  needs: fastlege vs legevakt 116 117 vs 113.
- **SimTann** — a private dental clinic with no login, deliberately shaped
  differently from the public services.
- **SimSkatt** — frikort or skattekort, depending on expected income.
- **SimLån** — the equipment grant wizard, prefilled from your school
  application.
- **SimVigo** — applying to upper secondary, with binding priority order.
- **SimJobb** — three part-time listings, a CV builder, and an application
  with a self-check list.

## Design decisions

**Clearly fake, on purpose.** Fake `Sim`-prefixed brands, addresses on a
non-existent `.øving` domain, and a permanent warning banner. Every generated
national identity number is *synthetic* — the month has 80 added to it, the
convention Skatteetaten uses for test data — so a number can never belong to a
real person.

**No backend, no accounts, no tracking.** The whole thing is a static bundle;
progress lives in the browser's own storage and a single button wipes it. That
is partly architecture and partly the point: a tool that collects nothing is
one a kommune can approve without a data-protection assessment.

## Stack

Vite + React + TypeScript + Tailwind, with Zustand for state and Vitest for
tests — 313 of them, including a check that drives every oppdrag to completion
through state changes alone, and a guard that fails the build if any bokmål
word survives in the nynorsk text.
