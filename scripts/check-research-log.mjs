// check-research-log.mjs
// Verifies 1:1 correspondence between research/notes/ files and research-log.json entries.

import { readFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '../prodigeui');

// Load research log
const logPath = resolve(root, 'research/research-log.json');
const log = JSON.parse(readFileSync(logPath, 'utf-8'));
const logEntries = new Map(log.notes.map(n => [n.noteFile, n]));

// List actual note files (exclude .gitkeep)
const notesDir = resolve(root, 'research/notes');
const noteFiles = readdirSync(notesDir)
  .filter(f => f.endsWith('.note.md'))
  .map(f => `research/notes/${f}`);

let failed = false;

// Check for orphaned files (in folder but not in log)
const orphaned = noteFiles.filter(f => !logEntries.has(f));
if (orphaned.length > 0) {
  console.error(`\n[FAIL] ${orphaned.length} orphaned note file(s) not in research-log.json:`);
  orphaned.forEach(f => console.error(`  - ${f}`));
  failed = true;
}

// Check for missing files (in log but not on disk)
const onDisk = new Set(noteFiles);
const missing = [...logEntries.keys()].filter(f => !onDisk.has(f));
if (missing.length > 0) {
  console.error(`\n[FAIL] ${missing.length} log entry/entries point to missing file(s):`);
  missing.forEach(f => console.error(`  - ${f}`));
  failed = true;
}

// Summary
if (!failed) {
  console.log(`[PASS] Research log is complete. ${noteFiles.length} notes match ${logEntries.size} entries.`);
  process.exit(0);
} else {
  console.error(`\n[SUMMARY] Notes on disk: ${noteFiles.length}, Log entries: ${logEntries.size}`);
  process.exit(1);
}
