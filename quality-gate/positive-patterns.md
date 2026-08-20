# Positive Design Patterns

> For every anti-pattern in the slop checklist, here is what expert designers do instead.
> Use this as a companion guide: when a quality gate flags something, look here for the fix.

---

## FAIL Alternatives (What Correct Implementation Looks Like)

### 1. Instead of raw values — Use tokens everywhere

- Reference `var(--space-md)` not `16px`. Reference `var(--color-text-primary)` not `#1a1a2e`.
- If a value does not exist in the token scale, add it to the scale first, then reference it.
- Run a token coverage lint as part of CI. Zero raw values is the target.

### 2. Instead of low normal-text contrast — Design with contrast-first

- Start with the darkest text on the lightest background, then work toward decorative tones.
- Use a contrast checker during design, not after. Minimum 4.5:1 for body text, always.
- For light themes: text should be at least #4a4a4a on white. For dark themes: at least #d1d1d1 on dark.

### 3. Instead of low large-text/UI contrast — Give UI elements visual weight

- Borders on inputs: use at least #767676 on white (3:1 ratio).
- Icons acting as interactive controls: ensure the icon color meets 3:1 against its background.
- Test focus rings separately — they need 3:1 against both the background AND the component surface.

### 4. Instead of missing focus indicators — Design focus as a first-class state

- Use a 2px solid outline with `outline-offset: 2px` in the brand's action color.
- Never use `outline: none` without a visible replacement (box-shadow ring, border change, or background shift).
- Test by tabbing through the entire page with your mouse unplugged.

### 5. Instead of off-scale spacing — Commit to your spacing scale

- Define a base unit (4px) and only use multiples: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
- If a gap feels wrong, adjust the scale itself — do not use a one-off value.
- Lint for non-scale values. Treat them like type errors.

### 6. Instead of flat information — Build deliberate hierarchy

- Each heading level should differ by at least 1.25x scale ratio from its neighbor.
- Use weight (bold vs regular) AND size together. Size alone is not enough.
- Squint test: blur your screen — can you still identify 3 distinct content levels?

### 7. Instead of hardcoded colors — Use semantic color roles

- Map every color usage to a role: `surface.primary`, `text.secondary`, `action.default`, `feedback.error`.
- Primitives (hex values) live only in the token definition file, never in component code.
- Verify by switching themes — if something breaks, you have a semantic mapping gap.

### 8. Instead of missing states — Design the full state matrix

- For every interactive component, define: rest, hover, focus, active, disabled, loading, error.
- Create a state matrix document showing all combinations.
- Use subtle transitions between states (150-200ms ease) so changes feel alive, not jarring.

### 9. Instead of keyboard traps — Design escape routes

- Every overlay (modal, dropdown, popover) must close on Escape key press.
- Focus must return to the trigger element when an overlay closes.
- Test with Tab and Shift+Tab through every interactive region. Focus must always move forward.

### 10. Instead of tiny touch targets — Size for real fingers

- Minimum 44x44px on mobile for all tappable elements. Use padding to expand small icons.
- On desktop, 32x32px minimum. Icon-only buttons should have invisible padding to meet the target.
- Space adjacent targets at least 8px apart to prevent mis-taps.

---

## FLAG Alternatives (What Intentional Design Looks Like)

> **Read this first — context matters.** The alternatives numbered 11–25 below describe
> the RESTRAINED interpretation, appropriate for functional/app/data-dense UI where
> clarity is the job. They are NOT a blanket ban on the technique. For EXPRESSIVE
> use-cases (landing, portfolio, launch, brand, creative tool), the intentional move is
> often to USE the technique with craft — glass over video, parallax for depth, a
> gradient-border focal accent, a huge fluid display headline. See the "Craft Presence
> Rubric" at the end of this file and the `craft/` library. Match the response to the
> use-case: restraint for tools, craft for expression.

### 11. Instead of AI-purple gradients

- Use the brand's primary color palette with intentional color roles assigned to each.
- If purple IS the brand color: use a tonal scale (50-900) with purpose, not a gradient.
- Choose accent colors that solve a hierarchy problem, not ones that look "techy."

### 12. Instead of centered hero on dark mesh

- Use asymmetric layouts that guide the eye along a reading path (F-pattern or Z-pattern).
- Consider split layouts: content left with clear CTA, supporting visual right.
- Use the brand's visual language — photography, illustration, or data viz — not generic mesh.

### 13. Instead of three equal cards

- Create visual hierarchy: one prominent card + two supporting. Use size or elevation to differentiate.
- Apply a "recommended" badge or highlight to guide decision-making.
- Consider a comparison table for feature-heavy content instead of card repetition.
- In expressive galleries, combine dominance with a second independent signal: offset, stagger,
  crop/height variation, overlap, or intentional negative space. Repeated 7/5 rows remain flat.
- Rotate container width or topology between consecutive expressive chapters; changing images
  inside the same frame does not create rhythm.
- Keep project title, category/year, and the primary identity cue visible without hover or focus.
- Verify the rendered CSS preserves intended dominance and varied geometry; a shared fixed height,
  aspect ratio, or min-height must not turn unequal project spans back into matching cards.

### 13a. Instead of a utility-only expressive footer

- End with a closing chapter: proposition-scale type, one specific action, useful
  contact/navigation/availability context, and a visual echo from earlier in the page.
- Keep copyright and social links as metadata inside or below the chapter, not as the finale.
- Full-bleed is optional. Scale, spacing, and hierarchy can resolve a contained close.
- Use only one ambient visual system behind one proposition, one primary action, and one compact
  context row. Remove duplicate marquees, repeated slogans, and competing video/particle layers.

### 14. Instead of unquestioned Inter + Slate-900

- Document why your type choice is correct for the audience and reading context.
- Consider alternatives: system fonts for performance, serifs for long-form, geometric sans for modern brands.
- If Inter wins the evaluation, pair it with intentional text colors from the semantic palette, not raw slate.

### 15. Instead of decorative glassmorphism

- Use elevation (shadow) and layering to communicate depth without blur.
- Reserve backdrop-blur for functional overlays where seeing underlying content provides context.
- If glass is used: ensure text contrast meets requirements ON TOP of the blurred area at all times.

### 16. Instead of too many type sizes

- Define a modular scale (1.2x or 1.25x ratio) and stick to 5-6 sizes maximum across the system.
- On any single screen, use at most 3 sizes: heading, body, and caption/label.
- Additional sizes require explicit justification in the design rationale.

### 17. Instead of decorative animation

- Every animation must answer: "What state change am I communicating?"
- Use motion to show cause and effect (button press causes panel to slide).
- Apply the Delight Budget: max 1-2 purely delightful animations per page, and they must be skippable.

### 18. Instead of information overload

- Apply progressive disclosure: show 3-5 primary actions, hide the rest behind "More" or contextual menus.
- Use Hick's Law: fewer choices = faster decisions. Group related options.
- Prioritize ruthlessly — if everything is important, nothing is. Pick the ONE primary action per screen.

### 19. Instead of everything-at-once interfaces

- Break complex flows into steps (wizard pattern) with clear progress indication.
- Use expandable sections for advanced options — collapsed by default, available on demand.
- Show smart defaults so users can accept and move forward without understanding every option.

### 20. Instead of unprompted bounce/spring

- Reserve spring physics for direct manipulation: drag-and-drop, pull-to-refresh, swipe actions.
- Page load animations should use ease-out (deceleration) — things arriving, not bouncing.
- If an element was not directly touched by the user, it should not bounce.

### 21. Instead of generic CTAs

- Write CTAs that describe the outcome: "Start 14-day trial" not "Get Started."
- Match CTA copy to the user's mental model at that point in the journey.
- Use verb + noun format: "Download report", "Create project", "Join waitlist."

### 22. Instead of decorative gradient borders

- Use borders to communicate state: selected (brand color), error (red), disabled (muted).
- For visual interest, use subtle background tints or elevation changes instead of border decoration.
- If gradient borders are used, they must encode information (progress, category, status).

### 23. Instead of uniform large radius

- Define a radius scale: sm (4px) for small elements, md (8px) for cards, lg (12px) for modals.
- Nest radiuses: inner elements use smaller radius than their container.
- Full-round (pill) only for specific semantic elements like tags, badges, or avatar frames.

### 24. Instead of parallax on content pages

- For reading-focused pages: use fixed layouts with clear typographic rhythm and generous whitespace.
- Reserve parallax for experiential storytelling pages (portfolios, product launches).
- Use scroll-triggered reveals sparingly — only for initial entry of key content sections.

### 25. Instead of animating every scroll event

- First appearance only: elements animate in once, then stay static on re-scroll.
- Stagger entrance of grouped items (50-100ms delay each) but only the first time they appear.
- Repeated content (list items beyond the first 3-5) should appear instantly with no animation.

---

## Quick Reference: Pattern-to-Alternative Map

| Slop Pattern | Expert Alternative |
|---|---|
| Raw px/hex values | Token references everywhere |
| Low contrast text | Contrast-first design process |
| No focus ring | Focus as designed first-class state |
| Off-scale spacing | Strict spacing scale adherence |
| Flat hierarchy | Deliberate size + weight differentiation |
| AI-purple gradient | Brand-derived intentional palette |
| Centered dark hero | Asymmetric guided-eye layouts |
| Three equal cards | Hierarchy with visual emphasis |
| Generic Inter + Slate | Documented typographic rationale |
| Decorative glass | Functional elevation and layering |
| Bounce on load | Spring reserved for direct manipulation |
| Generic "Get Started" | Outcome-describing verb + noun CTA |
| Gradient borders | State-communicating border color |
| Uniform large radius | Scaled radius system (sm/md/lg) |
| Parallax everywhere | Reserved for experiential pages only |
| Animate every scroll | First-appearance-only reveals |

---

## Craft Presence Rubric (Expressive Use-Cases)

> Avoiding slop is not the same as being good. This rubric is the POSITIVE gate: for
> expressive output (`DESIGN_VARIANCE >= 0.6` or `MOTION_INTENSITY >= 0.5`), the design
> must actively demonstrate craft. Score each dimension. An expressive page that scores
> low here is competent-but-forgettable — the exact failure this kit exists to prevent.

Score 0 (absent) / 1 (present but weak) / 2 (strong) on each. Target: >= 9/12 for
expressive work.

| # | Dimension | 0 — Slop | 2 — Craft | Recipe |
|---|-----------|----------|-----------|--------|
| 1 | **Hero signature** | Centered text on a flat color | Crossfading video / cursor spotlight / magnetic hero / giant ghost type | `craft/patterns/video-hero-crossfade.md`, `cursor-spotlight-mask.md`, `magnetic-hover.md` |
| 2 | **Typography** | Untouched system/Inter, default tracking | Display face at fluid `clamp()` scale, tight negative tracking | `craft/patterns/fluid-display-type.md` |
| 3 | **Motion choreography** | Uniform fade-in, or none | Staggered word/char reveal, scroll-linked sweep, sequenced entrance | `craft/patterns/text-reveal.md`, `motion/choreography.md` |
| 4 | **Material coherence** | Arbitrary effects or unresolved flatness | Surface treatment—flat or dimensional—supports hierarchy, feedback, and the concept | `craft/model-robust-generation.md` |
| 5 | **Real media** | Gray placeholder boxes | Real video/image/illustration integral to the concept | `assets/asset-sourcing.guide.md` |
| 6 | **Focal hierarchy** | Everything equal weight | One dominant element per viewport; bento over equal cards | `craft/patterns/bento-grid.md` |

Additional craft signals (bonus, not required): sticky card stacks, opposing-direction
marquees, HLS adaptive video, animated gradient-border focal accents, scroll parallax
with depth — each with a reduced-motion fallback.

### How to score in practice
1. Identify the use-case and dials. If restrained (tools/dashboards), this rubric is
   advisory only — clarity wins and a score of 3–4 can be correct.
2. If expressive, walk the six dimensions. Anything at 0 is a gap: open the linked recipe
   and add it before shipping.
3. Record the score in the Quality Gate report. An expressive page below 9/12 fails the
   `craft-presence` criterion and loops back to craft selection.

### The one-line test
> "If I screenshot this next to a top figma-site / award-style reference, does it look
> like it belongs — or like a competent template?" If it's a template, it hasn't shipped
> craft yet, no matter how many slop checks it passed.
