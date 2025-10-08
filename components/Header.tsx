'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Globe } from 'lucide-react';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations();

  const otherLocale = locale === 'en' ? 'zh' : 'en';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6 md:px-8" aria-label={t('accessibility.menu')}>
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="focus-ring flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-50"
          >
            <span className="text-xl font-semibold tracking-tight text-gray-900">
              {t('home.title')}
            </span>
          </Link>
        </div>

        {/* Language Switcher */}
        <Link
          href={`/${otherLocale}`}
          className="focus-ring flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
          aria-label={t('accessibility.toggle_language')}
          lang={otherLocale}
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          <span>{t('nav.language')}</span>
        </Link>
      </nav>
    </header>
  );
}
