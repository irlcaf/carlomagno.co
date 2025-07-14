import { Projects } from 'app/components/projects';
import Link from 'next/link';
import { getTranslations, type Locale } from 'app/lib/translations';
import { buildLocalizedUrl } from 'app/lib/url-translations';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
          {t.hero}
        </h1>
        <h2 className="text-2xl font-semibold tracking-tighter mb-4">
          <strong>Carlomagno Amaya</strong>
        </h2>
      </div>
      
      <div className="prose dark:prose-invert mb-8">
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          {t.bio}
        </p>
        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          {t.valueProp}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        <Link
          href={buildLocalizedUrl(locale as Locale, 'services')}
          className="inline-flex items-center px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
        >
          {t.viewServices}
        </Link>
        <Link
          href={buildLocalizedUrl(locale as Locale, 'contact')}
          className="inline-flex items-center px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          {t.contact}
        </Link>
      </div>

      <div className="my-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold tracking-tighter">{t.latestWork}</h3>
          <Link
            href={buildLocalizedUrl(locale as Locale, 'projects')}
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center"
          >
            {t.viewAllProjects || 'View All Projects'}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <Projects featured={true} locale={locale} />
      </div>
    </section>
  );
}
