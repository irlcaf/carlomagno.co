import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations, type Locale } from 'app/lib/translations';
import { getNowData } from 'app/lib/now-data';
import { buildLocalizedUrl } from 'app/lib/url-translations';
import { baseUrl } from 'app/sitemap';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const canonicalPath = buildLocalizedUrl(locale as Locale, 'now');
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  return {
    title: t.nowTitle,
    description: t.nowDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}${buildLocalizedUrl('en', 'now')}`,
        es: `${baseUrl}${buildLocalizedUrl('es', 'now')}`,
        zh: `${baseUrl}${buildLocalizedUrl('zh', 'now')}`,
        'x-default': `${baseUrl}${buildLocalizedUrl('en', 'now')}`,
      },
    },
    openGraph: {
      title: t.nowTitle,
      description: t.nowDescription,
      url: canonicalUrl,
      siteName: 'Carlomagno',
      type: 'website',
    },
  };
}

export default async function NowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const nowData = getNowData(locale as Locale);

  return (
    <section>
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tighter mt-4 mb-4">
          {t.nowTitle}
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg">
          {t.nowIntroLead}{' '}
          <Link
            href={buildLocalizedUrl(locale as Locale, 'contact')}
            className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-700 dark:decoration-neutral-700 dark:hover:decoration-neutral-200"
          >
            contact@carlomagno.xyz
          </Link>
        </p>
        <div className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-400 mt-4">
          {t.nowUpdatedLabel}: {nowData.updatedLabel}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tighter mb-4">
            {t.currentInterests}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
            {nowData.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tighter mb-4">
            {t.workingOnNow}
          </h2>
          <div className="space-y-4">
            {nowData.workingOn.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-5"
              >
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
