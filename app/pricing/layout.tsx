import type { Metadata } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";

export const metadata: Metadata = {
  title: {
    absolute: "Pricing - Influencer plans for local business growth | INFLUCITY",
  },
  description:
    "Simple, transparent INFLUCITY pricing for local business influencer campaigns in India. Compare Starter, Growth, and Pro plans with estimated reach, customers, and ROI outcomes.",
  keywords: [
    "INFLUCITY pricing",
    "influencer marketing pricing India",
    "local business promotion pricing",
    "campaign ROI tracking",
    "small business marketing plans",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "INFLUCITY Pricing",
    description: "Choose the right plan for local growth: Starter, Growth, or Pro.",
    url: `${site}/pricing`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}



