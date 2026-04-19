"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  MapPin,
  Calendar,
  Building2,
  Headphones,
  ArrowRight,
  Check,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import HeroInfluencers from "@/components/sections/HeroInfluencers";
import { BUTTON_MOTION, PREMIUM_EASE } from "@/lib/motion";
import { COUNTRY_CODE_SUGGESTIONS } from "@/lib/countryCodes";

const benefits = [
  {
    icon: Wallet,
    title: "Earn real income",
    desc: "Paid collaborations with local businesses that value your voice - not exploitative barter-only deals.",
  },
  {
    icon: TrendingUp,
    title: "Grow your credibility",
    desc: "Brand-backed content signals quality to algorithms and new followers alike.",
  },
  {
    icon: MapPin,
    title: "Stay local",
    desc: "Promote places your audience can visit. Authentic proximity beats generic sponsorships.",
  },
  {
    icon: Calendar,
    title: "Flexible cadence",
    desc: "Pick campaigns that fit your schedule. Clear briefs, defined deliverables, no chaos.",
  },
  {
    icon: Building2,
    title: "Premium local brands",
    desc: "Build a portfolio with operators who care about craft - cafes, studios, clinics, and retail.",
  },
  {
    icon: Headphones,
    title: "Ops handled for you",
    desc: "Contracts, timelines, and payouts coordinated centrally so you focus on creating.",
  },
];

const niches = [
  "Food & beverage",
  "Fitness & health",
  "Beauty & lifestyle",
  "Fashion",
  "Travel & local",
  "Education",
  "Tech",
  "Entertainment",
];

const platforms = ["Instagram", "YouTube", "Shorts", "Facebook", "X", "LinkedIn"];

const steps = [
  { n: "01", title: "Apply", desc: "Share your handle, audience, and city. We review within 48 hours." },
  { n: "02", title: "Get matched", desc: "We pair you with brands that fit your niche and neighbourhood." },
  { n: "03", title: "Create", desc: "Follow a tight brief, keep your style, ship on deadline." },
  { n: "04", title: "Get paid", desc: "Payments released on schedule - tracked in your creator profile." },
];

const onboardingBenefits = [
  { title: "Paid collaborations", desc: "No barter ambiguity - each campaign has clear payout terms." },
  { title: "Local brand deals", desc: "Work with businesses your audience can actually visit and trust." },
  { title: "Consistent campaigns", desc: "Structured pipeline with recurring opportunities, not one-off chaos." },
  { title: "Growth support", desc: "Briefing guidance, content feedback, and strategic creator matching." },
];

const fieldClass =
  "w-full rounded-xl border border-white/20 bg-black px-4 py-3 text-[14px] text-white outline-none transition-all placeholder:text-white/45 focus:border-white/40 focus:ring-2 focus:ring-white/20";

export default function InfluencersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    handle: "",
    followers: "",
    niche: "",
    city: "",
    area: "",
    bio: "",
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.termsAccepted) {
      setError("Please accept the terms to continue");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: `${form.countryCode} ${form.phone}`.trim(),
          city: form.city,
          area: form.area,
          business: "Influencer",
          instagram: form.handle.startsWith("@") ? form.handle : `@${form.handle}`,
          followers: form.followers,
          goals: form.niche,
          message: form.bio,
          type: "Influencer",
          termsAccepted: true,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Failed to submit your application.");
      }

      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <HeroInfluencers />

      {/* Benefits */}
      <section id="benefits" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-14 text-center md:mb-20">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Benefits</p>
            <h2
              className="mb-4 text-[clamp(30px,5vw,48px)] font-black tracking-[-1px] text-neutral-950"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              Built for serious creators
            </h2>
            <p className="mx-auto max-w-md text-[15px] text-gray-500">
              Whether you are nano or mid-tier, if your audience is engaged, there is a campaign for you.
            </p>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <FadeIn key={b.title} delay={i * 0.06} direction="up">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="h-full rounded-2xl border border-gray-100 bg-gray-50/60 p-7 transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:p-8"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-neutral-950">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 text-[16px] font-bold text-neutral-950">{b.title}</h3>
                    <p className="text-[14px] leading-relaxed text-gray-500">{b.desc}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-gray-100 bg-gray-50/80 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mb-12 text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Process</p>
            <h2
              className="text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] text-neutral-950"
              style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
            >
              How it works for you
            </h2>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                >
                  <div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-[15px] font-black text-white"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    {s.n}
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold text-neutral-950">{s.title}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">{s.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Eligibility</p>
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
              Who can join
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-gray-500">
              We welcome creators across sizes. Local businesses often convert best with nano and micro accounts with
              tight community trust.
            </p>
            <ul className="space-y-3">
              {[
                "500+ engaged followers on a primary platform",
                "Consistent posting within the last 30 days",
                "Based in India or creating locally relevant content",
                "Transparent paid partnership disclosures",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[14px] text-gray-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-950">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Niches</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {niches.map((n) => (
                <span key={n} className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-[13px] font-medium text-gray-600">
                  {n}
                </span>
              ))}
            </div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Platforms</p>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span key={p} className="rounded-full bg-neutral-950 px-3.5 py-1.5 text-[13px] font-semibold text-white">
                  {p}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Creator onboarding benefits */}
      <section id="apply" className="border-t border-gray-100 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Creator onboarding</p>
            <h2 className="mb-2 text-[clamp(28px,4vw,40px)] font-black tracking-[-1px] text-neutral-950" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
              Designed for creators who want predictable growth
            </h2>
            <p className="text-[15px] text-gray-500">Everything below is structured to help you launch faster and earn consistently.</p>
          </FadeIn>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {onboardingBenefits.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <motion.div whileHover={{ y: -4, scale: 1.03 }} transition={{ duration: 0.7, ease: PREMIUM_EASE }} className="h-full rounded-2xl border border-gray-100 bg-gray-50/70 p-6">
                  <h3 className="mb-2 text-[16px] font-bold text-neutral-950">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-gray-500">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-2">
            <motion.div
              id="apply-form"
              initial={{ opacity: 0, x: -34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: PREMIUM_EASE }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/18 bg-black p-8 backdrop-blur-[10px] shadow-[0_16px_48px_rgba(0,0,0,0.36),inset_0_1px_0_rgba(255,255,255,0.14)] md:p-9">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">Apply</p>
                <h3 className="mb-2 text-2xl font-black tracking-tight text-white" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                  Join the network
                </h3>
                <p className="mb-7 text-[14px] text-white/75">Applications reviewed in 48 hours. Updates sent on WhatsApp.</p>

                {done ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">Application received</h3>
                    <p className="text-[14px] leading-relaxed text-white/75">
                      Our team will review your profile and message you within two days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="flex flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-white">Full Name *</label>
                        <input required className={fieldClass} placeholder="e.g., Aarav Sharma" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        <p className="mt-1 text-[11px] text-white/55">Use your real name for payout verification.</p>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-white">WhatsApp Number *</label>
                        <div className="grid grid-cols-[72px_1fr] gap-2">
                          <input
                            required
                            list="country-code-options-influencer"
                            type="text"
                            className={fieldClass}
                            value={form.countryCode}
                            onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                            placeholder="+1"
                          />
                          <datalist id="country-code-options-influencer">
                            {COUNTRY_CODE_SUGGESTIONS.map((code) => (
                              <option key={code.value + code.label} value={code.value} label={code.label} />
                            ))}
                          </datalist>
                          <input
                            required
                            type="tel"
                            className={fieldClass}
                            placeholder="Phone number"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          />
                        </div>
                        <p className="mt-1 text-[11px] text-white/55">We share campaign approvals and briefs here.</p>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[13px] font-semibold text-white">Email *</label>
                      <input
                        required
                        type="email"
                        className={fieldClass}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-white">Instagram Handle *</label>
                        <div className="relative">
                          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50">@</span>
                          <input required className={`${fieldClass} pl-8`} placeholder="yourhandle" value={form.handle} onChange={(e) => setForm({ ...form, handle: e.target.value })} />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-white">Followers *</label>
                        <select required className={fieldClass} value={form.followers} onChange={(e) => setForm({ ...form, followers: e.target.value })}>
                          <option value="">Select range</option>
                          <option>500 - 5,000</option>
                          <option>5,000 - 50,000</option>
                          <option>50,000 - 500,000</option>
                          <option>500,000+</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-white">Niche *</label>
                        <select required className={fieldClass} value={form.niche} onChange={(e) => setForm({ ...form, niche: e.target.value })}>
                          <option value="">Select</option>
                          {niches.map((n) => (
                            <option key={n}>{n}</option>
                          ))}
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[13px] font-semibold text-white">City *</label>
                        <input required className={fieldClass} placeholder="e.g., Bengaluru" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[13px] font-semibold text-white">Area / Locality *</label>
                      <input
                        required
                        className={fieldClass}
                        placeholder="e.g., Indiranagar"
                        value={form.area}
                        onChange={(e) => setForm({ ...form, area: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-[13px] font-semibold text-white">Bio / Creator pitch</label>
                      <textarea
                        rows={3}
                        className={`${fieldClass} resize-none`}
                        placeholder="Share your style, audience type, and collaborations you want."
                        value={form.bio}
                        onChange={(e) => setForm({ ...form, bio: e.target.value })}
                      />
                    </div>
                    <label className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-[13px] text-white/85">
                      <input
                        type="checkbox"
                        checked={form.termsAccepted}
                        onChange={(e) => setForm({ ...form, termsAccepted: e.target.checked })}
                        className="mt-0.5 h-4 w-4 rounded border-white/30 bg-black accent-white"
                      />
                      <span className="leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="underline underline-offset-2 hover:text-white">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={loading ? { scale: 1 } : BUTTON_MOTION.hover}
                      whileTap={loading ? { scale: 1 } : BUTTON_MOTION.tap}
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-black py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:shadow-[0_0_22px_rgba(255,255,255,0.16)] disabled:opacity-60"
                    >
                      {loading ? "Submitting..." : "Apply to Join ->"}
                    </motion.button>
                    {error ? <p className="text-center text-[12px] text-red-300">{error}</p> : null}
                    <p className="text-center text-[12px] text-white/55">We will contact you by email after review.</p>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.06, ease: PREMIUM_EASE }}
              className="rounded-2xl border border-gray-100 bg-gray-50/80 p-7 md:p-8"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">Onboarding flow</p>
              <h3 className="mb-6 text-[clamp(24px,3.8vw,34px)] font-black leading-tight text-neutral-950" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                From application to earning in four clear steps
              </h3>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                className="space-y-3.5"
              >
                {[
                  { title: "Review", desc: "We check audience quality and content consistency." },
                  { title: "Approval", desc: "You get campaign-fit confirmation and onboarding notes." },
                  { title: "Collaboration", desc: "Receive briefs, publish content, and submit links." },
                  { title: "Earning", desc: "Payouts released on schedule with transparent status." },
                ].map((item, i) => (
                  <motion.li
                    key={item.title}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: PREMIUM_EASE } },
                    }}
                    className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-[12px] font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-neutral-950">{item.title}</p>
                      <p className="text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
                <p className="mb-1 text-[13px] font-semibold text-neutral-950 inline-flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4" />
                  Trust statement
                </p>
                <p className="text-[13px] leading-relaxed text-gray-500">
                  You keep your voice and content style. We only onboard creators who can build authentic trust with local audiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-neutral-950 px-8 py-14 text-center">
          <FadeIn>
            <h2 className="mb-3 text-2xl font-black tracking-tight text-white md:text-3xl" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
              Questions before you apply?
            </h2>
            <p className="mb-8 text-[15px] text-gray-500">Message us - we help creators understand fit before they invest time.</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <a
                href="https://wa.me/918977955534"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[15px] font-semibold text-neutral-950 no-underline"
              >
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}





