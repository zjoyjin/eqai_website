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
    <footer className="border-t border-neutral-100 mt-auto">
      <div className="mx-auto max-w-screen-xl px-6 py-10 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-neutral-500">
          <div>{t('footer.copyright')}</div>
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline"
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
