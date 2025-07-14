import { getTranslations, type Locale } from 'app/lib/translations';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocalizedUrl } from 'app/lib/url-translations';
import { projects } from 'app/lib/projects-data';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: 'Projects',
    description: 'Recent projects and implementations in security and data infrastructure',
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <section>
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tighter mb-4">
          Projects & Portfolio
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          Recent implementations showcasing our expertise in secure data infrastructure for LATAM's critical sectors.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {project.client} • {project.duration}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="mb-4 text-neutral-700 dark:text-neutral-300">
              {project.description}
            </p>
            
            <div className="mb-4">
              <h3 className="font-semibold text-sm mb-2">Key Outcomes</h3>
              <ul className="list-disc list-inside space-y-1">
                {project.outcomes.map((outcome, i) => (
                  <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-500">Tech Stack:</span>
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className="text-xs px-2 py-1 border border-neutral-300 dark:border-neutral-700 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Start Your Project</h2>
        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          Ready to transform your organization's data infrastructure? Our 16-week implementation program delivers measurable results.
        </p>
        <Link
          href={buildLocalizedUrl(locale as Locale, 'contact')}
          className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Discuss Your Project
        </Link>
      </div>
    </section>
  );
}