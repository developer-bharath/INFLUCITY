import type { Metadata } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";

export const metadata: Metadata = {
  title: {
    absolute: "Contact INFLUCITY - Start your local growth campaign",
  },
  description:
    "Contact INFLUCITY for influencer marketing for local business: tell us your goals and we will help with local business promotion India strategies to get more customers for your shop or service.",
  keywords: [
    "contact INFLUCITY",
    "influencer marketing for local business",
    "local business promotion India",
    "get more customers for my shop",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact INFLUCITY",
    description: "Message our team or reach us on WhatsApp - we reply within one business day.",
    url: `${site}/contact`,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}



