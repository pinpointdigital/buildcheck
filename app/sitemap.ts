import { MetadataRoute } from "next";
import { getCitySlugs } from "@/content/cities";
import { getArticleSlugs } from "@/content/articles";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://buildchecksd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "construction-failure-assessment",
    "how-it-works",
    "who-this-is-for",
    "about",
    "request-assessment",
  ].map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.9,
  }));

  const cityPages = getCitySlugs().map((slug) => ({
    url: `${BASE_URL}/city/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articlePages = getArticleSlugs().map((slug) => ({
    url: `${BASE_URL}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...articlePages];
}
