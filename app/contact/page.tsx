"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { HeroRevealStack } from "@/components/ui/HeroReveal";
import { BUTTON_MOTION } from "@/lib/motion";

const fieldClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14px] text-neutral-900 outline-none transition-all placeholder:text-gray-400 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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

      <section className="px-6 py-16 md:py-20">
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
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">Email</p>
            <a
              href="mailto:hello@influcity.com"
              className="inline-flex items-center gap-2.5 text-[16px] font-semibold text-neutral-950 no-underline transition-colors hover:text-neutral-700"
            >
              <Mail className="h-4 w-4" />
              hello@influcity.com
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

