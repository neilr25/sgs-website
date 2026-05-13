const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, 'data', 'content.json');
const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));

function fixCaptions(html) {
  return html.replace(/\[caption[^\]]*\](.*?)\[\/caption\]/gs, (match, inner) => {
    const imgMatch = inner.match(/<img[^>]+>/);
    if (imgMatch) {
      const img = imgMatch[0];
      const caption = inner.replace(img, '').trim();
      return `
<figure class="my-10 text-center">
  <div class="sqs-block-image mb-3">
    ${img}
  </div>
  <figcaption class="text-[13px] text-gray-500 italic max-w-2xl mx-auto px-4">
    ${caption}
  </figcaption>
</figure>
      `.trim();
    }
    return inner;
  });
}

let count = 0;
// Scan all collections for posts with [caption]
const collections = ['blog', 'pressandmedia', 'news', 'uncategorized'];
collections.forEach(col => {
  content.postsByCollection[col].forEach(post => {
    if (post.content.includes('[caption')) {
      const original = post.content;
      post.content = fixCaptions(post.content);
      if (post.content !== original) {
        console.log(`Fixed captions in: ${post.link}`);
        count++;
      }
    }
  });
});

if (count > 0) {
  fs.writeFileSync(contentPath, JSON.stringify(content, null, 2));
  console.log(`Successfully fixed captions in ${count} posts.`);
} else {
  console.log('No posts with [caption] tags found.');
}
