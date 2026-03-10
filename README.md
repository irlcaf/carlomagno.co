# carlomagno.xyz

Personal site and writing archive for Carlomagno Amaya.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- MDX content loaded from the `app/` directory

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Content Map

- Homepage and shared copy: `app/lib/translations.ts`
- Project summaries: `app/lib/projects-data.ts`
- Blog posts: `app/[locale]/blog/posts/*.mdx`
- Service notes: `app/[locale]/services/offers/*.mdx`
- Localized path handling: `proxy.ts` and `app/lib/url-translations.ts`
