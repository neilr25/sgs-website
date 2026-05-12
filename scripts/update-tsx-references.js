#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
let totalUpdated = 0;

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Count PNG refs before
      const localMatches = (content.match(/\/images\/[^"'\s,)]+\.png/g) || []).filter(m => !m.includes('logo.png'));
      const cdnMatches = (content.match(/squarespace-cdn\.com\/content\/v1\/[^"'\s)]+\.png/g) || []).filter(m => !m.includes('logo.png'));
      
      if (localMatches.length === 0 && cdnMatches.length === 0) continue;
      
      // Replace /images/ local paths (handles escaped quotes like &quot; and \")
      let updated = content.replace(/(\/images\/[^"'\s,)]+)\.png/g, (match, p1) => {
        if (match.includes('logo.png')) return match;
        return p1 + '.webp';
      });
      
      // Also replace Squarespace CDN URLs that reference local files
      updated = updated.replace(/(squarespace-cdn\.com\/content\/v1\/[^"'\s)]+)\.png/g, '$1.webp');
      
      if (updated !== content) {
        fs.writeFileSync(fullPath, updated, 'utf8');
        console.log(`Updated ${path.relative(srcDir, fullPath)}: ${localMatches.length} local + ${cdnMatches.length} CDN`);
        totalUpdated += localMatches.length + cdnMatches.length;
      }
    }
  }
}

processDir(srcDir);
console.log(`\nTotal .png image refs updated in src/: ${totalUpdated}`);