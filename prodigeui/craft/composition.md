# Craft — Page-Level Composition

> `patterns/` = techniques. `compositions/` = full-page skeletons. This document = the
> DECISION PROCESS that connects a brief to a composition and keeps the whole page coherent.
> It is the step that was missing when NOVA was assembled badly.

## The composition process (do this in order)

### 1. Write the Design Read + set the dials
One line: "Reading this as: {page kind} for {audience}, {vibe} language, leaning toward
{named reference}." Set DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY. (See `taste.md`.)

### 2. Decide the focal subject FIRST (before layout)
The focal subject determines the composition. Walk this decision tree:

```
Is there (or can you source) fitting video?      → cinematic-video-hero
Two related images telling a story?              → spotlight-reveal-hero
A hero portrait / product / 3D render?           → giant-type-hero (subject overlaps ghost type)
A form / conversation / copy-heavy pitch?        → split-editorial-hero
Many features/works to show at once?             → bento-showcase
A multi-section portfolio / case studies?        → dark-portfolio-multisection
NONE of the above / no media at all?             → giant-type-hero (the HEADLINE is the subject)
```

**There is no branch that yields "blurry gradient mesh."** If you have no media, type becomes
the subject — never a gradient blob. (This is the exact decision NOVA got wrong.)

### 3. Choose the composition skeleton
Open the matching file in `craft/compositions/`. Copy its spine and z-index layering.

### 4. Commit the visual system (before writing sections)
- **Base:** dark OR light, committed. One accent (concept-derived, saturation <80%, used
  consistently). No reflex purple, no cream/beige default. Name a real color reference.
- **Type:** run the font reflex-reject procedure → one display face + one body face. Fluid
  `clamp()` scale, leading 0.85–1.0 on display, tracking −0.02 to −0.05em.
- **Chrome:** floating pill nav; liquid-glass over media; grain for tactility.
- **Motion signature:** one entrance choreography + one ambient signature + micro-interactions.

### 5. Build the section rhythm (for multi-section pages)
- Use ≥4 distinct layout families across ~6–8 sections (anti-repetition).
- Alternate contrast beats (dark/light), use rounded-top negative-margin overlaps for premium
  transitions.
- One eyebrow per ~3 sections. Real headings, not numbered-marker scaffolding.
- Long lists (>5) switch UI component (grid/tabs/carousel), never a longer list.

### 6. Plug technique detail, then validate
Wire recipes from `patterns/` + `effects-catalog.md`. Then run the quality gate (negative slop
gate + composition FAILs C1–C5 + craft-presence rubric + mechanical taste checks).

## Focal subject: the hierarchy law

Every viewport has ONE dominant element (Von Restorff). In each composition, the focal subject
must clearly outrank everything else by SIZE, CONTRAST, or MOTION:
- Video hero → the footage dominates; chrome is minimal glass.
- Giant-type hero → the headline (or the real subject overlapping ghost type) dominates.
- Bento → one hero cell dominates by span + media richness.
If two things compete for "most important," the composition is flat. Cut or demote one.

### Visual-mass audit

After the first viewport exists, squint or temporarily remove imagery and motion. Compare
the apparent mass of the headline, artifact/media, navigation, CTA, and empty field. Balance
does not mean equal columns or mirrored geometry: a large quiet field can counter a compact
dark artifact, and a small high-contrast action can counter a broad low-contrast headline.
Name the counterweight in the Design Read. If the page feels heavy on one side, adjust scale,
anchoring, crop, or contrast before adding another visual treatment.

## Type scale relationships across the page (not just the hero)

Pick a fluid display ramp and a modular UI scale, and keep them consistent page-wide:

| Role | Size | Leading | Tracking |
|------|------|---------|----------|
| Hero display | `clamp(2.6rem, 11vw, 9rem)` | 0.85–0.95 | −0.03em |
| Section heading | `clamp(2rem, 6vw, 4rem)` | 0.95–1.0 | −0.02em |
| Subheading | `clamp(1.25rem, 3vw, 1.75rem)` | 1.1 | −0.01em |
| Lead | `clamp(1rem, 2vw, 1.25rem)` | 1.5 | 0 |
| Body | 16px | 1.5–1.6 | 0 |
| Label/eyebrow | 12–13px | 1.2 | +0.2em uppercase |

The jump from hero → section heading should be large (hierarchy); section → subheading
smaller. Don't let two levels sit at nearly the same size.

## Z-index layering (standard stack)

```
0    base media / background        (the focal subject usually lives at 0–7)
1    gradient fade / legibility layer
2    ghost display type (behind subject)
5–8  real focal subject + hero content
10   floating nav / fixed chrome
20   single floating widget (optional)
50   grain / noise overlay (pointer-events:none)
```
Use a semantic z-scale (base/dropdown/sticky/modal/toast/tooltip), never `9999`.

## Legibility over media (the recurring benchmark law)

Contrast comes from **glass chrome + a targeted gradient fade**, NOT a flat full-screen dark
scrim (which mutes the media and looks cheap). Fade only where text sits (e.g. bottom 40%).
Verify headline contrast ≥ 4.5:1 over the ACTUAL darkest frame/region behind it.

## Motion budget for a whole page

- **Primary:** hero entrance — full choreography (staggered, one signature reveal).
- **Secondary:** section reveals — first-time-only staggered fades (Frequency Gate).
- **Ambient:** ONE continuous signature (video loop / one marquee / subtle parallax).
- **Micro:** hover/press feedback on controls.
- Everything has a reduced-motion final-state path. `animation-fill-mode: backwards` around
  any `backdrop-filter` child.

## The anti-NOVA summary

NOVA failed because it skipped steps 2–4: no focal-subject decision (defaulted to a gradient
mesh), no committed system (blurry mesh + grain + faint ghost + serif = muddy), no display-face
decision. The fix is not more effects — it is following this process: **decide the real focal
subject first, commit the system, then decorate.**

## Related
- `craft/compositions/` — the skeletons this process selects
- `craft/taste.md` — the non-negotiables (contrast, fonts, color, restraint)
- `craft/patterns/` + `effects-catalog.md` — technique detail
- `research/benchmark-pattern-taxonomy.md` — the empirical basis
- `quality-gate/` — validation
