"use client";

import Image from "next/image";
import clsx from "clsx";

/** Matches original `public/brand/influcity-logo-actual.png`. */
const LOGO_SRC = "/brand/influcity-logo-actual.png";
const NATURAL_W = 1024;
const NATURAL_H = 302;

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
            ? "h-9 sm:h-10 md:h-11"
            : "h-[66px] sm:h-[72px] md:h-[82px]"
        )}
      />
    </span>
  );
}



