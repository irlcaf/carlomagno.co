import { permanentRedirect } from 'next/navigation';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

export default async function BlogRedirectPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  permanentRedirect(buildLocalizedUrl(locale as Locale, 'blog'));
}
