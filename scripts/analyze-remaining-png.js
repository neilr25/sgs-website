#!/usr/bin/env node
const fs = require('fs');
const data = fs.readFileSync('data/content.json', 'utf8');
// Find remaining .png references that aren't image paths with /images/ prefix
const lines = data.split('\n');
let remaining = [];
for (let i = 0; i < lines.length; i++) {
  const matches = lines[i].match(/[^"\\]+\.png/g);
  if (matches) {
    for (const m of matches) {
      if (!m.startsWith('/images/')) {
        remaining.push({ line: i + 1, match: m, context: lines[i].substring(0, 200) });
      }
    }
  }
}
// Also check for .png in srcset-like patterns (with width suffixes)
const srcsetMatches = data.match(/\/images\/[^"'\s,]+\.png\s+\d+w/g);
console.log('Remaining .png refs (not /images/ paths):', remaining.length);
remaining.slice(0, 20).forEach(r => {
  console.log(`  Line ${r.line}: ${r.match}`);
});
if (srcsetMatches) {
  console.log('\nSrcset .png matches:', srcsetMatches.length);
  srcsetMatches.slice(0, 5).forEach(m => console.log('  ', m));
}