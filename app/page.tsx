'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

// the following are the new demo rain drop that hopefully to work out 

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

  // Animation variants
  const heroVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.3 + i * 0.15, duration: 0.5, type: 'spring' },
    }),
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="homepage">
        {/* Hero Section */}
        <motion.div
          className="hero"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="hero-title">
            {t('home.title')}
          </h1>
          <p className="hero-tagline">
            {t('home.tagline')}
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="categories-grid">
          {categories.map((category, i) => (
            <motion.div
              key={category.key}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
              style={{ display: 'inline-block', width: '100%' }}
            >
              <Link href={category.href} className="category-card">
                <span className="category-emoji">
                  {category.emoji}
                </span>
                <h3 className="category-title">
                  {category.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}