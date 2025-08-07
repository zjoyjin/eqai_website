'use client';

import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

export default function WorkPage() {
  const { t } = useLanguage();

  const tools = [
    { icon: '💻', title: 'Remote Tools', description: 'Collaboration platforms and productivity suites' },
    { icon: '📊', title: 'Analytics', description: 'Performance tracking and data insights' },
    { icon: '🚀', title: 'Automation', description: 'Streamline workflows and processes' },
    { icon: '📈', title: 'Growth', description: 'Career development and skill building' },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section work-hero">
        <div className="hero-background">
          <div className="grid-pattern"></div>
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-icon work-icon">
            {t('category.work.emoji')}
          </div>
          <h1 className="hero-title">{t('page.work.title')}</h1>
          <p className="hero-description">{t('page.work.description')}</p>
          <button className="cta-button work-button">Explore Tools</button>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">Professional Solutions</h2>
          <div className="features-grid">
            {tools.map((tool, index) => (
              <div key={index} className="feature-card work-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon work-feature-icon">{tool.icon}</div>
                <h3 className="feature-title">{tool.title}</h3>
                <p className="feature-description">{tool.description}</p>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="section-container">
          <div className="content-grid">
            <div className="content-visual work-visual">
              <div className="visual-element">
                <div className="code-blocks">
                  <div className="code-block block-1"></div>
                  <div className="code-block block-2"></div>
                  <div className="code-block block-3"></div>
                </div>
                <div className="pulse-dot"></div>
              </div>
            </div>
            <div className="content-text">
              <h2 className="content-title">Excel in the Modern Workplace</h2>
              <div className="content-paragraphs">
                <p className="content-paragraph">{t('page.work.content1')}</p>
                <p className="content-paragraph">{t('page.work.content2')}</p>
                <p className="content-paragraph">{t('page.work.content3')}</p>
              </div>
              <Link href="/" className="back-link">
                {t('button.back_home')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}