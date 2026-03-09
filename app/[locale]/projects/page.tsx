import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: 'Areas of Work',
    description: 'Areas of work and selected examples',
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }): Promise<never> {
  const { locale } = await params;
  redirect(buildLocalizedUrl(locale as Locale, 'services'));
}
