'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getPathKeyFromLocalizedPath, buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

const locales = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = segments[0] as Locale;

  const getLocalizedPath = (targetLocale: string) => {
    // Handle home page
    if (segments.length === 1) {
      return `/${targetLocale}`;
    }
    
    // Get the current path key
    const currentPath = segments[1];
    const pathKey = getPathKeyFromLocalizedPath(currentPath);
    
    if (pathKey) {
      // Build localized URL with the remaining path segments
      const remainingPath = segments.slice(2).join('/');
      const baseUrl = buildLocalizedUrl(targetLocale as Locale, pathKey);
      return remainingPath ? `${baseUrl}/${remainingPath}` : baseUrl;
    }
    
    // Fallback: just replace the locale
    const newSegments = [...segments];
    newSegments[0] = targetLocale;
    return '/' + newSegments.join('/');
  };

  return (
    <div className="flex items-center space-x-2">
      {locales.map((locale) => (
        <Link
          key={locale.code}
          href={getLocalizedPath(locale.code)}
          className={`text-sm px-2 py-1 rounded transition-colors ${
            currentLocale === locale.code
              ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
              : 'hover:bg-neutral-100 dark:hover:bg-neutral-900'
          }`}
        >
          {locale.code.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}