'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations();

  const otherLocale = locale === 'en' ? 'zh' : 'en';

  return (
    <header className="flex items-center justify-between py-4 md:py-6">
      <Link
        href={`/${locale}`}
        className="text-xl font-semibold tracking-tight hover:underline"
      >
        {t('home.title')}
      </Link>

      <Link
        href={`/${otherLocale}`}
        className="flex items-center gap-2 text-sm font-medium hover:underline"
        aria-label={t('accessibility.toggle_language')}
        lang={otherLocale}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span>{t('nav.language')}</span>
      </Link>
    </header>
  );
}
