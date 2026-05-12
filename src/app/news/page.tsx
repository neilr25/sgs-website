import { PostList } from "@/components/PostList";
import { getNewsPosts } from "@/lib/content";

export default function Page() {
  // Normalize /news-1/ links to /news/ so they match the cleaner route
  const posts = getNewsPosts().map((post) => ({
    ...post,
    link: post.link.replace(/^\/news-1\//, "/news/"),
  }));
  return <PostList title="Newsletters" description="Latest newsletters from Smart Green Shipping" posts={posts} />;
}
