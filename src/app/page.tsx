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
      {/* Hero Section - Light background with image, heading + single CTA */}
      <section className="relative bg-[var(--sgs-navy)] text-white overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/54e49287e4b062d0771142f2/cb258d16-417e-419f-8946-8ef58bf83b63/hero-rigs.webp"
            alt="Smart Green Shipping FastRig technology at sea"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--sgs-navy)]/60" />
        </div>
        <div className="relative max-w-[var(--max-width)] mx-auto px-6 lg:px-8 py-24 md:py-32 lg:py-40 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-8 tracking-tight">
              The only wind propulsion Provider able to&nbsp;guarantee&nbsp;performance
            </h1>
            <Link
              href="/our-story"
              className="inline-block bg-[var(--sgs-navy)] hover:bg-[#0d2d52] text-white px-8 py-3.5 font-semibold tracking-wide text-sm transition-colors"
            >
              Find out more →
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition - Dark navy section with CTA buttons */}
      <section className="py-20 md:py-28 bg-[var(--sgs-navy)] text-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Smart Green Shipping develops validated wind propulsion technology and digital optimisation solutions
            that reduce fuel consumption, emissions and operating costs through performance-guaranteed service models.
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-semibold">
            We call it next generation Smart Green Shipping
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/woc-project"
              className="bg-white text-[var(--sgs-navy)] px-8 py-3.5 font-semibold tracking-wide text-sm rounded hover:bg-gray-100 transition-colors"
            >
              Winds of Change Project
            </Link>
            <Link
              href="/our-story"
              className="border-2 border-white text-white px-8 py-3.5 font-semibold tracking-wide text-sm rounded hover:bg-white hover:text-[var(--sgs-navy)] transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions - 4-column on white with navy Learn more buttons */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] text-center mb-4 tracking-tight">
            Our Solutions
          </h2>
          <p className="text-center text-[var(--sgs-gray)] max-w-2xl mx-auto mb-14">
            A complete suite of wind-powered solutions backed by data, expertise, and performance guarantees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((sol) => (
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
                <ul className="space-y-1.5 text-left max-w-[240px] mx-auto mb-5">
                  {sol.features.map((f) => (
                    <li key={f} className="text-sm text-[var(--sgs-navy)] flex items-center gap-2 font-medium">
                      <svg className="w-4 h-4 shrink-0 text-[var(--sgs-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="inline-block bg-[var(--sgs-navy)] text-white px-6 py-2.5 text-sm font-semibold rounded group-hover:bg-[var(--sgs-navy-light)] transition-colors">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/fastrig"
              className="inline-block bg-[var(--sgs-navy)] text-white px-8 py-3 text-sm font-semibold rounded hover:bg-[var(--sgs-navy-light)] transition-colors"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Updates - Light background, 3-column */}
      <section className="py-20 bg-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] mb-10 tracking-tight">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressPosts.map((post) => (
              <Link
                key={post.link}
                href={post.link}
                className="group block"
              >
                <p className="text-xs text-[var(--sgs-gray-light)] mb-2 font-medium uppercase tracking-wide">
                  {new Date(post.pubDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-base font-semibold text-[var(--sgs-navy)] group-hover:text-[var(--sgs-teal)] transition-colors line-clamp-3 leading-snug mb-3">
                  {post.title}
                </h3>
                <span className="text-sm font-medium text-[var(--sgs-teal)] group-hover:text-[var(--sgs-navy)] transition-colors">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/press"
              className="text-[var(--sgs-teal)] font-semibold text-sm tracking-wide uppercase hover:text-[var(--sgs-navy)] transition-colors"
            >
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* Awards - Dark navy background, 5-column grid */}
      <section className="py-20 bg-[var(--sgs-navy)] text-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight text-white text-center">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {awards.map((award, i) => (
              <div key={i} className="text-center">
                <p className="text-sm font-medium text-white/90 leading-relaxed">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Navy background with cyan Sign Up button */}
      <section className="py-14 bg-[var(--sgs-navy)] text-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe To Our Newsletter</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Sign up for news and updates about Smart Green Shipping&apos;s wind propulsion solutions.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-[var(--sgs-navy)] text-sm rounded focus:outline-none focus:ring-2 focus:ring-[var(--sgs-teal)]"
              required
            />
            <button
              type="submit"
              className="bg-[var(--sgs-teal)] text-white px-6 py-3 text-sm font-semibold tracking-wide uppercase rounded hover:bg-[var(--sgs-teal-dark)] transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="text-white/50 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  );
}