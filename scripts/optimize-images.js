#!/usr/bin/env node
/**
 * Optimize images: Convert PNGs to WebP with quality 80.
 * - Resizes images wider than 2000px (for PNGs over 500KB)
 * - Skips if WebP would be larger than the original
 * - Preserves logo.png as PNG
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const MAX_WIDTH = 2000;
const RESIZE_THRESHOLD_BYTES = 500 * 1024; // 500KB
const WEBP_QUALITY = 80;

async function findPngFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findPngFiles(fullPath));
    } else if (entry.name.toLowerCase().endsWith('.png')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function convertPngToWebP(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  const pngSize = fs.statSync(pngPath).size;

  let pipeline = sharp(pngPath);

  // Get metadata for resize decision
  const metadata = await pipeline.metadata();
  let width = metadata.width;
  let needsResize = false;

  if (pngSize > RESIZE_THRESHOLD_BYTES && width > MAX_WIDTH) {
    needsResize = true;
    pipeline = sharp(pngPath).resize({ width: MAX_WIDTH, withoutEnlargment: true });
  } else {
    pipeline = sharp(pngPath);
  }

  await pipeline
    .webp({ quality: WEBP_QUALITY })
    .toFile(webpPath);

  const webpSize = fs.statSync(webpPath).size;

  // If WebP is larger, skip it
  if (webpSize >= pngSize) {
    fs.unlinkSync(webpPath);
    return {
      original: pngPath,
      pngSize,
      webpSize: null,
      skipped: true,
      reason: 'webp_larger',
      resized: needsResize,
    };
  }

  return {
    original: pngPath,
    pngSize,
    webpSize,
    skipped: false,
    savings: pngSize - webpSize,
    savingsPercent: ((1 - webpSize / pngSize) * 100).toFixed(1),
    resized: needsResize,
  };
}

async function main() {
  console.log('Finding PNG files...');
  const pngFiles = await findPngFiles(IMAGES_DIR);
  console.log(`Found ${pngFiles.length} PNG files`);

  // Filter out logo.png
  const toConvert = pngFiles.filter(f => {
    const basename = path.basename(f).toLowerCase();
    return basename !== 'logo.png';
  });

  console.log(`Skipping logo.png (${pngFiles.length - toConvert.length} file(s))`);
  console.log(`Converting ${toConvert.length} PNG files to WebP...\n`);

  let totalPngSize = 0;
  let totalWebpSize = 0;
  let converted = 0;
  let skipped = 0;
  let resized = 0;
  const results = [];

  for (let i = 0; i < toConvert.length; i++) {
    const file = toConvert[i];
    const relPath = path.relative(IMAGES_DIR, file);
    try {
      const result = await convertPngToWebP(file);
      results.push(result);

      if (result.skipped) {
        skipped++;
        console.log(`  [SKIP] ${relPath} (WebP larger than PNG)`);
      } else {
        converted++;
        totalPngSize += result.pngSize;
        totalWebpSize += result.webpSize;
        if (result.resized) resized++;
        console.log(`  [OK]   ${relPath}: ${(result.pngSize / 1024).toFixed(1)}KB → ${(result.webpSize / 1024).toFixed(1)}KB (${result.savingsPercent}% savings)`);
      }
    } catch (err) {
      console.error(`  [ERR]  ${relPath}: ${err.message}`);
    }

    // Progress every 25 files
    if ((i + 1) % 25 === 0) {
      console.log(`  ... processed ${i + 1}/${toConvert.length} files`);
    }
  }

  console.log('\n=== Summary ===');
  console.log(`PNG files found:      ${pngFiles.length}`);
  console.log(`Converted to WebP:   ${converted}`);
  console.log(`Skipped (WebP larger): ${skipped}`);
  console.log(`Resized (>2000px):    ${resized}`);
  console.log(`Total PNG size:       ${(totalPngSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total WebP size:      ${(totalWebpSize / 1024 / 1024).toFixed(2)} MB`);
  if (totalPngSize > 0) {
    console.log(`Total savings:        ${((totalPngSize - totalWebpSize) / 1024 / 1024).toFixed(2)} MB (${((1 - totalWebpSize / totalPngSize) * 100).toFixed(1)}%)`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});