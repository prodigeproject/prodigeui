# Composition — Giant Type Hero

≈19 of 73 benchmark prompts. When you have no video, **type becomes the focal subject** —
oversized, tight-tracked display type is the statement, anchored by a real image/portrait or
a giant "ghost" word behind a real subject. This is the correct composition for the NOVA
brief (studio, no supplied media) — NOT a gradient mesh.

## When to use
Studios, agencies, bold brands, portfolios; briefs with no supplied video. Type + one real
image (portrait/product/3D render) is the minimum; type + ghost-word-behind-subject is the
signature.

## The spine
```
z0   committed solid background (dark or light) — NOT a blurry gradient mesh
z1   giant "ghost" display word, positioned deliberately (usually bottom, bleeding off-edge)
z5   REAL focal subject: portrait / product / 3D render, object-fit contain, overlapping ghost
z10  floating pill nav
z10  hero copy (eyebrow + giant headline + short lead + CTA), max 4 elements
z50  grain overlay
```
The overlap of a real subject over the ghost word is what creates depth and editorial feel.
If you genuinely have zero imagery, the giant HEADLINE itself is the subject — make it huge,
set it in a deliberate display face, and let negative space + one accent carry the page.

## Key CSS (the parts that matter)
```css
/* Committed base — pick dark OR light and commit. NO animated blurred gradient mesh. */
body{ background:#0a0a0b; color:#f4f2ee; font-family:Inter,sans-serif; }

/* Ghost word behind the subject */
.ghost{
  position:absolute; inset-inline:0; bottom:-4%; z-index:1; text-align:center;
  font-family:'Anton',sans-serif; text-transform:uppercase; white-space:nowrap;
  font-size:clamp(120px,30vw,520px); line-height:.8; letter-spacing:-.03em;
  color:#fff; opacity:.06; user-select:none; pointer-events:none;
}
/* Real focal subject overlapping the ghost */
.subject{
  position:absolute; left:50%; bottom:0; transform:translateX(-50%);
  height:min(88vh,900px); width:auto; object-fit:contain; z-index:5;
}
/* The headline as statement */
h1{
  font-family:'Anton',sans-serif; text-transform:uppercase;
  font-size:clamp(3rem,11vw,9rem); line-height:.9; letter-spacing:-.03em;
}
```
`@property`-driven or fixed, the ghost opacity stays subtle (0.05–0.08) so it reads as
texture, not clutter. Give the real subject the visual weight.

## Real-media strategy (mandatory)
- **Portrait/figure hero** (benchmark 1): a cut-out PNG subject centered, magnetic-hover
  wrapped (`patterns/magnetic-hover.md`), overlapping the ghost word.
- **Product/3D hero** (benchmark 6): render(s) at the bottom, object-position bottom.
- **No subject available:** headline-as-subject — then the page leans on typography, one
  accent, generous negative space, and a strong entrance. Still NOT a gradient blob.
- Source real media per `assets/asset-sourcing.guide.md`; preload; `onerror` fallback.

## Motion
- Headline: word-by-word blur-in or char slide-in (`patterns/text-reveal.md`), stagger 90ms.
- Subject: fade + slight scale/rise on load (last in the timeline, ~600ms).
- Ghost word: fade in slowly, or a slow drift (`sine.inOut`, ambient, reduced-motion off).
- Micro: magnetic hover on the primary CTA and/or the subject.

## Typography (the whole point)
- A deliberate DISPLAY face (Anton, Kanit, Druk-like, FSP Podium, Instrument Serif italic) —
  run the reflex-reject procedure in `craft/taste.md`. Do NOT ship system/Inter at hero scale.
- Tight leading (0.8–0.95), negative tracking (−0.02 to −0.05em), fluid `clamp()`.
- Body/UI: Inter or a clean grotesk.

## Color
- Committed dark or light + ONE accent used consistently (period/underline/CTA).
- No reflex purple; no cream/beige body bg (see taste.md). Warmth via accent + imagery.

## Craft checklist
- [ ] There is a real focal subject OR the headline itself is genuinely the subject (huge,
      deliberate display face). No blurry gradient/mesh hero.
- [ ] Ghost word is subtle texture (opacity ≤ .08), positioned deliberately, bleeding off-edge.
- [ ] Real subject overlaps the ghost for depth; preloaded with fallback.
- [ ] One display face (reflex-rejected) + one accent; tight tracking/leading.
- [ ] Staggered entrance; reduced-motion final state; contrast ≥ 4.5:1.

## This is the NOVA fix
The original NOVA used a blurred animated gradient mesh + faint ghost + italic serif on a
busy background = mush. The correct version: a committed solid base, a real subject (or the
headline as subject) in a deliberate display face, ghost word as subtle texture, one accent,
grain for tactility. Same brief, real composition.
