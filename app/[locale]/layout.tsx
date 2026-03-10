import '../global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from '../components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '../components/footer';
import CalFloatingButton from '../components/cal-floating-button';
import { baseUrl } from '../sitemap';
import { getTranslations, type Locale } from '../lib/translations';
import Script from 'next/script';
import { GoogleAnalyticsPageview } from '../components/analytics/google-analytics';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const canonicalUrl = `${baseUrl}/${locale}`;
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t.title,
      template: '%s | Carlomagno',
    },
    description: t.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        zh: `${baseUrl}/zh`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: canonicalUrl,
      siteName: 'Carlomagno',
      type: 'website',
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
    verification: {
      google: googleVerification || undefined,
      other: bingVerification
        ? {
            'msvalidate.01': bingVerification,
          }
        : undefined,
    },
  };
}

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html
      lang={locale}
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                });
              `}
            </Script>
          </>
        ) : null}
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <GoogleAnalyticsPageview />
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
          <CalFloatingButton />
        </main>
      </body>
    </html>
  );
}
