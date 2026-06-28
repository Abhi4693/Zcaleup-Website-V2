import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { INDUSTRIES } from "@/constants/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "Industry-specific ERP solutions for Manufacturing, Retail, Travel & Expense, and Construction from ZcaleUp ERP.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        badge="Industry-Focused"
        title="Industry Solutions"
        subtitle="ERP patterns tuned for how these industries operate day-to-day—without losing centralized control."
      />
      <section className="section-padding">
        <div className="container-narrow space-y-12">
          {INDUSTRIES.map((industry, i) => (
            <ScrollReveal key={industry.id} delay={i * 0.08}>
              <div
                id={industry.id}
                className="scroll-mt-32 overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-5">
                  <div className="flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 p-10 lg:col-span-2">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-primary shadow-lg">
                      <industry.icon className="h-12 w-12" />
                    </div>
                  </div>
                  <div className="p-8 lg:col-span-3 lg:p-10">
                    <h2 className="heading-md mb-4">{industry.title}</h2>
                    <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                      {industry.description}
                    </p>
                    <Button href="/demo" showArrow>
                      {industry.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
