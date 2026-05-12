import { getContent } from "@/lib/content";
import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const content = getContent();
  // Generate for ALL blog posts, normalizing /blog2/ → /blog/ URLs
  return content.postsByCollection.blog.map((post) => {
    const normalizedLink = post.link.replace(/^\/blog2\//, "/blog/");
    return {
      slug: normalizedLink.replace(/^\/blog\//, "").split("/"),
    };
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getContent();
  const fullSlug = `/blog/${slug.join("/")}`;
  const altSlug = `/blog2/${slug.join("/")}`;

  // Try both /blog/ and /blog2/ prefixes to find the post
  const post =
    content.postsByCollection.blog.find((p) => p.link === fullSlug) ||
    content.postsByCollection.blog.find((p) => p.link === altSlug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <Link
        href="/blog"
        className="text-[var(--sgs-teal)] hover:text-[var(--sgs-green)] mb-4 inline-block"
      >
        &larr; Back to Blog
      </Link>
      <p className="text-sm text-gray-500 mb-2">
        {new Date(post.pubDate).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <ContentPage title={post.title} htmlContent={post.content} />
    </div>
  );
}