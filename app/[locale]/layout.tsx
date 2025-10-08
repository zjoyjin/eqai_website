import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { locales } from '@/i18n/request';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateJsonLd } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eqaiglobal.com'),
    title: {
      default: t('site.name'),
      template: `%s | ${t('site.name')}`,
    },
    description: t('site.description'),
    keywords: `${t('keywords.primary')}, ${t('keywords.secondary')}`,
    authors: [{ name: 'EQAIGlobal' }],
    creator: 'EQAIGlobal',
    publisher: 'EQAIGlobal',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'zh': '/zh',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      url: `/${locale}`,
      title: t('site.name'),
      description: t('site.description'),
      siteName: t('site.name'),
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('site.tagline'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('site.name'),
      description: t('site.description'),
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Load messages with error handling
  let messages: any = undefined;
  let t: any = undefined;

  try {
    messages = await getMessages();
    t = await getTranslations({ locale, namespace: 'meta' });
  } catch (e) {
    console.error('[layout] Failed to load intl messages:', e);
  }

  // JSON-LD structured data with fallbacks
  const organizationJsonLd = generateJsonLd('Organization', {
    name: 'EQAIGlobal',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://eqaiglobal.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://eqaiglobal.com'}/logo.png`,
    description: t?.('site.description') || 'Emotional Intelligence × AI',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Chinese'],
    },
  });

  const websiteJsonLd = generateJsonLd('WebSite', {
    name: t?.('site.name') || 'EQAIGlobal',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://eqaiglobal.com'}/${locale}`,
    description: t?.('site.description') || 'Emotional Intelligence × AI',
    inLanguage: locale === 'zh' ? 'zh-CN' : 'en-US',
  });

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen flex flex-col" style={{margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#ffffff'}}>
        {/* ABSOLUTE TEST - This should ALWAYS show */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px',
          backgroundColor: '#ff0000',
          color: '#ffffff',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
          zIndex: 9999,
          border: '5px solid yellow'
        }}>
          🚨 IF YOU SEE THIS, SSR IS WORKING! Locale: {locale}
        </div>

        <noscript>
          <div style={{
            padding: '40px',
            textAlign: 'center',
            fontSize: '18px',
            backgroundColor: '#fff3cd',
            border: '2px solid #ffc107',
            margin: '20px'
          }}>
            <h1>JavaScript Required</h1>
            <p>Please enable JavaScript to view this website properly.</p>
          </div>
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <NextIntlClientProvider locale={locale} messages={messages}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white">
            {locale === 'zh' ? '跳到主要内容' : 'Skip to main content'}
          </a>

          <Header locale={locale} />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
