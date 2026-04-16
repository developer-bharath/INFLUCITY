"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Megaphone,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Zap,
  MapPin,
  BarChart3,
  DollarSign,
  Star,
  ChevronRight,
  UtensilsCrossed,
  Scissors,
  Dumbbell,
  Store,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import clsx from "clsx";
import HeroAnimation from "@/components/HeroAnimation";

/** Static section title stack - avoids scroll-reveal wrappers misaligning headings. */
function SectionIntro({
  eyebrow,
  title,
  description,
  theme = "light",
  className,
  titleId,
  titleClassName,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  theme?: "light" | "dark";
  className?: string;
  titleId?: string;
  titleClassName?: string;
}) {
  const dark = theme === "dark";
  return (
    <div className={clsx("mx-auto mb-16 max-w-3xl text-center md:mb-24", className)}>
      <p
        className={clsx(
          "mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]",
          dark ? "text-neutral-500" : "text-gray-400"
        )}
      >
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={clsx(
          "text-balance font-black leading-[1.08] tracking-[-0.035em]",
          titleClassName ?? "text-[clamp(28px,4.5vw,52px)]",
          dark ? "text-white" : "text-neutral-950"
        )}
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={clsx(
            "mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed sm:text-[17px]",
            dark ? "text-neutral-400" : "text-gray-500"
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

function AnimatedStatValue({
  target,
  suffix,
  duration = 1400,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const holdMs = 650;
    const cycleMs = duration + holdMs;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const inCycle = elapsed % cycleMs;
      const progress = Math.min(inCycle / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const whoItsFor = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    desc: "Drive reservations, delivery orders, and walk-ins from people who actually live nearby.",
  },
  {
    icon: Scissors,
    title: "Salons",
    desc: "Fill your chair calendar with clients who book through trusted creator recommendations.",
  },
  {
    icon: Dumbbell,
    title: "Gyms",
    desc: "Grow memberships and trials with proof-led campaigns instead of spray-and-pray ads.",
  },
  {
    icon: Store,
    title: "Retail shops",
    desc: "Turn foot traffic into repeat buyers with hyper-local storytelling and clear offers.",
  },
];

const steps = [
  {
    icon: <Building2 size={24} />,
    num: "01",
    title: "Business joins",
    desc: "Share your goals, audience, and neighbourhood. We design a campaign structure that fits how you actually acquire customers.",
  },
  {
    icon: <Megaphone size={24} />,
    num: "02",
    title: "Influencers promote",
    desc: "Vetted local creators publish authentic endorsements to audiences who already live and spend near you.",
  },
  {
    icon: <TrendingUp size={24} />,
    num: "03",
    title: "Customers arrive",
    desc: "Track visits, leads, and conversions with attribution that ties revenue back to each post and creator.",
  },
];

const comparisons = [
  { label: "Local influencer network", us: true, them: false },
  { label: "Transparent pricing", us: true, them: false },
  { label: "Real-time campaign tracking", us: true, them: false },
  { label: "Performance-based model", us: true, them: false },
  { label: "Campaign live in 48 hours", us: true, them: false },
  { label: "Dedicated account manager", us: true, them: true },
];

const testimonials = [
  {
    quote:
      "Within three weeks our footfall jumped 40%. The local influencers INFLUCITY matched us with felt like regulars recommending our cafe.",
    name: "Priya Sharma",
    role: "Owner, Cafe Aroma",
    initials: "PS",
  },
  {
    quote:
      "Traditional digital ads gave us noise. INFLUCITY gave us over 200 new memberships in the first month with clear ROI.",
    name: "Rahul Mehta",
    role: "Founder, FitZone Gym",
    initials: "RM",
  },
  {
    quote:
      "We finally see which influencer drove which sale. No more guessing - just decisions based on real numbers.",
    name: "Ananya Singh",
    role: "Manager, Urban Threads",
    initials: "AS",
  },
];

const proofStats = [
  { target: 500, suffix: "+", label: "Campaigns launched" },
  { target: 2, suffix: "K+", label: "Creator network" },
  { target: 98, suffix: "%", label: "Client satisfaction" },
  { target: 10, suffix: "x", label: "Avg. ROI reported" },
];

const partnerNames = [
  "Cafe Aroma",
  "FitZone",
  "Urban Threads",
  "Glow Studio",
  "Northside Retail",
  "Pulse Clinic",
];

const features = [
  {
    icon: <Zap size={20} />,
    title: "48-hour launch",
    desc: "From brief to live posts in two days - so you are not waiting on another quarterly plan.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Hyper-local targeting",
    desc: "Neighbourhood-level reach: the people who can walk through your door this week.",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Real-time tracking",
    desc: "Live dashboards tie clicks, visits, and conversions to each influencer and asset.",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Performance-based model",
    desc: "Structured around outcomes you care about - not vanity impressions.",
  },
];

const resultMetrics = [
  { value: "40%", label: "Avg. reported growth", sub: "Footfall & revenue lift across retail cohorts" },
  { value: "200+", label: "New customers in 30 days", sub: "Representative fitness & hospitality wins" },
  { value: "10x", label: "Return on spend", sub: "When attribution is wired end-to-end" },
];

export default function HomeContent() {
  return (
    <div className="flex w-full min-w-0 max-w-full flex-col bg-white">
      <HeroAnimation />

      {/* Social proof */}
      <section className="w-full min-w-0 border-y border-gray-100 bg-gray-50/80 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            className="mb-12 md:mb-16"
            eyebrow="Social proof"
            title="Trusted by teams on the ground"
            description="Retail, hospitality, fitness, and services brands use INFLUCITY to turn creator audiences into booked revenue."
          />

          <FadeIn delay={0.06} className="mb-16 md:mb-20">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/70 py-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/95 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/95 to-transparent" />
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="flex w-max items-center"
              >
                {[...partnerNames, ...partnerNames].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="mx-6 text-[15px] font-semibold tracking-wide text-gray-500 md:text-[17px]"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    {name}
                  </span>
                ))}
              </motion.div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-3xl mx-auto">
            {proofStats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.06}>
                <div className="text-center">
                  <div
                    className="text-[clamp(22px,4vw,32px)] font-black text-neutral-950"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    <AnimatedStatValue target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1.5 font-medium leading-snug">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section
        id="who-its-for"
        className="w-full min-w-0 scroll-mt-24 bg-white px-6 py-20 md:py-28"
        aria-labelledby="who-heading"
      >
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            titleId="who-heading"
            eyebrow="For owners"
            title="Who is this for?"
            titleClassName="text-[clamp(28px,4.5vw,48px)]"
            description="This platform is built for local businesses who want real customers, not just online views."
          />

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {whoItsFor.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.08} direction="up">
                  <motion.article
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-2xl border border-gray-100 bg-gray-50/50 p-7 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-neutral-950">
                      <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-950 mb-2" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-gray-500">{item.desc}</p>
                  </motion.article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="w-full min-w-0 scroll-mt-24 border-t border-gray-100 bg-white px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Process"
            title="How it works"
            titleClassName="text-[clamp(30px,4.8vw,54px)]"
            description="Three steps from signup to measurable footfall and leads."
          />

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.12} direction="up">
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 p-8 md:p-9 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                >
                  <span
                    className="absolute right-6 top-5 text-[52px] font-black leading-none text-gray-200 transition-colors group-hover:text-gray-300"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    {step.num}
                  </span>
                  <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-colors group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                    {step.icon}
                  </div>
                  <h3 className="relative text-lg font-bold text-neutral-950 mb-3 capitalize">{step.title}</h3>
                  <p className="relative text-[14px] text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why INFLUCITY */}
      <section className="w-full min-w-0 bg-neutral-950 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-xl text-left">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Why INFLUCITY
              </p>
              <h2
                className="mb-5 text-[clamp(28px,4.2vw,44px)] font-black leading-[1.08] tracking-[-0.035em] text-white"
                style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
              >
                Not a digital
                <br />
                marketing agency.
              </h2>
              <p className="mb-8 text-[15px] leading-relaxed text-neutral-400">
                Agencies sell hours. INFLUCITY ships a repeatable growth system: matching, campaign ops, and
                attribution in one stack - built for operators who need proof, not PDFs.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-600 bg-transparent px-5 py-2.5 text-[13px] font-semibold text-white no-underline transition-colors hover:border-neutral-400 hover:bg-white/5"
              >
                Our story
                <ChevronRight size={15} aria-hidden />
              </Link>
            </div>

            <FadeIn direction="left" delay={0.08}>
              <div className="overflow-hidden rounded-2xl border border-neutral-700/90 bg-neutral-900/55 shadow-[0_12px_36px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.05)]">
                <div className="grid grid-cols-3 border-b border-neutral-700/90 bg-white/[0.02] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  <span className="text-gray-300">Capability</span>
                  <span className="text-center text-white">INFLUCITY</span>
                  <span className="text-center text-gray-300">Typical agency</span>
                </div>
                {comparisons.map((row, i) => (
                  <div
                    key={row.label}
                    className={clsx(
                      "grid grid-cols-3 items-center border-b border-neutral-700/80 px-5 py-3.5 last:border-0",
                      i % 2 === 0 ? "bg-neutral-950/55" : "bg-neutral-900/45"
                    )}
                  >
                    <span className="pr-2 text-[13px] text-gray-200">{row.label}</span>
                    <div className="flex justify-center">
                      {row.us ? (
                        <CheckCircle2 size={18} className="text-white" strokeWidth={1.7} />
                      ) : (
                        <XCircle size={18} className="text-neutral-600" strokeWidth={1.7} />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {row.them ? (
                        <CheckCircle2 size={18} className="text-gray-400" strokeWidth={1.7} />
                      ) : (
                        <XCircle size={18} className="text-neutral-600" strokeWidth={1.7} />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core features */}
      <section className="w-full min-w-0 border-y border-gray-100 bg-gray-50/80 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Platform"
            title="Core capabilities"
            titleClassName="text-[clamp(26px,4vw,44px)]"
            description="Everything you need for influencer-led growth in one workflow."
          />
          <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4, scale: 1.03 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 text-white">
                    {f.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-neutral-950 mb-2">{f.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="w-full min-w-0 scroll-mt-24 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Results"
            title="Outcomes you can stand behind"
            titleClassName="text-[clamp(30px,4.8vw,52px)]"
            description={
              <>
                We do not optimize for impressions alone. We optimize for customers, repeat visits, and ROI you can
                trace - the kind of local outcomes India&apos;s small businesses deserve.
              </>
            }
          />

          <div className="grid gap-8 text-left md:grid-cols-3 md:gap-10">
            {resultMetrics.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full min-h-[220px] flex-col rounded-2xl border border-gray-200 bg-gray-50 p-9 shadow-sm md:min-h-[240px] md:p-10"
                >
                  <div
                    className="mb-4 text-[clamp(2.25rem,5vw,2.75rem)] font-black leading-none text-neutral-950"
                    style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
                  >
                    {item.value}
                  </div>
                  <p className="mb-3 text-[15px] font-semibold leading-snug text-neutral-950">{item.label}</p>
                  <p className="mt-auto text-[14px] leading-relaxed text-gray-500">{item.sub}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-0 w-full min-w-0 border-t border-gray-200 bg-gray-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            eyebrow="Testimonials"
            title="Loved by operators"
            titleClassName="text-[clamp(30px,4.8vw,52px)]"
          />

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08} direction="up">
                <motion.article
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-9 shadow-sm md:p-10"
                >
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={15} className="fill-neutral-950 text-neutral-950" aria-hidden />
                    ))}
                  </div>
                  <p className="mb-10 flex-1 text-[15px] leading-relaxed text-gray-600">{`"${t.quote}"`}</p>
                  <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950">
                      <span className="text-[11px] font-bold text-white">{t.initials}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[14px] font-semibold text-neutral-950">{t.name}</p>
                      <p className="text-[13px] text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 w-full min-w-0 border-t border-neutral-800 bg-neutral-950 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-2 text-center sm:px-4">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">Ready</p>
          <h2
            className="mb-8 text-balance text-[clamp(2rem,5.5vw,3.25rem)] font-black leading-[1.08] tracking-[-0.03em] text-white"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            Start Your First
            <br />
            Campaign Today
          </h2>
          <p className="mx-auto mb-12 max-w-md text-[16px] leading-relaxed text-neutral-400">
            Join hundreds of local businesses growing with INFLUCITY. Most campaigns go live within 48 hours of kickoff.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <motion.div className="sm:inline-flex" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/get-started"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-[15px] font-bold text-neutral-950 no-underline shadow-sm transition-colors hover:bg-gray-100 sm:w-auto"
              >
                Get Started
                <ArrowRight size={16} aria-hidden />
              </Link>
            </motion.div>
            <motion.div className="sm:inline-flex" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/influencers"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-neutral-600 bg-transparent px-8 py-3.5 text-[15px] font-semibold text-white no-underline transition-colors hover:border-neutral-400 hover:bg-white/5 sm:w-auto"
              >
                Join as Influencer
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}



