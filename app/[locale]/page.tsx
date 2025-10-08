import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { generateJsonLd } from '@/lib/utils';
import CategoryCard from '@/components/CategoryCard';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('title'),
    description: t('tagline'),
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
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
    {
      key: 'pets',
      href: `/${locale}/pets`,
      emoji: t('category.pets.emoji'),
      title: t('category.pets.title'),
      subtitle: t('category.pets.subtitle'),
    },
  ];

  // JSON-LD for breadcrumbs
  const breadcrumbJsonLd = generateJsonLd('BreadcrumbList', {
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('nav.home'),
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 max-w-2xl text-center">
          <h1 className="mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            {t('home.title')}
          </h1>
          <p className="text-xl text-neutral-700 sm:text-2xl">
            {t('home.tagline')}
          </p>
          <p className="mt-3 text-base text-neutral-600">
            {t('home.subtitle')}
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.key}
              href={category.href}
              emoji={category.emoji}
              title={category.title}
              subtitle={category.subtitle}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
