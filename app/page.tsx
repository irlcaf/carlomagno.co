import { BlogPosts } from 'app/components/posts';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function Page() {
  const { t, lang } = useTranslation('home');
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <strong>Carlomagno Amaya</strong>
      </h1>
      <p className="mb-4">{t('introduction')}</p>
      <p className="mb-4">{t('experience')}</p>
      <p className="mb-4">
        {t('contribution')}
        <u>
          <Link href="https://github.com/irlcaf">Github</Link>
        </u>
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
