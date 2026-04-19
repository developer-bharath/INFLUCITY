"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { MapPin, PlayCircle, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/lib/social";
import { BUTTON_MOTION, PREMIUM_EASE } from "@/lib/motion";

const highlights = [
  { icon: Sparkles, text: "Campaign launches and creator spotlights" },
  { icon: MapPin, text: "What’s working for local brands in your area" },
  { icon: PlayCircle, text: "Reels and stories you can scroll in under a minute" },
];

export default function HomeInstagramFollow() {
  return (
    <section
      id="follow-instagram"
      className="relative w-full min-w-0 scroll-mt-24 border-y border-gray-100 bg-white px-6 py-20 md:py-28"
      aria-labelledby="ig-follow-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" aria-hidden />

      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0.04}>
          <div className="relative mx-auto max-w-5xl rounded-[28px] bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-[1px] shadow-[0_24px_80px_rgba(220,39,67,0.18)]">
            <div className="relative overflow-hidden rounded-[27px] bg-neutral-950 px-8 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f09433]/20 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#bc1888]/15 blur-3xl"
                aria-hidden
              />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
                <div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                    Connect
                  </p>
                  <h2
                    id="ig-follow-heading"
                    className="mb-5 text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.1] tracking-[-0.03em] text-white"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    Follow us on Instagram
                  </h2>
                  <p className="mb-10 max-w-lg text-[15px] leading-relaxed text-neutral-400 sm:text-[16px]">
                    Stay in the loop on {INSTAGRAM_HANDLE} — real launches, local wins, and ideas you can use for your
                    next influencer push.
                  </p>
                  <ul className="space-y-4">
                    {highlights.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex gap-3 text-[14px] leading-snug text-neutral-300 sm:text-[15px]">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white">
                          <Icon size={16} strokeWidth={1.8} aria-hidden />
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-stretch gap-5 lg:items-end lg:text-right">
                  <div className="flex justify-center lg:justify-end">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg shadow-rose-900/40">
                      <FaInstagram className="h-10 w-10 text-white" aria-hidden />
                    </div>
                  </div>
                  <p className="text-center text-[13px] font-medium text-neutral-500 lg:text-right">
                    Official handle · Reels, stories, and updates
                  </p>
                  <motion.div
                    className="w-full lg:w-auto"
                    whileHover={BUTTON_MOTION.hover}
                    whileTap={BUTTON_MOTION.tap}
                    transition={{ duration: 0.35, ease: PREMIUM_EASE }}
                  >
                    <Link
                      href={INSTAGRAM_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-3.5 text-[15px] font-bold text-neutral-950 no-underline shadow-md transition-colors hover:bg-neutral-100 lg:w-auto"
                    >
                      <FaInstagram className="h-5 w-5 shrink-0 text-[#E4405F]" aria-hidden />
                      Follow {INSTAGRAM_HANDLE}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
