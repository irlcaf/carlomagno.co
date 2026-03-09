// URL path translations for each locale
export const urlTranslations = {
  en: {
    services: 'services',
    projects: 'projects',
    blog: 'writings',
    now: 'now',
    toukan: 'toukan',
    contact: 'contact',
    pgp: 'pgp',
  },
  es: {
    services: 'servicios',
    projects: 'proyectos',
    blog: 'writings',
    now: 'now',
    toukan: 'toukan',
    contact: 'contacto',
    pgp: 'pgp',
  },
  zh: {
    services: 'fuwu',
    projects: 'xiangmu',
    blog: 'writings',
    now: 'now',
    toukan: 'toukan',
    contact: 'lianxi',
    pgp: 'pgp',
  },
} as const;

export type LocaleUrls = typeof urlTranslations;
export type Locale = keyof LocaleUrls;
export type PathKey = keyof LocaleUrls['en'];

const legacyPathAliases: Record<string, PathKey> = {
  blog: 'blog',
  boke: 'blog',
};

// Get localized path for a given key
export function getLocalizedPath(locale: Locale, pathKey: PathKey): string {
  if (!locale || !urlTranslations[locale]) {
    // Default to English if locale is invalid
    return urlTranslations.en[pathKey];
  }
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

  if (cleanPath in legacyPathAliases) {
    return legacyPathAliases[cleanPath];
  }
  
  return null;
}

// Build full localized URL
export function buildLocalizedUrl(locale: Locale, pathKey: PathKey, slug?: string): string {
  const validLocale = locale || 'en';
  const localizedPath = getLocalizedPath(validLocale as Locale, pathKey);
  if (slug) {
    return `/${validLocale}/${localizedPath}/${slug}`;
  }
  return `/${validLocale}/${localizedPath}`;
}
