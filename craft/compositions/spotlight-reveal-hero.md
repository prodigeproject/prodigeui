# Composition — Spotlight Reveal Hero

Editorial storytelling hero (benchmark 3 "Lithos", 66 "Visuals"). Two real images stacked;
the second is revealed only inside a soft glowing circle that trails the cursor. Reads as
"peeling back a layer" — a signature, memorable moment. One per page.

## When to use
Narrative/editorial brands where two images tell a story: surface vs interior, before vs
after, sketch vs render, day vs night, exterior vs detail. Needs two real, related images.

## The spine
```
z2   giant ghost display word (bottom, bleeding off-edge) — optional but strong (benchmark 66)
z5   BASE image (full-bleed, bg-cover)                     ← real image #1
z7   REVEAL image (full-bleed) masked by a cursor-following radial gradient ← real image #2
z8   hero content (headline + CTA), pointer-events managed
z10  fixed nav (often mix-blend-difference logo)
z50  grain (optional)
```

## Core mechanic (from `patterns/cursor-spotlight-mask.md`)
- Track the cursor; lerp-smooth it (`smooth += (raw - smooth) * 0.1`) in a rAF loop.
- Each frame: draw a radial gradient (feathered stops: 1 → 1 @0.4 → .75 → .4 → .12 → 0 @1)
  to a hidden canvas, `toDataURL()`, apply as `mask-image` on the reveal layer.
- The feathered falloff is essential — a hard circle looks like a cheap flashlight.

## Entrance (benchmark 66 signature)
- **Box-reveal splash:** 10 boxes (2 rows × 5) slide off vertically (staggered 50ms) to
  uncover the page, then hide. ~1.35s total.
- **Hero image entrance:** `scale(1.5) rotate(3deg)` → `scale(1) rotate(0)` over 1.2s.
- **Word reveal:** headline words blur-in staggered.
- **Giant ghost word:** slides up from below (`translateY(330px) → 0`, 1s, ease [0.16,1,0.3,1]).

## Key CSS
```css
.hero{position:relative;min-height:100svh;overflow:hidden;background:#e4e4e4}
.base,.reveal{position:absolute;inset:0;background-size:cover;background-position:center}
.base{z-index:5} .reveal{z-index:7;pointer-events:none}
.ghost{position:absolute;bottom:-40px;inset-inline:0;z-index:2;text-align:center;
  font-size:clamp(180px,28vw,560px);line-height:.8;letter-spacing:-.04em;color:#f4f1e8;white-space:nowrap}
#reveal-canvas{display:none}
```
Reveal layer masking:
```js
imgLayer.style.webkitMaskImage = imgLayer.style.maskImage = `url(${canvas.toDataURL()})`;
imgLayer.style.webkitMaskSize = imgLayer.style.maskSize = '100% 100%';
```

## Reduced motion (mandatory)
No spotlight trailing — show the base image only, or reveal the second image via a static
tap region on touch. Skip the box-reveal splash (fade it instantly). No rAF loop.

## Craft checklist
- [ ] Two REAL, related images (the whole concept depends on real media).
- [ ] Feathered radial mask (not a hard circle); cursor lerp-smoothed.
- [ ] Touch/mobile fallback (no hover) + reduced-motion path.
- [ ] Giant ghost word as optional depth layer, deliberate display face.
- [ ] One accent, high-contrast headline; grain optional for tactility.

## Note
This composition is pointless without two real images. If you only have one image or none,
use **cinematic-video-hero** or **giant-type-hero** instead — do not fake it with gradients.
