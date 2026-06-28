import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for the ZcaleUp ERP website.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero title="Cookie Policy" subtitle="How we use cookies on the ZcaleUp website." />
      <section className="section-padding">
        <div className="container-narrow mx-auto max-w-3xl">
          <p className="text-text-secondary leading-relaxed">
            This website may use cookies and similar technologies to improve your browsing
            experience, analyze site traffic, and support basic functionality.
          </p>
          <h2 className="heading-md mt-10 mb-4">What Are Cookies</h2>
          <p className="text-text-secondary leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help
            websites remember preferences and understand how visitors interact with pages.
          </p>
          <h2 className="heading-md mt-10 mb-4">Managing Cookies</h2>
          <p className="text-text-secondary leading-relaxed">
            You can control or delete cookies through your browser settings. Disabling cookies may
            affect certain website features.
          </p>
          <h2 className="heading-md mt-10 mb-4">Contact</h2>
          <p className="text-text-secondary leading-relaxed">
            For questions about this policy, contact{" "}
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
