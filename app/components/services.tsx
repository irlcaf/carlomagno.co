import Link from 'next/link';
import { getServices } from 'app/services/utils';

export function Services() {
  let allBlogs = getServices();
  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (false) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/services/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row items-start space-x-0 md:space-x-4 p-4 bg-white dark:bg-neutral-800 rounded-t-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
              <span className="text-neutral-600 dark:text-neutral-400 w-[40px] tabular-nums">
                {post.metadata.icon}
              </span>
              <h2 className="text-neutral-900 dark:text-neutral-100 text-lg font-semibold tracking-tight">
                {post.metadata.title}
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-500 text-sm mt-2 md:mt-0 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-b-lg shadow-sm border-t-0 border-neutral-200 dark:border-neutral-700">
              {post.metadata.summary}
            </p>
          </Link>
        ))}
    </div>
  );
}
