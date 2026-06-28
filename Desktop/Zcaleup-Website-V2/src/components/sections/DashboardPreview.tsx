"use client";

import { CONNECTED_MODULES } from "@/constants/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DashboardMockup } from "@/components/dashboard/DashboardMockup";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function DashboardPreview() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-narrow">
        <SectionHeading
          title="Connect All Your Business Modules"
          subtitle="Finance, Inventory, Manufacturing, Retail, Payroll, Procurement, CRM—they share one operational truth."
        />
        <ScrollReveal>
          <div className="relative">
            {/* Module orbit */}
            <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
              {CONNECTED_MODULES.map((mod, i) => (
                <span
                  key={mod}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-secondary shadow-sm transition-colors hover:border-primary hover:text-primary"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {mod}
                </span>
              ))}
            </div>
            <DashboardMockup />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
