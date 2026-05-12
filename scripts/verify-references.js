#!/usr/bin/env node
const fs = require('fs');
const data = fs.readFileSync('data/content.json', 'utf8');
// Check for remaining .png image path references
const imagePathPattern = /\/images\/[^"'\s,)]+\.png/g;
const matches = data.match(imagePathPattern);
console.log('Remaining /images/ .png path refs:', matches ? matches.length : 0);
if (matches && matches.length > 0) {
  matches.forEach(m => console.log('  ', m.substring(0, 120)));
}
// Check .webp refs
const webpPattern = /\/images\/[^"'\s,)]+\.webp/g;
const webpMatches = data.match(webpPattern);
console.log('\nTotal /images/ .webp path refs:', webpMatches ? webpMatches.length : 0);