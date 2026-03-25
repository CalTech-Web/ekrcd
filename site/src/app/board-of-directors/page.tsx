import type { Metadata } from "next";
import { Users, Vote, MapPin, UserCheck, Shield, Crown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Meet the Board of Directors of the Excelsior-Kings River Resource Conservation District. The Board serves as the legislative body governing water conservation, soil erosion prevention, and land improvement programs across Fresno, Kings, and Tulare Counties.",
};

const boardMembers = [
  { name: "Michael Miya", role: "Chairman" },
  { name: "Ed Esajian", role: "Treasurer" },
  { name: "Tony DeGroot", role: "Director" },
  { name: "Paul Newton", role: "Director" },
  { name: "Nathan Heeringa", role: "Associate Director" },
];

const requirements = [
  {
    icon: Vote,
    title: "Registered Voter",
    description:
      "Must be a registered voter in the State of California.",
  },
  {
    icon: MapPin,
    title: "District Resident",
    description:
      "Reside within the District and either own real property in the District or alternatively have served, pursuant to the district's rules, for two years or more as an Associate Director providing advisory or other assistance to the Board of Directors.",
  },
  {
    icon: UserCheck,
    title: "Designated Agent",
    description:
      "Be a designated Agent of a resident landowner within the District.",
  },
];

function getRoleBadge(role: string) {
  switch (role) {
    case "Chairman":
      return {
        bg: "bg-primary/10",
        text: "text-primary-dark",
        border: "border-primary/20",
        icon: Crown,
      };
    case "Treasurer":
      return {
        bg: "bg-secondary/10",
        text: "text-secondary-dark",
        border: "border-secondary/20",
        icon: Shield,
      };
    case "Associate Director":
      return {
        bg: "bg-accent/10",
        text: "text-accent",
        border: "border-accent/20",
        icon: Users,
      };
    default:
      return {
        bg: "bg-earth/10",
        text: "text-earth",
        border: "border-earth/20",
        icon: Users,
      };
  }
}

export default function BoardOfDirectorsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-texture relative bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="hero-dots absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                Governance
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              Board of Directors
            </h1>
            <p className="mt-4 text-lg text-white/85 leading-relaxed max-w-2xl">
              The governing body of the Excelsior-Kings River Resource
              Conservation District.
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Statement */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 font-[family-name:var(--font-heading)]">
                  Purpose of the Board
                </h2>
                <p className="text-text-muted leading-relaxed text-base sm:text-lg">
                  The function of the Board is to act as the legislative body
                  for the Excelsior/Kings River Resource Conservation District,
                  which has been formed for the control of runoff, the
                  prevention or control of soil erosion, the development and
                  distribution of water, and the improvement of land
                  capabilities in the District.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Membership Composition */}
      <ScrollReveal>
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Membership Composition
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                Board members must meet at least one of the following
                requirements to serve on the Board of Directors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {requirements.map((req) => (
                <div
                  key={req.title}
                  className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <req.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {req.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {req.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Current Board Members */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                Current Board Members
              </h2>
              <p className="mt-3 text-text-muted max-w-2xl mx-auto">
                The individuals who serve the District and its mission of
                conservation and sustainability.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {boardMembers.map((member) => {
                const badge = getRoleBadge(member.role);
                return (
                  <div
                    key={member.name}
                    className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <Users size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border ${badge.bg} ${badge.text} ${badge.border}`}
                    >
                      <badge.icon size={14} />
                      {member.role}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
