import { readFileSync, readdirSync } from 'node:fs';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateJsonSchema } from './lib/json-schema.mjs';

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptsDir, '../prodigeui');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const walk = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const path = join(directory, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});
const failures = [];
const pass = message => console.log(`  PASS: ${message}`);
const fail = message => { failures.push(message); console.error(`  FAIL: ${message}`); };

const allJson = walk(root).filter(path => path.endsWith('.json'));
for (const path of allJson) {
  try { read(path); } catch (error) { fail(`${relative(root, path)}: invalid JSON (${error.message})`); }
}
if (!failures.length) pass(`all ${allJson.length} JSON artifacts parse`);

const validateFamily = (label, schemaPath, files) => {
  const schema = read(join(root, schemaPath));
  for (const path of files) {
    const errors = validateJsonSchema(read(path), schema);
    if (errors.length) errors.slice(0, 12).forEach(error => fail(`${relative(root, path)} ${error}`));
    else pass(`${relative(root, path)} conforms to ${schemaPath}`);
  }
};

validateFamily('tokens', 'tokens/tokens.schema.json', [
  join(root, 'tokens/primitive.tokens.json'),
  join(root, 'tokens/semantic.tokens.json'),
  join(root, 'tokens/component.tokens.json'),
]);
validateFamily('themes', 'themes/theme.schema.json', readdirSync(join(root, 'themes')).filter(name => name.endsWith('.theme.json')).map(name => join(root, 'themes', name)));
validateFamily('templates', 'prompt-templates/template.schema.json', walk(join(root, 'prompt-templates')).filter(path => path.endsWith('.template.json')));
validateFamily('reports', 'quality-gate/report.schema.json', [join(root, 'quality-gate/example.report.json')]);
validateFamily('criteria', 'quality-gate/criteria.schema.json', [join(root, 'quality-gate/criteria.json')]);

const components = read(join(root, 'components/components.manifest.json'));
if (!Array.isArray(components.components) || !components.components.length) fail('components manifest has no components');
else {
  for (const component of components.components) {
    if (!component.name || !component.level || !component.category || !Array.isArray(component.tokens)) fail(`component structural error: ${component.name || 'unnamed'}`);
  }
  pass(`${components.components.length} component specifications structurally valid`);
}

const assets = read(join(root, 'assets/assets.manifest.json'));
if (!Array.isArray(assets.assets) || assets.assets.some(asset => !asset.id || !asset.category || !asset.license)) fail('asset manifest structural error');
else pass(`${assets.assets.length} assets structurally valid`);

const motion = read(join(root, 'motion/motion.tokens.json'));
if (!motion.tokens?.duration || !motion.tokens?.easing) fail('motion token structure is incomplete');
for (const path of walk(join(root, 'motion/presets')).filter(path => path.endsWith('.json'))) {
  const document = read(path);
  if (!document.category || !Array.isArray(document.presets)) fail(`${relative(root, path)}: invalid motion preset document`);
}
if (!failures.some(item => item.includes('motion'))) pass('motion tokens and preset documents structurally valid');

for (const path of readdirSync(join(root, 'design-rules')).filter(name => name.endsWith('.rules.json')).map(name => join(root, 'design-rules', name))) {
  const document = read(path);
  if (!document || typeof document !== 'object' || Array.isArray(document) || !Object.keys(document).length) fail(`${relative(root, path)}: empty design-rule document`);
}
pass('design-rule JSON documents structurally valid');

const authority = read(join(root, 'canonical/system.authority.json'));
const contract = read(join(root, 'canonical/generation.contract.json'));
const profile = read(join(root, 'canonical/accepted-quality.profile.json'));
if (!authority.sources || !authority.manifestPolicy || !authority.normativePrecedence) fail('canonical authority structure is incomplete');
if (!Array.isArray(contract.requiredDecisions) || !contract.typography || !contract.closingCta) fail('generation contract structure is incomplete');
if (profile.benchmarkGeometryAllowed !== false || !profile.profiles?.operationalProduct || !profile.profiles?.expressiveStudio) fail('accepted quality profile structure is incomplete');
if (!failures.some(item => item.includes('canonical') || item.includes('contract') || item.includes('quality profile'))) pass('canonical JSON documents structurally valid');

for (const path of readdirSync(join(root, 'installers/adapters')).filter(name => name.endsWith('.json')).map(name => join(root, 'installers/adapters', name))) {
  const adapter = read(path);
  if (!adapter.tool || !adapter.entryPoint || !adapter.installGuide || !adapter.qualityGateCommand) fail(`${relative(root, path)}: disconnected adapter contract`);
}
const hook = read(join(root, 'hooks/quality-gate-check.hook.json'));
if (!hook.hooks?.[0]?.action?.command) fail('quality hook has no executable command');
if (!failures.some(item => item.includes('adapter') || item.includes('hook'))) pass('adapter and hook JSON documents structurally valid');

const ids = read(join(root, 'quality-gate/criteria.json')).criteria.map(item => item.id);
if (new Set(ids).size !== ids.length) fail('quality criteria IDs are not unique');
else pass(`${ids.length} unique quality criteria`);

console.log('\n=== Schema and Structural Validation Summary ===');
if (failures.length) {
  console.error(`${failures.length} failure(s) detected.`);
  process.exit(1);
}
console.log('All schema-backed and domain-structural validations passed.');
