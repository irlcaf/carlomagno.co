import { TrackedLink } from 'app/components/analytics/tracked-link';
import { getNowData } from 'app/lib/now-data';
import { getTranslations, type Locale } from 'app/lib/translations';
import { buildLocalizedUrl } from 'app/lib/url-translations';
import type { Metadata } from 'next';
import { baseUrl } from 'app/sitemap';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const canonicalPath = `/${locale}`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    title: t.title,
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
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const nowData = getNowData(locale as Locale);
  const profileUrl = `${baseUrl}/${locale}`;

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': `${profileUrl}#person`,
                name: 'Carlomagno',
                url: profileUrl,
                sameAs: [
                  'https://github.com/irlcaf',
                  'https://www.linkedin.com/in/carlomagnoaf/',
                  'https://x.com/irlcaf',
                ],
                knowsAbout: [
                  'Security research',
                  'Software engineering',
                  'Data systems',
                  'Applied algorithms',
                  'Cyber-physical systems',
                ],
              },
              {
                '@type': 'WebSite',
                '@id': `${baseUrl}#website`,
                name: 'Carlomagno',
                url: baseUrl,
                inLanguage: locale,
                publisher: {
                  '@id': `${profileUrl}#person`,
                },
              },
            ],
          }),
        }}
      />
      <h1 className="text-3xl font-bold tracking-tighter mb-5">
        {t.title}
      </h1>
      
      <div className="prose dark:prose-invert mb-8">
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          {t.bio}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        <TrackedLink
          href={buildLocalizedUrl(locale as Locale, 'blog')}
          eventName="writing_archive_open"
          eventParams={{ site: 'carlomagno', locale, target: 'homepage' }}
          className="inline-flex items-center px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
        >
          {t.readBlog}
        </TrackedLink>
        <TrackedLink
          href={buildLocalizedUrl(locale as Locale, 'contact')}
          eventName="contact_open"
          eventParams={{ site: 'carlomagno', locale, target: 'homepage' }}
          className="inline-flex items-center px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          {t.contact}
        </TrackedLink>
      </div>

      <div className="my-12">
        <div className="mb-6">
          <h3 className="text-xl font-semibold tracking-tighter">{t.recentInterests}</h3>
        </div>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
          {nowData.interests.slice(0, 4).map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
        <div className="mt-6">
          <TrackedLink
            href={buildLocalizedUrl(locale as Locale, 'now')}
            eventName="now_open"
            eventParams={{ site: 'carlomagno', locale, target: 'homepage_recent_interests' }}
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center"
          >
            {t.viewNowPage}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
