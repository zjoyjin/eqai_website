import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './global.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext'; // ✅ Correct import

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EQAIGlobal - Connecting Life with Simplicity',
  description:
    'Discover solutions for kids, yourself, work, and pets. Making life simpler through technology.',
  keywords: 'AI, lifestyle, kids, work, pets, wellness, productivity',
  authors: [{ name: 'EQAIGlobal' }],
  openGraph: {
    title: 'EQAIGlobal - Connecting Life with Simplicity',
    description:
      'Discover solutions for kids, yourself, work, and pets. Making life simpler through technology.',
    url: 'https://eqaiglobal.com',
    siteName: 'EQAIGlobal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EQAIGlobal - Connecting Life with Simplicity',
    description: 'Discover solutions for kids, yourself, work, and pets.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
