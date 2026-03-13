"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContentSection } from "@/components/page-sections/ContentSection";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  title: string;
  description: string;
  detail?: string;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const stepItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

interface ProcessStepsProps {
  overline?: string;
  title: string;
  steps: ProcessStep[];
  className?: string;
}

export function ProcessSteps({
  overline,
  title,
  steps,
  className,
}: ProcessStepsProps) {
  return (
    <ContentSection className={className}>
      <SectionHeader overline={overline} title={title} />
      <motion.div
        className="relative max-w-[var(--container-narrow)]"
        variants={container}
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, margin: "-5% 0px -5% 0px", amount: 0.05 }}
      >
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={stepItem}
            className={cn(
              "relative flex gap-6 pb-10 last:pb-0",
              i < steps.length - 1 &&
                "before:absolute before:left-[11px] before:top-10 before:bottom-0 before:w-px before:bg-border-light"
            )}
          >
            <div className="shrink-0 w-8 h-8 rounded-full border-2 border-teal flex items-center justify-center text-body font-semibold text-teal bg-white">
              {i + 1}
            </div>
            <div>
              <h3 className="text-h4 font-semibold text-navy-800">{step.title}</h3>
              <p className="mt-2 text-body text-[var(--color-text-secondary)] leading-normal">
                {step.description}
              </p>
              {step.detail && (
                <p className="mt-2 text-body-sm text-[var(--color-text-tertiary)]">
                  {step.detail}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </ContentSection>
  );
}
