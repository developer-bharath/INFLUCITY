"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Star } from "lucide-react";
import { LOCAL_TESTIMONIALS, type LocalTestimonial } from "@/lib/localTestimonials";
import { PREMIUM_EASE } from "@/lib/motion";
import clsx from "clsx";

const AUTO_MS = 5200;
const soft = { duration: 0.32, ease: PREMIUM_EASE };

function StarRow({ size = 14 }: { size?: number }) {
  return (
    <div className="mb-3 flex gap-0.5">
      {[...Array(5)].map((_, j) => (
        <Star key={j} size={size} className="fill-neutral-950 text-neutral-950" aria-hidden />
      ))}
    </div>
  );
}

/** Thin border that rotates endlessly — shows “circling” toward the next story. */
function CirclingRing({
  index,
  paused,
  durationSec,
}: {
  index: number;
  paused: boolean;
  durationSec: number;
}) {
  const ring = useAnimationControls();

  useEffect(() => {
    ring.stop();
    if (paused) return;
    ring.set({ rotate: 0 });
    void ring.start({
      rotate: 360,
      transition: { duration: durationSec, ease: "linear", repeat: Infinity },
    });
  }, [index, paused, ring, durationSec]);

  return (
    <motion.div
      key={`ring-${index}`}
      aria-hidden
      className="pointer-events-none absolute -inset-[3px] rounded-2xl border-2 border-gray-200/80 border-t-neutral-950 border-r-neutral-950/25"
      initial={{ rotate: 0 }}
      animate={ring}
    />
  );
}

function PreviewCard({
  item,
  side,
  indexKey,
  onClick,
}: {
  item: LocalTestimonial;
  side: "left" | "right";
  indexKey: number;
  onClick?: () => void;
}) {
  return (
    <motion.button
      type="button"
      key={`${side}-${indexKey}`}
      initial={{ opacity: 0.35, y: 8 }}
      animate={{ opacity: 0.55, y: 0, scale: 0.92 }}
      transition={soft}
      onClick={onClick}
      className="group relative flex w-full max-w-[280px] cursor-pointer flex-col rounded-2xl border border-gray-200/80 bg-white/90 p-5 text-left shadow-sm transition-shadow hover:border-gray-300 hover:shadow-md md:max-w-none"
      aria-label={side === "left" ? "Previous review" : "Next review"}
    >
      <StarRow size={12} />
      <p className="mb-6 line-clamp-5 text-[12px] leading-relaxed text-gray-500 group-hover:text-gray-600 md:text-[13px]">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-2 border-t border-gray-100 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">
          {item.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[12px] font-semibold text-neutral-900">{item.name}</p>
          <p className="truncate text-[11px] text-gray-500">{item.role}</p>
        </div>
      </div>
    </motion.button>
  );
}

function CenterCard({ item, indexKey }: { item: LocalTestimonial; indexKey: number }) {
  return (
    <motion.article
      key={`center-${indexKey}`}
      initial={{ opacity: 0.5, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={soft}
      className="relative z-10 mx-auto flex w-full max-w-xl flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-[0_24px_70px_rgba(0,0,0,0.1)] sm:p-10"
      aria-live="polite"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-neutral-950/[0.04]" aria-hidden />
      <StarRow size={16} />
      <p className="relative mb-10 flex-1 text-[15px] leading-relaxed text-gray-600 sm:text-[17px]">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="relative mt-auto flex items-center gap-3 border-t border-gray-100 pt-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neutral-950 to-neutral-800 text-[12px] font-bold text-white shadow-md">
          {item.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-neutral-950 sm:text-[16px]">{item.name}</p>
          <p className="text-[13px] text-gray-500">{item.role}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function LocalTestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = LOCAL_TESTIMONIALS.length;
  const durationSec = AUTO_MS / 1000;

  const prevItem = LOCAL_TESTIMONIALS[(index - 1 + n) % n];
  const currentItem = LOCAL_TESTIMONIALS[index];
  const nextItem = LOCAL_TESTIMONIALS[(index + 1) % n];

  const goNext = useCallback(() => setIndex((i) => (i + 1) % n), [n]);
  const goPrev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);

  const goNextRef = useRef(goNext);
  goNextRef.current = goNext;

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => goNextRef.current(), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const goTo = useCallback((i: number) => {
    if (i !== index) setIndex(i);
  }, [index]);

  return (
    <div
      className="mx-auto max-w-6xl px-2 sm:px-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="relative isolate py-4">
        <div
          className="pointer-events-none absolute inset-x-8 top-1/2 h-[min(360px,78%)] -translate-y-1/2 rounded-[2rem] bg-gradient-to-br from-neutral-200/70 via-white to-gray-100/60 blur-2xl"
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-[1200px] flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-center md:gap-5 md:[perspective:1200px] lg:gap-7">
          <div className="flex w-full justify-center md:w-[26%] md:min-w-0 md:max-w-[300px] md:justify-end">
            <PreviewCard item={prevItem} side="left" indexKey={index} onClick={goPrev} />
          </div>

          <div className="relative flex w-full justify-center md:w-[48%] md:min-w-0 md:max-w-[560px]">
            <CirclingRing index={index} paused={paused} durationSec={durationSec} />
            <CenterCard item={currentItem} indexKey={index} />
            <p className="sr-only">Stories cycle automatically about every {Math.round(durationSec)} seconds.</p>
          </div>

          <div className="flex w-full justify-center md:w-[26%] md:min-w-0 md:max-w-[300px] md:justify-start">
            <PreviewCard item={nextItem} side="right" indexKey={index} onClick={goNext} />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-xl px-2">
        <div className="flex flex-wrap justify-center gap-2 px-1">
          {LOCAL_TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                i === index ? "w-8 bg-neutral-950 shadow-sm" : "w-2 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Show review ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
