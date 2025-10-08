import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { generateJsonLd } from '@/lib/utils';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'page.pets' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function PetsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  const breadcrumbJsonLd = generateJsonLd('BreadcrumbList', {
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('nav.home'),
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('category.pets.title'),
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/pets`,
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t('button.back_home')}
        </Link>

        <div className="mb-16 text-center">
          <span className="mb-6 inline-block text-7xl" role="img" aria-label={t('category.pets.title')}>
            {t('category.pets.emoji')}
          </span>
          <h1 className="mb-4 text-5xl font-normal text-neutral-900">
            {t('category.pets.title')}
          </h1>
          <p className="text-xl text-neutral-600">
            {t('category.pets.description')}
          </p>
        </div>

        <div className="mb-12 space-y-6 text-center text-lg leading-relaxed text-neutral-700">
          <p>{t('page.pets.content1')}</p>
          <p>{t('page.pets.content2')}</p>
          <p>{t('page.pets.content3')}</p>
        </div>

        <div className="flex justify-center">
          <Link
            href={`/${locale}/pets/assessment`}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-8 py-3 text-base font-medium text-neutral-700 shadow-sm transition-all hover:border-neutral-400 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            {locale === 'zh' ? '评估（即将推出）' : 'Assessment (Coming Soon)'}
          </Link>
        </div>
      </div>
    </>
  );
}
