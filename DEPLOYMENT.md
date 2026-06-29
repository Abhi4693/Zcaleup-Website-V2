# Vercel Deployment Guide — ZcaleUp Website V2

## Why Vercel shows 404

Vercel returns **404** when it cannot find a Next.js app at the configured **Root Directory**.

| Problem | Fix |
|---------|-----|
| App nested in `Desktop/Zcaleup-Website-V2/` | App must be at **repo root** (`package.json` at top level) |
| Wrong Root Directory in Vercel settings | Set Root Directory to **empty** (`.`) |
| Framework not detected | Ensure `next` is in `package.json` dependencies |
| Build failed | Check **Deployments → Build Logs** in Vercel dashboard |

## Correct repository layout

```
Zcaleup-Website-V2/          ← Git repo root = Vercel root
├── package.json
├── package-lock.json
├── next.config.ts
├── vercel.json
├── tsconfig.json
├── src/
│   └── app/
│       ├── page.tsx         ← Homepage
│       └── layout.tsx
└── public/
```

## Vercel project settings

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Root Directory** | `.` (empty / not set) |
| **Build Command** | `npm run build` |
| **Install Command** | `npm install` |
| **Node.js Version** | 20.x (default) |

## Files that help Vercel detect the project

| File | Purpose |
|------|---------|
| `package.json` | Declares `next`, `react`, build scripts |
| `vercel.json` | Explicit framework and build commands |
| `next.config.ts` | Next.js configuration |
| `src/app/` | App Router entry (required for Next.js 13+) |

## Deploy workflow

```bash
# 1. Make changes locally
cd ~/Desktop/Zcaleup-Website-V2

# 2. Commit and push
git add .
git commit -m "Describe your change"
git push origin main

# 3. Vercel auto-deploys from GitHub (no manual step needed)
```

## Verify deployment

1. Open [Vercel Dashboard](https://vercel.com/dashboard)
2. Select project **Zcaleup-Website-V2**
3. Latest deployment should show status **Ready**
4. Open the production URL

## Custom domain

1. Vercel → Project → **Settings** → **Domains**
2. Add `www.zcaleup.com` or your domain
3. Update DNS records as shown by Vercel

## Troubleshooting

**Build succeeds but site is 404**
→ Root Directory is wrong. Clear it and redeploy.

**Build fails on `npm install`**
→ Ensure `package-lock.json` is committed to Git.

**Old nested path still deployed**
→ Redeploy after pushing the fixed repo structure to `main`.

## Links

- GitHub: https://github.com/Abhi4693/Zcaleup-Website-V2
- Vercel Docs: https://vercel.com/docs/frameworks/nextjs
