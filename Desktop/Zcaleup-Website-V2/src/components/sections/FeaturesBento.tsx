"use client";

import { BENTO_FEATURES } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FeaturesBento() {
  return (
    <section id="features" className="section-padding section-bg-alt scroll-mt-24">
      <div className="container-narrow">
        <SectionHeading
          title="Features"
          subtitle="Everything your business needs—in one unified platform with governed workflows and real-time visibility."
        />
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENTO_FEATURES.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={i * 0.04}
              className={i === 0 || i === 5 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-bold text-text">{feature.title}</h3>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
