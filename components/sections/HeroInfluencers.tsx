"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Briefcase, ListChecks, MapPin, MapPinned } from "lucide-react";
import { ANDHRA_PRADESH_DISTRICTS_LIST, TELANGANA_DISTRICTS_LIST } from "@/lib/influencerRegions";
import { PREMIUM_EASE } from "@/lib/motion";

function GlassSectionTitle({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <h2 className="mb-3 flex items-center gap-3 text-[13px] font-semibold tracking-wide text-white/90">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]"
        aria-hidden
      >
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
      </span>
      {label}
    </h2>
  );
}

const eligibility = [
  "Minimum 2,000 real followers",
  "Genuine engagement (no fake audience)",
  "Active on Reels / Posts / Stories",
  "Open for brand collaborations",
];

const whatYouGet = [
  "Paid collaborations",
  "Local & regional brand deals",
  "Consistent campaign opportunities",
  "Long-term growth support",
];

const rootReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: PREMIUM_EASE,
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const headlineReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: PREMIUM_EASE },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: PREMIUM_EASE },
  },
};

export default function HeroInfluencers() {
  return (
    <section className="relative w-full overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-black via-neutral-950 to-black px-6 py-24 md:py-28">
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-neutral-500/[0.06] blur-[90px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[min(80%,720px)] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[80px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={rootReveal}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            variants={headlineReveal}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500"
          >
            JOIN INFLUCITY NETWORK
          </motion.p>
          <motion.h1
            variants={headlineReveal}
            className="mb-6 text-[clamp(1.75rem,5vw,3rem)] font-black leading-[1.08] tracking-[-0.03em] text-white md:text-[clamp(2rem,4.2vw,2.75rem)]"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            We&apos;re onboarding influencers across Telangana &amp; Andhra Pradesh
          </motion.h1>
          <motion.p
            variants={headlineReveal}
            className="mx-auto max-w-xl text-[15px] leading-relaxed text-gray-400 md:text-[16px]"
          >
            Collaborate with local brands, get paid for your content, and grow your influence with real campaigns.
          </motion.p>
        </div>

        <motion.div
          variants={cardReveal}
          className="mx-auto mt-12 max-w-5xl rounded-2xl border border-white/10 bg-white/[0.05] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:mt-14 md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-10">
              <div>
                <GlassSectionTitle icon={MapPin} label="Telangana Districts" />
                <p className="text-[14px] leading-relaxed text-gray-400 md:text-[15px]">{TELANGANA_DISTRICTS_LIST}</p>
              </div>
              <div>
                <GlassSectionTitle icon={MapPinned} label="Andhra Pradesh Districts" />
                <p className="text-[14px] leading-relaxed text-gray-400 md:text-[15px]">{ANDHRA_PRADESH_DISTRICTS_LIST}</p>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <GlassSectionTitle icon={ListChecks} label="Eligibility" />
                <ul className="space-y-3">
                  {eligibility.map((line) => (
                    <li key={line} className="flex gap-3 text-[14px] leading-snug text-gray-300 md:text-[15px]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <GlassSectionTitle icon={Briefcase} label="What you get" />
                <ul className="space-y-3">
                  {whatYouGet.map((line) => (
                    <li key={line} className="flex gap-3 text-[14px] leading-snug text-gray-300 md:text-[15px]">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-500" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div className="pt-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#apply-form"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-neutral-950 shadow-sm transition-colors hover:bg-gray-100 sm:w-auto"
                >
                  Apply Now →
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
