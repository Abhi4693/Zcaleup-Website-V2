"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function IndustrySolutions() {
  return (
    <section id="industries" className="section-padding section-bg-alt scroll-mt-24">
      <div className="container-narrow">
        <SectionHeading
          title="Industry Solutions"
          subtitle="ERP patterns tuned for how these industries operate day-to-day—without losing centralized control."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {INDUSTRIES.map((industry, i) => (
            <ScrollReveal key={industry.id} delay={i * 0.1}>
              <Link href={`/industries#${industry.id}`}>
                <Card className="group h-full">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <industry.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-text group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="mb-6 flex-1 leading-relaxed text-text-secondary">
                    {industry.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    {industry.cta}
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
