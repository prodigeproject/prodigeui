# Model-Robust Generation Contract

Use this compact contract when the executing model is likely to imitate nearby examples,
overbuild effects, or skip abstract taste guidance. The contract overrides benchmark-house
habits but not an explicit user direction.

## Six lines to keep in working context

1. **Derive, do not retrieve.** Write `product -> feeling -> physical metaphor`; every
   palette, type, and signature decision must point back to one of those three phrases.
2. **Choose the palette family before colors.** Explicitly choose light/dark, warm/cool,
   quiet/drenched. Reject the nearest old benchmark's family unless the brief independently
   leads there. SaaS/dev-tool does not automatically mean dark; creative studio does not
   automatically mean black plus orange.
3. **One unmistakable hero artifact.** Product landing: show a legible, domain-specific
   product state. Studio/brand: make the name, proposition, and one concept-tied graphic the
   focal system. The artifact and headline must share the first viewport.
4. **One signature, two supporting moves.** Pick one bold visual signature, one reveal
   pattern, and one micro-interaction. Additional engines, shaders, videos, glows, glass,
   particles, or texture layers require a brief-derived reason. Complexity is not quality.
5. **Prefer contrast and composition over effects.** Establish type scale, asymmetric
   balance, active negative space, and section rhythm before adding an engine. A clean
   CSS composition that communicates the product beats generic WebGL or video.
6. **Inspect the rendered state.** At desktop and mobile, verify first viewport focal point,
   clipped text, horizontal overflow, dead space, and computed foreground/background for
   every interactive state. Scan for mojibake before delivery.

## Accepted v2 quality-profile transfer

Read `canonical/accepted-quality.profile.json` before making the six required generation
decisions. Select `operationalProduct` or `expressiveStudio` only when the current brief
actually matches it, and record the match in working context.

This profile transfers a quality threshold, not a visual template. Keep its product intent,
artifact semantics, type-role discipline, palette commitment, focal hierarchy, rhythm
argument, and closing behavior. Derive fresh copy and composition from the current brief.
Never load benchmark HTML, retrieve its headline, reproduce its section order, or encode its
dimensions and color values. `benchmarkGeometryAllowed` is false.

For a no-reference verification run, fail and revise when the output is technically clean but
loses the selected profile's value mechanism, credible artifact, type-role contrast, committed
palette story, or rhythm. "Different" is allowed; falling back to a generic product or agency
template is not.

## Reference-quality defaults when the brief is vague

- Use 4-5 distinct layout families across a full landing page. Never repeat equal cards for
  every section.
- Keep the hero to one headline, one supporting paragraph, one primary intent, and one
  artifact. Secondary CTA is allowed only when its intent differs.
- Product artifact copy must contain domain nouns from the brief. Decorative fake UI fails.
- Use a display/body pairing with visible contrast in voice. Do not reach for the same
  grotesk plus mono pairing in every build.
- Commit to one dominant surface family and one refined accent; a second accent is allowed
  only as a structural counterpoint, not decoration.
- Motion must reveal hierarchy. Ambient loops must be subtle, pause under reduced motion,
  and never compete with reading.

## V2 type-role and closing-surface lock

The executable version of this section is
`canonical/generation.contract.json`. Keep its `typeJobs` and `closingSurface` decisions in
working context through implementation and review.

Before selecting font names, assign three jobs:

1. **Display** owns identity and major hierarchy.
2. **Body** owns reading, actions, and repeated explanation.
3. **Annotation** owns operational metadata, timestamps, labels, and tabular evidence.

For an operational product, start with a technical-but-human editorial/variable grotesk for
display, a calmer UI sans for body, and mono only for real metadata. This is a role profile,
not a mandatory font trio. Render the real headline before committing. Avoid a condensed
system fallback as the final display voice, one undifferentiated face across all three jobs,
or tracking so tight that word shapes and mobile wrapping collapse.

For standalone output, bundle properly licensed fonts or choose a verified system stack.
Wait for `document.fonts.ready` and inspect the computed family on the hero. A declared
`font-family` that silently falls back does not pass.

The closing CTA must resolve the palette story already established above it. Reuse the
existing signal/accent token or a primary surface. Do not introduce a muddy near-match or a
new hue only for the final section. A full accent field is allowed when the accent was used
sparingly earlier and the field owns explicit foreground and button colors with rendered
contrast.

## Cascade and encoding locks

- **Surface owns foreground:** any rule that sets a component background also sets its
  semantic text color in that same rule. Labels and icons inherit from the component root.
- Test computed styles inside both light and dark parents. Token-pair validation alone is
  insufficient because CSS inheritance can change the rendered pair.
- Write UTF-8. Reject output containing common mojibake fragments (`ÃƒÂ¢`, `ÃƒÆ’`, `Ãƒâ€š`, `ÃƒÂ°Ã…Â¸`,
  `ÃƒÂ¯Ã‚Â¸`, `ÃŽâ€œ`). Prefer ASCII punctuation. Encode intentional HTML symbols as entities such
  as `&bull;`, `&copy;`, `&rarr;`, `&ldquo;`, and `&rdquo;`.

## Anti-imitation check

Before shipping, compare against any nearby example files. If the new output shares their
palette family, hero archetype, type register, and engine technique, at least three of those
four must be independently justified by the current brief. Otherwise re-derive. A benchmark
is evaluation evidence, never a template.

## Typography enhancement layer (added after the 08:42 baseline)

Treat typography as product communication, not a fashionable font pairing.

- **FlowAI / operational products:** prefer a distinctive editorial grotesk or variable
  grotesk whose voice feels technical but human. Test the real headline before committing.
  Tighten tracking only enough to create authority; do not force aggressive compression.
  Build a mature hierarchy: display, lead, body, action, and operational annotation have
  visibly different jobs. Keep paragraph measure deliberate (roughly 45-65 characters).
- **NOVA / creative studios:** reject the clichÃ©d "AI agency template" combination. Display,
  editorial serif, and UI typography must each own a different repeated function: identity,
  reading/editorial voice, and navigation/control respectively. Do not mix them decoratively.
- **Artwork captions:** captions over artwork or photography require an owned backdrop,
  scrim, or opaque surface plus a verified foreground. Never rely on the image being dark
  enough. Validate computed contrast against the rendered frame.

These are functional constraints, not mandatory font names. Preserve a stronger composition
when changing typography; enhancement must not rebuild the page or add new showcase patterns.

## Model-robust creative checkpoint

This checkpoint protects the quality of the reasoning, not a benchmark layout. Do not record
pixel geometry, prescribe section topology, or retrieve an existing implementation.

Before coding, write five short decisions in working context:

1. **Product intent:** what must the visitor understand or feel after the first viewport?
2. **Visual thesis:** one concept-specific idea that can organize type, color, and imagery.
3. **Type jobs:** which face/voice carries identity, reading, interface, and annotation—and
   why those jobs fit this product rather than a fashionable pairing.
4. **Focal hierarchy:** name the single dominant subject and what must remain subordinate.
5. **Rhythm argument:** describe how the page changes pace across sections without naming a
   reusable template or forcing a fixed sequence.

Reject and rethink the direction when any answer could be pasted unchanged onto an unrelated
SaaS, agency, portfolio, or store. Smaller or imitation-prone models must spend their effort
making these five decisions specific instead of compensating with more effects or more cards.

## Render-truth checkpoint

- A declared webfont is not proof that it rendered. Wait for `document.fonts.ready`, inspect
  the computed family on identity/display text, and fix loading rather than styling a fallback.
- Control text measure and hierarchy through layout and type settings. Manual line breaks are
  allowed only when the phrase has an intentional editorial break that survives responsive
  review; never insert them solely to match one screenshot.
- Any surface-changing component owns its foreground in the same rule. Artwork captions own
  a stable backdrop or local contrast treatment instead of trusting arbitrary pixels beneath.
- Render desktop and mobile with animations disabled or forced to their visible final state.
  Content hidden by an entrance effect during screenshot, no-JS, or reduced-motion review is
  a failure even if the animated browser session eventually reveals it.
- Scan the authored artifact for mojibake and horizontal overflow before judging aesthetics.

## Creative self-critique

Before delivery, answer: “Which three decisions here could only belong to this product?” If
fewer than three are visible in the rendered page, revise concept, type roles, copy, artifact,
or interaction. Do not solve the failure by copying a nearby benchmark, locking its geometry,
or adding a deterministic composition recipe.
