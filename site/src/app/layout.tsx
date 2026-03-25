import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  loading: () => null,
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EKRCD | Water & Soil Conservation - Hanford, CA",
    template: "%s | EKRCD",
  },
  description:
    "EKRCD provides free water efficiency and soil health programs to growers in Fresno, Kings, and Tulare Counties. CDFA-funded WELLUP and Healthy Soils grants available.",
  keywords: [
    "EKRCD",
    "Excelsior Kings River",
    "Resource Conservation District",
    "groundwater sustainability",
    "water conservation",
    "Hanford CA",
    "WELLUP",
    "Healthy Soils Program",
    "CDFA",
    "agricultural conservation",
    "Fresno County",
    "Kings County",
    "Tulare County",
    "pump efficiency testing",
    "cover crops",
    "compost application",
  ],
  metadataBase: new URL("https://ekrcd.org"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "EKRCD | Water & Soil Conservation - Hanford, CA",
    description:
      "Free CDFA-funded programs for growers: WELLUP pump efficiency testing and Healthy Soils grants up to $200,000 across Fresno, Kings, and Tulare Counties.",
    url: "https://ekrcd.org",
    siteName: "EKRCD",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EKRCD | Water & Soil Conservation - Hanford, CA",
    description:
      "Free CDFA-funded water efficiency and soil health programs for growers across Fresno, Kings, and Tulare Counties.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "Excelsior-Kings River Resource Conservation District",
  alternateName: "EKRCD",
  description:
    "A public agency focused on improving ground and surface water conservation methods and supporting Groundwater Sustainability Agencies in Fresno, Kings, and Tulare Counties.",
  url: "https://ekrcd.org",
  telephone: "(559) 309-4030",
  email: "info@ekrcd.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "870 Greenfield Avenue",
    addressLocality: "Hanford",
    addressRegion: "CA",
    postalCode: "93230",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Fresno County, CA" },
    { "@type": "AdministrativeArea", name: "Kings County, CA" },
    { "@type": "AdministrativeArea", name: "Tulare County, CA" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "EKRCD Conservation Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WELLUP Water Efficiency Technical Assistance",
          url: "https://ekrcd.org/wellup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Healthy Soils Program",
          url: "https://ekrcd.org/hsp",
        },
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
