import type { Metadata } from "next";
import HomeContent from "./home/HomeContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";
const shareImage = "/opengraph-image.png";

export const metadata: Metadata = {
  title: {
    absolute:
      "Influencer marketing for local business in India | INFLUCITY - Built for business growth",
  },
  description:
    "INFLUCITY is influencer marketing for local business in India - local business promotion with real customers, not just views. Get more customers for your shop, salon, gym, or retail store with transparent tracking.",
  keywords: [
    "influencer marketing for local business",
    "local business promotion India",
    "get more customers for my shop",
    "small business marketing India",
    "INFLUCITY",
    "local influencer marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "INFLUCITY - Influencer marketing for local business in India",
    description:
      "Local business promotion India teams trust: structured influencer campaigns, 48-hour launch, and measurable ROI.",
    url: siteUrl,
    siteName: "INFLUCITY",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: "INFLUCITY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INFLUCITY - Built for business growth",
    description:
      "Small business marketing India: connect with vetted influencers and track every customer touchpoint.",
    images: [shareImage],
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





