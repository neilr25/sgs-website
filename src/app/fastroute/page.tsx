import Link from "next/link";
import Image from "next/image";

export default function FastRoutePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[var(--sgs-navy)] text-white overflow-hidden">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Icon + Title */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Image
                src="/images/54e49287e4b062d0771142f2/74026201-c330-4e9d-8d3a-71fe36fb6ef4/FastRoute+Icon+white.webp"
                alt="FastRoute Icon"
                width={120}
                height={120}
                className="mb-6"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: "var(--sgs-green)" }}>
                FASTROUTE
              </h1>
              <p className="text-white/85 text-lg leading-relaxed">
                Proprietary route optimisation software that maximises fuel savings from FastRig installations across any global shipping route whilst meeting arrival times. Developed through five years of academic research, it combines artificial intelligence with high-performance computing to deliver predictions, helping operators quantify the value of wind assistance and maximise performance.
              </p>
            </div>
            {/* Right: Hero Image */}
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/54e49287e4b062d0771142f2/861d3a03-6da3-46e0-adba-351c14fb1af2/SGS_Banner_Clean_PNG-min+%281%29.webp"
                alt="FastRoute route optimisation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 4 Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] text-center mb-16 tracking-tight">
            How does it work?
          </h2>
          <p className="text-center text-lg text-[var(--sgs-gray)] max-w-3xl mx-auto mb-16 leading-relaxed">
            FastRoute calculates robust fuel-saving estimates using a scientifically verified four-step method:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--sgs-teal)] text-white text-xl font-bold flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-2">
                  Integration of Sail Data
                </h3>
                <p className="text-[var(--sgs-gray)] leading-relaxed">
                  FastRoute integrates FastRig performance data from Humphrey&apos;s Yacht Design (HYD). The data uses aerodynamic modelling to estimate how much power FastRig sails produce in any given wind condition.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--sgs-teal)] text-white text-xl font-bold flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-2">
                  Route Calculation
                </h3>
                <p className="text-[var(--sgs-gray)] leading-relaxed">
                  FastRoute calculates the fuel savings from FastRigs on the shortest distance route between two ports, also known as the great circle route. The software combines the sail data with the environmental data at many waypoints along the route to calculate the fuel consumed by a ship with and without FastRigs. It also uses artificial intelligence algorithms to calculate weather routing, an optimised weather route.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--sgs-teal)] text-white text-xl font-bold flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-2">
                  Environmental Data
                </h3>
                <p className="text-[var(--sgs-gray)] leading-relaxed">
                  The software uses global wind data from the European Centre for Medium Range Weather Forecasts (ECMWF), alongside ocean current data from the National Oceanic and Atmospheric Administration (NOAA). The data is historical hindcast data between 2018 and 2023, describing conditions that occurred in the past.
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--sgs-teal)] text-white text-xl font-bold flex items-center justify-center">
                4
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-2">
                  Historical Simulations
                </h3>
                <p className="text-[var(--sgs-gray)] leading-relaxed">
                  FastRoute investigates three ships: a Handymax, Panamax and Capesize. The software performs historical simulations for each ship, calculating fuel savings from 52 departures across multiple years at ship speeds between 9 and 13 knots. This results in over 1,000 simulations per ship type for each route, requiring high-performance computing to process millions of calculations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary + CTA */}
      <section className="bg-[var(--sgs-navy)] text-white py-16 md:py-20">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            By combining these four steps, FastRoute delivers accurate predictions of FastRigs on any route, offering customers confidence in the fuel savings from wind.
          </p>
          <Link
            href="/contactus"
            className="inline-block border-2 border-white text-white px-8 py-3.5 font-semibold tracking-wide text-sm rounded hover:bg-white hover:text-[var(--sgs-navy)] transition-colors"
          >
            Find out how much you could save
          </Link>
        </div>
      </section>
    </div>
  );
}