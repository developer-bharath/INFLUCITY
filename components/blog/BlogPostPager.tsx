"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { BLOG_POSTS } from "@/lib/blogPosts";
import type { ReactNode } from "react";

export default function BlogPostPager() {
  const pathname = usePathname();
  const index = BLOG_POSTS.findIndex((post) => post.href === pathname);

  if (index < 0) return null;

  const prev = index > 0 ? BLOG_POSTS[index - 1] : null;
  const next = index < BLOG_POSTS.length - 1 ? BLOG_POSTS[index + 1] : null;

  return (
    <section className="bg-white px-6 pb-14 md:pb-16">
      <nav className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2" aria-label="Blog post navigation">
        <NavCard
          href={prev?.href}
          label="Previous blog"
          title={prev?.title}
          icon={<ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />}
          align="left"
        />
        <NavCard
          href={next?.href}
          label="Next blog"
          title={next?.title}
          icon={<ArrowRight className="h-4 w-4 shrink-0" aria-hidden />}
          align="right"
        />
      </nav>
    </section>
  );
}

function NavCard({
  href,
  label,
  title,
  icon,
  align,
}: {
  href?: string;
  label: string;
  title?: string;
  icon: ReactNode;
  align: "left" | "right";
}) {
  const baseClass =
    "group flex h-full min-h-[112px] rounded-xl border p-4 transition-colors";

  if (!href || !title) {
    return (
      <div className={clsx(baseClass, "border-gray-200 bg-gray-50 text-gray-400")}>
        <div className={clsx("flex w-full flex-col", align === "right" && "items-end text-right")}>
          <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em]">{label}</span>
          <span className="text-[13px] leading-relaxed">No more posts</span>
        </div>
      </div>
    );
  }

  return (
    <Link href={href} className={clsx(baseClass, "border-gray-200 bg-white hover:border-gray-300")}>
      <div className={clsx("flex w-full flex-col", align === "right" && "items-end text-right")}>
        <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500">{label}</span>
        <span className="line-clamp-2 text-[14px] font-semibold leading-snug text-neutral-900">{title}</span>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] text-gray-500">
          {align === "right" ? "Read next" : "Read previous"}
          {icon}
        </span>
      </div>
    </Link>
  );
}
