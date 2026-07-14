---
name: token-management
description: |
  Manages the ProdigeUI token system. Add, modify, or validate design tokens across primitive, semantic, and component layers while maintaining referential integrity.
triggers:
  - "manage tokens"
  - "add token"
  - "update token"
  - "validate tokens"
---

# token-management

## Purpose

Perform CRUD operations on the ProdigeUI Token_System while preserving the
three-layer referential integrity (primitive -> semantic -> component). Every
mutation is validated before committing to prevent broken references, circular
dependencies, or orphaned tokens.

## When to Use

- Adding a new color, spacing, or typography value to the system
- Renaming or deprecating an existing token
- Verifying the entire token graph is healthy (no dangling or circular refs)
- Extending tokens for a new component being added to Component_Library

## Workflow Steps

### Step 1 — Determine Operation

1. Identify the requested operation: ADD, UPDATE, RENAME, DELETE, or VALIDATE.
2. Identify the target layer: primitive, semantic, or component.
3. Identify the token category: color, typography, spacing, radius, shadow, border, z-index, or motion.

### Step 2 — Load Current Token State

1. Read `tokens/primitive.tokens.json` for concrete values.
2. Read `tokens/semantic.tokens.json` for role-based mappings.
3. Read `tokens/component.tokens.json` for component-level bindings.
4. Read `tokens/tokens.schema.json` to confirm structural validity rules.

### Step 3 — Execute Operation

**ADD:**
1. Determine the correct layer for the new token.
2. If primitive: assign a concrete value (hex, px, ms, named easing).
3. If semantic: assign a `ref` pointing to an existing primitive token.
4. If component: assign a `ref` pointing to an existing semantic token.
5. Ensure the token name follows semantic naming: `{category}.{role}.{variant}`.

**UPDATE:**
1. Locate the token in its layer file.
2. Modify the value (primitive) or ref (semantic/component).
3. Trace downstream references — identify all tokens that depend on this one.

**RENAME:**
1. Update the token name in its layer file.
2. Find and update all references in downstream layers.
3. Update `tokens/build/tokens.css` variable names.
4. Update `components/components.manifest.json` if component tokens are affected.

**DELETE:**
1. Verify no downstream tokens reference the target token.
2. If references exist: report them and block deletion until resolved.
3. Remove the token from its layer file.

### Step 4 — Validate Referential Integrity

1. For every semantic token: confirm its `ref` resolves to a defined primitive token.
2. For every component token: confirm its `ref` resolves to a defined semantic token.
3. Detect circular references by walking the reference graph.
4. Flag any orphaned tokens (defined but never referenced by any downstream consumer).

### Step 5 — Regenerate Derived Outputs

1. Rebuild `tokens/build/tokens.css` from resolved token values.
2. Verify all theme files still resolve correctly (no missing overrides).
3. If a theme is incomplete after the change: report which tokens need theme values.

### Step 6 — Report Results

1. Summarize: operation performed, tokens affected, integrity status.
2. If validation fails: list each violation (dangling ref, circular chain, missing theme value).
3. If successful: confirm the token system is healthy and all layers are consistent.
