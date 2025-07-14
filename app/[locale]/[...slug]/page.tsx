import { notFound } from 'next/navigation';
import { getPathKeyFromLocalizedPath } from 'app/lib/url-translations';
import ServicesPage from '../services/page';
import ProjectsPage from '../projects/page';
import BlogPage from '../blog/page';
import PGPPage from '../pgp/page';
import ContactPage from '../contact/page';

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
        return <ProjectsPage params={Promise.resolve({ locale })} />;
      }
      break;
      
    case 'blog':
      if (slug.length === 1) {
        return <BlogPage params={Promise.resolve({ locale })} />;
      }
      // Handle blog post pages
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
  const locales = ['en', 'es', 'fr', 'zh'];
  const paths = ['services', 'servicios', 'projects', 'proyectos', 'projets', 'xiangmu', 'blog', 'boke', 'contact', 'contacto', 'lianxi', 'fuwu'];
  
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