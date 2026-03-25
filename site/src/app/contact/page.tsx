import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Phone, Mail, MapPin, Droplets, Sprout } from "lucide-react";
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
  title: "Contact EKRCD - Hanford, CA Conservation District",
  description:
    "Contact the Excelsior-Kings River Resource Conservation District in Hanford, CA. Call (559) 309-4030 or email info@ekrcd.org for WELLUP and Healthy Soils inquiries.",
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
      <section className="relative min-h-[350px] sm:min-h-[500px] flex items-center overflow-hidden">
        <Image
          src="/images/heroes/hero-contact-tree-sunlight.jpeg"
          alt="Lone tree on farmland with warm sunlight, representing EKRCD contact and community outreach in Hanford, CA"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <Mail size={16} />
              Get in Touch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              Contact Us
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              Growers, landowners, and community members are all welcome to reach
              out. Whether it is a question about WELLUP, the Healthy Soils
              Program, or district business in general, our team is glad to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <ScrollReveal>
        <section className="py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                  Get in Touch
                </h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  Our office is in Hanford, CA. You can call, send an email, or
                  use the form on this page. We respond to all inquiries as
                  quickly as we can.
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:5593094030"
                        className="text-text-muted hover:text-primary transition-colors"
                      >
                        (559) 309-4030
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@ekrcd.org"
                        className="text-text-muted hover:text-secondary transition-colors"
                      >
                        info@ekrcd.org
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Office Address
                      </h3>
                      <p className="text-text-muted">
                        870 Greenfield Avenue
                        <br />
                        Hanford, CA 93230
                      </p>
                    </div>
                  </div>
                </div>

                {/* Program Links */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-semibold text-foreground mb-4">
                    Our Programs
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/wellup"
                      className="flex items-center gap-3 text-text-muted hover:text-secondary transition-colors group"
                    >
                      <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <Droplets size={18} className="text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">
                          WELLUP Water Efficiency Program
                        </p>
                        <p className="text-xs">
                          Free pump tests and irrigation assistance
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/hsp"
                      className="flex items-center gap-3 text-text-muted hover:text-accent transition-colors group"
                    >
                      <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Sprout size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">
                          Healthy Soils Program
                        </p>
                        <p className="text-xs">
                          Grants up to $200,000 per farm project
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold text-foreground font-[family-name:var(--font-heading)] mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
