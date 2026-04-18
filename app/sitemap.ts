import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/get-started",
    "/influencers",
    "/contact",
    "/blog",
    "/blog/how-influencer-marketing-helps",
    "/blog/traditional-advertising-failing",
    "/blog/choose-right-influencer",
    "/blog/influencer-marketing-roi",
    "/blog/local-influencers-drive-real-customers",
    "/blog/influencer-marketing-mistakes-to-avoid",
    "/blog/best-marketing-strategy-karimnagar-2026",
    "/blog/karimnagar-restaurants-influencer-marketing",
    "/blog/promote-salon-gym-karimnagar",
    "/blog/best-marketing-strategies-hyderabad-2026",
    "/blog/restaurants-hyderabad-influencer-marketing",
    "/blog/salons-hyderabad-influencer-marketing",
    "/blog/gyms-hyderabad-influencer-marketing",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/legal",
  ];
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base.replace(/\/$/, "")}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" || path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/blog") ? 0.85 : 0.8,
  }));
}

