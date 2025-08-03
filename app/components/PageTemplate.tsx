'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import React from 'react';
import Link from 'next/link';

interface PageTemplateProps {
  pageKey: string;
  gradient: string;
  emoji: string;
}

export default function PageTemplate({ pageKey, gradient, emoji }: PageTemplateProps) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            {/* Icon */}
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${gradient} mb-8`}
            >
              <span className="text-4xl">{emoji}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t(`page.${pageKey}.title`)}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              {t(`page.${pageKey}.description`)}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t(`page.${pageKey}.content1`)}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t(`page.${pageKey}.content2`)}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t(`page.${pageKey}.content3`)}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover more resources and tools designed specifically for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              {t('button.back_home')}
            </Link>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
              {t('button.learn_more')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
