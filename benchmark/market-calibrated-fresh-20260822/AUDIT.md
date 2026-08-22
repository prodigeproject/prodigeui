# Fresh-generation audit

Date: 22 August 2026

## What was inspected

- The first desktop viewport of all ten local pages was inspected in a browser.
- Every local image asset loaded in the inspected desktop renders.
- A static audit confirmed all ten artifacts have a title, a compact-layout media
  rule, no external runtime asset URL, no missing local media, and a distinct
  stylesheet length. The stylesheets are not shared.
- The five quality criteria added by this tuning were reviewed against the
  product brief and rendered first viewport.

## Cross-case review

| Case | Dominant proof and first action | Market / archetype fit | Identity separation | Journey status |
| --- | --- | --- | --- | --- |
| MIRA | Worn garment, size selector, material/fit route | Pass — editorial commerce | Pass — object-plus-selection, not a poster | Pass for discovery → selection → bag handoff |
| Relay | Release queue with owner, risk, and assignment action | Pass — operational control surface | Pass — dense work state, not marketing | Pass for triage → assign → staged release handoff |
| Ruang | Actual cultural work and case/inquiry route | Pass — work-led studio | Pass — work index, not abstract manifesto | Pass for evidence → case → relevant inquiry handoff |
| ORION | Vehicle in context and test-drive planner | Pass — high-consideration exploration | Pass — object plus commitment question | Pass for compare/plan → slot-selection handoff |
| Rasa | Need-led care route with urgency boundary | Pass — trust/care navigation | Pass — routing surface, not lifestyle campaign | Pass for need → route → appointment handoff |
| Lumen | Cash position, scheduled movement, approval tasks | Pass — financial operating surface | Pass — financial work state, not generic cards | Pass for review → approval / transfer handoff |
| Pesisir | Destination, dates, guests, and search action | Pass — travel planning | Pass — planning controls own the viewport | Pass for query → availability / booking handoff |
| Nara | Available home, real property context, and viewing path | Pass — property discovery | Pass — availability-aware home finder | Pass for search → compare → viewing handoff |
| Sora | Next practice prompt, answer, feedback/return context | Pass — learning loop | Pass — exercise, not course shelf | Pass for practice → feedback → return handoff |
| Kala | Place, visit date, ticket action, access/programme context | Pass — place/visit programme | Pass — visit planner, not an exhibition poster | Pass for date → ticket → visit-context handoff |

## Provisional score

| Dimension | Score | Rationale |
| --- | ---: | --- |
| Market-reference calibration | 10 / 10 | Every case has two relevant direct references in `README.md`; observations are transferred structurally, never copied. |
| Archetype and task fit | 9 / 10 | Each first viewport visibly starts from a different user decision. The studio and travel pages still use strong campaign language, but their proof/action remains present. |
| Evidence-to-task fit | 9 / 10 | Product, place, work, or operational state has an active decision role in all cases. |
| Cross-domain identity separation | 10 / 10 | The ten pages use materially different topologies, density, media roles, type behavior, action placement, and follow-on sequence. |
| Whole-experience continuity | 7 / 10 | Flows, confirmations, and recovery are made explicit in the page architecture, but these are static benchmark fixtures rather than live production flows. |
| Responsive verification | 7 / 10 | All pages carry independent compact-layout rules; desktop render was visually inspected. A real-device mobile pass remains required before production use. |

**Provisional benchmark result: 8.7 / 10 for product-specific direction.** This
is an improvement in *form selection* and evidence placement, not proof that
the pages are ready for a real launch or that users prefer every aesthetic.

## Honest limitations and next checks

- This is one independently authored fixture per domain, not a multi-model or
  user-research study.
- Labels, prices, dates, availability, and money figures are illustrative
  benchmark content; none claims a real product capability, medical service, or
  financial offer.
- Production work must add live data, validation, keyboard and screen-reader
  interaction testing, legal/privacy review, and real-device mobile testing.
- The benchmark deliberately audits the first decision and handoff. It does not
  simulate checkout, appointment inventory, payment movement, or medical triage.
