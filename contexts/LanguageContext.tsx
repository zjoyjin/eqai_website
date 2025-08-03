'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.language': '中文',
    
    // Homepage
    'home.title': 'EQAIGlobal',
    'home.tagline': 'Connecting Life with Simplicity',
    'home.subtitle': 'Discover solutions for every aspect of your life',
    
    // Categories
    'category.kids.title': 'For Kids',
    'category.kids.subtitle': 'Educational content and safety tips',
    'category.kids.emoji': '👶',
    
    'category.self.title': 'For Yourself',
    'category.self.subtitle': 'Wellness, productivity, and personal growth',
    'category.self.emoji': '🧘',
    
    'category.work.title': 'For Work',
    'category.work.subtitle': 'Remote tools and professional resources',
    'category.work.emoji': '💼',
    
    'category.pets.title': 'For Pets',
    'category.pets.subtitle': 'Pet care, health, and lifestyle tips',
    'category.pets.emoji': '🐾',
    
    // Buttons
    'button.learn_more': 'Learn More',
    'button.back_home': 'Back to Home',
    
    // Footer
    'footer.copyright': '© 2024 EQAIGlobal. All rights reserved.',
    
    // Page content
    'page.kids.title': 'For Kids',
    'page.kids.description': 'Creating safe and educational experiences for children',
    'page.kids.content1': 'Our platform provides carefully curated educational content designed to help children learn and grow in a safe digital environment.',
    'page.kids.content2': 'We focus on age-appropriate materials that promote creativity, critical thinking, and digital literacy while ensuring complete safety and privacy.',
    'page.kids.content3': 'From interactive learning games to educational videos, we offer resources that make learning fun and engaging for children of all ages.',
    
    'page.self.title': 'For Yourself',
    'page.self.description': 'Tools and resources for personal development and wellness',
    'page.self.content1': 'Discover resources designed to help you achieve personal growth, maintain wellness, and improve your overall quality of life.',
    'page.self.content2': 'Our curated collection includes mindfulness practices, productivity tools, and lifestyle guidance tailored to your individual needs.',
    'page.self.content3': 'Whether you\'re looking to build new habits, learn new skills, or simply find balance in your daily routine, we have the tools to support your journey.',
    
    'page.work.title': 'For Work',
    'page.work.description': 'Professional tools and resources for modern workplace',
    'page.work.content1': 'Enhance your professional capabilities with our comprehensive collection of work-focused tools and resources.',
    'page.work.content2': 'From remote collaboration tools to productivity frameworks, we provide everything you need to excel in today\'s dynamic work environment.',
    'page.work.content3': 'Stay ahead of industry trends and develop the skills necessary for career advancement in an increasingly digital workplace.',
    
    'page.pets.title': 'For Pets',
    'page.pets.description': 'Comprehensive care guides for your beloved companions',
    'page.pets.content1': 'Your pets deserve the best care possible. Our platform offers expert guidance on pet health, nutrition, and general wellbeing.',
    'page.pets.content2': 'From training tips to health monitoring, we provide practical advice to help you build a stronger bond with your furry friends.',
    'page.pets.content3': 'Whether you\'re a new pet owner or an experienced caregiver, our resources will help you provide the love and care your pets deserve.',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.language': 'English',
    
    // Homepage
    'home.title': 'EQAIGlobal',
    'home.tagline': '让生活更简单',
    'home.subtitle': '为生活的每个方面发现解决方案',
    
    // Categories
    'category.kids.title': '为孩子',
    'category.kids.subtitle': '教育内容和安全提示',
    'category.kids.emoji': '👶',
    
    'category.self.title': '为自己',
    'category.self.subtitle': '健康、生产力和个人成长',
    'category.self.emoji': '🧘',
    
    'category.work.title': '为工作',
    'category.work.subtitle': '远程工具和专业资源',
    'category.work.emoji': '💼',
    
    'category.pets.title': '为宠物',
    'category.pets.subtitle': '宠物护理、健康和生活方式提示',
    'category.pets.emoji': '🐾',
    
    // Buttons
    'button.learn_more': '了解更多',
    'button.back_home': '返回首页',
    
    // Footer
    'footer.copyright': '© 2024 EQAIGlobal. 保留所有权利。',
    
    // Page content
    'page.kids.title': '为孩子',
    'page.kids.description': '为儿童创造安全和教育的体验',
    'page.kids.content1': '我们的平台提供精心策划的教育内容，旨在帮助儿童在安全的数字环境中学习和成长。',
    'page.kids.content2': '我们专注于适合年龄的材料，促进创造力、批判性思维和数字素养，同时确保完全的安全和隐私。',
    'page.kids.content3': '从互动学习游戏到教育视频，我们提供让所有年龄段儿童学习变得有趣和吸引人的资源。',
    
    'page.self.title': '为自己',
    'page.self.description': '个人发展和健康的工具和资源',
    'page.self.content1': '发现旨在帮助您实现个人成长、保持健康并改善整体生活质量的资源。',
    'page.self.content2': '我们精选的集合包括正念练习、生产力工具和根据您个人需求量身定制的生活方式指导。',
    'page.self.content3': '无论您是想要建立新习惯、学习新技能，还是只是在日常生活中找到平衡，我们都有工具来支持您的旅程。',
    
    'page.work.title': '为工作',
    'page.work.description': '现代工作场所的专业工具和资源',
    'page.work.content1': '通过我们全面的工作导向工具和资源集合，增强您的专业能力。',
    'page.work.content2': '从远程协作工具到生产力框架，我们提供您在当今动态工作环境中脱颖而出所需的一切。',
    'page.work.content3': '紧跟行业趋势，发展在日益数字化的工作场所中职业发展所必需的技能。',
    
    'page.pets.title': '为宠物',
    'page.pets.description': '为您心爱的伙伴提供全面的护理指南',
    'page.pets.content1': '您的宠物值得得到最好的照顾。我们的平台提供关于宠物健康、营养和总体福祉的专家指导。',
    'page.pets.content2': '从训练技巧到健康监测，我们提供实用建议，帮助您与毛茸茸的朋友建立更强的纽带。',
    'page.pets.content3': '无论您是新手宠物主人还是经验丰富的照顾者，我们的资源都将帮助您提供宠物应得的爱和关怀。',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}