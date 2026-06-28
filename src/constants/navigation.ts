export const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  products: [
    { label: "Finance & Accounts", href: "/products#finance" },
    { label: "Supply Chain & Inventory", href: "/products#inventory" },
    { label: "Sales & Billing", href: "/products#sales" },
    { label: "Production & Manufacturing", href: "/products#production" },
    { label: "Retail & POS", href: "/products#retail" },
    { label: "Reports & Analytics", href: "/products#analytics" },
  ],
  solutions: [
    { label: "Manufacturing ERP", href: "/industries#manufacturing" },
    { label: "Retail ERP", href: "/industries#retail" },
    { label: "Travel & Expense ERP", href: "/industries#travel" },
    { label: "Construction ERP", href: "/industries#construction" },
  ],
  industries: [
    { label: "Manufacturing", href: "/industries#manufacturing" },
    { label: "Retail", href: "/industries#retail" },
    { label: "Travel & Expense", href: "/industries#travel" },
    { label: "Construction", href: "/industries#construction" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Implementation & Support", href: "/#support" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  resources: [
    { label: "ERP Modules", href: "/modules" },
    { label: "Book a Demo", href: "/demo" },
    { label: "Request Quote", href: "/pricing" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/", platform: "instagram" as const },
  { label: "Facebook", href: "https://facebook.com/", platform: "facebook" as const },
  { label: "Twitter", href: "https://x.com/", platform: "twitter" as const },
  { label: "WhatsApp", href: "https://wa.me/", platform: "whatsapp" as const },
] as const;
