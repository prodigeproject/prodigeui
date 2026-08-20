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

*Note for single-file HTML deliverables:* The Design Read MUST also be prepended directly inside an HTML comment at the very top of the generated markup file:
`<!-- Design Read: <page kind> for <audience>, <vibe> language, leaning <aesthetic family>. -->`

Examples:
- "Design Read: B2B SaaS landing for technical buyers, dark-tech minimalist, leaning Tailwind + Geist + restrained motion."
- "Design Read: solo designer portfolio for hiring managers, editorial kinetic-type, leaning native CSS + scroll-driven animation."
- "Design Read: premium cat lifestyle e-comm for design-conscious millennials, warm editorial, leaning serif + photography-forward."

---

## Step 3: Set the Three Dials

After the Design Read, set numeric values on the canonical `0.0–1.0` scale:

| Dial | What it controls |
|------|-----------------|
| **DESIGN_VARIANCE** | 0.0 = conservative symmetry, 1.0 = intentionally experimental |
| **MOTION_INTENSITY** | 0.0 = static, 1.0 = cinematic / physics |
| **VISUAL_DENSITY** | 0.0 = art gallery / airy, 1.0 = cockpit / packed |

### Dial Inference Table

| Signal | VARIANCE | MOTION | DENSITY |
|--------|----------|--------|---------|
| Minimalist / calm / Linear-style | 0.5–0.6 | 0.3–0.4 | 0.2–0.3 |
| Premium consumer / Apple-y / luxury | 0.7–0.8 | 0.5–0.7 | 0.3–0.4 |
| Playful / wild / Awwwards / experimental | 0.9–1.0 | 0.8–1.0 | 0.3–0.4 |
| Landing page / marketing (default) | 0.7–0.9 | 0.6–0.8 | 0.3–0.5 |
| Trust-first / public-sector / regulated | 0.3–0.4 | 0.2–0.3 | 0.4–0.5 |
| Dark-tech / dev-tool / B2B SaaS | 0.6–0.7 | 0.5–0.6 | 0.4–0.5 |
| Editorial / blog / magazine | 0.6–0.7 | 0.4–0.5 | 0.3 |
| E-commerce / product-forward | 0.6–0.7 | 0.5–0.6 | 0.5–0.6 |

### How Dials Drive Output

- **VARIANCE < 0.5:** Symmetric grids, consistent spacing, no layout surprises.
- **VARIANCE ≥ 0.7:** Asymmetric compositions, mixed-density sections, visual tension.
- **MOTION < 0.4:** Simple fade-in reveals, no ambient animation.
- **MOTION ≥ 0.6:** Staggered choreography, secondary motion layer, one ambient signature.
- **MOTION ≥ 0.8:** Scroll-driven effects, cursor interactions, clip-path reveals.
- **DENSITY < 0.4:** Generous whitespace, max 3-4 elements per viewport.
- **DENSITY ≥ 0.5:** Tighter sections, bento grids, more content per viewport.

---

## Step 4: The Soul Formula (80% Proven + 20% Distinctive)

Every output MUST include at least ONE element from each category:

### The 20% — What Makes It Memorable

1. **One bold visual move** — a typography choice, an unexpected color ratio, a dramatic proportion, a unique layout break.
2. **One memorable micro-interaction** — a button press that feels physical, a number that counts up, a card that tilts toward the cursor, a reveal that wipes geometrically instead of fading.
3. **One product-specific detail** — something that could only exist for THIS product. A status badge with domain-specific phrasing, a metric that references the product's actual value prop, a visual metaphor drawn from the product's domain.

---

## Step 4: The Soul Formula (80% Proven + 20% Distinctive)

Every output MUST include at least ONE element from each category:

### The 20% — What Makes It Memorable

1. **One bold visual move** — a typography choice, an unexpected color ratio, a dramatic proportion, a unique layout break.
2. **One memorable micro-interaction** — a button press that feels physical, a number that counts up, a card that tilts toward the cursor, a reveal that wipes geometrically instead of fading.
3. **One product-specific detail** — something that could only exist for THIS product. A status badge with domain-specific phrasing, a metric that references the product's actual value prop, a visual metaphor drawn from the product's domain.
4. **One engine-grade interactive moment (when MOTION_INTENSITY ≥ 0.7)** — scroll-driven
   storytelling (GSAP ScrollTrigger pin/scrub), a real-time WebGL/Three.js/canvas anchor, or
   Lenis smooth scroll + a pinned narrative section. For agency/portfolio/premium/experimental
   briefs, a fully static page (only CSS fade-ins) is a FAIL — see
   `craft/patterns/engine-interactivity.md`. Do NOT over-engineer trust-first B2B/dashboards (MOTION ≤ 0.6).
> "Should this feel closer to Linear-clean or Awwwards-experimental?"

If you can confidently infer from context, DO NOT ask. Declare the Design Read and proceed.
