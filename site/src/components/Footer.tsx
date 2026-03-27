import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Board of Directors", href: "/board-of-directors" },
  { label: "Agendas", href: "/agendas" },
  { label: "Resources", href: "/resources" },
  { label: "WELLUP", href: "/wellup" },
  { label: "HSP", href: "/hsp" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark text-white overflow-hidden">
      {/* Background watermark icon */}
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 opacity-[0.06] pointer-events-none">
        <Image
          src="/images/icon.webp"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="EKRCD Logo"
              width={180}
              height={42}
              className="brightness-0 invert mb-4"
            />
            <p className="text-white/80 text-sm leading-relaxed">
              The Excelsior-Kings River Resource Conservation District is
              dedicated to improving ground and surface water conservation
              methods across portions of Fresno, Kings, and Tulare Counties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-[family-name:var(--font-heading)]">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="tel:559-309-4030"
                className="flex items-center gap-3 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Phone size={16} className="shrink-0" />
                (559) 309-4030
              </a>
              <a
                href="mailto:info@ekrcd.org"
                className="flex items-center gap-3 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Mail size={16} className="shrink-0" />
                info@ekrcd.org
              </a>
              <div className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                870 Greenfield Avenue, Hanford, CA 93230
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            &copy; Excelsior-Kings River Resource Conservation District. All
            Rights Reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
