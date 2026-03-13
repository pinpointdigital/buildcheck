"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const defaultItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
};

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Use when parent is in view (e.g. section scroll-in). Set to false for immediate play. */
  inView?: boolean;
}

export function StaggerReveal({
  children,
  className,
  inView = true,
}: StaggerRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={defaultContainer}
      initial="hidden"
      {...(inView
        ? {
            whileInView: "visible",
            viewport: { once: true, margin: "-5% 0px -5% 0px" },
          }
        : { animate: "visible" })}
    >
      {children}
    </motion.div>
  );
}

interface StaggerRevealItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerRevealItem({ children, className }: StaggerRevealItemProps) {
  return (
    <motion.div variants={defaultItem} className={cn(className)}>
      {children}
    </motion.div>
  );
}
