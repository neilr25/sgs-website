const c = require('./data/content.json');
const team = c.pages.find(p => p.pageType === 'team');

// Extract text content surrounding the logo sections
let text = team.content
  .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

// Find collaborator-related sections
const collabIdx = text.toLowerCase().indexOf('collaborat');
if (collabIdx > -1) {
  console.log('=== Collaborator section context ===');
  console.log(text.substring(collabIdx, collabIdx + 5000));
}

// Find technical/commercial/strategic sections
const techIdx = text.toLowerCase().indexOf('technical');
if (techIdx > -1) {
  console.log('\n=== Technical section context ===');
  console.log(text.substring(techIdx, techIdx + 2000));
}