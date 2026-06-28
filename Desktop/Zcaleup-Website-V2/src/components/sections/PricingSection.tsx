"use client";

import { Check } from "lucide-react";
import { PRICING } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding section-bg-alt scroll-mt-24">
      <div className="container-narrow">
        <SectionHeading title={PRICING.headline} subtitle={PRICING.description} />
        <ScrollReveal>
          <div className="mx-auto max-w-lg overflow-hidden rounded-3xl border border-border bg-white shadow-xl">
            <div className="bg-gradient-to-br from-primary to-primary-light p-8 text-white">
              <h3 className="text-2xl font-bold">{PRICING.plan.title}</h3>
              <p className="mt-2 text-white/80">{PRICING.plan.description}</p>
            </div>
            <div className="p-8">
              <ul className="mb-8 space-y-4">
                {PRICING.plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" className="flex-1" showArrow>
                  Contact Us for Pricing
                </Button>
                <Button href="/demo" variant="secondary" className="flex-1">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
