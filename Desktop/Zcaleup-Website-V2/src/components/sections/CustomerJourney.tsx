"use client";

import { CUSTOMER_JOURNEY } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CustomerJourney() {
  return (
    <section id="journey" className="section-padding scroll-mt-24">
      <div className="container-narrow">
        <SectionHeading
          title="Customer Journey"
          subtitle="From consultation to go-live and beyond—a structured path to ERP success."
        />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary-light to-accent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-8">
            {CUSTOMER_JOURNEY.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`inline-block rounded-2xl border border-border bg-white p-6 shadow-sm ${
                        i % 2 === 0 ? "md:ml-auto" : ""
                      } max-w-md`}
                    >
                      <span className="mb-2 inline-block text-sm font-bold text-primary">
                        Step {step.step}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-text">{step.title}</h3>
                      <p className="text-sm text-text-secondary">{step.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 mx-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/30 md:mx-0">
                    {step.step}
                  </div>

                  <div className="hidden flex-1 md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
