import type { Metadata } from "next";
import HomeContent from "./home/HomeContent";
import { DEFAULT_OG_IMAGE, getSiteUrl } from "@/lib/seo-config";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    absolute:
      "INFLUCITY — Influencer marketing for local business in Telangana, Andhra Pradesh & India",
  },
  description:
    "Grow your shop, salon, gym, or retail store with paid local influencer campaigns. INFLUCITY matches businesses with vetted creators — strong coverage in Hyderabad, Telangana, and Andhra Pradesh — with 48-hour launch and transparent tracking.",
  keywords: [
    "influencer marketing for local business",
    "Hyderabad influencer marketing",
    "Telangana business promotion",
    "Andhra Pradesh influencer campaigns",
    "local business promotion India",
    "get more customers for my shop",
    "small business marketing India",
    "INFLUCITY",
    "local influencer marketing",
    "Karimnagar marketing",
    "Vijayawada influencer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "INFLUCITY — Local influencer marketing for businesses in India",
    description:
      "Structured campaigns, vetted creators, and measurable outcomes. Serving businesses across India with deep reach in Telangana and Andhra Pradesh.",
    url: siteUrl,
    siteName: "INFLUCITY",
    locale: "en_IN",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "INFLUCITY — Local influencer marketing",
    description:
      "Paid local campaigns for businesses; creator network across Telangana & Andhra Pradesh. Launch fast. Track results.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <div className="flex w-full min-w-0 flex-1 flex-col">
      <HomeContent />
    </div>
  );
}





