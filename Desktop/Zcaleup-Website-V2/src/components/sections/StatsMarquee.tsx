"use client";

import { MARQUEE_STATS } from "@/constants/content";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsMarquee() {
  const items = [...MARQUEE_STATS, ...MARQUEE_STATS];

  return (
    <section id="stats" className="scroll-mt-24 border-y border-border bg-white py-6">
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-12 px-6">
          {items.map((stat, i) => (
            <div
              key={`${"value" in stat ? stat.label : stat.text}-${i}`}
              className="flex flex-shrink-0 items-center gap-3 whitespace-nowrap"
            >
              <span className="text-2xl font-bold text-text">
                {"value" in stat ? (
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={"decimals" in stat ? stat.decimals : 0}
                  />
                ) : (
                  stat.text
                )}
              </span>
              <span className="text-sm font-medium text-text-secondary">
                {"value" in stat ? stat.label : stat.label}
              </span>
              <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
