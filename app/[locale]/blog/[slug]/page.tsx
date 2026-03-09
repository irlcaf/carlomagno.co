import { permanentRedirect } from 'next/navigation';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

export default async function BlogPostRedirectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  permanentRedirect(buildLocalizedUrl(locale as Locale, 'blog', slug));
}
