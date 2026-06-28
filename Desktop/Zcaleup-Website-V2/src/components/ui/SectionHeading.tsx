import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  badge?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  badge,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          {badge}
        </span>
      )}
      <h2 className="heading-lg mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg leading-relaxed text-text-secondary">{subtitle}</p>
      )}
    </ScrollReveal>
  );
}
