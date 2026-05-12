import { PostList } from "@/components/PostList";
import { getPressPosts } from "@/lib/content";

export default function Page() {
  const posts = getPressPosts();
  return <PostList title="Press & Media" description="Latest news coverage about Smart Green Shipping" posts={posts} />;
}
