import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';
import { getServicesContent } from 'app/lib/services-data';
import { baseUrl } from 'app/sitemap';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getServicesContent(locale as Locale);
  const canonicalPath = buildLocalizedUrl(locale as Locale, 'services');
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    title: content.title,
    description: content.intro,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}${buildLocalizedUrl('en', 'services')}`,
        es: `${baseUrl}${buildLocalizedUrl('es', 'services')}`,
        zh: `${baseUrl}${buildLocalizedUrl('zh', 'services')}`,
        'x-default': `${baseUrl}${buildLocalizedUrl('en', 'services')}`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.intro,
      url: canonicalUrl,
      siteName: 'Carlomagno',
      type: 'website',
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getServicesContent(locale as Locale);

  return (
    <section>
      <div className="mb-12">
        <h1 className="font-semibold text-3xl mb-4 tracking-tighter">
          {content.title}
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg">
          {content.intro}
        </p>
      </div>

      <div className="space-y-8">
        {content.practiceAreas.map((area) => (
          <div
            key={area.title}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-3">{area.title}</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              {area.summary}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400 mb-5">
              {area.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {area.examples.length > 0 && (
              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-500 mb-3">
                  {content.selectedExamplesLabel}
                </p>
                <div className="space-y-3">
                  {area.examples.map((example) => (
                    <div
                      key={example.title}
                      className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4"
                    >
                      <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                        {example.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        {example.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-4 text-sm">
              {area.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-700 dark:decoration-neutral-700 dark:hover:decoration-neutral-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-neutral-50 dark:bg-neutral-950 p-6">
        <p className="text-neutral-700 dark:text-neutral-300">
          {content.ctaText}
        </p>
        <Link
          href={buildLocalizedUrl(locale as Locale, 'contact')}
          className="inline-flex items-center mt-4 text-sm font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-700 dark:decoration-neutral-700 dark:hover:decoration-neutral-200"
        >
          {content.ctaLinkLabel}
        </Link>
      </div>
    </section>
  );
}
