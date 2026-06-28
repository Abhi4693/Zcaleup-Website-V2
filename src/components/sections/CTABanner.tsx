"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Ready for ZcaleUp ERP?",
  subtitle = "Grow throughput, tighten controls, and make decisions sooner—without adding operational drag.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent/80" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container-narrow relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg mb-4 text-white"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-white/90"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            href="/demo"
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            showArrow
          >
            Book Your Free Demo
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Request Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
