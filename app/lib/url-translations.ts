// URL path translations for each locale
export const urlTranslations = {
  en: {
    services: 'services',
    projects: 'projects',
    blog: 'blog',
    toukan: 'toukan',
    contact: 'contact',
    pgp: 'pgp',
  },
  es: {
    services: 'servicios',
    projects: 'proyectos',
    blog: 'blog',
    toukan: 'toukan',
    contact: 'contacto',
    pgp: 'pgp',
  },
  fr: {
    services: 'services',
    projects: 'projets',
    blog: 'blog',
    toukan: 'toukan',
    contact: 'contact',
    pgp: 'pgp',
  },
  zh: {
    services: 'fuwu', // 服务
    projects: 'xiangmu', // 项目
    blog: 'boke', // 博客
    toukan: 'toukan',
    contact: 'lianxi', // 联系
    pgp: 'pgp',
  },
} as const;

export type LocaleUrls = typeof urlTranslations;
export type Locale = keyof LocaleUrls;
export type PathKey = keyof LocaleUrls['en'];

// Get localized path for a given key
export function getLocalizedPath(locale: Locale, pathKey: PathKey): string {
  return urlTranslations[locale][pathKey];
}

// Get path key from any localized path
export function getPathKeyFromLocalizedPath(localizedPath: string): PathKey | null {
  // Remove leading slash if present
  const cleanPath = localizedPath.startsWith('/') ? localizedPath.slice(1) : localizedPath;
  
  // Check each locale's translations
  for (const locale in urlTranslations) {
    const translations = urlTranslations[locale as Locale];
    for (const [key, value] of Object.entries(translations)) {
      if (value === cleanPath) {
        return key as PathKey;
      }
    }
  }
  
  return null;
}

// Build full localized URL
export function buildLocalizedUrl(locale: Locale, pathKey: PathKey, slug?: string): string {
  const localizedPath = getLocalizedPath(locale, pathKey);
  if (slug) {
    return `/${locale}/${localizedPath}/${slug}`;
  }
  return `/${locale}/${localizedPath}`;
}