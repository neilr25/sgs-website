import { getContent } from "@/lib/content";
import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const content = getContent();
  return content.postsByCollection.news.map((post) => ({
    // Normalize /news-1/ prefix to /news/ for clean URLs
    slug: post.link.replace(/^\/news-1\//, "").replace(/^\/news\//, "").split("/"),
  }));
}

export default async function NewsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getContent();
  const fullSlug = `/news/${slug.join("/")}`;
  const altSlug = `/news-1/${slug.join("/")}`;

  const post =
    content.postsByCollection.news.find((p) => p.link === fullSlug) ||
    content.postsByCollection.news.find((p) => p.link === altSlug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <Link
        href="/news"
        className="text-[var(--sgs-teal)] hover:text-[var(--sgs-green)] mb-4 inline-block"
      >
        &larr; Back to Newsletters
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