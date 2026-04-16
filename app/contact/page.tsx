"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, CheckCircle2, Clock3, Radar, BarChart3, ShieldCheck } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { HeroRevealStack } from "@/components/ui/HeroReveal";
import { BUTTON_MOTION, PREMIUM_EASE } from "@/lib/motion";

const faqs = [
  {
    q: "How quickly can a campaign go live?",
    a: "Most campaigns go live within 48 hours of kickoff. We maintain a vetted creator bench across major cities.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Restaurants, salons, gyms, retail, clinics, coaching, and more - any local business that wins when nearby customers show up.",
  },
  {
    q: "How do I track results?",
    a: "You get unique tracking links and a real-time dashboard for visits, leads, and attributed revenue - broken down by influencer and asset.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "We recommend a 30-day sprint to gather signal. Your strategist will propose the lightest viable scope for your market.",
  },
];

const trustPoints = [
  { Icon: Clock3, text: "48-hour campaign launch" },
  { Icon: Radar, text: "Local influencer matching" },
  { Icon: BarChart3, text: "ROI tracking with live clarity" },
  { Icon: ShieldCheck, text: "No long-term contracts" },
];

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14px] text-white outline-none transition-all placeholder:text-gray-500 focus:border-white/35 focus:bg-white/10 focus:ring-2 focus:ring-white/10";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setDone(true);
  };

  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_6%,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.05),transparent_40%)]" />

      <section className="relative border-b border-white/10 px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-2xl text-center">
          <HeroRevealStack
            eyebrow={<p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">Contact</p>}
            title={
              <h1
                className="mb-5 text-[clamp(36px,6vw,58px)] font-black leading-[1.06] tracking-[-2px] text-white"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                Build local growth that turns into revenue
              </h1>
            }
            subtitle={
              <p className="text-[17px] leading-relaxed text-gray-300">
                Tell us your business goal and market. We map your fastest path to launch, attribution, and measurable customer growth.
              </p>
            }
          />
        </div>
      </section>

      <section className="relative px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.75, ease: PREMIUM_EASE }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/16 bg-[rgba(0,0,0,0.4)] p-8 backdrop-blur-[10px] shadow-[0_16px_50px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.14)] md:p-10">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />
              <h2 className="mb-1 text-xl font-bold text-white" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                Start your campaign brief
              </h2>
              <p className="mb-8 text-[14px] text-gray-400">Our team responds within one business day.</p>

              {done ? (
                <div className="py-10 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">Message received</h3>
                  <p className="text-[14px] leading-relaxed text-gray-400">
                    We will reach out shortly on WhatsApp with your campaign next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-5">
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-gray-300">Full Name *</label>
                    <input
                      required
                      className={fieldClass}
                      placeholder="e.g., Rahul Verma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-gray-300">WhatsApp Number *</label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[14px] text-gray-500">+91</span>
                      <input
                        required
                        className={`${fieldClass} pl-12`}
                        placeholder="98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-gray-300">Business Goal *</label>
                    <textarea
                      required
                      rows={5}
                      className={`${fieldClass} resize-none`}
                      placeholder="Example: Increase weekend walk-ins by 30% across my 2 salon locations in Hyderabad."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? { scale: 1 } : BUTTON_MOTION.hover}
                    whileTap={loading ? { scale: 1 } : BUTTON_MOTION.tap}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-neutral-950 transition-all hover:bg-gray-100 hover:shadow-[0_0_22px_rgba(255,255,255,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Submit brief"}
                    {!loading ? <ArrowRight className="h-4 w-4" /> : null}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.75, delay: 0.08, ease: PREMIUM_EASE }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-white/12 bg-[rgba(0,0,0,0.32)] p-7 shadow-[0_14px_36px_rgba(0,0,0,0.34)]">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">Why INFLUCITY</p>
              <h3 className="mb-6 text-[clamp(26px,4vw,34px)] font-black leading-tight text-white" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                Turn campaigns into predictable customer growth
              </h3>
              <ul className="space-y-3.5">
                {trustPoints.map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-[14px] text-gray-300">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.a
              href="https://wa.me/918977955534"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ duration: 0.7, ease: PREMIUM_EASE }}
              className="group block rounded-2xl border border-white/20 bg-white/10 p-7 no-underline shadow-[0_16px_36px_rgba(0,0,0,0.32)]"
            >
              <MessageSquare className="mb-4 h-6 w-6 text-gray-300 transition-colors group-hover:text-white" strokeWidth={1.5} />
              <h3 className="mb-2 text-lg font-bold text-white" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                Talk on WhatsApp now
              </h3>
              <p className="mb-5 text-[14px] leading-relaxed text-gray-400">
                Fastest route to launch details. Get a practical recommendation for your city and business type.
              </p>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-gray-200">
                +91 89779 55534
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.a>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-[13px] leading-relaxed text-gray-400">
                Transparent pricing. Clear attribution. No long-term lock-ins. Built for operators who care about outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <FadeIn className="mb-10 text-center">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">FAQ</p>
            <h2 className="text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
              Common questions
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <FadeIn key={f.q}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.7, ease: PREMIUM_EASE }}
                  className="rounded-2xl border border-white/12 bg-[rgba(0,0,0,0.35)] p-6 backdrop-blur-[8px] md:p-7"
                >
                  <h3 className="mb-2 text-[15px] font-bold text-white">{f.q}</h3>
                  <p className="text-[14px] leading-relaxed text-gray-400">{f.a}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

