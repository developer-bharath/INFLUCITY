import type { Metadata } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";

export const metadata: Metadata = {
  title: {
    absolute: "About INFLUCITY - Platform for local business growth",
  },
  description:
    "Learn why INFLUCITY exists: influencer marketing for local business with transparent operations, not traditional agency retainers. Mission, vision, and local business promotion India founders use.",
  keywords: [
    "INFLUCITY about",
    "influencer marketing for local business",
    "local business promotion India",
    "small business marketing India",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About INFLUCITY",
    description: "We are a platform for measurable local growth - not a typical marketing agency.",
    url: `${site}/about`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}



