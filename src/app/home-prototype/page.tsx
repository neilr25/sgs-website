import Link from "next/link";
import Image from "next/image";
import { getPressPosts, getBlogPosts, getNewsPosts } from "@/lib/content";

export default function HomePrototypePage() {
  const pressPosts = getPressPosts().slice(0, 6);
  const blogPosts = getBlogPosts()
    .slice(0, 3)
    .map((p) => ({ ...p, link: p.link.replace(/^\/blog2\//, "/blog/") }));
  const newsletterPosts = getNewsPosts().slice(0, 3).map((p) => ({
    ...p,
    link: p.link.replace(/^\/news-1\//, "/news/"),
  }));

  const solutions = [
    {
      title: "FastRig",
      href: "/fastrig",
      description:
        "Rigid wingsail system delivering up to 40% fuel and emissions savings validated through ITTC protocol sea trials.",
      features: ["Lightweight and Robust", "Retrofittable", "Rapid Install/Deinstall"],
    },
    {
      title: "FastReport",
      href: "/fastreport",
      description:
        "Industry expertise and data-driven consultancy that de-risks your FastRig investment before committing capital.",
      features: ["Cost-Benefit Analysis", "Expert Technical Guidance", "Implementation Roadmap"],
    },
    {
      title: "FastRoute",
      href: "/fastroute",
      description:
        "Route optimisation to measure and maximise fuel savings from FastRig whilst meeting arrival times.",
      features: ["Predict Savings", "Quantify Value", "Maximise Performance"],
    },
    {
      title: "FastReach",
      href: "/fastreach",
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
    <div className="bg-surface text-on-surface font-body-md" style={{ backgroundColor: "#121414", color: "#e3e2e2" }}>
      {/* Hero Section — full screen, dark with ship image */}
      <section className="relative w-full min-h-screen bg-slate-900 overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/54e49287e4b062d0771142f2/cb258d16-417e-419f-8946-8ef58bf83b63/hero-rigs.webp"
            alt="Smart Green Shipping FastRig technology at sea"
            fill
            className="object-cover grayscale opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 pb-xl">
          <div className="max-w-3xl">
            <h1
              className="uppercase tracking-tighter mb-md"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "clamp(2rem, 6vw, 80px)",
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: "-1.6px",
                color: "#ffffff",
              }}
            >
              Decarbonising Global Shipping.
            </h1>
            <p className="text-on-surface-variant text-lg mb-lg max-w-2xl" style={{ color: "#bdcaba" }}>
              The only wind propulsion provider able to guarantee performance. Validated technology, digital optimisation,
              and performance-guaranteed service models.
            </p>
            <div className="flex flex-col sm:flex-row gap-sm items-start sm:items-center">
              <Link
                href="/our-story"
                className="bg-[#c4f25a] text-[#002955] font-button uppercase px-lg py-sm transition-transform duration-150 active:scale-95"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "1.4px",
                  lineHeight: 1,
                  padding: "16px 48px",
                }}
              >
                Get a Performance Report
              </Link>
              <div className="flex items-center gap-xxs border border-white/20 p-xs backdrop-blur-sm bg-black/20">
                <span className="font-mono text-white text-xs tracking-widest uppercase">ITTC Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition — dark canvas */}
      <section className="bg-canvas py-xxl" style={{ backgroundColor: "#003366", padding: "96px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <span
            className="block mb-sm"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "1.1px",
              lineHeight: 1.4,
              textTransform: "uppercase",
              color: "#bdcaba",
            }}
          >
            Next Generation Maritime Technology
          </span>
          <p
            className="max-w-3xl mx-auto mb-lg"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "26px",
              fontWeight: 500,
              lineHeight: 1.5,
              letterSpacing: "0.195px",
              color: "#e3e2e2",
            }}
          >
            Smart Green Shipping develops validated wind propulsion technology and digital optimisation solutions
            that reduce fuel consumption, emissions and operating costs through performance-guaranteed service models.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/woc-project"
              className="bg-[#c4f25a] text-[#002955] font-button uppercase px-lg py-sm"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1.4px",
                lineHeight: 1,
                padding: "16px 32px",
              }}
            >
              Winds of Change Project
            </Link>
            <Link
              href="/our-story"
              className="border-2 border-white/30 text-white font-button uppercase px-lg py-sm hover:bg-white/10 transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1.4px",
                lineHeight: 1,
                padding: "16px 32px",
              }}
            >
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions — dark surface with bento grid */}
      <section className="py-xxl" style={{ backgroundColor: "#121414", padding: "96px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-baseline justify-between mb-lg border-b border-[#1A4D80] pb-xxs">
            <h2
              className="uppercase tracking-tighter text-white"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.36px",
              }}
            >
              Our Solutions
            </h2>
            <span
              className="hidden md:block"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.1px",
                lineHeight: 1.4,
                textTransform: "uppercase",
                color: "#bdcaba",
              }}
            >
              Complete Wind-Powered Suite
            </span>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-xxs"
            style={{ gap: "8px" }}
          >
            {solutions.map((sol, i) => (
              <Link
                key={sol.title}
                href={sol.href}
                className="group p-md border border-[#1A4D80] hover:border-[#c4f25a]/50 transition-colors"
                style={{
                  backgroundColor: "#004080",
                  padding: "32px",
                }}
              >
                <div className="flex items-baseline gap-xxs mb-xs">
                  <span
                    className="text-[#c4f25a]"
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontSize: "26px",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      letterSpacing: "0.195px",
                    }}
                  >
                    {sol.title}
                  </span>
                  <span
                    className="text-on-surface-variant ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "0.65px",
                      lineHeight: 1.4,
                      textTransform: "uppercase",
                    }}
                  >
                    Explore →
                  </span>
                </div>
                <p className="mb-sm text-sm" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", lineHeight: 1.5 }}>
                  {sol.description}
                </p>
                <div className="flex flex-wrap gap-xxxs" style={{ gap: "4px" }}>
                  {sol.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-xs py-xxxs border border-[#1A4D80]"
                      style={{
                        color: "#bdcaba",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        padding: "4px 8px",
                        fontSize: "13px",
                        lineHeight: 1.5,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Stats — Live Fleet Telemetry style */}
      <section className="py-xxl" style={{ backgroundColor: "#003366", padding: "96px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-baseline justify-between mb-lg border-b border-[#1A4D80] pb-xxs">
            <h2
              className="uppercase tracking-tighter text-white"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.36px",
              }}
            >
              Fleet Performance
            </h2>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.1px",
                lineHeight: 1.4,
                textTransform: "uppercase",
                color: "#bdcaba",
              }}
            >
              Telemetry Active
            </span>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-4"
            style={{ gap: "8px" }}
          >
            {/* Large KPI */}
            <div
              className="md:col-span-2 p-md border border-[#1A4D80]"
              style={{ backgroundColor: "#004080", padding: "32px" }}
            >
              <span
                className="block mb-xs"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1.1px",
                  lineHeight: 1.4,
                  textTransform: "uppercase",
                  color: "#bdcaba",
                }}
              >
                Fuel Savings
              </span>
              <div className="flex items-baseline gap-xxs" style={{ color: "#c4f25a", gap: "8px" }}>
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "80px",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-1.6px",
                  }}
                >
                  22.4
                </span>
                <span
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: "36px",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    letterSpacing: "-0.36px",
                  }}
                >
                  %
                </span>
              </div>
              <div className="mt-md h-12 w-full bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 opacity-50" style={{ backgroundColor: "#c4f25a", width: "22.4%" }}></div>
                <div className="absolute inset-0 flex items-center px-xs font-mono text-[10px] uppercase" style={{ color: "#c4f25a" }}>
                  Verified via ITTC Protocol
                </div>
              </div>
            </div>
            {/* CO2 Reduction */}
            <div
              className="p-md border border-[#1A4D80]"
              style={{ backgroundColor: "#004080", padding: "32px" }}
            >
              <span
                className="block mb-xs"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1.1px",
                  lineHeight: 1.4,
                  textTransform: "uppercase",
                  color: "#bdcaba",
                }}
              >
                CO2 Reduction
              </span>
              <div className="flex items-baseline gap-xxs text-white" style={{ gap: "8px" }}>
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-1.6px",
                  }}
                >
                  18.5
                </span>
                <span
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: "26px",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    letterSpacing: "0.195px",
                  }}
                >
                  T
                </span>
              </div>
              <p className="mt-sm text-[10px] tracking-widest" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", textTransform: "uppercase" }}>
                MT per voyage avg
              </p>
            </div>
            {/* Wind Speed */}
            <div
              className="p-md border border-[#1A4D80]"
              style={{ backgroundColor: "#004080", padding: "32px" }}
            >
              <span
                className="block mb-xs"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1.1px",
                  lineHeight: 1.4,
                  textTransform: "uppercase",
                  color: "#bdcaba",
                }}
              >
                Wind Speed
              </span>
              <div className="flex items-baseline gap-xxs" style={{ color: "#4C98B9", gap: "8px" }}>
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "48px",
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-1.6px",
                  }}
                >
                  18
                </span>
                <span
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: "26px",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    letterSpacing: "0.195px",
                  }}
                >
                  KN
                </span>
              </div>
              <p className="mt-sm text-[10px] tracking-widest" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", textTransform: "uppercase" }}>
                Beaufort Scale: 5
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards — dark surface */}
      <section className="py-xxl" style={{ backgroundColor: "#121414", padding: "96px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-baseline justify-between mb-lg border-b border-[#1A4D80] pb-xxs">
            <h2
              className="uppercase tracking-tighter text-white"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.36px",
              }}
            >
              Awards & Recognition
            </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "8px" }}
          >
            {awards.map((award, i) => (
              <div
                key={i}
                className="p-sm border border-[#1A4D80]"
                style={{ backgroundColor: "#1e2020", padding: "24px" }}
              >
                <div className="flex gap-sm items-start">
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "#c4f25a", color: "#002955", fontFamily: "'Roboto Mono', monospace" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", lineHeight: 1.5 }}>
                    {award}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Precision — asymmetric section */}
      <section className="py-xxl overflow-hidden" style={{ backgroundColor: "#1e2020", padding: "96px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "64px" }}>
            <div className="md:col-span-5 flex flex-col justify-center">
              <span
                className="block mb-sm"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1.1px",
                  lineHeight: 1.4,
                  textTransform: "uppercase",
                  color: "#c4f25a",
                }}
              >
                Engineering Precision
              </span>
              <h2
                className="uppercase tracking-tighter text-white mb-md"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontSize: "56px",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "-1.12px",
                }}
              >
                Mathematical Accuracy at Sea.
              </h2>
              <p className="mb-lg max-w-md" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.5 }}>
                FastRoute uses proprietary AI models to process real-time meteorological data and vessel telemetry,
                ensuring that FastRig configurations are always perfectly tuned to the prevailing winds.
              </p>
              <div className="space-y-sm">
                <div className="flex gap-sm items-start">
                  <div
                    className="w-8 h-8 flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "#004080" }}
                  >
                    <span className="text-[#c4f25a]" style={{ fontSize: "20px", fontFamily: "Inter, sans-serif" }}>⚡</span>
                  </div>
                  <div>
                    <h4
                      className="mb-xxxs uppercase text-white"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      Zero-Touch Operation
                    </h4>
                    <p className="text-sm" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", lineHeight: 1.5 }}>
                      Fully autonomous deployment and stowing based on weather limits.
                    </p>
                  </div>
                </div>
                <div className="flex gap-sm items-start">
                  <div
                    className="w-8 h-8 flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "#004080" }}
                  >
                    <span className="text-[#c4f25a]" style={{ fontSize: "20px", fontFamily: "Inter, sans-serif" }}>⚙️</span>
                  </div>
                  <div>
                    <h4
                      className="mb-xxxs uppercase text-white"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    >
                      Retrofit Compatibility
                    </h4>
                    <p className="text-sm" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", lineHeight: 1.5 }}>
                      Modular design fits existing hull structures with minimal modification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 relative">
              <div
                className="absolute -top-12 -left-12 w-32 h-32 z-0"
                style={{ borderTop: "1px solid #1A4D80", borderLeft: "1px solid #1A4D80" }}
              ></div>
              <div className="relative z-10" style={{ backgroundColor: "#004080", padding: "4px" }}>
                <Image
                  src="/images/54e49287e4b062d0771142f2/bd2a3d71-8572-4811-805d-c13a4e6102b6/SGS+FastRig+-+Torquay.jpg"
                  alt="FastRig installed on ship"
                  width={800}
                  height={450}
                  className="w-full aspect-video object-cover grayscale opacity-70"
                />
              </div>
              <div className="mt-sm grid grid-cols-2" style={{ gap: "24px" }}>
                <div
                  className="p-sm"
                  style={{ backgroundColor: "#004080", borderLeft: "4px solid #c4f25a", padding: "24px" }}
                >
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontSize: "26px",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      letterSpacing: "0.195px",
                    }}
                  >
                    400%
                  </span>
                  <p className="text-[10px] uppercase" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", fontWeight: 600, letterSpacing: "1.1px" }}>
                    ROI Yield 5Y
                  </p>
                </div>
                <div
                  className="p-sm"
                  style={{ backgroundColor: "#004080", borderLeft: "4px solid #c4f25a", padding: "24px" }}
                >
                  <span
                    className="text-white"
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontSize: "26px",
                      fontWeight: 500,
                      lineHeight: 1.5,
                      letterSpacing: "0.195px",
                    }}
                  >
                    0%
                  </span>
                  <p className="text-[10px] uppercase" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", fontWeight: 600, letterSpacing: "1.1px" }}>
                    Extra Crew Required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-xxl" style={{ backgroundColor: "#121414", padding: "96px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-baseline justify-between mb-lg border-b border-[#1A4D80] pb-xxs">
            <h2
              className="uppercase tracking-tighter text-white"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: "-0.36px",
              }}
            >
              Latest Updates
            </h2>
            <Link
              href="/press"
              className="text-[10px] uppercase tracking-widest hover:text-[#c4f25a] transition-colors"
              style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", fontWeight: 600, letterSpacing: "1.1px" }}
            >
              View all →
            </Link>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "8px" }}
          >
            {pressPosts.map((post) => (
              <Link
                key={post.link}
                href={post.link}
                className="group p-md border border-[#1A4D80] hover:border-[#c4f25a]/50 transition-colors"
                style={{ backgroundColor: "#1e2020", padding: "32px" }}
              >
                <p
                  className="mb-xs text-[10px] tracking-widest uppercase"
                  style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", fontWeight: 600, letterSpacing: "1.1px" }}
                >
                  {new Date(post.pubDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3
                  className="text-white mb-sm group-hover:text-[#c4f25a] transition-colors"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "18px",
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {post.title}
                </h3>
                <span
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "#c4f25a", fontFamily: "Inter, sans-serif", fontWeight: 600, letterSpacing: "1.1px" }}
                >
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter — dark with green button */}
      <section className="py-xxl" style={{ backgroundColor: "#003366", padding: "96px 0" }}>
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2
            className="uppercase tracking-tighter text-white mb-md"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: "-0.36px",
            }}
          >
            Subscribe To Our Newsletter
          </h2>
          <p className="mb-lg max-w-lg mx-auto" style={{ color: "#bdcaba", fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.5 }}>
            Sign up for news and updates about Smart Green Shipping&apos;s wind propulsion solutions.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm"
              style={{
                backgroundColor: "#1e2020",
                border: "1px solid #1A4D80",
                color: "#e3e2e2",
                fontFamily: "Inter, sans-serif",
                padding: "12px 16px",
                fontSize: "14px",
                lineHeight: 1.5,
              }}
              required
            />
            <button
              type="submit"
              className="font-button uppercase transition-transform duration-150 active:scale-95"
              style={{
                backgroundColor: "#c4f25a",
                color: "#002955",
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "1.4px",
                lineHeight: 1,
                padding: "12px 24px",
                border: "none",
              }}
            >
              Sign Up
            </button>
          </form>
          <p className="mt-sm text-xs" style={{ color: "#889486", fontFamily: "Inter, sans-serif" }}>
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
