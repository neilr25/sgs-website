#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

function findPngFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPngFiles(fullPath));
    } else if (entry.name.toLowerCase().endsWith('.png')) {
      results.push(fullPath);
    }
  }
  return results;
}

const pngFiles = findPngFiles(IMAGES_DIR);
let deleted = 0;
let skipped = 0;
let noWebp = 0;

for (const pngPath of pngFiles) {
  const basename = path.basename(pngPath).toLowerCase();
  
  // Skip logo.png
  if (basename === 'logo.png') {
    skipped++;
    continue;
  }
  
  const webpPath = pngPath.replace(/\.png$/i, '.webp');
  
  // Only delete if WebP equivalent exists
  if (fs.existsSync(webpPath)) {
    const pngSize = fs.statSync(pngPath).size;
    fs.unlinkSync(pngPath);
    deleted++;
  } else {
    noWebp++;
    console.log(`No WebP for: ${path.relative(IMAGES_DIR, pngPath)}`);
  }
}

console.log(`\nDeleted: ${deleted}`);
console.log(`Skipped (logo.png): ${skipped}`);
console.log(`No WebP equivalent: ${noWebp}`);