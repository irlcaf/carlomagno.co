import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  urlTranslations,
  getPathKeyFromLocalizedPath,
  getLocalizedPath,
  type Locale,
} from './app/lib/url-translations';

const locales = ['en', 'es', 'zh'];
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

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname !== '/' && /\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameLocale) {
    const locale = getLocale(request);
    const localizedPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
    const newUrl = new URL(localizedPath, request.url);
    return NextResponse.redirect(newUrl);
  }

  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length >= 2) {
    const locale = pathSegments[0] as Locale;
    const currentPath = pathSegments[1];
    const pathKey = getPathKeyFromLocalizedPath(currentPath);

    if (pathKey) {
      const localizedPath = getLocalizedPath(locale, pathKey);

      if (localizedPath !== currentPath) {
        const remainingPath = pathSegments.slice(2).join('/');
        const newPath = remainingPath
          ? `/${locale}/${localizedPath}/${remainingPath}`
          : `/${locale}/${localizedPath}`;
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
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};
