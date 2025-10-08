# EQAIGlobal Website

> **Emotional Intelligence × Artificial Intelligence**
> Connecting Life with Simplicity

## 🌐 Overview

A bilingual (English/中文) Next.js website focused on emotional intelligence and AI, featuring content for kids, personal development, work productivity, and pet care.

## 🏗️ Architecture

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS (8pt grid, WCAG AA compliant)
- **Internationalization**: next-intl (EN/中文)
- **CMS**: Sanity (headless CMS)
- **Icons**: Lucide React (accessible SVG)
- **Animation**: Framer Motion (respects prefers-reduced-motion)
- **Deployment**: Vercel

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit:
- English: http://localhost:3000/en
- Chinese: http://localhost:3000/zh

## 📁 Project Structure

```
eqai_website/
├── app/
│   ├── [locale]/           # Locale-specific routes
│   │   ├── layout.tsx      # Locale layout with i18n, SEO, JSON-LD
│   │   ├── page.tsx        # Homepage
│   │   ├── kids/           # Kids category
│   │   ├── self/           # Self-development category
│   │   ├── work/           # Work productivity category
│   │   └── pets/           # Pet care category
│   ├── sitemap.ts          # Dynamic sitemap generation
│   └── globals.css         # Global styles with CSS variables
├── components/
│   ├── Header.tsx          # Site header
│   ├── Footer.tsx          # Site footer
│   ├── CategoryCard.tsx    # Animated category cards
│   └── MotionWrapper.tsx   # Accessible animation wrapper
├── lib/
│   ├── utils.ts            # Utility functions (cn, formatDate, JSON-LD)
│   └── sanity.ts           # Sanity CMS client
├── messages/
│   ├── en.json             # English translations
│   └── zh.json             # Chinese translations
├── i18n/
│   └── request.ts          # Server-side i18n config
├── sanity/
│   └── schema.ts           # CMS content schemas
├── public/
│   ├── robots.txt          # SEO crawling rules
│   └── manifest.json       # PWA manifest
├── middleware.ts           # Locale routing
├── next.config.mjs         # Next.js config (security, i18n, images)
├── tailwind.config.js      # Tailwind config (8pt grid, WCAG colors)
└── tsconfig.json           # TypeScript config with path aliases
```

## 🎨 Design System

### Colors (WCAG AA Compliant)
- **Primary**: Blue (#4285f4, #1a73e8) – 4.5:1 contrast
- **Neutral**: Grays (#202124 → #f8f9fa)
- **Semantic**: Success, Warning, Error

### Spacing (8pt Grid)
- Base unit: 0.5rem (8px)
- Scale: 8px, 16px, 24px, 32px, 40px, 48px...

### Typography
- Font: Inter (with fallbacks)
- Scale: 12px, 14px, 16px, 18px, 20px, 24px...

### Shadows
- Google-style elevations
- Subtle, layered shadows

## ♿ Accessibility (WCAG 2.1 AA)

- ✅ Color contrast ≥ 4.5:1
- ✅ Keyboard navigation with visible focus indicators
- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ✅ Skip links for screen readers
- ✅ ARIA labels on all interactive elements
- ✅ `prefers-reduced-motion` support
- ✅ Alt text on all images
- ✅ Proper heading hierarchy

## 🌍 Internationalization

### Locales
- English (`/en`)
- Chinese (`/zh`)

### Features
- Auto-detection via middleware
- `hreflang` meta tags
- Bilingual sitemap
- Locale-specific metadata

## 🔒 Security

- HTTPS with HSTS headers
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy

## 📈 SEO

### Features
- JSON-LD structured data (Organization, WebSite, Article, BreadcrumbList)
- Dynamic sitemap generation
- robots.txt
- Open Graph meta tags
- Twitter Card meta tags
- Keywords: "emotional intelligence", "EQ", "AI", "情商", "人工智能"

### Core Web Vitals Targets
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms

## 🛠️ Development

### Scripts
```bash
npm run dev          # Development server
npm run build        # Production build
npm start            # Production server
npm run lint         # ESLint
```

### Path Aliases
```typescript
@/components/*  // components/
@/lib/*         // lib/
@/app/*         // app/
@/messages/*    // messages/
@/sanity/*      // sanity/
```

## 📦 Environment Variables

Create `.env.local`:

```env
# Site
NEXT_PUBLIC_SITE_URL=https://eqaiglobal.com

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=eqaiglobal.com

# Error Tracking (optional)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy!

### Manual
```bash
npm run build
npm start
```

## 📚 Documentation

- [Migration Guide](./MIGRATION.md) – Detailed refactoring steps
- [Next.js Docs](https://nextjs.org/docs)
- [next-intl Docs](https://next-intl-docs.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

1. Follow the existing code style
2. Use semantic HTML
3. Ensure WCAG AA compliance
4. Test both locales (EN/中文)
5. Run `npm run lint` before committing
6. Test keyboard navigation

## 📄 License

© 2024 EQAIGlobal. All rights reserved.

---

**Built with ❤️ using Next.js, Tailwind CSS, and next-intl**
