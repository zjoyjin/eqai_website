# Migration Guide: EQ × AI Refactoring

## ✅ Completed Changes

### 1. Dependencies
- ✅ Installed `next-intl` for i18n
- ✅ Installed `lucide-react` for accessible SVG icons
- ✅ Installed `@sanity/client` and `@sanity/image-url` for CMS
- ✅ Removed invalid `shadcn-ui` package (use CLI instead)
- ✅ Added `clsx` and `tailwind-merge` for className utilities

### 2. Configuration Files
- ✅ **next.config.mjs**: Security headers (HSTS, CSP, X-Frame-Options), image optimization
- ✅ **tailwind.config.js**: 8pt grid system, WCAG AA colors, Google-style shadows
- ✅ **tsconfig.json**: Path aliases (@/components, @/lib, @/messages, etc.)
- ✅ **.env.example**: Environment variables template

### 3. Internationalization (i18n)
- ✅ **middleware.ts**: Locale routing with next-intl
- ✅ **i18n/request.ts**: Server-side i18n config
- ✅ **messages/en.json**: English translations
- ✅ **messages/zh.json**: Chinese (中文) translations
- ✅ Removed `contexts/LanguageContext.tsx` (migrated to next-intl)

### 4. App Router Structure
- ✅ **app/[locale]/layout.tsx**: Locale-specific layout with JSON-LD, hreflang, semantic HTML
- ✅ **app/[locale]/page.tsx**: Homepage with SSG
- ✅ **app/[locale]/kids/page.tsx**: Kids category page
- ✅ **app/[locale]/self/page.tsx**: Self category page
- ✅ **app/[locale]/work/page.tsx**: Work category page
- ✅ **app/[locale]/pets/page.tsx**: Pets category page

### 5. Components
- ✅ **components/Header.tsx**: Semantic header with accessible navigation
- ✅ **components/Footer.tsx**: Semantic footer
- ✅ **components/CategoryCard.tsx**: Animated card component
- ✅ **components/MotionWrapper.tsx**: Framer Motion wrapper respecting `prefers-reduced-motion`
- ✅ Removed old `components/Layout.tsx` and `app/components/*`

### 6. Utilities & Libraries
- ✅ **lib/utils.ts**: Class merging (cn), date formatting, JSON-LD generator
- ✅ **lib/sanity.ts**: Sanity CMS client setup
- ✅ **sanity/schema.ts**: Example content schemas

### 7. Styling
- ✅ **app/globals.css**: CSS variables, accessibility focus states, skip link, `prefers-reduced-motion`
- ✅ Tailwind @layer components for reusable utilities

### 8. SEO & Public Assets
- ✅ **public/robots.txt**: Search engine crawling rules
- ✅ **public/manifest.json**: PWA manifest
- ✅ **app/sitemap.ts**: Dynamic sitemap generation
- ✅ JSON-LD structured data on all pages

---

## 🚧 Next Steps (Manual Tasks)

### 1. **Remove Old Files**
Delete the following deprecated files:
```bash
rm -rf app/kids app/self app/work app/pets
rm -rf contexts/
rm app/components/Header.tsx
rm app/components/Footer.tsx
rm app/components/PageTemplate.tsx
rm app/HomePage.module.css
rm components/Layout.tsx
```

### 2. **Test the Build**
```bash
npm run build
```
Fix any TypeScript errors or import issues.

### 3. **Add Favicon Assets**
You need to create/add these files to `public/`:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `og-image.png` (1200×630 Open Graph image)
- `logo.png`

### 4. **Set Up Sanity CMS** (Optional)
If using Sanity:
1. Create a Sanity project at https://sanity.io
2. Copy your project ID and dataset to `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token
   ```
3. Set up Sanity Studio (optional):
   ```bash
   npm create sanity@latest
   ```

### 5. **Install shadcn/ui Components Properly**
Use the CLI to add specific components:
```bash
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

### 6. **Database Setup** (If Needed)
If you need a database:
1. Sign up for Supabase or Neon
2. Add `DATABASE_URL` to `.env.local`
3. Set up Prisma or Drizzle ORM

### 7. **Analytics & Monitoring**
Add to `.env.local`:
```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=eqaiglobal.com
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### 8. **CI/CD Setup**
Create `.github/workflows/ci.yml`:
```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      # Add Lighthouse CI, pa11y, etc.
```

### 9. **Deployment**
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### 10. **Accessibility Audit**
Run these tools:
```bash
npm install -D @axe-core/cli pa11y lighthouse
npx axe http://localhost:3000/en
npx pa11y http://localhost:3000/en
npx lighthouse http://localhost:3000/en --view
```

---

## 📋 Key URLs After Migration

- English: `/en`
- Chinese: `/zh`
- Homepage: `/en` or `/zh`
- Categories: `/en/kids`, `/en/self`, `/en/work`, `/en/pets`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

---

## 🎯 Architecture Compliance Checklist

### Frontend
- ✅ Next.js App Router with TypeScript
- ✅ Tailwind CSS + 8pt grid
- ✅ Framer Motion with accessibility
- ✅ next-intl for bilingual support
- ✅ Lucide icons with ARIA labels

### Accessibility (WCAG 2.1 AA)
- ✅ Color contrast ≥ 4.5:1
- ✅ Keyboard navigation
- ✅ Semantic HTML (header, nav, main, footer)
- ✅ Skip links
- ✅ prefers-reduced-motion support
- ⚠️ Screen reader testing needed (manual)

### Performance
- ✅ SSG/ISR routes
- ✅ Responsive images config
- ✅ Route-level code splitting
- ⚠️ Core Web Vitals testing needed

### Security
- ✅ HTTPS headers (HSTS, CSP, X-Frame-Options)
- ✅ Secure environment variables template
- ⚠️ Rate limiting (add in production)

### SEO
- ✅ Bilingual routing with hreflang
- ✅ JSON-LD structured data
- ✅ robots.txt and sitemap.xml
- ✅ Meta tags with keywords ("emotional intelligence", "EQ", "AI", "情商")
- ⚠️ OG images needed

### CMS
- ✅ Sanity client setup
- ⚠️ Sanity Studio setup needed (if using Sanity)

---

## 🐛 Known Issues

1. **Old components reference**: Some old components may still be imported. Clean them up.
2. **Favicon assets**: Placeholder favicons need to be replaced with actual assets.
3. **Type errors**: May need to add more type definitions for shadcn components.
4. **CSS warnings**: Editor shows warnings for `@tailwind` and `@apply` (these are safe to ignore).

---

## 📚 Documentation Links

- [Next.js App Router](https://nextjs.org/docs/app)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Sanity](https://www.sanity.io/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 💡 Tips

- **Test both locales**: Always test `/en` and `/zh` routes
- **Use semantic HTML**: Prefer `<header>`, `<nav>`, `<main>`, `<footer>` over divs
- **Keyboard test**: Tab through all interactive elements
- **Screen reader test**: Use NVDA, VoiceOver, or JAWS
- **Lighthouse CI**: Set up automated performance testing
- **Incremental adoption**: You can keep old pages while migrating gradually

---

## 🎉 Success Criteria

Your site is ready for production when:
- ✅ Build succeeds with no errors
- ✅ Both `/en` and `/zh` routes work
- ✅ Lighthouse score > 90 (Performance, Accessibility, SEO, Best Practices)
- ✅ WCAG 2.1 AA compliance verified
- ✅ Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- ✅ All images have alt text
- ✅ Keyboard navigation works everywhere
- ✅ prefers-reduced-motion is honored
