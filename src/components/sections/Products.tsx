"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Products() {
  return (
    <section id="solutions" className="section-padding section-bg-alt scroll-mt-24">
      <div className="container-narrow">
        <SectionHeading
          badge="AI features coming soon"
          title="Products"
          subtitle="Modular ERP designed for disciplined operations—implement what you need, expand when you grow."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.06}>
              <Link href={`/products#${product.id}`}>
                <Card className="group h-full">
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <product.icon className="h-6 w-6" />
                    </div>
                    {product.badge && (
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-text group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    Explore
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
