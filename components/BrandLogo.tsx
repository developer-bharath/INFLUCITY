"use client";

import Image from "next/image";
import clsx from "clsx";

/** Matches trimmed `public/brand/influcity-logo.png` - layout hugs the graphic. */
const LOGO_SRC = "/brand/influcity-logo.png";
const NATURAL_W = 218;
const NATURAL_H = 64;

type BrandLogoProps = {
  variant: "navbar" | "footer";
  className?: string;
};

export default function BrandLogo({ variant, className }: BrandLogoProps) {
  const isNav = variant === "navbar";
  return (
    <span className={clsx("inline-block shrink-0 leading-none align-top", className)}>
      <Image
        src={LOGO_SRC}
        width={NATURAL_W}
        height={NATURAL_H}
        alt=""
        priority={isNav}
        sizes={isNav ? "200px" : "240px"}
        className={clsx(
          "block w-auto align-top",
          isNav
            ? "h-11 sm:h-12 md:h-[52px]"
            : "h-[54px] sm:h-14 md:h-16"
        )}
      />
    </span>
  );
}



