"use client";

import Link from "next/link";
import { useState } from "react";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: ROUTES.service, label: "The Assessment" },
  { href: ROUTES.howItWorks, label: "How It Works" },
  { href: ROUTES.whoThisIsFor, label: "Who This Is For" },
  { href: ROUTES.about, label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[var(--z-sticky-nav)] bg-white border-b border-border-light transition-shadow duration-normal",
          mobileOpen && "shadow-nav"
        )}
      >
        <div className="max-w-[var(--container-content)] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href={ROUTES.home}
            className="font-headline text-xl font-bold text-navy-800 tracking-tight"
          >
            BuildCheck
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-[var(--color-text-secondary)] hover:text-navy-800 transition-colors duration-[var(--duration-fast)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ROUTES.requestAssessment}
              className="inline-flex items-center justify-center rounded-sm bg-accent text-white font-semibold text-[15px] px-6 py-2.5 hover:bg-accent-hover transition-all duration-[var(--duration-fast)] hover:-translate-y-px"
            >
              Request Assessment
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-navy-800 aria-label-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu: positioned below header so hamburger button stays clickable */}
      <div
        className={cn(
          "fixed left-0 right-0 top-16 bottom-0 z-[var(--z-mobile-menu)] bg-white md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav
          className="flex flex-col items-center justify-center gap-8 py-12 px-6"
          aria-label="Main mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-navy-800"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ROUTES.requestAssessment}
            className="inline-flex items-center justify-center rounded-sm bg-accent text-white font-semibold text-[15px] px-8 py-3.5 w-full max-w-xs"
            onClick={() => setMobileOpen(false)}
          >
            Request Assessment
          </Link>
        </nav>
      </div>
    </>
  );
}
