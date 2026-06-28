import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

const sizes = {
  sm: { height: 36, width: 140, className: "h-9 w-auto max-w-[140px]" },
  md: { height: 44, width: 170, className: "h-11 w-auto max-w-[170px]" },
  lg: { height: 52, width: 200, className: "h-[52px] w-auto max-w-[200px]" },
};

export function Logo({
  href = "/",
  className,
  size = "md",
  priority = false,
}: LogoProps) {
  const { height, width, className: sizeClass } = sizes[size];

  const image = (
    <Image
      src="/logo-transparent.png"
      alt="ZcaleUp — Scale Smart. Scale Fast."
      width={width}
      height={height}
      className={cn(sizeClass, "object-contain object-left", className)}
      priority={priority}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center" aria-label="ZcaleUp home">
        {image}
      </Link>
    );
  }

  return image;
}
