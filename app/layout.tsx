import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/contact";
import { INSTAGRAM_PROFILE_URL } from "@/lib/social";
import { DEFAULT_OG_IMAGE, getSiteUrl } from "@/lib/seo-config";

const siteUrl = getSiteUrl();

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
  applicationName: "INFLUCITY",
  title: {
    default: "INFLUCITY — Local influencer marketing for businesses in India",
    template: "%s | INFLUCITY",
  },
  description:
    "INFLUCITY connects local businesses with vetted influencers for paid campaigns across India — with strong focus on Telangana, Andhra Pradesh, and Hyderabad. Launch in 48 hours, track outcomes, and grow footfall without agency guesswork.",
  keywords: [
    "influencer marketing for local business",
    "local business promotion India",
    "Hyderabad influencer marketing",
    "Telangana influencer campaigns",
    "Andhra Pradesh brand collaborations",
    "Karimnagar local marketing",
    "get more customers for my shop",
    "small business marketing India",
    "INFLUCITY",
    "local influencer campaigns",
    "paid creator collaborations",
    "micro influencer marketing India",
  ],
  authors: [{ name: "INFLUCITY", url: siteUrl }],
  creator: "INFLUCITY",
  publisher: "INFLUCITY",
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
    title: "INFLUCITY — Local influencer marketing for businesses in India",
    description:
      "Structured influencer campaigns for shops, salons, gyms, and retail — with creator coverage across Telangana, Andhra Pradesh, and beyond.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "INFLUCITY — Local influencer marketing",
    description:
      "Paid local campaigns, vetted creators, and clear reporting for businesses in India — Telangana & Andhra Pradesh focus.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INFLUCITY",
  url: siteUrl,
  email: CONTACT_EMAIL,
  description:
    "Influencer marketing platform for local businesses in India — campaign matching, briefs, and attribution. Active creator onboarding across Telangana and Andhra Pradesh.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Telangana" },
    { "@type": "State", name: "Andhra Pradesh" },
  ],
  knowsAbout: [
    "Influencer marketing",
    "Local business promotion",
    "Hyper-local advertising",
    "Creator economy",
  ],
  sameAs: [
    INSTAGRAM_PROFILE_URL,
    "https://www.youtube.com/@influcity",
    "https://x.com/influcitiy",
    "https://wa.me/918977955534",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "INFLUCITY",
  url: siteUrl,
  inLanguage: "en-IN",
  description:
    "INFLUCITY helps local businesses run paid influencer campaigns and onboard creators across Telangana, Andhra Pradesh, and India.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main className="flex min-h-0 w-full min-w-0 flex-1 flex-col pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



