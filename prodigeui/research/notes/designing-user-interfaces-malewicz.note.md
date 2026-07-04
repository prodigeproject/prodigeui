---
sourceId: designing-user-interfaces-malewicz
sourceType: book
sourceName: "Designing User Interfaces"
sourceLocation: "Book/UI/Designing User Interfaces (Michał Malewicz, Diana Malewicz) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

The Malewicz approach emphasizes modern, production-ready UI design with strong opinions on contemporary aesthetics and practical rules:

- **Bold simplicity:** Modern UI tends toward fewer elements with higher impact. Remove everything that doesn't serve a purpose.
- **Depth through subtle shadows and layering:** Modern interfaces use subtle depth cues (soft shadows, layered cards) rather than flat or skeuomorphic extremes.
- **Color restraint with strategic accent:** Minimal color palette with one strong accent for attention direction.
- **Typography dominance:** Type is the primary design element. Strong typographic hierarchy reduces need for other decorative elements.
- **Component-first thinking:** Design in terms of reusable components from the start, not unique page layouts.
- **Glassmorphism and modern effects:** Frosted glass, subtle gradients, and blur effects as depth indicators (used sparingly).
- **Rounded corners for approachability:** Larger border-radius creates friendlier, more modern feel.
- **Dense information displays:** Pro tools need density; consumer apps need breathing room. Context determines spacing.
- **Dark mode as first-class citizen:** Many modern interfaces are dark-first, especially for professional/creative tools.
- **Micro-interactions as polish:** Subtle hover/transition effects signal quality and attention to detail.

## Concrete Rules & Parameters

| Rule | Parameter | Value |
|------|-----------|-------|
| Shadow softness | Modern shadow | `0 4px 12px rgba(0,0,0,0.08)` (very soft, wide spread) |
| Border radius (modern) | Standard | 12-16px for cards, 8px for buttons, 20-24px for large containers |
| Accent color usage | Proportion | 10-15% of total UI surface area |
| Typography ratio | Heading to body | 2.5-3x size difference between h1 and body |
| Card gap | Modern spacing | 16-24px between cards |
| Button padding | Modern feel | 12-16px vertical, 24-32px horizontal (generous) |
| Glassmorphism | Background blur | 12-20px blur, 70-80% opacity background |
| Gradient angle | Default | 135deg or 180deg (diagonal or vertical) |
| Input styling | Modern | No visible border (background differentiation), border on focus |
| Avatar/thumbnail | Border radius | 50% (full circle) for people, 12-16px for content thumbnails |
| Animation duration | Micro-interaction | 150-250ms for hover/state changes |
| Skeleton loading | Border radius | Match final component radius |
| Toast notification | Position | Top-right or bottom-center |
| Color for hierarchy | Background shading | 1-2% lightness difference for section separation |

## Modern Context Application

**Responsive Design:**
- Component-first approach naturally supports responsive: components reflow in grid
- Large border-radius may reduce proportionally on mobile (16px to 12px)
- Glassmorphism effects may be removed on lower-performance devices
- Dense layouts (pro tools) switch to expanded layouts on mobile

**Dark Mode:**
- Dark-first philosophy: design in dark mode, then derive light mode
- Glassmorphism translates well to dark mode (light blur overlays on dark)
- Shadows need adjustment: use inner glow or lighter borders on dark
- Subtle gradients more visible on dark backgrounds (can be more restrained)

**Token Systems:**
- Modern shadow tokens: softer, wider spreads than traditional (blur: 12-24px)
- Radius tokens scaled larger than traditional (8-24px as standard range)
- Color tokens with very subtle background differentiation (1-3% steps)
- Motion tokens for micro-interactions (150-250ms range)
- Glassmorphism tokens: blur, opacity, and background-color sets

**Component States:**
- Default: minimal borders, background differentiation, soft shadow
- Hover: slightly elevated shadow + micro-animation (scale 1.01-1.02)
- Active: reduced elevation + darker shade
- Focus: accent color ring + slight glow
- Disabled: reduced opacity + desaturated
- Modern inputs: borderless default, accented border on focus only

## Anti-AI-Slop Indicators

Expert UI (Malewicz style):
- Bold typographic hierarchy (large headings, subtle body)
- Strategic accent color (not scattered across interface)
- Soft, modern shadows (not harsh drop-shadows)
- Consistent, generous border radius
- Component-based consistency (same card style everywhere)
- Subtle micro-interactions on hover/focus
- Intentional whitespace proportional to content density needs

AI Slop (fails modern aesthetics):
- Generic styling without design opinion
- Hard, dated shadows (small offset, no blur)
- Small, inconsistent border radius (2px here, 4px there)
- Color scattered randomly without accent strategy
- Template/wireframe feel (no depth, no hierarchy)
- No hover/transition effects (static, lifeless)
- Inconsistent component styling (different cards have different rules)

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Soft shadow system | `tokens/elevation.json` | Modern shadow values (wide blur, low opacity) | Contemporary depth |
| Large border radius | `tokens/radius.json` | card: 12-16, button: 8, container: 20-24 | Modern approachability |
| Accent proportion | `design-rules/structure.rules.json` | accentSurfaceRatio: "10-15%" | Color restraint |
| Typography dominance | `design-rules/structure.rules.json` | headingToBodyRatio: "2.5-3x" | Type as primary hierarchy |
| Glassmorphism tokens | `tokens/effects.json` | blur: 16px, opacity: 0.75, backdropFilter | Modern depth effect |
| Micro-interaction timing | `tokens/motion.json` | hoverDuration: 200, stateChange: 150 | Polish indicator |
| Modern input styling | Component spec | borderless default, accent border on focus | Clean, modern feel |
| Background differentiation | `tokens/color.json` | surfaceStep: "1-2% lightness" | Subtle section separation |
| Component-first design | `design-rules/structure.rules.json` | Reusability requirement per component | System consistency |
| Dark-first option | `tokens/color.json` | Dark mode as primary derivation base | Modern professional apps |

## Cross-References

- **Practical UI (Dannaway):** Complementary rules; Malewicz leans more opinionated/modern while Dannaway is more systematic
- **Refactoring UI (Wathan/Schoger):** Shadow/elevation systems compatible; Refactoring UI provides the system, Malewicz provides aesthetic direction
- **Laws of UX (Yablonski):** Aesthetic-Usability Effect validates investment in visual polish
- **UI Design Principles (Filipiuk):** Overlapping principles with different depth
- **UI Design Systems Mastery (Budarina):** System-level implementation of these component-first principles
