---
sourceId: dont-make-me-think-revisited
sourceType: book
sourceName: "Don't Make Me Think, Revisited (Steve Krug)"
sourceLocation: "Book/UX/Dont Make Me Think, Revisited A Common Sense Approach to Web Usability 3rd Edition (Steve Krug) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **First Law of Usability:** Don't make users think. Every page/screen should be self-evident — obvious without requiring thought about what things are and how to use them.
- **Scanning, Not Reading:** Users don't read pages; they scan. Design must accommodate scan-reading behavior with clear visual hierarchy, meaningful headings, and short text blocks.
- **Satisficing:** Users don't choose the best option — they choose the first reasonable option. Design for satisficing by making the primary action the most visible and accessible.
- **Billboard Design:** Treat every page like a billboard at 60mph — clear visual hierarchy, obvious clickable elements, minimal noise.
- **Trunk Test:** Any page should answer five questions immediately: What site is this? What page am I on? What are the major sections? What are my options at this level? Where am I in the hierarchy?
- **Omit Needless Words:** Reduce word count by half, then reduce by half again. Every word on a page competes for attention.
- **Conventions Are Your Friends:** Follow web conventions (logo top-left, navigation top/left, search top-right). Users spend most time on other sites — match their expectations.
- **Usability Testing:** Simple, informal testing with 3-5 users reveals most usability issues. Test early, test often, fix what you find.

## Concrete Rules & Parameters

- Navigation: persistent navigation on every page (site ID, sections, utilities, search)
- Page name must match the link that brought the user there (exact text match)
- Breadcrumbs: use > separator, bold last item (current location), don't use as substitute for primary navigation
- Home page elements: site identity, site hierarchy, search, teasers, timely content, deals, registration/login — in decreasing priority order
- Form design: reduce fields to minimum necessary; mark optional fields (not required ones); group related fields
- Clickability: links must look clickable (color + underline for text, affordance for buttons); never rely on hover alone
- Visual hierarchy: maximum 3 levels of heading hierarchy visible simultaneously
- Call-to-action: one primary action per screen/viewport; visually dominant over secondary actions (≥1.5× size difference)
- Testing threshold: if 3 of 5 test users can't find/complete primary task in under 60 seconds, redesign the flow

## Modern Context Application

- **Agent Output Validation:** Krug's principles translate directly to quality gate rules — check for clear hierarchy, minimal text, obvious primary actions in AI-generated interfaces.
- **Scanning Optimization for AI:** AI-generated content tends toward verbosity ("AI slop"). Krug's "omit needless words" becomes a critical anti-slop rule: generated copy must be ≤50% of first draft length.
- **Convention Compliance:** AI agents must know web conventions and follow them by default — agents violating conventions should require explicit justification in the prompt.
- **Component Self-Evidence:** Every component in the library should be self-evident in its usage. If a component requires explanation to use, it needs redesign.
- **Mobile-First Scanning:** Mobile constraints enforce Krug's principles naturally — limited space demands hierarchy and prioritization.

## Anti-AI-Slop Indicators

| Expert Usability (Krug) | AI Slop |
|---|---|
| Self-evident interface, no instructions needed | Instructions/tooltips explaining obvious UI |
| Minimal text, maximum clarity | Long paragraphs of marketing copy |
| Clear visual hierarchy (3 levels max) | Flat visual treatment, everything same weight |
| One primary action per viewport | Multiple competing CTAs of equal prominence |
| Follows web conventions | Novel navigation patterns without user benefit |
| Page names match navigation links | Inconsistent labeling between nav and content |
| Persistent navigation showing location | User lost in app without orientation cues |
| Meaningful headings for scanners | Generic headings ("Welcome", "Learn More") |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Trunk Test (5 questions) | `quality-gate/criteria.json` | "trunk-test" criterion | Every page must answer: site ID, page name, sections, options, location |
| Omit needless words rule | `quality-gate/criteria.json` | "content-brevity" criterion | Text blocks ≤50% of AI first draft; max word counts per element |
| Scanning hierarchy (3 levels) | `design-rules/typography.md` | Heading hierarchy rule | Max 3 heading levels visible simultaneously |
| One primary CTA per viewport | `design-rules/layout.md` | Action hierarchy rule | Primary action ≥1.5× visual weight of secondary |
| Convention compliance | `design-rules/structure.md` | Web convention checklist | Logo placement, nav position, search location |
| Persistent navigation | `components/navigation/` | Navigation component spec | Site ID + sections + utilities + search always present |
| Form minimization | `design-rules/forms.md` | Field reduction rule | Minimum necessary fields; optional marked (not required) |
| Clickability signals | `design-rules/interaction.md` | Affordance rules | Links colored+underlined; buttons have affordance; no hover-only |
| Page name = link text | `quality-gate/criteria.json` | "navigation-consistency" criterion | Label matching between nav items and page titles |

## Cross-References

- Directly feeds `quality-gate/criteria.json` with measurable usability criteria
- Complements `elements-user-experience` at skeleton/surface planes
- Aligns with `simple-and-usable` on reduction/omission principles
- Informs `designing-ux-forms` on form simplification
- Feeds `design-rules/` structure, typography, and layout sections
- Pairs with `strategic-writing-ux` on content reduction principles
