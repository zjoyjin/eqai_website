'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="layout">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <Link href="/" className="logo">
            {t('home.title')}
          </Link>

          {/* Navigation Right */}
          <div className="nav-right">
            {/* Navigation Links */}
            <nav className="nav-links">
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="language-toggle"
              aria-label="Toggle language"
            >
              <span>{t('nav.language')}</span>
              <span>{language === 'en' ? '🇨🇳' : '🇺🇸'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-copyright">
            {t('footer.copyright')}
          </div>
          <nav className="footer-links">
            <Link href="/privacy" className="footer-link">
              Privacy
            </Link>
            <Link href="/terms" className="footer-link">
              Terms
            </Link>
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}