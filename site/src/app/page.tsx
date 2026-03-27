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
  MapPin,
  Handshake,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[350px] sm:min-h-[500px] flex items-center overflow-hidden pt-[75px]">
        <Image
          src="/images/heroes/hero-homepage-almond-blossoms.jpeg"
          alt="Almond blossoms in full bloom across Central California farmland, representing EKRCD conservation in Fresno, Kings, and Tulare Counties"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image
                src="/images/icon.webp"
                alt="EKRCD icon"
                width={72}
                height={72}
                className="drop-shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              Excelsior-Kings River Resource Conservation District
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              A locally governed conservation district working with farmers,
              ranchers, and Groundwater Sustainability Agencies across Fresno,
              Kings, and Tulare Counties to put water in the ground and keep
              soil productive for the long run.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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

      {/* Notice Banner */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-3 text-amber-800 text-center">
            <AlertTriangle size={20} className="shrink-0" />
            <p className="text-sm sm:text-base font-medium">
              <span className="font-bold">Notice:</span> The EKRCD regular
              meeting set for Wednesday, March 18, 2026 has been canceled.
            </p>
          </div>
        </div>
      </section>

      {/* Open Government & Transparency */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
                <FileText size={16} />
                Public Records
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Open Government &amp; Transparency
              </h2>
              <p className="mt-4 text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                Every board meeting agenda and packet is posted here for public
                review. Our records go back to 2024 and are updated before each
                scheduled meeting.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/files/agendas/Meeting-Cancellation-Notice.pdf"
                target="_blank"
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 card-hover overflow-hidden"
              >
                <div className="bg-secondary/10 p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-secondary/15 shrink-0">
                    <FileText size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Latest Agenda
                    </h3>
                    <p className="text-secondary text-xs font-medium uppercase tracking-wider">
                      March 2026
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    March 18, 2026 regular meeting has been canceled. View the
                    official cancellation notice.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-all">
                    View Agenda
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              <Link
                href="/agendas"
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 card-hover overflow-hidden"
              >
                <div className="bg-accent/10 p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-accent/15 shrink-0">
                    <Archive size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Agendas Archive
                    </h3>
                    <p className="text-accent text-xs font-medium uppercase tracking-wider">
                      Since April 2024
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    Browse the full archive of board meeting agendas, packets,
                    and special meeting notices.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    Browse Archive
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 card-hover overflow-hidden"
              >
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/15 shrink-0">
                    <Phone size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Contact Us
                    </h3>
                    <p className="text-primary text-xs font-medium uppercase tracking-wider">
                      We respond promptly
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    Have questions about a program, a board meeting, or how to
                    get involved? Reach out any time.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Get In Touch
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CDFA-Funded Conservation Programs */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-primary-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                CDFA-Funded Conservation Programs
              </h2>
              <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
                Two active CDFA-funded programs open to growers across the
                three-county region. Both are free to participate in.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* WELLUP Card */}
              <div className="group flex flex-col rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 overflow-hidden hover:bg-white/15 transition-colors">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/images/wellup-1.jpg"
                    alt="WELLUP program - free pump efficiency testing and irrigation assistance for Central Valley growers"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-secondary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      <Droplets size={14} />
                      WELLUP
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Water Efficiency Program
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Free pump tests, irrigation system evaluations, and
                    one-on-one technical assistance for growers of any acreage.
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="text-2xl font-bold text-secondary">
                      $500K
                    </span>
                    <span className="text-xs text-white/50 uppercase tracking-wider">
                      CDFA Funded
                    </span>
                  </div>
                  <Link
                    href="/wellup"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-xl hover:bg-secondary-light transition-colors self-start"
                  >
                    Learn More About WELLUP
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* HSP Card */}
              <div className="group flex flex-col rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 overflow-hidden hover:bg-white/15 transition-colors">
                <div className="aspect-[16/9] relative">
                  <Image
                    src="/images/compost.jpg"
                    alt="Healthy Soils Program - compost application funded by CDFA grant on California farm"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      <Sprout size={14} />
                      HSP
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Healthy Soils Program
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    Supporting on-farm projects up to $200,000 each. Round 1
                    funded 20 farms and awarded $2.6 million. Round 2 is now
                    closed.
                  </p>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="text-2xl font-bold text-accent">$5M</span>
                    <span className="text-xs text-white/50 uppercase tracking-wider">
                      CDFA Grant Total
                    </span>
                  </div>
                  <Link
                    href="/hsp"
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-light transition-colors self-start"
                  >
                    Learn More About HSP
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Impact Stats Band */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <Image
          src="/images/heroes/hero-homepage-almond-blossoms.jpeg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary-dark/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
              Our Impact in Numbers
            </h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">
              Real results from CDFA-funded programs across the Central Valley.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10">
              <Droplets size={28} className="text-secondary mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                <CountUp end={500} prefix="$" suffix="K" duration={2000} />
              </p>
              <p className="mt-2 text-sm text-white/60">
                WELLUP Program Funding
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10">
              <Sprout size={28} className="text-accent mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                <CountUp end={5} prefix="$" suffix="M" duration={2000} />
              </p>
              <p className="mt-2 text-sm text-white/60">HSP Grant Total</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10">
              <Users size={28} className="text-white/80 mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                <CountUp end={20} duration={2000} />
              </p>
              <p className="mt-2 text-sm text-white/60">
                Farms Funded in Round 1
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/10">
              <MapPin size={28} className="text-white/80 mx-auto mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-heading)]">
                <CountUp end={3} duration={2000} />
              </p>
              <p className="mt-2 text-sm text-white/60">Counties Served</p>
              <p className="text-xs text-white/40 mt-0.5">
                Fresno, Kings &amp; Tulare
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About EKRCD */}
      <ScrollReveal>
        <section className="py-20 sm:py-24 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)] mb-6">
                  About EKRCD
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  A locally governed public agency serving growers, landowners,
                  and communities across portions of Fresno, Kings, and Tulare
                  Counties.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Users size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Board of Directors
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Five locally elected members set district policy and
                        oversee conservation programs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Handshake size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Resource Partners
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        EKRCD works alongside NRCS, Kings River Conservation
                        District, Kings County Farm Bureau, and CARCD.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Serving Central California
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        Headquartered at 870 Greenfield Avenue, Hanford, CA -
                        serving Fresno, Kings, and Tulare Counties.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/board-of-directors"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors shadow-sm"
                >
                  Learn More About EKRCD
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/vineyard.jpg"
                  alt="Vineyard rows in Central California representing EKRCD conservation work"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Resource Partners */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-sm font-medium text-text-muted uppercase tracking-wider mb-3">
                Working Together For Conservation
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Trusted By Leading Agencies
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {[
                "NRCS",
                "Kings River Conservation District",
                "Kings County Farm Bureau",
                "CARCD",
              ].map((name, i) => (
                <div
                  key={name}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {[
                      <BookOpen key={0} size={18} className="text-primary" />,
                      <Droplets key={1} size={18} className="text-secondary" />,
                      <Sprout key={2} size={18} className="text-accent" />,
                      <Handshake key={3} size={18} className="text-primary" />,
                    ][i]}
                  </div>
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
