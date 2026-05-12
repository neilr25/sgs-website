#!/usr/bin/env node
const fs = require('fs');
const d = JSON.parse(fs.readFileSync('data/content.json', 'utf8'));
const str = JSON.stringify(d);
const rgx = /\/images[^"]+\.png/g;
const m = str.match(rgx);
console.log('Total .png image path refs:', m ? m.length : 0);
if (m) {
  const u = new Set(m);
  console.log('Unique paths:', u.size);
  const arr = Array.from(u).slice(0, 10);
  arr.forEach(x => console.log('  ', x));
}