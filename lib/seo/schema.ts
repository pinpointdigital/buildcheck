import { COMPANY, SITE } from "@/lib/constants";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://buildchecksd.com";

export interface JsonLdOrganization {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  description: string;
  url: string;
}

export interface JsonLdLocalBusiness {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  name: string;
  description: string;
  url: string;
  telephone?: string;
  address?: { "@type": "PostalAddress"; addressLocality: string; addressRegion: string };
}

export interface JsonLdService {
  "@context": "https://schema.org";
  "@type": "Service";
  name: string;
  description: string;
  provider: { "@id": string };
}

export interface JsonLdArticle {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  author?: { "@type": "Organization"; name: string };
  publisher?: { "@type": "Organization"; name: string };
  url: string;
}

/**
 * Organization schema for BuildCheck / ZOOM ADU.
 */
export function buildOrganizationJsonLd(): JsonLdOrganization {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    description: SITE.description,
    url: BASE_URL,
  };
}

/**
 * LocalBusiness schema for San Diego County service area.
 */
export function buildLocalBusinessJsonLd(): JsonLdLocalBusiness {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: BASE_URL,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.location,
      addressRegion: "CA",
    },
  };
}

/**
 * Service schema for Construction Failure Assessment.
 */
export function buildServiceJsonLd(): JsonLdService {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction Failure Assessment",
    description:
      "Professional assessment of abandoned, stalled, or poorly built residential construction — ADUs, additions, garage conversions, major remodels. San Diego County.",
    provider: { "@id": `${BASE_URL}#organization` },
  };
}

/**
 * Article schema for blog/SEO articles.
 */
export function buildArticleJsonLd(params: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}): JsonLdArticle {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };
}
