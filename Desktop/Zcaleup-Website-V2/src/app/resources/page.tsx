import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { RESOURCES } from "@/constants/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore ZcaleUp ERP resources—module guides, industry solutions, implementation playbooks, and demo booking.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        badge="Knowledge Hub"
        title={RESOURCES.headline}
        subtitle={RESOURCES.description}
      />
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-2">
            {RESOURCES.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
                >
                  <h2 className="mb-3 text-xl font-bold text-text group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <p className="mb-6 flex-1 text-text-secondary">{item.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
