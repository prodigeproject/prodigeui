# Aesthetic Style Presets

> Each preset is a STARTING CONTRACT: palette, type, effects, motion, and the do/don't that
> keeps it from sliding into slop. Commit fully; apply `craft/taste.md` and the quality gate
> on top. Colors are OKLCH-friendly hex starting points — retune to the concept, don't ship
> the literal defaults twice in a row.

---

## minimal (Swiss-clean, product-default)
- **Palette:** off-white `#fafafa` bg, ink `#111` text, one accent (emerald `#0f9d58` or
  electric blue `#2563eb`), neutral grays. Chroma near 0.
- **Type:** one grotesk (Geist / Inter Tight) across weights; scale 14/16/20/24/32/48;
  leading 1.5 body, 1.05 display; tracking −0.02em on headings.
- **Effects:** hairline borders, no shadow or one soft tinted shadow; radius 8–12px.
- **Motion:** 150–200ms, opacity + 2px translate only.
- **Do:** whitespace as structure, strong hierarchy. **Don't:** decorative anything.

## editorial (magazine)
- **Palette:** paper `#111`/`#f7f5f0` duotone, one ink accent; restrained.
- **Type:** display SERIF (deliberate: PP Editorial, GT Sectra, Reckless — NOT reflex
  Fraunces/Instrument) + grotesk or mono body; big drop-scale, asymmetric columns.
- **Effects:** rules/hairlines, generous margins, pull-quotes, figure captions in mono.
- **Motion:** minimal; scroll-reveal on figures only.
- **Do:** real photography, column grid, `text-wrap: balance`. **Don't:** cards, glass.

## brutalism
- **Palette:** raw white/black + ONE loud primary (red `#ff3b30`, blue `#0000ff`).
- **Type:** system-ui or monospace, huge, tight; visible structure.
- **Effects:** hard 1–3px black borders, no radius, no shadow, exposed grid.
- **Motion:** instant or harsh; no easing softness.
- **Do:** intentional rawness, honesty. **Don't:** soften it into "clean brutalism" mush.

## neobrutalism
- **Palette:** high-sat pastels on white (lime, sky, pink) + black outlines.
- **Type:** bold grotesk, chunky weights.
- **Effects:** thick black borders, hard offset drop-shadow (`4px 4px 0 #000`), radius 4–8px.
- **Motion:** press = shadow collapses + translate; playful, snappy.
- **Do:** commit to the offset-shadow system everywhere. **Don't:** mix with soft shadows.

## claymorphism
- **Palette:** soft pastel surfaces, low contrast (verify 4.5:1 on text — the trap).
- **Type:** rounded sans (Nunito, Quicksand), friendly.
- **Effects:** puffy double shadows (inner light + outer soft), big radius 20–32px.
- **Motion:** springy, bounce 0.2.
- **Do:** toys/kids/wellness. **Don't:** enterprise; watch text contrast.

## neumorphism (use sparingly)
- **Palette:** single mid-tone surface (`#e0e5ec`), same-hue shadows.
- **Effects:** dual inset/outset soft shadows; controls extrude from one surface.
- **Warning:** low affordance + contrast risk. Use for one showcase component, not a form.

## glassmorphism
- **Palette:** vivid gradient or photo behind; translucent panels.
- **Effects:** `backdrop-filter: blur(16px)`, 1px light border, layered highlights; provide
  a solid-fill fallback for `prefers-reduced-transparency`.
- **Do:** glass as CHROME over real media (see `craft/patterns/liquid-glass.md`).
  **Don't:** glass on a flat bg (that's the reflex slop). Text on glass must still hit 4.5:1.

## neon / cyberpunk (dark-tech)
- **Palette:** near-black `#0a0a0f`, one or two neon accents (cyan `#22d3ee`, magenta
  `#e935c1`); glow via layered box-shadow, not on body text.
- **Type:** mono or techy grotesk (Space Grotesk, JetBrains Mono labels).
- **Effects:** grid/scanline texture, subtle glow, gradient borders on ONE focal element.
- **Motion:** flicker/decrypt text, pulse; keep sub-300ms.
- **Do:** commit the dark base. **Don't:** neon on everything; keep body text non-glowing 4.5:1.

## retro / vintage
- **Palette:** warm muted (mustard, rust, cream — but avoid the beige DEFAULT; make it
  deliberate), or 80s synth (purple/teal/pink with intent).
- **Type:** period display (Cooper, chunky serif, or pixel for 8-bit).
- **Effects:** grain, halftone, riso-print offset, worn textures.
- **Motion:** VHS jitter / marquee, used once.
- **Do:** cohesive era. **Don't:** ironic mashup unless that's the concept.

## bento
- **Palette:** any; the style is layout, not color.
- **Effects:** CSS Grid with mixed cell sizes, one dominant hero cell, real media in ≥2–3
  cells, radius 12–16px consistent.
- **Rule:** cell count = content count (no empty tiles); see `craft/patterns/bento-grid.md`.

## playful (consumer)
- **Palette:** 2–3 bright brand colors, high energy, high contrast.
- **Type:** rounded bold display; big, friendly.
- **Effects:** blobs/stickers used with intent, moderate radius, colored shadows.
- **Motion:** spring/stagger, character; still frequency-gated on app UI.

## premium (luxury) — anti-beige
- **Palette:** commit AWAY from the beige+brass+espresso reflex. Use cold-luxury (silver/
  chrome/smoke), forest+bone+amber, black+tan, cobalt+cream, or mono + one saturated pop.
- **Type:** high-contrast display + refined grotesk; tight tracking; lots of air.
- **Effects:** restraint, one material accent, real product photography.
- **Motion:** slow, elegant, `ease` not `ease-out`; cohesive.
- **Do:** name the palette against a real reference. **Don't:** default warm-craft palette.

## swiss / mono (developer)
- **Palette:** black/white + one accent; grid-honest.
- **Type:** one grotesk or one mono (Geist Mono, IBM Plex Mono) across the whole page.
- **Effects:** strict baseline grid, hairlines, tabular numbers, terminal motifs.
- **Motion:** minimal, functional.

---

## How to pick
1. Read the brief's vibe words + audience. 2. Match to a preset above (or blend two on the
   same commitment axis). 3. Run the two-altitude slop test — if the pick is guessable from
   category alone, push one tier deeper. 4. Commit the tokens page-wide (consistency locks).
   5. Compose with `craft/composition.md`, gate with `quality-gate/`.
