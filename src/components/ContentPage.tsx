"use client";

interface ContentPageProps {
  title: string;
  htmlContent: string;
  subtitle?: string;
}

export function ContentPage({ title, htmlContent, subtitle }: ContentPageProps) {
  return (
    <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--sgs-navy)] mb-4 tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && <p className="text-lg text-[var(--sgs-gray)] mb-10 max-w-2xl leading-relaxed">{subtitle}</p>}
      <div className="border-t border-gray-200 pt-8 mt-4" />
      <div className="prose-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}