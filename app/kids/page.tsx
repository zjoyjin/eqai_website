'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import React from 'react';
import Link from 'next/link';

export default function KidsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-spacing bg-light-gray">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 mb-8">
              <span className="text-4xl">{t('category.kids.emoji')}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('page.kids.title')}
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-google-gray max-w-3xl mx-auto font-light">
              {t('page.kids.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg mx-auto">
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('page.kids.content1')}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('page.kids.content2')}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('page.kids.content3')}
              </p>
            </div>
          </div>
          
          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link href="/" className="btn-secondary">
              {t('button.back_home')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-light-gray section-spacing">
        <div className="max-w-4xl mx-auto text-center container-padding">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover more resources and tools designed specifically for children's education and safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Explore Resources
            </button>
            <button className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}