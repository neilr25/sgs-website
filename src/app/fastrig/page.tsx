import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FastRig | Smart Green Shipping",
  description:
    "Lightweight, autonomous rigid wingsail system that retrofits easily onto existing bulkers and tankers. Manufactured in the UK from 100% recyclable materials, providing up to 40% fuel and emissions savings.",
};

const FEATURES = [
  "Stowable to allow standard loading and unloading processes",
  "By working with shipping we ensure all safety, visibility and all operation and maintenance concerns are addressed",
  "Intelligent FastRigs need no additional crew to operate it",
  "Work in harmony with FastRoute software solution to make route-planning for wind optimisation simple and quantifiable",
  "No port-side infrastructure changes required",
  "Are designed to be recyclable to make best use of scarce and valuable resources",
];

export default function FastRigPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--sgs-navy)] text-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row min-h-[70vh] items-stretch">
            {/* Left column - Navy with text */}
            <div className="flex-1 flex flex-col justify-center py-16 lg:py-24 lg:pr-12">
              <div className="mb-8">
                <Image
                  src="/images/54e49287e4b062d0771142f2/e289daad-a07e-4922-b51a-10166fce0d76/FastRig+Icon+white.webp"
                  alt="FastRig Icon"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                style={{ color: "#b8e986" }}
              >
                FASTRIG
              </h1>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                Lightweight, autonomous rigid wingsail system that retrofits easily onto existing bulkers and
                tankers. Manufactured in the UK from 100% recyclable materials, it provides up to 40% fuel
                and emissions savings p.a. through wind propulsion. The stowable design ensures operational
                flexibility, with proven performance and robustness through ITTC protocol sea trials and
                excellent feedback from captain and crew.
              </p>
            </div>

            {/* Right column - Ship image */}
            <div className="flex-1 relative min-h-[50vh] lg:min-h-0">
              <Image
                src="/images/54e49287e4b062d0771142f2/bd2a3d71-8572-4811-805d-c13a4e6102b6/SGS+FastRig+-+Torquay.jpg"
                alt="FastRig installed on a ship at sea"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#111] text-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left - Diagram image */}
            <div className="w-full lg:w-1/2">
              <Image
                src="/images/54e49287e4b062d0771142f2/70f03c26-5e40-4ff0-b113-9925ca621182/FastRig_How-it-Works_Kamsarmax_Artworked_V2.jpg"
                alt="How FastRig works - thrust diagram showing up to 40% fuel and emissions savings"
                width={800}
                height={500}
                className="w-full h-auto rounded"
              />
            </div>

            {/* Right - Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">How it works</h2>
              <p className="text-white/85 leading-relaxed mb-6">
                From the Polynesian voyaging canoes to the Golden Hind, the wind has been transporting and
                powering ships across the globe for centuries. We believe we should harness and use this
                incredible free, abundant, power that is exclusively available to any ship equipped to harness
                it. But this does not mean we have to use the same technology, instead, we use Smart
                21st-century technology.
              </p>
              <p className="text-white font-semibold leading-relaxed">
                Our FastRigs can be installed without the need for dry docking or invasive ship modifications,
                allowing for quick and easy installation and removal to ensure maximum flexibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-[var(--sgs-navy)] text-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Video 1 Placeholder */}
            <div className="relative aspect-video bg-white/5 rounded overflow-hidden flex items-center justify-center border border-white/10">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--sgs-teal)]/80 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm">FastRig Sea Trials</p>
              </div>
            </div>

            {/* Video 2 Placeholder */}
            <div className="relative aspect-video bg-white/5 rounded overflow-hidden flex items-center justify-center border border-white/10">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--sgs-teal)]/80 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm">FastRig Installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="bg-[var(--sgs-navy)] text-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <p className="text-lg md:text-xl leading-relaxed mb-3">
            Can realise up to 40% fuel and greenhouse gas emissions savings per year
          </p>
          <p className="mb-10">
            <a
              href="#"
              className="text-[#b8e986] font-semibold hover:underline"
            >
              Find out more
            </a>
          </p>

          <ul className="space-y-5">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 shrink-0 mt-0.5 text-[var(--sgs-green)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white/85 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}