import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest INFLUCITY insights on influencer marketing for local business growth.",
};

const posts = [
  {
    title: "How Influencer Marketing Helps Local Businesses Grow Faster in 2026",
    href: "/blog/how-influencer-marketing-helps",
    description:
      "Why influencer marketing drives local trust, hyper-local reach, and measurable growth for businesses in 2026.",
  },
  {
    title: "Why Traditional Advertising is Failing Local Businesses (And What Works Now)",
    href: "/blog/traditional-advertising-failing",
    description:
      "Why traditional ads are losing impact and what local businesses should do instead for better ROI.",
  },
  {
    title: "How to Choose the Right Influencer for Your Business",
    href: "/blog/choose-right-influencer",
    description:
      "A practical guide to selecting influencers based on audience fit, engagement, and local relevance.",
  },
  {
    title: "The ROI of Influencer Marketing: What Businesses Should Expect",
    href: "/blog/influencer-marketing-roi",
    description:
      "How businesses should evaluate campaign ROI using outcomes like acquisition, sales growth, and repeat customers.",
  },
  {
    title: "How Local Influencers Drive Real Customers to Your Business",
    href: "/blog/local-influencers-drive-real-customers",
    description:
      "Why local creators convert better by connecting nearby audiences to real offline business action.",
  },
  {
    title: "Top Mistakes Businesses Make in Influencer Marketing (And How to Avoid Them)",
    href: "/blog/influencer-marketing-mistakes-to-avoid",
    description:
      "Common influencer campaign mistakes and the practical fixes businesses can apply for stronger results.",
  },
  {
    title: "Best Marketing Strategy for Local Businesses in Karimnagar (2026 Guide)",
    href: "/blog/best-marketing-strategy-karimnagar-2026",
    description:
      "A Karimnagar-focused guide to using influencer-led, hyper-local campaigns for measurable business growth.",
  },
  {
    title: "How Restaurants and Cafes in Karimnagar Can Get More Customers Using Influencers",
    href: "/blog/karimnagar-restaurants-influencer-marketing",
    description:
      "How local food creators can help Karimnagar restaurants and cafes increase footfall and repeat customers.",
  },
  {
    title: "Top Ways to Promote Your Salon or Gym in Karimnagar (Proven Strategies)",
    href: "/blog/promote-salon-gym-karimnagar",
    description:
      "Proven local strategies for gyms and salons in Karimnagar using influencer trust, visual content, and consistency.",
  },
  {
    title: "Best Marketing Strategies for Local Businesses in Hyderabad (2026 Guide)",
    href: "/blog/best-marketing-strategies-hyderabad-2026",
    description:
      "A 2026 Hyderabad guide to local growth with influencer marketing, hyper-local targeting, and measurable outcomes.",
  },
  {
    title: "How Restaurants in Hyderabad Can Get More Customers Using Influencer Marketing",
    href: "/blog/restaurants-hyderabad-influencer-marketing",
    description:
      "How Hyderabad restaurants can increase footfall and repeat visits using local food influencer campaigns.",
  },
  {
    title: "How Salons in Hyderabad Can Get More Clients Using Influencer Marketing",
    href: "/blog/salons-hyderabad-influencer-marketing",
    description:
      "How Hyderabad salons can boost bookings and client retention through local beauty influencer collaborations.",
  },
  {
    title: "How Gyms in Hyderabad Can Get More Members Using Influencer Marketing",
    href: "/blog/gyms-hyderabad-influencer-marketing",
    description:
      "How Hyderabad gyms can increase memberships using local fitness influencers and content-led campaigns.",
  },
];

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
          {posts.map((post) => (
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
