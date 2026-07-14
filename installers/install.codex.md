# Installing ProdigeUI for Codex

## Prerequisites

- Codex (OpenAI) installed and configured on your machine
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
   ├── AGENTS.md         <-- entry point for Codex
   ├── prodigeui/
   └── ...
   ```
   > `AGENTS.md` is provided in `prodigeui/` root. Copy it one level up.

3. Codex discovers skills from the `prodigeui/skills/` directory. Ensure the
   folder is placed at the correct relative path from `AGENTS.md`.

## Verification

- Open Codex in your project directory.
- Codex should now reference ProdigeUI artifacts via `AGENTS.md`.
- Try triggering: "design ui" to verify skill discovery.
- Ask Codex to "list available design skills" — it should enumerate ProdigeUI skills.

## Troubleshooting

- **Skills not detected**: Ensure `AGENTS.md` is at the project root (same level as `prodigeui/`).
- **Tokens not found**: Verify `prodigeui/` folder structure is intact with `tokens/`, `themes/`, etc.
- **Partial artifacts**: Check `prodigeui/manifest.json` lists all expected artifacts.
- **Conflicts with existing AGENTS.md**: Merge ProdigeUI directives into your existing file, or rename the original and include a reference.
