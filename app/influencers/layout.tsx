import type { Metadata } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";

export const metadata: Metadata = {
  title: {
    absolute: "For influencers - Earn with local brands | INFLUCITY",
  },
  description:
    "Join INFLUCITY as a creator: paid collaborations with local businesses across India. Flexible campaigns, clear briefs, and reliable payouts - influencer marketing for local business done right.",
  keywords: [
    "influencer marketing India",
    "local brand collaborations",
    "paid influencer campaigns",
    "INFLUCITY creators",
  ],
  alternates: { canonical: "/influencers" },
  openGraph: {
    title: "Join INFLUCITY as an influencer",
    description: "Grow income and credibility with vetted local business campaigns.",
    url: `${site}/influencers`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function InfluencersLayout({ children }: { children: React.ReactNode }) {
  return children;
}



