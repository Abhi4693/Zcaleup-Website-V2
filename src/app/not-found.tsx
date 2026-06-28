import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="mb-2 text-8xl font-bold gradient-text">404</p>
      <h1 className="heading-md mb-4">Page Not Found</h1>
      <p className="mb-8 max-w-md text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Button href="/" showArrow>
          Back to Home
        </Button>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-secondary hover:border-primary hover:text-primary"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
