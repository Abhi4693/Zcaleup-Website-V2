import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PRICING } from "@/constants/content";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Enterprise-grade ERP pricing tailored to your deployment size, integrations, and compliance requirements. Contact ZcaleUp for a bespoke quote.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Enterprise Pricing"
        title={PRICING.headline}
        subtitle={PRICING.description}
      />
      <PricingSection />
      <FAQ />
      <CTABanner title="Prefer a Guided Intro?" subtitle="Request contact and our team will walk you through the right scope for your business." />
    </>
  );
}
