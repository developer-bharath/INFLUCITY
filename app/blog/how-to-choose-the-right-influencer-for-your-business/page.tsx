import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose the Right Influencer for Your Business",
  description:
    "Learn how to select the right influencer for your business using audience fit, engagement quality, local relevance, and campaign clarity.",
};

export default function ChooseInfluencerBlogPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Blog</p>
          <h1
            className="mb-4 text-[clamp(30px,5vw,52px)] font-black leading-[1.08] tracking-[-1.4px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            How to Choose the Right Influencer for Your Business
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <article className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] md:p-8">
          <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
            <p>
              Choosing the right influencer is one of the most important steps in running a successful marketing
              campaign. The wrong choice can lead to poor results, while the right influencer can bring real growth to
              your business.
            </p>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">UNDERSTAND YOUR TARGET AUDIENCE</h2>
              <p>
                Before selecting an influencer, you must understand your audience. Who are your customers? Where are
                they located? What kind of content do they engage with?
              </p>
              <p className="mt-3">Your influencer should have an audience that matches your target market.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">FOCUS ON ENGAGEMENT, NOT JUST FOLLOWERS</h2>
              <p>
                Many businesses make the mistake of choosing influencers based only on follower count. However,
                engagement is far more important.
              </p>
              <p className="mt-3">
                An influencer with 10,000 highly engaged followers can deliver better results than one with 100,000
                inactive followers.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">CHECK CONTENT QUALITY</h2>
              <p>
                The influencer&apos;s content should align with your brand. It should be authentic, visually
                appealing, and consistent.
              </p>
              <p className="mt-3">
                Look at their previous posts and collaborations to evaluate their style and professionalism.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">LOCAL RELEVANCE MATTERS</h2>
              <p>
                For local businesses, working with local influencers is key. Their audience is more likely to visit
                your store or use your services.
              </p>
              <p className="mt-3">This increases the chances of converting views into real customers.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">CLEAR COMMUNICATION</h2>
              <p>
                Ensure that expectations are clearly defined. This includes content type, posting schedule, and
                campaign goals.
              </p>
              <p className="mt-3">A structured approach leads to better results.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">CONCLUSION</h2>
              <p>
                Choosing the right influencer is not about popularity - it is about relevance, trust, and engagement.
              </p>
              <p className="mt-3">
                At INFLUCITY, we simplify this process by connecting businesses with influencers who are the right fit
                for their goals.
              </p>
            </section>
          </div>
        </article>
      </section>
    </div>
  );
}
