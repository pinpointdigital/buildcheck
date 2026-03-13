/**
 * Site-wide constants for BuildCheck.
 * Used by layout, footer, SEO, and content.
 */

export const SITE = {
  name: "BuildCheck",
  tagline: "Construction Failure Analysis & Completion Planning",
  endorsement: "A specialized service by ZOOM ADU, Inc.",
  description:
    "Professional construction failure assessment for San Diego homeowners whose ADU, addition, garage conversion, or major remodel was abandoned, stalled, or poorly built.",
} as const;

export const COMPANY = {
  name: "Zoom ADU, Inc.",
  cslb: "1145664",
  cslbDisplay: "CSLB #1145664",
  veteranOwned: true,
  location: "Carlsbad, CA",
  phone: "(760) 555-0100", // Placeholder  -  replace with real number
  hours: "Monday–Friday, 8–5 PM Pacific",
} as const;

export const ROUTES = {
  home: "/",
  service: "/construction-failure-assessment",
  howItWorks: "/how-it-works",
  whoThisIsFor: "/who-this-is-for",
  about: "/about",
  requestAssessment: "/request-assessment",
  city: (slug: string) => `/city/${slug}`,
  article: (slug: string) => `/articles/${slug}`,
} as const;

export const NAV_LINKS = [
  { href: ROUTES.service, label: "The Assessment" },
  { href: ROUTES.howItWorks, label: "How It Works" },
  { href: ROUTES.whoThisIsFor, label: "Who This Is For" },
  { href: ROUTES.about, label: "About" },
] as const;

export const ASSESSMENT_AVAILABILITY = "4–6 assessments per month";
