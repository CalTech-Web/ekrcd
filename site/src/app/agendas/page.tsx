import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Download,
  Calendar,
  XCircle,
  Clock,
  Star,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Board Meeting Agendas - EKRCD Public Records",
  description:
    "Public archive of EKRCD board meeting agendas and packets since April 2024. Download current and past meeting documents from the Excelsior-Kings River RCD.",
  alternates: { canonical: "/agendas" },
  openGraph: {
    title: "Board Meeting Agendas - EKRCD Public Records",
    description:
      "Download public board meeting agendas and packets for EKRCD going back to April 2024. Part of the district's commitment to open government transparency.",
    url: "https://ekrcd.org/agendas",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "EKRCD Board Meeting Agendas",
    description:
      "Public archive of EKRCD board meeting agendas and packets since April 2024.",
  },
};

type MeetingStatus = "Active" | "Canceled" | "Rescheduled" | "Special Meeting";

interface Meeting {
  date: string;
  status: MeetingStatus;
  statusNote?: string;
  file: string;
}

interface YearGroup {
  year: number;
  meetings: Meeting[];
}

const agendaData: YearGroup[] = [
  {
    year: 2026,
    meetings: [
      {
        date: "Mar 18, 2026",
        status: "Canceled",
        file: "Meeting-Cancellation-Notice.pdf",
      },
      {
        date: "Feb 18, 2026",
        status: "Active",
        file: "02-EKRCD-Agenda-Packet-February-18-2026.pdf",
      },
      {
        date: "Jan 13, 2026",
        status: "Active",
        file: "Agenda-Packet-January-13-2026.pdf",
      },
    ],
  },
  {
    year: 2025,
    meetings: [
      {
        date: "Dec 17, 2025",
        status: "Active",
        file: "12-EKRCD-December-17-2025-Agend-and-packet.pdf",
      },
      {
        date: "Nov 19, 2025",
        status: "Active",
        file: "EKRCD-Agenda-and-Packet-November-19-2025.pdf",
      },
      {
        date: "Oct 15, 2025",
        status: "Canceled",
        file: "10-15-25_EKRCD-MEETING-CANCELED.pdf",
      },
      {
        date: "Sep 17, 2025",
        status: "Active",
        file: "09-EKRCD-September-17-2025-Agenda-and-Packet.pdf",
      },
      {
        date: "Aug 20, 2025",
        status: "Rescheduled",
        statusNote: "Rescheduled to 8/27/25",
        file: "EKRCD-Notice_Reschedule.pdf",
      },
      {
        date: "Jul 16, 2025",
        status: "Active",
        file: "07-EKRCD-July-16-2025-Agenda-and-Packet-COMPLETE.pdf",
      },
      {
        date: "Jun 18, 2025",
        status: "Active",
        file: "06-EKRCD-June-18-Agenda-and-Packet_complete.pdf",
      },
      {
        date: "May 21, 2025",
        status: "Active",
        file: "EKRCD-May-Agenda-Packet-Complete.pdf",
      },
      {
        date: "Apr 16, 2025",
        status: "Active",
        file: "04-EKRCD-April-16-2025-Agenda-and-Packet-COMPLETE.pdf",
      },
      {
        date: "Mar 19, 2025",
        status: "Active",
        file: "03-EKRCD-BOD-Packet-COMPLETE.pdf",
      },
      {
        date: "Feb 19, 2025",
        status: "Active",
        file: "EKRCD-February-Agenda-and-Packet.pdf",
      },
      {
        date: "Jan 15, 2025",
        status: "Active",
        file: "01-EKRCD-JANUARY-2025-BOD-PACKET.pdf",
      },
    ],
  },
  {
    year: 2024,
    meetings: [
      {
        date: "Dec 18, 2024",
        status: "Canceled",
        file: "202412-Meeting-Cancellation-Notice.pdf",
      },
      {
        date: "Nov 7, 2024",
        status: "Active",
        file: "EKRCD-November-2024-Agenda-and-Packet.pdf",
      },
      {
        date: "Oct 16, 2024",
        status: "Active",
        file: "EKRCD-202410-Agenda-and-Packet-Complete.pdf",
      },
      {
        date: "Sep 18, 2024",
        status: "Active",
        file: "202409-EKRCD-Agenda-and-Packet.pdf",
      },
      {
        date: "Aug 21, 2024",
        status: "Canceled",
        file: "202408-Meeting-Cancellation-Notice.pdf",
      },
      {
        date: "Jul 17, 2024",
        status: "Active",
        file: "202407-Agenda-and-Board-Packet.pdf",
      },
      {
        date: "Jun 19, 2024",
        status: "Active",
        file: "202406-EKRCD-BOD-packet.pdf",
      },
      {
        date: "May 15, 2024",
        status: "Active",
        file: "202405AgendaPacket-final.pdf",
      },
      {
        date: "Apr 30, 2024",
        status: "Canceled",
        file: "202404_MEETING-CANCELATION-NOTICE.pdf",
      },
    ],
  },
];

function getStatusConfig(status: MeetingStatus) {
  switch (status) {
    case "Active":
      return {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        icon: Calendar,
        label: "Active",
      };
    case "Canceled":
      return {
        bg: "bg-red-50",
        text: "text-red-700",
        border: "border-red-200",
        icon: XCircle,
        label: "Canceled",
      };
    case "Rescheduled":
      return {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
        icon: Clock,
        label: "Rescheduled",
      };
    case "Special Meeting":
      return {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        icon: Star,
        label: "Special Meeting",
      };
  }
}

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
      name: "Board Meeting Agendas",
      item: "https://ekrcd.org/agendas",
    },
  ],
};

export default function AgendasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Banner */}
      <section className="relative min-h-[350px] sm:min-h-[500px] flex items-center overflow-hidden pt-[75px]">
        <Image
          src="/images/heroes/hero-agendas-wheat.jpeg"
          alt="Golden wheat ears in a California field, representing EKRCD public board meeting agendas and transparency"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
              <FileText size={16} />
              Transparency
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-heading)]">
              Board Meeting Agendas
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Public archive of meeting agendas and board packets for the
              Excelsior-Kings River Resource Conservation District.
            </p>
          </div>
        </div>
      </section>

      {/* Agendas Timeline */}
      <section className="py-16 sm:py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {agendaData.map((yearGroup, yearIdx) => (
            <ScrollReveal key={yearGroup.year}>
              <div className={yearIdx > 0 ? "mt-14" : ""}>
                {/* Year Header */}
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-[family-name:var(--font-heading)]">
                    {yearGroup.year}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-sm text-text-muted font-medium">
                    {yearGroup.meetings.length}{" "}
                    {yearGroup.meetings.length === 1 ? "meeting" : "meetings"}
                  </span>
                </div>

                {/* Meeting List */}
                <div className="space-y-3">
                  {yearGroup.meetings.map((meeting) => {
                    const config = getStatusConfig(meeting.status);
                    return (
                      <div
                        key={`${meeting.date}-${meeting.file}`}
                        className="card-hover bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                          {/* Date */}
                          <div className="flex items-center gap-3 sm:min-w-[160px]">
                            <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                            <span className="font-semibold text-foreground">
                              {meeting.date}
                            </span>
                          </div>

                          {/* Status Badge */}
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border w-fit ${config.bg} ${config.text} ${config.border}`}
                          >
                            <config.icon size={12} />
                            {meeting.statusNote || config.label}
                          </span>

                          {/* Spacer */}
                          <div className="hidden sm:block flex-1" />

                          {/* Download Button */}
                          <Link
                            href={`/files/agendas/${meeting.file}`}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-light transition-colors w-fit"
                          >
                            <Download size={14} />
                            Download PDF
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <ScrollReveal>
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-text-muted text-sm">
              Learn more about the people who govern EKRCD on the{" "}
              <Link
                href="/board-of-directors"
                className="text-primary font-semibold hover:underline"
              >
                Board of Directors
              </Link>{" "}
              page, or{" "}
              <Link
                href="/contact"
                className="text-secondary font-semibold hover:underline"
              >
                contact us
              </Link>{" "}
              with questions about district business.
            </p>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
