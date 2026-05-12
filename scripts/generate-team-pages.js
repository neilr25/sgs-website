/**
 * Generate team member page files from content data
 * Run: node scripts/generate-team-pages.js
 */
const fs = require('fs');
const path = require('path');

const CONTENT_FILE = path.join(__dirname, '..', 'data', 'content.json');
const APP_DIR = path.join(__dirname, '..', 'src', 'app');

function main() {
  console.log('Generating team member pages...');
  const content = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));
  
  const teamMembers = content.pages.filter(p => p.pageType === 'team-member');
  console.log(`Found ${teamMembers.length} team members`);
  
  for (const member of teamMembers) {
    const slug = member.link.replace(/^\//, ''); // e.g. "moreaboutdiane"
    const dir = path.join(APP_DIR, slug);
    fs.mkdirSync(dir, { recursive: true });
    
    const displayName = member.title
      .replace(' Questionnaire', '')
      .replace(' questionnaire', '');
    
    const contentJson = JSON.stringify(member.content || '');
    
    const component = `import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <Link
        href="/team"
        className="text-[var(--sgs-teal)] hover:text-[var(--sgs-green)] mb-4 inline-block"
      >
        &larr; Back to Team
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] mt-4">
        ${displayName}
      </h1>
      <div
        className="prose-content mt-6"
        dangerouslySetInnerHTML={{ __html: ${contentJson} }}
      />
    </div>
  );
}
`;
    fs.writeFileSync(path.join(dir, 'page.tsx'), component);
    console.log(`  Generated: /${slug} (${displayName})`);
  }
  
  console.log(`\nTotal team member pages: ${teamMembers.length}`);
}

main();