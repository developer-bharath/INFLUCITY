import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/influencers", "/contact"];
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base.replace(/\/$/, "")}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}

