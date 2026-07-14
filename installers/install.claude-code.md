# Installing ProdigeUI for Claude Code

## Prerequisites

- Claude Code installed and configured on your machine
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

2. Copy the entry-point file `CLAUDE.md` to your project root:
   ```
   your-project/
   ├── CLAUDE.md         <-- entry point for Claude Code
   ├── prodigeui/
   └── ...
   ```
   > `CLAUDE.md` is provided in `prodigeui/` root. Copy it one level up.

3. (Optional) If you use the `.claude/` directory for skills, symlink or copy
   `prodigeui/skills/` into `.claude/skills/` for native skill discovery.

## Verification

- Open Claude Code in your project directory.
- Claude should now reference ProdigeUI artifacts via `CLAUDE.md`.
- Try triggering: "design ui" to verify skill discovery.
- Ask Claude to "list available design skills" — it should enumerate ProdigeUI skills.

## Troubleshooting

- **Skills not detected**: Ensure `CLAUDE.md` is at the project root (same level as `prodigeui/`).
- **Tokens not found**: Verify `prodigeui/` folder structure is intact with `tokens/`, `themes/`, etc.
- **Partial artifacts**: Check `prodigeui/manifest.json` lists all expected artifacts.
- **Conflicts with existing CLAUDE.md**: Merge ProdigeUI directives into your existing file, or rename the original and include a reference.
