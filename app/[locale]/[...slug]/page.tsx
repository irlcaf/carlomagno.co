import { notFound, redirect } from 'next/navigation';
import { getPathKeyFromLocalizedPath, urlTranslations } from 'app/lib/url-translations';
import ServicesPage from '../services/page';
import WritingsPage from '../writings/page';
import WritingPage from '../writings/[slug]/page';
import NowPage from '../now/page';
import PGPPage from '../pgp/page';
import ContactPage from '../contact/page';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string[];
  }>;
}

export default async function DynamicPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const path = slug[0];
  
  // Get the path key from the localized path
  const pathKey = getPathKeyFromLocalizedPath(path);
  
  if (!pathKey) {
    notFound();
  }
  
  // Route to the appropriate component based on pathKey
  switch (pathKey) {
    case 'services':
      if (slug.length === 1) {
        return <ServicesPage params={Promise.resolve({ locale })} />;
      }
      // Handle service detail pages
      break;
      
    case 'projects':
      if (slug.length === 1) {
        redirect(buildLocalizedUrl(locale as Locale, 'services'));
      }
      break;
      
    case 'blog':
      if (slug.length === 1) {
        return <WritingsPage params={Promise.resolve({ locale })} />;
      }
      if (slug.length === 2) {
        return <WritingPage params={Promise.resolve({ locale, slug: slug[1] })} />;
      }
      break;
    
    case 'now':
      if (slug.length === 1) {
        return <NowPage params={Promise.resolve({ locale })} />;
      }
      break;
      
    case 'contact':
      if (slug.length === 1) {
        return <ContactPage params={Promise.resolve({ locale })} />;
      }
      break;
      
    case 'pgp':
      if (slug.length === 1) {
        return <PGPPage params={Promise.resolve({ locale })} />;
      }
      break;
  }
  
  notFound();
}

// Generate static params for all locale/path combinations
export function generateStaticParams() {
  const locales = Object.keys(urlTranslations);
  const paths = Array.from(
    new Set(
      Object.values(urlTranslations).flatMap((translations) =>
        Object.values(translations)
      )
    )
  );

  const params: { locale: string; slug: string[] }[] = [];
  
  for (const locale of locales) {
    for (const path of paths) {
      params.push({
        locale,
        slug: [path],
      });
    }
  }
  
  return params;
}
