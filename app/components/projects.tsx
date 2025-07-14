import { projects } from 'app/lib/projects-data';
import { formatDate } from 'app/[locale]/blog/utils';
import Link from 'next/link';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

export function Projects({ featured = false, locale = 'en' }: { featured?: boolean; locale?: string }) {
  const displayProjects = featured 
    ? projects.filter(p => p.featured) 
    : projects;

  // Sort by date descending
  const sortedProjects = [...displayProjects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div>
      {sortedProjects.map((project, index) => (
        <Link
          key={index}
          className="flex flex-col space-y-1 mb-4"
          href={buildLocalizedUrl(locale as Locale, 'projects')}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDate(project.date, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {project.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}