# Personal Portfolio — Fathul Radhiansyah

Anti-template personal site for a Data & AI Engineer. Built for:
- Freelance (AI agents, brand sprints, consulting)
- Mentorship seats
- Select full-time roles

## Stack
- **Next.js 16** (App Router)
- **Tailwind CSS** with custom design tokens
- **TypeScript**
- **Motion** for scroll-driven animations
- **No external services** — fully self-contained

## Run locally

```bash
# Navigate to project
cd apps/codefolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
# Push to GitHub, then:
npx vercel --prod
```

Or connect the repo directly at [vercel.com](https://vercel.com) — zero config needed.

## Edit content

| What | Where |
|------|-------|
| Site info (name, email, socials) | `lib/site.ts` |
| Hero, About, Work, Services, Contact | `components/*.tsx` |
| Global styles & tokens | `app/globals.css` |
| Font & theme config | `tailwind.config.ts` |

## Profile photo

Replace `public/me.png` with your own photo. It appears in:
- Hero section (right column, grayscale-to-color on hover)
- About section (bio area)

Recommended size: at least 800px wide, high resolution.
