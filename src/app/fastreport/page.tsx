import Link from "next/link";
import Image from "next/image";

export default function FastReportPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[var(--sgs-navy)] text-white overflow-hidden">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Icon + Title */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Image
                src="/images/54e49287e4b062d0771142f2/ec4488b6-2a29-4336-9179-c4f1dadfce5b/FastReport+Icon+white+1.webp"
                alt="FastReport Icon"
                width={120}
                height={120}
                className="mb-6"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: "var(--sgs-green)" }}>
                FASTREPORT
              </h1>
              <p className="text-white/85 text-lg leading-relaxed">
                Comprehensive consultancy service that de-risks your FastRig investment decision. FastReport provides expert guidance with transparent cost-benefit analysis, regulatory compliance services, and detailed implementation planning. Built on industry-first ITTC sea trials and independently verified performance data, it enables confident decision-making before committing capital.
              </p>
            </div>
            {/* Right: Hero Image */}
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/54e49287e4b062d0771142f2/18e3e823-2ae6-462d-94ba-f51808906ed4/SGS+FR35M+Bulkcarrier+20250714+with+Logos+%28CROPPPED%29.webp"
                alt="FastReport shipping analysis"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Statement */}
      <section className="bg-[var(--sgs-navy)] py-12 md:py-16">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-semibold text-white/90 max-w-3xl mx-auto leading-relaxed">
            FastReport embodies SGS&apos;s commitment to honest, effective climate action in shipping: we deliver only solutions that make real impact, never overpromising or selling technology that can&apos;t deliver.
          </p>
        </div>
      </section>

      {/* Four Service Areas */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Data-Driven Performance Forecasting */}
            <div className="border-l-4 border-[var(--sgs-teal)] pl-6">
              <h3 className="text-xl font-bold text-[var(--sgs-navy)] mb-3">
                Data-Driven Performance Forecasting
              </h3>
              <p className="text-[var(--sgs-gray)] leading-relaxed">
                Reliable, route-specific predictions using FastRoute performance modelling and historical weather data.
              </p>
            </div>
            {/* Installation Logistics & Project Timeline */}
            <div className="border-l-4 border-[var(--sgs-teal)] pl-6">
              <h3 className="text-xl font-bold text-[var(--sgs-navy)] mb-3">
                Installation Logistics &amp; Project Timeline
              </h3>
              <p className="text-[var(--sgs-gray)] leading-relaxed">
                Comprehensive planning with recommended shipyards, realistic schedules, and system integration guidance.
              </p>
            </div>
            {/* Regulatory Compliance & Approvals */}
            <div className="border-l-4 border-[var(--sgs-teal)] pl-6">
              <h3 className="text-xl font-bold text-[var(--sgs-navy)] mb-3">
                Regulatory Compliance &amp; Approvals
              </h3>
              <p className="text-[var(--sgs-gray)] leading-relaxed">
                Quantify FastRig&apos;s impact on EU ETS, FuelEU, CII ratings, and IMO NZF while navigating flag &amp; class certifications.
              </p>
            </div>
            {/* Operations & Maintenance Planning */}
            <div className="border-l-4 border-[var(--sgs-teal)] pl-6">
              <h3 className="text-xl font-bold text-[var(--sgs-navy)] mb-3">
                Operations &amp; Maintenance Planning
              </h3>
              <p className="text-[var(--sgs-gray)] leading-relaxed">
                Clear lifecycle costs, maintenance schedules, and crew training requirements for sustained success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary + CTA */}
      <section className="bg-[var(--sgs-navy)] text-white py-16 md:py-20">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Combined with FastRig&apos;s proven technology and access to financing and performance guarantees via FastReach, FastReport enables informed decision-making with complete visibility into technical feasibility, financial returns, and implementation requirements, making Smart Green Shipping the most transparent and low-risk partner on the market.
          </p>
          <Link
            href="/contactus"
            className="inline-block border-2 border-white text-white px-8 py-3.5 font-semibold tracking-wide text-sm rounded hover:bg-white hover:text-[var(--sgs-navy)] transition-colors"
          >
            Get in touch for a no-cost evaluation
          </Link>
        </div>
      </section>
    </div>
  );
}