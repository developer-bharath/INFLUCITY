"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Megaphone, MapPin, Layers, LineChart, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { HeroRevealStack } from "@/components/ui/HeroReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    id: "01",
    icon: Megaphone,
    title: "Influencer marketing campaigns",
    desc: "End-to-end campaign architecture: discovery, briefs, approvals, publishing, and wrap reporting - orchestrated like a product, not a side project.",
    features: [
      "Curated creator matching to your neighbourhood and category",
      "Brief templates tuned for conversion, not vanity reach",
      "Multi-format publishing across short video and static",
      "Post-campaign attribution summaries your finance team can read",
    ],
  },
  {
    id: "02",
    icon: MapPin,
    title: "Local business promotion",
    desc: "Campaigns engineered for walk-ins, reservations, and repeat visits - with geo-aware messaging and creators who actually show up in your market.",
    features: [
      "Neighbourhood and city-tier targeting controls",
      "Footfall-oriented creative guardrails",
      "Local proof points baked into every asset",
      "Community-native storytelling instead of generic ads",
    ],
  },
  {
    id: "03",
    icon: Layers,
    title: "Campaign management",
    desc: "A single operating layer for timelines, approvals, influencer comms, and asset versioning - so your team stays focused on customers, not inbox threads.",
    features: [
      "Dedicated strategist embedded in your workflow",
      "Structured review gates before anything goes live",
      "Deadline tracking with proactive risk flags",
      "Monthly performance retros with clear next actions",
    ],
  },
  {
    id: "04",
    icon: LineChart,
    title: "Lead tracking system",
    desc: "Unique links, QR flows, and dashboard views that connect revenue to the exact influencer and post - finally closing the loop on spend.",
    features: [
      "Per-creator tracking links and QR entry points",
      "Real-time funnel visibility from click to visit",
      "Journey-level attribution, not blended averages",
      "Exportable reporting for leadership reviews",
    ],
  },
];

const addons = [
  { title: "UGC library", desc: "Repurpose creator content across owned channels with cleared usage rights." },
  { title: "Launch playbooks", desc: "Repeatable templates for seasonal pushes, openings, and limited offers." },
  { title: "Executive reviews", desc: "Quarterly deep-dives on cohort performance and expansion opportunities." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-gray-100 bg-gray-50/80 px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <HeroRevealStack
            eyebrow={<p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Services</p>}
            title={
              <h1
                className="mb-6 text-[clamp(36px,6vw,60px)] font-black leading-[1.05] tracking-[-2px] text-neutral-950"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                Everything to grow locally
              </h1>
            }
            subtitle={
              <p className="mx-auto max-w-xl text-[17px] leading-relaxed text-gray-500">
                Strategy, creators, operations, and measurement� unified so your marketing finally feels like infrastructure, not improvisation.
              </p>
            }
          />
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeIn key={svc.id} delay={i * 0.06}>
                <motion.article
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="grid gap-10 overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)] md:grid-cols-2 md:p-10 lg:gap-14"
                >
                  <div>
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-neutral-950">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <span
                        className="text-[44px] font-black leading-none text-gray-100"
                        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                      >
                        {svc.id}
                      </span>
                    </div>
                    <h2
                      className="mb-4 text-[clamp(22px,2.8vw,28px)] font-bold leading-tight tracking-[-0.5px] text-neutral-950 capitalize"
                      style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                    >
                      {svc.title}
                    </h2>
                    <p className="mb-8 text-[15px] leading-relaxed text-gray-500">{svc.desc}</p>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                      <Link
                        href="/get-started"
                        className="inline-flex items-center gap-2 rounded-xl border border-neutral-950 bg-neutral-950 px-5 py-2.5 text-[13px] font-semibold text-white no-underline transition-colors hover:bg-neutral-800"
                      >
                        Start this service
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                  <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-6 md:p-8">
                    <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400">
                      What&apos;s included
                    </p>
                    <ul className="space-y-3.5">
                      {svc.features.map((f) => (
                        <li key={f} className="flex gap-3 text-[14px] leading-relaxed text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="border-y border-neutral-900 bg-neutral-950 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            tone="dark"
            eyebrow="Add-ons"
            title="Go deeper when you are ready"
            description="Optional modules that compound results without bloating your core workflow."
          />
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {addons.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-7"
                >
                  <h3 className="mb-2 text-[15px] font-bold text-white" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                    {a.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">{a.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Process</p>
            <h2
              className="mb-12 text-[clamp(28px,4vw,42px)] font-black tracking-[-1px] text-neutral-950"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Live in 48 hours
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Discovery call", d: "We align on goals, margins, and the neighbourhoods that matter." },
              { n: "2", t: "Campaign build", d: "Creator selection, briefs, and tracking links assembled in one workspace." },
              { n: "3", t: "Launch & learn", d: "Go live fast, then iterate weekly with transparent performance data." },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-gray-100 bg-gray-50/60 p-8 text-center"
                >
                  <div
                    className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-lg font-black text-white"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    {step.n}
                  </div>
                  <h3 className="mb-2 text-[16px] font-bold text-neutral-950">{step.t}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">{step.d}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50/80 px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <FadeIn>
            <h2
              className="mb-4 text-[clamp(26px,4vw,36px)] font-black tracking-[-1px] text-neutral-950"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Plan your next launch
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-gray-500">
              Share context on your locations and goals - we will reply with a concrete recommendation, not a generic
              deck.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-7 py-3.5 text-[15px] font-semibold text-white no-underline transition-colors hover:bg-neutral-800"
              >
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}





