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
    },
    {
      key: 'self',
      href: '/self',
      emoji: t('category.self.emoji'),
      title: t('category.self.title'),
    },
    {
      key: 'work',
      href: '/work',
      emoji: t('category.work.emoji'),
      title: t('category.work.title'),
    },
    {
      key: 'pets',
      href: '/pets',
      emoji: t('category.pets.emoji'),
      title: t('category.pets.title'),
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-7xl font-light text-gray-900 mb-4 tracking-tight">
          {t('home.title')}
        </h1>
        <p className="text-xl text-gray-600 font-light">
          {t('home.tagline')}
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 gap-8 max-w-md">
        {categories.map((category) => (
          <Link key={category.key} href={category.href}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              <div className="text-5xl mb-4">
                {category.emoji}
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}