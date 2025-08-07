'use client';

import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

export default function PetsPage() {
  const { t } = useLanguage();

  const services = [
    { icon: '🏥', title: 'Health Care', description: 'Veterinary guidance and health monitoring' },
    { icon: '🍖', title: 'Nutrition', description: 'Diet plans and feeding recommendations' },
    { icon: '🎾', title: 'Training', description: 'Behavioral training and exercise routines' },
    { icon: '❤️', title: 'Wellness', description: 'Mental health and happiness for pets' },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section pets-hero">
        <div className="hero-background">
          <div className="paw-prints">
            <div className="paw paw-1">🐾</div>
            <div className="paw paw-2">🐾</div>
            <div className="paw paw-3">🐾</div>
            <div className="paw paw-4">🐾</div>
          </div>
          <div className="bubble-animation">
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-icon pets-icon">
            {t('category.pets.emoji')}
          </div>
          <h1 className="hero-title">{t('page.pets.title')}</h1>
          <p className="hero-description">{t('page.pets.description')}</p>
          <button className="cta-button pets-button">Pet Care Guide</button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Complete Pet Care</h2>
          <div className="features-grid">
            {services.map((service, index) => (
              <div key={index} className="feature-card pets-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon pets-feature-icon">{service.icon}</div>
                <h3 className="feature-title">{service.title}</h3>
                <p className="feature-description">{service.description}</p>
                <div className="heart-animation">💖</div>
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
              <h2 className="content-title">Your Pet's Best Friend</h2>
              <div className="content-paragraphs">
                <p className="content-paragraph">{t('page.pets.content1')}</p>
                <p className="content-paragraph">{t('page.pets.content2')}</p>
                <p className="content-paragraph">{t('page.pets.content3')}</p>
              </div>
              <Link href="/" className="back-link">
                {t('button.back_home')}
              </Link>
            </div>
            <div className="content-visual pets-visual">
              <div className="visual-element">
                <div className="pet-silhouettes">
                  <div className="silhouette cat">🐱</div>
                  <div className="silhouette dog">🐶</div>
                  <div className="silhouette bird">🐦</div>
                </div>
                <div className="love-hearts">
                  <div className="heart heart-1">💕</div>
                  <div className="heart heart-2">💕</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}