import { getServices, getServicesFromJson } from 'app/services/utils';
import useTranslation from 'next-translate/useTranslation';

export function Services() {
  let allBlogs = getServices();
  const { t, lang } = useTranslation('offers');
  let filename = `locales/${lang}/offers.json`;
  let services = getServicesFromJson(filename);

  return (
    <div>
      {services
        .sort((a, b) => {
          // Sort by 'title' or 'publishedAt' or any other property
          // Sorting by title alphabetically for this example
          return a.title.localeCompare(b.title); // Use localeCompare for string sorting
        })
        .map((service, index) => (
          <div key={index} className="m-2">
            <div className="w-full flex flex-col md:flex-row items-start p-1 bg-white dark:bg-neutral-800 rounded-t-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
              <span className="text-neutral-600 dark:text-neutral-400 w-[40px] tabular-nums">
                {service.icon} {/* Display the icon */}
              </span>
              <h2 className="text-neutral-900 dark:text-neutral-100 text-lg font-semibold tracking-tight">
                {service.title} {/* Display the title */}
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-500 text-sm mt-2 md:mt-0 p-2 bg-neutral-50 dark:bg-neutral-900 rounded-b-lg shadow-sm border-t-0 border-neutral-200 dark:border-neutral-700">
              {service.summary} {/* Display the description */}
            </p>
          </div>
        ))}
    </div>
  );
}
