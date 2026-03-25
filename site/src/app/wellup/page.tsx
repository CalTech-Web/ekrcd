import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
  CheckCircle,
  Download,
  Mail,
  Phone,
  Clock,
  Target,
  Gauge,
  GraduationCap,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "WELLUP - Water Efficiency Program",
  description:
    "EKRCD's WELLUP program provides free pump efficiency testing and on-farm technical assistance through a $500,000 CDFA Water Efficiency Technical Assistance grant serving Fresno, Kings, and Tulare Counties.",
  openGraph: {
    title: "WELLUP - Water Efficiency Program | EKRCD",
    description:
      "Free pump efficiency testing and irrigation technical assistance for growers in Fresno, Kings, and Tulare Counties.",
    url: "https://ekrcd.org/wellup",
  },
};

const objectives = [
  {
    number: 1,
    title: "On-Farm Technical Assistance",
    description:
      "Deliver one-on-one on-farm technical assistance for irrigation system efficiency evaluations, diagnostics, reports, and recommendations.",
    icon: Target,
  },
  {
    number: 2,
    title: "Pump Efficiency Testing",
    description:
      "Coordinate or provide pump efficiency testing services.",
    icon: Gauge,
  },
  {
    number: 3,
    title: "Training and Education",
    description:
      "Offer training on water use efficiency, nutrient management practices, and technology.",
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
  { src: "/images/wellup-1.jpg", alt: "WELLUP program - irrigation system" },
  { src: "/images/wellup-2.jpg", alt: "WELLUP program - pump efficiency testing" },
  { src: "/images/wellup-3.jpg", alt: "WELLUP program - on-farm assistance" },
];

export default function WellupPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-secondary-dark via-secondary to-secondary-light overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/wellup-1.jpg"
            alt="WELLUP Program - Water efficiency"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 to-secondary/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <Droplets size={16} />
              CDFA Water Efficiency Technical Assistance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              WELLUP Program
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              Free pump efficiency testing and on-farm technical assistance for
              growers in the Central Valley.
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
              <p className="text-lg text-text-muted leading-relaxed">
                EKRCD was awarded{" "}
                <span className="font-semibold text-foreground">$500,000</span>{" "}
                from the California Department of Food and Agriculture (CDFA) as
                part of their Water Efficiency Technical Assistance Program
                (WETA). The program serves growers in portions of{" "}
                <span className="font-semibold text-foreground">
                  Fresno, Kings, and Tulare Counties
                </span>
                .
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Objectives */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Objectives
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                Three core objectives guiding our water efficiency efforts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((obj) => {
                const Icon = obj.icon;
                return (
                  <div
                    key={obj.number}
                    className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="text-secondary text-xl font-bold">
                          {obj.number}
                        </span>
                      </div>
                      <Icon size={28} className="text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 font-[family-name:var(--font-heading)]">
                      {obj.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Program Benefits */}
      <ScrollReveal>
        <section className="py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Benefits
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                Services available to eligible growers at no cost.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4"
                >
                  <CheckCircle
                    size={22}
                    className="text-secondary shrink-0 mt-0.5"
                  />
                  <p className="text-foreground text-sm font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Program Timeline */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Program Timeline
              </h2>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-secondary/20" />
                <div className="space-y-10">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-lg shadow-secondary/20">
                        <Clock size={20} className="text-white" />
                      </div>
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
                          {item.date}
                        </p>
                        <p className="mt-1 text-foreground font-medium text-lg">
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
        <section className="py-20 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                Eligibility
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-8">
                To participate, submit a completed WELLUP intake form to{" "}
                <a
                  href="mailto:info@ekrcd.org"
                  className="text-secondary font-semibold hover:underline"
                >
                  info@ekrcd.org
                </a>
                .
              </p>
              <Link
                href="/files/wellup/WellUp_Intake-Form-10.06.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary-light transition-all shadow-lg shadow-secondary/20"
              >
                <Download size={20} />
                Download Intake Form (PDF)
              </Link>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                Have questions about the WELLUP program? Reach out to our team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:info@ekrcd.org"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-foreground font-semibold rounded-xl hover:shadow-md transition-all border border-gray-200"
                >
                  <Mail size={18} className="text-secondary" />
                  info@ekrcd.org
                </a>
                <a
                  href="tel:+15593094030"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-foreground font-semibold rounded-xl hover:shadow-md transition-all border border-gray-200"
                >
                  <Phone size={18} className="text-secondary" />
                  (559) 309-4030
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
