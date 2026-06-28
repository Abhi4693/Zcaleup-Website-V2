import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for ZcaleUp ERP and ZcaleUp Technologies.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="How ZcaleUp Technologies handles your information." />
      <section className="section-padding">
        <div className="container-narrow prose prose-gray mx-auto max-w-3xl">
          <p className="text-text-secondary leading-relaxed">
            ZcaleUp Technologies (&ldquo;ZcaleUp&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy.
            This policy describes how we collect, use, and protect information when you visit{" "}
            {siteConfig.url} or contact us regarding ZcaleUp ERP.
          </p>
          <h2 className="heading-md mt-10 mb-4">Information We Collect</h2>
          <p className="text-text-secondary leading-relaxed">
            When you submit a contact or demo request form, we may collect your name, email address,
            phone number, company information, industry, and requirements you provide voluntarily.
          </p>
          <h2 className="heading-md mt-10 mb-4">How We Use Information</h2>
          <p className="text-text-secondary leading-relaxed">
            We use submitted information to respond to inquiries, schedule demos, provide product
            information, and support implementation discussions related to ZcaleUp ERP.
          </p>
          <h2 className="heading-md mt-10 mb-4">Contact</h2>
          <p className="text-text-secondary leading-relaxed">
            For privacy-related questions, contact us at{" "}
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
