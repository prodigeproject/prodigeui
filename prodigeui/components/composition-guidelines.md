# Atomic Design Composition Guidelines

Guidelines for composing ProdigeUI components from atoms through organisms, ensuring
consistent, accessible, and token-driven interfaces.

## 1. Atomic Design Levels

> "Atoms are the smallest functional unit that cannot be broken further without losing their meaning." — Brad Frost, Atomic Design
>
> "Organisms form distinct sections of an interface." — Brad Frost, Atomic Design

| Level | Description | Examples |
|-------|-------------|----------|
| **Atom** | Single-purpose, indivisible UI element | Button, Input, Icon, Text, Badge, Toggle, Checkbox, Radio |
| **Molecule** | Small group of atoms functioning as a unit | Field (Label + Input + HelpText), Card, MenuItem, SearchBar, Tooltip |
| **Organism** | Complex section composed of molecules and atoms | Form, Navbar, Table, Modal, Sidebar, Footer |
| **Template** | Page-level layout skeleton defining content areas | DashboardTemplate, AuthTemplate, LandingTemplate |
| **Page** | Template filled with real content and data | UserDashboard, LoginPage, ProductListing |

Atoms never contain other components. Molecules combine 2-4 atoms. Organisms combine
molecules and/or atoms into distinct interface sections.

**Molecule litmus test:** If removing one child atom does not change the component's purpose, it is NOT a molecule — it is a layout. A true molecule's identity depends on the cooperation of all its atoms.

## 2. Composition Rules

### Atoms to Molecules

| Molecule | Composed of (atoms) |
|----------|---------------------|
| Field | Label (Text) + Input + HelpText (Text) + ErrorMessage (Text) |
| Card | Container + Heading (Text) + Body (Text) + optional Badge + optional Button |
| MenuItem | Icon + Label (Text) + optional Badge + optional Chevron (Icon) |
| SearchBar | Icon + Input + Button |
| Tooltip | Trigger (any atom) + Popup (Text) |

### Molecules to Organisms

| Organism | Composed of (molecules/atoms) |
|----------|-------------------------------|
| Form | Multiple Field molecules + Button atoms + optional heading Text |
| Navbar | Logo (Icon/Text) + MenuItem molecules + Button atoms |
| Table | HeaderRow (Text atoms) + DataRows (Text/Badge atoms) + optional pagination |
| Modal | Card molecule + overlay + close Button atom |
| Sidebar | MenuItem molecules + optional section Text headings |
| Footer | Text atoms + link groups + optional Icon atoms |

### Rules

1. A molecule MUST contain at least 2 atoms.
2. An organism MUST contain at least 1 molecule OR 3+ atoms working together.
3. Never skip levels: do not place a raw atom directly inside a template without
   wrapping it in a meaningful molecule/organism context.
4. Each composed component has a single, clear responsibility.
5. **Navbar primary CTA** must be a direct child of `nav`, NOT inside the links
   container. Generic link-container button resets (color, background) will strip CTA
   styling if the CTA is nested inside them.
6. **Absolute positioning containment:** Every element with `position:absolute` MUST have
   an ancestor with `position:relative` (or `position:absolute`/`fixed`) that is the
   INTENDED containing block. Without this, the element escapes to the nearest positioned
   ancestor (or viewport), and percentage-based `width`/`height`/`inset` values compute
   against an unintended container — causing the element to render at wrong size/position.
   Common violation: slider thumbs, toggle indicators, or decorative elements placed
   `position:absolute` inside a parent that lacks `position:relative`.
7. **Gallery/masonry image containment:** Images in CSS-columns masonry or grid layouts
   MUST have both `object-fit:cover` AND a `max-height` constraint (e.g. 420px or 50vh)
   on their container. Without this, portrait-oriented images (e.g. 800×1000) render at
   full natural height, creating excessively tall stretched cards that break visual rhythm.
   The container clips the overflow; the image fills via object-fit:cover.

## 3. Token Binding Rules

All visual values MUST come from Design_Token references. No raw values allowed.

```
ALLOWED:
  background: var(--card-bg)         /* references card.bg token */
  gap: var(--space-component-gap)    /* references space.component-gap token */
  border-radius: var(--radius-md)    /* references radius.md token */

FORBIDDEN:
  background: #ffffff                /* raw hex */
  gap: 12px                          /* raw pixel value */
  border-radius: 8px                 /* raw pixel value */
```

### Binding hierarchy

- Component tokens (e.g., `button.primary.bg`) override semantic tokens for that component.
- Semantic tokens (e.g., `color.primary`) provide role-based values.
- Primitive tokens (e.g., `palette.blue.s500`) are never referenced directly in components.

### When composing:

- Parent containers use semantic spacing tokens (`space.component-gap`, `space.section-gap`).
- Child components use their own component tokens for internal values.
- Shared properties (border, shadow) use semantic-level tokens.

## 4. State Propagation

Parent state affects children predictably:

| Parent State | Effect on Children |
|--------------|-------------------|
| `disabled` | All interactive children become disabled; ignore user input; reduce opacity |
| `loading` | Interactive children become non-interactive; show loading indicators |
| `error` | Relevant child inputs show error styling; error messages become visible |
| `readonly` | Input children become read-only; buttons remain interactive |

### Rules

1. State flows DOWN only (parent to child), never up.
2. Disabled parent = all children disabled. No exceptions.
3. Error state targets specific children (field-level), not blanket application.
4. Focus state is NEVER inherited; each component manages its own focus independently.
5. Hover state is local to the hovered element unless the component is designed as
   a single interactive unit (e.g., Card as a clickable link).

## 5. Spacing Between Composed Elements

Use the `space.component-gap` token for spacing between sibling elements within a composition.

| Context | Token | Purpose |
|---------|-------|---------|
| Between atoms in a molecule | `space.component-gap` | Default inter-element gap |
| Between molecules in an organism | `space.md` to `space.lg` | Section-level separation |
| Between organisms on a page | `space.section-gap` | Major section separation |
| Internal padding of containers | `space.component-padding` | Consistent inner breathing room |

### Rules

1. Always use `gap` (flexbox/grid) instead of margins for spacing between siblings.
2. The parent container owns the spacing; children do not add outer margins.
3. Scale spacing with context: tighter inside molecules, looser between organisms.
4. Consistent direction: vertical stacking uses `flex-direction: column` + `gap`.

## 6. Responsive Behavior

ProdigeUI defines three breakpoints (from `design-rules/layout.rules.json`):

| Breakpoint | Name | Min-width |
|------------|------|-----------|
| Mobile | `sm` | 0px |
| Tablet | `md` | 768px |
| Desktop | `lg` | 1024px |

### Composition adaptation by breakpoint

- **Organisms** may restructure: Navbar collapses to hamburger menu on mobile;
  Table switches to card-list on mobile; Sidebar becomes bottom sheet on mobile.
- **Molecules** remain structurally intact but may reflow: Field label moves from
  inline to stacked below tablet breakpoint.
- **Atoms** scale via token changes only (font-size, padding) but never restructure.

### Rules

1. Composition changes happen at organism level, not atom or molecule level.
2. Use CSS container queries or media queries; never JavaScript for layout shifts.
3. Touch targets must be at least 44px on mobile (applies to all interactive atoms).
4. Spacing tokens may have responsive overrides but token names stay the same.

## 7. Accessibility in Compositions

### Focus Order

1. Focus order follows visual reading order (top-to-bottom, left-to-right for LTR).
2. Within a molecule, focus moves through interactive atoms in DOM order.
3. Within an organism, focus moves through molecules in logical sequence.
4. Modal/overlay organisms trap focus within until dismissed.
5. Skip-navigation links precede Navbar for keyboard users.

### Group Labels

1. Form organisms MUST have a `<fieldset>` + `<legend>` or `role="group"` +
   `aria-labelledby` wrapping related Field molecules.
2. Navigation organisms use `<nav>` with `aria-label` distinguishing multiple navs.
3. Table organisms use `<table>` semantics with proper `<th scope>` attributes.
4. Lists of MenuItem molecules use `role="menu"` or `<ul>` with appropriate ARIA.

### Rules

1. Every interactive composition must be fully operable via keyboard alone.
2. Composed components MUST NOT create keyboard traps (except intentional modal traps
   with a documented escape mechanism).
3. Grouped form fields announce their group label to assistive technology.
4. Error messages are linked to their input via `aria-describedby`.
5. Dynamic content changes (loading, error) use `aria-live` regions.
6. Minimum contrast 4.5:1 for text, 3:1 for large text and UI components applies
   at every composition level.

---

*Validates: Requirements 6.6*
