import type { ReactNode } from "react";
import BlogPostPager from "@/components/blog/BlogPostPager";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BlogPostPager compact />
      {children}
      <BlogPostPager />
    </>
  );
}
