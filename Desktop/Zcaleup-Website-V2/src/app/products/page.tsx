import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PRODUCTS } from "@/constants/content";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore ZcaleUp ERP products—Finance, Inventory, Sales, Production, Retail, and Analytics modules designed for disciplined operations.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        badge="Modular ERP"
        title="Products"
        subtitle="Modular ERP designed for disciplined operations—implement what you need, expand when you grow."
      />
      <section className="section-padding">
        <div className="container-narrow space-y-16">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.05}>
              <div
                id={product.id}
                className="scroll-mt-32 grid items-center gap-8 lg:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <product.icon className="h-7 w-7" />
                  </div>
                  <h2 className="heading-md mb-4">{product.title}</h2>
                  <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                    {product.description}
                  </p>
                  <Button href="/demo" showArrow>
                    Book a Demo
                  </Button>
                </div>
                <Card className={i % 2 === 1 ? "lg:order-1" : ""} hover={false}>
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-6">
                    <div className="mb-4 flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-3/4 rounded bg-border/60" />
                      <div className="h-4 w-1/2 rounded bg-border/40" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((n) => (
                          <div key={n} className="h-16 rounded-lg bg-white/80" />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
