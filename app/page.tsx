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
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">
          {t('home.title')}
        </h1>
        <p className="hero-tagline">
          {t('home.tagline')}
        </p>
      </div>

      {/* Category Cards */}
      <div className="categories-grid">
        {categories.map((category) => (
          <Link key={category.key} href={category.href} className="category-card">
            <span className="category-emoji">
              {category.emoji}
            </span>
            <h3 className="category-title">
              {category.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}