import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  AlertCircle,
  Clock,
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BarChart3,
  DollarSign,
  Users,
  Leaf,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Healthy Soils Program - Grants Up to $200,000",
  description:
    "EKRCD's CDFA Healthy Soils Program funds compost, cover crops, mulching, and other soil health practices. Grants up to $200,000 per farm in Fresno, Kings, and Tulare Counties.",
  alternates: { canonical: "/hsp" },
  openGraph: {
    title: "Healthy Soils Program - Grants Up to $200,000 | EKRCD",
    description:
      "CDFA-funded soil health grants up to $200,000 per farm for compost application, cover crops, mulching, and more. Serving growers in Fresno, Kings, and Tulare Counties.",
    url: "https://ekrcd.org/hsp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthy Soils Program - Grants Up to $200,000 | EKRCD",
    description:
      "CDFA-funded grants up to $200,000 for on-farm soil health projects across Fresno, Kings, and Tulare Counties.",
  },
};

const round1Stats = [
  {
    value: "78",
    label: "Applications Received",
    icon: Users,
  },
  {
    value: "20",
    label: "Farm Projects Funded",
    icon: Sprout,
  },
  {
    value: "$2.6M",
    label: "Awarded",
    icon: DollarSign,
  },
];

const round1Practices = [
  "Compost application",
  "Cover crops",
  "Mulching",
  "Residue management",
  "Tillage",
];

const timeline = [
  { date: "May 2024", label: "Round 1 opens" },
  { date: "Summer/Fall 2024", label: "Ranking and CDFA submission" },
  { date: "January 2025", label: "Approved projects begin implementation" },
  { date: "May 1, 2025", label: "Round 2 application period opens" },
  { date: "June 30, 2025", label: "Round 2 application deadline (60-day window)" },
  { date: "Summer 2025", label: "Ranking and submission" },
  { date: "Fall 2025", label: "Approved projects begin implementation" },
  { date: "Summer 2028", label: "Funding ends" },
];

const resources = [
  {
    title: "Eligible Practices and Payment Rate Examples",
    filename: "EKRCD-CDFA-APPENDIX-A.pdf",
  },
  {
    title: "SDFR Definition",
    filename: "CDFA-SDFR-Definition-2025.pdf",
  },
  {
    title: "Verification Requirements",
    filename: "EKRCD-HSP-VERIFICATION-REQUIREMENTS.pdf",
  },
  {
    title: "HSP Application",
    filename: "EKRCD-RD2-HSP-APPLICATION.pdf",
  },
  {
    title: "Request for Grant Applications",
    filename: "EKRCD-HSP-R2_RGA.pdf",
  },
  {
    title: "Press Release",
    filename: "EKRCD-PR-HSP-R2-NEW.pdf",
  },
];

const galleryImages = [
  {
    src: "/images/soil.jpg",
    alt: "Healthy soil organic matter - EKRCD Healthy Soils Program result",
  },
  {
    src: "/images/citrus-orchard.jpg",
    alt: "Citrus orchard in Kings County qualifying for Healthy Soils Program grants",
  },
  {
    src: "/images/vineyard.jpg",
    alt: "Vineyard cover crop rows - eligible practice under CDFA Healthy Soils Program",
  },
  {
    src: "/images/compost.jpg",
    alt: "Compost application on California farmland - EKRCD Healthy Soils Program funded practice",
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
      name: "Healthy Soils Program",
      item: "https://ekrcd.org/hsp",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  name: "Healthy Soils Program",
  alternateName: "HSP",
  description:
    "CDFA-funded soil health grant program providing up to $200,000 per farm project for practices including compost application, cover crops, mulching, and residue management across Fresno, Kings, and Tulare Counties.",
  provider: {
    "@type": "GovernmentOrganization",
    name: "Excelsior-Kings River Resource Conservation District",
    alternateName: "EKRCD",
    url: "https://ekrcd.org",
  },
  serviceType: "Agricultural Soil Health Grant",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Fresno County, CA" },
    { "@type": "AdministrativeArea", name: "Kings County, CA" },
    { "@type": "AdministrativeArea", name: "Tulare County, CA" },
  ],
  url: "https://ekrcd.org/hsp",
};

export default function HspPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbJsonLd, serviceJsonLd]),
        }}
      />
      {/* Hero */}
      <section className="relative min-h-[350px] sm:min-h-[500px] flex items-center overflow-hidden pt-[75px]">
        <Image
          src="/images/heroes/hero-hsp-corn-field.jpeg"
          alt="Rows of corn growing in a California field, representing EKRCD Healthy Soils Program supporting on-farm soil health"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <Sprout size={16} />
              CDFA Healthy Soils Program
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              Healthy Soils Program
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              $5 million from CDFA to fund compost, cover crops, mulching, and
              other soil health practices on working farms across Fresno, Kings,
              and Tulare Counties. Projects pay up to $200,000 per farm.
            </p>
          </div>
        </div>
      </section>

      {/* Notice Banner */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-3 text-amber-800 text-center">
            <AlertCircle size={20} className="shrink-0" />
            <p className="text-sm sm:text-base font-medium">
              <span className="font-bold">Notice:</span> Application
              solicitation for round 2 of the EKRCD Healthy Soils Program is now
              closed.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <ScrollReveal>
        <section className="py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                Program Overview
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-4">
                EKRCD received{" "}
                <span className="font-semibold text-foreground">
                  $5 million
                </span>{" "}
                from the California Department of Food and Agriculture through
                the Healthy Soils Program. EKRCD is one of{" "}
                <span className="font-semibold text-foreground">
                  14 funded groups
                </span>{" "}
                statewide and is the administering entity for growers in
                portions of Fresno, Kings, and Tulare Counties.
              </p>
              <p className="text-lg text-text-muted leading-relaxed mb-4">
                Approved farms receive direct payments up to{" "}
                <span className="font-semibold text-foreground">
                  $200,000 per project
                </span>{" "}
                to implement practices that build soil organic matter, reduce
                greenhouse gas emissions, and sequester carbon. Compost
                application, cover crops, mulching, residue management, and
                reduced tillage all qualify.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                The program runs through summer 2028. Round 1 is complete and
                Round 2 applications are now closed.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Round 1 Results */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Round 1 Results
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                78 applications came in. EKRCD selected 20 projects and awarded
                $2.6 million to farms across the three-county region.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              {round1Stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <p className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-text-muted text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-accent/5 rounded-2xl p-8 border border-accent/10">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf size={22} className="text-accent" />
                  <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-heading)]">
                    Funded Practices
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {round1Practices.map((practice) => (
                    <span
                      key={practice}
                      className="px-4 py-2 bg-white text-foreground text-sm font-medium rounded-full border border-accent/20"
                    >
                      {practice}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Program Timeline */}
      <ScrollReveal>
        <section className="py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Timeline
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/20" />
                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                        <Clock size={20} className="text-white" />
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                          {item.date}
                        </p>
                        <p className="mt-1 text-foreground font-medium">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Training Events */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Training Events
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Calendar size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-heading)]">
                      March 4
                    </h3>
                    <p className="text-text-muted text-sm mt-1">
                      Sessions at 10:00 AM and 3:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-text-muted">
                  <MapPin size={18} className="shrink-0 mt-0.5 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">
                      Kings County Farm Bureau Office
                    </p>
                    <p className="text-sm">
                      870 Greenfield Ave, Hanford, CA 93230
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Technical Resources */}
      <ScrollReveal>
        <section className="py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Technical Resources
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                Official program documents, eligibility guides, and the Round 2
                application and request for grant applications.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {resources.map((resource, i) => (
                <Link
                  key={i}
                  href={`/files/hsp/${resource.filename}`}
                  target="_blank"
                  className="group card-hover flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-accent/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FileText size={20} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm sm:text-base truncate">
                      {resource.title}
                    </p>
                    <p className="text-text-muted text-xs mt-0.5">
                      {resource.filename}
                    </p>
                  </div>
                  <Download
                    size={18}
                    className="text-text-muted group-hover:text-accent shrink-0 transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Photo Gallery */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Gallery
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={75}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal>
        <section className="py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                Get in Touch
              </h2>
              <p className="text-text-muted mb-8">
                Questions about whether your farm qualifies or what to expect
                from the process?{" "}
                <Link
                  href="/contact"
                  className="text-accent font-semibold hover:underline"
                >
                  Send us a message
                </Link>{" "}
                or reach us directly below.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:info@ekrcd.org"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-foreground font-semibold rounded-xl hover:shadow-md transition-all border border-gray-200"
                >
                  <Mail size={18} className="text-accent" />
                  info@ekrcd.org
                </a>
                <a
                  href="tel:+15593094030"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-foreground font-semibold rounded-xl hover:shadow-md transition-all border border-gray-200"
                >
                  <Phone size={18} className="text-accent" />
                  (559) 309-4030
                </a>
              </div>
              <p className="mt-8 text-sm text-text-muted">
                Also looking to reduce water use on your operation? Learn about
                the{" "}
                <Link
                  href="/wellup"
                  className="text-secondary font-semibold hover:underline"
                >
                  WELLUP water efficiency program
                </Link>
                , which offers free pump tests and irrigation evaluations. You
                can also review our{" "}
                <Link
                  href="/resources"
                  className="text-primary font-semibold hover:underline"
                >
                  resource partners
                </Link>{" "}
                for additional support agencies in the region.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
