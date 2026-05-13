import Link from "next/link";
import Image from "next/image";

export default function OurStoryPage() {
  const timeline = [
    { year: "2019", text: "£100k raised via InnovateUK and UKI2S" },
    { year: "2019", text: "Digital Simulation on 80,000dwt vessel verified Fuel saving of min. 20% pa" },
    { year: "2020", text: "£40,000 raised via ESA BIC" },
    { year: "2021", text: "Creation of FastRoute Predict" },
    { year: "2022", text: "£5m raised from Scottish Enterprise, MOL DryBulk, and Private Investors" },
    { year: "2022", text: "Design of FastRig for land-based prototype" },
    { year: "2023", text: "£4.2m raised with UoS" },
    { year: "2023", text: "FastRoute Predict launched" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[var(--sgs-navy)] text-white overflow-hidden min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/54e49287e4b062d0771142f2/2f58cf4b-66c0-426f-b143-0755e055204f/Smart+Green+Shipping+Investors+Day+13th+March+24_0471-HDR-Edit.jpg"
            alt="Smart Green Shipping team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--sgs-navy)]/70" />
        </div>
        <div className="relative max-w-[var(--max-width)] mx-auto px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">Our Story</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/team"
              className="bg-[var(--sgs-navy)] hover:bg-[var(--sgs-navy-light)] text-white px-8 py-3 font-semibold tracking-wide text-sm rounded transition-colors"
            >
              Team
            </Link>
            <Link
              href="/woc-project"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--sgs-navy)] px-8 py-3 font-semibold tracking-wide text-sm rounded transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      </section>

      {/* About / Industry / Why SGS - Three Column */}
      <section className="bg-[var(--sgs-navy)] text-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* About Us */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-white">About Us</h2>
              <p className="text-white/85 leading-relaxed text-sm">
                Smart Green Shipping, a women-led UK initiative in collaboration with the University of
                Southampton, has developed the FastRig, a 100% recyclable aluminium wing sail that combines
                innovative hardware with enabling software tools. The FastRig autonomously optimises wind
                capture, stows in low wind to minimise drag, and ensures safety during heavy weather or port
                operations. Successfully tested on land and at sea, it can reduce fuel consumption and
                emissions by up to 40% annually while being easily retrofitted to existing vessels. The
                company has received numerous accolades, including a nomination for the Earthshot Prize and
                funding from the UK and Scottish Governments, and European Space Agency to develop FastRoute,
                a digital tool for wind optimisation. Our unique branding, created by pupils of Lorne Street
                Primary School, reflects its commitment to inspiring a greener future.
              </p>
            </div>

            {/* Industry */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-white">Industry</h2>
              <p className="text-white/85 leading-relaxed text-sm">
                Global shipping emissions continue to rise, accounting for 3% of total greenhouse gas
                emissions despite environmental concerns. The industry faces challenges as regulatory
                frameworks tighten and cargo owners demand reduced emissions. While alternative fuels are
                often promoted, they present significant limitations in availability, cost, and actual
                emission reduction. The industry finds itself in a difficult position. Wind power offers
                an immediate solution to these challenges. Available freely and abundantly to
                properly-equipped vessels, wind reduces dependency on commodity fuels whilst enhancing
                economic and environmental resilience. Smart Green Shipping has spent over a decade
                developing wind-assist technology to harness this natural power source for the shipping
                industry.
              </p>
            </div>

            {/* Why Smart Green Shipping */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-white">Why Smart Green Shipping</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-white mb-1">Superior Performance</h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    FastRig savings validated through ITTC protocol sea trials, exceeding current market
                    standards. Report due H1 2025
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Complete Solution</h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Integrated FastRoute optimisation software creates savings of up to 40%, offering both
                    hardware and digital advantages
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Practical Innovation</h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Only lightweight system enabling proven rapid install/uninstall capability, reducing
                    operational disruption and increasing flexibility
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Strong Industry Relationship</h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Existing investment from MOL and Drax. Letters of support from Ultrabulk and Shell, and
                    deep engagement with large ship owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/fastrig"
              className="inline-block border-2 border-white text-white px-8 py-3 font-semibold tracking-wide text-sm rounded hover:bg-white hover:text-[var(--sgs-navy)] transition-colors"
            >
              Explore Our Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Purpose */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Vision */}
            <div className="text-center">
              <Image
                src="/images/54e49287e4b062d0771142f2/fbc2cb54-c0ad-4627-adf3-1ca069a6786f/Vision.webp"
                alt="Vision"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-2 uppercase tracking-wide">Vision</h3>
              <p className="text-[var(--sgs-gray)] leading-relaxed">
                Zero carbon, data-driven, commercially superior global shipping — in harmony with nature
              </p>
            </div>
            {/* Mission */}
            <div className="text-center">
              <Image
                src="/images/54e49287e4b062d0771142f2/507a62e7-ea64-4a70-8ddf-af37fd7557ca/Mission.webp"
                alt="Mission"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-2 uppercase tracking-wide">Mission</h3>
              <p className="text-[var(--sgs-gray)] leading-relaxed">
                A new, faster, cleaner, cheaper and safer system combining wind power engineering,
                technology and finance
              </p>
            </div>
            {/* Purpose */}
            <div className="text-center">
              <Image
                src="/images/54e49287e4b062d0771142f2/9cc2f24f-8fdd-4634-950f-896e4ef0e64f/Purpose.webp"
                alt="Purpose"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-2 uppercase tracking-wide">Purpose</h3>
              <p className="text-[var(--sgs-gray)] leading-relaxed">
                To be the wind of rapid change in the greatest race against time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[var(--sgs-light)] py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] text-center mb-14 tracking-tight">
            Timeline of Smart Green Shipping
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--sgs-teal)]" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot on line */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[var(--sgs-teal)] rounded-full -translate-x-1/2 mt-1.5" />
                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8 md:ml-auto'}`}>
                    <span className="text-[var(--sgs-teal)] font-bold text-lg">{item.year}</span>
                    <p className="text-[var(--sgs-gray)] mt-1 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 bg-[var(--sgs-navy)] text-white">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Subscribe To Our Newsletter</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Do you want to receive the latest news and updates straight into your inbox? Subscribe to our
            newsletter!
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