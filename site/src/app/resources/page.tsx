import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Globe, Phone, ExternalLink, Droplets, Sprout } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Conservation Resource Partners - EKRCD",
  description:
    "EKRCD's partner agencies - CARCD, Kings River Conservation District, Kings County Farm Bureau, and NRCS - supporting groundwater, soil, and land conservation in Central California.",
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
    name: "California Association of Resource Conservation Districts (CARCD)",
    description:
      "The statewide association representing all 95 resource conservation districts in California. CARCD supports RCDs through advocacy, technical training, and grant program coordination.",
    url: "https://carcd.org/",
    phones: [],
  },
  {
    name: "Kings River Conservation District (KRCD)",
    description:
      "A regional water agency managing Kings River water supplies and groundwater resources across Fresno and Kings Counties. KRCD and EKRCD share overlapping service areas and coordinate on groundwater sustainability work.",
    url: "https://krcd.org/",
    phones: [],
  },
  {
    name: "Kings County Farm Bureau (KCFB)",
    description:
      "The voice of agriculture in Kings County since 1917. The Farm Bureau represents growers of all sizes and crops and hosts educational events, including EKRCD HSP training sessions at their Hanford office.",
    url: "http://kcfb.org/",
    phones: ["(559) 584-3557"],
  },
  {
    name: "Natural Resources Conservation Service (NRCS)",
    description:
      "The federal agency providing technical and financial assistance to private landowners for conservation practices. NRCS field offices in Fresno and Kings Counties work alongside EKRCD on soil health, irrigation, and water quality projects.",
    url: "https://www.nacdnet.org/",
    phones: ["559-585-8732", "559-772-3651"],
  },
];

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
          alt="Vineyard rows on a hillside in Central California, representing EKRCD conservation resource partners"
          fill
          className="object-cover object-center"
          sizes="100vw"
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
        <section className="py-16 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Conservation Partners Supporting EKRCD
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">
                EKRCD does not work in isolation. Federal, state, and local
                agencies each bring different resources and reach to conservation
                work. The organizations listed here are active partners in the
                programs and services EKRCD delivers across Fresno, Kings, and
                Tulare Counties.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Partner Cards */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                    {partner.name}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                    {partner.description}
                  </p>

                  <div className="space-y-3">
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors font-medium"
                    >
                      <Globe size={18} className="shrink-0" />
                      <span>Visit Website</span>
                      <ExternalLink size={14} className="shrink-0" />
                    </a>

                    {partner.phones.length > 0 && (
                      <div className="space-y-1.5">
                        {partner.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors"
                          >
                            <Phone size={16} className="shrink-0" />
                            <span>{phone}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* EKRCD Programs CTA */}
      <ScrollReveal>
        <section className="py-16 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-4">
                EKRCD Programs for Growers
              </h2>
              <p className="text-text-muted mb-8">
                In addition to working with these partner agencies, EKRCD
                administers two CDFA-funded programs directly available to
                growers across the three-county region at no cost.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/wellup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-sm"
                >
                  <Droplets size={18} />
                  WELLUP Water Efficiency Program
                </Link>
                <Link
                  href="/hsp"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all shadow-sm"
                >
                  <Sprout size={18} />
                  Healthy Soils Program
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
