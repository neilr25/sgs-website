import Image from "next/image";
import Link from "next/link";

const currentTeam = [
  {
    name: "Diane Gilpin",
    role: "CEO / Founder",
    slug: "moreaboutdiane",
    image: "/images/54e49287e4b062d0771142f2/cdc2be04-70a9-469f-8cbe-9502fb45c2f1/diane.jpg",
    bio: "Diane Gilpin leads Smart Green Shipping. She has 30+ years of experience developing and leading dynamic innovative business systems solutions in F1 motor racing, yacht racing, financial information and renewables. Diane sits on UK Department for Transport Clean Maritime Council; is a European Green Shipping Expert for EU Waterborne Transport Platform; a BBC 'Woman of Power' 2020; a recipient of InnovateUK's 'Women in Innovation' Award; winner of the 2021 International Windship Association's 'Outstanding Contribution' Award.",
  },
  {
    name: "Ian Haugh",
    role: "Director / CFO",
    slug: "moreaboutian",
    image: "/images/54e49287e4b062d0771142f2/609c6b99-4db0-4867-8ea1-f55f97975953/ian.jpg",
    bio: "Ian brings 40 years of experience of management in organisations in industries as diverse as a coach tour operator and the information services division of a major US bank. His focus for the last decade has been on renewable and regenerative technologies, as MD of companies making the step from R&D to commercialisation. At Smart Green Shipping he focuses on financial management and planning, and oversight of the Company's major, part public funded, R&D projects.",
  },
  {
    name: "Neil Rogers",
    role: "Chief Operating Officer",
    slug: "moreaboutneil",
    image: "/images/54e49287e4b062d0771142f2/489b394d-4674-4d11-966b-bcd7e19d0250/neil.jpg",
    bio: "Neil brings experience in both strategic and delivery roles and is responsible for managing Smart Green Shipping's software development. His career has spanned organisations from small startups to large enterprises, using innovative technology at each to solve real-world challenges. With a focus on the customer, he will ensure that all SGS's products are aligned to the overall vision and mission of the company.",
  },
  {
    name: "Frankie Haugh",
    role: "FastReach Commercial Manager",
    slug: "moreaboutfrankie",
    image: "/images/54e49287e4b062d0771142f2/d6fb1ed4-6f81-41cd-b51c-d253f928ae41/frankie.jpg",
    bio: "Frankie is Commercial Manager at Smart Green Shipping, where he is working to develop our customer proposition. Having previously worked in project delivery for Smart Green Shipping during the initial Feasibility Study in 2018/19, he then moved into the software industry before returning here. Prior to this, Frankie completed a Master's Degree at Lancaster University with a thesis in the implementation of renewable technologies in the shipping industry.",
  },
  {
    name: "Nadine Miller",
    role: "Marketing Assistant",
    slug: "moreaboutnadine",
    image: "/images/54e49287e4b062d0771142f2/e1e595df-902e-412f-84e8-365d69da4f52/nadine.jpg",
    bio: "Nadine handles Smart Green Shipping's social media accounts and website, creates content, and ensures that SGS maintains a social media presence. Aside from that, she assists in a variety of varied tasks that keep her on her toes!",
  },
  {
    name: "Isla Valenti",
    role: "Organisational Services Manager",
    slug: "moreaboutisla",
    image: "/images/54e49287e4b062d0771142f2/fb500ec3-c0de-4760-be71-d134f0fd357f/isla.jpg",
    bio: "With over 30 years of experience across the private, public, charity, and community sectors, Isla brings a broad and valuable business perspective to her role at Smart Green Shipping. She leads our organisational services function, overseeing day-to-day operations and internal systems to ensure they run efficiently and effectively in support of the company's sustainable growth.",
  },
  {
    name: "Thomas Basham",
    role: "FastRig Technical Development Lead",
    slug: "moreaboutthomas",
    image: "/images/54e49287e4b062d0771142f2/ec157b9c-f8c9-4d8a-9425-d50291fc5a52/thomas.jpg",
    bio: "Thomas is looking after the Hunterston test site and the Prototype FastRig wing for the duration of the land-based tests. His varied career has spanned land surveying into hospitality, and qualifying as a commercial captain.",
  },
];

const boardMembers = [
  {
    name: "Hylton Murray-Phillipson",
    role: "Lead Angel Investor",
  },
  {
    name: "Raad Pharaon",
    role: "Representing investor — Pharaon Family",
  },
];

const collaboratorSections = ["Technical", "Commercial", "Strategic"];

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[var(--sgs-navy)] text-white overflow-hidden min-h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/54e49287e4b062d0771142f2/1686670355596-9HVHTVWMLOM7QKZJH9OH/team-banner.webp"
            alt="Smart Green Shipping Team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--sgs-navy)]/70" />
        </div>
        <div className="relative max-w-[var(--max-width)] mx-auto px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">Meet The Team</h1>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#team"
              className="bg-white text-[var(--sgs-navy)] px-8 py-2.5 font-semibold tracking-wide text-sm rounded hover:bg-gray-100 transition-colors"
            >
              Team
            </a>
            <a
              href="#board"
              className="border-2 border-white text-white px-8 py-2.5 font-semibold tracking-wide text-sm rounded hover:bg-white hover:text-[var(--sgs-navy)] transition-colors"
            >
              Board
            </a>
            <a
              href="#collaborators"
              className="border-2 border-white text-white px-8 py-2.5 font-semibold tracking-wide text-sm rounded hover:bg-white hover:text-[var(--sgs-navy)] transition-colors"
            >
              Collaborators
            </a>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section id="team" className="bg-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] mb-12 tracking-tight">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {currentTeam.map((member) => (
              <div key={member.slug} className="group">
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[var(--sgs-teal)] transition-colors">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--sgs-navy)]">{member.name}</h3>
                    <p className="text-sm text-[var(--sgs-teal)] font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-[var(--sgs-gray)] leading-relaxed mb-3 line-clamp-4">
                      {member.bio}
                    </p>
                    <Link
                      href={`/${member.slug}`}
                      className="inline-block bg-[var(--sgs-navy)] text-white px-5 py-2 text-sm font-semibold rounded hover:bg-[var(--sgs-navy-light)] transition-colors"
                    >
                      More about {member.name.split(" ")[0]}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section id="board" className="bg-[var(--sgs-light)] py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] mb-12 tracking-tight">Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {boardMembers.map((member) => (
              <div key={member.name}>
                <h3 className="text-xl font-bold text-[var(--sgs-navy)]">{member.name}</h3>
                <p className="text-sm text-[var(--sgs-teal)] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section id="collaborators" className="bg-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--sgs-navy)] mb-12 tracking-tight">Collaborators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {collaboratorSections.map((section) => (
              <div key={section}>
                <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-2 uppercase tracking-wide">{section}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}