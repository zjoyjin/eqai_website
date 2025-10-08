'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations();

  const otherLocale = locale === 'en' ? 'zh' : 'en';

  return (
    <header className="border-b border-neutral-100">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4 md:px-8 md:py-6">
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
      </div>
    </header>
  );
}
