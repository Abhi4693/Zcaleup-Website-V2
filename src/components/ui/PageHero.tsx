"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-section-alt pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="container-narrow relative text-center">
        <ScrollReveal>
          {badge && (
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              {badge}
            </span>
          )}
          <h1 className="heading-xl mb-4">{title}</h1>
          {subtitle && (
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">{subtitle}</p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
