'use client';

import React from 'react'
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-google-blue to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EQ</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              {t('home.title')}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-google-gray hover:text-gray-900 transition-colors duration-200"
            >
              {t('nav.home')}
            </Link>
          </nav>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-light-gray hover:bg-gray-200 transition-colors duration-200"
            aria-label="Toggle language"
          >
            <span className="text-sm font-medium text-google-gray">
              {t('nav.language')}
            </span>
            <div className="w-5 h-5 flex items-center justify-center">
              {language === 'en' ? '🇨🇳' : '🇺🇸'}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}