# Benchmark Pattern Taxonomy (Prompts 1–73)

> The 73 benchmark prompts are award-quality, fully-specified reference pages. They are
> the single highest-signal source we have for "what great actually looks like." This
> document mines all 73 as SOURCES (not just targets) into a concrete, reusable taxonomy.
> It is the empirical backbone of the `craft/compositions/` library and the composition
> rules. Every claim below is a frequency observation across the 73 specs.

## The single most important finding

**~83% of heroes use a REAL video or REAL image as the focal subject** (video specifically
is the focal/background subject in ~52% of all prompts). Pure CSS gradient/mesh/shader as
the hero focal subject is **rare-to-nonexistent** — and where a gradient/shader appears it
is textural *behind* real type or media, never the empty subject itself.

> This is the rule the messy NOVA violated: it used a blurry animated CSS gradient mesh as
> the hero with no real focal subject. That composition does not exist in the reference set.
> **A hero must be anchored by a real subject: video, photography, a product/UI artifact,
> a 3D render, or oversized type — never a blurred gradient blob.**

## Hero archetype frequency (across all 73)

| Archetype | ~Count | Description |
|-----------|:-----:|-------------|
| **cinematic-video-hero** | ~22 | Full-bleed real video, content overlaid on glass/gradient legibility |
| **giant-type-hero** | ~19 | Oversized display type IS the focal object (over video/image/shader) |
| **product-showcase-hero** | ~14 | Real product UI / mockup / dashboard as focal (often clipped at viewport bottom) |
| **split-editorial-hero** | ~10 | Text/form column + visual column (or conversational/typewriter) |
| **spotlight-reveal-hero** | ~4 | Cursor spotlight reveals a second image (canvas mask) |
| carousel / portrait / 3D / other | rest | figurine carousel (6), magnetic portrait (1), Spline/WebGL orb (29,50) |

Video-led heroes (cinematic + product-with-video + scrub + split-with-video) are the
plurality by a wide margin.

## Signature technique frequency (the reusable primitives)

| Technique | ~Count | Notes |
|-----------|:-----:|-------|
| **Liquid-glass CSS** (mask-composite gradient border) | ~20 | THE most copy-pasted primitive across the whole set. Same recipe recurs verbatim. |
| **Full-bleed autoplay video** | ~35 | Legibility from glass/gradient, NOT dark scrims (57 explicitly bans a scrim) |
| **Word/char reveal** (blur+translate, staggered) | ~15 | The default entrance language |
| **Staggered fade-up delay ladders** | ~25 | 0.1–0.2s increments; `animation-fill-mode` matters |
| **rAF video processing** (crossfade / boomerang / scroll-scrub / frame-extract) | ~10 | Recurring differentiator: crossfade(2,7,11,12,31,34,53), boomerang(19,61), scrub(9,14,55,64), frame-canvas(13), HLS(10,25) |
| **Floating / glass pill navbar** | ~18 | Center-links pill, or two/three-pill split |
| **Multi-video crossfade switcher** | ~4 | Labeled buttons swap ambience (67:4-video, 68:3-video, 51 tabs) |
| **Cursor spotlight / mask reveal** | ~4 | Canvas radial → toDataURL → mask-image (3,66); scrub(64) |
| **Marquee / ticker** (infinite or scroll-linked) | ~8 | Logo walls, kinetic type, dual opposing rows |
| **Sticky-stack / scroll-pin cards** | ~3 | Project stacks (1,10) |
| **Gradient clip-text** (incl. animated shiny) | ~8 | `-webkit-background-clip:text`; 21 animates position 6s |
| **Splash / loader prelude** | ~4 | count-up 000→100 (10,59), box-reveal (66), panel (64) |
| **mix-blend-mode UI** | ~3 | difference (66), exclusion (64) |
| **Magnetic hover** | ~2 | Portrait/CTA cursor attraction (1) |
| **Live clock chrome** | ~2 | Intl.DateTimeFormat, updates/sec (20,68) |
| **Bento / masked-image mosaic** | ~4 | Shared image sampled per-cell (59,69) |

Unique standouts worth a recipe: orbital rotating avatars (63), @property conic-gradient
rotating border (63), SVG signal-beam pipeline + neumorphic nodes (60), concave corner-mask
panels (24), mouse-trail image spawner (16), shader-stack background (20).

## Typography signature (near-universal)

- **Instrument Serif (italic) + Inter (body)** is the dominant premium pairing (~14 specs).
- **Inter** is the default body/UI font (~30 specs).
- Recurring trait in EVERY giant-type record: **oversized headings with heavy negative
  tracking** (−0.02em to −6px / −0.07em) and **tight leading (0.79–1.1)**.
- Display fonts used deliberately (never system-default-by-reflex): Anton, Kanit, Playfair
  italic, Almarai, PP Neue Montreal + PP Mondwest, Helvetica Now Display, Neue Haas Grotesk,
  FSP Podium Sharp, Readex Pro, Figtree, DM Serif Display, Source Serif 4, Space Mono + Anton SC.
- Fluid `clamp()` sizing to giant scale (up to 200px name / 560px ghost type) is standard.

## Color signature

- **~50/50 dark vs light**, each with a SINGLE saturated accent. Dark = near-black
  (#000–#0c0c0c) + white + white-opacity tiers (/40 /50 /60 /70 /80 /90) for hierarchy.
- Accents seen: green (#5ed29c, #85AB8B, #17c964, #DCFF00), orange (#e8702a, #F26522, #ef4d23),
  blue/navy (#3D81E3, #2C5C88), purple/pink (#7342E2, #A068FF, #F598F2), cyan (#75C5DE).
- Several specs explicitly **ban purple/indigo** (8, 15) — reflex-AI-purple is a known tell.
- Legibility over media comes from **glass chrome + gradient fades**, NOT flat dark overlays.

## Recurring full-page composition skeletons (the missing layer)

1. **Full-bleed video hero + floating glass nav + centered-or-bottom glass content (+ widget).**
   The most common single skeleton. (2,5,7,12,53,57,61,67,71,73,51,25,…)
2. **Centered stacked hero:** small badge/eyebrow → giant H1 → muted subtext → CTA row (+ stats).
   (22/23, 58, 71, 73, 20)
3. **Bottom-anchored editorial hero:** `flex-1` spacer pushes content to the bottom; 2-col
   (heading left / tag or description right); optional corner stat clusters. (8,15,54,57,62,64,68)
4. **Dark portfolio multi-section:** loading? → hero → marquee/works → about → services
   (often a rounded-top light section w/ negative-margin overlap) → sticky/stacked projects →
   contact/footer (often flipped video). (1,10,16)
5. **Bento / multi-card grid filling the viewport (no-scroll):** one dominant cell + supporting
   cells, real media inside. (59,69,52,24)
6. **Split media|form:** left type/form, right visual/video; responsive source-order reflow. (9,14,63,54,55)
7. **Product/SaaS long page:** hero → product mockup / feature grid → logo cloud → testimonials
   (3-col) → pricing (toggle + 3 cards) → final glass CTA. (21,16)
8. **Splash/loader → navbar → sections.** (59,64,66,10)

## Cross-cutting craft laws (derived, not invented)

1. **Anchor every hero with a real focal subject** (video / image / product / 3D / giant type).
   Never a blurred gradient blob.
2. **Legibility from chrome, not dimming:** liquid-glass + gradient fades over raw media beats
   a flat dark overlay.
3. **Giant, tight, negative-tracked display type** is the typographic signature. Pair a display
   face with Inter; do not ship untouched system type at hero scale.
4. **Motion is the default entrance language:** staggered blur/translate word reveals + delay
   ladders; rAF video tricks as differentiators; `animation-fill-mode: backwards` when an
   entrance animation wraps a `backdrop-filter` child (or the glass breaks — noted in prompt 61).
5. **One restrained accent** over a committed dark or light base. Avoid reflex purple.
6. **Floating pill navbar** is the default chrome.
7. **Full reduced-motion path** is present in the best specs (66, 68 explicitly).

## How this maps to ProdigeUI artifacts
- → `craft/compositions/` — the 8 skeletons above become full-page reference compositions.
- → `craft/composition.md` — page-level craft guide.
- → `quality-gate` — new hard rules: real focal subject; no gradient-mesh-soup hero.
- → `craft/patterns/` — already covers the isolated techniques; this adds how to ASSEMBLE them.
