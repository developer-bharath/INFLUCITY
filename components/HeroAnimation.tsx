"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const bgLocations = [
  { name: "Hyderabad", x: 51, y: 58 },
  { name: "Karimnagar", x: 62, y: 39 },
  { name: "Warangal", x: 71, y: 49 },
  { name: "Nizamabad", x: 42, y: 35 },
  { name: "Khammam", x: 74, y: 67 },
  { name: "Mahabubnagar", x: 37, y: 70 },
  { name: "Nalgonda", x: 62, y: 68 },
  { name: "Siddipet", x: 55, y: 46 },
  { name: "Adilabad", x: 37, y: 23 },
  { name: "Medak", x: 48, y: 50 },
];

const bgRoutes = [
  { x1: 51, y1: 58, x2: 62, y2: 39 },
  { x1: 51, y1: 58, x2: 71, y2: 49 },
  { x1: 51, y1: 58, x2: 42, y2: 35 },
  { x1: 51, y1: 58, x2: 74, y2: 67 },
  { x1: 51, y1: 58, x2: 37, y2: 70 },
  { x1: 51, y1: 58, x2: 62, y2: 68 },
  { x1: 51, y1: 58, x2: 55, y2: 46 },
  { x1: 51, y1: 58, x2: 37, y2: 23 },
  { x1: 51, y1: 58, x2: 48, y2: 50 },
];

export default function HeroAnimation() {
  const [views, setViews] = useState(500);
  const [visitors, setVisitors] = useState(100);

  useEffect(() => {
    const id = setInterval(() => {
      setViews((prev) => (prev >= 1000 ? 500 : prev + 5));
      setVisitors((prev) => (prev >= 500 ? 100 : prev + 3));
    }, 90);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[84vh] w-full min-w-0 items-center overflow-hidden bg-[#0a0a0a] px-6 pb-14 pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.12),transparent_42%),radial-gradient(circle_at_88%_22%,rgba(255,255,255,0.08),transparent_46%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.08),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_26%_28%,rgba(56,189,248,0.1),transparent_44%),radial-gradient(circle_at_72%_64%,rgba(147,197,253,0.1),transparent_46%)]" />
      <svg
        aria-hidden
        viewBox="0 0 1200 680"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M140 548C284 438 422 412 582 424C740 436 866 396 1048 296" stroke="white" strokeWidth="1.2" fill="none" />
        <path d="M124 448C272 366 432 338 606 350C776 362 910 334 1072 264" stroke="white" strokeWidth="1" fill="none" />
        <path d="M176 598C338 510 512 494 678 510C846 526 970 492 1130 410" stroke="white" strokeWidth="1" fill="none" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]"
        preserveAspectRatio="none"
      >
        {bgRoutes.map((route, i) => (
          <motion.line
            key={`${route.x2}-${route.y2}`}
            x1={route.x1}
            y1={route.y1}
            x2={route.x2}
            y2={route.y2}
            stroke="rgba(186,230,253,0.52)"
            strokeWidth="0.2"
            initial={{ pathLength: 0.15, opacity: 0.2 }}
            animate={{ pathLength: [0.15, 1, 0.15], opacity: [0.2, 0.62, 0.2] }}
            transition={{ duration: 3.2, delay: i * 0.28, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
      {bgLocations.map((loc, i) => (
        <motion.div
          key={loc.name}
          className="pointer-events-none absolute z-[1] flex items-center gap-1 rounded-full border border-cyan-100/30 bg-white/10 px-2 py-1 text-[9px] font-semibold text-cyan-100 backdrop-blur-[2px] sm:text-[10px]"
          style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
          animate={{ y: [0, -3, 0], opacity: [0.68, 1, 0.68] }}
          transition={{ duration: 2.6, delay: i * 0.24, repeat: Infinity, ease: "easeInOut" }}
        >
          <MapPin className="h-3 w-3" />
          {loc.name}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Built for local city businesss to get real customers
          </p>
          <h1
            className="mb-5 text-[clamp(34px,6.2vw,64px)] font-black leading-[1.04] tracking-[-0.04em] text-white"
            style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
          >
            Get real local customers.
            <br />
            <span className="text-neutral-400">Not just online views.</span>
          </h1>
          <p className="mb-8 max-w-xl text-[16px] leading-relaxed text-neutral-300">
            INFLUCITY helps local businesses launch creator campaigns in 48 hours with clear city targeting,
            measurable outcomes, and transparent execution.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/get-started"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-[15px] font-semibold text-black no-underline transition-colors hover:bg-neutral-100"
              >
                Get Started
                <ArrowRight size={16} aria-hidden />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/influencers"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-7 py-3 text-[15px] font-semibold text-white no-underline transition-colors hover:bg-white/[0.08]"
              >
                Join as Influencer
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Campaign launch", value: "48 hrs" },
              { label: "Creator network", value: "2K+" },
              { label: "Cities active", value: "India-wide" },
              { label: "Outcome focus", value: "ROI-led" },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + idx * 0.06 }}
                className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-3"
              >
                <p className="text-[13px] font-semibold text-white">{item.value}</p>
                <p className="mt-0.5 text-[11px] text-neutral-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.08 }}
          className="relative overflow-hidden rounded-2xl border border-white/14 bg-white/[0.04] p-4 shadow-[0_18px_54px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl sm:p-5"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(255,255,255,0.22),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(125,211,252,0.12),transparent_50%)]" />
          <div className="relative z-10">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">Local network map</p>
            <h3 className="text-lg font-bold text-white">Telangana district reach</h3>
            <p className="mt-1 text-[13px] text-neutral-300">Routes flow from your business location to nearby customer zones.</p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-lg border border-white/12 bg-white/[0.06] px-2.5 py-2">
                <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-400">Views</p>
                <p className="text-[14px] font-bold text-white">{views}</p>
              </div>
              <div className="rounded-lg border border-white/12 bg-white/[0.06] px-2.5 py-2">
                <p className="text-[10px] uppercase tracking-[0.12em] text-neutral-400">Visitors</p>
                <p className="text-[14px] font-bold text-white">{visitors}</p>
              </div>
            </div>

            <div className="relative mt-4 overflow-hidden rounded-xl border border-white/12 bg-black/35 p-2.5">
              <svg viewBox="0 0 420 300" className="h-[320px] w-full">
                <path
                  d="M140 42L188 28L230 44L270 40L304 70L312 118L350 156L336 204L296 236L252 250L218 274L168 268L132 236L90 214L74 170L92 134L86 96L114 68Z"
                  fill="rgba(186,230,253,0.08)"
                  stroke="rgba(186,230,253,0.35)"
                  strokeWidth="1.4"
                />
                {bgRoutes.map((route, i) => (
                  <motion.line
                    key={`board-${route.x2}-${route.y2}`}
                    x1={route.x1 * 4.2}
                    y1={route.y1 * 3}
                    x2={route.x2 * 4.2}
                    y2={route.y2 * 3}
                    stroke="rgba(147,197,253,0.55)"
                    strokeWidth="1.4"
                    initial={{ pathLength: 0.12, opacity: 0.24 }}
                    animate={{ pathLength: [0.12, 1, 0.12], opacity: [0.24, 0.72, 0.24] }}
                    transition={{ duration: 2.8, delay: i * 0.26, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}

                {bgLocations.map((loc, i) => (
                  <g key={`board-${loc.name}`}>
                    <motion.circle
                      cx={loc.x * 4.2}
                      cy={loc.y * 3}
                      r={loc.name === "Hyderabad" ? 6.3 : 4.2}
                      fill="white"
                      animate={{ opacity: [0.58, 1, 0.58], r: loc.name === "Hyderabad" ? [6.3, 7.2, 6.3] : [4.2, 5.1, 4.2] }}
                      transition={{ duration: 2.4, delay: i * 0.18, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <text x={loc.x * 4.2 + 8} y={loc.y * 3 - 9} fill="rgba(186,230,253,0.9)" fontSize="10" fontWeight="700">
                      {loc.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
