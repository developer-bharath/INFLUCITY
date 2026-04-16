"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { HeroRevealStack } from "@/components/ui/HeroReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRight, Target, Sparkles, Users } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    body: "Give every local business access to structured influencer campaigns that convert - with clarity on spend, reach, and outcomes.",
  },
  {
    icon: Sparkles,
    title: "Vision",
    body: "A world where neighbourhood brands grow as fast as digital-native companies, powered by creators people already trust.",
  },
  {
    icon: Users,
    title: "How we work",
    body: "We combine platform workflows with human strategy: matching, briefs, approvals, and reporting in one place - not scattered spreadsheets.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <HeroRevealStack
            eyebrow={
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">About INFLUCITY</p>
            }
            title={
              <h1
                className="mb-6 text-[clamp(36px,6vw,64px)] font-black leading-[1.05] tracking-[-2px] text-neutral-950"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                We are not an agency.
                <br />
                <span className="text-gray-500">We are the platform.</span>
              </h1>
            }
            subtitle={
              <p className="mx-auto max-w-xl text-[17px] leading-relaxed text-gray-500">
                INFLUCITY exists because local businesses deserve the same growth infrastructure as global brands - without opaque retainers or endless reports that never tie to revenue.
              </p>
            }
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeIn direction="right">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.18em] mb-3">
              Our story
            </p>
            <h2
              className="text-[clamp(26px,3.5vw,40px)] font-black tracking-[-1px] text-neutral-950 leading-tight mb-6"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Built for operators who care about footfall, bookings, and repeat visits.
            </h2>
            <div className="space-y-5 text-[15px] text-gray-500 leading-relaxed">
              <p>
                Most marketing agencies sell hours and deliverables. INFLUCITY sells outcomes: structured campaigns, vetted creators, and attribution you can explain to your finance team.
              </p>
              <p>
                We started with a simple observation: local audiences follow local voices. When those voices endorse a real business - honestly - conversion follows. Our job is to make that repeatable, fast, and measurable.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.12}>
            <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
              <p className="text-[13px] font-semibold text-gray-400 uppercase tracking-wider mb-6">
                Why INFLUCITY exists
              </p>
              <ul className="space-y-5">
                {[
                  "Replace guesswork with campaign playbooks designed for local markets.",
                  "Unify influencer selection, content approvals, and tracking in one workflow.",
                  "Launch in days - not quarters - with a team accountable to metrics you choose.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-gray-600 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 md:py-28 px-6 bg-neutral-950 text-white border-y border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Direction"
            title="Mission, vision, and how we operate"
            description="Everything we ship ladders up to measurable growth for businesses and fair, predictable collaboration for creators."
            tone="dark"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950">
                    <p.icon className="h-5 w-5 text-gray-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{p.body}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* vs agencies */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.18em] mb-3">
                The difference
              </p>
              <h2
                className="text-[clamp(28px,4vw,44px)] font-black tracking-[-1.2px] text-neutral-950 leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                Traditional agencies vs INFLUCITY
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
                Agencies often optimize for retainers and decks. INFLUCITY optimizes for launch velocity, transparent tracking, and campaigns designed around your neighbourhood - because that is where your customers live.
              </p>
              <Button href="/services" variant="outline" size="md">
                Explore services <ArrowRight className="h-4 w-4" />
              </Button>
            </FadeIn>
            <FadeIn delay={0.1} direction="left">
              <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                <div className="grid grid-cols-2 gap-px bg-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  <div className="bg-gray-50 px-5 py-3">Typical agency</div>
                  <div className="bg-white px-5 py-3 text-neutral-950">INFLUCITY</div>
                </div>
                {[
                  { agency: "Slow kickoff, heavy process", us: "Campaign live in 48 hours" },
                  { agency: "Opaque reporting", us: "Real-time tracking per influencer" },
                  { agency: "One-size packages", us: "Local-first targeting & matching" },
                  { agency: "Vanity metrics", us: "Performance-based mindset" },
                ].map((row) => (
                  <div key={row.agency} className="grid grid-cols-2 gap-px bg-gray-100">
                    <div className="bg-white px-5 py-4 text-[13px] text-gray-500">{row.agency}</div>
                    <div className="bg-gray-50/80 px-5 py-4 text-[13px] text-neutral-950 font-medium">{row.us}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2
              className="text-[clamp(26px,4vw,36px)] font-black tracking-[-1px] text-neutral-950 mb-4"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Ready to see how we work?
            </h2>
            <p className="text-gray-500 mb-8">
              Tell us about your business - we will respond with a clear next step, not a generic pitch deck.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="primary" size="lg">
                Talk to us <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/influencers" variant="secondary" size="lg">
                Join as influencer
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}





