'use client';


import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import React from 'react';

export default function HomePage() {
  const { t } = useLanguage();

  const categories = [
    {
      key: 'kids',
      href: '/kids',
      emoji: t('category.kids.emoji'),
      title: t('category.kids.title'),
      subtitle: t('category.kids.subtitle'),
    },
    {
      key: 'self',
      href: '/self',
      emoji: t('category.self.emoji'),
      title: t('category.self.title'),
      subtitle: t('category.self.subtitle'),
    },
    {
      key: 'work',
      href: '/work',
      emoji: t('category.work.emoji'),  
      title: t('category.work.title'),
      subtitle: t('category.work.subtitle'),
    },
    {
      key: 'pets',
      href: '/pets',
      emoji: t('category.pets.emoji'),
      title: t('category.pets.title'),
      subtitle: t('category.pets.subtitle'),
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-light text-gray-900 mb-6">
          {t('home.title')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t('home.tagline')}
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        {categories.map((category) => (
          <Link key={category.key} href={category.href}>
            <div className="bg-white border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200 hover:border-gray-400">
              <div className="text-4xl mb-4">{category.emoji}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600">
                {category.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}