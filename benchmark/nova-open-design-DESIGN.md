# Design System Inspired by NOVA

> Category: Creative Studio / Agency
> An editorial, paper-grounded identity for a motion-first creative studio — quiet confidence over loud gradients.

## 1. Visual Theme & Atmosphere
Warm-paper editorial. The mood is a well-printed art book, not a dashboard. Generous
margins, one deliberate accent, type doing the heavy lifting. No glassmorphism, no
neon gradients, no drop-shadow soup — restraint is the brand.

## 2. Color Palette & Roles
- `--bg` `#F6F3EC` warm paper (never pure #FFF)
- `--surface` `#FFFFFF` lifted cards only
- `--fg` `#141414` ink (never pure #000)
- `--muted` `#5C574E` (passes 4.5:1 on paper)
- `--border` `#141414` @ 12% alpha (hairline structure)
- `--accent` `#B3341C` editorial vermillion — the ONE accent, used 5–10% of surface.
  Deliberately NOT Tailwind indigo/purple (#6366F1 #4F46E5 #4338CA #3730A3 #8B5CF6
  #7C3AED #A855F7 — the banned "AI-tell" hexes). Accent discipline: at most 2 visible
  uses of --accent per screen; links demote to --fg + underline.

## 3. Typography Rules
- Display/headings: a grotesk with real weight range (e.g. Space Grotesk / Söhne),
  tight tracking on large sizes.
- Body: a readable humanist serif or sans at 1.6 line-height.
- Scale is editorial: big jumps H1→body (≥4:1), not timid.

## 4. Component Stylings
Hairline-bordered cards, no heavy shadows. Buttons are ink-on-paper with one
vermillion primary per view. A ledger/stat block uses Von Restorff — exactly one
figure accent-highlighted, the rest ink.

## 5. Layout Principles
8pt spacing rhythm, wide outer margins, single-column reading measure (60–70ch).
Asymmetry allowed; center-everything is not the default.

## 6. Depth & Elevation
Depth comes from hairline borders and paper layering, not shadows. At most one lifted
white surface tier above the paper base; no stacked glow or blur.

## 7. Do's and Don'ts
Do: one accent, editorial type, generous whitespace, reduced-motion support.
Don't: indigo/purple gradients, infinite marquees, center-everything, pure #000/#FFF.

## 8. Responsive Behavior
Single reading column collapses gracefully; margins shrink but never vanish. Type scale
steps down one ramp on mobile; the single accent and hairlines are preserved.

## 9. Agent Prompt Guide
"Editorial creative-studio landing on warm paper (#F6F3EC), ink text (#141414), ONE
vermillion accent (#B3341C) used at most twice per screen, big grotesk display type,
subtle scroll motion, no purple gradients." Motion is subtle 200–400ms; imagery is
full-bleed duotone photography treated as content; voice is dry and plainspoken.
