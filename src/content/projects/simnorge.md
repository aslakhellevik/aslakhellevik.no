---
title: "SimNorge: practice tool for utdanningsvalg"
description: A practice tool for utdanningsvalg, the careers subject in Norwegian lower secondary school. Simulates common Norwegian public services so pupils can practise the practical tasks of adult life.
date: 2026-08-01
link: https://simnorge.aslakhellevik.no
tags: [react, typescript, vite, education, norwegian]
featured: true
draft: false
---

Many complain about never learning practical skills in school. When Norwegian
pupils finish ungdomsskolen (lower secondary, 8th–10th grade), they are able
to discuss the national budget, but do not know how to pay an invoice.
SimNorge provides a practice environment for the practical skills Norwegian
adults actually use.

This is done in a simulated browser where tabs are clean, deliberately fake
copies of Norwegian public services. The whole site is in Norwegian, with a
toggle between bokmål and nynorsk.

## How it works

To practise using the simulations, a pupil first generates a fictional
persona. This creates all the (fake) information needed for the simulations: a
name, an address, a bank account with some money on it, and two unpaid bills.
The pupil then proceeds through nine missions, from paying a dentist bill
before the deadline to writing a job application.

Missions are validated based on application state, so any route to the right
outcome counts. Every completed mission ends with a note about how the
simulation maps onto the real-world service.

## Seven simulated services and a shared login

- **SimBank** — online banking with real KID and account-number validation,
  simulating the KID-or-message rule actual banks use.
- **SimID** — a BankID-style login shared across services, including the
  reference check that teaches the anti-phishing habit: *make sure the words
  on the phone match the screen before you approve.*
- **SimHelse** — booking with your fastlege, plus the Norwegian triage:
  fastlege vs legevakt 116 117 vs 113.
- **SimTann** — a private dental clinic with no login, deliberately shaped
  differently from the public services to fit the simulated environment.
- **SimSkatt** — frikort or skattekort, depending on expected income.
- **SimLån** — the equipment grant application, prefilled from your school
  application in SimVigo.
- **SimVigo** — applying to upper secondary school, with priority order.
- **SimJobb** — three part-time listings, a mini-CV builder, and an
  application with a self-check list.

## Design decisions

**Clearly fake, on purpose.** The site always makes it clear that it is a fake
simulation environment. Every generated national identity number is synthetic,
using Skatteetaten's test-data convention of adding 80 to the month.

**No backend, no accounts, no tracking.** The site is a static bundle, and all
progress lives in the browser's own storage, with a single button clearing it.
Thus, there are no data-protection concerns.

## Stack

Vite + React + TypeScript + Tailwind, with Zustand for state and Vitest for
tests.
