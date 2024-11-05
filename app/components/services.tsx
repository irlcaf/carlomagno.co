import Link from 'next/link';
import { getServices } from 'app/services/utils';

export function Services() {
  let allBlogs = getServices();
  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (true) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/service/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[40px] tabular-nums">
                {post.metadata.icon}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
