"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Override animation (e.g. for reduced motion) */
  variants?: typeof defaultVariants;
}

export function SectionReveal({
  children,
  className,
  variants = defaultVariants,
}: SectionRevealProps) {
  return (
    <motion.div
      initial="visible"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px -8% 0px", amount: 0.05 }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
