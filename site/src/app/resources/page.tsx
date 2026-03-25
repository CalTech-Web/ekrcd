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
    url: "https://carcd.org/",
    phones: [],
  },
  {
    name: "Kings River Conservation District (KRCD)",
    url: "https://krcd.org/",
    phones: [],
  },
  {
    name: "Kings County Farm Bureau (KCFB)",
    url: "http://kcfb.org/",
    phones: ["(559) 584-3557"],
  },
  {
    name: "Natural Resources Conservation Service (NRCS)",
    url: "https://www.nacdnet.org/",
    phones: ["559-585-8732", "559-772-3651"],
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center bg-gradient-to-br from-earth via-sand-dark to-sand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-earth/80 to-sand-dark/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
            Resource Partners
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl leading-relaxed">
            Organizations we work alongside to advance conservation, water
            sustainability, and agricultural stewardship in the Central Valley.
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
                EKRCD collaborates with federal, state, and local organizations
                dedicated to natural resource conservation. These partners
                provide technical expertise, funding opportunities, and
                educational resources that strengthen our shared mission of
                protecting land, water, and soil across the region.
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
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4 font-[family-name:var(--font-heading)]">
                    {partner.name}
                  </h3>

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
