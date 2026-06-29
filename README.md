# ZcaleUp ERP Website

Premium enterprise SaaS marketing website for **ZcaleUp ERP**, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Abhi4693/Zcaleup-Website-V2)

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, carousels, micro-interactions
- **Three.js** — subtle hero particle background
- **Lucide React** — icons

## Project Root (Important for Vercel)

All app files live at the **repository root**:

```
Zcaleup-Website-V2/
├── package.json          ← Vercel detects Next.js here
├── next.config.ts
├── vercel.json           ← Vercel deployment config
├── src/app/              ← Next.js App Router pages
├── src/components/
└── public/
```

> **Root Directory in Vercel must be `.` (empty)** — not `Desktop/Zcaleup-Website-V2`.

## Local Development

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

## Deploy on Vercel

### Option 1 — Git (recommended)

1. Push this repo to GitHub: `https://github.com/Abhi4693/Zcaleup-Website-V2`
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects **Next.js** from `package.json` and `vercel.json`
4. Settings to confirm:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (leave empty)
   - **Build Command:** `npm run build`
   - **Output Directory:** (leave default — Vercel handles `.next`)
   - **Install Command:** `npm install`
5. Click **Deploy**

Every `git push` to `main` triggers a new deployment automatically.

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel
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

## Content Source

All product names, features, industries, and company information are sourced from [zcaleup.com](https://www.zcaleup.com/) and professionally rewritten without changing core meaning.

## License

© ScaleUp Technologies Private Limited. All rights reserved.
