import { chromium } from 'playwright-chromium';
import http from 'http'; import fs from 'fs'; import path from 'path';
const distDir=path.resolve('dist-debug'); const PORT=4202;
const MIME={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon'};
const server=http.createServer((req,res)=>{const u=decodeURIComponent(req.url.split('?')[0]);let f=path.join(distDir,u);
if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){if(!path.extname(u))f=path.join(distDir,'index.html');}
fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end('nf');return;}res.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'application/octet-stream'});res.end(d);});});
await new Promise(r=>server.listen(PORT,r));
const b=await chromium.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
const p=await b.newPage();
await p.goto(`http://localhost:${PORT}/insights-hub`,{waitUntil:'load'});
await p.waitForTimeout(2500);
fs.writeFileSync('/tmp/client.html', await p.evaluate(()=>document.getElementById('root').innerHTML));
await b.close(); server.close();
const pre=fs.readFileSync(path.join(distDir,'insights-hub','index.html'),'utf8');
const m=pre.match(/<div id="root">([\s\S]*)<\/div><script/);
fs.writeFileSync('/tmp/pre.html', m?m[1]:'NOMATCH');
