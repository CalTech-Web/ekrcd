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
  ArrowRight,
  TrendingUp,
  TreePine,
  Wheat,
  Layers,
  Shovel,
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
          priority
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
        <section className="py-20 sm:py-24 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full text-accent text-sm font-medium mb-5">
                <Sprout size={16} />
                CDFA-Funded Initiative
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                Program Overview
              </h2>
              <p className="text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
                EKRCD received $5 million from the California Department of Food
                and Agriculture through the Healthy Soils Program - one of only
                14 funded groups statewide. The program runs through summer 2028.
                Round 1 is complete and Round 2 applications are now closed.
              </p>
            </div>

            {/* Highlight Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
              <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                  <DollarSign size={32} className="text-accent" />
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-accent font-[family-name:var(--font-heading)]">
                  $5M
                </p>
                <p className="mt-2 text-text-muted text-sm font-medium">
                  Total CDFA Funding
                </p>
              </div>
              <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                  <MapPin size={32} className="text-secondary" />
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-secondary font-[family-name:var(--font-heading)]">
                  3
                </p>
                <p className="mt-2 text-text-muted text-sm font-medium">
                  Counties Served
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Fresno, Kings, and Tulare
                </p>
              </div>
              <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp size={32} className="text-primary" />
                </div>
                <p className="text-4xl sm:text-5xl font-bold text-primary font-[family-name:var(--font-heading)]">
                  $200K
                </p>
                <p className="mt-2 text-text-muted text-sm font-medium">
                  Max Per Farm Project
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <p className="text-text-muted leading-relaxed mb-4">
                Approved farms receive direct payments to implement practices
                that build soil organic matter, reduce greenhouse gas emissions,
                and sequester carbon. Compost application, cover crops, mulching,
                residue management, and reduced tillage all qualify.
              </p>
              <p className="text-text-muted leading-relaxed">
                EKRCD is the administering entity for growers in portions of
                Fresno, Kings, and Tulare Counties. The program supports
                California&apos;s climate-smart agriculture goals while helping
                local growers invest in long-term soil health.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Round 1 Results - Dark Background */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm font-medium mb-5">
                <BarChart3 size={16} />
                Completed
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                Round 1 Results
              </h2>
              <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                78 applications came in. EKRCD selected 20 projects and awarded
                $2.6 million to farms across the three-county region.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
              {round1Stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-8 text-center flex flex-col items-center hover:bg-white/15 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Icon size={28} className="text-accent-light" />
                    </div>
                    <p className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-heading)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-white/60 text-sm font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Funded Practices */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white font-[family-name:var(--font-heading)] flex items-center justify-center gap-3">
                  <Leaf size={22} className="text-accent-light" />
                  Funded Practices
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { practice: "Compost application", icon: Layers },
                  { practice: "Cover crops", icon: Wheat },
                  { practice: "Mulching", icon: TreePine },
                  { practice: "Residue management", icon: Leaf },
                  { practice: "Tillage", icon: Shovel },
                ].map((item) => {
                  const PracticeIcon = item.icon;
                  return (
                    <div
                      key={item.practice}
                      className="flex flex-col items-center gap-3 rounded-xl bg-white/10 border border-white/10 p-5 text-center hover:bg-white/15 transition-colors"
                    >
                      <PracticeIcon size={24} className="text-accent-light" />
                      <span className="text-white text-sm font-medium">
                        {item.practice}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Program Timeline - Numbered Steps */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Timeline
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                Key milestones from the program launch through implementation.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/40 to-accent/10" />
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6 group">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                        <span className="text-white text-sm font-bold">
                          {i + 1}
                        </span>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                          {item.date}
                        </p>
                        <p className="text-foreground font-medium">
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
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                In-person sessions to learn about program requirements and the
                application process.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-accent/10 px-8 py-5 flex items-center gap-4 border-b border-accent/10">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                    <Calendar size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-heading)]">
                      March 4
                    </h3>
                    <p className="text-text-muted text-sm">
                      Sessions at 10:00 AM and 3:00 PM
                    </p>
                  </div>
                </div>
                <div className="px-8 py-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {resources.map((resource, i) => (
                <Link
                  key={i}
                  href={`/files/hsp/${resource.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-hover flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-accent/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <FileText size={22} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base leading-snug">
                      {resource.title}
                    </p>
                    <p className="text-text-muted text-xs mt-1 flex items-center gap-1">
                      <Download size={12} />
                      PDF
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-text-muted group-hover:text-accent shrink-0 transition-colors group-hover:translate-x-1 duration-200"
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
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                On-the-ground results from the Healthy Soils Program across the
                Central Valley.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden shadow-sm group ${
                    i === 0
                      ? "col-span-2 row-span-2 aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={
                      i === 0
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 50vw, 25vw"
                    }
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs sm:text-sm font-medium leading-snug">
                      {img.alt.split(" - ")[0]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA - Contact */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-primary-dark relative overflow-hidden">
          {/* Decorative dots */}
          <div className="absolute inset-0 hero-dots opacity-30" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
                Questions About the Program?
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Whether you want to know if your farm qualifies or need help
                understanding the process, our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-colors shadow-lg shadow-accent/30 text-lg"
                >
                  <Mail size={20} />
                  Send Us a Message
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+15593094030"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-lg"
                >
                  <Phone size={20} />
                  (559) 309-4030
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white/60 text-sm">
                <a
                  href="mailto:info@ekrcd.org"
                  className="hover:text-white transition-colors"
                >
                  info@ekrcd.org
                </a>
                <span className="hidden sm:inline">|</span>
                <span>870 Greenfield Avenue, Hanford, CA 93230</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Cross-promote other programs */}
      <ScrollReveal>
        <section className="py-16 bg-sand">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-text-muted leading-relaxed">
              Also looking to reduce water use on your operation? Learn about
              the{" "}
              <Link
                href="/wellup"
                className="text-secondary font-semibold hover:underline"
              >
                WELLUP water efficiency program
              </Link>
              , which offers free pump tests and irrigation evaluations. You can
              also review our{" "}
              <Link
                href="/resources"
                className="text-primary font-semibold hover:underline"
              >
                resource partners
              </Link>{" "}
              for additional support agencies, check{" "}
              <Link
                href="/agendas"
                className="text-primary font-semibold hover:underline"
              >
                board meeting agendas
              </Link>{" "}
              for program updates, or meet the{" "}
              <Link
                href="/board-of-directors"
                className="text-primary font-semibold hover:underline"
              >
                board of directors
              </Link>{" "}
              who oversee the Healthy Soils Program.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
