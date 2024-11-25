import { Services } from 'app/components/services';
import useTranslation from 'next-translate/useTranslation';

const { t } = useTranslation('offers');

export const metadata = {
  title: t('title'),
  description: t('description'),
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {t('title')}
      </h1>
      <Services />
    </section>
  );
}
