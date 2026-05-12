#!/usr/bin/env node
const fs = require('fs');
const data = fs.readFileSync('data/content.json', 'utf8');

// Replace all /images/...png references (including in srcset with width suffixes)
// Pattern: /images/path.png (optionally followed by space and width like "100w")
const updated = data.replace(/(\/images\/[^"'\s,]+)\.png/g, '$1.webp');

const webpRefs = updated.match(/\/images\/[^"'\s,]+\.webp/g);
const pngRefs = updated.match(/\/images\/[^"'\s,]+\.png/g);
console.log('WebP refs after update:', webpRefs ? webpRefs.length : 0);
console.log('Remaining .png image refs:', pngRefs ? pngRefs.length : 0);

fs.writeFileSync('data/content.json', updated, 'utf8');
console.log('Content.json srcset patterns updated');