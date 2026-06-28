# ZcaleUp ERP Website

Premium enterprise SaaS marketing website for **ZcaleUp ERP**, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP-ready architecture, and subtle Three.js particle effects.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, carousels, micro-interactions
- **Three.js** — subtle hero particle background
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Premium homepage with all sections |
| `/products` | Product modules overview |
| `/modules` | ERP modules grid |
| `/industries` | Industry solutions |
| `/about` | Company story & journey |
| `/contact` | Contact form & guidance |
| `/pricing` | Enterprise pricing (request quote) |
| `/resources` | Resources hub |
| `/demo` | Demo booking form |
| `/privacy` | Privacy policy |
| `/terms` | Terms & conditions |
| `/cookies` | Cookie policy |

## Content Source

All product names, features, industries, and company information are sourced from [zcaleup.com](https://www.zcaleup.com/) and professionally rewritten without changing core meaning.

## Project Structure

```
src/
├── app/              # Next.js pages & SEO (sitemap, robots)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Homepage sections
│   ├── ui/           # Reusable UI components
│   ├── forms/        # Contact & demo forms
│   ├── dashboard/    # ERP dashboard mockups
│   └── animations/   # Three.js & motion utilities
├── constants/        # Content & navigation data
├── animations/       # Framer Motion variants
└── lib/              # Utilities
```

## License

© ZcaleUp Technologies. All rights reserved.
