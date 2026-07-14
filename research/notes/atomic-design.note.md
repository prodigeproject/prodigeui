---
sourceId: atomic-design
sourceType: book
sourceName: "Atomic Design"
sourceLocation: "Book/Atomic Design.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Five-level hierarchy**: Atoms → Molecules → Organisms → Templates → Pages (each level composed from previous)
2. **Atoms = indivisible UI elements**: Labels, inputs, buttons, icons — cannot be broken down further without losing meaning
3. **Molecules = simple functional groups**: Search form (input + button + label) — one clear purpose from combined atoms
4. **Organisms = complex UI sections**: Header (logo + nav + search + user-menu) — distinct section of interface
5. **Templates = page-level wireframes**: Content structure without real data; defines content zones and component placement
6. **Pages = specific instances**: Templates filled with representative content; used for testing edge cases
7. **Interface inventory**: Audit existing UI by collecting screenshots → categorize → find inconsistencies → consolidate
8. **Pattern lab methodology**: Living style guide that renders actual components in isolation and composition
9. **Content-first design**: Components must accommodate real content (not "Lorem ipsum"); test with short AND long content
10. **Composition over inheritance**: Build up from small pieces; don't extend monolithic base components

## Concrete Rules & Parameters

- Atom: 0 child components, only HTML elements + tokens
- Molecule: 2-5 atoms composed together, single responsibility
- Organism: 2+ molecules and/or atoms, represents a distinct interface region
- Template: Full page layout with placeholder content areas
- Component naming: `category/component-name` (e.g., `atoms/button`, `molecules/search-form`)
- Variant limit per atom: max 5-7 variants before splitting into separate atoms

## Modern Context Application

- **Tokens**: Atoms consume tokens directly; molecules/organisms inherit through composition, not token override
- **Dark mode**: Theme changes cascade through atoms — upper levels don't need dark mode logic
- **Component systems**: Folder structure mirrors hierarchy (`atoms/`, `molecules/`, `organisms/`)
- **Responsive**: Templates define responsive layouts; organisms flex within them; atoms are intrinsically responsive
- **Design tokens + Atomic Design**: Tokens are the "subatomic particles" — values that atoms are built from

## Anti-AI-Slop Indicators

- Expert: Clear hierarchy; each component at correct level; composition rules enforced
- AI slop: Flat component list with no hierarchy; "organisms" that should be molecules; no composition thinking
- Expert: Components tested with real content at boundary lengths
- AI slop: Components only shown with perfect-length placeholder content
- Expert: Interface inventory drives consolidation (one button component, not twelve)
- AI slop: Multiple redundant components with slight variations and no consolidation

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Five-level hierarchy | `components/` folder structure | `atoms/`, `molecules/`, `organisms/` subfolders | Physical enforcement of hierarchy |
| Composition rules | `design-rules/composition.rules.json` | Composition constraints per level | Gates reject wrong-level composition |
| Component naming convention | `components/components.manifest.json` | `category` field per component | Machine-readable categorization |
| Interface inventory methodology | `skills/` | UI audit skill workflow | Agent can perform inventory on existing UI |
| Content-first testing | `quality-gate/criteria.json` | Content edge-case validation rules | Rejects components only tested with "Lorem" |
| Pattern lab concept | Component documentation pattern | Per-component `states`, `variants`, `examples` | Living documentation approach |

## Cross-References

- Hierarchy aligns with Component_Library requirement (Req 6.6: "composition per atomic design")
- Token consumption pattern confirmed by pearl-ui-main's style props (atoms bind to tokens)
- Interface inventory concept matches impeccable-main's audit pattern
- Composition-over-inheritance validated by shadcn/ui's composable component model
- Content-first principle reinforced by Don't Make Me Think's "real data" emphasis
