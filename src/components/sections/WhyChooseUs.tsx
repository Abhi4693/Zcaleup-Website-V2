"use client";

import { WHY_CHOOSE } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhyChooseUs() {
  return (
    <section className="section-padding section-bg-alt">
      <div className="container-narrow">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Enterprise-grade ERP with the partnership model to ensure your long-term success."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <Card className="h-full text-center">
                <p className="mb-2 text-4xl font-bold gradient-text">{item.stat}</p>
                <p className="mb-4 text-sm font-semibold text-text-secondary">
                  {item.statLabel}
                </p>
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
