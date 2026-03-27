import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  CheckCircle,
  Download,
  Mail,
  Phone,
  Target,
  Gauge,
  GraduationCap,
  DollarSign,
  MapPin,
  Sparkles,
  ArrowRight,
  CalendarRange,
  ShieldCheck,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "WELLUP Program - Free Pump Efficiency Testing Central Valley",
  description:
    "Free pump efficiency testing and irrigation evaluation for Central Valley growers. CDFA-funded WELLUP program serves Fresno, Kings, and Tulare Counties.",
  alternates: { canonical: "/wellup" },
  openGraph: {
    title: "WELLUP Water Efficiency Program - Free Pump Tests | EKRCD",
    description:
      "Free pump efficiency testing and irrigation technical assistance for growers in Fresno, Kings, and Tulare Counties. No minimum acreage required.",
    url: "https://ekrcd.org/wellup",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WELLUP Water Efficiency Program - Free Pump Tests | EKRCD",
    description:
      "Free pump efficiency testing and irrigation assistance for Central Valley growers. CDFA-funded, no cost to participate.",
  },
};

const objectives = [
  {
    number: 1,
    title: "On-Farm Technical Assistance",
    description:
      "A trained specialist visits your operation to evaluate the irrigation system, identify inefficiencies, and put a written report with concrete recommendations in your hands.",
    icon: Target,
  },
  {
    number: 2,
    title: "Pump Efficiency Testing",
    description:
      "Field testing of your irrigation pumps to measure actual performance against rated output. Results show you exactly where energy and water are being lost.",
    icon: Gauge,
  },
  {
    number: 3,
    title: "Training and Education",
    description:
      "Workshops and resources covering water use efficiency, nutrient management, and the latest irrigation technology available to growers in the region.",
    icon: GraduationCap,
  },
];

const benefits = [
  "FREE pump efficiency tests",
  "Up to 6 tests per standard producer",
  "Up to 10 tests for Socially Disadvantaged Farmers and Ranchers (SDFR)",
  "Available regardless of acreage or farm size",
  "Available for irrigation wells only",
  "Must complete pump efficiency test to access additional services",
];

const timeline = [
  { date: "Spring 2024", label: "Program intake begins" },
  { date: "Spring 2026", label: "Grant term ends" },
];

const galleryImages = [
  {
    src: "/images/wellup-1.jpg",
    alt: "WELLUP program - agricultural irrigation system evaluation in Central Valley",
  },
  {
    src: "/images/wellup-2.jpg",
    alt: "WELLUP program - pump efficiency testing for groundwater conservation",
  },
  {
    src: "/images/wellup-3.jpg",
    alt: "WELLUP program - on-farm technical assistance for water efficiency",
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
      name: "WELLUP Program",
      item: "https://ekrcd.org/wellup",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  name: "WELLUP Water Efficiency Technical Assistance Program",
  alternateName: "WELLUP",
  description:
    "Free pump efficiency testing and on-farm irrigation technical assistance for growers in Fresno, Kings, and Tulare Counties. Funded by CDFA through a $500,000 Water Efficiency Technical Assistance grant.",
  provider: {
    "@type": "GovernmentOrganization",
    name: "Excelsior-Kings River Resource Conservation District",
    alternateName: "EKRCD",
    url: "https://ekrcd.org",
  },
  serviceType: "Agricultural Water Efficiency",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Fresno County, CA" },
    { "@type": "AdministrativeArea", name: "Kings County, CA" },
    { "@type": "AdministrativeArea", name: "Tulare County, CA" },
  ],
  isAccessibleForFree: true,
  url: "https://ekrcd.org/wellup",
};

export default function WellupPage() {
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
          src="/images/heroes/hero-wellup-irrigation.jpeg"
          alt="Free pump efficiency testing and irrigation evaluation in Central Valley - EKRCD WELLUP water efficiency program"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <Droplets size={16} />
              CDFA Water Efficiency Technical Assistance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              WELLUP Program
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              A $500,000 CDFA program bringing free pump tests and hands-on
              irrigation help to farms of every size across Fresno, Kings, and
              Tulare Counties.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview - stat highlights with split layout */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - text content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  <Droplets size={16} />
                  CDFA-Funded Program
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                  Program Overview
                </h2>
                <p className="text-lg text-text-muted leading-relaxed mb-4">
                  EKRCD received $500,000 from the California Department of Food
                  and Agriculture (CDFA) through the{" "}
                  <a
                    href="https://www.cdfa.ca.gov/oars/technical/weta.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-semibold hover:underline"
                  >
                    Water Efficiency Technical Assistance Program
                  </a>
                  . The grant runs from spring 2024 through
                  spring 2026 and covers growers in portions of Fresno, Kings,
                  and Tulare Counties.
                </p>
                <p className="text-lg text-text-muted leading-relaxed">
                  There is no cost to participate and no minimum acreage
                  requirement. Every grower in the service area is eligible.
                </p>
              </div>

              {/* Right - stat cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <DollarSign size={28} className="text-secondary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                    $500K
                  </p>
                  <p className="text-sm text-text-muted mt-1">CDFA Grant Funding</p>
                </div>

                <div className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin size={28} className="text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                    3
                  </p>
                  <p className="text-sm text-text-muted mt-1">Counties Served</p>
                </div>

                <div className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={28} className="text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                    FREE
                  </p>
                  <p className="text-sm text-text-muted mt-1">No Cost to Growers</p>
                </div>

                <div className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Users size={28} className="text-secondary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                    Any Size
                  </p>
                  <p className="text-sm text-text-muted mt-1">No Acreage Minimum</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Objectives - cards with colored top accent and number badges */}
      <ScrollReveal>
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Objectives
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                Every service in the program ties back to one of three goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((obj) => {
                const Icon = obj.icon;
                return (
                  <div
                    key={obj.number}
                    className="card-hover flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                  >
                    {/* Colored top strip */}
                    <div className="h-2 bg-gradient-to-r from-secondary to-secondary-light" />
                    <div className="p-8 flex flex-col flex-1">
                      {/* Number badge and icon */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-md shadow-secondary/20">
                          <span className="text-white text-lg font-bold">
                            {obj.number}
                          </span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                          <Icon size={24} className="text-secondary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                        {obj.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed flex-1">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Program Benefits - engaging cards with icons and badges */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Benefits
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                All services are free. Here is what growers can access through
                the program.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={20} className="text-accent" />
                  </div>
                  <p className="text-foreground text-sm font-medium leading-relaxed pt-2">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Program Timeline - horizontal visual design */}
      <ScrollReveal>
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Timeline
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                WELLUP is a time-limited grant. Services are available while
                funding lasts.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {/* Horizontal timeline for md+ */}
              <div className="hidden md:block relative">
                {/* Connecting line */}
                <div className="absolute top-8 left-[10%] right-[10%] h-1 bg-gradient-to-r from-secondary via-secondary/60 to-secondary rounded-full" />
                <div className="grid grid-cols-2 gap-8">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg shadow-secondary/25 mb-5">
                        {i === 0 ? (
                          <CalendarRange size={24} className="text-white" />
                        ) : (
                          <ShieldCheck size={24} className="text-white" />
                        )}
                      </div>
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full">
                        <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">
                          {item.date}
                        </p>
                        <p className="text-foreground font-semibold text-lg font-[family-name:var(--font-heading)]">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Vertical timeline for mobile */}
              <div className="md:hidden relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/20" />
                <div className="space-y-10">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-lg shadow-secondary/25">
                        {i === 0 ? (
                          <CalendarRange size={24} className="text-white" />
                        ) : (
                          <ShieldCheck size={24} className="text-white" />
                        )}
                      </div>
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1">
                        <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">
                          {item.date}
                        </p>
                        <p className="text-foreground font-semibold text-lg font-[family-name:var(--font-heading)]">
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

      {/* Eligibility / Intake Form */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <Download size={28} className="text-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                Eligibility
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                Download the intake form, fill it out, and send it to{" "}
                <a
                  href="mailto:info@ekrcd.org"
                  className="text-secondary font-semibold hover:underline"
                >
                  info@ekrcd.org
                </a>
                . Once received, our team will follow up to schedule your first
                pump test.
              </p>
              <Link
                href="/files/wellup/WellUp_Intake-Form-10.06.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-lg shadow-secondary/20"
              >
                <Download size={20} />
                Download Intake Form (PDF)
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Photo Gallery - improved layout with hover overlays */}
      <ScrollReveal>
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Gallery
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                A look at WELLUP services in action across the Central Valley.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                  />
                  {/* Hover overlay with alt text caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium leading-snug">
                      {img.alt.replace("WELLUP program - ", "")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact CTA - prominent dark background */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                <Droplets size={28} className="text-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)] mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Not sure if your farm qualifies or want to know what to expect
                from a pump test? Contact us directly or visit our contact page
                to send a message.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
                <a
                  href="mailto:info@ekrcd.org"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/15"
                >
                  <Mail size={20} className="text-secondary" />
                  info@ekrcd.org
                </a>
                <a
                  href="tel:+15593094030"
                  className="inline-flex items-center gap-3 px-7 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/15"
                >
                  <Phone size={20} className="text-secondary" />
                  (559) 309-4030
                </a>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-lg shadow-secondary/20"
              >
                Visit Contact Page
                <ArrowRight size={18} />
              </Link>
              <p className="mt-10 text-sm text-white/50">
                Also interested in soil health funding? Learn about the{" "}
                <Link
                  href="/hsp"
                  className="text-accent font-semibold hover:underline"
                >
                  Healthy Soils Program
                </Link>
                , which provides grants up to $200,000 per farm. You can also
                browse our{" "}
                <Link
                  href="/resources"
                  className="text-white/70 font-semibold hover:underline"
                >
                  conservation resource partners
                </Link>
                , review{" "}
                <Link
                  href="/agendas"
                  className="text-white/70 font-semibold hover:underline"
                >
                  upcoming board meeting agendas
                </Link>
                , or meet the{" "}
                <Link
                  href="/board-of-directors"
                  className="text-white/70 font-semibold hover:underline"
                >
                  board of directors
                </Link>{" "}
                who oversee the district.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
