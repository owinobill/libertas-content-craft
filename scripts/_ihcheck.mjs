import { chromium } from 'playwright-chromium';
import http from 'http'; import fs from 'fs'; import path from 'path';
const distDir=path.resolve('dist'); const PORT=4201;
const MIME={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon','.webmanifest':'application/manifest+json','.xml':'application/xml','.txt':'text/plain'};
const server=http.createServer((req,res)=>{const u=decodeURIComponent(req.url.split('?')[0]);let f=path.join(distDir,u);
if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){if(!path.extname(u))f=path.join(distDir,u,'index.html');if(!fs.existsSync(f))f=path.join(distDir,'index.html');}
fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end('nf');return;}res.writeHead(200,{'Content-Type':MIME[path.extname(f)]||'application/octet-stream'});res.end(d);});});
await new Promise(r=>server.listen(PORT,r));
const b=await chromium.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
for(const route of ['/','/solutions','/insights-hub','/insights-hub/debt-sales-assignments']){
  const p=await b.newPage();
  const errs=[];
  p.on('console',m=>{if(m.type()==='error')errs.push(m.text().slice(0,500));});
  p.on('pageerror',e=>errs.push('pageerror: '+e.message.slice(0,500)));
  await p.goto(`http://localhost:${PORT}${route}`,{waitUntil:'load'});
  await p.waitForTimeout(3000);
  console.log(route, errs.length?('ERRORS:\n'+errs.join('\n')):'clean');
  await p.close();
}
await b.close(); server.close();
