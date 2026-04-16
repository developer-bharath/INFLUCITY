"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { BUTTON_MOTION, PREMIUM_EASE } from "@/lib/motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/influencers", label: "Influencers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);

      if (open) {
        setNavVisible(true);
      } else if (y <= 24) {
        setNavVisible(true);
      } else if (y > lastScrollY.current && y > 90) {
        setNavVisible(false);
      } else if (y < lastScrollY.current) {
        setNavVisible(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(false));
    setNavVisible(true);
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: navVisible ? 0 : -92, opacity: navVisible ? 1 : 0.96 }}
        transition={{ duration: 0.5, ease: PREMIUM_EASE }}
        className="fixed top-0 left-0 right-0 z-50 h-20"
      >
        <div className="mx-auto h-full w-full max-w-7xl px-5 sm:px-6">
          <div
            className={clsx(
              "relative mt-3 flex h-[56px] items-center justify-between overflow-hidden rounded-2xl border px-3 sm:px-4 transition-all duration-500",
              scrolled
                ? "border-slate-300/20 bg-slate-700/64 shadow-[0_12px_30px_rgba(15,23,42,0.26)] backdrop-blur-xl"
                : "border-white/14 bg-black/70 shadow-[0_14px_34px_rgba(0,0,0,0.4),0_0_24px_rgba(255,255,255,0.12)] backdrop-blur-xl"
            )}
          >
          {!scrolled ? (
            <>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-[4px] h-10 opacity-55 blur-[10px]"
                animate={{
                  y: [0, -4, 0, -3, 0],
                  opacity: [0.45, 0.62, 0.52, 0.64, 0.45],
                }}
                transition={{ duration: 6.8, ease: "easeInOut", repeat: Infinity }}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.24) 12%, rgba(255,255,255,0.36) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.36) 70%, rgba(255,255,255,0.24) 88%, rgba(255,255,255,0) 100%)",
                }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-[3px] h-10 opacity-40 blur-[11px]"
                animate={{
                  y: [0, 3, 0, 2, 0],
                  opacity: [0.28, 0.42, 0.34, 0.4, 0.28],
                }}
                transition={{ duration: 7.4, ease: "easeInOut", repeat: Infinity, delay: 0.25 }}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.34) 14%, rgba(0,0,0,0.58) 32%, rgba(0,0,0,0.46) 50%, rgba(0,0,0,0.58) 68%, rgba(0,0,0,0.34) 86%, rgba(0,0,0,0) 100%)",
                }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-[6px] left-[8%] h-9 w-24 rounded-full opacity-55 blur-[8px]"
                animate={{
                  x: [0, 10, -5, 8, 0],
                  y: [0, -8, -3, -9, 0],
                  scale: [0.94, 1.14, 1.0, 1.2, 0.94],
                  opacity: [0.32, 0.58, 0.46, 0.6, 0.32],
                }}
                transition={{ duration: 8.2, ease: "easeInOut", repeat: Infinity }}
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.16) 62%, rgba(255,255,255,0) 100%)",
                }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-[6px] left-[22%] h-8 w-20 rounded-full opacity-38 blur-[8px]"
                animate={{
                  x: [0, -8, 5, -6, 0],
                  y: [0, 4, 1, 5, 0],
                  scale: [0.94, 1.1, 1.0, 1.14, 0.94],
                  opacity: [0.24, 0.4, 0.3, 0.44, 0.24],
                }}
                transition={{ duration: 8.6, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
                style={{
                  background: "radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)",
                }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-[8px] left-[36%] h-11 w-28 rounded-full opacity-52 blur-[10px]"
                animate={{
                  x: [0, -12, 7, -10, 0],
                  y: [0, -7, -12, -5, 0],
                  scale: [0.96, 1.24, 1.04, 1.16, 0.96],
                  opacity: [0.28, 0.56, 0.42, 0.54, 0.28],
                }}
                transition={{ duration: 9.9, ease: "easeInOut", repeat: Infinity, delay: 0.35 }}
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.14) 60%, rgba(255,255,255,0) 100%)",
                }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-[7px] left-[54%] h-10 w-24 rounded-full opacity-36 blur-[9px]"
                animate={{
                  x: [0, 7, -8, 5, 0],
                  y: [0, 5, 1, 6, 0],
                  scale: [0.9, 1.16, 1.0, 1.12, 0.9],
                  opacity: [0.22, 0.38, 0.3, 0.4, 0.22],
                }}
                transition={{ duration: 9.4, ease: "easeInOut", repeat: Infinity, delay: 0.95 }}
                style={{
                  background: "radial-gradient(circle, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 58%, rgba(0,0,0,0) 100%)",
                }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-[6px] left-[66%] h-10 w-24 rounded-full opacity-48 blur-[9px]"
                animate={{
                  x: [0, 8, -9, 6, 0],
                  y: [0, -8, -4, -10, 0],
                  scale: [0.92, 1.2, 1.0, 1.12, 0.92],
                  opacity: [0.24, 0.5, 0.36, 0.48, 0.24],
                }}
                transition={{ duration: 9.1, ease: "easeInOut", repeat: Infinity, delay: 0.75 }}
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.12) 58%, rgba(255,255,255,0) 100%)",
                }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute bottom-[5px] left-[82%] h-9 w-20 rounded-full opacity-46 blur-[9px]"
                animate={{
                  x: [0, -7, 5, -6, 0],
                  y: [0, -7, -3, -9, 0],
                  scale: [0.9, 1.16, 0.98, 1.1, 0.9],
                  opacity: [0.22, 0.48, 0.34, 0.46, 0.22],
                }}
                transition={{ duration: 8.7, ease: "easeInOut", repeat: Infinity, delay: 1.1 }}
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.74) 0%, rgba(255,255,255,0.12) 58%, rgba(255,255,255,0) 100%)",
                }}
              />
            </>
          ) : null}
          <div
            className={clsx(
              "pointer-events-none absolute inset-0 rounded-2xl",
              scrolled
                ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_45%)]"
                : "bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_42%,rgba(255,255,255,0)_80%)]"
            )}
          />
          <div
            className={clsx(
              "pointer-events-none absolute inset-0 rounded-2xl",
              scrolled
                ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                : "shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
            )}
          />
          <Link
            href="/"
            aria-label="INFLUCITY - Home"
            className="relative z-10 -ml-1 shrink-0 outline-offset-4 transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
          >
            <BrandLogo variant="navbar" />
          </Link>

          <nav className="relative z-10 hidden min-w-0 flex-1 items-center justify-center md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              const linkHref = l.href === "/contact" ? "/contact" : l.href;
              return (
                <Link
                  key={l.href}
                  href={linkHref}
                  className={clsx(
                    "relative rounded-full px-3 py-1.5 text-[12px] font-medium tracking-[0.03em] transition-colors lg:px-4",
                    active ? "text-white" : "text-zinc-200/90 hover:text-white"
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ duration: 0.45, ease: PREMIUM_EASE }}
                      className="absolute inset-0 -z-10 rounded-full bg-white/18 shadow-[0_0_0_1px_rgba(255,255,255,0.24),0_6px_16px_rgba(0,0,0,0.22)]"
                    />
                  ) : null}
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-10 hidden shrink-0 items-center md:flex">
            <motion.div whileHover={BUTTON_MOTION.hover} whileTap={BUTTON_MOTION.tap}>
              <Link
                href="/get-started"
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white px-5 py-2 text-[12px] font-semibold tracking-[0.06em] text-neutral-950 shadow-sm transition-all hover:bg-zinc-100 hover:shadow-[0_0_18px_rgba(255,255,255,0.2)]"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={clsx(
              "relative z-10 rounded-full p-2.5 transition-colors md:hidden",
              "text-zinc-200/90 hover:bg-white/12 hover:text-white"
            )}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="fixed left-3 right-3 top-[78px] z-40 overflow-hidden rounded-2xl border border-white/12 bg-black/82 shadow-[0_24px_52px_rgba(0,0,0,0.42)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={l.href === "/contact" ? "/contact" : l.href}
                    className={clsx(
                      "block rounded-xl px-4 py-3 text-[14px] font-medium transition-colors",
                      pathname === l.href ? "bg-white/12 text-white" : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 border-t border-white/10 pt-4">
                <Link
                  href="/get-started"
                  className="block rounded-xl bg-white py-3 text-center text-[14px] font-semibold text-neutral-950 transition-all hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.22)]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}




