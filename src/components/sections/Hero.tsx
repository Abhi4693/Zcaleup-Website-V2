"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HERO } from "@/constants/content";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { DashboardMockup } from "@/components/dashboard/DashboardMockup";
import { ParticleBackground } from "@/components/animations/ParticleBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[72px]">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <ParticleBackground />
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #2B6DF8 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-narrow relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center py-16 lg:flex-row lg:gap-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            {HERO.tag}
          </motion.span>

          <h1 className="heading-xl mb-6">
            <span className="block text-text">{HERO.brandPrefix}</span>
            <span className="gradient-text">{HERO.headline}</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-text-secondary lg:mx-0 mx-auto">
            {HERO.subheadline}
          </p>

          <ul className="mb-10 hidden space-y-3 sm:block">
            {HERO.bullets.map((bullet, i) => (
              <motion.li
                key={bullet}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3 text-text-secondary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {bullet}
              </motion.li>
            ))}
          </ul>

          <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button href="/demo" size="lg" showArrow>
              Book Your Free Demo
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Request Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
            {HERO.stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-text sm:text-3xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                  />
                </p>
                <p className="mt-1 text-xs text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-text-secondary/70">{HERO.statsDisclaimer}</p>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex-1 lg:mt-0"
        >
          <DashboardMockup />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
