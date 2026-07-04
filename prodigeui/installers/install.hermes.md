# Installing ProdigeUI for Hermes

## Prerequisites

- Hermes installed and configured on your machine
- A project directory initialized (any language/framework)
- Terminal access to the project root

## Installation Steps

1. Copy the `prodigeui/` folder into your project root:
   ```
   your-project/
   ├── prodigeui/        <-- paste here
   ├── src/
   └── ...
   ```

2. Copy the entry-point file `AGENTS.md` to your project root:
   ```
   your-project/
   ├── AGENTS.md         <-- entry point for Hermes
   ├── prodigeui/
   └── ...
   ```
   > `AGENTS.md` is provided in `prodigeui/` root. Copy it one level up.

3. Hermes registers skills via the `prodigeui/skills/` directory. Skills are
   discovered automatically when `AGENTS.md` points to the skill registry.

## Verification

- Open Hermes in your project directory.
- Hermes should now reference ProdigeUI artifacts via `AGENTS.md`.
- Try triggering: "design ui" to verify skill discovery.
- Ask Hermes to "list available design skills" — it should enumerate ProdigeUI skills.

## Troubleshooting

- **Skills not detected**: Ensure `AGENTS.md` is at the project root (same level as `prodigeui/`).
- **Tokens not found**: Verify `prodigeui/` folder structure is intact with `tokens/`, `themes/`, etc.
- **Partial artifacts**: Check `prodigeui/manifest.json` lists all expected artifacts.
- **Conflicts with existing AGENTS.md**: Merge ProdigeUI directives into your existing file, or rename the original and include a reference.
