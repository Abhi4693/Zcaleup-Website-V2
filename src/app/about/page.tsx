import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ABOUT } from "@/constants/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CustomerJourney } from "@/components/sections/CustomerJourney";
import { Support } from "@/components/sections/Support";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ZcaleUp ERP—built to power businesses at every stage with fully customizable ERP for growing businesses in India.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title={ABOUT.headline}
        subtitle={ABOUT.description}
      />
      <section className="section-padding">
        <div className="container-narrow">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <ScrollReveal>
              <h2 className="heading-md mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                {ABOUT.mission}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="heading-md mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                {ABOUT.vision}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-16">
            <div className="rounded-3xl border border-border bg-section-alt p-8 md:p-12">
              <div className="space-y-2 text-center">
                {ABOUT.stages.map((line, i) => (
                  <p
                    key={i}
                    className={`text-lg ${
                      i % 2 === 0 ? "font-semibold text-text" : "text-text-secondary"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CustomerJourney />
      <Support />
      <CTABanner />
    </>
  );
}
