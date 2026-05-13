import Link from "next/link";
import Image from "next/image";

export default function FastReachPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[var(--sgs-navy)] text-white overflow-hidden">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Icon + Title */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Image
                src="/images/54e49287e4b062d0771142f2/cb85f905-1893-48ea-99d4-5db4409360a6/FastReach+Icon+white.webp"
                alt="FastReach Icon"
                width={120}
                height={120}
                className="mb-6"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: "var(--sgs-green)" }}>
                FASTREACH
              </h1>
              <p className="text-white/85 text-lg leading-relaxed">
                Wind-as-a-Service solution that eliminates adoption barriers through leasing models. This de-risking proposition enables frictionless access to FastRig through leasing, performance guarantees, operations and maintenance support, and regulatory compliance services. Simultaneously reducing costs and emissions while extending the operational life of vessels.
              </p>
            </div>
            {/* Right: Hero Image */}
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/54e49287e4b062d0771142f2/6c964aa2-4ae4-4abc-91a7-d11adecb53c9/CDF+FastRig_0402-HDR-Edit.jpg"
                alt="FastReach wind-as-a-service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <p className="text-center text-lg text-[var(--sgs-gray)] max-w-3xl mx-auto mb-14 leading-relaxed">
            FastReach offers seamless integration for immediate impact:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              {
                title: "Zero CapEx Deployment",
                desc: "Through lease financing models, FastReach removes the capital expenditure barrier that prevents many ship owners from adopting wind propulsion technology."
              },
              {
                title: "Complete Operational Support",
                desc: "Including installation, maintenance, and crew training — FastReach handles all operational aspects so you can focus on your core business."
              },
              {
                title: "Regulatory Compliance",
                desc: "Compliance management for EU ETS, FuelEU, CII and new IMO Reduction of GHG regulation (MEPC 83), ensuring your vessels meet all current and upcoming requirements."
              },
              {
                title: "Standardised Contracts",
                desc: "Streamlined process with off-the-shelf insurance agreements and guaranteed fuel savings, reducing complexity and accelerating deployment."
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <svg className="w-6 h-6 shrink-0 text-[var(--sgs-teal)] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-1">{item.title}</h3>
                  <p className="text-[var(--sgs-gray)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary + CTA */}
      <section className="bg-[var(--sgs-navy)] text-white py-16 md:py-20">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-6">
            Combined with FastRig&apos;s rapid install/deinstall engineering, FastReach allows temporary or permanent deployment making Smart Green Shipping&apos;s the most flexible and low-risk offering on the market.
          </p>
          <p className="text-lg font-semibold text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            To find out how FastReach can reduce operational costs with no upfront cost, please get in touch.
          </p>
          <Link
            href="/contactus"
            className="inline-block border-2 border-white text-white px-8 py-3.5 font-semibold tracking-wide text-sm rounded hover:bg-white hover:text-[var(--sgs-navy)] transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Alt Image Section */}
      <section className="bg-[var(--sgs-light)] py-16 md:py-20">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--sgs-navy)] mb-4 tracking-tight">
                Flexible Deployment
              </h2>
              <p className="text-[var(--sgs-gray)] leading-relaxed mb-6">
                FastReach&apos;s leasing model means you can deploy FastRig wind propulsion technology without the burden of capital expenditure. Combined with guaranteed fuel savings and comprehensive operational support, it&apos;s the simplest path to decarbonisation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/fastrig"
                  className="bg-[var(--sgs-navy)] text-white px-6 py-2.5 text-sm font-semibold rounded hover:bg-[var(--sgs-navy-light)] transition-colors"
                >
                  Learn about FastRig
                </Link>
                <Link
                  href="/fastreport"
                  className="border-2 border-[var(--sgs-navy)] text-[var(--sgs-navy)] px-6 py-2.5 text-sm font-semibold rounded hover:bg-[var(--sgs-navy)] hover:text-white transition-colors"
                >
                  Explore FastReport
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/54e49287e4b062d0771142f2/b7a3f8b2-c722-4a89-a734-4ea99544ea64/win+win+wind.webp"
                alt="FastReach win-win wind solution"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}