const c = require('./data/content.json');
const team = c.pages.find(p => p.pageType === 'team');
const imgs = [...team.content.matchAll(/src="([^"]+?)"/gi)].map(m => m[1]).filter(s => !s.startsWith('data:') && s.includes('/images/'));
console.log('All team page images:');
imgs.forEach((img, i) => console.log(i, img));

// Also check for collaborator/partner logos
const logoPatterns = imgs.filter(img => 
  img.toLowerCase().includes('logo') || 
  img.toLowerCase().includes('partner') || 
  img.toLowerCase().includes('collab') ||
  img.toLowerCase().includes('support') ||
  img.toLowerCase().includes('investor') ||
  img.toLowerCase().includes('esa') ||
  img.toLowerCase().includes('innovate') ||
  img.toLowerCase().includes('mol') ||
  img.toLowerCase().includes('drax') ||
  img.toLowerCase().includes('uos') ||
  img.toLowerCase().includes('university')
);
console.log('\nPotential collaborator/supporter logos:');
logoPatterns.forEach((img, i) => console.log(i, img));

// Also check homepage images for hero
const home = c.pages.find(p => p.pageType === 'home');
const homeImgs = [...home.content.matchAll(/src="([^"]+?)"/gi)].map(m => m[1]).filter(s => !s.startsWith('data:') && s.includes('/images/'));
console.log('\nHomepage hero images:');
homeImgs.filter(img => img.toLowerCase().includes('ship') || img.toLowerCase().includes('fastrig') || img.toLowerCase().includes('torquay') || img.toLowerCase().includes('banner') || img.toLowerCase().includes('hero')).forEach((img, i) => console.log(i, img));