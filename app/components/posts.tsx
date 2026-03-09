import { getBlogPosts } from 'app/[locale]/blog/utils';
import { getTranslations, type Locale as TranslationLocale } from 'app/lib/translations';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';
import { TrackedLink } from 'app/components/analytics/tracked-link';

const dateLocales: Record<string, string> = {
  en: 'en-US',
  es: 'es-419',
  zh: 'zh-CN',
};

function formatEntryDate(date: string, locale: string) {
  const targetDate = date.includes('T') ? new Date(date) : new Date(`${date}T00:00:00`);

  return targetDate.toLocaleDateString(dateLocales[locale] ?? 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function BlogPosts({
  locale = 'en',
  limit,
}: {
  locale?: string;
  limit?: number;
}) {
  let allBlogs = getBlogPosts();
  const t = getTranslations(locale as TranslationLocale);
  const posts = allBlogs
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1;
      }
      return 1;
    })
    .slice(0, limit);

  return (
    <div>
      {posts.map((post) => (
        <TrackedLink
          key={post.slug}
          className="group block mb-10 last:mb-0"
          href={`${buildLocalizedUrl(locale as Locale, 'blog')}/${post.slug}`}
          eventName="writing_open"
          eventParams={{ site: 'carlomagno', locale, slug: post.slug }}
        >
          <div className="space-y-2">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 tabular-nums">
              {formatEntryDate(post.metadata.publishedAt, locale)} {' · '}
              {post.metadata.kind === 'Essay' ? t.essayLabel : t.noteLabel} {' · '}
              {post.readingTimeMinutes} {t.minReadSuffix}
            </p>
            <p className="text-2xl leading-tight tracking-tight underline decoration-neutral-700 underline-offset-4 transition-colors group-hover:decoration-neutral-900 dark:decoration-neutral-300 dark:group-hover:decoration-neutral-100">
              {post.metadata.title}
            </p>
          </div>
        </TrackedLink>
      ))}
    </div>
  );
}
