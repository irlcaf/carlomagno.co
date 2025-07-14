import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { urlTranslations, getPathKeyFromLocalizedPath, getLocalizedPath, type Locale, type PathKey } from './app/lib/url-translations';

const locales = ['en', 'es', 'fr', 'zh'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) return pathnameLocale;

  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const languages = acceptLanguage.split(',');
    for (const lang of languages) {
      const locale = lang.split('-')[0].trim();
      if (locales.includes(locale)) {
        return locale;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if path has locale
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale in path, redirect to default locale
  if (!pathnameLocale) {
    const locale = getLocale(request);
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  // Handle localized paths
  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length >= 2) {
    const locale = pathSegments[0] as Locale;
    const currentPath = pathSegments[1];
    
    // Check if this is an English path used with non-English locale
    if (locale !== 'en') {
      const pathKey = getPathKeyFromLocalizedPath(currentPath);
      
      // If it's a valid English path but wrong for the locale
      if (pathKey && urlTranslations.en[pathKey] === currentPath && urlTranslations[locale][pathKey] !== currentPath) {
        const localizedPath = getLocalizedPath(locale, pathKey);
        const remainingPath = pathSegments.slice(2).join('/');
        const newPath = remainingPath ? `/${locale}/${localizedPath}/${remainingPath}` : `/${locale}/${localizedPath}`;
        const newUrl = new URL(newPath, request.url);
        newUrl.search = request.nextUrl.search;
        return NextResponse.redirect(newUrl);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};