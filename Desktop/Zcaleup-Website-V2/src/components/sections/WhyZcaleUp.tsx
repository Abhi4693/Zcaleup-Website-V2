"use client";

import { WHY_ZCALEUP } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhyZcaleUp() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Why ZcaleUp"
          subtitle="Clean structure, real-time signals, and automation that respects controls—everything you'd expect from a premium ERP experience."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_ZCALEUP.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-text">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
