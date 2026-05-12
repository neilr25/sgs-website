#!/usr/bin/env node
const fs = require('fs');
const content = fs.readFileSync('src/app/fastrig/page.tsx', 'utf8');
// The .png refs are likely HTML-encoded in the JSX string
// Check for different patterns
const patterns = [
  { name: '/images/ raw', regex: /\/images\/[^\s"\\]+\.png/g },
  { name: '&quot;/images/', regex: /&quot;\/images\/[^&]+\.png/g },
  { name: 'src="/images/', regex: /src=&quot;\/images\/[^&]+\.png/g },
  { name: 'any .png in images path', regex: /images\/[^"'\s,)]+\.png/g },
  { name: 'cdn .png', regex: /squarespace-cdn[^"'\s]+\.png/g },
];
for (const p of patterns) {
  const m = content.match(p.regex);
  console.log(`${p.name}: ${m ? m.length : 0} matches`);
  if (m && m.length > 0) {
    m.slice(0, 2).forEach(x => console.log('  ', x.substring(0, 150)));
  }
}
// Also just search for .png near "images"
let idx = content.indexOf('.png');
let count = 0;
while (idx !== -1 && count < 10) {
  const start = Math.max(0, idx - 60);
  const end = Math.min(content.length, idx + 20);
  console.log(`Context near .png #${count + 1}: ...${content.substring(start, end)}...`);
  idx = content.indexOf('.png', idx + 1);
  count++;
}