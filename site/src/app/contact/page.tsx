import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Droplets,
  Sprout,
  ArrowRight,
  Clock,
  Users,
  FileText,
  Handshake,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => (
    <div className="space-y-5 animate-pulse">
      <div className="h-12 bg-gray-100 rounded-xl" />
      <div className="h-12 bg-gray-100 rounded-xl" />
      <div className="h-32 bg-gray-100 rounded-xl" />
      <div className="h-12 bg-gray-100 rounded-xl" />
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Contact Us - Conservation District Hanford, CA",
  description:
    "Contact EKRCD conservation district in Hanford, CA. Call (559) 309-4030 or email info@ekrcd.org for free WELLUP and Healthy Soils program assistance.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact EKRCD - Hanford, CA Conservation District",
    description:
      "Reach EKRCD by phone, email, or contact form. We assist growers with WELLUP water efficiency and Healthy Soils Program questions.",
    url: "https://ekrcd.org/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact EKRCD - Hanford, CA",
    description:
      "Call (559) 309-4030 or email info@ekrcd.org - Excelsior-Kings River Resource Conservation District, 870 Greenfield Ave, Hanford CA.",
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
      name: "Contact",
      item: "https://ekrcd.org/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="relative min-h-[350px] sm:min-h-[500px] flex items-center overflow-hidden pt-[75px]">
        <Image
          src="/images/heroes/hero-contact-tree-sunlight.jpeg"
          alt="Farmland with warm sunlight in Hanford, CA - contact EKRCD conservation district for free grower assistance"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <Mail size={16} />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              Contact Us
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Growers, landowners, and community members are all welcome to reach
              out. Whether it is a question about WELLUP, the Healthy Soils
              Program, or district business in general, our team is glad to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Reach Out Directly
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                Our office is in Hanford, CA. You can call, send an email, or
                stop by during business hours. We respond to every inquiry as
                quickly as we can.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone Card */}
              <a
                href="tel:5593094030"
                className="group card-hover bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="bg-primary/10 p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/15 shrink-0">
                    <Phone size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Phone
                    </h3>
                    <p className="text-primary text-xs font-medium uppercase tracking-wider">
                      Call us directly
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                    (559) 309-4030
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Available during business hours
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:info@ekrcd.org"
                className="group card-hover bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="bg-secondary/10 p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-secondary/15 shrink-0">
                    <Mail size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Email
                    </h3>
                    <p className="text-secondary text-xs font-medium uppercase tracking-wider">
                      We reply promptly
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground font-semibold text-lg group-hover:text-secondary transition-colors">
                    info@ekrcd.org
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    General inquiries and program questions
                  </p>
                </div>
              </a>

              {/* Address Card */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=870+Greenfield+Avenue+Hanford+CA+93230"
                target="_blank"
                rel="noopener noreferrer"
                className="group card-hover bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="bg-accent/10 p-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-accent/15 shrink-0">
                    <MapPin size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Office
                    </h3>
                    <p className="text-accent text-xs font-medium uppercase tracking-wider">
                      Hanford, CA
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors">
                    870 Greenfield Avenue
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Hanford, CA 93230
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contact Form Section */}
      <ScrollReveal>
        <section className="py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* Form Header */}
              <div className="bg-primary-dark px-8 py-8 text-center">
                <div className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
                  <Mail size={16} />
                  Contact Form
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
                  Send Us a Message
                </h2>
                <p className="mt-3 text-white/70 max-w-lg mx-auto">
                  Describe your question or request below and a member of our
                  team will follow up with you.
                </p>
              </div>
              {/* Form Body */}
              <div className="bg-white p-8 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Contact EKRCD */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Why Contact EKRCD?
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                Whether you are a grower, a landowner, or a community member,
                there are many reasons to reach out to your local conservation
                district - part of{" "}
                <a
                  href="https://carcd.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  California&apos;s statewide network of resource conservation districts
                </a>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Droplets size={26} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  Free Pump Tests
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Ask about{" "}
                  <Link href="/wellup" className="text-secondary font-medium hover:underline">
                    WELLUP pump efficiency testing
                  </Link>{" "}
                  at no cost to your operation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Sprout size={26} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  Soil Health Grants
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Learn about{" "}
                  <Link href="/hsp" className="text-accent font-medium hover:underline">
                    Healthy Soils Program grants
                  </Link>{" "}
                  for on-farm conservation projects.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText size={26} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  Board Meetings
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Request{" "}
                  <Link href="/agendas" className="text-primary font-medium hover:underline">
                    meeting agendas
                  </Link>
                  , ask about upcoming sessions, or submit public comment.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-xl bg-earth/10 flex items-center justify-center mx-auto mb-4">
                  <Handshake size={26} className="text-earth" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  General Inquiries
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  <Link href="/resources" className="text-primary font-medium hover:underline">
                    Partnership opportunities
                  </Link>
                  , resource referrals, or any district-related questions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Programs CTA - Dark Section */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                Explore Our Programs
              </h2>
              <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                EKRCD administers two CDFA-funded conservation programs open to
                growers across Fresno, Kings, and Tulare Counties at no cost.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* WELLUP Card */}
              <Link
                href="/wellup"
                className="group flex flex-col rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 overflow-hidden hover:bg-white/15 transition-colors"
              >
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                      <Droplets size={24} className="text-secondary" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-secondary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      $500K CDFA Funded
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                    WELLUP Water Efficiency Program
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Free pump tests, irrigation system evaluations, and
                    one-on-one technical assistance for growers of any acreage.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-all">
                    Explore WELLUP Program
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              {/* HSP Card */}
              <Link
                href="/hsp"
                className="group flex flex-col rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 overflow-hidden hover:bg-white/15 transition-colors"
              >
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Sprout size={24} className="text-accent" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      $5M CDFA Grant
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-heading)]">
                    Healthy Soils Program
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Grants up to $200,000 per farm for conservation practices
                    that improve soil health and reduce greenhouse gas emissions.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    Explore Healthy Soils Grants
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Location Highlight */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.0!2d-119.6457!3d36.3274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea594c10a5aaa1%3A0xbdc4a09bac5a3f08!2s870%20Greenfield%20Ave%2C%20Hanford%2C%20CA%2093230!5e0!3m2!1sen!1sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EKRCD office location - 870 Greenfield Avenue, Hanford, CA 93230"
                />
              </div>

              {/* Location Details */}
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
                  <MapPin size={16} />
                  Our Location
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                  Serving Central California from Hanford
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  EKRCD is headquartered in Kings County and serves growers,
                  landowners, and communities across portions of Fresno, Kings,
                  and Tulare Counties. We are here to help with conservation
                  programs, technical assistance, and district business.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Office Address
                      </h3>
                      <p className="text-text-muted leading-relaxed">
                        870 Greenfield Avenue
                        <br />
                        Hanford, CA 93230
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Users size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Three-County Coverage
                      </h3>
                      <p className="text-text-muted leading-relaxed">
                        Fresno, Kings, and Tulare Counties - supporting farms
                        and ranches of every size.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        How to Reach Us
                      </h3>
                      <p className="text-text-muted leading-relaxed">
                        Call{" "}
                        <a
                          href="tel:5593094030"
                          className="text-secondary font-semibold hover:underline"
                        >
                          (559) 309-4030
                        </a>{" "}
                        or email{" "}
                        <a
                          href="mailto:info@ekrcd.org"
                          className="text-secondary font-semibold hover:underline"
                        >
                          info@ekrcd.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
