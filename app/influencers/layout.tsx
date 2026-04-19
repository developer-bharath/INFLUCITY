import type { Metadata } from "next";
import { getSiteUrl, DEFAULT_OG_IMAGE } from "@/lib/seo-config";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Join as an influencer — Telangana & Andhra Pradesh",
  description:
    "Apply to the INFLUCITY creator network: paid collaborations with local brands across Telangana and Andhra Pradesh. Real campaigns, clear briefs, and growth support for vetted influencers.",
  keywords: [
    "influencer jobs Telangana",
    "influencer jobs Andhra Pradesh",
    "paid collaborations Hyderabad",
    "local brand deals creators",
    "INFLUCITY creators",
    "micro influencer India",
    "creator network India",
    "Karimnagar influencer",
    "Vijayawada influencer marketing",
  ],
  alternates: {
    canonical: "/influencers",
  },
  openGraph: {
    title: "Join INFLUCITY — influencers in Telangana & Andhra Pradesh",
    description:
      "We are onboarding creators for paid local campaigns. Apply if you are based in Telangana or Andhra Pradesh and want consistent brand work.",
    url: `${siteUrl}/influencers`,
    siteName: "INFLUCITY",
    locale: "en_IN",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join INFLUCITY as an influencer",
    description:
      "Paid local brand collaborations across Telangana & Andhra Pradesh. Apply to the creator network.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InfluencersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
