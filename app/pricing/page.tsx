"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { BUTTON_MOTION, CARD_MOTION, PREMIUM_EASE } from "@/lib/motion";

const plans = [
  {
    name: "Starter",
    price: "INR 2,999",
    term: " / 14-days campaign",
    popular: false,
    tilt: -2.2,
    features: [
      "2 Influencer Collaborations",
      "Local Area Targeting",
      "Basic Campaign Report",
      "WhatsApp Support",
      "14-Day Campaign",
    ],
    estimated: [
      "Influencer Size: 5K-20K followers",
      "Estimated Reach: 10K-40K views",
      "Expected Customers: 10-30",
    ],
  },
  {
    name: "Growth",
    price: "INR 5,999",
    term: " / 30-days campaign",
    popular: true,
    tilt: 0,
    features: [
      "6 Influencer Collaborations",
      "City-Wide Targeting",
      "Real-Time Dashboard",
      "Priority Support",
      "30-Day Campaign",
      "Content Repurposing Rights",
    ],
    estimated: [
      "Influencer Size: 10K-50K followers",
      "Estimated Reach: 30K-120K views",
      "Expected Customers: 20-80",
    ],
  },
  {
    name: "Pro",
    price: "INR 9,999",
    term: " / 60-days campaign",
    popular: false,
    tilt: 2.2,
    features: [
      "10  Influencer Collaborations",
      "Multi-City Targeting",
      "Advanced ROI Tracking",
      "Dedicated Account Manager",
      "60-Day Campaign",
      "Monthly Strategy Call",
    ],
    estimated: [
      "Influencer Size: 20K-100K+ followers",
      "Estimated Reach: 100K-300K+ views",
      "Expected Customers: 50-200+",
    ],
  },
] as const;

const comparisonRows = [
  { feature: "Influencers", starter: "2", growth: "6", pro: "Unlimited" },
  { feature: "Targeting", starter: "Local Area", growth: "City-Wide", pro: "Multi-City" },
  { feature: "Campaign Duration", starter: "14 days", growth: "30 days", pro: "60 days" },
  { feature: "Dashboard", starter: false, growth: true, pro: true },
  { feature: "ROI Tracking", starter: false, growth: true, pro: true },
  { feature: "Support", starter: "WhatsApp", growth: "Priority", pro: "Dedicated Manager" },
  { feature: "Strategy Call", starter: false, growth: false, pro: true },
  { feature: "Content Rights", starter: false, growth: true, pro: true },
] as const;

const roi = [
  { plan: "Starter", customers: "10-30", value: "INR 3,000 - INR 9,000" },
  { plan: "Growth", customers: "20-80", value: "INR 6,000 - INR 24,000" },
  { plan: "Pro", customers: "50-200+", value: "INR 15,000 - INR 60,000+" },
] as const;

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center gap-1 text-gray-100">
        <Check className="h-4 w-4" strokeWidth={2} />
        <span>Yes</span>
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 text-gray-500">
        <X className="h-4 w-4" strokeWidth={2} />
        <span>No</span>
      </span>
    );
  }
  return <span className="text-gray-200">{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_6%,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.05),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />

      <section className="relative px-6 pb-14 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">Pricing</p>
            <h1
              className="mb-5 text-[clamp(38px,6.5vw,72px)] font-black leading-[1.03] tracking-[-2px] text-white"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Simple Pricing. Real Results.
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-[17px] leading-relaxed text-gray-300">
              You&apos;re not paying for ads. You&apos;re paying for real customers.
            </p>
            <p className="text-[13px] font-medium text-gray-500">No contracts | Transparent pricing | Cancel anytime</p>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl [perspective:1200px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.06 },
              },
            }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {plans.map((plan, i) => {
              const isPopular = plan.popular;
              return (
                <FadeIn key={plan.name} delay={i * 0.05}>
                  <motion.div>
                    <motion.article
                      initial={{ opacity: 0, y: 30, scale: 0.97, rotateX: 5 }}
                      whileInView={{ opacity: 1, y: 0, scale: isPopular ? 1.03 : 1, rotateX: 0 }}
                      viewport={{ once: true, amount: 0.22 }}
                      transition={{ duration: 0.75, ease: PREMIUM_EASE }}
                      whileHover={{ ...CARD_MOTION.hover, rotateZ: plan.tilt * 0.5 }}
                      style={{ rotateZ: plan.tilt }}
                      className={`relative h-full overflow-hidden rounded-[20px] border bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px] p-7 transition-all md:p-8 ${
                        isPopular
                          ? "border-white/24 shadow-[0_14px_42px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.18)]"
                          : "border-white/12 shadow-[0_10px_30px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.1)]"
                      }`}
                    >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />
                    {isPopular ? (
                      <span className="absolute right-5 top-5 rounded-full border border-gray-500/70 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-200">
                        Most Popular
                      </span>
                    ) : null}

                    <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-gray-500">{plan.name}</p>
                    <div className="mb-6 flex items-end gap-2">
                      <span
                        className="text-4xl font-black tracking-[-1px] text-white"
                        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                      >
                        {plan.price}
                      </span>
                      <span className="pb-1 text-sm text-gray-400">{plan.term}</span>
                    </div>

                    <ul className="mb-6 space-y-3">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-gray-200">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" strokeWidth={1.8} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-2xl border border-gray-700/80 bg-black/45 p-4">
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">Estimated Results</p>
                      <ul className="space-y-2 text-[13px] leading-relaxed text-gray-300">
                        {plan.estimated.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>

                    <motion.div whileHover={BUTTON_MOTION.hover} whileTap={BUTTON_MOTION.tap} className="mt-6 inline-block w-full">
                      <Link
                        href="/contact"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold no-underline transition-colors ${
                          isPopular
                            ? "bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_22px_rgba(255,255,255,0.26)]"
                            : "border border-gray-600 bg-transparent text-white hover:border-gray-400 hover:bg-white/5"
                        }`}
                      >
                        Choose {plan.name}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                    </motion.article>
                  </motion.div>
                </FadeIn>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-gray-800/90 bg-black/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-8">
            <h2
              className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] text-white"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Plan Comparison
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-gray-800">
              <table className="w-full border-collapse text-left text-[14px]">
                <thead>
                  <tr className="bg-white/[0.04]">
                    <th className="px-5 py-4 font-semibold text-gray-300">Feature</th>
                    <th className="px-5 py-4 font-semibold text-gray-300">Starter</th>
                    <th className="px-5 py-4 font-semibold text-gray-100">Growth</th>
                    <th className="px-5 py-4 font-semibold text-gray-300">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-t border-gray-800/90">
                      <td className="px-5 py-4 text-gray-300">{row.feature}</td>
                      <td className="px-5 py-4"><CellValue value={row.starter} /></td>
                      <td className="px-5 py-4"><CellValue value={row.growth} /></td>
                      <td className="px-5 py-4"><CellValue value={row.pro} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-10 text-center">
            <h2
              className="mb-4 text-[clamp(30px,4.6vw,48px)] font-black tracking-[-1.2px] text-white"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              What This Means for Your Business
            </h2>
            <p className="text-[15px] text-gray-400">If average customer value = INR 300</p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {roi.map((item, i) => (
              <FadeIn key={item.plan} delay={i * 0.1}>
                <motion.div whileHover={{ ...CARD_MOTION.hover }} transition={CARD_MOTION.transition} className="rounded-2xl border border-gray-800 bg-black/40 p-6">
                  <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-gray-500">{item.plan}</p>
                  <p className="mb-2 text-[15px] text-gray-300">{item.customers} customers</p>
                  <p
                    className="text-2xl font-black tracking-[-0.6px] text-white"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    {item.value}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="mt-8 text-center text-[12px] text-gray-500">
              Results may vary based on business type, location, and campaign execution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative border-t border-gray-800 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2
              className="mb-4 text-[clamp(30px,4.5vw,46px)] font-black tracking-[-1.2px] text-white"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Start Your Campaign Today
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <motion.div whileHover={BUTTON_MOTION.hover} whileTap={BUTTON_MOTION.tap}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black no-underline transition-colors hover:bg-gray-100"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div whileHover={BUTTON_MOTION.hover} whileTap={BUTTON_MOTION.tap}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-600 px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:border-gray-400 hover:bg-white/5"
                >
                  Talk to Us
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}







