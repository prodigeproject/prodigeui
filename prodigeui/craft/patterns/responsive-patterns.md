# Responsive Patterns — Breakpoint Behavior per Component

> Defines the EXACT layout behavior at each breakpoint for every common component.
> When generating output, consult this document so responsive behavior is intentional,
> not an afterthought of media queries slapped on at the end.

## Breakpoints

| Token | Width | Target |
|-------|-------|--------|
| `sm` | 640px | Large phones (landscape) |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small desktops / tablets landscape |
| `xl` | 1280px | Standard desktops |

Mobile-first: base styles are mobile, add complexity upward.

---

## Navigation (Floating Pill Nav)

| Breakpoint | Behavior |
|------------|----------|
| **base** | Logo + hamburger trigger only. Nav links hidden. CTA hidden or icon-only. |
| **md** | Logo + nav links visible. Hamburger hidden. CTA pill visible. |
| **lg+** | Full nav with comfortable spacing (gap:28px). Max-width container. |

Key rules:
- Hamburger: `display:none` at md+, `display:grid` below.
- Nav links: `display:none` below md, `display:flex` at md+.
- CTA button always visible (but may shrink padding on mobile).
- Nav pill max-width matches `--maxw` at lg+, `calc(100% - 48px)` below.

---

## Hero Section

| Breakpoint | Behavior |
|------------|----------|
| **base** | Single column stack. Heading clamp min (~2.5rem). Image below text, full-width, aspect-ratio constrained. Product lane padding is at most 96px; expressive media-led heroes may use up to 120px when the focal subject activates the space. |
| **md** | Heading scales up. Increase side padding. Image may gain border-radius. |
| **lg+** | Split layout (grid 1fr 1fr) OR full-width centered. Heading at clamp max (~6rem). Parallax active. Hero shot with larger border-radius + shadow. |

Key rules:
- Heading ALWAYS uses `font-size: clamp(min, preferred, max)` — no breakpoint-specific font sizes.
- Hero padding must account for fixed nav height. Product/UI lane caps it at 96px. Expressive
  media-led heroes may reach 120px mobile / 160px desktop only when type or media visibly
  occupies the added space; empty padding is never a compositional device.
- `overflow:hidden` on hero container at all breakpoints.
- Video background: full cover at all sizes, no aspect-ratio change.

---

## Product Card Grid

| Breakpoint | Behavior |
|------------|----------|
| **base** | 1 column, full-width cards |
| **sm** | 2 columns |
| **lg** | 3 columns |
| **xl** | 3-4 columns (depending on card min-width) |

Key rules:
- Use `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` for fluid behavior.
- OR explicit: `repeat(1, 1fr)` → `repeat(2, 1fr)` → `repeat(3, 1fr)`.
- Card internal padding stays consistent (don't reduce below 20px).
- Image aspect-ratio stays fixed (1:1 or 4:5) — never stretch.

---

## Horizontal Carousel

| Breakpoint | Behavior |
|------------|----------|
| **base** | Full-width scroll, no arrows. Cards at `80vw` width for peek-through. Native swipe. |
| **md** | Cards at fixed width (260px). Arrows may appear. |
| **lg+** | Arrows visible (positioned outside container). Cards at 260-320px. |

Key rules:
- Arrows: `display:none` below 720px.
- On mobile: add `padding-left/right` to scroll container so first/last card isn't flush with edge.
- `scroll-snap-type: x mandatory` at all breakpoints.
- Card count visible: ~1.2 on mobile, ~3 on tablet, ~4-5 on desktop.

---

## Bento Grid (Features)

| Breakpoint | Behavior |
|------------|----------|
| **base** | Single column stack. `.big` cell loses `grid-row:span 2`, becomes normal. |
| **md** | 2-column grid. Big cell spans full width or 2 cols. |
| **lg+** | `grid-template-columns: 1.4fr 1fr`. Big cell spans 2 rows. |

Key rules:
- `@media(max-width:820px) { .bento { grid-template-columns:1fr } .cell.big { grid-row:auto } }`
- Cell padding stays ≥24px on mobile, 32px on desktop.
- Image inside cells: `aspect-ratio:16/9` maintained, never free-height.

---

## Masonry Gallery

| Breakpoint | Behavior |
|------------|----------|
| **base** | `columns:1`. Remove `max-height` on items (show full images). |
| **md** | `columns:2`. Re-apply `max-height:420px`. |
| **lg+** | `columns:3`. `max-height:420px`. `column-gap:16px`. |

Key rules:
- On single-column mobile, images render at natural aspect ratio (no cropping needed since there's no multi-column fragmentation).
- `break-inside:avoid` always active.
- Hover overlays: consider `always-visible` captions on touch devices (no hover discovery).

---

## Pricing Table

| Breakpoint | Behavior |
|------------|----------|
| **base** | Single column, cards stacked. Popular card first via `order:-1`. Max-width: 400px centered. |
| **md** | 2 columns (popular card may span full or be centered). |
| **lg+** | 3 columns, `gap:20px`, `align-items:start`. |

Key rules:
- Header row `flex-wrap:wrap` — toggle drops below title naturally on narrow screens.
- Price text `font-variant-numeric:tabular-nums` prevents layout shift on toggle.
- CTA button always `width:100%` inside card.

---

## Testimonial

| Breakpoint | Behavior |
|------------|----------|
| **base** | `max-width:100%; padding:0 24px`. Quote scales via clamp. Avatar row stacks if needed. |
| **lg+** | `max-width:900px`. Full breathing room. |

Key rules:
- Quote: `font-size: clamp(1.3rem, 3vw, 2.2rem)` — NO breakpoint override needed.
- Decorative quotation mark: may reduce from `7rem` to `5rem` on mobile if it overflows.
- Attribution always `flex-wrap:wrap` for safety.

---

## Metrics / Stats Row

| Breakpoint | Behavior |
|------------|----------|
| **base** | `grid-template-columns: repeat(2, 1fr)`. 2×2 grid. |
| **lg+** | `repeat(4, 1fr)`. Single row. |

Key rules:
- Numbers use `font-variant-numeric:tabular-nums` so they align.
- `text-align:center` at all breakpoints.
- Gap increases slightly on desktop (24px → 32px).

---

## FAQ Accordion

| Breakpoint | Behavior |
|------------|----------|
| **base** | Full-width, `max-width:100%`. |
| **md+** | `max-width:820px; margin:0 auto`. |

Key rules:
- Summary font-size: stays consistent (1.1rem), doesn't need scaling.
- Details padding: `22px 4px` always.
- The `+` icon rotation is CSS-only (`details[open] summary .pl{transform:rotate(45deg)}`).

---

## Footer

| Breakpoint | Behavior |
|------------|----------|
| **base** | Single column stack. Brand first, then link columns stacked. |
| **md** | 2-column grid (brand spans full, links in 2-col grid). |
| **lg+** | Multi-column flex/grid: brand (wider) + 3-4 link columns side by side. |

Key rules:
- `flex-wrap:wrap` or grid with `auto-fill`.
- Bottom bar: always `flex; justify-content:space-between; flex-wrap:wrap`.
- Link font-size stays small (0.85rem) at all sizes.

---

## Newsletter Section

| Breakpoint | Behavior |
|------------|----------|
| **base** | Full-width or `margin:0 16px`. Form stacks vertically: input full-width, button full-width below. |
| **md+** | Centered container (max-width 440px). Form is horizontal: `flex-direction:row`. |

Key rules:
- Input: `min-width:0` (prevents flex overflow on mobile).
- Button: consistent padding regardless of layout direction.
- If newsletter has accent background + rounded corners: reduce border-radius on mobile (24px → 16px) so it doesn't look cramped.

---

## Mobile Nav Panel

| Breakpoint | Behavior |
|------------|----------|
| **base** | Full-screen overlay, fixed position, z-index:100. Links large (1.5rem). |
| **md+** | Not rendered / hidden. Desktop nav takes over. |

Key rules:
- Panel MUST NOT render or be interactive at md+ (wastes DOM resources).
- Use `transform:translateX(100%)` (not `display:none`) for smooth open/close.
- Body scroll lock only when panel is open.

---

## Universal Responsive Rules

1. **Container max-width:** `--maxw` (1180-1200px) + `padding: 0 24px` on mobile, `0 40px` on md+.
2. **Typography:** use `clamp()` for headings — never hard breakpoint font-size overrides.
3. **Touch targets:** 44×44px minimum on ALL interactive elements at ALL breakpoints.
4. **Images:** always explicit `width` + `height` attributes OR CSS `aspect-ratio` to prevent layout shift.
5. **Spacing:** section padding `60px 0` on mobile, `96px 0` on desktop. Don't go below 48px.
6. **Hide, don't remove:** use `display:none` or `visibility:hidden` — never remove DOM elements for responsive (breaks a11y tree).
