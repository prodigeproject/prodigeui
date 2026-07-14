# Installing ProdigeUI for Cursor

## Prerequisites

- Cursor IDE installed and configured on your machine
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

2. Copy the entry-point file `.cursorrules` to your project root:
   ```
   your-project/
   ├── .cursorrules      <-- entry point for Cursor
   ├── prodigeui/
   └── ...
   ```
   > A `.cursorrules` file adapted from ProdigeUI's `AGENTS.md` content is
   > provided in `prodigeui/installers/`. Copy it to the project root.

3. (Alternative) If you prefer using `AGENTS.md` as a fallback, Cursor also
   supports reading `AGENTS.md` from the project root. Copy it as in other tools.

4. Cursor discovers skills via the `prodigeui/skills/` directory. Ensure the
   folder path is referenced in `.cursorrules` or `AGENTS.md`.

## Verification

- Open Cursor in your project directory.
- Cursor should now reference ProdigeUI artifacts via `.cursorrules`.
- Try triggering: "design ui" to verify skill discovery.
- Ask Cursor to "list available design skills" — it should enumerate ProdigeUI skills.

## Troubleshooting

- **Skills not detected**: Ensure `.cursorrules` (or `AGENTS.md`) is at the project root (same level as `prodigeui/`).
- **Tokens not found**: Verify `prodigeui/` folder structure is intact with `tokens/`, `themes/`, etc.
- **Partial artifacts**: Check `prodigeui/manifest.json` lists all expected artifacts.
- **Conflicts with existing .cursorrules**: Merge ProdigeUI directives into your existing `.cursorrules` file, keeping your project-specific rules alongside ProdigeUI references.
