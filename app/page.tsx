'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './HomePage.module.css';
import React from 'react';
import Header from './components/Header';

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
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.title}>
          {t('home.title')}
        </h1>
        <p className={styles.tagline}>
          {t('home.tagline')}
        </p>
      </div>

      {/* Category Cards */}
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <Link key={category.key} href={category.href} className={styles.categoryCard}>
            <span className={styles.categoryEmoji}>
              {category.emoji}
            </span>
            <h3 className={styles.categoryTitle}>
              {category.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}