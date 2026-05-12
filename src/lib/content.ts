import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'data', 'content.json');

let _content: SiteContent | null = null;

export interface ContentPage {
  title: string;
  link: string;
  content: string;
  postType: string;
  status: string;
  postName: string;
  postId: string;
  categories: { domain: string; nicename: string; name: string }[];
  pageType?: string;
}

export interface ContentPost extends ContentPage {
  pubDate: string;
  featuredImage: string;
}

export interface SiteContent {
  pages: ContentPage[];
  postsByCollection: {
    blog: ContentPost[];
    pressandmedia: ContentPost[];
    news: ContentPost[];
    uncategorized: ContentPost[];
  };
  allPosts: ContentPost[];
  attachments: ContentPage[];
  stats: {
    total_pages: number;
    total_posts: number;
    total_attachments: number;
    blog_posts: number;
    press_posts: number;
    news_posts: number;
    uncategorized_posts: number;
    pageTypes: Record<string, number>;
  };
}

export function getContent(): SiteContent {
  if (_content) return _content;
  const raw = fs.readFileSync(contentPath, 'utf-8');
  _content = JSON.parse(raw);
  return _content!;
}

export function getPageByType(type: string): ContentPage | undefined {
  return getContent().pages.find(p => p.pageType === type);
}

export function getTeamMembers(): ContentPage[] {
  return getContent().pages.filter(p => p.pageType === 'team-member');
}

export function getBlogPosts(): ContentPost[] {
  return getContent().postsByCollection.blog;
}

export function getPressPosts(): ContentPost[] {
  return getContent().postsByCollection.pressandmedia;
}

export function getNewsPosts(): ContentPost[] {
  return getContent().postsByCollection.news;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}