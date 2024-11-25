import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default async function Page() {
  await sleep(500); // simulate slow page load to show loading page

  const { t, lang } = useTranslation('common');

  return (
    <>
      <h2>{t('title')}</h2>

      <div style={{ marginTop: 20 }}>
        <Link href="/en">English</Link>
      </div>

      <div>
        <Link href="/es">Español</Link>
      </div>

      <div>
        <Link href="/ca">Català</Link>
      </div>

      <div>
        <Link href={`/${lang}/second-page`}>➡️</Link>
      </div>
    </>
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const metadata = {
  title: 'App directory',
};
