import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Traditional Advertising is Failing Local Businesses (And What Works Now)",
  description:
    "Discover why traditional ads are losing impact for local businesses and why influencer marketing delivers better trust, engagement, and ROI.",
};

export default function TraditionalAdsBlogPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Blog</p>
          <h1
            className="mb-4 text-[clamp(30px,5vw,52px)] font-black leading-[1.08] tracking-[-1.4px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            Why Traditional Advertising is Failing Local Businesses (And What Works Now)
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <article className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] md:p-8">
          <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
            <p>
              For years, local businesses have relied on traditional marketing methods such as newspaper ads, banners,
              and online ads. While these methods once worked, their effectiveness has declined significantly.
            </p>

            <p>
              Today&apos;s consumers are smarter, more informed, and more selective. They no longer respond to generic
              advertisements.
            </p>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">THE PROBLEM WITH TRADITIONAL ADS</h2>
              <p>
                Most ads interrupt the user experience. Whether it&apos;s a YouTube ad or a social media promotion,
                users often skip or ignore them. This results in wasted budgets and poor returns.
              </p>
              <p className="mt-3">
                Another major issue is lack of trust. Consumers are aware that ads are paid promotions, which reduces
                their credibility.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">WHAT CUSTOMERS TRUST TODAY</h2>
              <p>
                Customers trust recommendations. They trust real experiences shared by real people. This is why
                influencer marketing has become one of the most effective strategies for local businesses.
              </p>
              <p className="mt-3">
                When an influencer shares their experience, it feels authentic and relatable. This builds confidence
                and drives action.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">THE SHIFT TOWARDS INFLUENCERS</h2>
              <p>
                Influencers bridge the gap between businesses and customers. They bring personality, storytelling, and
                engagement - something traditional ads lack.
              </p>
              <p className="mt-3">
                Local influencers, in particular, have a strong connection with their audience. Their followers are
                often from the same city or area, making their recommendations highly relevant.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">RESULTS THAT MATTER</h2>
              <p>Modern marketing is no longer about visibility alone. It is about results.</p>
              <p className="mt-3">Businesses want:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>More customers</li>
                <li>More footfall</li>
                <li>Better ROI</li>
              </ul>
              <p className="mt-3">Influencer marketing delivers on these goals.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">CONCLUSION</h2>
              <p>
                If your business is still relying only on traditional advertising, it is time to rethink your
                strategy.
              </p>
              <p className="mt-3">
                The future belongs to authentic marketing - and influencer marketing is leading the way.
              </p>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
}
