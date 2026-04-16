"use client";

import clsx from "clsx";
import FadeIn from "./FadeIn";

type Align = "left" | "center";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: Align;
  className?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <FadeIn className={clsx("mb-14 md:mb-20", align === "center" && "text-center mx-auto", className)}>
      <p
        className={clsx(
          "text-[11px] font-bold uppercase tracking-[0.18em] mb-3",
          isDark ? "text-gray-500" : "text-gray-400"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={clsx(
          "text-[clamp(28px,4.5vw,52px)] font-black tracking-[-1.5px] leading-[1.08] max-w-3xl",
          isDark ? "text-white" : "text-neutral-950",
          align === "center" && "mx-auto"
        )}
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx(
            "text-[15px] md:text-base mt-4 leading-relaxed max-w-lg text-gray-500",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}



