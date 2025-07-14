'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 5C7 3.34315 5.65685 2 4 2C2.34315 2 1 3.34315 1 5C1 6.65685 2.34315 8 4 8C4.35064 8 4.68722 7.94398 5 7.84078L6.5 9.34078L7.5 8.34078L8.5 9.34078L9.5 8.34078L10.5 9.34078L11 8.84078L11 7.5L7.84078 4.34078C7.94398 4.01356 8 3.51283 8 3C8 2.44772 7.55228 2 7 2ZM3 5C3 4.44772 3.44772 4 4 4C4.55228 4 5 4.44772 5 5C5 5.55228 4.55228 6 4 6C3.44772 6 3 5.55228 3 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] as Locale;
  
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <Link
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href={buildLocalizedUrl(locale, 'contact')}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Email</p>
          </Link>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/irlcaf"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/carlomagnoaf/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/irlcaf"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">X</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/carlomagno-pgp.asc"
            download
            title="Download PGP Public Key"
          >
            <KeyIcon />
            <p className="ml-2 h-7">PGP Key</p>
          </a>
        </li>
      </ul>
      <div className="mt-8 space-y-2">
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          PGP: 9E59 7104 27B7 CBB3 3EA8 39F9 E8CC F0AA 54BE F63B{' '}
          <Link 
            href={buildLocalizedUrl(locale, 'pgp')} 
            className="underline hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            (Learn more)
          </Link>
        </p>
        <p className="text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} MIT Licensed
        </p>
      </div>
    </footer>
  );
}
