'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from './language-switcher';
import { getTranslations, type Locale } from 'app/lib/translations';
import { buildLocalizedUrl, type PathKey } from 'app/lib/url-translations';

const navItems: { pathKey?: PathKey | 'home'; translationKey: string; href?: string; external?: boolean }[] = [
  { pathKey: 'home', translationKey: 'home' },
  { href: 'https://www.toukan.dev', translationKey: 'toukan', external: true },
  { pathKey: 'blog', translationKey: 'blog' },
  { pathKey: 'contact', translationKey: 'contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] as Locale;
  const t = getTranslations(currentLocale);

  const getLocalizedPath = (pathKey: PathKey | 'home') => {
    if (pathKey === 'home') {
      return `/${currentLocale}`;
    }
    return buildLocalizedUrl(currentLocale, pathKey);
  };

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {navItems.map((item) => {
              const { pathKey, translationKey, href: externalHref, external } = item;
              const href = externalHref || getLocalizedPath(pathKey!);
              const key = pathKey || externalHref;
              
              if (external) {
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 items-center"
                  >
                    {t[translationKey as keyof typeof t]}
                    <svg 
                      className="w-3 h-3 ml-1 opacity-50" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </a>
                );
              }
              
              return (
                <Link
                  key={key}
                  href={href}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {t[translationKey as keyof typeof t]}
                </Link>
              );
            })}
          </div>
          <LanguageSwitcher />
        </nav>
      </div>
    </aside>
  );
}
