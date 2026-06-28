import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CONTACT } from "@/constants/content";
import { siteConfig } from "@/lib/utils";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with ZcaleUp ERP experts. Book a demo, request pricing, or get procurement and onboarding support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title={CONTACT.headline} subtitle={CONTACT.description} />
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <h2 className="heading-md mb-8">Personalised Guidance</h2>
                <div className="space-y-6">
                  {CONTACT.guidance.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                    >
                      <h3 className="mb-2 font-bold text-text">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal className="mt-8 space-y-4" delay={0.1}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">Email</p>
                    <p className="text-sm text-text-secondary">{siteConfig.email}</p>
                  </div>
                </a>
                <a
                  href="/demo"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">Book a Demo</p>
                    <p className="text-sm text-text-secondary">
                      A focused walkthrough of modules that match your industry
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.15}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
