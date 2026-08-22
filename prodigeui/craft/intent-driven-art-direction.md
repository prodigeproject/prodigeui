# Intent-Driven Art Direction

> ProdigeUI does not have one house look. It has a way to derive a useful visual
> direction from the product, the people using it, and the proof they need.

This document is mandatory in Creative Mode before theme synthesis or layout
selection. It replaces category reflexes such as “fashion equals warm paper,”
“SaaS equals dark tech,” or “premium equals a giant serif hero.” A route is a
reasoning aid, not a reusable visual preset.

## 1. Read the product before choosing the look

Write a private Intent & Art Direction Brief with these fields:

| Field | Question to answer |
|---|---|
| Product | What is being offered, made, sold, or changed? |
| Primary user | Who is making the decision, and what do they already know? |
| Target market | What cultural, price, category, and competitive context shapes trust? |
| User job | What must the visitor understand, compare, feel, or do in the first session? |
| Anxiety / desire | What uncertainty blocks the decision, and what emotional state should replace it? |
| Brand posture | What should the product feel like: precise, generous, irreverent, tactile, civic, experimental, dependable, or something else? |
| Evidence | What can truthfully prove the promise: product state, photography, material detail, result, testimonial, data, or process? |
| Content and media | Which real assets exist? Is original image generation appropriate and available? |
| Platform and constraints | Viewports, input method, accessibility, performance, localization, and legal limits. |

If a field is unknown, mark it as an inference with a confidence level. Do not
invent specific claims, demographics, testimonials, or product evidence to make
the page feel more complete.

Declare the read in one sentence:

> **Design Read:** `<page kind>` for `<primary user>` in `<market>`, helping them
> `<user job>` through `<emotional register>`, with `<evidence type>` as the
> first proof.

Then write a one-sentence experience thesis:

> This experience makes `<promise>` feel `<emotional result>` by showing
> `<proof>` and leading to `<next decision>`.

## 2. Route the experience, not the color

Select the closest experience route only after writing the read. Blend routes when
the user job requires it, and record the reason. Never copy a route's colors,
fonts, section order, or geometry.

| Experience route | When it fits | First proof and structural bias |
|---|---|---|
| Product commerce / fashion / beauty / food / travel | The visitor evaluates a tangible object, material, fit, quality, or taste | Real product media, comparison or discovery path, tactile detail, fit/price/trust cues. The layout may be catalogue, editorial, shop floor, or utility-led depending on shopper behavior. |
| Operational product | The value is a change to work, a decision, or a live record | One legible product state with real nouns, ownership, time, risk, and next action. Density follows scanning and decision complexity. |
| Technical / developer tool | The audience needs to understand a mechanism, integration, or system boundary | An honest product state, code, flow, or interactive test. Motion and canvas are optional and only useful when they improve comprehension. |
| Cultural / creative studio / launch | The visitor is judging point of view, cultural fit, or quality of work | One claim-to-proof construction, usually a real work sample, original artwork, place, or material artifact. Identity scale can be bold, but the proof must remain truthful. |
| Trust-critical service | The cost of confusion or perceived risk is high: health, civic, finance, education, or public service | Clarity, reassurance, legible choices, and transparent evidence. Calm does not mean beige, and distinctive does not require spectacle. |
| Community / learning / consumer service | The product depends on approachability, orientation, and repeated participation | Warmth, scan-friendly hierarchy, human signals, and a clear next step. Use illustration, photography, or data only when it helps belonging or understanding. |

The route controls information architecture and evidence priority. It does not
dictate a theme. Two fashion products may need opposite experiences: a technical
uniform label may need a specification-led shop, while a small occasionwear
atelier may need a cinematic fitting story. Both can be correct.

## 3. Derive the art direction record

Before implementation, make these decisions and attach a reason to each one:

1. **Information hierarchy:** the proposition, proof, objections, comparison
   needs, and primary action in order of the user's decision.
2. **Media strategy:** the most truthful representation of the product and the
   crop, scale, and placement that give it the right job.
3. **Layout family:** for example, specimen sheet, editorial sequence, product
   grid, catalogue rail, split evidence view, map, timeline, comparison table,
   or immersive canvas. Choose from content relationships, not novelty.
4. **Spatial rhythm:** density, section transitions, alignment changes, and
   negative space. A calm page is not automatically an empty page; an energetic
   page is not automatically a busy page.
5. **Type jobs:** display, body, annotation, and any variable or tabular role.
   The family is selected for the audience and content, then tested with real
   copy. A serif, mono, or oversized display is a decision, never a category
   reflex.
6. **Color roles:** surface, text, signal, action, and state. Derive hue,
   lightness, and chroma from product material, brand stance, market context,
   and available media. Verify each foreground pair against its actual surface.
7. **Interaction and motion:** what needs feedback, explanation, comparison, or
   delight. Static is valid when the job is looking, reading, or trusting.
8. **Closing behavior:** the final decision and the visual role that resolves it.

Record at least one rejected direction, such as “not a dark technical dashboard
because the shopper needs fabric and fit evidence,” so the route remains
auditable instead of becoming an unconscious default.

## 4. Media is proof, not decoration

Use this order of preference:

1. Supplied product, brand, or project media.
2. Local, license-cleared media that truthfully represents the subject.
3. Original generated media when the product is materially visual and no
   authentic asset exists, or when a new art-directed scene is explicitly part of
   the concept. Record generator, prompt, date, usage role, and alt text.
4. CSS, SVG, diagrams, or code-authored geometry when the product is abstract,
   data-driven, or the concept genuinely calls for a non-photographic artifact.

If a visual product has no usable media, say so in the private quality record.
Do not let a colored rectangle, monogram, swatch, or geometric silhouette claim
to prove fabric, fit, food, place, or physical quality. A generated image must
be integrated into the composition: its crop, scale, neighboring type, surface,
loading state, and responsive behavior are part of the art direction.

### Physical-product storefront check

When the user is asking for a fashion, beauty, food, furniture, or other
physical-product storefront, distinguish the job from a brand poster:

- **Discovery:** category navigation, collection count, search or filter affordance,
  and a clear route into the product set.
- **Merchandising:** product name, material or relevant attribute, price when the
  brief supports commerce, color/size availability, and an action that describes
  the next step. Do not invent price or stock.
- **Proof:** use a lookbook/lifestyle view to show context plus product/detail
  imagery to show construction, material, fit, or finish when those factors affect
  the decision. Repeated colored rectangles and CSS silhouettes are atmosphere, not
  physical proof.
- **Flow:** let the page move from campaign or collection statement into product
  discovery, then material/fit/care information, then support or purchase action.
  A gallery-only page is valid for editorial mode, but it must not pretend to be a
  shop.

If the brief is a fashion editorial rather than commerce, replace price/filter
chrome with lookbook sequencing, credits, collection context, and a specific
editorial invitation. The route must be declared rather than guessed from the
word “fashion.”

## 5. Anti-determinism contract

Across unrelated briefs, the following are not defaults:

- paper/ink/coral/lilac or any other fixed palette family;
- a dark hero, split hero, oversized serif, mono labels, catalogue rail, or
  equal-card grid;
- a final dark band, a centered headline, a full-bleed panel, or a specific
  section count;
- canvas, WebGL, particles, grain, glass, gradients, or ambient motion;
- a font pairing chosen only because the page is “premium,” “fashion,” or “SaaS.”

Before shipping, perturb the product or audience in a thought experiment. If the
same palette, hero topology, type pairing, media treatment, and motion plan would
still be selected, the read was not deep enough. At least three of those decisions
must be re-derived from the changed intent. Consistency is preserved through
semantic roles, evidence quality, accessibility, and interaction clarity, not by
reusing a skin.

## 6. Minimum handoff before code

The private preflight must contain:

- Intent & Art Direction Brief;
- selected route and confidence;
- experience thesis;
- information hierarchy and first proof;
- media decision and provenance plan;
- layout family and rejected alternative;
- type jobs and color-role rationale;
- motion/interaction decision, including why a static treatment is or is not
  appropriate;
- the three dials and the product-specific quality risks.

Only then should dynamic tokens, components, and page geometry be synthesized.
