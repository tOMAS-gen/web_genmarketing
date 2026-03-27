import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const svgPath = resolve(root, '../logo/logo_g.svg');
const svgBuffer = readFileSync(svgPath);

// Generate transparent PNG at given size
async function toPng(size) {
  return sharp(svgBuffer).resize(size, size).png().toBuffer();
}

// Generate apple-touch-icon (180x180 PNG)
const appleIcon = await toPng(180);
writeFileSync(resolve(root, 'src/app/apple-icon.png'), appleIcon);
console.log('✓ apple-icon.png (180x180)');

// Generate PNG sizes for ICO (16, 32, 48)
const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(sizes.map(size => toPng(size)));

// Build ICO file manually
// ICO format: header (6 bytes) + entries (16 bytes each) + PNG data
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);      // reserved
  header.writeUInt16LE(1, 2);      // type: 1 = ICO
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let dataOffset = 6 + images.length * 16;

  for (let i = 0; i < images.length; i++) {
    const entry = Buffer.alloc(16);
    const size = sizes[i] >= 256 ? 0 : sizes[i];
    entry.writeUInt8(size, 0);       // width
    entry.writeUInt8(size, 1);       // height
    entry.writeUInt8(0, 2);          // color palette
    entry.writeUInt8(0, 3);          // reserved
    entry.writeUInt16LE(1, 4);       // color planes
    entry.writeUInt16LE(32, 6);      // bits per pixel
    entry.writeUInt32LE(images[i].length, 8);  // size of image data
    entry.writeUInt32LE(dataOffset, 12);       // offset of image data
    entries.push(entry);
    dataOffset += images[i].length;
  }

  return Buffer.concat([header, ...entries, ...images]);
}

const ico = buildIco(pngBuffers);
writeFileSync(resolve(root, 'src/app/favicon.ico'), ico);
console.log('✓ favicon.ico (16x16, 32x32, 48x48)');
