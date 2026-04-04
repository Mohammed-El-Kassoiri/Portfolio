# Mohammed El Kassoiri — AI Engineer & Data Scientist

> **Personal portfolio** built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.  
> Live at **[mohammedelkassoiri.app](https://www.mohammedelkassoiri.app)**

---

## About

I'm an AI Engineer and Data Scientist from Morocco specialising in Machine Learning, Deep Learning, Computer Vision, and NLP. I'm currently completing my engineering degree at **ENSIASD** (Data Science, Big Data & AI) and open to full-time roles where cutting-edge AI meets real-world impact.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 15 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS v4, Framer Motion, tw-animate-css |
| **UI Components** | Radix UI, shadcn/ui |
| **Theme** | next-themes (light / dark / cyber hacker) |
| **Analytics** | Vercel Analytics, Vercel Speed Insights |

---

## Features

- **Dual-theme toggle** — switch between the default dark theme and a **Cyber Hacker** theme (red/black palette) with a single click; choice is persisted via `localStorage`.
- **Smooth scroll-reveal** — sections animate in as you scroll using `react-intersection-observer` + Framer Motion.
- **Interactive micro-animations** — hover effects on cards, buttons, and links; parallax orb in the hero section.
- **Typed hero** — role titles cycle with `react-type-animation`.
- **Research detail pages** — dynamic routes under `/research/[id]` for academic publications.
- **SEO-ready** — full Open Graph, Twitter card, JSON-LD structured data, and sitemap.

---

## Project Structure

```
Portfolio/
├── app/
│   ├── globals.css          # CSS variables + cyber theme tokens
│   ├── layout.tsx           # Root layout, metadata, ThemeProvider
│   ├── page.tsx             # Main portfolio page (all sections)
│   └── research/[id]/       # Dynamic research detail route
├── components/
│   ├── navigation.tsx       # Sticky nav + theme toggle (dark/cyber/light)
│   ├── hero.tsx             # Hero section with typed animation
│   ├── about.tsx            # Bento-grid about cards
│   ├── experience.tsx       # Work experience timeline
│   ├── featured-project-pfe.tsx  # PFE deep-dive section
│   ├── projects.tsx         # Project cards grid
│   ├── research.tsx         # Research publications
│   ├── skills.tsx           # Skill category grid
│   ├── contact.tsx          # Contact form & links
│   ├── theme-provider.tsx   # next-themes wrapper
│   └── ui/                  # shadcn/ui primitives
├── hooks/                   # Custom React hooks
├── lib/                     # Utilities & data (research-data.ts)
└── public/                  # Static assets (CV PDF, icons, figures)
│       ├── logo.png             # Primary logo (source for favicon)
```

---

## Setup & Run

### Prerequisites

- Node.js ≥ 18
- `pnpm` (recommended) or `npm`

### Install

```bash
pnpm install
# or
npm install
```

### Development

```bash
pnpm dev
# open http://localhost:3000
```

### Build

```bash
pnpm build
pnpm start
```

### Environment Variables

Copy `.env.example` to `.env.local` and set your site URL:

```env
NEXT_PUBLIC_SITE_URL=https://www.mohammedelkassoiri.app
```

---

## Favicon

The site uses `public/logo.png` as the primary icon (served via Next.js App Router's `app/icon.png`).  
To also serve a traditional `favicon.ico` (recommended for Google Search favicon indexing):

1. Convert `public/logo.png` to a `.ico` file using an online tool such as [favicon.io](https://favicon.io/favicon-converter/) or [realfavicongenerator.net](https://realfavicongenerator.net/).
2. Place the generated file at **`public/favicon.ico`** (or `app/favicon.ico`).
3. Redeploy the site.
4. Request re-indexing in **Google Search Console → URL Inspection** to refresh the cached favicon.

---



| | |
|---|---|
| **Email** | [mohammed.kassoiri@gmail.com](mailto:mohammed.kassoiri@gmail.com) |
| **LinkedIn** | [linkedin.com/in/Mohammed-El-Kassoiri](https://linkedin.com/in/Mohammed-El-Kassoiri) |
| **GitHub** | [github.com/Mohammed-El-Kassoiri](https://github.com/Mohammed-El-Kassoiri) |
| **Portfolio** | [mohammedelkassoiri.app](https://www.mohammedelkassoiri.app) |

---

*Built with ❤️ and lots of ☕ by Mohammed El Kassoiri.*
