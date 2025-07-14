import { Services } from 'app/components/services';
import { getTranslations, type Locale } from 'app/lib/translations';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = getTranslations(params.locale as Locale);
  return {
    title: t.services,
    description: t.description,
  };
}

export default function Page({ params }: { params: { locale: string } }) {
  const t = getTranslations(params.locale as Locale);
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {t.offeredServices}
      </h1>
      <Services locale={params.locale} />
    </section>
  );
}
