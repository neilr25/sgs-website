/**
 * Generate all Next.js page files from the parsed content data
 * Run: node scripts/generate-pages.js
 */
const fs = require('fs');
const path = require('path');

const CONTENT_FILE = path.join(__dirname, '..', 'data', 'content.json');
const APP_DIR = path.join(__dirname, '..', 'src', 'app');

function escapeForTemplate(str) {
  return (str || '')
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

function generateContentPage(pageData, routePath) {
  const dir = path.join(APP_DIR, routePath);
  fs.mkdirSync(dir, { recursive: true });
  
  const content = escapeForTemplate(pageData.content || '');
  const title = escapeForTemplate(pageData.title || '');
  
  const component = `import { ContentPage } from "@/components/ContentPage";
import { getPageByType } from "@/lib/content";

export default function Page() {
  const page = getPageByType("${pageData.pageType}");
  return <ContentPage title={\`${title}\`} htmlContent={\`${content}\`} />;
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), component);
}

function generatePostListPage(routePath, title, description, collection) {
  const dir = path.join(APP_DIR, routePath);
  fs.mkdirSync(dir, { recursive: true });
  
  const getterMap = {
    blog: 'getBlogPosts',
    pressandmedia: 'getPressPosts',
    news: 'getNewsPosts',
  };
  
  const getter = getterMap[collection] || 'getBlogPosts';
  
  const component = `import { PostList } from "@/components/PostList";
import { ${getter} } from "@/lib/content";

export default function Page() {
  const posts = ${getter}();
  return <PostList title="${title}" description="${description}" posts={posts} />;
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), component);
}

function main() {
  console.log('Generating page files from content data...');
  const content = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
  
  // Generate named pages
  const pageMap = {
    'our-story': 'our-story',
    'team': 'team',
    'woc-project': 'woc-project',
    'fastrig': 'solution',
    'fastreport': 'solution',
    'fastroute': 'solution',
    'fastreach': 'solution',
    'branding': 'branding',
    'inspiring-creativity': 'inspiring-creativity',
    'case-studies': 'case-studies',
    'contactus': 'contact',
  };
  
  let generated = 0;
  
  // Generate pages for known types
  for (const page of content.pages) {
    if (page.pageType === 'home') continue; // Skip home, already done
    if (page.pageType === 'team-member') continue; // Handle separately
    
    const routePath = page.link.replace(/^\//, '').replace(/\/$/, '');
    if (!routePath) continue;
    
    // Only generate pages for current live pages (not old/draft)
    const livePages = [
      'our-story', 'team', 'woc-project', 'fastrig', 'fastreport', 
      'fastroute', 'fastreach', 'branding', 'inspiring-creativity', 
      'case-studies', 'contactus'
    ];
    
    if (!livePages.includes(routePath)) continue;
    
    const dir = path.join(APP_DIR, routePath);
    fs.mkdirSync(dir, { recursive: true });
    
    // For pages with raw HTML content from the export
    if (page.content && page.content.length > 100) {
      const title = (page.title || '').replace(/'/g, "\\'");
      const content = JSON.stringify(page.content);
      
      const component = `import { ContentPage } from "@/components/ContentPage";

export default function Page() {
  return <ContentPage title={"${title}"} htmlContent={${content}} />;
}
`;
      fs.writeFileSync(path.join(dir, 'page.tsx'), component);
      generated++;
      console.log(`  Generated: /${routePath} (${title})`);
    } else {
      // Create a placeholder page
      const title = (page.title || 'Page').replace(/'/g, "\\'");
      const component = `import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] mb-6">${title}</h1>
      <p className="text-gray-600">Content for this page will be migrated from Squarespace.</p>
      <div className="mt-4">
        <Link href="/" className="text-[var(--sgs-teal)] hover:text-[var(--sgs-green)]">&larr; Back to Home</Link>
      </div>
    </div>
  );
}
`;
      fs.writeFileSync(path.join(dir, 'page.tsx'), component);
      generated++;
      console.log(`  Generated (placeholder): /${routePath} (${title})`);
    }
  }
  
  // Generate press listing page
  generatePostListPage('press', 'Press & Media', 'Latest news coverage about Smart Green Shipping', 'pressandmedia');
  generated++;
  console.log('  Generated: /press (listing)');
  
  // Generate blog listing page
  generatePostListPage('blog', 'Blog', 'Insights and updates from Smart Green Shipping', 'blog');
  generated++;
  console.log('  Generated: /blog (listing)');
  
  // Generate news listing page
  generatePostListPage('news', 'Newsletters', 'Latest newsletters from Smart Green Shipping', 'news');
  generated++;
  console.log('  Generated: /news (listing)');
  
  console.log(`\nTotal pages generated: ${generated}`);
}

main();