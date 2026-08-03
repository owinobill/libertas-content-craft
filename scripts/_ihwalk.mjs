import { chromium } from 'playwright-chromium';
import http from 'http'; import fs from 'fs'; import path from 'path';
const distDir=path.resolve('dist'); const PORT=4204;
const MIME={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon'};
const server=http.createServer((req,res)=>{const u=decodeURIComponent(req.url.split('?')[0]);let f=path.join(distDir,u);
if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){if(!path.extname(u)){f=path.join(distDir,u,'index.html');if(!fs.existsSync(f))f=path.join(distDir,'index.html');}}
fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end('nf');return;}res.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'application/octet-stream'});res.end(d);});});
await new Promise(r=>server.listen(PORT,r));
const walk=`(()=>{const out=[];const rec=(n,p)=>{let i=0;for(const c of n.childNodes){const tag=c.nodeType===3?'#text:'+JSON.stringify(c.nodeValue):c.nodeType===8?'#comment':c.nodeName;out.push(p+'/'+i+' '+tag);if(c.nodeType===1)rec(c,p+'/'+i+':'+c.nodeName);i++;}};rec(document.getElementById('root'),'');return out.join('\\n');})()`;
const b=await chromium.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
// static (no JS)
const c1=await b.newContext({javaScriptEnabled:false});
const p1=await c1.newPage();
await p1.goto(`http://localhost:${PORT}/insights-hub`,{waitUntil:'domcontentloaded'});
fs.writeFileSync('/tmp/static.txt', await p1.evaluate(walk));
// client only (root index.html shell)
const p2=await b.newPage();
await p2.goto(`http://localhost:${PORT}/`,{waitUntil:'load'});
await p2.evaluate(()=>{history.pushState({},'','/insights-hub');});
await p2.goto(`http://localhost:${PORT}/nonexistent-shell-route-xyz`,{waitUntil:'load'});
await b.close(); server.close();
