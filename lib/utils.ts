import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with Tailwind-friendly conflict resolution.
 * Install clsx if not present: npm install clsx
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
