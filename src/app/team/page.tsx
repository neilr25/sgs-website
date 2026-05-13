import Image from "next/image";
import Link from "next/link";
import { getTeamMembers } from "@/lib/content";

function getShortBio(html: string): string {
  // Strip HTML tags and decode entities
  const text = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
  return text.substring(0, 200).trim() + "...";
}

function getNameFromTitle(html: string): string {
  // Extract name from content - look for patterns like "Diane Gilpin" after "What's your job title?"
  const match = html.match(/(?:name[^<]*?:\s*|>)([A-Z][a-z]+\s+[A-Z][a-z]+)/);
  if (match) return match[1];
  return "";
}

function getRoleFromContent(html: string): string {
  // Extract role from content - look for "What's your job title?" answer
  const roleMatch = html.match(/What's your job title\?[^<]*([A-Z][^<]+)/i);
  if (roleMatch) return roleMatch[1].trim();
  return "";
}

function getImageForMember(postName: string): string {
  const imageMap: Record<string, string> = {
    moreaboutdiane: "/images/54e49287e4b062d0771142f2/cdc2be04-70a9-469f-8cbe-9502fb45c2f1/Di+Profile+V2+%284%29.jpg",
    moreaboutian: "/images/54e49287e4b062d0771142f2/609c6b99-4db0-4867-8ea1-f55f97975953/Ian+Profile+V2+%284%29.jpg",
    moreaboutneil: "/images/54e49287e4b062d0771142f2/489b394d-4674-4d11-966b-bcd7e19d0250/Neil+Profile+V2+%281%29.jpg",
    moreaboutfrankie: "/images/54e49287e4b062d0771142f2/d6fb1ed4-6f81-41cd-b51c-d253f928ae41/Frankie+Profile+V2+%282%29.jpg",
    moreaboutisla: "/images/54e49287e4b062d0771142f2/fb500ec3-c0de-4760-be71-d134f0fd357f/Isla+Profile+V2+%281%29.jpg",
    moreaboutthomas: "/images/54e49287e4b062d0771142f2/ec157b9c-f8c9-4d8a-9425-d50291fc5a52/Thomas+Profile+V2+%281%29.jpg",
    moreaboutavinash: "/images/54e49287e4b062d0771142f2/6bd5f151-3ffb-4e9a-b199-ef47a4e02e12/Avinash-min.webp",
    moreaboutjames: "/images/54e49287e4b062d0771142f2/caa97cc2-4e87-4491-b2b0-d85d4705633f/James-min.webp",
    moreaboutjohn: "/images/54e49287e4b062d0771142f2/f4284ec5-5826-4b5e-b7cf-9f6b5748f0e8/John+Stott+1+%281%29.webp",
    moreaboutnadine: "/images/54e49287e4b062d0771142f2/e1e595df-904e-412f-84e8-365d69da4f52/Nadine+Profile+V2+%281%29.jpg",
    moreaboutsam: "/images/54e49287e4b062d0771142f2/5aeb734c-dc0f-40ad-8b62-603fcd7d9e94/Sam-min.webp",
    moreaboutcath: "/images/54e49287e4b062d0771142f2/62180ca2-e2ab-4908-85ec-d8ecd39b0ef5/Cath+-+profile.webp",
    moreaboutandy: "/images/54e49287e4b062d0771142f2/a676c4e5-770c-400b-a4fd-63eb32871be2/Andy+Profile+V2+%283%29.jpg",
    moreaboutsamira: "/images/54e49287e4b062d0771142f2/f2a536d1-75c6-4964-8bb3-a50c222767a0/Samira+Profile+V2+%283%29.jpg",
  };
  return imageMap[postName] || "";
}

// Static team data with known names and roles (extracted from content.json)
const teamMembers = [
  { name: "Diane Gilpin", role: "CEO / Founder", postName: "moreaboutdiane" },
  { name: "Ian Haugh", role: "Director / CFO", postName: "moreaboutian" },
  { name: "Neil Rogers", role: "Chief Operating Officer", postName: "moreaboutneil" },
  { name: "Frankie Haugh", role: "FastReach Commercial Manager", postName: "moreaboutfrankie" },
  { name: "Isla Valenti", role: "Organisational Services Manager", postName: "moreaboutisla" },
  { name: "Avinash Hingorani", role: "COO / HBD, S & I", postName: "moreaboutavinash" },
  { name: "James Mason", role: "Data Scientist", postName: "moreaboutjames" },
  { name: "John Stott", role: "Project Manager", postName: "moreaboutjohn" },
  { name: "Nadine Miller", role: "Marketing Assistant", postName: "moreaboutnadine" },
  { name: "Sam Bourne", role: "Technical Operations Manager", postName: "moreaboutsam" },
  { name: "Thomas Basham", role: "FastRig Technical Development Lead", postName: "moreaboutthomas" },
  { name: "Cath Cooney", role: "Interim Head of Strategic Planning", postName: "moreaboutcath" },
  { name: "Andrew Hay", role: "Business Development Manager", postName: "moreaboutandy" },
  { name: "Samira Nadkarni", role: "Head of Communications", postName: "moreaboutsamira" },
];

// Short bios for each member
const memberBios: Record<string, string> = {
  moreaboutdiane: "Diane Gilpin leads Smart Green Shipping. She has 30+ years of experience developing and leading dynamic innovative business systems solutions in F1 motor racing, yacht racing, financial information and renewables. Diane sits on UK Department for Transport Clean Maritime Council; is a European Green Shipping Expert for EU Waterborne Transport Platform; a BBC 'Woman of Power' 2020; a recipient of InnovateUK's 'Women in Innovation' Award...",
  moreaboutian: "Ian brings 40 years of experience in organisations in industries as diverse as a coach tour operator and the information services division of a major US bank. His focus for the last decade has been on renewable and regenerative technologies, as MD of companies making the step from R&D to commercialisation. At Smart Green Shipping he focuses on financial management and planning...",
  moreaboutneil: "Neil brings experience in both strategic and delivery roles and is responsible for managing Smart Green Shipping's software development. His career has spanned organisations from small startups to large enterprises, using innovative technology at each to solve real-world challenges...",
  moreaboutfrankie: "Frankie is Commercial Manager at Smart Green Shipping, where he is working to develop our customer proposition. Having previously worked in project delivery for Smart Green Shipping during the initial Feasibility Study in 2018/19, he then moved into the software industry before returning here...",
  moreaboutisla: "With over 30 years of experience across the private, public, charity, and community sectors, Isla brings a broad and valuable business perspective to her role at Smart Green Shipping. She leads our organisational services function, overseeing day-to-day operations...",
  moreaboutavinash: "Working for a startup means wearing multiple hats all the time. Work involves overseeing operations, business development, strategy, managing projects, managing technical and engineering matters, product management, and commercialisation...",
  moreaboutjames: "I develop the routing software for our FastRig wing sails. The software estimates the fuel savings that our customers can expect to see when they install our wing sails and use them on different shipping routes around the globe...",
  moreaboutjohn: "Planning, coordinating, compiling scope of work, reports and specifications. Providing technical guidance input and interpretations. Naval Architecture and latterly project manager in technical vessel design...",
  moreaboutnadine: "I handle Smart Green Shipping's social media accounts and website, create content, and ensure that SGS maintains a social media presence. Aside from that, I assist in a bunch of varied tasks that keep me on my toes!",
  moreaboutsam: "Working with our SGS team, key partners, and suppliers to manage and coordinate the design, construction, and delivery of the FastRig prototype...",
  moreaboutthomas: "Looking after the Hunterston test site and the Prototype FastRig wing for duration of the land based tests...",
  moreaboutcath: "Supporting the delivery of SGS's strategic plan, and accelerating capability in leadership and systems transition...",
  moreaboutandy: "Commercialisation of FastRig. Engaging with supply chain to manage delivery. Liaison with clients and external stakeholders...",
  moreaboutsamira: "Supporting SGS's goals with consistent, high-quality messaging and content production...",
};

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[var(--sgs-navy)] text-white overflow-hidden min-h-[45vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/54e49287e4b062d0771142f2/1686670355596-9HVHTVWMLOM7QKZJH9OH/8207_SGS_Website_teampage+Banner+01-min.webp"
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
            <Link
              href="/team"
              className="bg-[var(--sgs-navy)] hover:bg-[var(--sgs-navy-light)] text-white px-6 py-2.5 font-semibold tracking-wide text-sm rounded transition-colors"
            >
              Team
            </Link>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[var(--max-width)] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {teamMembers.map((member) => {
              const imageSrc = getImageForMember(member.postName);
              const bio = memberBios[member.postName] || "";

              return (
                <div key={member.postName} className="text-center group">
                  {imageSrc && (
                    <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[var(--sgs-teal)] transition-colors">
                      <Image
                        src={imageSrc}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-[var(--sgs-navy)] mb-1">{member.name}</h3>
                  <p className="text-sm text-[var(--sgs-teal)] font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-[var(--sgs-gray)] leading-relaxed mb-4">
                    {bio}
                  </p>
                  <Link
                    href={`/${member.postName}`}
                    className="inline-block bg-[var(--sgs-navy)] text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[var(--sgs-navy-light)] transition-colors"
                  >
                    More about {member.name.split(" ")[0]}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}