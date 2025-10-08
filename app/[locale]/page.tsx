import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateJsonLd } from '@/lib/utils';
import CategoryGrid from '@/components/CategoryGrid';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('title'),
    description: t('tagline'),
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const categories = [
    {
      key: 'kids',
      href: `/${locale}/kids`,
      emoji: t('category.kids.emoji'),
      title: t('category.kids.title'),
      subtitle: t('category.kids.subtitle'),
    },
    {
      key: 'pets',
      href: `/${locale}/pets`,
      emoji: t('category.pets.emoji'),
      title: t('category.pets.title'),
      subtitle: t('category.pets.subtitle'),
    },
    {
      key: 'self',
      href: `/${locale}/self`,
      emoji: t('category.self.emoji'),
      title: t('category.self.title'),
      subtitle: t('category.self.subtitle'),
    },
    {
      key: 'work',
      href: `/${locale}/work`,
      emoji: t('category.work.emoji'),
      title: t('category.work.title'),
      subtitle: t('category.work.subtitle'),
    },
  ];

  // JSON-LD ItemList for categories
  const itemListJsonLd = generateJsonLd('ItemList', {
    itemListElement: categories.map((cat, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: cat.title,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}${cat.href}`,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Temporary SSR Probe - REMOVE AFTER VERCEL VALIDATION */}
        <div style={{
          padding: '20px',
          margin: '20px',
          border: '3px solid green',
          backgroundColor: '#e8f5e9',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
          ✅ SSR WORKING - Locale: {locale}
        </div>

        {/* Hero Section */}
        <div className="mb-16 max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl">
            {t('home.title')}
          </h1>
          <p className="text-lg text-neutral-600">
            {t('home.tagline')}
          </p>
        </div>

        {/* Category Grid */}
        <CategoryGrid categories={categories} locale={locale} />
      </div>
    </>
  );
}
