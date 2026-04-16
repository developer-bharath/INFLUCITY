import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The ROI of Influencer Marketing: What Businesses Should Expect",
  description:
    "Understand how businesses should measure ROI in influencer marketing using real outcomes like acquisition, sales, footfall, and repeat customers.",
};

export default function InfluencerMarketingRoiPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Blog</p>
          <h1
            className="mb-4 text-[clamp(30px,5vw,52px)] font-black leading-[1.08] tracking-[-1.4px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            The ROI of Influencer Marketing: What Businesses Should Expect
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <article className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] md:p-8">
          <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
            <p>
              One of the most common questions businesses ask is: &quot;Will influencer marketing actually deliver
              results?&quot;
            </p>

            <p>The answer lies in understanding return on investment (ROI).</p>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">WHAT IS ROI IN INFLUENCER MARKETING?</h2>
              <p>
                ROI is not just about likes or views. It is about the value generated from your campaign compared to
                the amount you invest.
              </p>
              <p className="mt-3">This includes:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Customer acquisition</li>
                <li>Sales growth</li>
                <li>Brand awareness</li>
                <li>Repeat customers</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">COST VS VALUE</h2>
              <p>
                Influencer marketing allows businesses to control their budget while reaching targeted audiences. Even
                small campaigns can generate significant results when executed correctly.
              </p>
              <p className="mt-3">Compared to traditional advertising, the cost per customer is often lower.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">TRACKING PERFORMANCE</h2>
              <p>Modern platforms allow businesses to track campaign performance through metrics such as:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Engagement rates</li>
                <li>Click-throughs</li>
                <li>Customer inquiries</li>
                <li>Footfall increase</li>
              </ul>
              <p className="mt-3">This helps businesses understand what works and optimise future campaigns.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">REALISTIC EXPECTATIONS</h2>
              <p>
                It is important to set realistic expectations. Not every campaign will deliver instant results, but
                consistent efforts lead to long-term growth.
              </p>
              <p className="mt-3">Businesses should focus on:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Building trust</li>
                <li>Creating awareness</li>
                <li>Encouraging trial</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">MAXIMISING ROI</h2>
              <p>To get the best results:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Choose the right influencers</li>
                <li>Focus on local targeting</li>
                <li>Maintain consistency in campaigns</li>
                <li>Use data to refine strategies</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">CONCLUSION</h2>
              <p>Influencer marketing is one of the most effective ways to generate ROI when done correctly.</p>
              <p className="mt-3">
                By focusing on real outcomes instead of vanity metrics, businesses can achieve measurable and
                meaningful growth.
              </p>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
}
