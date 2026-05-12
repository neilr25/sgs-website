import Link from "next/link";
import Image from "next/image";
import { getPressPosts, getBlogPosts, getNewsPosts } from "@/lib/content";

export default function HomePage() {
  const pressPosts = getPressPosts().slice(0, 6);
  const blogPosts = getBlogPosts()
    .slice(-3)
    .reverse()
    .map((p) => ({ ...p, link: p.link.replace(/^\/blog2\//, "/blog/") }));
  const newsletterPosts = getNewsPosts().slice(0, 3).map((p) => ({
    ...p,
    link: p.link.replace(/^\/news-1\//, "/news/"),
  }));

  const solutions = [
    {
      title: "FastRig",
      href: "/fastrig",
      image: "/images/54e49287e4b062d0771142f2/bd2a3d71-8572-4811-805d-c13a4e6102b6/SGS+FastRig+-+Torquay.jpg",
      description:
        "Rigid wingsail system delivering up to 40% fuel and emissions savings validated through ITTC protocol sea trials.",
      features: ["Lightweight and Robust", "Retrofittable", "Rapid Install/Deinstall"],
    },
    {
      title: "FastReport",
      href: "/fastreport",
      image: "/images/54e49287e4b062d0771142f2/18e3e823-2ae6-462d-94ba-f51808906ed4/SGS+FR35M+Bulkcarrier+20250714+with+Logos+(CROPPPED).webp",
      description:
        "Industry expertise and data-driven consultancy that de-risks your FastRig investment before committing capital.",
      features: ["Cost-Benefit Analysis", "Expert Technical Guidance", "Implementation Roadmap"],
    },
    {
      title: "FastRoute",
      href: "/fastroute",
      image: "/images/54e49287e4b062d0771142f2/861d3a03-6da3-46e0-adba-351c14fb1af2/SGS_Banner_Clean_PNG-min+(1).webp",
      description:
        "Route optimisation to measure and maximise fuel savings from FastRig whilst meeting arrival times.",
      features: ["Predict Savings", "Quantify Value", "Maximise Performance"],
    },
    {
      title: "FastReach",
      href: "/fastreach",
      image: "/images/54e49287e4b062d0771142f2/6c964aa2-4ae4-4abc-91a7-d11adecb53c9/CDF+FastRig_0402-HDR-Edit.jpg",
      description:
        "Wind-as-a-Service solution eliminating adoption barriers through leasing models providing frictionless access FastRig.",
      features: ["Operation and Maintenance", "Regulatory Compliance", "Performance Guarantees"],
    },
  ];

  const awards = [
    "Women in Green Business Awards 2025 — Entrepreneur of the Year Winner",
    "Women in Green Business Awards 2025 — Transport Professional of the Year Winner",
    "Maritime UK Awards 2025 — Clean Maritime Operator of the Year Winner",
    "EveryWoman Transport & Logistics Awards 2025 — Tech Innovator of the Year Winner",
    "GREEN4SEA 2025 — Personality Award won by Diane Gilpin",
    "Holyrood's Climate Action Awards 2024 — Technology and Innovation Award Winner",
    "BBC Woman's Hour 2020 Power List",
    "Solar Impulse — Efficient Solution Awards 2021",
    "IWSA — Outstanding Contribution to Wind Propulsion Sector",
  ];

  return (
    <div>
      {/* Hero Section - Full-bleed background image like Squarespace */}
      <section className="relative bg-[var(--sgs-navy)] text-white overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/54e49287e4b062d0771142f2/bd2a3d71-8572-4811-805d-c13a4e6102b6/SGS+FastRig+-+Torquay.jpg"
            alt="Smart Green Shipping FastRig technology at sea"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[var(--sgs-navy)]/70" />
        </div>
        <div className="relative max-w-[var(--max-width)] mx-auto px-6 lg:px-8 py-24 md:py-32 lg:py-40 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tight">
              The only wind propulsion Provider able to&nbsp;guarantee&nbsp;performance
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              Smart Green Shipping develops validated wind propulsion technology and digital optimisation solutions
              that reduce fuel consumption, emissions and operating costs through performance-guaranteed service models.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/our-story"
                className="bg-white text-[var(--sgs-navy)] px-7 py-3.5 font-semibold tracking-wide text-sm hover:bg-gray-100 transition-colors"
              >
                Find out more
              </Link>
              <Link
                href="/woc-project"
                className="border-2 border-white text-white px-7 py-3.5 font-semibold tracking-wide text-sm hover:bg-white hover:text-[var(--sgs-navy)] transition-colors"
              >
                Winds of Change Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions - 3-column top row + 1 center below, circular images */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] text-center mb-4 tracking-tight">
            Our Solutions
          </h2>
          <p className="text-center text-[var(--sgs-gray)] max-w-2xl mx-auto mb-14">
            A complete suite of wind-powered solutions backed by data, expertise, and performance guarantees.
          </p>
          {/* 3-column top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {solutions.slice(0, 3).map((sol) => (
              <Link
                key={sol.title}
                href={sol.href}
                className="group text-center p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[var(--sgs-teal)] transition-colors">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--sgs-navy)] mb-3 group-hover:text-[var(--sgs-teal)] transition-colors">
                  {sol.title}
                </h3>
                <p className="text-sm text-[var(--sgs-gray)] mb-4 leading-relaxed">{sol.description}</p>
                <ul className="space-y-1.5 text-left max-w-[260px] mx-auto">
                  {sol.features.map((f) => (
                    <li key={f} className="text-sm text-[var(--sgs-green)] flex items-center gap-2 font-medium">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="inline-block mt-4 text-sm font-semibold text-[var(--sgs-navy)] group-hover:text-[var(--sgs-teal)] transition-colors">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          {/* FastReach centred below */}
          <div className="flex justify-center">
            <Link
              href={solutions[3].href}
              className="group text-center p-6 max-w-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[var(--sgs-teal)] transition-colors">
                <Image
                  src={solutions[3].image}
                  alt={solutions[3].title}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--sgs-navy)] mb-3 group-hover:text-[var(--sgs-teal)] transition-colors">
                {solutions[3].title}
              </h3>
              <p className="text-sm text-[var(--sgs-gray)] mb-4 leading-relaxed">{solutions[3].description}</p>
              <ul className="space-y-1.5 text-left max-w-[260px] mx-auto">
                {solutions[3].features.map((f) => (
                  <li key={f} className="text-sm text-[var(--sgs-green)] flex items-center gap-2 font-medium">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <span className="inline-block mt-4 text-sm font-semibold text-[var(--sgs-navy)] group-hover:text-[var(--sgs-teal)] transition-colors">
                Learn more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-[var(--sgs-light)]">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] text-center mb-12 tracking-tight">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award, i) => (
              <div key={i} className="bg-white p-5 border border-gray-100">
                <p className="text-sm font-medium text-[var(--sgs-navy)] leading-relaxed">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Press - DARK NAVY background matching Squarespace */}
      <section className="py-20 bg-[var(--sgs-navy)] text-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-white">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressPosts.map((post) => (
              <Link
                key={post.link}
                href={post.link}
                className="group p-0 hover:bg-white/5 transition-all duration-300"
              >
                <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">
                  {new Date(post.pubDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-base font-semibold text-white group-hover:text-[var(--sgs-teal)] transition-colors line-clamp-3 leading-snug mb-3">
                  {post.title}
                </h3>
                <span className="text-sm font-medium text-[var(--sgs-teal)] group-hover:text-white transition-colors">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/press"
              className="text-[var(--sgs-teal)] font-semibold text-sm tracking-wide uppercase hover:text-white transition-colors"
            >
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-20 bg-[var(--sgs-sky)]">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] mb-10 tracking-tight">
            From the Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.link}
                href={post.link}
                className="group bg-white p-6 border border-gray-200 hover:border-[var(--sgs-teal)] hover:shadow-md transition-all duration-300"
              >
                <p className="text-xs text-[var(--sgs-gray-light)] mb-2 font-medium uppercase tracking-wide">
                  {new Date(post.pubDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-base font-semibold text-[var(--sgs-navy)] group-hover:text-[var(--sgs-teal)] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-[var(--sgs-teal)] font-semibold text-sm tracking-wide uppercase hover:text-[var(--sgs-green)] transition-colors"
            >
              View all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletters */}
      <section className="py-20 bg-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] mb-10 tracking-tight">
            Newsletters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsletterPosts.map((post) => (
              <Link
                key={post.link}
                href={post.link}
                className="group p-6 bg-white border border-gray-200 hover:border-[var(--sgs-green)] hover:shadow-md transition-all duration-300"
              >
                <p className="text-xs text-[var(--sgs-gray-light)] mb-2 font-medium uppercase tracking-wide">
                  {new Date(post.pubDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-base font-semibold text-[var(--sgs-navy)] group-hover:text-[var(--sgs-green)] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/news"
              className="text-[var(--sgs-green)] font-semibold text-sm tracking-wide uppercase hover:text-[var(--sgs-teal)] transition-colors"
            >
              View all newsletters →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Teal/blue background section above footer */}
      <section className="py-14 bg-[var(--sgs-teal)] text-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated</h2>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Sign up for news and updates about Smart Green Shipping&apos;s wind propulsion solutions.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-[var(--sgs-navy)] text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="bg-[var(--sgs-navy)] text-white px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-[var(--sgs-dark)] transition-colors"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}