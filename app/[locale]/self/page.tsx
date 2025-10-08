import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { generateJsonLd } from '@/lib/utils';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'page.self' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function SelfPage({ params: { locale } }: { params: { locale: string } }) {
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
        name: t('page.self.title'),
        item: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/self`,
      },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:underline"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t('button.back_home')}
        </Link>

        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-6xl" role="img" aria-label={t('page.self.title')}>
            {t('category.self.emoji')}
          </span>
          <h1 className="mb-4 text-4xl font-bold text-neutral-900 sm:text-5xl">
            {t('page.self.title')}
          </h1>
          <p className="text-xl text-neutral-600">
            {t('page.self.description')}
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p>{t('page.self.content1')}</p>
          <p>{t('page.self.content2')}</p>
          <p>{t('page.self.content3')}</p>
        </div>
      </div>
    </>
  );
}
