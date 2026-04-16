"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroRevealStack } from "@/components/ui/HeroReveal";
import { BUTTON_MOTION } from "@/lib/motion";

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-[14px] text-white outline-none transition-all placeholder:text-gray-500 focus:border-white/35 focus:bg-white/10 focus:ring-2 focus:ring-white/10";

export default function GetStartedPage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    city: "",
    phone: "",
    goals: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          business: form.business,
          city: form.city,
          phone: form.phone,
          goals: form.goals,
          source: "Get Started",
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Failed to submit your request.");
      }

      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_6%,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.05),transparent_40%)]" />

      <section className="relative border-b border-white/10 px-6 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <HeroRevealStack
            eyebrow={<p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500">Get Started</p>}
            title={
              <h1
                className="mb-4 text-[clamp(36px,6vw,58px)] font-black leading-[1.06] tracking-[-2px] text-white"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                Start Your Growth Campaign
              </h1>
            }
            subtitle={
              <p className="text-[17px] leading-relaxed text-gray-300">
                Share your business details and goals. We will send a clear campaign plan tailored to your city.
              </p>
            }
          />
        </div>
      </section>

      <section className="relative px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/16 bg-[rgba(0,0,0,0.4)] p-8 backdrop-blur-[10px] shadow-[0_16px_50px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.14)] md:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />

            {done ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mb-2 text-lg font-bold text-white">Brief received</h2>
                <p className="text-[14px] leading-relaxed text-gray-400">
                  Our team will contact you with your campaign plan soon.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-gray-300">Name *</label>
                  <input
                    required
                    className={fieldClass}
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-gray-300">Business *</label>
                  <input
                    required
                    className={fieldClass}
                    placeholder="Business name"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-gray-300">City *</label>
                    <input
                      required
                      className={fieldClass}
                      placeholder="e.g., Hyderabad"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[13px] font-semibold text-gray-300">Phone *</label>
                    <input
                      required
                      className={fieldClass}
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-gray-300">Goals *</label>
                  <textarea
                    required
                    rows={5}
                    className={`${fieldClass} resize-none`}
                    placeholder="Tell us your growth goals, locations, and campaign expectations."
                    value={form.goals}
                    onChange={(e) => setForm({ ...form, goals: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={loading ? { scale: 1 } : BUTTON_MOTION.hover}
                  whileTap={loading ? { scale: 1 } : BUTTON_MOTION.tap}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-neutral-950 transition-all hover:bg-gray-100 hover:shadow-[0_0_22px_rgba(255,255,255,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Get My Campaign Plan"}
                  {!loading ? <ArrowRight className="h-4 w-4" /> : null}
                </motion.button>
                {error ? <p className="text-center text-[12px] text-red-300">{error}</p> : null}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
