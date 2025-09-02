import { getTranslations, type Locale } from 'app/lib/translations';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocalizedUrl } from 'app/lib/url-translations';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  return {
    title: t.services,
    description: t.description,
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getTranslations(locale as Locale);
  
  return (
    <section>
      <div className="mb-12">
        <h1 className="font-semibold text-3xl mb-4 tracking-tighter">
          Core Services
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8">
          Specialized solutions for LATAM's critical infrastructure sectors
        </p>
        
        {/* How We Work Section */}
        <div className="bg-neutral-50 dark:bg-neutral-950 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold mb-2">How We Work</h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            Collaborative 16-week partnerships for tailored deployments. We integrate with your team, 
            understand your unique challenges, and deliver solutions that scale with your organization.
          </p>
        </div>
      </div>

      {/* Core Services Grid */}
      <div className="grid gap-8 mb-12">
        {/* Data Analytics */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Data Analytics & Intelligence</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Unified data platforms for government intelligence and enterprise decision-making
              </p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start">
              <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Sustainability tracking for construction and green analytics
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Real-time data unification across 40+ source systems
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Predictive analytics for energy grid optimization
              </p>
            </div>
          </div>
          
          <Link 
            href={buildLocalizedUrl(locale as Locale, 'contact')} 
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            Request Consultation →
          </Link>
        </div>

        {/* Cybersecurity */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity & Infrastructure Protection</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Quantum-resistant solutions and industrial IoT security for energy/telecom
              </p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start">
              <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Zero-trust architecture for critical infrastructure
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Penetration testing engagements & social engineering assessments
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Industrial control systems (ICS) security assessments
              </p>
            </div>
          </div>
          
          <Link 
            href={buildLocalizedUrl(locale as Locale, 'contact')} 
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            Request Consultation →
          </Link>
        </div>

        {/* Algorithms & Software */}
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Algorithm Development & Software Engineering</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Custom algorithms and high-performance systems for complex challenges
              </p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start">
              <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Computer vision systems for industrial quality control
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                AI governance tools for journalism against disinformation
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Optimization algorithms for logistics and supply chain
              </p>
            </div>
          </div>
          
          <Link 
            href={buildLocalizedUrl(locale as Locale, 'contact')} 
            className="inline-flex items-center text-sm font-medium hover:underline"
          >
            Request Consultation →
          </Link>
        </div>

      </div>

      {/* Supporting Services Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Supporting Services</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
            <h3 className="font-medium mb-1">Cloud Infrastructure</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Secure cloud migrations and hybrid architectures
            </p>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
            <h3 className="font-medium mb-1">Digital Transformation</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Legacy system modernization and process automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}