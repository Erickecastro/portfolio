import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import {chromium} from 'playwright';
const outputDirectory = path.resolve(process.env.PORTFOLIO_PERFORMANCE_OUTPUT || fileURLToPath(new URL('./reports/', import.meta.url)));
fs.mkdirSync(outputDirectory, {recursive:true});
const baseUrl = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:8788/';
const phase = process.env.PORTFOLIO_MEASURE_PHASE || 'current';
if (!/^[a-z0-9-]+$/i.test(phase)) throw new Error('Invalid measurement phase');
const chrome=await chromeLauncher.launch({chromePath:chromium.executablePath(),chromeFlags:['--headless','--no-sandbox','--disable-dev-shm-usage']});
try {
 for(const mode of ['mobile','desktop']){
  const options={port:chrome.port,output:'json',onlyCategories:['performance','accessibility','best-practices','seo'],logLevel:'error'};
  if(mode==='desktop'){options.formFactor='desktop';options.screenEmulation={mobile:false,width:1350,height:940,deviceScaleFactor:1,disabled:false};options.throttling={rttMs:40,throughputKbps:10240,cpuSlowdownMultiplier:1,requestLatencyMs:0,downloadThroughputKbps:0,uploadThroughputKbps:0};}
  const result=await lighthouse(baseUrl,options);
  fs.writeFileSync(path.join(outputDirectory, `lighthouse-${phase}-${mode}.json`),JSON.stringify(result.lhr,null,2));
  console.log(JSON.stringify({phase:phase,mode,scores:Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,v.score*100])),metrics:Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift','total-byte-weight'].map(k=>[k,result.lhr.audits[k].displayValue])),warnings:result.lhr.runWarnings}));
 }
} finally {await chrome.kill()}
