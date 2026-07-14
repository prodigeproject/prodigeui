---
sourceId: dont-make-me-think
sourceType: book
sourceName: "Don't Make Me Think"
sourceLocation: "Book/psychology/Donald A. Norman/English/"
appliedTo: []
---

## Key Principles Extracted

1. **Self-evidence as goal**: Pages should be self-explanatory; if users have to think about HOW to use it, it's failed
2. **Scanning, not reading**: Users scan pages in F-pattern; design for scanability with clear visual hierarchy
3. **Satisficing behavior**: Users don't choose the best option — they choose the FIRST reasonable option (design for first-scan success)
4. **Billboard design conventions**: Web conventions exist (logo top-left, nav top/left, search top-right) — follow them unless you have a VERY good reason
5. **Krug's first law**: Don't make me think (every question mark = cognitive friction = user drop-off)
6. **Omit needless words**: Reduce text by 50%, then reduce it again by 50%; brevity IS usability
7. **Breadcrumbs and wayfinding**: Users need "You Are Here" indicators at all times (breadcrumbs, active nav states, page titles)
8. **Trunk test**: Can users answer these on EVERY page: What site? What page? Major sections? Options at this level? Where am I? How to search?
9. **Usability testing mantra**: Test early, test often, test with 3-5 users (diminishing returns beyond that)
10. **Accessibility = usability**: Accessible design benefits ALL users, not just disabled users

## Concrete Rules & Parameters

- Visual hierarchy: 3 levels maximum (primary, secondary, tertiary) on any single view
- Text reduction: Body copy ≤ 50% of first draft length; eliminate "happy talk" (welcome messages that say nothing)
- Navigation: Persistent global nav + local nav + "You are here" indicator on every page
- Click target labels: Use verbs, not nouns (e.g., "Search" not "Search Tool"; "Sign Up" not "Registration")
- Home page budget: ≤5 seconds for user to understand what site does and where to go next
- Form labels: Above inputs (not beside — scanning direction is top-to-bottom)

## Modern Context Application

- **Tokens**: Visual hierarchy tokens (3 levels of text size/weight/color) enforce scanability
- **Component systems**: Navigation components ALWAYS include active state and location indicators
- **Responsive**: Mobile = even MORE aggressive text reduction and hierarchy simplification
- **Dark mode**: Same hierarchy principles; contrast ratios maintain scanability in both modes
- **AI context**: Agent-generated interfaces must pass "Trunk Test" — self-evident purpose on every page
- **Design tokens**: Semantic naming IS "don't make me think" for developers (color.primary not color-blue-500)

## Anti-AI-Slop Indicators

- Expert: Clear hierarchy; minimal text; obvious actions; follows conventions; breadcrumbs
- AI slop: Equal-weight text walls; "Welcome to our amazing platform" hero copy; no location indicators
- Expert: Action labels are verbs ("Get started", "Create account", "Search")
- AI slop: Vague labels ("Submit", "Click here", "Learn more" repeated everywhere)
- Expert: 3-level hierarchy consistently applied
- AI slop: 5+ visual weight levels competing for attention

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Visual hierarchy (3 levels) | `tokens/tokens.json` | Typography scale + weight + color combinations | Token system enforces max 3 hierarchy levels |
| Text reduction principle | `quality-gate/criteria.json` | Copy length validation | Gate flags verbose copy |
| Navigation conventions | `components/molecules/navigation` | Required states (active, location) | Wayfinding always present |
| Trunk test | `quality-gate/criteria.json` | Page self-evidence checklist | Every page must self-identify |
| Action label conventions | `design-rules/interaction.rules.json` | CTA labeling rules (verbs, specificity) | Prevents vague generic labels |
| Breadcrumb requirement | `components/atoms/breadcrumb` | Mandatory location indicator component | Users always know where they are |
| Form label positioning | `design-rules/layout.rules.json` | Label-above-input rule | Scanning direction optimization |

## Cross-References

- Self-evidence principle IS the core of User Experience Design's usability heuristics
- Satisficing validates Experiencing Design's cognitive load management
- Convention-following aligns with Design of Everyday Things' affordance/signifier concepts
- Text reduction reinforced by Mobile App UX Principles' screen density limits
- Accessibility=usability confirmed by WCAG requirements (Req 4.6, 6.4)
- Visual hierarchy connects to Atomic Design's composition rules (hierarchy through composition)
