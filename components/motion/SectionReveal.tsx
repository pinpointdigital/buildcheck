"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
