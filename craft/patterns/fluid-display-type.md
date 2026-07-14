# Craft Pattern — Fluid Display Typography

## What it delivers
Enormous, confident headlines that scale smoothly from mobile to ultra-wide using
`clamp()` and viewport units, with the tight tracking and line-height that big type
requires. This is the highest-leverage, lowest-cost craft move: distinctive typography
carries more personality than any decoration.

## When to use
Every expressive hero. Landing pages, portfolios, brand sites. The headline IS the
design in many reference sites (giant "PRISMA", "TOONHUB", ghost text behind imagery).

## The recipe (CSS / Tailwind)

```tsx
// Fluid hero headline — scales with viewport, never needs breakpoint juggling.
<h1
  className="font-display uppercase"
  style={{
    fontSize: 'clamp(2.5rem, 14vw, 17.5rem)',
    lineHeight: 0.9,
    letterSpacing: '-0.03em',
    fontWeight: 800,
  }}
>
  Hi, I&apos;m Jack
</h1>
```

Common fluid ramps:

| Role | clamp() | Tracking | Line-height |
|------|---------|----------|-------------|
| Giant ghost / hero | `clamp(90px, 28vw, 380px)` | `-0.02em` | 1.0 |
| Display headline | `clamp(2.5rem, 12vw, 160px)` | `-0.03em` | 0.9–0.95 |
| Section heading | `clamp(2rem, 6vw, 4.5rem)` | `-0.02em` | 1.0 |
| Lead paragraph | `clamp(1rem, 2vw, 1.35rem)` | 0 | 1.5 |

## Craft notes
- **Negative tracking scales with size.** The bigger the type, the tighter it must be:
  `-0.02em` to `-0.05em` on display, `0` on body. Default tracking on huge type is the
  #1 amateur tell.
- **Line-height drops as size grows.** Display headlines sit at 0.85–1.0, never 1.5.
- **Pick a real display font.** Anton, Instrument Serif, Kanit, Playfair (italic),
  Helvetica Now Display — a display face at scale reads as designed. System sans at
  120px reads as unfinished. See `assets/asset-sourcing.guide.md` for font loading.
- **Gradient text for depth:** `background: linear-gradient(...)` +
  `-webkit-background-clip: text; -webkit-text-fill-color: transparent;` gives metallic
  or tonal headlines. Use sparingly and keep contrast legible.
- **Ghost text technique:** a giant word behind the hero subject (opacity 1, white,
  positioned absolute, low z-index) with the subject overlapping it — instantly editorial.

## Performance
- Preload display fonts (`<link rel="preload" as="font" crossorigin>`) and use
  `font-display: swap` to avoid invisible text.
- Subset to the characters you need for one-word display headlines.

## Reduced motion
Typography is static — no motion concern. If the headline animates in, see
`text-reveal.md` and gate the animation on `prefers-reduced-motion`.

## Accessibility
Gradient/`text-fill-color: transparent` headings still expose real text to screen readers
and search — keep the actual text in the DOM, never bake it into an image.
