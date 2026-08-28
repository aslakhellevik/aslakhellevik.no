---
title: "Master's thesis: Network Effects of Social Media Use on Well-Being"
description: My master's thesis from UiO. I use agent-based models to show that standard estimators are biased by network effects, and develop the CoMO structural model as a solution.
date: 2026-05-15
link: https://nva.sikt.no/registration/019fdb8244e4-e2b85e96-eac5-46e1-a84f-bf7f265abef4
repo: https://github.com/aslakhellevik/master-thesis-code
tags: [statistics, econometrics, python, research]
featured: true
---

Most research on social media use and wellbeing ignores network effects: that
people affect each other. Using agent-based models, my thesis shows that OLS,
panel fixed effects, and even RCTs give biased causal estimates when networked
dynamics are present.

To model network effects I develop the **recursive CoMO model**, which
formalises the “cost of missing out” as a non-linear peer-comparison term:
your wellbeing depends both on your own social media use and on how it
compares with your peers’. I derive maximum likelihood estimators with
analytical Hessians and a two-stage least squares estimator, and use Monte
Carlo simulations to show that my estimators have low bias and near-nominal
confidence-interval coverage.

I then extend the model to the **simultaneous CoMO model**, with feedback from
wellbeing back to social media use. Using Banach’s fixed-point theorem I show
existence and uniqueness of the equilibrium, and derive a full information
maximum likelihood estimator, validated in an initial Monte Carlo study.

The content of my thesis is open to use: the
[published PDF](https://nva.sikt.no/registration/019fdb8244e4-e2b85e96-eac5-46e1-a84f-bf7f265abef4),
the [code](https://github.com/aslakhellevik/master-thesis-code) (MIT) that
produces every figure and table, and the
[LaTeX source](https://github.com/aslakhellevik/master-thesis-latex)
(CC-BY-4.0).
