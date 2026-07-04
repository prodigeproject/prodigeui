# ProdigeUI Fonts

This directory contains font assets used by the ProdigeUI design system.

## Required Font Files

The following fonts are referenced in the token system and should be downloaded from their respective sources:

### Inter (Primary Sans-Serif)
- **Source:** [Google Fonts](https://fonts.google.com/specimen/Inter)
- **License:** SIL Open Font License 1.1
- **Weights needed:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Files:** `inter-regular.woff2`, `inter-medium.woff2`, `inter-semibold.woff2`, `inter-bold.woff2`

### JetBrains Mono (Monospace)
- **Source:** [JetBrains](https://www.jetbrains.com/lp/mono/)
- **License:** SIL Open Font License 1.1
- **Weights needed:** 400 (Regular), 700 (Bold)
- **Files:** `jetbrains-mono-regular.woff2`, `jetbrains-mono-bold.woff2`

### Geist (Display / Headings)
- **Source:** [Vercel](https://vercel.com/font)
- **License:** SIL Open Font License 1.1
- **Weights needed:** 400 (Regular), 500 (Medium), 700 (Bold)
- **Files:** `geist-regular.woff2`, `geist-medium.woff2`, `geist-bold.woff2`

## Download Instructions

1. Visit the source links above.
2. Download `.woff2` format files for web use.
3. Place the files in this directory with the naming convention shown above.
4. The asset manifest (`assets.manifest.json`) references these files by path.

## Usage Notes

- All fonts listed here are under the SIL Open Font License, permitting free commercial use.
- Use `.woff2` format for optimal web performance (best compression, wide browser support).
- Subset fonts to include only Latin character sets if file size is a concern.
- Reference fonts via the design token system rather than hardcoding font-family values.
