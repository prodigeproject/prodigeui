# Benchmark Report — NOVA v3 (composition rebuild)

## Why v3 exists
v2 (`nova-with-prodigeui-v2.html`) was still messy. Honest root cause: it used a **blurry
animated CSS gradient mesh as the hero with no real focal subject** — the exact AI-slop the
system warns about — plus stacked textures (mesh + heavy grain + faint ghost + italic serif
on a busy background) that produced low-contrast mush. That is a composition failure, not a
technique-shortage failure.

v3 rebuilds from the same one-line brief using the new **composition** layer.

## Brief (unchanged, minimal)
> "Build a landing page for a creative studio called NOVA."

## What changed (v2 → v3)

| Dimension | v2 (messy) | v3 (composition rebuild) |
|-----------|-----------|--------------------------|
| Hero background | Blurry animated gradient mesh (slop) | **Committed solid dark base** `#0b0b0d` |
| Focal subject | None (text on gradient) | **Giant display headline as subject + real supporting image** (giant-type-hero composition) |
| Display type | Instrument Serif italic on busy bg | **Anton** (deliberate display face), tight tracking/leading |
| Texture | mesh + grain 0.35 + ghost, stacked = mush | **One subtle grain layer (0.22)**, ghost at 0.05 as texture only |
| Contrast | low (serif over moving gradient) | high (light text on solid dark; verified) |
| Real media | none in hero | **real image anchor in hero + 5 real images in bento**, `onerror` fallbacks |
| Accent | warm mesh bleeding everywhere | **one accent** `#ff5e3a`, used on one word + CTAs consistently |

## Composition used
`craft/compositions/giant-type-hero.md` — chosen because the brief supplies no media, so the
decision tree in `craft/composition.md` routes to "type is the subject, anchored by a real
image," NOT a gradient blob.

## Quality Gate result

### Composition FAILs (C1–C5) — PASS
- C1 real focal subject: PASS (giant headline + real image anchor).
- C2 no gradient-mesh hero: PASS (committed solid base; verified programmatically).
- C3 no placeholder boxes: PASS (real images; graceful `onerror` fallback).
- C4 no muddy stacked texture: PASS (single subtle grain; high-contrast headline).
- C5 deliberate display face: PASS (Anton, reflex-rejected serif, tight tracking).

### Negative slop gate — PASS
Contrast high; focus-visible defined; keyboard-operable; full reduced-motion path; FLAG
techniques (glass, grain, one accent) in CRAFT form. Mechanical taste checks: no em-dash;
no cream/beige bg; one eyebrow; no `<img>` hover-scale (cells animate border/shadow); no
gradient text; outcome CTAs ("See the work", "Start a project").

### Craft-presence rubric — ~10/12
Hero signature 2 (giant type + real image + word reveal + magnetic CTA) · Typography 2
(Anton + Inter, fluid, tight) · Motion 2 (staggered timeline + IO + magnetic + marquee) ·
Texture/depth 2 (grain + glass + ghost + z-layering) · Real media 1 (real images w/ fallback,
but generic stock, not concept-shot) · Focal hierarchy 1–2 (headline dominant; image anchor).

## Honest limitations
- **Not rendered here.** Structure validated (balanced tags, no gradient-mesh, 6 real imgs w/
  fallback, valid DOCTYPE→`</html>`). Visual/interaction quality must be confirmed in a browser.
- Media is generic stock (picsum). Real project = concept-specific photography/film (rubric 1/2).
- Standalone HTML (zero build); same composition ports to React+Vite for the prompt-1–73 stack.

## Verdict
The fix was compositional, not additive: decide the real focal subject first, commit the
visual system, then decorate. v3 follows `craft/composition.md`. Open
`nova-with-prodigeui-v3.html` (and compare with v2) to confirm visually.
