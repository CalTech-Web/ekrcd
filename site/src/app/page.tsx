import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Archive,
  Phone,
  Droplets,
  Sprout,
  ArrowRight,
  AlertTriangle,
  Users,
  BookOpen,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-texture relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/soil.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/60" />
        <div className="hero-dots absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.jpg"
                alt="EKRCD - Excelsior-Kings River Resource Conservation District logo"
                width={64}
                height={64}
                className="rounded-full border-2 border-white/30"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              Excelsior-Kings River Resource Conservation District
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              A locally governed conservation district working with farmers,
              ranchers, and Groundwater Sustainability Agencies across Fresno,
              Kings, and Tulare Counties to put water in the ground and keep
              soil productive for the long run.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/wellup"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                <Droplets size={18} />
                WELLUP Program
              </Link>
              <Link
                href="/hsp"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all shadow-lg"
              >
                <Sprout size={18} />
                Healthy Soils Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Notice */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3 text-amber-800">
            <AlertTriangle size={20} className="shrink-0" />
            <p className="text-sm sm:text-base">
              <span className="font-semibold">Notice:</span> The EKRCD regular
              meeting set for Wednesday, March 18, 2026 has been canceled.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <ScrollReveal>
        <section className="py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Open Government &amp; Transparency
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                All board meeting agendas and packets are posted publicly.
                Meeting records go back to 2024.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/files/agendas/Meeting-Cancellation-Notice.pdf"
                target="_blank"
                className="group card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <FileText
                  size={40}
                  className="text-secondary mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Latest Agenda
                </h3>
                <p className="text-text-muted text-sm">
                  March 18, 2026 meeting cancellation notice
                </p>
              </Link>

              <Link
                href="/agendas"
                className="group card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <Archive
                  size={40}
                  className="text-accent mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Agendas Archive
                </h3>
                <p className="text-text-muted text-sm">
                  Every agenda and board packet since April 2024.
                </p>
              </Link>

              <Link
                href="/contact"
                className="group card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <Phone
                  size={40}
                  className="text-primary mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Contact Us
                </h3>
                <p className="text-text-muted text-sm">
                  Questions about programs or how to get involved? We are here.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Programs Section */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                CDFA-Funded Conservation Programs
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                Two active CDFA-funded programs open to growers across the
                three-county region. Both are free to participate in.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* WELLUP Card */}
              <Link
                href="/wellup"
                className="group card-hover relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/images/wellup-1.jpg"
                    alt="WELLUP program - free pump efficiency testing and irrigation assistance for Central Valley growers"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      WELLUP
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                    Water Efficiency Program
                    <ArrowRight
                      size={18}
                      className="text-secondary group-hover:translate-x-1 transition-transform"
                    />
                  </h3>
                  <p className="text-text-muted text-sm">
                    Funded at $500,000 through CDFA. Free pump tests, irrigation
                    system evaluations, and one-on-one technical assistance for
                    growers of any acreage.
                  </p>
                </div>
              </Link>

              {/* HSP Card */}
              <Link
                href="/hsp"
                className="group card-hover relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/images/compost.jpg"
                    alt="Healthy Soils Program - compost application funded by CDFA grant on California farm"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                      HSP
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                    Healthy Soils Program
                    <ArrowRight
                      size={18}
                      className="text-accent group-hover:translate-x-1 transition-transform"
                    />
                  </h3>
                  <p className="text-text-muted text-sm">
                    $5 million CDFA grant supporting on-farm projects up to
                    $200,000 each. Round 1 funded 20 farms and awarded $2.6
                    million. Round 2 is now closed.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* About EKRCD Section */}
      <ScrollReveal>
        <section className="py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                About EKRCD
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                A locally governed public agency serving growers, landowners,
                and communities across portions of Fresno, Kings, and Tulare
                Counties.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="/board-of-directors"
                className="group card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <Users
                  size={40}
                  className="text-primary mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  Board of Directors
                  <ArrowRight
                    size={16}
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </h3>
                <p className="text-text-muted text-sm">
                  Five locally elected members set district policy and oversee
                  conservation programs. Learn about the board and membership
                  requirements.
                </p>
              </Link>

              <Link
                href="/resources"
                className="group card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <BookOpen
                  size={40}
                  className="text-secondary mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  Resource Partners
                  <ArrowRight
                    size={16}
                    className="text-secondary group-hover:translate-x-1 transition-transform"
                  />
                </h3>
                <p className="text-text-muted text-sm">
                  EKRCD works alongside NRCS, Kings River Conservation District,
                  Kings County Farm Bureau, and CARCD to deliver conservation
                  services.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
