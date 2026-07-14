# Component specification catalog

ProdigeUI intentionally ships component **specifications**, not framework-bound React/Vue/Svelte
source. `components.manifest.json` is the executable catalog consumed by canonical checks,
prompt templates, and generation skills. Every entry defines its atomic level, variants, states,
accessibility behavior, and semantic token dependencies.

The `atoms/`, `molecules/`, and `organisms/` directories are taxonomy anchors for future
framework adapters. Their current emptiness does not imply missing runtime code because this
distribution's `deliveryModel` is `specification` and `implementationRequired` is `false`.

Generation workflow:

1. Select component names from `components.manifest.json`.
2. Resolve their token references through component → semantic → primitive layers.
3. Implement the specification in the target project's existing framework and conventions.
4. Preserve every required state and accessibility behavior.
5. Run the generated artifact Quality Gate; the catalog itself is validated by `npm test`.

Do not import these folders as a component package, invent nonexistent source paths, or claim
that framework implementations are bundled.
