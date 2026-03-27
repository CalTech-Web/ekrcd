import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Phone,
  ExternalLink,
  Droplets,
  Sprout,
  Handshake,
  ArrowRight,
  Building2,
  Wheat,
  Shield,
  FileText,
  Users,
  MapPin,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Conservation Resource Partners Central California - EKRCD",
  description:
    "EKRCD conservation resource partners including NRCS, CARCD, Kings River Conservation District, and Kings County Farm Bureau serving Central California.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Conservation Resource Partners - EKRCD",
    description:
      "Federal, state, and local partner agencies supporting EKRCD's groundwater sustainability and soil conservation work across Fresno, Kings, and Tulare Counties.",
    url: "https://ekrcd.org/resources",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "EKRCD Conservation Resource Partners",
    description:
      "Partner agencies including NRCS, CARCD, Kings River Conservation District, and Kings County Farm Bureau.",
  },
};

const partners = [
  {
    name: "Natural Resources Conservation Service (NRCS)",
    abbr: "NRCS",
    scope: "Federal Agency",
    description:
      "The federal agency providing technical and financial assistance to private landowners for conservation practices. NRCS field offices in Fresno and Kings Counties work alongside EKRCD on soil health, irrigation, and water quality projects.",
    highlight: "Technical assistance and cost-share programs for growers",
    url: "https://www.nrcs.usda.gov/",
    phones: ["559-585-8732", "559-772-3651"],
    icon: Shield,
    color: "primary" as const,
  },
  {
    name: "California Association of Resource Conservation Districts (CARCD)",
    abbr: "CARCD",
    scope: "Statewide Network",
    description:
      "The statewide association representing all 95 resource conservation districts in California. CARCD supports RCDs through advocacy, technical training, and grant program coordination.",
    highlight: "Advocacy, training, and grant coordination for all 95 RCDs",
    url: "https://carcd.org/",
    phones: [],
    icon: Building2,
    color: "secondary" as const,
  },
  {
    name: "Kings River Conservation District (KRCD)",
    abbr: "KRCD",
    scope: "Regional Water Agency",
    description:
      "A regional water agency managing Kings River water supplies and groundwater resources across Fresno and Kings Counties. KRCD and EKRCD share overlapping service areas and coordinate on groundwater sustainability work.",
    highlight: "Groundwater sustainability and water supply management",
    url: "https://krcd.org/",
    phones: [],
    icon: Droplets,
    color: "accent" as const,
  },
  {
    name: "Kings County Farm Bureau (KCFB)",
    abbr: "KCFB",
    scope: "Local Agriculture",
    description:
      "The voice of agriculture in Kings County since 1917. The Farm Bureau represents growers of all sizes and crops and hosts educational events, including EKRCD HSP training sessions at their Hanford office.",
    highlight: "Grower representation and educational event hosting since 1917",
    url: "https://kcfb.org/",
    phones: ["(559) 584-3557"],
    icon: Wheat,
    color: "primary" as const,
  },
];

const colorMap = {
  primary: {
    bar: "bg-primary",
    badge: "bg-primary/10 text-primary border-primary/20",
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    link: "text-primary hover:text-primary-light",
  },
  secondary: {
    bar: "bg-secondary",
    badge: "bg-secondary/10 text-secondary border-secondary/20",
    iconBg: "bg-secondary/10",
    iconText: "text-secondary",
    link: "text-secondary hover:text-secondary-light",
  },
  accent: {
    bar: "bg-accent",
    badge: "bg-accent/10 text-accent border-accent/20",
    iconBg: "bg-accent/10",
    iconText: "text-accent",
    link: "text-accent hover:text-accent-light",
  },
};

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
      name: "Resource Partners",
      item: "https://ekrcd.org/resources",
    },
  ],
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative min-h-[350px] sm:min-h-[500px] flex items-center overflow-hidden pt-[75px]">
        <Image
          src="/images/heroes/hero-resources-vineyard.jpeg"
          alt="Vineyard hillside in Central California - EKRCD conservation resource partners serving Fresno, Kings, and Tulare Counties"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <Globe size={16} />
              Partner Agencies
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              Resource Partners
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              The agencies and organizations EKRCD collaborates with on
              groundwater, soil, and land conservation work across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-5">
                  <Handshake size={16} />
                  Collaborative Conservation
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                  Stronger Together
                </h2>
                <p className="text-text-muted leading-relaxed text-base sm:text-lg">
                  EKRCD does not work in isolation. Federal agencies like the{" "}
                  <a
                    href="https://www.nrcs.usda.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    USDA Natural Resources Conservation Service
                  </a>
                  , state, and local
                  agencies each bring different resources and reach to
                  conservation work. These partnerships make it possible to
                  deliver free programs to growers across Fresno, Kings, and
                  Tulare Counties.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <p className="text-3xl font-bold text-primary font-[family-name:var(--font-heading)]">
                    4
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    Key Partners
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <p className="text-3xl font-bold text-secondary font-[family-name:var(--font-heading)]">
                    3
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    Levels of Government
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center col-span-2">
                  <p className="text-lg font-bold text-accent font-[family-name:var(--font-heading)]">
                    Federal, State &amp; Local
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    A network that spans from Washington, D.C. to the fields of
                    Kings County
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Partner Cards */}
      <ScrollReveal>
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                Who We Work With
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Our Resource Partners
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto leading-relaxed">
                Each partner brings specialized expertise and funding to the
                conservation work EKRCD delivers on the ground.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner) => {
                const colors = colorMap[partner.color];
                const IconComp = partner.icon;
                return (
                  <div
                    key={partner.name}
                    className="group card-hover bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
                  >
                    {/* Colored header bar */}
                    <div className={`h-1.5 ${colors.bar}`} />

                    {/* Card header */}
                    <div className="px-8 pt-7 pb-0 flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <IconComp size={28} className={colors.iconText} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colors.badge}`}
                          >
                            {partner.scope}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-heading)] leading-snug">
                          {partner.abbr}
                        </h3>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="px-8 pt-4 pb-8 flex flex-col flex-1">
                      <p className="text-sm font-medium text-foreground mb-2">
                        {partner.name}
                      </p>
                      <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                        {partner.description}
                      </p>

                      {/* Highlight callout */}
                      <div className="bg-sand rounded-xl px-4 py-3 mb-5">
                        <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-1">
                          Key Contribution
                        </p>
                        <p className="text-sm text-foreground font-medium">
                          {partner.highlight}
                        </p>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 ${colors.link} transition-colors font-medium text-sm`}
                        >
                          <Globe size={16} className="shrink-0" />
                          <span>Visit Website</span>
                          <ExternalLink size={14} className="shrink-0" />
                        </a>

                        {partner.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                            className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors text-sm"
                          >
                            <Phone size={14} className="shrink-0" />
                            <span>{phone}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* EKRCD Programs CTA - Dark Background */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                EKRCD Programs for Growers
              </h2>
              <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                Beyond our partnerships, EKRCD administers two CDFA-funded
                programs directly available to growers across the three-county
                region - completely free of charge.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* WELLUP Card */}
              <div className="group flex flex-col rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 overflow-hidden hover:bg-white/15 transition-colors">
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <Droplets size={28} className="text-secondary" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-secondary/20 text-secondary text-xs font-semibold px-3 py-1 rounded-full">
                        Water Efficiency
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                    WELLUP Program
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Free pump tests, irrigation system evaluations, and
                    one-on-one technical assistance for growers of any acreage.
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="text-2xl font-bold text-secondary font-[family-name:var(--font-heading)]">
                      $500K
                    </span>
                    <span className="text-xs text-white/50 uppercase tracking-wider">
                      CDFA Funded
                    </span>
                  </div>
                  <Link
                    href="/wellup"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-light transition-colors self-start"
                  >
                    Learn More About WELLUP
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* HSP Card */}
              <div className="group flex flex-col rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 overflow-hidden hover:bg-white/15 transition-colors">
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Sprout size={28} className="text-accent" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                        Soil Health
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                    Healthy Soils Program
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Funded compost application and cover cropping for farms
                    across the region, improving soil carbon sequestration and
                    water retention.
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="text-2xl font-bold text-accent font-[family-name:var(--font-heading)]">
                      $5M
                    </span>
                    <span className="text-xs text-white/50 uppercase tracking-wider">
                      CDFA Grant
                    </span>
                  </div>
                  <Link
                    href="/hsp"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-light transition-colors self-start"
                  >
                    Learn More About HSP
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Related Links */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                Explore More
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Related Pages
              </h2>
              <p className="mt-3 text-text-muted max-w-xl mx-auto">
                Learn more about how EKRCD serves the Central Valley community.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: "Board of Directors",
                  description:
                    "Meet the five locally elected members who guide EKRCD policy.",
                  href: "/board-of-directors",
                  cta: "Meet the Board",
                  icon: Users,
                  color: "primary" as const,
                },
                {
                  title: "Meeting Agendas",
                  description:
                    "Browse the full archive of board meeting agendas and notices.",
                  href: "/agendas",
                  cta: "Browse Agendas",
                  icon: FileText,
                  color: "secondary" as const,
                },
                {
                  title: "WELLUP Program",
                  description:
                    "Free pump testing and irrigation assistance for local growers.",
                  href: "/wellup",
                  cta: "Explore WELLUP",
                  icon: Droplets,
                  color: "accent" as const,
                },
                {
                  title: "Contact Us",
                  description:
                    "Questions about a program or how to get involved? Reach out.",
                  href: "/contact",
                  cta: "Get in Touch",
                  icon: MapPin,
                  color: "primary" as const,
                },
              ].map((link) => {
                const lColors = colorMap[link.color];
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 card-hover overflow-hidden"
                  >
                    <div
                      className={`${lColors.iconBg} p-5 flex items-center gap-3`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl ${lColors.iconBg} flex items-center justify-center shrink-0`}
                      >
                        <link.icon
                          size={22}
                          className={lColors.iconText}
                        />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">
                        {link.title}
                      </h3>
                    </div>
                    <div className="px-5 pt-3 pb-5 flex flex-col flex-1">
                      <p className="text-text-muted text-sm leading-relaxed flex-1">
                        {link.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all">
                        {link.cta}
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
