import { getTranslations, type Locale } from 'app/lib/translations';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocalizedUrl } from 'app/lib/url-translations';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = getTranslations(params.locale as Locale);
  return {
    title: t.contactTitle || 'Secure Contact',
    description:
      t.contactDescription || 'Get in touch through encrypted channels',
  };
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = getTranslations(params.locale as Locale);
  const locale = params.locale as Locale;

  return (
    <section>
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tighter mb-4">
          {t.contactTitle || 'Secure Contact'}
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg">
          {t.contactDescription ||
            'Get in touch through encrypted channels for maximum privacy and security.'}
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          {t.securityNote ||
            'For sensitive matters, please use PGP encryption to ensure complete privacy.'}
        </p>

        <div className="bg-neutral-50 dark:bg-neutral-950 p-4 rounded-lg">
          <p className="font-mono text-lg mb-2">contact@carlomagno.xyz</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            PGP: 9E59 7104 27B7 CBB3 3EA8 39F9 E8CC F0AA 54BE F63B
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="/pgp.asc"
            download
            className="inline-flex items-center px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
            {t.downloadPgpKey || 'Download PGP Key'}
          </a>

          <Link
            href={buildLocalizedUrl(locale, 'pgp')}
            className="inline-flex items-center px-4 py-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {t.quickPgpGuide || 'PGP Setup Guide'}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
