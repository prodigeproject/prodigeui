---
sourceId: designing-interfaces
sourceType: book
sourceName: "Designing Interfaces: Patterns for Effective Interaction Design"
sourceLocation: "Book/UI/Designing Interfaces/Designing Interfaces Patterns for Effective Interaction Design (Tidwell, Jenifer, Brewer, Charles, Valencia etc.) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Tidwell's pattern catalog is the definitive reference for interaction design patterns, organized by user behavior and cognitive need:

- **Pattern-based design:** Recurring solutions to common interaction problems. Patterns encode expert knowledge into reusable decisions.
- **Organizing the content:** Information architecture patterns: two-panel selector, one-window drilldown, wizard, dashboard, canvas+palette.
- **Navigation patterns:** Hub-and-spoke, pyramid, breadcrumbs, annotated scrollbar, collapsible panels, tabs, accordion.
- **Page layout patterns:** Visual framework, center stage, titled sections, card layouts, responsive grids.
- **List patterns:** Two-level lists, cascading lists, tree views, sorted/filterable lists, infinite scroll.
- **User action patterns:** Prominent "done" button, smart defaults, forgiving format, structured input.
- **Form patterns:** Fill-in-the-blanks, input hints, structured format, forgiving format, good defaults.
- **Builder/editor patterns:** Canvas + palette, WYSIWYG, constrained editor, preview.
- **Social patterns:** User profile, activity stream, comments, ratings, sharing.
- **Mobile patterns:** Bottom navigation, pull-to-refresh, card stack, swipe actions, floating action button.

Core meta-principles:
- **Safe exploration:** Users should feel safe trying things. Undo is essential.
- **Instant gratification:** Show results immediately, not after multi-step processes.
- **Satisficing:** Users choose the first reasonable option, not the optimal one. Make the right path obvious.
- **Changes in midstream:** Users change their minds. Don't punish changing direction.
- **Habituation:** Frequent actions become automatic. Consistent placement enables motor memory.

## Concrete Rules & Parameters

| Pattern Category | Key Rule | Parameter |
|-----------------|----------|-----------|
| Two-panel selector | List:detail ratio | 30:70 or 25:75 horizontal split |
| Wizard | Step count | 3-7 steps maximum (5 optimal) |
| Dashboard | Card count | 4-8 primary cards visible |
| Tabs | Tab count | 3-7 tabs maximum before overflow |
| Accordion | Section count | 5-15 expandable sections |
| Breadcrumbs | Depth | Show when navigation depth ≥ 3 |
| Center stage | Content proportion | 60-70% of viewport for primary content |
| Card layout | Cards per row | 2-4 cards per row depending on card complexity |
| Infinite scroll | Batch size | 10-25 items per load |
| Form inputs | Visible fields | 5-7 per viewport (progressive disclosure beyond) |
| Smart defaults | Coverage | Provide defaults for all non-essential fields |
| Undo | Availability | Available for all destructive user actions |
| Good default ratio | Target | 80% of users should not need to change defaults |
| Modal usage | Condition | Only for blocking actions requiring immediate response |
| Toast/notification | Duration | 3-5 seconds for informational, persistent for errors |

## Modern Context Application

**Responsive Design:**
- Two-panel selector: collapses to stacked on mobile (list page → detail page)
- Dashboard cards: 4 columns desktop → 2 columns tablet → 1 column mobile
- Tabs: horizontal on desktop → bottom bar on mobile, or scrollable horizontal
- Wizard: may become full-page steps on mobile (one step per viewport)
- Canvas+palette: palette becomes bottom drawer on mobile

**Dark Mode:**
- Patterns remain identical (dark mode doesn't change interaction patterns)
- Visual emphasis signals may need adjustment (elevation, color, borders)
- Active states in tabs/navigation need sufficient contrast in dark mode
- Card boundaries may shift from shadow-based to border-based in dark mode

**Token Systems:**
- Layout tokens: panel ratios, content widths, sidebar widths
- Pattern tokens: wizard step count limits, card batch sizes, tab limits
- Timing tokens: toast duration, debounce intervals, loading timeouts
- Spacing tokens: card gaps, section gaps, form field spacing
- Pattern rules encoded as constraints in design-rules system

**Component States:**
- Navigation active state: strong visual differentiation (color fill + indicator)
- Expandable sections: clear expand/collapse affordance (chevron + animation)
- Wizard progress: current/completed/upcoming step states
- List item states: default, hover, selected, multi-selected
- Form field states: empty, filled, focused, error, disabled, read-only

## Anti-AI-Slop Indicators

Expert UI (pattern-aware):
- Appropriate pattern selection for content type (cards for browsable, lists for scannable)
- Wizard for multi-step with clear progress
- Navigation depth visible through breadcrumbs
- Smart defaults reducing required user input
- Undo available for destructive actions
- Consistent pattern usage (same pattern for same problem)
- Safe exploration enabled (can go back, can undo)
- Instant gratification (results shown immediately)

AI Slop (pattern-unaware):
- Single-page dump of all content (no information architecture)
- Multi-step processes without progress indication
- Deep navigation without breadcrumbs or back paths
- Empty forms requiring all fields (no smart defaults)
- Destructive actions without undo/confirmation
- Mixed patterns for same type of content (cards here, lists there, tables elsewhere for same data)
- Required reading before action (no instant gratification)
- Punishing navigation changes (lost state on back)

## Concrete Artifact Mapping

| Pattern | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Two-panel selector | `design-rules/structure.rules.json` | panelRatio: "30:70" | Layout pattern parameter |
| Wizard steps | `design-rules/structure.rules.json` | maxWizardSteps: 7, recommendedSteps: 5 | Cognitive limit |
| Dashboard cards | `design-rules/structure.rules.json` | maxDashboardCards: 8 | Visual scanability |
| Tab limit | `design-rules/structure.rules.json` | maxTabs: 7 | Hick's Law alignment |
| Breadcrumb threshold | `design-rules/structure.rules.json` | showBreadcrumbsAtDepth: 3 | Navigation clarity |
| Center stage ratio | `design-rules/structure.rules.json` | primaryContentRatio: "65%" | Focus area |
| Smart defaults | `quality-gate/criteria.json` | Rule: all optional fields have defaults | Effort reduction |
| Undo requirement | `quality-gate/criteria.json` | Rule: destructive actions support undo | Safe exploration |
| Toast duration | `tokens/timing.json` | infoToast: 4000, errorToast: -1 (persistent) | Notification timing |
| Form field limit | `design-rules/structure.rules.json` | maxVisibleFields: 7 | Progressive disclosure |
| Card batch size | `design-rules/structure.rules.json` | infiniteScrollBatch: 20 | Load performance |
| Modal usage rule | `design-rules/structure.rules.json` | modalOnly: "blocking actions" | Pattern appropriateness |
| Safe exploration | `quality-gate/criteria.json` | Back navigation preserves state | User confidence |

## Cross-References

- **Laws of UX (Yablonski):** Hick's Law underlies tab/nav limits; Miller's Law underlies wizard steps; Jakob's Law validates pattern reuse
- **100 Things Every Designer (Weinschenk):** Progressive disclosure, recognition > recall directly implement cognitive principles
- **Design of Everyday Things (Norman):** Affordances, signifiers, feedback are the foundation patterns encode
- **Practical UI (Dannaway):** Applies spacing/visual rules within these interaction patterns
- **Refactoring UI (Wathan/Schoger):** Visual hierarchy principles for rendering these patterns
- **Practical UI Patterns for Design Systems (MacDonald):** Pattern implementation for design system components
