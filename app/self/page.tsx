'use client';

import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

export default function SelfPage() {
  const { t } = useLanguage();

  const features = [
    { icon: '🧘', title: 'Mindfulness', description: 'Daily meditation and mindfulness practices' },
    { icon: '💪', title: 'Fitness', description: 'Personalized workout routines and tracking' },
    { icon: '📚', title: 'Learning', description: 'Skill development and educational resources' },
    { icon: '🎯', title: 'Goals', description: 'Set and achieve your personal objectives' },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section self-hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-icon self-icon">
            {t('category.self.emoji')}
          </div>
          <h1 className="hero-title">{t('page.self.title')}</h1>
          <p className="hero-description">{t('page.self.description')}</p>
          <button className="cta-button self-button">Start Your Journey</button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Transform Your Life</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon self-feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="content-title">Your Personal Development Journey</h2>
              <div className="content-paragraphs">
                <p className="content-paragraph">{t('page.self.content1')}</p>
                <p className="content-paragraph">{t('page.self.content2')}</p>
                <p className="content-paragraph">{t('page.self.content3')}</p>
              </div>
              <Link href="/" className="back-link">
                {t('button.back_home')}
              </Link>
            </div>
            <div className="content-visual self-visual">
              <div className="visual-element">
                <div className="progress-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}