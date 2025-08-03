'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import React from 'react'

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-light-gray border-t border-gray-200">
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo and Company */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-google-blue to-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">EQ</span>
            </div>
            <span className="text-google-gray font-medium">EQAIGlobal</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-google-gray">
            {t('footer.copyright')}
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:hello@eqaiglobal.com" 
              className="text-sm text-google-gray hover:text-google-blue transition-colors duration-200"
            >
              Contact
            </a>
            <a 
              href="/privacy" 
              className="text-sm text-google-gray hover:text-google-blue transition-colors duration-200"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}