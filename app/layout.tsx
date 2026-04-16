import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";
const shareImage = "/brand/influcity-share.png";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "INFLUCITY - Built for business growth",
    template: "%s | INFLUCITY",
  },
  description:
    "INFLUCITY: influencer marketing for local business in India. Local business promotion, lead tracking, and campaigns to get more customers for your shop - without agency guesswork.",
  keywords: [
    "influencer marketing for local business",
    "local business promotion India",
    "get more customers for my shop",
    "small business marketing India",
    "INFLUCITY",
    "local influencer campaigns",
  ],
  authors: [{ name: "INFLUCITY" }],
  creator: "INFLUCITY",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "INFLUCITY",
    url: siteUrl,
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: "INFLUCITY - Built for Business Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [shareImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INFLUCITY",
  url: siteUrl,
  description:
    "Platform for influencer marketing for local business in India - local business promotion, campaign management, and measurable customer growth.",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-white text-neutral-950 font-sans text-base leading-normal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



