/**
 * Generate 301 redirects from Squarespace URLs to Next.js URLs
 * Run: node scripts/generate-redirects.js
 */
const fs = require('fs');
const path = require('path');

const CONTENT_FILE = path.join(__dirname, '..', 'data', 'content.json');
const NEXT_CONFIG = path.join(__dirname, '..', 'next.config.ts');

function main() {
  console.log('Generating 301 redirects...');
  const content = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
  
  const redirects = [];
  
  // Blog2 -> Blog redirects
  redirects.push({
    source: '/blog2/:path*',
    destination: '/blog/:path*',
    permanent: true,
  });
  
  // Specific page redirects for old/duplicate Squarespace pages
  const pageRedirects = {
    '/press-1': '/press',
    '/press-media': '/press',
    '/contact-us': '/contact',
    '/about-us': '/our-story',
    '/homeaboutus': '/our-story',
    '/people': '/team',
    '/team-1': '/team',
    '/team2': '/team',
    '/team-2': '/team',
    '/fast-technologies': '/fastrig',
    '/products-1': '/fastrig',
    '/ourproducts': '/fastrig',
    '/ourproducts-old': '/fastrig',
    '/fastroute-software': '/fastroute',
    '/casestudy': '/case-studies',
    '/home-1': '/',
    '/home-2': '/',
    '/home-3': '/',
    '/home-3-1': '/',
    '/home-3-1-1': '/',
    '/woc-project-1': '/woc-project',
    '/woc-project-2': '/woc-project',
    '/read-me': '/',
    '/privacy': '/',
    '/careers': '/',
    '/investor-information': '/',
    '/investor-information-old': '/',
    '/investor-info-v0': '/',
    '/july21update': '/',
    '/polar-visualiser': '/',
    '/fastreport-files': '/',
    '/sgs-brochure': '/',
    '/new-page': '/',
    '/new-gallery': '/',
    '/newsletter-subscription': '/news',
    '/shipping-scotlands-expertise-to-the-world': '/',
    '/landing-bedford': '/',
    '/sodermalm-house-hayden': '/',
    '/vision': '/',
    '/resurge': '/',
    '/tradewind': '/',
    '/tradewind-3': '/',
    '/maritimerenewables': '/',
    '/impact': '/',
    '/impact-1': '/',
  };
  
  for (const [source, dest] of Object.entries(pageRedirects)) {
    redirects.push({
      source,
      destination: dest,
      permanent: true,
    });
  }
  
  // News redirect (old URL pattern)
  redirects.push({
    source: '/news-1/:path*',
    destination: '/news/:path*',
    permanent: true,
  });
  
  console.log(`Generated ${redirects.length} redirect rules`);
  
  // Output as JSON for reference
  const redirectJson = path.join(__dirname, '..', 'data', 'redirects.json');
  fs.writeFileSync(redirectJson, JSON.stringify(redirects, null, 2));
  console.log(`Written to ${redirectJson}`);
  
  // Now update next.config.ts
  let configContent = fs.readFileSync(NEXT_CONFIG, 'utf-8');
  
  // Find and replace the redirects section
  const redirectsStart = configContent.indexOf('async redirects()');
  const redirectsEnd = configContent.indexOf('// Additional redirects');
  
  if (redirectsStart > 0) {
    // Replace with full redirect list
    const before = configContent.substring(0, redirectsStart);
    const after = configContent.substring(configContent.indexOf(']', redirectsStart + 100) + 1);
    
    const redirectEntries = redirects.map(r => {
      if (r.source.includes(':path*')) {
        return `      {
        source: "${r.source}",
        destination: "${r.destination}",
        permanent: true,
      },`;
      }
      return `      {
        source: "${r.source}",
        destination: "${r.destination}",
        permanent: true,
      },`;
    }).join('\n');
    
    const newRedirects = `async redirects() {
    return [
${redirectEntries}
    ];
  },`;
    
    configContent = before + newRedirects + after;
    fs.writeFileSync(NEXT_CONFIG, configContent);
    console.log('Updated next.config.ts with redirect rules');
  } else {
    console.log('Could not find redirects section in next.config.ts - manual update needed');
  }
}

main();