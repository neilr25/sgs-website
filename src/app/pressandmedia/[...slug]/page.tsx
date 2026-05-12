import { getContent } from "@/lib/content";
import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const content = getContent();
  return content.postsByCollection.pressandmedia.map((post) => ({
    slug: post.link.replace(/^\/pressandmedia\//, "").split("/"),
  }));
}

export default async function PressPostPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getContent();
  const fullSlug = `/pressandmedia/${slug.join("/")}`;

  const post = content.postsByCollection.pressandmedia.find(
    (p) => p.link === fullSlug
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <Link
        href="/press"
        className="text-[var(--sgs-teal)] hover:text-[var(--sgs-green)] mb-4 inline-block"
      >
        &larr; Back to Press & Media
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