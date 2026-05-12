/**
 * Parse Squarespace WordPress XML export and produce structured JSON
 * for migration to Next.js
 */
const fs = require('fs');
const path = require('path');

const XML_FILE = path.join(__dirname, '..', 'Squarespace-Wordpress-Export-05-12-2026.xml');
const OUTPUT_FILE = path.join(__dirname, '..', 'data', 'content.json');

// Simple XML parser for Squarespace WordPress export format
function parseXML(xmlContent) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xmlContent)) !== null) {
    const itemXml = match[1];

    const title = extractText(itemXml, 'title');
    const link = extractText(itemXml, 'link');
    const pubDate = extractText(itemXml, 'pubDate');
    const contentEncoded = extractCDATA(itemXml, 'content:encoded');
    const postType = extractText(itemXml, 'wp:post_type');
    const status = extractText(itemXml, 'wp:status');
    const postName = extractText(itemXml, 'wp:post_name');
    const postId = extractText(itemXml, 'wp:post_id');
    const postParent = extractText(itemXml, 'wp:post_parent');
    const menuOrder = extractText(itemXml, 'wp:menu_order');

    // Extract categories
    const categories = [];
    const catRegex = /<category domain="([^"]*)" nicename="([^"]*)"><!\[CDATA\[([^\]]*)\]\]><\/category>/g;
    let catMatch;
    while ((catMatch = catRegex.exec(itemXml)) !== null) {
      categories.push({
        domain: catMatch[1],
        nicename: catMatch[2],
        name: catMatch[3]
      });
    }

    // Also try alternate category format
    const catRegex2 = /<wp:category_nicename>([^<]*)<\/wp:category_nicename>/g;

    // Extract attachment URL
    const attachmentUrl = extractText(itemXml, 'wp:attachment_url');

    // Extract featured image from content
    const featuredImage = extractFeaturedImage(contentEncoded);

    items.push({
      title: title || '',
      link: link || '',
      pubDate: pubDate || '',
      content: contentEncoded || '',
      postType: postType || '',
      status: status || '',
      postName: postName || '',
      postId: postId || '',
      postParent: postParent || '',
      menuOrder: menuOrder || '0',
      categories,
      attachmentUrl: attachmentUrl || '',
      featuredImage: featuredImage || ''
    });
  }

  return items;
}

function extractText(xml, tagName) {
  // Handle self-closing tags
  const selfClosingRegex = new RegExp(`<${tagName}\\s*/>`);
  if (selfClosingRegex.test(xml)) return '';

  const regex = new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`);
  const match = xml.match(regex);
  if (!match) return '';
  let text = match[1];
  // Remove CDATA wrapper if present
  text = text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  return text.trim();
}

function extractCDATA(xml, tagName) {
  const regex = new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`);
  const match = xml.match(regex);
  if (!match) return '';
  let text = match[1];
  // Handle CDATA
  text = text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  return text.trim();
}

function extractFeaturedImage(html) {
  if (!html) return '';
  const imgRegex = /<img[^>]+src="([^"]+)"/;
  const match = html.match(imgRegex);
  return match ? match[1] : '';
}

function categorizeByLink(link) {
  if (!link) return 'uncategorized';
  if (link.startsWith('/blog')) return 'blog';
  if (link.startsWith('/pressandmedia') || link.startsWith('/press-media')) return 'pressandmedia';
  if (link.startsWith('/news')) return 'news';
  return 'uncategorized';
}

function determinePageType(link, title) {
  if (!link || link === '/home' || link === '/') return 'home';
  if (link === '/our-story') return 'our-story';
  if (link === '/team') return 'team';
  if (link.startsWith('/moreabout')) return 'team-member';
  if (link === '/woc-project') return 'woc-project';
  if (link === '/fastrig' || link === '/fastreport' || link === '/fastroute' || link === '/fastreach') return 'solution';
  if (link === '/branding') return 'branding';
  if (link === '/inspiring-creativity' || link === '/inspiring-creativity') return 'inspiring-creativity';
  if (link === '/case-studies') return 'case-studies';
  if (link === '/contactus' || link === '/contact') return 'contact';
  if (link === '/solutions') return 'solutions';
  return 'other';
}

function main() {
  console.log('Reading XML export...');
  const xmlContent = fs.readFileSync(XML_FILE, 'utf-8');
  console.log(`File size: ${(xmlContent.length / 1024 / 1024).toFixed(2)} MB`);

  console.log('Parsing items...');
  const allItems = parseXML(xmlContent);
  console.log(`Total items found: ${allItems.length}`);

  // Filter to published only
  const published = allItems.filter(i => i.status === 'publish');
  console.log(`Published items: ${published.length}`);

  // Separate by type
  const pages = published
    .filter(i => i.postType === 'page')
    .map(p => ({
      ...p,
      pageType: determinePageType(p.link, p.title)
    }));

  const posts = published.filter(i => i.postType === 'post');
  const attachments = published.filter(i => i.postType === 'attachment');

  // Categorize posts
  const postsByCollection = {
    blog: posts.filter(p => categorizeByLink(p.link) === 'blog'),
    pressandmedia: posts.filter(p => categorizeByLink(p.link) === 'pressandmedia'),
    news: posts.filter(p => categorizeByLink(p.link) === 'news'),
    uncategorized: posts.filter(p => categorizeByLink(p.link) === 'uncategorized')
  };

  // Build output
  const output = {
    pages,
    postsByCollection,
    attachments,
    allPosts: posts,
    stats: {
      total_pages: pages.length,
      total_posts: posts.length,
      total_attachments: attachments.length,
      blog_posts: postsByCollection.blog.length,
      press_posts: postsByCollection.pressandmedia.length,
      news_posts: postsByCollection.news.length,
      uncategorized_posts: postsByCollection.uncategorized.length,
      pageTypes: pages.reduce((acc, p) => {
        acc[p.pageType] = (acc[p.pageType] || 0) + 1;
        return acc;
      }, {})
    }
  };

  // Write output
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
  console.log(`Output written to ${OUTPUT_FILE}`);

  // Print summary
  console.log('\n=== CONTENT INVENTORY ===');
  console.log(`Pages: ${output.stats.total_pages}`);
  console.log(`Posts: ${output.stats.total_posts}`);
  console.log(`  Blog: ${output.stats.blog_posts}`);
  console.log(`  Press & Media: ${output.stats.press_posts}`);
  console.log(`  News: ${output.stats.news_posts}`);
  console.log(`  Uncategorized: ${output.stats.uncategorized_posts}`);
  console.log(`Attachments: ${output.stats.total_attachments}`);
  console.log('\nPage types:', JSON.stringify(output.stats.pageTypes, null, 2));

  console.log('\n=== PAGES ===');
  pages.forEach(p => {
    console.log(`  [${p.pageType}] ${p.link} - ${p.title}`);
  });

  console.log('\n=== BLOG POSTS ===');
  postsByCollection.blog.forEach(p => {
    console.log(`  ${p.link} - ${p.title}`);
  });

  console.log('\n=== PRESS POSTS (first 15) ===');
  postsByCollection.pressandmedia.slice(0, 15).forEach(p => {
    console.log(`  ${p.link} - ${p.title}`);
  });
  if (postsByCollection.pressandmedia.length > 15) {
    console.log(`  ... and ${postsByCollection.pressandmedia.length - 15} more`);
  }
}

main();