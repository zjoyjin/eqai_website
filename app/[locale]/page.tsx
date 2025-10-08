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
      title: t('category.kids.title'),
      subtitle: t('category.kids.subtitle'),
    },
    {
      key: 'pets',
      href: `/${locale}/pets`,
      title: t('category.pets.title'),
      subtitle: t('category.pets.subtitle'),
    },
    {
      key: 'self',
      href: `/${locale}/self`,
      title: t('category.self.title'),
      subtitle: t('category.self.subtitle'),
    },
    {
      key: 'work',
      href: `/${locale}/work`,
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

      <div className="mx-auto max-w-screen-xl px-6 py-16 md:px-8 md:py-24">
        {/* Hero Section */}
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500">
            {locale === 'zh' ? '情商 × 人工智能' : 'Emotional Intelligence × AI'}
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {t('home.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            {t('home.tagline')}
          </p>
        </div>

        {/* Category Grid */}
        <CategoryGrid categories={categories} locale={locale} />
      </div>
    </>
  );
}
