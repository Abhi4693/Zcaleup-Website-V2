import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Request a ZcaleUp ERP demo—see manufacturing, retail, inventory, finance, and operations in one business ERP system. Our team replies within one business day.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        badge="Free Demo"
        title="ERP software demo — tailored to your workflows"
        subtitle="Share accurate contact details—we'll respond quickly with a curated walkthrough (manufacturing, retail, finance, inventory, and more)."
      />
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-xl">
          <ScrollReveal>
            <ContactForm
              mode="demo"
              title="Request Your Demo"
              submitLabel="Submit Demo Request"
            />
          </ScrollReveal>
          <ScrollReveal className="mt-6 text-center" delay={0.1}>
            <p className="text-sm text-text-secondary">
              Prefer email? Reach us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary">
                {siteConfig.email}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
