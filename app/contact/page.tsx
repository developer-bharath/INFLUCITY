"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { HeroRevealStack } from "@/components/ui/HeroReveal";
import { BUTTON_MOTION } from "@/lib/motion";
import { COUNTRY_CODE_SUGGESTIONS } from "@/lib/countryCodes";

const fieldClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-neutral-900 outline-none transition-all placeholder:text-gray-400 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200";

function AnimatedSupportLady() {
  return (
    <div className="relative mx-auto mb-6 h-[220px] w-full max-w-[260px]">
      <motion.div
        aria-hidden
        className="absolute left-4 top-8 h-16 w-16 rounded-full bg-neutral-200/70 blur-2xl"
        animate={{ y: [0, -10, 0], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-6 top-4 h-14 w-14 rounded-full bg-neutral-300/65 blur-2xl"
        animate={{ y: [0, 8, 0], opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
      />

      <motion.svg
        viewBox="0 0 260 220"
        className="relative z-10 h-full w-full"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="130" cy="206" rx="72" ry="10" fill="#e5e7eb" />

        <rect x="76" y="132" width="108" height="62" rx="24" fill="#111827" />
        <rect x="86" y="142" width="88" height="42" rx="18" fill="#1f2937" />

        <circle cx="130" cy="98" r="34" fill="#f9d9c4" />
        <path d="M98 94c0-23 14-38 32-38s32 15 32 38v8H98v-8z" fill="#111827" />
        <path d="M104 126c8 10 16 14 26 14s18-4 26-14v10c0 16-12 28-26 28s-26-12-26-28v-10z" fill="#f3c7ae" />

        <rect x="104" y="116" width="52" height="50" rx="20" fill="#ffffff" />
        <rect x="92" y="144" width="76" height="58" rx="26" fill="#f3f4f6" />

        <circle cx="118" cy="98" r="3" fill="#1f2937" />
        <circle cx="142" cy="98" r="3" fill="#1f2937" />
        <path d="M121 111c3 3 6 4 9 4s6-1 9-4" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" fill="none" />

        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}>
          <rect x="28" y="78" width="44" height="28" rx="10" fill="#111827" />
          <path d="M41 106l-5 9 12-7" fill="#111827" />
          <path d="M42 91h16M42 97h10" stroke="#f9fafb" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        <motion.g
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
        >
          <rect x="188" y="86" width="44" height="28" rx="10" fill="#111827" />
          <path d="M216 114l7 9-13-7" fill="#111827" />
          <circle cx="203" cy="99" r="3" fill="#f9fafb" />
          <circle cx="212" cy="99" r="3" fill="#f9fafb" />
          <circle cx="221" cy="99" r="3" fill="#f9fafb" />
        </motion.g>
      </motion.svg>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    message: "",
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
          email: form.email,
          phone: `${form.countryCode} ${form.phone}`.trim(),
          message: form.message,
          type: "Contact",
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Failed to send your message.");
      }

      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-2xl text-center">
          <HeroRevealStack
            eyebrow={<p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Contact</p>}
            title={
              <h1
                className="mb-4 text-[clamp(36px,6vw,56px)] font-black leading-[1.06] tracking-[-2px] text-neutral-950"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                Let&apos;s Talk
              </h1>
            }
            subtitle={
              <p className="text-[17px] leading-relaxed text-gray-500">
                Have a question or want to reach our team? Send a message and we will get back to you soon.
              </p>
            }
          />
        </div>
      </section>

      <section id="form" className="scroll-mt-24 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.05)] md:p-8">
            {done ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-neutral-900">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h2 className="mb-2 text-xl font-bold text-neutral-950">Thanks for reaching out</h2>
                <p className="text-[14px] text-gray-500">We will reply as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-gray-700">Name *</label>
                  <input
                    required
                    className={fieldClass}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-gray-700">Email *</label>
                  <input
                    required
                    type="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-gray-700">Phone *</label>
                  <div className="grid grid-cols-[72px_1fr] gap-2">
                    <input
                      required
                      list="country-code-options-contact"
                      type="text"
                      className={fieldClass}
                      value={form.countryCode}
                      onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                      placeholder="+1"
                    />
                    <datalist id="country-code-options-contact">
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
                </div>
                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-gray-700">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className={`${fieldClass} resize-none`}
                    placeholder="How can we help?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={loading ? { scale: 1 } : BUTTON_MOTION.hover}
                  whileTap={loading ? { scale: 1 } : BUTTON_MOTION.tap}
                  className="mt-1 inline-flex items-center justify-center rounded-xl bg-neutral-950 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-neutral-800 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
                {error ? <p className="text-center text-[12px] text-red-500">{error}</p> : null}
              </form>
            )}
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-7 md:p-8">
            <AnimatedSupportLady />
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">Email</p>
            <a
              href="mailto:hello@influicty.in"
              className="inline-flex items-center gap-2.5 text-[16px] font-semibold text-neutral-950 no-underline transition-colors hover:text-neutral-700"
            >
              <Mail className="h-4 w-4" />
              hello@influicty.in
            </a>
            <p className="mt-4 text-[14px] leading-relaxed text-gray-500">
              For partnerships, support, or general questions, email us anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

