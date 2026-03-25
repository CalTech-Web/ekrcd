import type { Metadata } from "next";
import { Globe, Phone, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Resource Partners",
  description:
    "EKRCD partner organizations supporting conservation, agriculture, and natural resource management across California's Central Valley.",
  alternates: { canonical: "/resources" },
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

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-texture relative flex items-center bg-gradient-to-br from-earth via-sand-dark to-sand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-earth/80 to-sand-dark/40" />
        <div className="hero-dots absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
            Resource Partners
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl leading-relaxed">
            The agencies and organizations EKRCD collaborates with on
            groundwater, soil, and land conservation work across the region.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <ScrollReveal>
        <section className="py-16 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Our Partners
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
                  className="group card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                    {partner.name}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-4">
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
    </>
  );
}
