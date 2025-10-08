import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });

  return {
    title: `${t('category.work.title')} ${locale === 'zh' ? '评估' : 'Assessment'}`,
    description: locale === 'zh' ? '即将推出' : 'Coming soon',
  };
}

export default function WorkAssessmentPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href={`/${locale}/work`}
        className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        {locale === 'zh' ? '返回工作' : 'Back to Work'}
      </Link>

      <div className="text-center">
        <span className="mb-6 inline-block text-7xl" role="img" aria-label="Work Assessment">
          {t('category.work.emoji')}
        </span>
        <h1 className="mb-4 text-4xl font-normal text-neutral-900">
          {t('category.work.title')} {locale === 'zh' ? '评估' : 'Assessment'}
        </h1>
        <p className="mb-12 text-xl text-neutral-600">
          {locale === 'zh' ? '即将推出' : 'Coming Soon'}
        </p>

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-12">
          <p className="text-lg text-neutral-700">
            {locale === 'zh'
              ? '我们正在开发一个全面的情商评估工具。敬请期待！'
              : 'We are developing a comprehensive emotional intelligence assessment tool. Stay tuned!'}
          </p>
        </div>
      </div>
    </div>
  );
}
