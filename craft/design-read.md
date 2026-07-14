# Design Read — Mandatory Brief Inference Before Generation

> Before writing a single line of code, the agent MUST perform a Design Read.
> This document defines the process. Skipping it produces "default LLM output" —
> correct but soulless, indistinguishable from a template.

---

## Step 1: Read the Room (Brief Inference)

Scan the brief/prompt for these signals:

1. **Page kind** — landing (SaaS / consumer / agency / event), portfolio (dev / designer / studio), editorial, e-commerce, redesign.
2. **Vibe words** — "minimalist", "bold", "dark-tech", "editorial", "playful", "premium", "brutalist", "Linear-style", "Awwwards", "trust-first".
3. **Reference signals** — URLs linked, screenshots pasted, brands mentioned, competitors named.
4. **Audience** — B2B procurement vs. design-conscious consumer vs. recruiter. Audience picks the aesthetic, not your taste.
5. **Brand assets** — existing logo, colors, fonts, photography. For redesigns, these are starting material.
6. **Quiet constraints** — accessibility-first, regulated industry, public-sector, kids' products. These OVERRIDE aesthetic preference.

---

## Step 2: Declare the Design Read (ONE LINE, mandatory)

Before any code output, state:

> **"Design Read: `<page kind>` for `<audience>`, `<vibe>` language, leaning `<aesthetic family>`."**

Examples:
- "Design Read: B2B SaaS landing for technical buyers, dark-tech minimalist, leaning Tailwind + Geist + restrained motion."
- "Design Read: solo designer portfolio for hiring managers, editorial kinetic-type, leaning native CSS + scroll-driven animation."
- "Design Read: premium cat lifestyle e-comm for design-conscious millennials, warm editorial, leaning serif + photography-forward."

---

## Step 3: Set the Three Dials

After the Design Read, set numeric values (1-10):

| Dial | What it controls |
|------|-----------------|
| **DESIGN_VARIANCE** | 1 = Perfect symmetry, 10 = Artsy chaos |
| **MOTION_INTENSITY** | 1 = Static, 10 = Cinematic / physics |
| **VISUAL_DENSITY** | 1 = Art gallery / airy, 10 = Cockpit / packed |

### Dial Inference Table

| Signal | VARIANCE | MOTION | DENSITY |
|--------|----------|--------|---------|
| Minimalist / calm / Linear-style | 5-6 | 3-4 | 2-3 |
| Premium consumer / Apple-y / luxury | 7-8 | 5-7 | 3-4 |
| Playful / wild / Awwwards / experimental | 9-10 | 8-10 | 3-4 |
| Landing page / marketing (default) | 7-9 | 6-8 | 3-5 |
| Trust-first / public-sector / regulated | 3-4 | 2-3 | 4-5 |
| Dark-tech / dev-tool / B2B SaaS | 6-7 | 5-6 | 4-5 |
| Editorial / blog / magazine | 6-7 | 4-5 | 3 |
| E-commerce / product-forward | 6-7 | 5-6 | 5-6 |

### How Dials Drive Output

- **VARIANCE < 5:** Symmetric grids, consistent spacing, no layout surprises.
- **VARIANCE 7+:** Asymmetric compositions, mixed-density sections, visual tension.
- **MOTION < 4:** Simple fade-in reveals, no ambient animation.
- **MOTION 6+:** Staggered choreography, secondary motion layer, one ambient signature.
- **MOTION 8+:** Scroll-driven effects, cursor interactions, clip-path reveals.
- **DENSITY < 4:** Generous whitespace, max 3-4 elements per viewport.
- **DENSITY 5+:** Tighter sections, bento grids, more content per viewport.

---

## Step 4: The Soul Formula (80% Proven + 20% Distinctive)

Every output MUST include at least ONE element from each category:

### The 20% — What Makes It Memorable

1. **One bold visual move** — a typography choice, an unexpected color ratio, a dramatic proportion, a unique layout break.
2. **One memorable micro-interaction** — a button press that feels physical, a number that counts up, a card that tilts toward the cursor, a reveal that wipes geometrically instead of fading.
3. **One product-specific detail** — something that could only exist for THIS product. A status badge with domain-specific phrasing, a metric that references the product's actual value prop, a visual metaphor drawn from the product's domain.
4. **One engine-grade interactive moment (when MOTION_INTENSITY ≥ 7)** — scroll-driven
   storytelling (GSAP ScrollTrigger pin/scrub), a real-time WebGL/Three.js/canvas anchor, or
   Lenis smooth scroll + a pinned narrative section. For agency/portfolio/premium/experimental
   briefs, a fully static page (only CSS fade-ins) is a FAIL — see
   `craft/patterns/engine-interactivity.md`. Do NOT over-engineer trust-first B2B/dashboards (MOTION ≤ 6).

### Soul Test

> If a reviewer screenshots your output and someone outside the project can identify which product it's for — you have soul. If not, you shipped a template.

---

## Step 5: Anti-Default Discipline

After the Design Read, explicitly CHECK these defaults and reject them:

- ❌ AI-purple gradients (unless justified by brand)
- ❌ Centered hero over dark mesh (unless the brief demands it)
- ❌ Three equal feature cards in a row (add variety — bento, asymmetric, dominant cell)
- ❌ Generic glassmorphism on everything
- ❌ Infinite-loop micro-animations everywhere
- ❌ Inter + slate-900 as default (reach for distinctive fonts)
- ❌ Every section perfectly centered (add layout tension)
- ❌ Same reveal animation on every element (choreograph with layers)

---

## Step 6: Validate Before Shipping

Before presenting output, verify:

- [ ] Design Read was declared
- [ ] Dials were set (explicitly or from defaults)
- [ ] At least ONE bold visual move exists (the 20%)
- [ ] At least ONE memorable interaction exists
- [ ] Layout has visual tension (not all-centered, not all-symmetric)
- [ ] Motion has at least 2 layers (primary reveal + secondary/ambient)
- [ ] Font choice is intentional (not just Inter/system-ui by reflex)
- [ ] Color palette is committed (ONE accent, consistent throughout)

---

## Quick Reference: If the Brief is Ambiguous

Ask exactly ONE clarifying question — never a multi-question dump. Example:
> "Should this feel closer to Linear-clean or Awwwards-experimental?"

If you can confidently infer from context, DO NOT ask. Declare the Design Read and proceed.
