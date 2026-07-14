---
sourceId: white-hat-ux
sourceType: book
sourceName: "White Hat UX: The Next Generation in User Experience"
sourceLocation: "Book/pdfcoffee.com_white-hat-ux-the-next-generation-in-user-experience-pdf-free.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Ethical persuasion**: Use psychological principles to HELP users achieve their goals, not manipulate against interests
2. **Dark pattern awareness**: Identify and reject: trick questions, forced continuity, hidden costs, misdirection, roach motels
3. **Transparency principle**: Every persuasive element should be defensible when explained to the user
4. **Reciprocity in design**: Give value before asking for commitment (free content → signup, not gated content)
5. **Choice architecture**: Present options in ways that make good decisions easy (smart defaults, progressive commitment)
6. **Trust signals**: Consistency, social proof, authority markers — but only when truthful and verifiable

## Concrete Rules & Parameters

- Default state: Always the option that serves USER's interest (not business)
- Pre-selected checkboxes: Never for opt-in marketing/data sharing (dark pattern)
- Cancellation: Same number of steps (or fewer) as signup
- Price display: Full price visible before any commitment action
- Cookie consent: Reject must be equally prominent as Accept
- Confirm/Cancel: Confirm = positive action, always on right; Cancel = escape, always on left

## Modern Context Application

- **Component systems**: Form components default to ethical patterns (no pre-checked opt-ins)
- **Tokens**: No "attention-grabbing" token that makes Accept button more prominent than Reject
- **Dark mode**: Not relevant to ethical principles (applies equally)
- **AI context**: Agent must NOT generate dark patterns; Quality Gate checks for ethical violations
- **Accessibility**: Ethical UX and accessibility share goals (clear, honest, predictable interfaces)

## Anti-AI-Slop Indicators

- Expert: Equal visual weight for Accept/Reject; clear cancellation path; honest defaults
- AI slop: Bright "Accept" with gray "Reject"; complex cancellation flows; pre-selected options
- Expert: Persuasion is transparent and user-beneficial
- AI slop: Manipulative copy ("Are you sure you want to miss out?"), shame-clicking

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Dark pattern blacklist | `quality-gate/criteria.json` | Ethical pattern rules | Gate rejects known dark patterns |
| Default state principle | `components/atoms/` | Checkbox/radio default specs | No pre-selected marketing opt-ins |
| Button hierarchy ethics | `design-rules/interaction.rules.json` | CTA balance rules | Equal visual weight for opposing choices |
| Cancellation parity rule | `design-rules/interaction.rules.json` | Flow symmetry requirement | Cancel ≤ steps as signup |
| Transparency test | `quality-gate/criteria.json` | "Explain to user" test | Persuasion defensible when exposed |

## Cross-References

- Ethical defaults align with Don't Make Me Think's user-serving philosophy
- Dark pattern awareness connects to Quality_Gate requirement (Req 12)
- Choice architecture confirms Experiencing Design's progressive disclosure
- Trust signals relate to Designing for Emotion's personality framework
- Accessibility alignment validates WCAG requirement (Req 4.6, 6.4)
