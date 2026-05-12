import Link from "next/link";

interface Post {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  featuredImage: string;
}

interface PostListProps {
  title: string;
  description?: string;
  posts: Post[];
}

export function PostList({ title, description, posts }: PostListProps) {
  return (
    <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] mb-4 tracking-tight">{title}</h1>
      {description && <p className="text-lg text-[var(--sgs-gray)] mb-12 max-w-2xl">{description}</p>}
      <div className="divide-y divide-gray-200">
        {posts.map((post) => (
          <Link
            key={post.link}
            href={post.link}
            className="group block py-6 first:pt-0 last:pb-0"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs text-[var(--sgs-gray-light)] font-medium uppercase tracking-wide">
                {new Date(post.pubDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="text-xl font-semibold text-[var(--sgs-navy)] group-hover:text-[var(--sgs-teal)] transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--sgs-gray)] line-clamp-2 leading-relaxed">
                {post.content.replace(/<[^>]*>/g, "").substring(0, 200).trim()}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}