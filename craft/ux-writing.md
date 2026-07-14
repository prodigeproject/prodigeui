# Craft — UX Writing

> Copy is design. A world-class layout with hype copy reads as AI slop instantly. This file
> is the voice standard, distilled from shipped premium product landings (Antimetal, Plasma,
> Tokens Studio, Linear, Stripe) rather than from marketing-copy books.

## The five rules

1. **Outcome-first headlines, 3–7 words, declarative.** State the result the user gets, not
   the product category. Good: "Production that runs itself." / "One account for global
   money." / "Design systems, fully automated." Bad: "AI-powered project management platform
   for engineering teams" (category restatement, not a promise).
2. **Eyebrow adds NEW information.** A kicker above a headline must carry momentum, status, or
   proof ("Now in public beta", "SOC 2 · HIPAA", "Backed by…") — never a smaller echo of the
   headline. If it only restates, delete it.
3. **Numbers are real and sourced.** Every metric is either traceable or footnoted (premium
   fintech uses superscript legal refs on every claim). **Never invent flavor metrics**
   ("10× faster", "99.9% uptime", "120+ launches", "trusted by thousands"). If you can't
   source it, cut it or use an explicitly labelled placeholder.
4. **One CTA intent, action-describing.** Describe the action/outcome ("Book a demo", "Start
   free", "See the work", "Get the card"), never "Get Started" / "Learn More" by reflex. Use
   ONE label per intent across nav + hero + footer.
5. **Cut the hype and the punctuation tells.** Ban: revolutionary, seamless, cutting-edge,
   unleash, supercharge, elevate, game-changing, effortless, "in today's fast-paced world".
   **Ban the em-dash** in generated copy (strong AI tell) — use a period, comma, or restructure.

## Microcopy

- Buttons: verb + object ("Send signal", "Explore the research"). Loading state has its own
  label ("Sending…"), not a lone spinner.
- Empty states coach the next action ("No projects yet. Start your first one."), never a dead
  "Nothing here."
- Error messages say what happened AND the fix ("That email looks off. Check the @ and try
  again."), never "Invalid input."
- Form labels are persistent (not placeholder-as-label); help text sits below, not inside.

## Voice self-audit (re-read every visible string before shipping)

Flag and rewrite: fake-precise numbers invented for flavor; "Quietly trusted by"; poetic
craftsman labels ("From the field"); generic step labels ("Stage 1/2/3"); locale/weather/time
strips as decoration; scroll cues ("scroll to explore"); version stamps; any em-dash; any hype
word from the ban list. The outsider test: if the copy could belong to any product in the
category, it isn't written yet.

## Related
- `craft/taste.md` — copy self-audit hard-rules
- `craft/patterns/modern-product-baseline.md` — where this voice standard comes from
- `quality-gate/anti-ai-slop.checklist.md` — the gate
