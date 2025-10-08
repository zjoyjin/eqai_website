import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eqaiglobal.com';

  const locales = ['en', 'zh'];
  const routes = [
    '',
    '/kids',
    '/kids/assessment',
    '/self',
    '/self/assessment',
    '/work',
    '/work/assessment',
    '/pets',
    '/pets/assessment',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add all routes for each locale
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.includes('/assessment') ? 0.6 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            zh: `${baseUrl}/zh${route}`,
          },
        },
      });
    });
  });

  return sitemap;
}
