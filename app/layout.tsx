// app/layout.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Driveway Gates Hertfordshire | Find Trusted Gate Installers Across Hertfordshire',
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  verification: {
    google: '5rO-YvY2XOMFV5_MpLuZpJyBDdMv5Vc0iKUKBL1qNQA',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: siteConfig.tagline,
    url: siteConfig.url,
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/icon-512x512.png`,
      width: 512,
      height: 512,
    },
    description: siteConfig.description,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Hertfordshire',
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
  };

  return (
    <html lang="en-GB">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G446QSQFQT" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G446QSQFQT');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
