"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/layout/PageContainer";
import { cn } from "@/lib/utils";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

interface PageHeroProps {
  /** Headline text. Can be a string or ReactNode (e.g. multiple lines as block elements). */
  title: React.ReactNode;
  subtitle?: string;
  cta?: { label: string; href: string };
  availability?: string;
  variant?: "light" | "dark";
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  cta,
  availability,
  variant = "light",
  className,
}: PageHeroProps) {
  const isDark = variant === "dark";
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        isDark ? "bg-bg-dark text-white" : "bg-bg-default",
        className
      )}
    >
      <PageContainer width="content">
        <motion.div
          className={cn("max-w-[var(--container-reading)]", isDark && "text-white")}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="font-headline text-hero font-bold tracking-tight text-inherit"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={item}
              className={cn(
                "mt-6 text-body leading-normal max-w-[var(--container-reading)]",
                isDark ? "text-text-inverse-muted" : "text-[var(--color-text-secondary)]"
              )}
            >
              {subtitle}
            </motion.p>
          )}
          {cta && (
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Button
                href={cta.href}
                variant="primary"
                className={isDark ? "bg-accent hover:bg-accent-hover text-white" : ""}
              >
                {cta.label}
              </Button>
            </motion.div>
          )}
          {availability && (
            <motion.p
              variants={item}
              className={cn(
                "mt-4 text-caption italic",
                isDark ? "text-text-inverse-muted" : "text-[var(--color-text-tertiary)]"
              )}
            >
              {availability}
            </motion.p>
          )}
        </motion.div>
      </PageContainer>
    </section>
  );
}
