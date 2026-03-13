import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://buildchecksd.com";

export interface MetaInput {
  title: string;
  description: string;
  /** Optional path (no leading slash) for canonical/OG. If not set, uses path from page. */
  path?: string;
  /** Optional OG image path (e.g. /og-default.png) */
  image?: string;
  /** No index (e.g. thank-you pages) */
  noIndex?: boolean;
}

/**
 * Build full metadata for a page.
 * Merges with site defaults and sets canonical + Open Graph.
 */
export function buildMetadata(input: MetaInput): Metadata {
  const path = input.path ? (input.path.startsWith("/") ? input.path : `/${input.path}`) : "";
  const canonical = buildCanonical(path || undefined);
  const openGraph = buildOpenGraph(
    {
      title: input.title,
      description: input.description,
      image: input.image,
    },
    path || undefined
  );

  return {
    title: input.title,
    description: input.description,
    alternates: input.noIndex ? undefined : { canonical },
    openGraph: {
      ...openGraph,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
    robots: input.noIndex ? { index: false, follow: false } : undefined,
  };
}

/**
 * Build canonical URL for a path.
 */
export function buildCanonical(path?: string): string {
  const base = BASE_URL.replace(/\/$/, "");
  const p = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `${base}${p}`;
}

/**
 * Build Open Graph object for a page.
 */
export function buildOpenGraph(
  meta: { title: string; description: string; image?: string },
  path?: string
): { title: string; description: string; url: string; images?: { url: string }[] } {
  const url = buildCanonical(path);
  const result: {
    title: string;
    description: string;
    url: string;
    images?: { url: string }[];
  } = {
    title: meta.title,
    description: meta.description,
    url,
  };
  if (meta.image) {
    const imageUrl = meta.image.startsWith("http") ? meta.image : `${BASE_URL}${meta.image}`;
    result.images = [{ url: imageUrl }];
  }
  return result;
}

/**
 * Default metadata for the site (used in root layout).
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE.name} | ${SITE.tagline} | San Diego County`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
  },
};
