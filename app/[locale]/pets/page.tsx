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

      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-screen-xl px-6 py-16 md:px-8 md:py-24">
          <nav className="mb-6 text-sm text-neutral-500">
            <Link href={`/${locale}`} className="hover:underline">
              {t('nav.home')}
            </Link>
            {' / '}
            {t('category.pets.title')}
          </nav>

          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('category.pets.title')}
          </h1>
          <p className="mt-2 max-w-2xl text-neutral-600">
            {t('category.pets.description')}
          </p>

          <div className="mt-8 rounded-xl border border-neutral-200 p-6">
            <button
              className="rounded-lg bg-neutral-900 px-4 py-2 text-white disabled:opacity-60"
              disabled
            >
              {locale === 'zh' ? '评估（即将推出）' : 'Assessment (coming soon)'}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
