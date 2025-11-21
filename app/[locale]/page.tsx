import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generateJsonLd } from '@/lib/utils';
import CategoryGrid from '@/components/CategoryGrid';
import CategoryCard from '@/components/CategoryCard';
import { Baby, PawPrint, UserRound, BriefcaseBusiness } from 'lucide-react';

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
      key: 'work',
      href: `/${locale}/work`,
      title: t('category.work.title'),
      subtitle: t('category.work.subtitle'),
    },
    {
      key: 'personal',
      href: `/${locale}/personal`,
      title: t('category.personal.title'),
      subtitle: t('category.personal.subtitle'),
    },
    {
      key: 'kid',
      href: `/${locale}/kid`,
      title: t('category.kid.title'),
      subtitle: t('category.kid.subtitle'),
    },
    {
      key: 'pet',
      href: `/${locale}/pet`,
      title: t('category.pet.title'),
      subtitle: t('category.pet.subtitle'),
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

      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-screen-xl px-6 py-16 md:px-8 md:py-24">
          <div className="mb-16 text-center">
            <p className="text-sm font-medium text-blue-700">
              {locale === 'zh' ? '情商 × 人工智能' : 'Emotional Intelligence × AI'}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              {t('home.title')}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600 md:text-lg">
              {t('home.tagline')}
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <CategoryGrid>
              <CategoryCard
                href={`/${locale}/work`}
                title={t('category.work.title')}
                description={t('category.work.subtitle')}
                icon={<BriefcaseBusiness aria-hidden="true" className="h-5 w-5" />}
              />
              <CategoryCard
                href={`/${locale}/personal`}
                title={t('category.personal.title')}
                description={t('category.personal.subtitle')}
                icon={<UserRound aria-hidden="true" className="h-5 w-5" />}
              />
              <CategoryCard
                href={`/${locale}/kid`}
                title={t('category.kid.title')}
                description={t('category.kid.subtitle')}
                icon={<Baby aria-hidden="true" className="h-5 w-5" />}
              />
              <CategoryCard
                href={`/${locale}/pet`}
                title={t('category.pet.title')}
                description={t('category.pet.subtitle')}
                icon={<PawPrint aria-hidden="true" className="h-5 w-5" />}
              />
            </CategoryGrid>
          </div>
        </div>
      </main>
    </>
  );
}
