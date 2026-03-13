import type { CityContent } from "@/content/schemas/city";
import { chulaVista } from "./chula-vista";
import { sanDiego } from "./san-diego";
import { nationalCity } from "./national-city";

const cities: CityContent[] = [chulaVista, sanDiego, nationalCity];

export function getAllCities(): CityContent[] {
  return cities;
}

export function getCityBySlug(slug: string): CityContent | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
