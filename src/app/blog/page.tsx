import { PostList } from "@/components/PostList";
import { getBlogPosts } from "@/lib/content";

export default function Page() {
  // Normalize /blog2/ links to /blog/ so they match the route
  const posts = getBlogPosts().map((post) => ({
    ...post,
    link: post.link.replace(/^\/blog2\//, "/blog/"),
  }));
  return <PostList title="Blog" description="Insights and updates from Smart Green Shipping" posts={posts} />;
}
