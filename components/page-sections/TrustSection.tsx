"use client";

import { motion } from "framer-motion";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

export interface TrustItem {
  label: string;
  value?: string;
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center justify-items-center text-center lg:text-left"
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
                "text-body-sm font-medium",
                isDark ? "text-text-inverse-muted" : "text-[var(--color-text-secondary)]"
              )}
            >
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
                itemRow.label
              )}
            </motion.div>
          ))}
        </motion.div>
      </PageContainer>
    </section>
  );
}
