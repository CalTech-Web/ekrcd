import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Excelsior-Kings River Resource Conservation District. Reach us by phone, email, or visit our office in Hanford, CA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-texture relative flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/40" />
        <div className="hero-dots absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl leading-relaxed">
            Have questions about EKRCD programs or district operations? We would
            love to hear from you.
          </p>
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
                  Reach out with questions about the district, our programs, or
                  how we can support conservation efforts in your community.
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
