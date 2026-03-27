import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';

mkdirSync('./public/images/portfolio', { recursive: true });

const sites = [
  { url: 'http://cuyosmart.com.ar', file: 'cuyosmart' },
  { url: 'http://polymemaislaciones.com.ar', file: 'poly-mem' },
  { url: 'https://alh.com.ar', file: 'alh' },
];

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

for (const site of sites) {
  console.log(`Capturando ${site.url}...`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({
    path: `./public/images/portfolio/${site.file}.jpg`,
    type: 'jpeg',
    quality: 85,
    clip: { x: 0, y: 0, width: 1280, height: 800 },
  });
  console.log(`  ✓ guardado: public/images/portfolio/${site.file}.jpg`);
  await page.close();
}

await browser.close();
console.log('Listo.');
