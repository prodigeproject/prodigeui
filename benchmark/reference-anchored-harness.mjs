import { chromium } from 'playwright';
import { existsSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = dirname(fileURLToPath(import.meta.url));
const targets = [
  { key:'flowai-approved', file:'flowai-post-canonical-repair.html', family:'flowai', display:/Recursive Local/i, close:'.final', token:'--orange', disclosure:true, engine:false },
  { key:'flowai-anchored', file:'flowai-v2-reference-anchored-regeneration.html', family:'flowai', display:/Recursive Local/i, close:'.closing', token:'--coral', disclosure:true, engine:false },
  { key:'nova-approved', file:'nova-post-canonical-repair.html', family:'nova', display:/Arial Black|Impact/i, close:'.contact', token:'--cream', disclosure:false, engine:true },
  { key:'nova-anchored', file:'nova-v2-reference-anchored-regeneration.html', family:'nova', display:/Arial Black|Impact/i, close:'.contact', token:'--cream', disclosure:false, engine:true },
];
const viewports = [{ name:'desktop', width:1440, height:900 },{ name:'mobile', width:390, height:844 }];
const missing = targets.filter(target=>!existsSync(resolve(directory,target.file)));
if(missing.length){console.error(`[FAIL] Missing output: ${missing.map(target=>target.file).join(', ')}`);process.exit(1)}

const browser = await chromium.launch();
const rows = [];
let failed = false;

for(const target of targets){
  for(const viewport of viewports){
    const page = await browser.newPage({viewport:{width:viewport.width,height:viewport.height},reducedMotion:'reduce'});
    const errors=[];
    const external=[];
    page.on('console',message=>{if(message.type()==='error')errors.push(`console:${message.text()}`)});
    page.on('pageerror',error=>errors.push(`page:${error.message}`));
    page.on('request',request=>{if(/^https?:/i.test(request.url()))external.push(request.url())});
    await page.goto(`file:///${resolve(directory,target.file).replaceAll('\\','/')}`,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(350);

    let disclosureKeyboard='n/a';
    if(target.disclosure){
      const summary=page.locator('summary').first();
      await summary.focus();
      await page.keyboard.press('Enter');
      disclosureKeyboard=await summary.evaluate(element=>element.parentElement?.hasAttribute('open')===true);
      await page.keyboard.press('Enter');
    }
    await page.evaluate(()=>{if(document.activeElement instanceof HTMLElement)document.activeElement.blur();window.scrollTo(0,0)});
    await page.keyboard.press('Tab');
    const keyboardFocus=await page.evaluate(()=>{const element=document.activeElement;if(!element||element===document.body)return false;const rect=element.getBoundingClientRect();return rect.width>0&&rect.height>0});
    await page.evaluate(()=>{if(document.activeElement instanceof HTMLElement)document.activeElement.blur();window.scrollTo(0,0)});

    const probe=await page.evaluate(({close,token,engine})=>{
      const all=[...document.querySelectorAll('*')];
      const interactive=[...document.querySelectorAll('a,button,input,select,textarea,summary,[tabindex]:not([tabindex="-1"])')];
      const visible=element=>{const style=getComputedStyle(element),rect=element.getBoundingClientRect();return style.display!=='none'&&style.visibility!=='hidden'&&Number(style.opacity)>.05&&rect.width>0&&rect.height>0};
      const parse=value=>value.match(/[\d.]+/g)?.map(Number)||null;
      const background=element=>{for(let current=element;current;current=current.parentElement){const value=parse(getComputedStyle(current).backgroundColor);if(value&&(value.length<4||value[3]>.05))return value}return[255,255,255,1]};
      const luminance=color=>{const values=color.slice(0,3).map(value=>{value/=255;return value<=.03928?value/12.92:((value+.055)/1.055)**2.4});return .2126*values[0]+.7152*values[1]+.0722*values[2]};
      const ratio=(a,b)=>{const first=luminance(a),second=luminance(b);return(Math.max(first,second)+.05)/(Math.min(first,second)+.05)};
      const contrastFailures=interactive.filter(visible).map(element=>{const foreground=parse(getComputedStyle(element).color);const result=foreground?ratio(foreground,background(element)):0;return{text:(element.textContent||element.tagName).trim().slice(0,40),ratio:Number(result.toFixed(2))}}).filter(result=>result.ratio<4.5);
      const normalizer=document.createElement('i');normalizer.style.display='none';document.body.append(normalizer);normalizer.style.color=getComputedStyle(document.documentElement).getPropertyValue(token).trim();const tokenColor=getComputedStyle(normalizer).color;normalizer.remove();
      const closing=document.querySelector(close);
      const h1=document.querySelector('h1');
      const h1Style=h1?getComputedStyle(h1):null;
      const h1Rect=h1?.getBoundingClientRect();
      const clips=h1Style&&[h1Style.overflow,h1Style.overflowX,h1Style.overflowY].some(value=>value==='hidden'||value==='clip');
      return{
        pageHeight:document.documentElement.scrollHeight,
        overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),
        hiddenMeaningful:all.filter(element=>/^(H[1-6]|P|ARTICLE|SECTION)$/.test(element.tagName)&&!visible(element)&&element.textContent.trim().length>20).length,
        brokenMedia:[...document.images].filter(image=>!image.complete||!image.naturalWidth).length,
        smallTargets:interactive.filter(visible).filter(element=>{const rect=element.getBoundingClientRect();return rect.width<44||rect.height<44}).length,
        contrastFailures,
        h1:{text:h1?.textContent.trim(),font:h1Style?.fontFamily,size:h1Style?.fontSize,lineHeight:h1Style?.lineHeight,box:h1Rect?[h1Rect.x,h1Rect.y,h1Rect.width,h1Rect.height].map(value=>Number(value.toFixed(1))):null,clipped:!!(clips&&(h1.scrollWidth>h1.clientWidth+1||h1.scrollHeight>h1.clientHeight+2))},
        bodyBackground:getComputedStyle(document.body).backgroundColor,
        heroBackground:getComputedStyle(document.querySelector('.hero')).backgroundColor,
        sectionCount:document.querySelectorAll('main section').length,
        fontFaces:[...document.fonts].map(font=>`${font.family}:${font.status}`),
        closingContinuity:!!closing&&getComputedStyle(closing).backgroundColor===tokenColor,
        engineReady:engine?document.documentElement.dataset.engineReady||'missing':'n/a',
      };
    },target);
    const intendedDisplay=target.display.test(probe.h1.font||'');
    const row={target:target.key,family:target.family,viewport:viewport.name,...probe,intendedDisplay,disclosureKeyboard,keyboardFocus,external,errors};
    rows.push(row);
    await page.screenshot({path:resolve(directory,`shot-${target.key}-${viewport.name}-hero.png`),fullPage:false});
    await page.screenshot({path:resolve(directory,`shot-${target.key}-${viewport.name}-full.png`),fullPage:true});
    if(probe.overflow||probe.hiddenMeaningful||probe.brokenMedia||probe.smallTargets||probe.contrastFailures.length||probe.h1.clipped||!probe.closingContinuity||!intendedDisplay||!keyboardFocus||external.length||errors.length||(target.disclosure&&disclosureKeyboard!==true)||(target.engine&&probe.engineReady!=='true'))failed=true;
    await page.close();
  }
}

await browser.close();
const comparisons={};
for(const family of ['flowai','nova']){
  comparisons[family]={};
  for(const viewport of ['desktop','mobile']){
    const approved=rows.find(row=>row.target===`${family}-approved`&&row.viewport===viewport);
    const anchored=rows.find(row=>row.target===`${family}-anchored`&&row.viewport===viewport);
    comparisons[family][viewport]={
      heightRatio:Number((anchored.pageHeight/approved.pageHeight).toFixed(3)),
      sameDisplayFamily:approved.h1.font===anchored.h1.font,
      sameBodyBackground:approved.bodyBackground===anchored.bodyBackground,
      sameHeroBackground:approved.heroBackground===anchored.heroBackground,
      sectionDelta:anchored.sectionCount-approved.sectionCount,
    };
  }
}
writeFileSync(resolve(directory,'reference-anchored-evidence.json'),JSON.stringify({generatedAt:new Date().toISOString(),rows,comparisons},null,2));
for(const row of rows)console.log(`${row.target}/${row.viewport}: h=${row.pageHeight} overflow=${row.overflow} hidden=${row.hiddenMeaningful} targets<44=${row.smallTargets} contrast=${row.contrastFailures.length} clip=${row.h1.clipped} display=${row.intendedDisplay} close=${row.closingContinuity} errors=${row.errors.length} external=${row.external.length} engine=${row.engineReady}`);
console.log(JSON.stringify(comparisons,null,2));
if(failed){console.error('[FAIL] reference-anchored runtime gate');process.exit(1)}
console.log('[PASS] reference-anchored runtime gate');
