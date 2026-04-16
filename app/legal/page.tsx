import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal pages for INFLUCITY: Privacy Policy, Terms & Conditions, and Disclaimer.",
};

const legalLinks = [
  {
    title: "Privacy Policy",
    description: "How INFLUCITY collects, uses, and protects user data.",
    href: "/privacy",
  },
  {
    title: "Terms & Conditions",
    description: "Terms governing the use of INFLUCITY services and platform.",
    href: "/terms",
  },
  {
    title: "Platform Disclaimer",
    description: "INFLUCITY's role, limitations, and user responsibilities.",
    href: "/disclaimer",
  },
];

export default function LegalPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Legal</p>
          <h1
            className="mb-4 text-[clamp(34px,5.5vw,54px)] font-black leading-[1.06] tracking-[-1.6px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            Legal Information
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-gray-500">
            Access all official legal documents for INFLUCITY in one place.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto grid max-w-4xl gap-5">
          {legalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 no-underline shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all hover:border-gray-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-[19px] font-bold text-neutral-950">{item.title}</h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-500">{item.description}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-neutral-700" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
