---
sourceId: practical-ui-2nd
sourceType: book
sourceName: "Practical UI - 2nd Edition"
sourceLocation: "Book/UI/Practical UI - 2nd Edition (Adham Dannaway)/Practical UI - 2nd Edition (Adham Dannaway) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

The 2nd edition expands on the original with additional rules, modern patterns, and deeper treatment of dark mode, responsive design, and design systems thinking:

- **Systematic approach to design decisions:** Every visual decision should reference a defined system (scale, palette, grid). No ad-hoc choices.
- **Optical alignment over mathematical alignment:** Some elements (triangles in play buttons, text with descenders) need optical correction to LOOK aligned even if numerically off.
- **Depth through layering:** Use z-axis (shadows, overlaps, blurs) to create information hierarchy without relying solely on color.
- **Responsive spacing is proportional, not fixed:** Spacing adjusts with viewport but maintains RATIOS between elements.
- **Dark mode is a full design pass:** Not just color inversion. Requires elevation rethinking, contrast re-verification, and saturation adjustment.
- **Component variants from constraints:** Limit variants to meaningful states. Each variant must serve a distinct purpose.
- **Negative space as active design element:** Empty space is intentional, not leftover. It communicates importance and relationship.
- **Visual weight balance:** Page shouldn't feel heavier on one side. Distribute visual weight (color, size, density) evenly.
- **Consistency creates trust:** Identical elements styled identically builds user confidence in interface predictability.
- **Typography as primary hierarchy tool:** Before color, before icons, typography scale and weight establish information architecture.

## Concrete Rules & Parameters

| Rule | Parameter | Specific Value |
|------|-----------|----------------|
| Optical alignment correction | Play button icon | Shift right 2-4% of container width |
| Shadow for dark mode | Alternative | Use lighter border (1px, 5-10% white opacity) instead of shadow |
| Responsive spacing ratio | Mobile reduction | 60-75% of desktop spacing values |
| Typography scale ratio | Recommended | 1.25 (Major Third) or 1.2 (Minor Third) for harmonious scale |
| Dark mode saturation | Adjustment | Reduce saturation 10-20% for dark backgrounds |
| Dark mode surface layers | Elevation | Surface +1 = 4% lighter, +2 = 8% lighter, +3 = 12% lighter |
| Overlay opacity | Modal backdrop | 40-60% black for light mode, 60-80% black for dark mode |
| Card elevation layers | Maximum | 3-4 distinct elevation levels |
| Focus ring | Specification | 2px solid, 2px offset, primary color or high-contrast |
| Component variant limit | Per component | Max 4-5 meaningful variants (primary, secondary, tertiary, destructive, ghost) |
| Loading skeleton | Sizing | Match exact dimensions of loaded content |
| Empty state | Requirements | Illustration + title + description + CTA |
| Error state | Requirements | Icon + message + recovery action |

## Modern Context Application

**Responsive Design:**
- Proportional spacing: if desktop section gap = 96px, mobile = 60-72px (not 48px arbitrary)
- Typography scale tightens: desktop ratio 1.25, mobile ratio 1.2 (narrower hierarchy)
- Cards may lose shadow on mobile (elevation less meaningful at full-width)
- Navigation transforms completely (desktop tabs → mobile bottom bar)

**Dark Mode (extensively covered):**
- Surface elevation through lightness (not shadow): base surface, +1, +2, +3
- Colored surfaces reduce saturation to prevent eye strain
- White text max opacity: 87% (not pure white) for reduced glare
- Primary colors need brightness boost on dark backgrounds
- Borders become more important (shadow doesn't read against dark)
- Illustrations/images may need darkened overlays to match context

**Token Systems:**
- Elevation as lightness tokens: `surface-0`, `surface-1`, `surface-2`, `surface-3`
- Responsive multipliers: `spacing-base × responsive-factor` per breakpoint
- Typography scale as mathematical ratio: `fontSize = base × ratio^step`
- Dark mode as separate token set with systematic derivation rules
- Component variant tokens: max variants defined at system level

**Component States:**
- Empty states: dedicated component with illustration + messaging + action
- Loading states: skeleton matching final dimensions (prevents layout shift)
- Error states: structured format (icon + message + action)
- Dark mode states: every state re-verified for contrast and visibility
- Elevation states: hover/active change elevation level (not just color)

## Anti-AI-Slop Indicators

Expert UI (2nd Edition rules):
- Optical alignment corrections visible (elements LOOK aligned, not just ARE aligned)
- Dark mode feels designed (not inverted): proper surface elevation, adjusted saturation
- Responsive design maintains proportional relationships (not just smaller)
- Shadows appropriate to mode (light mode: shadow, dark mode: lighter surfaces/borders)
- Systematic typography scale (sizes relate mathematically)
- Empty/error/loading states designed with equal care
- Negative space is intentional and balanced

AI Slop (violates 2nd Edition):
- Pure mathematical alignment without optical correction (play buttons look off-center)
- Dark mode is literal inversion (oversaturated colors, pure white text, shadows on black)
- Responsive = desktop squished (not proportionally adjusted)
- Same shadows in dark mode (invisible/wrong)
- Random font sizes without scale relationship
- Empty states are just centered text ("No items")
- Unbalanced layouts (heavy on one side, light on other)

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Optical alignment rules | `quality-gate/criteria.json` | Optical correction requirements for icons/triangles | Visual correctness over mathematical |
| Dark surface elevation | `tokens/color.json` | surface-0, surface-1, surface-2, surface-3 with lightness % | Dark mode depth system |
| Responsive multipliers | `tokens/spacing.json` | responsiveFactor per breakpoint (mobile: 0.625-0.75) | Proportional responsive spacing |
| Typography ratio | `tokens/typography.json` | scaleRatio: 1.25, mobileScaleRatio: 1.2 | Mathematical harmony |
| Dark saturation reduction | `tokens/color.json` | darkModeSaturationReduction: 10-20% | Eye strain prevention |
| Dark text opacity | `tokens/color.json` | darkModeTextPrimary: 87% white | Glare reduction |
| Variant limit | `design-rules/structure.rules.json` | maxComponentVariants: 5 | Meaningful constraint |
| Skeleton dimensions | `quality-gate/criteria.json` | Loading skeleton matches final content dimensions | Layout stability |
| Empty state structure | `design-rules/structure.rules.json` | Required: illustration + title + description + action | Complete empty state |
| Error state structure | `design-rules/structure.rules.json` | Required: icon + message + recovery action | Actionable errors |
| Focus ring spec | `tokens/focus.json` | width: 2px, offset: 2px, color: primary | Accessibility standard |
| Elevation levels | `tokens/elevation.json` | maxLevels: 4 distinct surfaces | Information layering |
| Visual weight balance | `quality-gate/criteria.json` | Layout weight distribution check | Page balance |

## Cross-References

- **Practical UI (1st Edition):** Foundation that this edition builds upon; same core philosophy with expanded coverage
- **Refactoring UI (Wathan/Schoger):** Complementary spacing/color systems; 2nd Edition adds dark mode depth missing from Refactoring UI
- **Laws of UX (Yablonski):** Aesthetic-Usability Effect justifies the extensive dark mode polish
- **Material Design 3:** Dark mode surface elevation concept aligns with Material's tonal surfaces
- **Color Codes (philosophy):** Perceptual basis for saturation reduction on dark backgrounds
