'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations();

  const links = [
    { href: `/${locale}/privacy`, label: t('nav.privacy') },
    { href: `/${locale}/terms`, label: t('nav.terms') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ];

  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-xl px-6 py-8 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <div className="text-sm text-gray-600">
            {t('footer.copyright')}
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring text-sm text-gray-600 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
