"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ERP_MODULES } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function ERPModules() {
  const [expanded, setExpanded] = useState<string | null>(ERP_MODULES[0]?.id ?? null);

  return (
    <section id="modules" className="section-padding scroll-mt-24">
      <div className="container-narrow">
        <SectionHeading
          title="ERP Modules"
          subtitle="Finance, Inventory, Manufacturing, Retail, Payroll, Procurement, CRM—they share one operational truth."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {ERP_MODULES.map((mod, i) => {
            const isOpen = expanded === mod.id;
            return (
              <ScrollReveal key={mod.id} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-primary/30 bg-white shadow-lg shadow-primary/5"
                      : "border-border bg-white shadow-sm hover:border-primary/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : mod.id)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <mod.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-text">{mod.title}</h3>
                      <p className="text-sm text-text-secondary line-clamp-1">
                        {mod.description}
                      </p>
                    </div>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                      <ChevronDown className="h-5 w-5 text-text-secondary" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-border px-5 pb-5 pt-3">
                          <div className="flex flex-wrap gap-2">
                            {mod.features.map((f) => (
                              <span
                                key={f}
                                className="rounded-full bg-section-alt px-3 py-1 text-xs font-medium text-text-secondary"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal className="mt-10 text-center">
          <Button href="/modules" variant="outline" showArrow>
            View All Modules
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
