# ProdigeUI vs 6 Design Skills — Benchmark & Audit

> **Goal.** Run the SAME brief through ProdigeUI and 6 comparator skills, evaluate the
> approach each one drives, and turn the gaps into concrete improvements to the ProdigeUI
> SYSTEM (not into any single HTML file).
>
> **Method (honest scope).** These skills are prompt/knowledge systems for an AI agent, not
> renderers. A faithful "same prompt, 7 real renders" comparison would require 7 live model
> runs; that is not reproducible inside this repo. So this is an **approach-level benchmark**:
> for one shared brief, trace how each skill's guidance shapes the output, then score the
> guidance on the dimensions that decide real quality. The scores rank the *methodologies*,
> and every gap is mapped to a concrete ProdigeUI edit (see "Improvements shipped").

## Shared brief (Creative Mode, vague — same as `BENCHMARK-BRIEF.md`)

> Build a single-page landing for **FlowAI**, an AI project-management tool for engineering
> teams. Hero + CTA, 3 features, social proof/metrics, 1 testimonial, pricing (3 tiers),
> FAQ (4), final CTA, footer. Audience: startup CTOs / eng managers. No colors, layout,
> images, or fonts specified — the agent makes every decision.

A second, functional brief is used to stress the non-landing case:

> Build the **FlowAI in-app dashboard**: task board, activity feed, a metrics panel with 3
> charts, a settings page, and a command palette. Dense, keyboard-driven, used all day.

---

## Comparators (actual source read, not the self-authored research notes)

| # | Skill | Folder | What it actually is |
|---|-------|--------|---------------------|
| 1 | taste-skill | `taste-skill-main` | Anti-slop frontend methodology. Three Dials + design read + **Brief→real-design-system map** + a very large set of **mechanical layout hard-rules** + stack/perf conventions. |
| 2 | ui-ux-pro-max | `ui-ux-pro-max-skill-main` | Breadth engine: priority-ranked ~200-rule UX checklist across **web + mobile/native** (iOS HIG + Material), forms, navigation, charts, perf; product→design-system reasoning DB (161 products, 161 palettes, 57 pairings) queried via a CLI. |
| 3 | open-design | `open-design-main` | Platform + **brand-agnostic `craft/` axis** (typography, color, anti-ai-slop, state-coverage, animation-discipline, a11y, laws-of-ux) with per-skill opt-in, a linter with **exact banned hex**, and 100+ brand `DESIGN.md` presets. |
| 4 | awesome-design | `awesome-design-skills-main` | Registry of **67 aesthetic style presets** (brutalism, neobrutalism, claymorphism, editorial, neon, retro, riso, vintage, glass, …), each `SKILL.md` + `DESIGN.md` with tokens. |
| 5 | emil skills | `emil skills-main` | **Design-engineering motion craft** (Emil Kowalski): animation decision framework, custom easing curves, spring config, clip-path/`@starting-style`/WAAPI, gesture physics, perf caveats, an **effect-naming glossary**, and a strict **animation review** rubric. |
| 6 | impeccable | `impeccable-main` | Production frontend craft with a **register split** (brand vs product), a **command/lens taxonomy** (craft/shape/audit/critique/polish/bolder/quieter/distill/harden/colorize/typeset/…), absolute bans, and a deep **modern interaction-design** reference (dialog/inert, Popover API, anchor positioning, roving tabindex). |

---

## Scoring (0–5) of the guidance each skill gives for the shared briefs

Dimensions: **Anti-slop** (avoids generic defaults), **Composition** (page/focal decisions),
**Typography/Color**, **Motion craft**, **Interaction & a11y depth**, **Breadth** (mobile/
forms/nav/charts), **Mechanical checkability** (binary pass/fail rules an agent can self-run),
**Verifiability** (renders/screens/lints).

| Skill | Anti-slop | Comp | Type/Color | Motion | Interaction/a11y | Breadth | Mechanical | Verify | Avg |
|-------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| taste-skill | 5 | 4 | 5 | 3 | 3 | 3 | **5** | 2 | 3.8 |
| ui-ux-pro-max | 3 | 3 | 4 | 3 | 4 | **5** | 4 | 3 | 3.6 |
| open-design | 4 | 4 | 4 | 3 | 4 | 4 | 4 | **5** | 4.0 |
| awesome-design | 3 | 3 | 4 | 2 | 2 | 2 | 3 | 2 | 2.6 |
| emil skills | 3 | 2 | 2 | **5** | 4 | 2 | 4 | 4 | 3.3 |
| impeccable | 5 | **5** | 5 | 4 | **5** | 4 | 4 | 4 | 4.5 |
| **ProdigeUI (before)** | 5 | **5** | 5 | 3 | 3 | 3 | 4 | 3 | 3.9 |
| **ProdigeUI (after)** | 5 | 5 | 5 | **5** | **5** | 4 | **5** | 3 | **4.6** |

Reading the table: ProdigeUI already led on anti-slop + composition + typography (it had
absorbed taste-skill and impeccable). Its real deficits were **motion craft** (Material-style
easing, no interaction-motion rules), **interaction/a11y depth** (no modern dialog/popover/
anchor/roving-tabindex patterns), and **breadth** (landing-heavy; thin on mobile/forms/nav/
charts). Those are exactly what the improvements target.

---

## FlowAI landing — how each approach diverges (the observable difference)

- **taste-skill**: sets dials (Landing/SaaS ≈ 7/6/4), reads the room, then enforces a long
  mechanical checklist — hero ≤ 4 text elements, one CTA-intent label reused everywhere,
  nav on one line, ≤ 2 consecutive zigzag splits, bento cell count = content count, eyebrow
  ≤ ceil(sections/3). Result reads deliberate and un-templated. Weakness: motion is thin;
  no in-browser verification.
- **impeccable**: picks the **brand register**, writes a scene sentence, commits a color
  strategy, bans side-stripes/gradient-text/eyebrow-on-every-section, then iterates in a
  browser against the mock. Strongest all-round; closest to ProdigeUI.
- **open-design**: applies `anti-ai-slop.md` — the **linter blocks exact indigo hex**,
  two-stop hero gradients, emoji icons, invented metrics — and caps `var(--accent)` to ~2
  visible uses. Verifiable via the daemon lint. 80/20 rule + "outsider identifies the
  product?" screenshot test.
- **emil**: barely touches page composition, but the FlowAI micro-interactions (button
  press `scale(0.97)`, origin-aware dropdowns, sub-300ms, interruptible toasts, staggered
  entrance) would be the most *polished* of any comparator.
- **ui-ux-pro-max**: generates a design system from the product type, then checks against
  the 10-category rule set — strongest on the pricing table, FAQ accordion, and mobile
  behavior; weaker on a distinctive hero.
- **awesome-design**: only meaningful if the user names an aesthetic ("editorial FlowAI");
  then its `editorial` preset gives tokens instantly. Otherwise it doesn't decide.
- **ProdigeUI (before)**: strong hero/composition/type via `craft/`, but motion would use
  the Material-ish `standard` curve, could ship `transform-origin: center` dropdowns and
  keyframe (non-interruptible) toasts, and had no rule against duplicate CTA intent, nav
  wrap, empty bento cells, or the exact indigo hex.

## FlowAI dashboard — where ProdigeUI was weakest

The functional brief exposes the breadth gap. ui-ux-pro-max and impeccable both carry
concrete rules for: command-palette (no animation — 100+/day), roving-tabindex on the
board columns, `<dialog>`/`inert` for settings modals, dropdown overflow-clipping escape,
optimistic updates + undo over confirm, chart empty/loading/error states, tabular numbers
in the metrics panel. ProdigeUI's accessibility skill audited these *after the fact* but
gave no *implementation* patterns, and its motion layer would over-animate a high-frequency
surface.

---

## Gap ledger → ProdigeUI edits

| # | Gap (source) | Severity | ProdigeUI change |
|---|--------------|:--:|------------------|
| G1 | Motion uses Material-style easing; no interaction-motion craft (emil) | High | New `craft/patterns/motion-craft.md`; strengthen `motion/principles.md` easing + add interaction-motion section |
| G2 | No modern interaction/a11y implementation patterns (impeccable, ui-ux-pro-max) | High | New `craft/patterns/interaction-patterns.md`; expand `skills/accessibility-audit` |
| G3 | Missing mechanical layout hard-rules: CTA wrap, duplicate-CTA-intent, nav single-line/height, zigzag ≤2, bento cell-count, split-header ban, hero top-padding, consistency locks, italic descender, icon discipline (taste-skill, impeccable) | High | Expand `craft/taste.md` + add binary checks to the quality gate |
| G4 | Anti-slop lacks EXACT banned hex + accent-overuse cap (open-design) | Med | Add exact indigo hex list + accent cap + 80/20 soul + screenshot test to the checklist |
| G5 | No Brief→real-design-system routing; always invents tokens (taste-skill) | Med | New `craft/design-system-routing.md`; reference from AGENTS + end-to-end skill |
| G6 | No strict animation-review lens (emil review-animations) | Med | New `skills/motion-review/SKILL.md` |
| G7 | No effect-naming vocabulary (emil animation-vocabulary) | Low | New `craft/patterns/animation-vocabulary.md` |
| G8 | Thin on breadth: mobile/native, nav patterns, charts (ui-ux-pro-max) | Med | Interaction-patterns doc covers touch/native/nav/charts baselines; note remaining depth as follow-up |
| G9 | No design-adjustment lens taxonomy (impeccable commands) | Low | Documented as follow-up in this report (not a hard gate) |
| G10 | No aesthetic style-preset catalog (awesome-design) | Low | Documented as follow-up; ProdigeUI themes cover brand-tone, style-movement presets are a future add |

Severity legend: High = changes output quality on most briefs; Med = matters for a class of
briefs; Low = polish / discoverability.

---

## What was NOT changed and why

- **awesome-design's 67 style presets** and **open-design's 100+ brand `DESIGN.md`**: adding
  a large aesthetic-preset catalog is a content project, not a rule fix. ProdigeUI's theme
  system already covers brand-tone; a style-movement catalog is a tracked follow-up (G10).
- **ui-ux-pro-max's CLI + searchable DB**: ProdigeUI is deliberately a static knowledge
  package consumed directly by the agent; a Python CLI is out of scope. The *rules* it
  encodes (touch, nav, charts, forms) are folded into the interaction doc (G8).
- **impeccable's command taxonomy**: useful but a UX-of-the-skill change; logged as G9.

See `improvements-changelog.md` (same folder) for the file-by-file record.
