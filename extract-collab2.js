const c = require('./data/content.json');
const team = c.pages.find(p => p.pageType === 'team');

// Find sections that contain the logo images
const logoIds = [
  '62275b86', '759a775b', '2b56c7ca', 'fe757faa', 'f13fa258',
  '8daaf7dd', '0595272f', '6c7eeb88', '2f20b871', '6cebe318',
  '9887ac7b', 'e3c09fcf', 'af107200', '55394217', '24e9fca3',
  '7635cd70', 'b64e9c90', 'd8c9e25a', '66469af0', 'ee81e600',
  '01b4385e', '9c6906c2', '3a702408', 'd8a65550'
];

// Search for text near each logo to understand grouping
for (const id of logoIDs.slice(0, 5)) {
  const idx = team.content.indexOf(id);
  if (idx > -1) {
    // Get surrounding text
    const start = Math.max(0, idx - 500);
    const end = Math.min(team.content.length, idx + 500);
    const context = team.content.substring(start, end).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`\n=== Context for ${id} ===`);
    console.log(context.substring(0, 300));
  }
}

// Look for Technical, Commercial, Strategic headings
const headings = ['Technical', 'Commercial', 'Strategic'];
for (const h of headings) {
  const idx = team.content.indexOf(h);
  if (idx > -1) {
    const start = Math.max(0, idx - 200);
    const end = Math.min(team.content.length, idx + 800);
    const context = team.content.substring(start, end).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`\n=== ${h} section ===`);
    console.log(context.substring(0, 500));
  }
}