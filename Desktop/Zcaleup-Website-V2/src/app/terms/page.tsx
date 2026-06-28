import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for using ZcaleUp ERP website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="Terms governing use of the ZcaleUp website and services." />
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <p className="text-text-secondary leading-relaxed">
            By accessing {siteConfig.url} or using ZcaleUp ERP services, you agree to these terms.
            ZcaleUp Technologies provides ERP software and related implementation support subject
            to separate commercial agreements.
          </p>
          <h2 className="heading-md mt-10 mb-4">Use of Website</h2>
          <p className="text-text-secondary leading-relaxed">
            Content on this website is provided for informational purposes. Product capabilities,
            modules, and availability may vary based on deployment scope and agreement terms.
          </p>
          <h2 className="heading-md mt-10 mb-4">Intellectual Property</h2>
          <p className="text-text-secondary leading-relaxed">
            All content, branding, and software associated with ZcaleUp ERP are the property of
            ZcaleUp Technologies unless otherwise stated.
          </p>
          <h2 className="heading-md mt-10 mb-4">Contact</h2>
          <p className="text-text-secondary leading-relaxed">
            Questions about these terms may be directed to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
