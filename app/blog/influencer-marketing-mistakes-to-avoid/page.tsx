import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Mistakes Businesses Make in Influencer Marketing (And How to Avoid Them)",
  description:
    "Discover the most common influencer marketing mistakes businesses make and practical ways to avoid them for stronger campaign outcomes.",
};

export default function InfluencerMarketingMistakesPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Blog</p>
          <h1
            className="mb-4 text-[clamp(30px,5vw,52px)] font-black leading-[1.08] tracking-[-1.4px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            Top Mistakes Businesses Make in Influencer Marketing (And How to Avoid Them)
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <article className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] md:p-8">
          <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
            <p>
              Influencer marketing can deliver powerful results, but only when executed correctly. Many businesses fail
              to see results because of common mistakes.
            </p>

            <p>Understanding these mistakes can help you avoid wasted time and budget.</p>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">MISTAKE 1: CHOOSING THE WRONG INFLUENCER</h2>
              <p>
                Selecting influencers based only on follower count is a major mistake. Without proper audience
                alignment, campaigns fail to deliver results.
              </p>
              <p className="mt-3 font-semibold text-neutral-900">SOLUTION:</p>
              <p>Focus on relevance, engagement, and local audience.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">MISTAKE 2: LACK OF CLEAR STRATEGY</h2>
              <p>Running campaigns without clear goals leads to confusion and poor performance.</p>
              <p className="mt-3 font-semibold text-neutral-900">SOLUTION:</p>
              <p>Define objectives such as customer acquisition, brand awareness, or footfall.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">MISTAKE 3: IGNORING LOCAL TARGETING</h2>
              <p>
                Many businesses work with influencers who do not have a local audience, reducing effectiveness.
              </p>
              <p className="mt-3 font-semibold text-neutral-900">SOLUTION:</p>
              <p>Work with influencers who are active in your target location.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">MISTAKE 4: OVER-CONTROLLING CONTENT</h2>
              <p>
                Businesses sometimes try to control every aspect of the content, which reduces authenticity.
              </p>
              <p className="mt-3 font-semibold text-neutral-900">SOLUTION:</p>
              <p>Allow influencers creative freedom while maintaining brand guidelines.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">MISTAKE 5: EXPECTING INSTANT RESULTS</h2>
              <p>
                Influencer marketing is not a one-time activity. Expecting immediate results can lead to
                disappointment.
              </p>
              <p className="mt-3 font-semibold text-neutral-900">SOLUTION:</p>
              <p>Focus on consistent campaigns and long-term growth.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">MISTAKE 6: NOT TRACKING PERFORMANCE</h2>
              <p>Without tracking, businesses cannot measure success or improve campaigns.</p>
              <p className="mt-3 font-semibold text-neutral-900">SOLUTION:</p>
              <p>Use analytics and feedback to evaluate results.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">CONCLUSION</h2>
              <p>
                Avoiding these mistakes can significantly improve the success of your influencer marketing efforts.
              </p>
              <p className="mt-3">
                With the right strategy, influencer marketing can become a powerful growth engine for your business.
              </p>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
}
