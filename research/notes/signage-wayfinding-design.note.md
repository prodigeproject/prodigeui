---
sourceId: signage-wayfinding-design
sourceType: book
sourceName: "Signage and Wayfinding Design (Chris Calori, David Vanden-Eynden)"
sourceLocation: "Book/wayfinding-design/Signage and Wayfinding Design A Complete Guide to Creating Environmental Graphic Design Systems (Chris Calori, David Vanden-Eynden) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Wayfinding System Thinking:** Wayfinding is a SYSTEM — not individual signs. It requires coherent planning across identification, directional, informational, and regulatory sign types working together.
- **Four Sign Types:** Identification (you are here), Directional (go this way), Informational (learn this), Regulatory (do/don't do this). Every wayfinding need maps to one of these types.
- **Decision Points:** Wayfinding information must appear at decision points — where users must choose between paths. Information between decision points is noise.
- **Progressive Disclosure in Space:** Information reveals progressively as users move through a space — overview at entry, specifics at decision points, confirmation at arrival.
- **Hierarchy of Information:** Primary (destination/action), secondary (supporting context), tertiary (regulatory/optional). Visual hierarchy must reflect information hierarchy.
- **Consistency and Repetition:** Consistent visual language (typography, color, symbols, placement) creates a learnable system. Users recognize the system after 2-3 exposures.
- **Universal Design:** Wayfinding must work for diverse users — multilingual, varying abilities, first-time visitors and regulars. Rely on visual + textual + spatial cues together.

## Concrete Rules & Parameters

- Decision point rule: provide directional signage ONLY at points where ≥2 paths diverge; no information mid-path
- Sign type distribution: identification at every destination entrance; directional at every decision point; informational at points of interest; regulatory at boundaries
- Typography: sans-serif for wayfinding text; mixed case (not ALL CAPS); minimum letter height based on viewing distance (1" per 25 feet)
- Color coding: maximum 5-7 color-coded zones/categories; colors must pass contrast requirements against background
- Symbol usage: standardized symbols (ISO 7001) where available; text always accompanies symbols; symbol ≥ same height as text
- Viewing angles: signs placed perpendicular to traffic flow at decision points; parallel to flow for identification
- Information density: maximum 5 destinations per directional sign; priority by frequency of use

## Modern Context Application

- **Digital Wayfinding = Navigation UI:** Calori's physical wayfinding principles map directly to digital navigation design. Decision points = page transitions. Signs = navigation elements.
- **Four Sign Types → UI Navigation Components:** Identification = breadcrumbs/page titles; Directional = navigation menus/links; Informational = tooltips/help; Regulatory = permissions/constraints indicators.
- **Decision Point Design:** Navigation aids (breadcrumbs, menus, CTAs) should appear at decision points in user flows — not scattered everywhere.
- **Progressive Disclosure in UI:** Match spatial wayfinding: overview on dashboard/home, specifics in category pages, details in item pages.
- **5-7 Category Limit:** Maximum navigation categories mirrors wayfinding color-coding limit and cognitive chunking limits.

## Anti-AI-Slop Indicators

| Systematic Wayfinding | AI Slop Navigation |
|---|---|
| Navigation aids at decision points only | Navigation scattered everywhere equally |
| Clear sign type mapping (ID, directional, info, regulatory) | Mixed navigation types without purpose clarity |
| ≤5-7 categories at any level | Overwhelming navigation with 10+ equal items |
| Progressive disclosure (overview → specifics → details) | All information at all levels equally |
| Consistent visual language for navigation system | Different nav styles per page/section |
| Identification at every "destination" (page titles, breadcrumbs) | Pages without clear identity markers |
| Universal (text + icon + color together) | Single-mode indicators (icon-only, color-only) |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Four sign types (ID/directional/info/regulatory) | `design-rules/navigation.md` | Navigation component classification | Maps physical types to digital nav components |
| Decision point principle | `design-rules/navigation.md` | Navigation placement rules | Show nav aids where users decide |
| 5-7 category limit | `design-rules/navigation.md` | Navigation item count limit | Cognitive limit for categories |
| Progressive disclosure in space | `design-rules/structure.md` | Information reveal pattern | Overview → category → detail |
| Typography rules (sans-serif, mixed case) | `design-rules/typography.md` | Navigation typography | Sans-serif, sentence case for nav |
| Consistency across system | `quality-gate/criteria.json` | "navigation-consistency" criterion | Consistent nav visual language |
| Universal design (text + icon + color) | `components/nav-item/` | Nav item composition rules | Multiple signal modes required |
| Information hierarchy | `design-rules/structure.md` | Content priority levels | Primary/secondary/tertiary hierarchy |

## Cross-References

- Decision point principle directly informs `design-rules/navigation.md`
- Category limits align with `designing-with-mind-in-mind` memory constraints (7±2)
- Progressive disclosure maps to `simple-and-usable` Hide strategy
- Four sign types inform component taxonomy for navigation (Requirement 6)
- Universal design supports Requirement 13 (Accessibility)
- Consistency principle feeds Quality_Gate navigation validation
- Connects to `wayfinding-designs-worldwide` for visual examples/patterns
