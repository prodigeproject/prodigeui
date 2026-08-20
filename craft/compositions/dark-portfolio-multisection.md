# Composition — Dark Portfolio Multi-Section

The full-page portfolio/agency narrative (benchmark 1 Jack, 10 Michael Smith, 16 Vortex).
A sequence of sections with deliberate rhythm and transitions, anchored by real work imagery
and a sticky project stack.

## When to use
Personal portfolios, creative agencies, case-study-led sites. Multi-section scroll narrative.

## The section sequence (the spine)
```
[optional] Loading prelude — count-up 000→100 / rotating words / box-reveal (benchmark 10,59,66)
1. Hero          — giant-type or portrait hero (see those compositions)
2. Marquee       — clients/work strip, opposing rows or scroll-linked (patterns/marquee.md)
3. About         — scroll-linked per-char opacity sweep on the bio (patterns/text-reveal v3)
   ↑ often a rounded-top LIGHT section pulled up with negative margin (contrast beat)
4. Services      — numbered list OR bento (not equal cards)
5. Projects      — sticky card stack that scales as you scroll (patterns/sticky-card-stack.md)
6. Contact/CTA   — closing chapter: giant proposition + specific action + useful context;
                   one ambient visual system maximum, never stacked marquees/video/particles;
                    footer may reprise the hero motif when it strengthens continuity
```

## Signature transitions
- **Rounded-top section over negative margin:** a section gets `border-radius:40px 40px 0 0`
  and `margin-top:-40px; z-index:1` so it overlaps the previous section — a premium beat,
  especially dark→light→dark (benchmark 1).
- **Contrast rhythm:** alternate dark and light sections deliberately; don't run 6 identical
  dark sections. Each section earns its place.
- **Sticky project stack:** each project card `position:sticky; top:...` inside a tall
  container, scaling down as the next scrolls over (`targetScale = 1-(n-1-i)*0.03`).

## Motion budget across the page
- Hero: full entrance choreography.
- Sections: first-reveal-only staggered fades (NOT on every scroll — Frequency Gate).
- Ambient: one marquee, optional subtle parallax on the explorations/gallery section only.
- Reduced-motion: everything renders static; sticky stack becomes a normal list.

## Layout anti-repetition (taste.md)
- Use ≥4 distinct layout families across the ~6–8 sections. Don't repeat the same
  image-left/text-right split more than twice consecutively.
- Major work galleries combine a dominant subject with a second spatial signal: offset,
  stagger, crop/height variation, overlap, or intentional negative space. Repeated 7/5 rows fail.
- One eyebrow per ~3 sections. Real headings, no numbered-marker scaffolding by reflex.

## Craft checklist
- [ ] Real work imagery/video throughout; no placeholder boxes.
- [ ] Deliberate dark/light contrast rhythm; rounded-top overlap transitions.
- [ ] Sticky project stack (or equivalent) for the work section.
- [ ] Project title and primary metadata remain visible without hover; unequal project geometry
      survives the final CSS instead of collapsing into one shared fixed height.
- [ ] ≥4 layout families; restrained eyebrows; one accent across all sections.
- [ ] First-reveal-only section entrances; one marquee max; full reduced-motion path.
- [ ] Closing chapter carries proposition-scale type, one specific action, useful context,
      and an earlier visual echo; utility metadata alone is not the close.
- [ ] Closing chapter uses one proposition, one action, one compact context row, and at most one
      ambient visual system.
