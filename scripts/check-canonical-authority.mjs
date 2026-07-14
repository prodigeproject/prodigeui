import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, join, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('../prodigeui/', import.meta.url)));
const authority = JSON.parse(readFileSync(join(ROOT, 'canonical/system.authority.json'), 'utf8'));
const read = p => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));
const primitive = read(authority.sources.primitiveTokens).tokens;
const semantic = read(authority.sources.semanticTokens).tokens;
const componentTokens = read(authority.sources.componentTokens).tokens;
const components = read(authority.sources.components).components;
const assetsDoc = read(authority.sources.assets);
const tokenNames = new Set([...Object.keys(semantic), ...Object.keys(componentTokens)]);
const componentNames = new Set(components.map(c => c.name));
const assetIds = new Set((assetsDoc.assets || []).map(a => a.id));
const failures = [];

for (const [name, source] of Object.entries(authority.sources)) {
  if (typeof source !== 'string' || source.includes('*')) continue;
  const sourceFile = source.split('#')[0];
  if (!existsSync(join(ROOT, sourceFile))) failures.push(`authority-source ${name} -> ${sourceFile}`);
}

const generationContractPath = authority.sources.generationContract;
if (!generationContractPath) failures.push('generation-contract-source missing');
else if (existsSync(join(ROOT, generationContractPath))) {
  const contract = read(generationContractPath);
  for (const decision of ['productIntent', 'visualThesis', 'typeJobs', 'focalHierarchy', 'rhythmArgument', 'closingSurface']) {
    if (!contract.requiredDecisions?.includes(decision)) failures.push(`generation-decision missing ${decision}`);
  }
  for (const role of ['display', 'body', 'annotation']) {
    if (!contract.typography?.roles?.[role]) failures.push(`generation-type-role missing ${role}`);
  }
  if (contract.typography?.fontDelivery?.verifyComputedFamily !== true) failures.push('generation-font-delivery missing computed-family verification');
  if (contract.closingCta?.reuseEstablishedSignalToken !== true) failures.push('generation-closing-cta missing signal continuity');
  const qualityPath = authority.sources.qualityCriteria;
  if (!qualityPath || !existsSync(join(ROOT, qualityPath))) failures.push('generation-quality-source missing');
  else {
    const ids = new Set((read(qualityPath).criteria || []).map(item => item.id));
    for (const id of (contract.requiredQualityCriteria || [])) if (!ids.has(id)) failures.push(`generation-quality-criterion missing ${id}`);
  }
}

const walk = dir => readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(join(dir,e.name)) : [join(dir,e.name)]);
const motionPresetFiles = walk(join(ROOT,'motion/presets')).filter(f=>f.endsWith('.json'));
const motionIds = new Set();
for (const file of motionPresetFiles) {
  const doc = JSON.parse(readFileSync(file,'utf8'));
  for (const item of (doc.presets || [])) motionIds.add(item.id || item.name);
}

for (const [name, entry] of Object.entries(semantic)) if (!primitive[entry.ref]) failures.push(`semantic-ref ${name} -> ${entry.ref}`);
for (const [name, entry] of Object.entries(componentTokens)) if (!semantic[entry.ref]) failures.push(`component-ref ${name} -> ${entry.ref}`);
for (const c of components) for (const token of (c.tokens || [])) if (!tokenNames.has(token)) failures.push(`component-token ${c.name} -> ${token}`);

const templateFiles = walk(join(ROOT,'prompt-templates')).filter(f=>f.endsWith('.template.json'));
for (const file of templateFiles) {
  const doc = JSON.parse(readFileSync(file,'utf8')); const refs = doc.references || {};
  for (const x of (refs.tokens || [])) if (!tokenNames.has(x)) failures.push(`template-token ${relative(ROOT,file)} -> ${x}`);
  for (const x of (refs.components || [])) if (!componentNames.has(x)) failures.push(`template-component ${relative(ROOT,file)} -> ${x}`);
  for (const x of (refs.motionPresets || [])) if (!motionIds.has(x)) failures.push(`template-motion ${relative(ROOT,file)} -> ${x}`);
  for (const x of (refs.assets || [])) if (!assetIds.has(x)) failures.push(`template-asset ${relative(ROOT,file)} -> ${x}`);
}

const required = authority.componentStates.interactiveRequired;
for (const c of components.filter(c=>c.interactive)) {
  const states = new Set(c.states || []);
  for (const s of required) if (!states.has(s)) failures.push(`component-state ${c.name} missing ${s}`);
  if (c.a11y?.focusVisible !== true) failures.push(`component-a11y ${c.name} missing focusVisible=true`);
}

const layout = read('design-rules/layout.rules.json').layout;
if (layout.breakpoints) failures.push('responsive-owner layout.rules.json duplicates breakpoints');

const policy = authority.manifestPolicy;
const disk = new Set();
for (const file of (policy.includeFiles || [])) disk.add(file);
for (const rootName of policy.includeRoots) {
  const root = join(ROOT,rootName); if (!statSync(root).isDirectory()) continue;
  for (const file of walk(root)) {
    const rel = relative(ROOT,file).replaceAll('\\','/');
    if (policy.excludeBasenames.includes(basename(file))) continue;
    if (policy.excludePrefixes.some(p=>rel.startsWith(p))) continue;
    disk.add(rel);
  }
}
for (const g of policy.generated) disk.add(g);
const manifest = read('manifest.json');
const listed = new Set(manifest.artifacts.filter(a=>a.status==='created').map(a=>a.path.replaceAll('\\','/')));
for (const p of listed) if (!disk.has(p)) failures.push(`manifest-listed-not-policy ${p}`);
for (const p of disk) if (!listed.has(p)) failures.push(`manifest-disk-unlisted ${p}`);

const buckets = {};
for (const f of failures) { const k=f.split(' ')[0]; buckets[k]=(buckets[k]||0)+1; }
if (failures.length) {
  console.error(`[FAIL] canonical authority: ${failures.length} issue(s)`);
  for (const [k,n] of Object.entries(buckets)) console.error(`  ${k}: ${n}`);
  for (const f of failures.slice(0,40)) console.error(`  - ${f}`);
  if (failures.length>40) console.error(`  ... ${failures.length-40} more`);
  process.exit(1);
}
console.log(`[PASS] canonical authority closes ${Object.keys(componentTokens).length} component tokens, ${components.length} components, ${templateFiles.length} templates, and ${disk.size} governed artifacts.`);
