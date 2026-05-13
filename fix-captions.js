const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, 'data', 'content.json');
const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));

const post = content.postsByCollection.blog.find(p => p.link.includes('tom-humphreys'));

if (post) {
  console.log('Original content length:', post.content.length);
  
  // Replace [caption ...]<img> Caption [/caption] with <figure><img><figcaption>Caption</figcaption></figure>
  const newContent = post.content.replace(/\[caption[^\]]*\](.*?)\[\/caption\]/gs, (match, inner) => {
    // Inner usually looks like: <img ... /> Caption Text
    const imgMatch = inner.match(/<img[^>]+>/);
    if (imgMatch) {
      const img = imgMatch[0];
      const caption = inner.replace(img, '').trim();
      
      // Wrap in a figure with SGS-consistent styling
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

  post.content = newContent;
  console.log('New content length:', post.content.length);
  
  fs.writeFileSync(contentPath, JSON.stringify(content, null, 2));
  console.log('Successfully fixed captions for Tom Humphreys blog post.');
} else {
  console.error('Blog post not found.');
}
