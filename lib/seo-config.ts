/** Canonical site origin (no trailing slash). Used for metadataBase, sitemap, robots. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://influcity.in";
  return raw.replace(/\/$/, "");
}

export const DEFAULT_OG_IMAGE_PATH = "/brand/influcity-share-og.jpg";

export const DEFAULT_OG_IMAGE = {
  url: DEFAULT_OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  type: "image/jpeg" as const,
  alt: "INFLUCITY — influencer marketing for local businesses and creators in India",
};
