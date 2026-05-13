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

const collaboratorSections = [
  {
    title: "Technical",
    logos: [
      { src: "/images/54e49287e4b062d0771142f2/62275b86-7396-4081-85c6-2ab016f186b6/hyd-logo.webp", alt: "Humphreys Yacht Design" },
      { src: "/images/54e49287e4b062d0771142f2/f13fa258-4e29-47a5-be08-fc6a46d8b0ba/lloyd-register-logo.webp", alt: "Lloyd's Register" },
      { src: "/images/54e49287e4b062d0771142f2/9887ac7b-0115-4a1f-ba2a-3afe72042c09/imeche-logo.webp", alt: "Institution of Mechanical Engineers" },
      { src: "/images/54e49287e4b062d0771142f2/01b4385e-3b22-485e-aeb6-f11b403a4b21/tyndall-logo.webp", alt: "Tyndall Centre" },
      { src: "/images/54e49287e4b062d0771142f2/d8c9e25a-ecea-4d3a-a6df-19ff56afca4e/uos-logo.webp", alt: "University of Southampton" },
      { src: "/images/54e49287e4b062d0771142f2/7025fa58-7211-4dd9-92d9-0c546aa5f37f/nts-logo.webp", alt: "Nuclear Transport Solutions" },
      { src: "/images/54e49287e4b062d0771142f2/8daaf7dd-998e-437e-96c4-1c7be3f6b7b3/caley-logo.webp", alt: "Caley THREE60 Energy" },
      { src: "/images/54e49287e4b062d0771142f2/fe757faa-1464-469d-839a-9f7140e9a048/argo-logo.webp", alt: "Argo Engineering Solutions" },
    ],
  },
  {
    title: "Commercial",
    logos: [
      { src: "/images/54e49287e4b062d0771142f2/2f20b871-76e3-489e-8b65-422d729a61aa/mol-logo.webp", alt: "MOL Drybulk" },
      { src: "/images/54e49287e4b062d0771142f2/6cebe318-d76c-43c5-a27d-ce2d3c633b06/drax-logo.webp", alt: "Drax" },
      { src: "/images/54e49287e4b062d0771142f2/0595272f-3320-4fcc-bbb0-22d53e9883ca/ultrabulk-logo.webp", alt: "Ultrabulk" },
      { src: "/images/54e49287e4b062d0771142f2/3a702408-a632-4861-802d-6d9fd387335a/peel-ports-logo.jpg", alt: "Peel Ports Group" },
      { src: "/images/54e49287e4b062d0771142f2/b64e9c90-1aad-437d-9e5d-b41cca93c97b/gallagher-logo.webp", alt: "Gallagher" },
      { src: "/images/54e49287e4b062d0771142f2/759a775b-60ca-48fe-9927-f39e060ff5ca/houlder-logo.webp", alt: "Houlder" },
      { src: "/images/54e49287e4b062d0771142f2/55394217-99bd-4204-9173-dbd8487643de/wtw-logo.webp", alt: "Willis Towers Watson" },
      { src: "/images/54e49287e4b062d0771142f2/2b56c7ca-27c7-46fa-b963-53e77c1cab2a/malin-group-logo.webp", alt: "Malin Group" },
      { src: "/images/54e49287e4b062d0771142f2/24e9fca3-a0cc-4b63-8870-8ada61213719/group-partners-logo.webp", alt: "Group Partners" },
      { src: "/images/54e49287e4b062d0771142f2/7635cd70-7099-45d9-8130-39fed396637b/pixelmill-logo.jpg", alt: "PixelMill" },
    ],
  },
  {
    title: "Strategic",
    logos: [
      { src: "/images/54e49287e4b062d0771142f2/ee81e600-2710-4085-8668-b937d8625141/esa-logo.jpg", alt: "European Space Agency" },
      { src: "/images/54e49287e4b062d0771142f2/e3c09fcf-e1ce-44f7-97d9-409d704b0a76/scottish-enterprise-logo.webp", alt: "Scottish Enterprise" },
      { src: "/images/54e49287e4b062d0771142f2/af107200-cc52-46a7-96ba-519bfcaca814/idea-logo.webp", alt: "iDEA" },
      { src: "/images/54e49287e4b062d0771142f2/9c6906c2-ab39-43a5-b064-67d9fed4850f/uk-innovation-logo.webp", alt: "UK Innovation & Science Seed Fund" },
      { src: "/images/54e49287e4b062d0771142f2/d8a65550-800c-44ab-b6ad-5845bcf843ad/funded-by-uk-gov.jpg", alt: "Funded by UK Government" },
      { src: "/images/54e49287e4b062d0771142f2/66469af0-39c4-4b07-8251-ad53143255b4/sose-logo.webp", alt: "South of Scotland Enterprise" },
      { src: "/images/54e49287e4b062d0771142f2/6c7eeb88-e42e-435a-a96e-e418bebdb199/international-futures-logo.jpg", alt: "International Futures Forum" },
    ],
  },
];

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
          <div className="space-y-12">
            {collaboratorSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold text-[var(--sgs-navy)] mb-6 uppercase tracking-wide">{section.title}</h3>
                <div className="flex flex-wrap gap-6 items-center">
                  {section.logos.map((logo) => (
                    <div key={logo.alt} className="h-16 flex items-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={60}
                        className="h-12 md:h-14 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}