'use client';

import { useLanguage } from '../contexts/LanguageContext';


import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const { t } = useLanguage();

  const categories = [
    {
      key: 'kids',
      href: '/kids',
      emoji: t('category.kids.emoji'),
      title: t('category.kids.title'),
      subtitle: t('category.kids.subtitle'),
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      key: 'self',
      href: '/self',
      emoji: t('category.self.emoji'),
      title: t('category.self.title'),
      subtitle: t('category.self.subtitle'),
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      key: 'work',
      href: '/work',
      emoji: t('category.work.emoji'),
      title: t('category.work.title'),
      subtitle: t('category.work.subtitle'),
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      key: 'pets',
      href: '/pets',
      emoji: t('category.pets.emoji'),
      title: t('category.pets.title'),
      subtitle: t('category.pets.subtitle'),
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            {t('home.tagline')}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {categories.map((category) => (
              <Link key={category.key} href={category.href}>
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 md:p-10 border border-gray-100 cursor-pointer">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} mb-6`}>
                    <span className="text-3xl">{category.emoji}</span>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {category.subtitle}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform duration-200">
                    <span className="mr-2">{t('button.learn_more')}</span>
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Simplify Your Life?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our categories and discover how we can help make every aspect of your life more manageable and enjoyable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
