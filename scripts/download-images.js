/**
 * Download all images from Squarespace CDN sitemap and export
 */
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const SITEMAP_URL = 'https://www.smartgreenshipping.com/sitemap.xml';
const CONTENT_FILE = path.join(__dirname, '..', 'data', 'content.json');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    const file = fs.createWriteStream(destPath);
    const request = (currentUrl) => {
      const protocol = currentUrl.startsWith('https') ? https : http;
      protocol.get(currentUrl, { timeout: 30000 }, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          request(response.headers.location);
          return;
        }
        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode} for ${url}`));
          return;
        }
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(destPath); });
      }).on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    };
    request(url);
  });
}

function extractImageUrls(xml) {
  const urls = [];
  const regex = /<image:loc>([^<]+)<\/image:loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(decodeURIComponent(match[1]));
  }
  return [...new Set(urls)];
}

function extractContentImageUrls(content) {
  const urls = [];
  const regex = /src="([^"]*squarespace-cdn\.com[^"]*)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(decodeURIComponent(match[1]));
  }
  return [...new Set(urls)];
}

function getLocalPath(url) {
  try {
    const parsed = new URL(url);
    let pathname = parsed.pathname;
    // Remove format parameters
    pathname = pathname.split('?')[0];
    // Extract meaningful filename
    const parts = pathname.split('/').filter(Boolean);
    // Use last 2-3 parts for meaningful path
    const relevant = parts.slice(-3).join('/');
    return path.join(OUTPUT_DIR, relevant);
  } catch {
    const hash = url.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);
    return path.join(OUTPUT_DIR, `image-${Math.abs(hash)}.jpg`);
  }
}

async function main() {
  console.log('=== SGS Image Downloader ===\n');
  
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  
  // Collect all image URLs
  const allUrls = new Set();
  
  // 1. From sitemap
  console.log('Fetching sitemap...');
  try {
    const sitemapXml = await new Promise((resolve, reject) => {
      https.get(SITEMAP_URL, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }).on('error', reject);
    });
    const sitemapUrls = extractImageUrls(sitemapXml);
    console.log(`Found ${sitemapUrls.length} unique image URLs in sitemap`);
    sitemapUrls.forEach(u => allUrls.add(u));
  } catch (e) {
    console.error('Could not fetch sitemap:', e.message);
    console.log('Continuing with export images only...');
  }
  
  // 2. From content JSON
  if (fs.existsSync(CONTENT_FILE)) {
    console.log('\nScanning content for image URLs...');
    const content = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
    const contentUrls = new Set();
    
    for (const page of content.pages) {
      extractContentImageUrls(page.content).forEach(u => contentUrls.add(u));
    }
    for (const post of content.allPosts) {
      extractContentImageUrls(post.content).forEach(u => contentUrls.add(u));
    }
    
    console.log(`Found ${contentUrls.size} unique image URLs in content`);
    contentUrls.forEach(u => allUrls.add(u));
  }
  
  console.log(`\nTotal unique URLs to download: ${allUrls.size}`);
  
  // Download with rate limiting
  let downloaded = 0, skipped = 0, failed = 0;
  const urls = [...allUrls];
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const localPath = getLocalPath(url);
    
    if (fs.existsSync(localPath)) {
      skipped++;
      continue;
    }
    
    try {
      await downloadFile(url, localPath);
      downloaded++;
      if ((downloaded + failed) % 20 === 0) {
        console.log(`  Progress: ${downloaded + failed + skipped}/${urls.length} (downloaded: ${downloaded}, failed: ${failed}, skipped: ${skipped})`);
      }
      // Rate limit: 100ms between downloads
      await new Promise(r => setTimeout(r, 100));
    } catch (err) {
      failed++;
      if (failed <= 10) console.log(`  Failed: ${url.substring(0, 80)}... - ${err.message}`);
    }
  }
  
  console.log(`\n=== Download Complete ===`);
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Skipped (existing): ${skipped}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total: ${urls.length}`);
}

main().catch(console.error);