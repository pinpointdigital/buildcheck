"use client";

import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

export type TrustIconName = "license" | "veteran" | "experience" | "zoom";

export interface TrustItem {
  label: string;
  value?: string;
  icon?: TrustIconName;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const iconClass = "w-full h-full shrink-0 text-teal";
const stroke = 1;
const svgProps = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: stroke,
  "aria-hidden": true,
  preserveAspectRatio: "xMidYMid meet" as const,
};

function TrustIcon({ name, isDark }: { name: TrustIconName; isDark: boolean }) {
  const className = cn(iconClass, isDark && "text-teal-light");
  switch (name) {
    case "license":
      return (
        <svg className={className} viewBox="0 0 24 24" {...svgProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "veteran":
      return (
        <svg className={className} viewBox="0 0 24 24" {...svgProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 21V5l11 5.5L6 16V21" />
        </svg>
      );
    case "experience":
      return (
        <svg className={className} viewBox="0 0 24 24" {...svgProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    case "zoom":
      return (
        <svg className={className} viewBox="0 0 24 24" {...svgProps}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5L5 12v8h4v-5h6v5h4V12L12 5z" />
        </svg>
      );
    default:
      return null;
  }
}

interface TrustSectionProps {
  items: TrustItem[];
  variant?: "light" | "dark";
  className?: string;
}

export function TrustSection({
  items,
  variant = "light",
  className,
}: TrustSectionProps) {
  const isDark = variant === "dark";
  return (
    <section
      className={cn(
        "py-12",
        variant === "dark" ? "bg-bg-dark text-white" : "bg-bg-subtle",
        className
      )}
    >
      <PageContainer>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start justify-items-center text-center lg:text-left"
          variants={container}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, margin: "-4% 0px -4% 0px", amount: 0.05 }}
        >
          {items.map((itemRow, i) => (
            <motion.div
              key={i}
              variants={item}
              className={cn(
                "flex flex-col items-center lg:items-start gap-3 text-body-sm font-medium",
                isDark ? "text-text-inverse-muted" : "text-[var(--color-text-secondary)]"
              )}
            >
              {itemRow.icon && (
                <span className="inline-flex size-12 shrink-0 items-center justify-center">
                  <TrustIcon name={itemRow.icon} isDark={isDark} />
                </span>
              )}
              {itemRow.value ? (
                <>
                  <span className={isDark ? "text-white" : "text-navy-800"}>
                    {itemRow.value}
                  </span>
                  {itemRow.label && (
                    <span className="block mt-0.5 opacity-90">{itemRow.label}</span>
                  )}
                </>
              ) : (
                <span>{itemRow.label}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </PageContainer>
    </section>
  );
}
