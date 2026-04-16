import type { Metadata } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";

export const metadata: Metadata = {
  title: {
    absolute: "Services - Influencer campaigns, local promotion & lead tracking | INFLUCITY",
  },
  description:
    "INFLUCITY services for local business promotion India: influencer marketing campaigns, local business promotion, campaign management, and a lead tracking system so you get more customers for your shop with clarity.",
  keywords: [
    "influencer marketing for local business",
    "local business promotion India",
    "campaign management",
    "lead tracking",
    "small business marketing India",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "INFLUCITY Services",
    description: "Campaigns, local promotion, management, and attribution - built for Indian SMBs.",
    url: `${site}/services`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}



