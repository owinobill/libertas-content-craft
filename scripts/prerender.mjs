import { chromium } from 'playwright-chromium';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const PORT = 4173;

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json', '.xml': 'application/xml',
  '.txt': 'text/plain', '.woff': 'font/woff', '.woff2': 'font/woff2',
};

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(distDir, urlPath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    if (!path.extname(urlPath)) {
      filePath = path.join(distDir, 'index.html');
    }
  }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

const routes = [
  '/', '/solutions', '/solutions/detailed', '/insights-hub',
  '/insights-hub/debt-sales-assignments', '/insights-hub/debt-sales-dynamics',
  '/insights-hub/npl-ecosystem-part-1', '/insights-hub/npl-ecosystem-part-2',
  '/insights-hub/debt-collection-regulation', '/privacy-policy', '/terms-of-use',
];

async function main() {
  const server = http.createServer(serveStatic);
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Static server running at http://localhost:${PORT}`);

  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const results = [];
  let failures = 0;

  for (const route of routes) {
    const page = await browser.newPage();
    try {
      // Marks this as the prerender crawl so main.tsx can skip web-vitals reporting
      await page.addInitScript(() => { window.__PRERENDERING__ = true; });
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(1500);
      const html = await page.content();
      results.push({ route, html });
      console.log(`✓ Prerendered ${route}`);
    } catch (err) {
      console.error(`✗ Failed to prerender ${route}:`, err.message);
      failures++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  // Write all files only after the full crawl completes, so no route's
  // static server response is accidentally served the wrong prior page's HTML.
  for (const { route, html } of results) {
    const outPath = route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
  }

  if (failures > 0) {
    console.error(`${failures} route(s) failed to prerender.`);
    process.exit(1);
  }
  console.log(`Prerendered ${results.length}/${routes.length} routes successfully.`);
}

main().catch((err) => {
  console.error('Prerender script failed:', err);
  process.exit(1);
});
