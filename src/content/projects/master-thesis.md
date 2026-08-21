---
title: "Master's thesis: Network Effects of Social Media Use on Well-Being"
description: My UiO master's thesis — agent-based models show standard causal estimators fail under network effects; the CoMO structural model and its estimators recover the truth.
date: 2026-05-15
link: https://nva.sikt.no/registration/019fdb8244e4-e2b85e96-eac5-46e1-a84f-bf7f265abef4
repo: https://github.com/aslakhellevik/master-thesis-code
tags: [statistics, econometrics, python, research]
featured: true
---

Most research on social media use and wellbeing ignores that people affect
each other. My thesis shows, using agent-based simulation, that OLS, panel
fixed effects, and even RCTs give biased causal estimates when networked
dynamics are present — and develops a structural model that does not.

The **recursive CoMO model** formalises the “cost of missing out” as a
non-linear peer-comparison term: your wellbeing depends both on your own
social media use and on how it compares with your peers’. I derive maximum
likelihood estimators with analytical Hessians and a two-stage least squares
estimator, and Monte Carlo simulations show low bias and near-nominal
confidence interval coverage.

The model then extends to the **simultaneous CoMO model**, with feedback from
wellbeing back to social media use. Banach’s fixed-point theorem gives
existence and uniqueness of the equilibrium, and a full information maximum
likelihood estimator is validated in an initial Monte Carlo study.

Everything is open: the
[published PDF](https://nva.sikt.no/registration/019fdb8244e4-e2b85e96-eac5-46e1-a84f-bf7f265abef4),
the [code](https://github.com/aslakhellevik/master-thesis-code) (MIT) that
reproduces every figure and table, and the
[LaTeX source](https://github.com/aslakhellevik/master-thesis-latex)
(CC-BY-4.0).
