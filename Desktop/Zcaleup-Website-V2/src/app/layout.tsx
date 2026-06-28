import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ZcaleUp ERP | Complete ERP Software for Manufacturing, Retail & Business Management",
    template: "%s | ZcaleUp ERP",
  },
  description:
    "ZcaleUp ERP is a powerful, fully customizable ERP software designed for manufacturing, retail, construction, and growing businesses. Manage finance, inventory, sales, and operations in one intelligent system.",
  keywords: [
    "ERP software",
    "ERP India",
    "manufacturing ERP",
    "retail ERP",
    "business ERP system",
    "customizable ERP",
    "construction ERP",
  ],
  authors: [{ name: siteConfig.legalName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "ZcaleUp ERP | ERP Software for Manufacturing, Retail & Business Management",
    description:
      "ZcaleUp ERP is customizable ERP software for manufacturing, retail, construction, and growing businesses—finance, inventory, sales, and operations in one system.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZcaleUp ERP",
    description:
      "Complete ERP software for manufacturing, retail, and business management in India.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ZcaleUp ERP",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Complete ERP software platform for finance, inventory, production, retail, billing, and reporting.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Contact for bespoke pricing",
  },
  provider: {
    "@type": "Organization",
    name: siteConfig.legalName,
    email: siteConfig.email,
    url: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
