import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_GMAIL_COMPOSE_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About the Company & Platform Disclaimer",
  description: "Read the INFLUCITY company and platform disclaimer.",
};

const effectiveDate = "April 16, 2026";

export default function DisclaimerPage() {
  return (
    <div className="bg-white text-neutral-950">
      <section className="border-b border-gray-100 px-6 pb-14 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Legal</p>
          <h1
            className="mb-4 text-[clamp(34px,5.5vw,54px)] font-black leading-[1.06] tracking-[-1.6px] text-neutral-950"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            About the Company & Platform Disclaimer
          </h1>
          <p className="text-[14px] text-gray-500">Effective Date: {effectiveDate}</p>
        </div>
      </section>

      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] md:p-8">
          <p className="mb-8 text-[15px] leading-relaxed text-gray-700">
            INFLUCITY is a digital platform designed to connect local businesses with influencers for the purpose of
            marketing, promotion, and customer acquisition through social media campaigns.
          </p>

          <p className="mb-8 text-[15px] leading-relaxed text-gray-700">
            Our platform enables businesses to discover, collaborate with, and manage influencer partnerships, while
            allowing influencers to access brand opportunities and monetise their content.
          </p>

          <p className="mb-8 text-[15px] leading-relaxed text-gray-700">
            INFLUCITY operates solely as an intermediary technology platform and does not directly participate in or
            control the execution of campaigns, content creation, or outcomes generated from such collaborations.
          </p>

          <div className="space-y-8 text-[15px] leading-relaxed text-gray-700">
            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">PLATFORM ROLE</h2>
              <p>
                INFLUCITY provides tools, infrastructure, and support to facilitate collaborations between businesses
                and influencers. However:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>We do not guarantee specific results such as customer growth, sales, engagement, or return on investment.</li>
                <li>We do not control or verify the accuracy, quality, or performance of influencer content.</li>
                <li>We are not responsible for agreements, payments, or disputes between users unless explicitly stated.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">USER RESPONSIBILITY</h2>
              <p>All users of the platform (including businesses and influencers) are responsible for:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Providing accurate and complete information</li>
                <li>Ensuring compliance with applicable laws and advertising guidelines</li>
                <li>Maintaining professional conduct in all collaborations</li>
                <li>Entering into clear agreements where necessary</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">INFLUENCER CONTENT</h2>
              <p>Influencers using the platform are required to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Create original and authentic content</li>
                <li>Avoid misleading or false claims</li>
                <li>
                  Comply with applicable advertising and disclosure guidelines, including those issued by relevant
                  authorities in India
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">BUSINESS USE</h2>
              <p>Businesses using INFLUCITY are responsible for:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Clearly defining campaign expectations</li>
                <li>Ensuring that promotions comply with applicable laws</li>
                <li>Making payments and fulfilling agreed obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">LIMITATION OF LIABILITY</h2>
              <p>INFLUCITY shall not be held liable for:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Any direct or indirect business losses</li>
                <li>Campaign performance or results</li>
                <li>Actions, omissions, or misconduct of users</li>
                <li>Third-party platform issues (including social media platforms)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">WEBSITE USAGE</h2>
              <p>
                By accessing and using this website, you agree to use it only for lawful purposes. Any misuse,
                unauthorized access, or attempt to disrupt the platform is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">MODIFICATIONS</h2>
              <p>
                INFLUCITY reserves the right to update or modify the platform, services, or this disclaimer at any
                time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-[16px] font-bold text-neutral-950">CONTACT</h2>
              <p>
                For any questions or concerns, please contact:{" "}
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
