module.exports = {
    locales: ['__default', 'en', 'es', 'fr', 'zh'],
    defaultLocale: 'en',
    localesToIgnore: ['__default'],
    pages: {
      '*': ['common', 'home'],
      '/[lang]': ['common', 'home'],
      '/': ['common','home'],
    },
    interpolation: {
      prefix: '${',
      suffix: '}',
    },
    localeDetection: false,
    loadLocaleFrom: async (locale, namespace) =>
      import(`./locales/${locale}/${namespace}.json`).then((r) => r.default),
  }