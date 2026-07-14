import {readFileSync,writeFileSync,readdirSync,statSync} from 'node:fs';
import {resolve,join,relative,basename,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
const ROOT=resolve(fileURLToPath(new URL('../prodigeui/',import.meta.url)));
const authority=JSON.parse(readFileSync(join(ROOT,'canonical/system.authority.json'),'utf8'));
const policy=authority.manifestPolicy;
const current=JSON.parse(readFileSync(join(ROOT,'manifest.json'),'utf8'));
const old=new Map(current.artifacts.map(a=>[a.path,a]));
const walk=d=>readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(d,e.name)):[join(d,e.name)]);
const paths=new Set(policy.includeFiles||[]);
for(const rootName of policy.includeRoots){for(const file of walk(join(ROOT,rootName))){const p=relative(ROOT,file).replaceAll('\\','/');if(policy.excludeBasenames.includes(basename(file)))continue;if(policy.excludePrefixes.some(x=>p.startsWith(x)))continue;paths.add(p)}}
for(const p of policy.generated)paths.add(p);
const typeFor=p=>p.endsWith('.schema.json')?'schema':p.includes('tokens')&&p.endsWith('.json')?'tokens':p.includes('theme')&&p.endsWith('.json')?'theme':p.includes('template')&&p.endsWith('.json')?'prompt-template':p.includes('/icons/')?'asset-icon':p.includes('/illustrations/')?'asset-illustration':p.endsWith('.json')?'configuration':p.endsWith('.css')?'generated':p.endsWith('.svg')?'asset':p.endsWith('.md')?'documentation':'artifact';
current.artifacts=[...paths].sort().map(path=>({...old.get(path),path,type:old.get(path)?.type||typeFor(path),status:'created'}));
current.manifestPolicy={authority:'canonical/system.authority.json#/manifestPolicy',generated:true};
writeFileSync(join(ROOT,'manifest.json'),JSON.stringify(current,null,2)+'\n');
console.log(`Generated manifest.json with ${current.artifacts.length} governed artifacts.`);
