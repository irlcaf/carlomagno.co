import { Services } from 'app/components/services';

export const metadata = {
  title: 'Services',
  description: 'Read my blog.',
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Offered Services
      </h1>
      <Services />
    </section>
  );
}
