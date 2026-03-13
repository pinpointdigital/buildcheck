import Link from "next/link";
import { ROUTES, SITE, COMPANY, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-dark-deep text-text-inverse-muted">
      <div className="max-w-[var(--container-content)] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <Link
              href={ROUTES.home}
              className="font-headline text-xl font-bold text-white tracking-tight"
            >
              {SITE.name}
            </Link>
            <p className="text-caption mt-2 text-text-inverse-muted">
              {SITE.endorsement}
            </p>
            <p className="text-caption mt-1 font-mono text-[13px]">
              {COMPANY.cslbDisplay}
            </p>
          </div>
          <nav className="flex flex-col gap-3" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-sm text-text-inverse-muted hover:text-white transition-colors duration-[var(--duration-fast)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ROUTES.requestAssessment}
              className="text-body-sm font-medium text-text-inverse-muted hover:text-white"
            >
              Request Assessment
            </Link>
          </nav>
          <div className="text-body-sm">
            <p>
              <a
                href={`tel:${COMPANY.phone.replace(/\D/g, "")}`}
                className="text-text-inverse-muted hover:text-white transition-colors"
              >
                {COMPANY.phone}
              </a>
            </p>
            <p className="mt-1 text-caption">{COMPANY.hours}</p>
          </div>
        </div>
        <p className="mt-10 pt-8 border-t border-border-dark text-caption">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
