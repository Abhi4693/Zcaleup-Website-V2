"use client";

import { AI_FEATURES } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AIFeatures() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          badge="Intelligent Operations"
          title="Automation & Analytics"
          subtitle="Smart process automation and operational analytics today—with advanced AI capabilities coming soon."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {AI_FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <Card className="relative h-full overflow-hidden">
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    feature.badge === "Coming Soon"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {feature.badge}
                </span>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-text">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
