import { getBlogPosts } from 'app/[locale]/blog/utils'
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations'

export const baseUrl = 'https://carlomagno.co'

const locales: Locale[] = ['en', 'es', 'fr', 'zh'];

export default async function sitemap() {
  let blogs = getBlogPosts().flatMap((post) => 
    locales.map(locale => ({
      url: `${baseUrl}${buildLocalizedUrl(locale, 'blog')}/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  )

  let routes = locales.flatMap(locale => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: `${baseUrl}${buildLocalizedUrl(locale, 'blog')}`,
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: `${baseUrl}${buildLocalizedUrl(locale, 'services')}`,
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: `${baseUrl}${buildLocalizedUrl(locale, 'projects')}`,
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: `${baseUrl}${buildLocalizedUrl(locale, 'toukan')}`,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ])

  return [...routes, ...blogs]
}
