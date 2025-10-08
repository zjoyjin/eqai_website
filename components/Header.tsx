'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations();

  const otherLocale = locale === 'en' ? 'zh' : 'en';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-300 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label={t('accessibility.menu')}>
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700">
              <span className="text-sm font-bold text-white">EQ</span>
            </div>
            <span className="text-xl font-semibold text-neutral-900">
              {t('home.title')}
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href={`/${locale}`}
            className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:underline"
          >
            {t('nav.home')}
          </Link>

          {/* Language Switcher */}
          <Link
            href={`/${otherLocale}`}
            className="flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-primary-500 hover:bg-primary-50 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
            aria-label={t('accessibility.toggle_language')}
            lang={otherLocale}
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            <span>{t('nav.language')}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
