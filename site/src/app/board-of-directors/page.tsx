import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Vote, MapPin, UserCheck, Shield, Crown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Board of Directors - EKRCD Governance",
  description:
    "Meet the EKRCD Board of Directors governing water conservation and soil health programs across Fresno, Kings, and Tulare Counties. Five locally elected members.",
  alternates: { canonical: "/board-of-directors" },
  openGraph: {
    title: "Board of Directors - EKRCD Governance",
    description:
      "Five locally elected board members govern EKRCD's water conservation and soil health programs across Fresno, Kings, and Tulare Counties.",
    url: "https://ekrcd.org/board-of-directors",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "EKRCD Board of Directors",
    description:
      "Meet the five locally elected members governing EKRCD water conservation and soil health programs.",
  },
};

const boardMembers = [
  { name: "Michael Miya", role: "Chairman" },
  { name: "Ed Esajian", role: "Treasurer" },
  { name: "Tony DeGroot", role: "Director" },
  { name: "Paul Newton", role: "Director" },
  { name: "Nathan Heeringa", role: "Associate Director" },
];

const requirements = [
  {
    icon: Vote,
    title: "Registered Voter",
    description:
      "Must be a registered voter in the State of California.",
  },
  {
    icon: MapPin,
    title: "District Resident",
    description:
      "Must reside within the District and either own real property here or have served as an Associate Director for two or more years under the district's rules.",
  },
  {
    icon: UserCheck,
    title: "Designated Agent",
    description:
      "May serve as a formally designated agent of a resident landowner within the District.",
  },
];

function getRoleBadge(role: string) {
  switch (role) {
    case "Chairman":
      return {
        bg: "bg-primary/10",
        text: "text-primary-dark",
        border: "border-primary/20",
        icon: Crown,
      };
    case "Treasurer":
      return {
        bg: "bg-secondary/10",
        text: "text-secondary-dark",
        border: "border-secondary/20",
        icon: Shield,
      };
    case "Associate Director":
      return {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/20",
        icon: Users,
      };
    default:
      return {
        bg: "bg-earth/10",
        text: "text-earth",
        border: "border-earth/20",
        icon: Users,
      };
  }
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ekrcd.org",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Board of Directors",
      item: "https://ekrcd.org/board-of-directors",
    },
  ],
};

export default function BoardOfDirectorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Banner */}
      <section className="relative min-h-[350px] sm:min-h-[500px] flex items-center overflow-hidden pt-[75px]">
        <Image
          src="/images/heroes/hero-board-sunset-field.jpeg"
          alt="Sunset over green agricultural fields, representing EKRCD Board of Directors governance across Central California"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <Users size={16} />
              Governance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              Board of Directors
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Five local members who set district policy, oversee programs, and
              keep EKRCD accountable to the growers and communities it serves.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Statement */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-5">
                  <Shield size={16} />
                  District Governance
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
                  Purpose of the Board
                </h2>
                <p className="text-text-muted leading-relaxed text-base sm:text-lg">
                  The Board acts as the legislative body for EKRCD, a district
                  formed to control runoff, prevent soil erosion, develop and
                  distribute water, and improve land capabilities across its
                  service area. Board members are elected or appointed from
                  within the district and bring direct knowledge of the land and
                  operations they represent.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">5</p>
                  <p className="text-sm text-text-muted mt-1">Board Members</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <p className="text-3xl font-bold text-secondary font-[family-name:var(--font-heading)]">3</p>
                  <p className="text-sm text-text-muted mt-1">Counties Served</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center sm:col-span-2">
                  <p className="text-lg font-bold text-accent font-[family-name:var(--font-heading)]">Locally Elected</p>
                  <p className="text-sm text-text-muted mt-1">Members come from within the district they serve</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Membership Composition */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                Who Can Serve?
              </h2>
              <p className="mt-3 text-white/70 max-w-2xl mx-auto">
                Board candidates must meet at least one of the following
                eligibility requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {requirements.map((req, i) => (
                <div
                  key={req.title}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                      <req.icon size={24} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                      Path {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {req.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {req.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Current Board Members */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
                <Users size={16} />
                Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Meet the Board
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                The people behind the policy - five members who live and work in
                the communities EKRCD serves.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {boardMembers.map((member) => {
                const badge = getRoleBadge(member.role);
                return (
                  <div
                    key={member.name}
                    className="group card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                  >
                    <div className={`h-2 ${badge.bg.replace("/10", "")}`} />
                    <div className="p-8 text-center">
                      <div className={`w-16 h-16 rounded-full ${badge.bg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                        <badge.icon size={28} className={badge.text} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border ${badge.bg} ${badge.text} ${badge.border}`}
                      >
                        {member.role}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Related Links */}
      <ScrollReveal>
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-text-muted text-sm">
              View public{" "}
              <Link
                href="/agendas"
                className="text-primary font-semibold hover:underline"
              >
                board meeting agendas
              </Link>{" "}
              going back to April 2024, or{" "}
              <Link
                href="/contact"
                className="text-secondary font-semibold hover:underline"
              >
                contact the district
              </Link>{" "}
              with questions about governance or programs.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
