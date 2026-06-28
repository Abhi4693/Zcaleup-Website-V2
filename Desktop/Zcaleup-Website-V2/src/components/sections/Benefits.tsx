"use client";

import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const benefits = [
  "Fully customizable workflows tailored to your industry",
  "Real-time data visibility across all departments",
  "Modular implementation—start small, scale confidently",
  "Dedicated implementation and ongoing support",
  "Statutory and compliance readiness for India",
  "Operational dashboards with KPIs and exception monitoring",
];

export function Benefits() {
  return (
    <section className="section-padding section-bg-alt">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="absolute inset-4 rounded-2xl border border-border bg-white p-8 shadow-xl">
                <p className="mb-2 text-sm font-semibold text-primary">Impact You Can Operationalize</p>
                <h3 className="mb-6 text-2xl font-bold text-text">
                  Operational outcomes enterprises track after consolidation
                </h3>
                <div className="space-y-4">
                  {["Steady", "Repeatable", "Measurable"].map((word) => (
                    <div key={word} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span className="font-medium text-text">{word} results</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <SectionHeading
              align="left"
              title="Fully Customizable ERP for Your Business"
              subtitle="ZcaleUp ERP adapts to your business—not the other way around. We customize workflows, modules, and processes based on your industry, operations, and unique requirements."
              className="mb-8"
            />
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={benefit} delay={i * 0.06}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-text-secondary">{benefit}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
