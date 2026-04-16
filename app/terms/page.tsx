import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms & Conditions for using INFLUCITY.",
};

const effectiveDate = "April 16, 2026";

export default function TermsPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Legal</p>
          <h1
            className="mb-4 text-[clamp(34px,5.5vw,54px)] font-black leading-[1.06] tracking-[-1.6px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            Terms & Conditions
          </h1>
          <p className="text-[14px] text-gray-500">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] md:p-8">
          <p className="mb-8 text-[15px] leading-relaxed text-gray-700">
            By using INFLUCITY, you agree to the following terms:
          </p>

          <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">1. PLATFORM ROLE</h2>
              <p>
                INFLUCITY acts as an intermediary platform connecting businesses and influencers. We do not guarantee
                specific outcomes, sales, or engagement.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">2. ELIGIBILITY</h2>
              <p>You must be at least 18 years old to use our services.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">3. USER RESPONSIBILITIES</h2>
              <p>Users agree to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Provide accurate information</li>
                <li>Not misuse the platform</li>
                <li>Comply with applicable laws</li>
                <li>Maintain professional conduct</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">4. BUSINESS TERMS</h2>
              <p>Businesses agree:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>To provide clear campaign requirements</li>
                <li>To make agreed payments (if applicable)</li>
                <li>Not to engage in misleading advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">5. INFLUENCER TERMS</h2>
              <p>Influencers agree:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>To provide authentic and original content</li>
                <li>Not to use fake followers or engagement</li>
                <li>To comply with advertising guidelines</li>
                <li>To maintain content quality and professionalism</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">6. PAYMENTS</h2>
              <p>INFLUCITY may charge service fees. Payment terms will be communicated separately.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">7. NO GUARANTEE</h2>
              <p>We do not guarantee:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Specific number of customers</li>
                <li>Revenue increase</li>
                <li>Campaign performance</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">8. INTELLECTUAL PROPERTY</h2>
              <ul className="list-disc space-y-1 pl-5">
                <li>Users retain ownership of their content</li>
                <li>
                  By participating, you grant INFLUCITY limited rights to use content for promotion and case studies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">9. TERMINATION</h2>
              <p>We reserve the right to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Suspend accounts</li>
                <li>Remove users for violations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">10. LIMITATION OF LIABILITY</h2>
              <p>INFLUCITY is not liable for:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Business losses</li>
                <li>Influencer performance</li>
                <li>Third-party actions</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">11. INDEMNITY</h2>
              <p>Users agree to indemnify INFLUCITY from claims arising from misuse or violation.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">12. GOVERNING LAW</h2>
              <p>These terms are governed by the laws of India.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">13. DISPUTES</h2>
              <p>All disputes shall be subject to jurisdiction of courts in Karimnagar, India.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">14. CONTACT</h2>
              <Link
                href="mailto:hello@influicty.in"
                className="font-semibold text-neutral-900 underline underline-offset-2"
              >
                hello@influicty.in
              </Link>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
