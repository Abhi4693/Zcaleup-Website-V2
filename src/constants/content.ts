import {
  BarChart3,
  Bot,
  Building2,
  Calculator,
  Factory,
  FileText,
  Globe,
  Layers,
  Package,
  Receipt,
  ShoppingCart,
  Store,
  Truck,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  cta: string;
  icon: LucideIcon;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const HERO = {
  tag: "A Modern ERP Platform for Growing Businesses",
  headline: "Run operations with clarity and speed",
  brandPrefix: "Zcaleup ERP.",
  subheadline:
    "One cohesive ERP software platform for finance, inventory, production, retail, billing, and reporting—minimal noise, maximum control.",
  bullets: [
    "Centralize operations across departments",
    "Automate routine workflows and approvals",
    "Monitor performance with real-time dashboards",
  ],
  stats: [
    { value: 35, suffix: "%", label: "Operational Cost Reduction*" },
    { value: 2.5, suffix: "×", label: "Workflow Efficiency*", decimals: 1 },
    { value: 60, suffix: "%", label: "Faster Decision Making*" },
  ],
  statsDisclaimer: "*Illustrative targets—results vary by rollout scope and maturity.",
};

export const MARQUEE_STATS = [
  { value: 40, suffix: "%", label: "Faster Operations" },
  { value: 3, suffix: "×", label: "Process Efficiency" },
  { value: 99.9, suffix: "%", label: "System Reliability", decimals: 1 },
  { text: "Unified", label: "Ledger & Inventory" },
  { text: "End-to-end", label: "Order-to-Cash" },
] as const;

export const WHY_ZCALEUP = [
  {
    title: "End-to-End Business Control",
    description:
      "One ledger, consistent policies, and governed workflows spanning finance through fulfillment.",
    icon: Layers,
  },
  {
    title: "Real-Time Data Visibility",
    description:
      "Fewer spreadsheets, fewer reconciliation loops—signals update as transactions happen.",
    icon: BarChart3,
  },
  {
    title: "Smart Process Automation",
    description:
      "Configurable approvals and routing that reduce rework while keeping auditors comfortable.",
    icon: Workflow,
  },
  {
    title: "Industry-Focused ERP Design",
    description:
      "ERP patterns tuned for how industries operate day-to-day—without losing centralized control.",
    icon: Factory,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "finance",
    title: "Finance & Accounts",
    description:
      "Controlled period close, approvals, subsidiaries, taxation readiness, and reporting you can trust.",
    icon: Calculator,
  },
  {
    id: "inventory",
    title: "Supply Chain & Inventory",
    description:
      "Multi-location stock, inward/outward flows, BOM visibility, purchasing, and traceability.",
    icon: Package,
  },
  {
    id: "sales",
    title: "Sales & Billing",
    description:
      "Quotes to invoices with consistent pricing logic, approvals, taxes, and receivables tracking.",
    icon: Receipt,
  },
  {
    id: "production",
    title: "Production & Manufacturing",
    description:
      "Work orders, capacity awareness, BOM consumption, QC checkpoints, and output visibility.",
    icon: Factory,
    badge: "Popular",
  },
  {
    id: "retail",
    title: "Retail & POS",
    description:
      "Unified catalog, store operations, returns, tenders, inventory sync—and finance that stays tidy.",
    icon: Store,
  },
  {
    id: "analytics",
    title: "Reports & Analytics",
    description:
      "Operational dashboards, KPIs, exception monitoring, and decision-ready summaries across modules.",
    icon: BarChart3,
  },
];

export const ERP_MODULES: Module[] = [
  {
    id: "finance",
    title: "Finance",
    description: "Consolidate financial operations from ledger to banking, tax, and reporting.",
    icon: Calculator,
    features: ["General ledger", "Taxation readiness", "Period close", "Budget control"],
  },
  {
    id: "inventory",
    title: "Inventory",
    description: "Real-time inventory across godowns, reorder points, and stock movements.",
    icon: Package,
    features: ["Multi-location stock", "BOM visibility", "Traceability", "Reorder logic"],
  },
  {
    id: "sales",
    title: "Sales",
    description: "Invoicing, quotations, and sales orders linked to inventory and accounts.",
    icon: ShoppingCart,
    features: ["Quote to invoice", "Pricing logic", "Receivables", "Approvals"],
  },
  {
    id: "hr",
    title: "HR & Payroll",
    description: "Employee management and payroll integrated with finance and operations.",
    icon: Users,
    features: ["Payroll processing", "Employee records", "Allocations", "Compliance"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "BOM, work orders, and production tracking built for Indian shop floors.",
    icon: Factory,
    features: ["Work orders", "BOM consumption", "QC checkpoints", "Job work tracking"],
  },
  {
    id: "procurement",
    title: "Procurement",
    description: "From procurement to production—ensure on-time delivery and control over every unit.",
    icon: Truck,
    features: ["Purchase orders", "Vendor management", "Inward flows", "Approvals"],
  },
  {
    id: "pos",
    title: "POS",
    description: "Fast counter billing, barcode scanning, and daily reconciliation across stores.",
    icon: Store,
    features: ["Counter billing", "Barcode/QR", "Multi-branch sync", "Returns"],
  },
  {
    id: "reporting",
    title: "Reporting",
    description: "Stock, sales, profit, purchase, and custom reports for informed decisions.",
    icon: FileText,
    features: ["Operational dashboards", "KPIs", "Exception monitoring", "Custom reports"],
  },
  {
    id: "crm",
    title: "CRM",
    description: "Customer relationships connected to sales, billing, and service workflows.",
    icon: Users,
    features: ["Lead tracking", "Customer ledger", "Follow-ups", "Sales pipeline"],
  },
  {
    id: "projects",
    title: "Projects",
    description: "Project-centric cost visibility, milestones, and progress tracking.",
    icon: Building2,
    features: ["Budget tracking", "Milestones", "Resource allocation", "Progress reports"],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: "manufacturing",
    title: "ERP for Manufacturing",
    description:
      "Scheduling, BOM, shopfloor signals, subcontracting nuances, costing—and finance that reconciles cleanly. Grow from workshop to multi-unit production with real-time visibility.",
    cta: "Explore Manufacturing ERP",
    icon: Factory,
  },
  {
    id: "retail",
    title: "ERP for Retail",
    description:
      "Multi-store inventory, replenishment logic, omnichannel-ready retail ops, and disciplined cash controls. From a single store to multi-branch operations with POS and stock in sync.",
    cta: "Explore Retail ERP",
    icon: Store,
  },
  {
    id: "travel",
    title: "ERP for Travel & Expense",
    description:
      "Policy-aligned spend, approvals, settlements, allocations, and tight audit trails built for accountability. Manage travel requests and reimbursements from a single platform.",
    cta: "Explore Travel ERP",
    icon: Globe,
  },
  {
    id: "construction",
    title: "ERP for Construction",
    description:
      "Project-centric cost visibility, subcontractor workflows, milestones, procurement, and progress tracking. Plan, track, and control construction projects with real-time visibility.",
    cta: "Explore Construction ERP",
    icon: Building2,
  },
];

export const AI_FEATURES = [
  {
    title: "Smart Process Automation",
    description: "Configurable approvals and routing that reduce rework while keeping auditors comfortable.",
    icon: Workflow,
    badge: "Available",
  },
  {
    title: "Operational Analytics",
    description: "Operational dashboards, KPIs, exception monitoring, and decision-ready summaries across modules.",
    icon: BarChart3,
    badge: "Available",
  },
  {
    title: "AI-Powered Features",
    description: "Advanced AI capabilities for forecasting, intelligent workflows, and assisted reporting—coming soon.",
    icon: Bot,
    badge: "Coming Soon",
  },
];

export const BENTO_FEATURES: Feature[] = [
  { title: "Inventory", description: "Multi-location stock with full traceability.", icon: Package },
  { title: "Purchase", description: "End-to-end procurement with approvals.", icon: Truck },
  { title: "Sales", description: "Quote to invoice with consistent pricing.", icon: ShoppingCart },
  { title: "Production", description: "Work orders and BOM for shop floors.", icon: Factory },
  { title: "Finance", description: "Controlled close and taxation readiness.", icon: Calculator },
  { title: "CRM", description: "Customer relationships tied to operations.", icon: Users },
  { title: "HR", description: "Payroll and employee management.", icon: Users },
  { title: "Projects", description: "Budget and milestone tracking.", icon: Building2 },
  { title: "Analytics", description: "KPIs and exception monitoring.", icon: BarChart3 },
  { title: "Reporting", description: "Decision-ready summaries.", icon: FileText },
  { title: "Workflows", description: "Configurable approval routing.", icon: Workflow },
  { title: "Approvals", description: "Governed processes across modules.", icon: Layers },
];

export const CUSTOMER_JOURNEY: JourneyStep[] = [
  {
    step: 1,
    title: "Consultation",
    description: "We begin with a focused discovery call to understand your industry and operating model.",
  },
  {
    step: 2,
    title: "Requirement Gathering",
    description: "Our team maps your workflows, modules, and processes based on your unique requirements.",
  },
  {
    step: 3,
    title: "Implementation",
    description: "We configure, deploy, and customize ZcaleUp ERP to match your operational needs.",
  },
  {
    step: 4,
    title: "Training",
    description: "Structured training ensures your team can operate confidently from day one.",
  },
  {
    step: 5,
    title: "Go Live",
    description: "Smooth rollout with data migration support and go-live assistance.",
  },
  {
    step: 6,
    title: "Support",
    description: "Continuous optimization and dedicated support beyond go-live.",
  },
];

export const WHY_CHOOSE = [
  {
    title: "Fully Customizable",
    description:
      "ZcaleUp ERP adapts to your business—not the other way around. We customize workflows, modules, and processes based on your industry and requirements.",
    stat: "100%",
    statLabel: "Configurable",
  },
  {
    title: "Dedicated Support",
    description:
      "From requirement mapping to go-live and beyond, our team ensures your ERP implementation is smooth and structured.",
    stat: "24/7",
    statLabel: "Support Available",
  },
  {
    title: "Measurable ROI",
    description:
      "Our experts help configure, deploy, and scale the system according to your operational needs, ensuring faster adoption and measurable ROI.",
    stat: "2.5×",
    statLabel: "Efficiency Gains*",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Grow throughput, tighten controls, and make decisions sooner—without adding operational drag.",
    author: "Operational Excellence",
    company: "Core value proposition",
  },
  {
    quote:
      "One cohesive platform for finance, inventory, production, retail, billing, and reporting—minimal noise, maximum control.",
    author: "Unified Operations",
    company: "Platform benefit",
  },
  {
    quote:
      "ZcaleUp grows with you—intelligently, reliably, seamlessly—from early-stage operations to national expansion.",
    author: "Scalable Growth",
    company: "Long-term partnership",
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What is ZcaleUp ERP?",
    answer:
      "ZcaleUp ERP is a fully customizable ERP software platform for finance, inventory, production, retail, billing, and reporting. It is designed for manufacturing, retail, and growing businesses in India.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is bespoke to deployment size, integrations, subsidiaries, statutory requirements, support tier, and go-live timelines. Contact us for a tailored quote based on your needs.",
  },
  {
    question: "Can I implement only the modules I need?",
    answer:
      "Yes. ZcaleUp ERP is modular by design—implement what you need today and expand when you grow. Finance, Inventory, Manufacturing, Retail, Payroll, Procurement, CRM, and more share one operational truth.",
  },
  {
    question: "Do you offer implementation support?",
    answer:
      "Yes. From requirement mapping to go-live and beyond, our team guides you through setup, data migration, training, and continuous optimization so your team can operate confidently from day one.",
  },
  {
    question: "Which industries does ZcaleUp ERP support?",
    answer:
      "ZcaleUp ERP offers industry-specific solutions for Manufacturing, Retail, Travel & Expense Management, and Construction Project Management.",
  },
  {
    question: "Are AI features available?",
    answer:
      "Smart process automation and operational analytics are available today. Advanced AI-powered features for forecasting and intelligent workflows are coming soon.",
  },
];

export const ABOUT = {
  headline: "Built to Power Businesses at Every Stage",
  description:
    "ZcaleUp ERP is a modern ERP platform designed to simplify and control business operations for growing businesses in India.",
  mission:
    "We believe every business deserves enterprise-grade tools without enterprise-grade complexity. ZcaleUp adapts to your workflows—not the other way around.",
  vision:
    "See how ZcaleUp ERP transforms operational complexity into clarity and control. Designed to evolve with your business—today, tomorrow, and as you scale beyond.",
  stages: [
    "From early-stage startups building their foundation",
    "to growing enterprises expanding across regions.",
    "From securing your first major client",
    "to managing large-scale operations with confidence.",
    "Whether you're strengthening a local presence",
    "or preparing for national expansion,",
    "ZcaleUp grows with you—intelligently, reliably, seamlessly.",
  ],
};

export const SUPPORT = {
  headline: "Customer Support & Implementation",
  subheadline: "Long-term partnership designed to ensure your success.",
  items: [
    {
      title: "Dedicated Customer Support",
      description:
        "From requirement mapping to go-live and beyond, our team ensures your ERP implementation is smooth and structured. We guide you through setup, data migration, training, and continuous optimization so your team can operate confidently from day one.",
    },
    {
      title: "Implementation & Ongoing Assistance",
      description:
        "Every business is different—ZcaleUp adapts to your workflows. Our experts help configure, deploy, and scale the system according to your operational needs, ensuring faster adoption and measurable ROI.",
    },
  ],
};

export const PRICING = {
  headline: "Enterprise-Grade Scope, Tailored to You",
  description:
    "Enterprise-grade scope without noisy packaging—tell us users, complexity, compliance, and rollout goals.",
  plan: {
    title: "Talk to Sales",
    description:
      "Pricing is bespoke to deployment size, integrations, subsidiaries, statutory requirements, support tier, and go-live timelines.",
    features: [
      "Modular implementation—start with what you need",
      "Custom workflows and industry configurations",
      "Dedicated implementation and training support",
      "Ongoing optimization and customer support",
      "Statutory and compliance readiness for India",
    ],
  },
};

export const CONTACT = {
  headline: "Connect with Our Experts",
  description:
    "Book a discovery call or connect with our team for expert guidance and experience a new standard of ERP software from ZcaleUp.",
  guidance: [
    {
      title: "Product Demos",
      description:
        "Learn how ZcaleUp ERP is built to solve your specific challenges. We provide live sessions that showcase key modules and demonstrate how they optimize your day-to-day operations.",
    },
    {
      title: "Migration & Implementation",
      description:
        "Make ERP rollout simpler with support that customizes every phase of onboarding to meet your organization's unique needs.",
    },
    {
      title: "Continuous Support",
      description:
        "Get ongoing support from a team that understands your business. Master new features and ensure ZcaleUp ERP consistently delivers the results you expect.",
    },
  ],
  industries: [
    "Manufacturing",
    "Distribution / Wholesale",
    "Retail",
    "Trader",
    "Construction",
    "Other",
  ],
  companySizes: [
    "Less than 50 employees",
    "50-100 employees",
    "101-500 employees",
    "501-1,000 employees",
    "More than 1,000 employees",
  ],
};

export const RESOURCES = {
  headline: "Resources & Insights",
  description:
    "Explore guides, module overviews, and implementation resources to help you evaluate and adopt ZcaleUp ERP.",
  items: [
    {
      title: "ERP Modules Overview",
      description: "Understand how Finance, Inventory, Manufacturing, and more connect in one platform.",
      href: "/modules",
    },
    {
      title: "Industry Solutions Guide",
      description: "See how ZcaleUp ERP is tuned for Manufacturing, Retail, Travel, and Construction.",
      href: "/industries",
    },
    {
      title: "Implementation Playbook",
      description: "Learn about our consultation-to-go-live journey and ongoing support model.",
      href: "/about#journey",
    },
    {
      title: "Book a Demo",
      description: "A focused walkthrough of modules that match your industry and operating model.",
      href: "/demo",
    },
  ],
};

export const CONNECTED_MODULES = [
  "Finance",
  "Inventory",
  "Sales",
  "HR",
  "Manufacturing",
  "Procurement",
  "POS",
  "Reporting",
];

export const TRUSTED_BY = [
  "Manufacturing Leaders",
  "Retail Chains",
  "Construction Firms",
  "Trading Companies",
  "Distribution Networks",
  "Growing Enterprises",
];
