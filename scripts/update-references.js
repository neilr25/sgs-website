#!/usr/bin/env node
const fs = require('fs');
const data = fs.readFileSync('data/content.json', 'utf8');
// Replace image path references .png -> .webp
// Pattern: /images/...png in src attributes and other path references
const updated = data.replace(/(\/images\/[^"']+)\.png/g, '$1.webp');
const webpRefs = updated.match(/\/images\/[^"']+\.webp/g);
const pngRefs = updated.match(/\/images\/[^"']+\.png/g);
console.log('WebP refs after update:', webpRefs ? webpRefs.length : 0);
console.log('Remaining .png image refs:', pngRefs ? pngRefs.length : 0);
fs.writeFileSync('data/content.json', updated, 'utf8');
console.log('Content.json updated successfully');