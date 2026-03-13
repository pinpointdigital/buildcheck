import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "var(--color-navy-900)",
          800: "var(--color-navy-800)",
          700: "var(--color-navy-700)",
          600: "var(--color-navy-600)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          light: "var(--color-accent-light)",
        },
        teal: {
          DEFAULT: "var(--color-teal)",
          light: "var(--color-teal-light)",
        },
        "text-inverse": "var(--color-text-inverse)",
        "text-inverse-muted": "var(--color-text-inverse-muted)",
        border: {
          light: "var(--color-border-light)",
          medium: "var(--color-border-medium)",
          dark: "var(--color-border-dark)",
        },
        bg: {
          default: "var(--bg-default)",
          subtle: "var(--bg-subtle)",
          callout: "var(--bg-callout)",
          dark: "var(--bg-dark)",
          "dark-deep": "var(--bg-dark-deep)",
          "accent-tint": "var(--bg-accent-tint)",
        },
      },
      fontFamily: {
        headline: ["var(--font-headline)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        hero: ["var(--text-hero)", { lineHeight: "var(--leading-tight)" }],
        h1: ["var(--text-h1)", { lineHeight: "var(--leading-tight)" }],
        h2: ["var(--text-h2)", { lineHeight: "var(--leading-snug)" }],
        h3: ["var(--text-h3)", { lineHeight: "var(--leading-snug)" }],
        h4: ["var(--text-h4)"],
        body: ["var(--text-body)", { lineHeight: "var(--leading-normal)" }],
        "body-sm": ["var(--text-body-sm)"],
        caption: ["var(--text-caption)"],
        overline: ["var(--text-overline)", { letterSpacing: "var(--tracking-wide)" }],
      },
      fontWeight: {
        regular: "var(--weight-regular)",
        medium: "var(--weight-medium)",
        semibold: "var(--weight-semibold)",
        bold: "var(--weight-bold)",
      },
      letterSpacing: {
        tight: "var(--tracking-tight)",
        normal: "var(--tracking-normal)",
        wide: "var(--tracking-wide)",
        ui: "var(--tracking-ui)",
      },
      maxWidth: {
        "container-max": "var(--container-max)",
        "container-content": "var(--container-content)",
        "container-narrow": "var(--container-narrow)",
        "container-reading": "var(--container-reading)",
        "container-form": "var(--container-form)",
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        nav: "var(--shadow-nav)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        slower: "var(--duration-slower)",
      },
      transitionTimingFunction: {
        default: "var(--ease-default)",
        out: "var(--ease-out)",
        "in-out": "var(--ease-in-out)",
        smooth: "var(--ease-smooth)",
      },
      spacing: {
        "section-y": "var(--section-padding-y)",
        "subsection": "var(--subsection-gap)",
      },
      zIndex: {
        "sticky-nav": "var(--z-sticky-nav)",
        "mobile-menu": "var(--z-mobile-menu)",
        modal: "var(--z-modal)",
      },
    },
  },
  plugins: [],
};
export default config;
