"use client";

import { motion } from "framer-motion";
import { TRUSTED_BY } from "@/constants/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-section-alt py-12">
      <div className="container-narrow">
        <ScrollReveal>
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-text-secondary">
            Trusted by growing businesses across India
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {TRUSTED_BY.map((name, i) => (
            <ScrollReveal key={name} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex h-12 items-center rounded-xl border border-border bg-white px-6 shadow-sm"
              >
                <span className="text-sm font-semibold text-text-secondary">{name}</span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
