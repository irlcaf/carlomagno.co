import { BlogPosts } from 'app/components/posts';
import { getTranslations, type Locale } from 'app/lib/translations';
import { buildLocalizedUrl } from 'app/lib/url-translations';
import { baseUrl } from 'app/sitemap';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  const canonicalPath = buildLocalizedUrl(locale as Locale, 'blog');
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  return {
    title: t.blogTitle,
    description: t.blogDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}${buildLocalizedUrl('en', 'blog')}`,
        es: `${baseUrl}${buildLocalizedUrl('es', 'blog')}`,
        zh: `${baseUrl}${buildLocalizedUrl('zh', 'blog')}`,
        'x-default': `${baseUrl}${buildLocalizedUrl('en', 'blog')}`,
      },
    },
    openGraph: {
      title: t.blogTitle,
      description: t.blogDescription,
      url: canonicalUrl,
      siteName: 'Carlomagno',
      type: 'website',
    },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  return (
    <section>
      <div className="mb-10">
        <h1 className="font-semibold text-2xl mb-3 tracking-tighter">{t.blogTitle}</h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          {t.blogDescription}
        </p>
      </div>
      <BlogPosts locale={locale} />
    </section>
  );
}
