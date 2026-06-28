"use client";

import { FAQS } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FAQ() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about ZcaleUp ERP."
        />
        <ScrollReveal>
          <Accordion items={FAQS} className="mx-auto max-w-3xl" />
        </ScrollReveal>
      </div>
    </section>
  );
}
