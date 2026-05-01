import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog — Local influencer marketing insights",
  description:
    "Guides and ideas on influencer marketing for local businesses in India — including Hyderabad, Telangana, Karimnagar, and Andhra Pradesh — ROI, creator selection, and what actually drives footfall.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "INFLUCITY Blog — Local business & influencer marketing",
    description:
      "Practical articles on local influencer campaigns, traditional vs creator-led growth, and regional marketing strategy.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INFLUCITY Blog",
    description: "Influencer marketing insights for local businesses and creators in India.",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Blog</p>
          <h1
            className="mb-4 text-[clamp(30px,5vw,52px)] font-black leading-[1.08] tracking-[-1.4px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            Growth insights for local businesses
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
            Explore practical articles on influencer marketing, campaign strategy, and customer growth.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-5">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 no-underline shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all hover:border-gray-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-[19px] font-bold text-neutral-950">{post.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-500">{post.description}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-neutral-700" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
