import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../contexts/LanguageContext'
import Layout from '../components/Layout'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EQAIGlobal - Connecting Life with Simplicity',
  description: 'Discover solutions for kids, yourself, work, and pets. Making life simpler through technology.',
  keywords: 'AI, lifestyle, kids, work, pets, wellness, productivity',
  authors: [{ name: 'EQAIGlobal' }],
  openGraph: {
    title: 'EQAIGlobal - Connecting Life with Simplicity',
    description: 'Discover solutions for kids, yourself, work, and pets. Making life simpler through technology.',
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  )
}