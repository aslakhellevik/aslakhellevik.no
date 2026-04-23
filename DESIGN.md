# DESIGN.md — aslakhellevik.no

Portable design system specification for Aslak Hellevik's personal site. Written in the `awesome-claude-design` format so the system can be reused on related surfaces (Substack landing, project micro-sites, future pages) with visual consistency.

---

## 1. Visual Theme

A **hybrid minimal-modern / editorial** aesthetic for a personal site combining consulting, projects, and long-form writing. Two related modes coexist:

- **Default mode** — landing, about, projects index, services, contact, blog index. Minimal-modern: text-forward, generous whitespace, restrained typography, warm neutral palette with a single amber accent. Reads as contemporary and considered without shouting.
- **Article mode** — individual blog posts and project case studies. Editorial: serif body, narrower reading column (~65ch), larger base size, generous line-height. Reads as a real magazine article, not product marketing.

Reference points: leerob.io, brianlovin.com (minimal-modern); theshamblog.com, waitbutwhy.com (editorial).

Character: warm, considered, quiet. Never corporate, never playful, never loud. Typography and whitespace do the work; decoration is absent on purpose.

---

## 2. Colors

All colors are CSS custom properties swappable via a `.dark` class on `<html>`. Exposed as Tailwind v4 utilities through `@theme inline` (`bg-bg`, `text-fg`, `text-muted`, `text-accent`, `bg-surface`, `border-border-subtle`).

### Light mode

| Token              | Value      | Role                                      |
| ------------------ | ---------- | ----------------------------------------- |
| `--bg`             | `#fafaf9`  | Page background (warm off-white, stone-50)|
| `--fg`             | `#1c1917`  | Body text (warm near-black, stone-900)    |
| `--muted`          | `#57534e`  | Secondary text, meta, captions (stone-600)|
| `--subtle`         | `#78716c`  | Tertiary / placeholder (stone-500)        |
| `--accent`         | `#b45309`  | Links, active states, selection (amber-700)|
| `--surface`        | `#f5f5f4`  | Card/box backgrounds (stone-100)          |
| `--border-subtle`  | `#e7e5e4`  | Hairlines, dividers (stone-200)           |

### Dark mode

| Token              | Value      | Role                                      |
| ------------------ | ---------- | ----------------------------------------- |
| `--bg`             | `#0c0a09`  | Page background (stone-950)               |
| `--fg`             | `#f5f5f4`  | Body text (stone-100)                     |
| `--muted`          | `#a8a29e`  | Secondary text (stone-400)                |
| `--subtle`         | `#78716c`  | Tertiary (stone-500)                      |
| `--accent`         | `#fbbf24`  | Links (amber-400, lifted for contrast)    |
| `--surface`        | `#1c1917`  | Cards (stone-900)                         |
| `--border-subtle`  | `#292524`  | Hairlines (stone-800)                     |

### Palette character

Warm neutrals (**stone** family, not slate — a touch of warmth in the grey) plus a single amber accent. The amber should feel like leather or turmeric, not orange juice.

Mode detection: respect `prefers-color-scheme` on first paint, then persist user toggle to `localStorage.theme`. An inline `<script>` in `<head>` applies the `.dark` class pre-paint to avoid FOUC.

---

## 3. Typography

Two families, loaded from Bunny Fonts (GDPR-friendly Google Fonts mirror):

- **Inter** — UI chrome, navigation, default-mode headings and body. Weights: 400, 500, 600, 700.
- **Newsreader** — Article body, article `<h1>`. Weights: 400, 400i, 600, 600i.

System fallbacks:

```
--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--font-serif: "Newsreader", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
```

### Scale — default mode

| Element  | Size                   | Weight | Tracking       | Family |
| -------- | ---------------------- | ------ | -------------- | ------ |
| `h1`     | 1.875rem → sm:2.25rem  | 600    | tight (-0.02em)| sans   |
| `h2`     | 1.5rem                 | 600    | tight          | sans   |
| Eyebrow  | 0.875rem, uppercase    | 500    | widest         | sans   |
| Body     | 1rem                   | 400    | normal         | sans   |
| Meta     | 0.875rem, muted        | 400    | normal         | sans   |

### Scale — article mode

| Element  | Size                     | Weight | Family | Notes                   |
| -------- | ------------------------ | ------ | ------ | ----------------------- |
| `h1`     | 2.25rem → sm:3rem        | 600    | serif  | leading-[1.1]           |
| `h2`     | 1.5rem                   | 600    | sans   | margin-top 2em          |
| `h3`     | 1.25rem                  | 600    | sans   |                         |
| `h4`     | 1.1rem                   | 600    | sans   |                         |
| Body     | 1.175rem, line-height 1.7| 400    | serif  | hyphens: auto           |
| Quote    | italic, muted            | 400    | serif  | left-border accent, 3px |
| Code     | 0.92em, monospace        | 400    | mono   | bg-border-subtle, radius 3px|

### Details

- **Link style:** `text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px;` → hover: thickness 2px. Color is `--accent` in all contexts.
- **Selection:** `::selection { background: var(--accent); color: var(--bg); }`
- **Rendering:** `-webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility`.

---

## 4. Components

A deliberately small component set. Don't add more without justification.

### Header
Max-width 4xl, `border-b border-border-subtle`. Name (links to `/`) on left — full `SITE.name` at `sm:` and up, initials `"AH"` below `sm:` to keep the bar fitting on narrow viewports. `aria-label` on the brand link preserves the full name for assistive tech. Nav links are `text-sm`, muted when inactive, `text-accent` when active. Theme toggle at far right. No hamburger — if nav outgrows the bar, shrink the name or reduce links, don't hide them.

### Footer
Mirror of header: `border-t`, max-w-4xl. Copyright left, social links right.

### ThemeToggle
16px sun/moon SVG icon. Toggles `.dark` class on `<html>`, persists to `localStorage.theme`. Initial state set by inline pre-paint script.

### Link
Inline, amber, underlined. Always visible underline (no "underline on hover" — reduces affordance). No pill/button styling unless it's a genuine CTA.

### Card / "surface box"
`bg-surface rounded-lg p-7`. **No border**, no shadow. Used for discrete list items where visual separation helps scannability (services blocks, projects index cards). Do not use on landing, about, blog bodies.

### Section eyebrow
`text-sm font-medium uppercase tracking-widest text-muted`. For secondary section headings (Work, Education, Recent writing). Distinct from primary `<h1>`/`<h2>` typography.

### Divide list
`<ul class="divide-y divide-border-subtle">` with each `<li>` a flex row: primary label left, meta (role · period, description · year) right. Stacks vertically on mobile. Used on about page for Work, Projects, Education.

### Article container
`<article class="py-12 mx-auto max-w-[65ch]">` wraps post bodies. Inner body gets class `.article` which applies the editorial styles (serif, line-height, margins between elements).

---

## 5. Layout

### Container widths

| Name     | Class            | Width       | Used for                                      |
| -------- | ---------------- | ----------- | --------------------------------------------- |
| Default  | `max-w-2xl`      | 672px       | Landing, about (narrow), blog index, services, contact, projects index |
| Wide     | `max-w-4xl`      | 896px       | Header, footer, about (photo + bio grid), project detail, blog post detail |
| Reading  | `max-w-[65ch]`   | ~570px      | Article prose body (inside wide container)    |

### Spacing

- Horizontal padding: `px-6` everywhere, all viewports.
- Section vertical rhythm: `py-12` or `py-16`.
- Card lists: `space-y-5`.
- Compact lists: `space-y-3`.
- All containers centered with `mx-auto`.

### Primitives

- Only grid and flex. Never absolute positioning.
- No float, no negative margins.
- No horizontal scrolling at any viewport.

---

## 6. Depth / Shadows

**None.** The system is flat by design. Separation comes from:

- Hairline borders (`--border-subtle`)
- Background tints (`--surface` vs `--bg`)
- Whitespace

Do not introduce `box-shadow`, elevation layers, `backdrop-filter`, or drop shadows on images. A shadow is a signal the system has been corrupted.

Image corners: `rounded-md` (portraits) or `rounded-lg` (cards). Never circular unless semantically right (e.g. a true avatar).

---

## 7. Design Guardrails

### DO

- Lead with typography. If a new decision fights the typography hierarchy, change the decision.
- Use amber **sparingly** — links, active nav, selection, at most one intentional highlight per page.
- Prefer hairline dividers over cards. Reach for cards only when items are visually heavy enough to need isolation.
- Respect the 65ch article reading column. Wide articles are harder to read.
- Test every surface in both light and dark mode.
- Keep landing text-forward. If a new landing section adds decoration, reconsider the decoration.

### DON'T

- Add secondary accent colors (blue, green, purple, pink). **One** accent.
- Add shadows, gradients, glass morphism, glows, or depth effects.
- Use bold italic, all-caps body, or decorative display fonts.
- Add hero imagery, illustrations, or decorative graphics to the landing page.
- Ship an interactive island without a concrete reason. Astro baseline is 0 KB JS per page — preserve it.
- Put a border on a card. Surface tint alone is enough.
- Pad an inline link into a button shape unless it's a genuine CTA.
- Use the accent as a background fill for anything except `::selection`. The accent is an ink color.

---

## 8. Responsive Behavior

- **Mobile-first.** Design at ~375px, then enhance at `sm:` (640px) and above.
- **Header:** links always visible, no hamburger. Below `sm:`, container padding tightens from `px-6` → `px-4`, nav gap tightens from `gap-5` → `gap-3`, and the brand mark shows `"AH"` instead of the full `SITE.name`. If nav still outgrows the bar at any viewport, reduce the number of links — don't hide them behind a menu.
- **About grid:** `grid sm:grid-cols-[200px_1fr]` — photo + bio side-by-side on desktop, stacked on mobile.
- **List rows:** `flex flex-col sm:flex-row sm:items-baseline sm:justify-between` — stacks vertically on mobile, horizontal at `sm`.
- **Article:** body-level padding on mobile; the 65ch column centers naturally as the viewport grows.

No content hidden behind interaction at any viewport. Progressive enhancement only.

---

## 9. Agent Prompts

When extending the system or generating new UI, these prompts produce consistent results:

- *"Add a [new page / component] consistent with DESIGN.md. Use the existing color tokens (`bg`, `fg`, `muted`, `subtle`, `accent`, `surface`, `border-subtle`) — never hardcode a color. Inter for UI chrome, Newsreader for article prose. No shadows, no secondary accents. Prefer hairline dividers over cards."*

- *"For blog-post-style content: wrap body in `<article class="py-12 mx-auto max-w-[65ch]">`, apply `.article` class to the prose container. Serif h1, sans h2/h3/h4."*

- *"For card-like list items (services, projects): use `bg-surface rounded-lg p-7`. No border, no shadow."*

- *"Both light and dark mode must work. Reference CSS custom properties via the exposed Tailwind tokens, not hex values."*

- *"Default container is `max-w-2xl mx-auto px-6`. Use `max-w-4xl` only for pages that need the wider grid (header, footer, photo-and-bio pages, article headers)."*

- *"Accent usage: inline links, active nav state, `::selection`, and at most one additional intentional highlight per page. If you're tempted to use the accent on a background, don't."*
