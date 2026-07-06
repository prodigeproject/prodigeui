# Post-Improvement Benchmark — NOVA + FlowAI (after Round 2)

> Runs the two briefs again after the Round-2 system changes
> (`improvements-changelog.md`). Scored with the **corrected taste-weighted rubric** from
> `nova-rebenchmark-report.md`: score only real design dimensions + Visual Distinctiveness /
> anti-slop taste (0–45); accessibility and methodology-fidelity are pass/fail gates, not
> points. **Honest caveat, unchanged:** nothing is browser-rendered — scores are craft
> judgments on the HTML. Open the files to confirm.

## New artifacts

| Brief | File | What it is |
|-------|------|------------|
| NOVA | `nova-with-prodigeui-v6.html` | v4's engine ambition (Three.js WebGL nova-core + GSAP pin-pan + Lenis) rebuilt under the new rules |
| FlowAI | `flowai-bench-prodigeui-v7.html` | the FlowAI brief on the improved system, tuned for B2B restraint (MOTION 6, no WebGL) |

---

## Part 1 — NOVA: did the improvements fix what you flagged?

v6 was built to keep exactly what made you prefer v4, and fix exactly what made v5 read as
slop.

| Axis | v5 (flagged) | v6 (now) | Why it moved |
|------|-------------|----------|--------------|
| Accent | neon acid-lime `#B8FF3A` | refined ember `#F5511E` | anti-neon guard; concept-tied "stellar heat", chroma in the refined band |
| Hero anchor | particle constellation (cliché) | Three.js WebGL nova-core object | Anchor-Taste Priority: real 3D object > particles |
| Hero type | pushed large | confident cap ~6.4rem | "confident, not shouting" ceiling (also fixes v4's 9rem) |
| Motion | canvas RAF only | GSAP horizontal pin-pan + scrub + Lenis | real scroll narrative, not fade-only |
| Copy/proof | plain | outcome-first + footnoted ledger + numbered running index | ux-writing.md + numbered-index reconciliation |

### NOVA field, corrected rubric (/45)

| Build | Type | Color | Spatial | Resp | Interact | Motion+Engine | UX-copy | Design-sys | **Taste** | **/45** |
|-------|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **ProdigeUI v6** | 5 | 5 | 5 | 4 | 5 | 5 | 5 | 5 | **5** | **44** |
| ProdigeUI v4 | 5 | 5 | 5 | 4 | 5 | 5 | 4 | 5 | 5 | 43 |
| impeccable | 5 | 5 | 5 | 4 | 4 | 4 | 5 | 5 | 5 | 42 |
| ProdigeUI v5 | 5 | 3 | 5 | 4 | 4 | 4 | 4 | 5 | 3 | 37 |
| taste-skill | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 4 | 4 | 37 |
| open-design | 5 | 4 | 4 | 4 | 3 | 3 | 4 | 5 | 4 | 36 |
| ui-ux-pro-max | 3 | 3 | 4 | 5 | 3 | 3 | 3 | 4 | 3 | 31 |
| awesome-design | 4 | 3 | 3 | 4 | 3 | 3 | 3 | 4 | 2 | 29 |
| emil | 2 | 2 | 2 | 3 | 5 | 5 | 2 | 2 | 3 | 26 |

**v6 (44) now edges v4 (43)** — it keeps v4's engine ambition but adds the refined-accent
discipline, footnoted copy, and the confident (not 9rem) type ceiling. The only reason it
isn't higher: the WebGL-object hero, while the right *class* of anchor, is still a somewhat
familiar "hero object" move; a fully concept-specific product/film artifact would earn the
last point. It leads the field, and it earns it on taste now, not on gate-points.

---

## Part 2 — FlowAI: the restraint test

FlowAI is the opposite brief from NOVA. It is B2B dev-tooling for CTOs, where the improved
system says **do NOT over-engineer** (MOTION ≤6, no WebGL — engine maximalism on a
trust-first product is its own slop). v7 is deliberately *quieter* than v6, and that is the
correct call, not a weaker one.

What v7 changed vs the previous FlowAI prodigeUI build (v6-era):

- Retired the **same neon lime** — swapped to refined **signal-amber `#E7A13A`**, which also
  dodges the first-order "dev-tool = SaaS blue" reflex.
- Retired **Space Grotesk** → **Geist + Geist Mono** (the honest dev-tool pairing; mono
  carries metrics/labels).
- Every metric is now **footnoted and labelled self-reported/illustrative** (`6h`, `92%`,
  `300+` all carry superscripts + a footnotes block) — directly retiring invented-metric slop.
- The hero anchor is a **real HTML/CSS product mockup** (3-column roadmap board + a risk-radar
  conic gauge), not decoration — you can read what the product does before scrolling.

---

# CORRECTION — the Round-2 "restraint" rules over-corrected (user was right)

After review, the user rated **v4 above v5 and v6** (hero, photo size, GSAP scroll trigger,
font size, and the pre-footer "go nova?" CTA), and rated **FlowAI v6-highmotion far above
v7**. That is correct, and it exposes a mistake in my Round-2 changes, not in those builds.

**What went wrong:** the Round-2 rules ("confident not shouting", cap hero ~6.4rem,
"B2B = restraint, MOTION ≤6", anti-neon) were written as if they were universal. They are
not. They are **B2B/product** rules. Applying them to an **expressive** brief (a creative
studio, an agency, a premium launch) strips the art direction — big art-directed type,
generous imagery, engine-grade motion — that made v4 and v6-highmotion good. The result was
**stiff**: more "correct", less beautiful. Stiff is a failure mode too, and on expressive
work it is the worse one.

**The durable fix (rules, not just files):**
- `taste.md` → new section **"Discipline must not flatten art direction"** + a
  **register-dependent hero-scale rule** (expressive briefs keep `clamp(2.8rem,11vw,9rem)`;
  only B2B calms to ~4.6rem).
- `modern-product-baseline.md` → hero-scale note corrected to be register-aware.
- `anti-ai-slop.checklist.md` → the "big-type" tell now applies ONLY to B2B; expressive
  briefs are exempt and big type is scored as a strength.
- `engine-interactivity.md` → a premium B2B **launch** earns agency motion (MOTION 8-9);
  the restraint caution is only for the in-app product UI, not the marketing page.

**The builds:**
- `nova-with-prodigeui-v7.html` = **v4 preserved** (all the loved parts) + footnoted honest
  stats. Not re-restrained. This is the current NOVA reference.
- `flowai-bench-prodigeui-v8.html` = **v6-highmotion preserved** (MOTION 9, constellation,
  pinned reveals) + footnoted honest metrics. This is the current FlowAI reference and the
  new minimum bar.

**Corrected scoring stance:** on expressive briefs, Visual Distinctiveness/Taste must reward
bold art direction and penalize timidity. Under that stance the NOVA order is
**v4 = v7 (top) > impeccable > v6 > v5**, and for FlowAI **v6-highmotion = v8 (top) > v7**.
v5 and my restrained v7 are the low end, not the high end — the exact inversion of my first
rubric. Lesson logged: rules are a floor; art direction is the score.

> Unchanged honesty caveat: still not browser-rendered. But the direction is now right —
> keep v4/v6-highmotion energy, fix only genuine defects, never trade beauty for "correct".
