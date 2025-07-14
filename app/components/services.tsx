import Link from 'next/link';
import { getServices } from 'app/[locale]/services/utils';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

export function Services({ locale = 'en' }: { locale?: string }) {
  let allServices = getServices();
  
  // Define core services order
  const coreServicesOrder = [
    'cybersecurity',
    'data-analytics', 
    'algorithms-software',
    'ai'
  ];
  
  // Sort services with core services first
  const sortedServices = allServices.sort((a, b) => {
    const aIndex = coreServicesOrder.indexOf(a.slug);
    const bIndex = coreServicesOrder.indexOf(b.slug);
    
    if (aIndex !== -1 && bIndex !== -1) {
      return aIndex - bIndex;
    }
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    
    // Sort remaining by date
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
  
  return (
    <div>
      {sortedServices
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`${buildLocalizedUrl(locale as Locale, 'services')}/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row items-start p-1 bg-white dark:bg-neutral-800 rounded-t-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
              <span className="text-neutral-600 dark:text-neutral-400 w-[40px] tabular-nums">
                {post.metadata.icon}
              </span>
              <h2 className="text-neutral-900 dark:text-neutral-100 text-lg font-semibold tracking-tight">
                {post.metadata.title}
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-500 text-sm mt-2 md:mt-0 p-2 bg-neutral-50 dark:bg-neutral-900 rounded-b-lg shadow-sm border-t-0 border-neutral-200 dark:border-neutral-700">
              {post.metadata.summary}
            </p>
          </Link>
        ))}
    </div>
  );
}
