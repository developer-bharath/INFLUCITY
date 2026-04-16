import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Local Influencers Drive Real Customers to Your Business",
  description:
    "Learn how local influencers help businesses generate real customer visits, improve conversion rates, and build long-term growth.",
};

export default function LocalInfluencersDriveCustomersPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Blog</p>
          <h1
            className="mb-4 text-[clamp(30px,5vw,52px)] font-black leading-[1.08] tracking-[-1.4px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            How Local Influencers Drive Real Customers to Your Business
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <article className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] md:p-8">
          <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
            <p>
              Many businesses struggle with one key problem - getting real customers through the door. While online
              ads may generate views and clicks, they often fail to convert into actual visits or purchases.
            </p>

            <p>Local influencers solve this problem effectively.</p>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">WHO ARE LOCAL INFLUENCERS?</h2>
              <p>
                Local influencers are creators who have a strong presence within a specific city or area. Their
                followers are usually from the same region, making their content highly relevant for local businesses.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">WHY LOCAL INFLUENCERS WORK</h2>
              <p>
                When a local influencer promotes a business, their audience sees it as a trusted recommendation. Since
                the audience is nearby, they are more likely to visit the location and try the product or service.
              </p>
              <p className="mt-3">This creates a direct link between online promotion and offline action.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">HIGHER CONVERSION RATES</h2>
              <p>
                Unlike broad digital campaigns, local influencer marketing targets a focused audience. This leads to
                higher conversion rates because the message reaches people who can actually act on it.
              </p>
              <p className="mt-3">
                For example, a gym in a specific area benefits more from a nearby influencer than from a nationwide
                campaign.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">AUTHENTIC CONTENT</h2>
              <p>
                Local influencers create content that feels natural and relatable. Whether it&apos;s a food review, a
                salon visit, or a fitness session, the content reflects real experiences.
              </p>
              <p className="mt-3">This authenticity builds trust and drives decision-making.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">LONG-TERM IMPACT</h2>
              <p>
                Influencer content continues to generate value even after the campaign ends. Posts remain visible, and
                new customers may discover your business over time.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">CONCLUSION</h2>
              <p>
                If your goal is to attract real customers, local influencers are one of the most powerful tools
                available today.
              </p>
              <p className="mt-3">
                By focusing on the right audience and authentic promotion, businesses can achieve consistent and
                sustainable growth.
              </p>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
}
