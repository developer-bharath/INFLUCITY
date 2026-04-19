import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_GMAIL_COMPOSE_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy for INFLUCITY.",
};

const effectiveDate = "April 16, 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Legal</p>
          <h1
            className="mb-4 text-[clamp(34px,5.5vw,54px)] font-black leading-[1.06] tracking-[-1.6px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p className="text-[14px] text-gray-500">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] md:p-8">
          <p className="mb-8 text-[15px] leading-relaxed text-gray-700">
            INFLUCITY (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to
            protecting your personal data in accordance with applicable Indian laws, including the Information
            Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
          </p>

          <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">1. INFORMATION WE COLLECT</h2>
              <p>We may collect the following information:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (including WhatsApp)</li>
                <li>Business details (for businesses)</li>
                <li>Social media details (for influencers)</li>
                <li>Location (city, state, country)</li>
                <li>Any additional information submitted via forms</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">2. PURPOSE OF DATA COLLECTION</h2>
              <p>We use your data to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Connect businesses with influencers</li>
                <li>Manage campaigns and collaborations</li>
                <li>Communicate regarding services and opportunities</li>
                <li>Improve our platform and services</li>
                <li>Send updates and promotional communication (if consented)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">3. CONSENT</h2>
              <p>
                By submitting your details on our platform, you consent to the collection and use of your data for the
                purposes outlined above.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">4. DATA SHARING</h2>
              <p>We may share your information:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>With businesses (if you are an influencer)</li>
                <li>With influencers (if you are a business)</li>
                <li>With trusted service providers (for operations, hosting, analytics)</li>
              </ul>
              <p className="mt-2">We do NOT sell your personal data.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">5. DATA STORAGE AND SECURITY</h2>
              <p>
                We implement reasonable technical and organizational measures to protect your data. However, no system
                is completely secure.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">6. DATA RETENTION</h2>
              <p>We retain your data only as long as necessary for business and legal purposes.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">7. YOUR RIGHTS</h2>
              <p>You may:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Request access to your data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-2">
                Contact:{" "}
                <Link
                  href={CONTACT_GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-neutral-900 underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </Link>
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">8. COOKIES</h2>
              <p>We may use cookies to improve user experience and analytics.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">9. THIRD-PARTY LINKS</h2>
              <p>We are not responsible for third-party platforms (e.g., Instagram).</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">10. UPDATES</h2>
              <p>We may update this policy. Changes will be posted on this page.</p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">11. CONTACT</h2>
              <p>
                Email:{" "}
                <Link
                  href={CONTACT_GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-neutral-900 underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </Link>
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
