import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ERP_MODULES } from "@/constants/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "ERP Modules",
  description:
    "Explore all ZcaleUp ERP modules—Finance, Inventory, Sales, HR, Manufacturing, Procurement, POS, Reporting, CRM, and Projects.",
};

export default function ModulesPage() {
  return (
    <>
      <PageHero
        badge="Unified Platform"
        title="ERP Modules"
        subtitle="Finance, Inventory, Manufacturing, Retail, Payroll, Procurement, CRM—they share one operational truth."
      />
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ERP_MODULES.map((mod, i) => (
              <ScrollReveal key={mod.id} delay={i * 0.04}>
                <div
                  id={mod.id}
                  className="scroll-mt-32 h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <mod.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mb-2 text-lg font-bold text-text">{mod.title}</h2>
                  <p className="mb-4 text-sm text-text-secondary">{mod.description}</p>
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
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12 text-center">
            <Button href="/demo" size="lg" showArrow>
              See Modules in Action
            </Button>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
