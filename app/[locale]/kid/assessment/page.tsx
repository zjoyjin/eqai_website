import { getTranslations, setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });

  return {
    title: `${t('category.kid.title')} - ${t('assessment.title')}`,
    description: t('assessment.description'),
  };
}

export default function KidAssessmentPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations();

  return (
    <main id="main-content" className="flex-1">
      <div className="mx-auto max-w-screen-xl px-6 py-16 md:px-8 md:py-24">
        <Link
          href={`/${locale}/kid`}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t('button.back_home')}
        </Link>

        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {t('category.kid.title')} - {t('assessment.title')}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            {t('assessment.coming_soon')}
          </p>

          <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-12 text-center">
            <p className="text-base text-neutral-700">
              {t('assessment.description')}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
