"use client";

import { SUPPORT } from "@/constants/content";
import { HeadphonesIcon, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const icons = [HeadphonesIcon, Rocket];

export function Support() {
  return (
    <section id="support" className="section-padding scroll-mt-24">
      <div className="container-narrow">
        <SectionHeading
          title={SUPPORT.headline}
          subtitle={SUPPORT.subheadline}
        />
        <div className="grid gap-8 md:grid-cols-2">
          {SUPPORT.items.map((item, i) => {
            const Icon = icons[i] ?? HeadphonesIcon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm lg:p-8">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-bold text-text">{item.title}</h3>
                    <p className="leading-relaxed text-text-secondary">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
