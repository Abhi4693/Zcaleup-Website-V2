import { Hero } from "@/components/sections/Hero";
import { StatsMarquee } from "@/components/sections/StatsMarquee";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhyZcaleUp } from "@/components/sections/WhyZcaleUp";
import { Products } from "@/components/sections/Products";
import { ERPModules } from "@/components/sections/ERPModules";
import { IndustrySolutions } from "@/components/sections/IndustrySolutions";
import { AIFeatures } from "@/components/sections/AIFeatures";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Benefits } from "@/components/sections/Benefits";
import { CustomerJourney } from "@/components/sections/CustomerJourney";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQ } from "@/components/sections/FAQ";
import { Support } from "@/components/sections/Support";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsMarquee />
      <TrustedBy />
      <WhyZcaleUp />
      <Products />
      <ERPModules />
      <IndustrySolutions />
      <AIFeatures />
      <FeaturesBento />
      <DashboardPreview />
      <Benefits />
      <CustomerJourney />
      <WhyChooseUs />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <Support />
      <CTABanner />
    </>
  );
}
