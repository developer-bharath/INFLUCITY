"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { ArrowRight, Mail } from "lucide-react";
import { BUTTON_MOTION, PREMIUM_EASE } from "@/lib/motion";

const cols = [
  {
    heading: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "For influencers", href: "/influencers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Who it is for", href: "/#who-its-for" },
      { label: "How it works", href: "/#how-it-works" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Legal", href: "/legal" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

const socialLinks = [
  { href: "https://wa.me/918977955534", label: "WhatsApp", Icon: FaWhatsapp },
  { href: "https://www.instagram.com/influ.city?igsh=czQ4OGtxbmNnMWFr&utm_source=qr", label: "Instagram", Icon: FaInstagram },
  { href: "https://pin.it/1Gykgb4fz", label: "Pinterest", Icon: FaPinterestP },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://x.com/influcitiy", label: "X", Icon: FaXTwitter },
  { href: "https://www.youtube.com/@influcity", label: "YouTube", Icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer className="relative w-full min-w-0 overflow-hidden border-t border-neutral-900 bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,255,255,0.08),transparent_36%),radial-gradient(circle_at_86%_18%,rgba(255,255,255,0.05),transparent_42%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-20 md:pt-16">
        {/* Pre-footer CTA */}
        <section className="relative mb-14 overflow-hidden rounded-[24px] border border-white/14 bg-[rgba(0,0,0,0.52)] p-7 shadow-[0_22px_56px_rgba(0,0,0,0.42),0_0_24px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[12px] md:mb-16 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.16),transparent_38%),radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.1),transparent_44%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.03)_34%,rgba(255,255,255,0)_76%)]" />
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">Ready to launch</p>
              <h2
                className="mb-3 text-[clamp(28px,4.4vw,42px)] font-black leading-[1.08] tracking-[-1.2px] text-white"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                Start your next local growth campaign
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-gray-400">
                Share your locations and goals. We will send a practical plan with timelines, creator fit, and expected outcomes.
              </p>
            </div>
            <motion.div whileHover={BUTTON_MOTION.hover} whileTap={BUTTON_MOTION.tap}>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-black no-underline transition-all hover:bg-gray-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-6">
          <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-6 shadow-[0_10px_34px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] lg:col-span-5">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_56%)]" />
            <Link
              href="/"
              aria-label="INFLUCITY - Home"
              className="relative z-10 mb-6 block shrink-0 no-underline transition-opacity hover:opacity-90"
            >
              <BrandLogo variant="footer" />
            </Link>
            <p className="relative z-10 max-w-sm text-[14px] leading-relaxed text-gray-500">
              The growth platform connecting local businesses with vetted influencers - structured campaigns, live
              tracking, and outcomes you can measure.
            </p>
            <div className="relative z-10 mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ duration: 0.35, ease: PREMIUM_EASE }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-gray-400 transition-all hover:border-neutral-500 hover:bg-white/[0.05] hover:text-white hover:shadow-[0_0_18px_rgba(255,255,255,0.12)]"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-6 shadow-[0_10px_34px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] lg:col-span-5">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_56%)]" />
            <div className="relative z-10 grid grid-cols-2 gap-10 sm:grid-cols-3">
            {cols.map((col) => (
              <div key={col.heading}>
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">{col.heading}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
                        <Link
                          href={l.href}
                          className="text-[14px] text-gray-400 no-underline transition-colors hover:text-white"
                        >
                          {l.label}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-6 shadow-[0_10px_34px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)] lg:col-span-2">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_56%)]" />
            <p className="relative z-10 mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">Contact</p>
            <motion.a
              href="mailto:hello@influicty.in"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.35, ease: PREMIUM_EASE }}
              className="group relative z-10 inline-flex items-center gap-2.5 text-[14px] text-gray-300 no-underline transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-white" />
              <span className="font-medium">hello@influicty.in</span>
            </motion.a>
            <p className="relative z-10 mt-2 text-[12px] text-gray-500">We reply within 24 hours</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-900 pt-8 text-[13px] text-gray-600 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} INFLUCITY. All rights reserved.</p>
          <p className="text-gray-600">Built for business growth.</p>
        </div>
      </div>
    </footer>
  );
}




