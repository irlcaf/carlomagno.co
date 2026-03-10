'use client';

import { usePathname } from 'next/navigation';
import { TrackedAnchor, TrackedLink } from './analytics/tracked-link';
import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

const emailLabel = {
  en: 'Email',
  es: 'Correo',
  zh: '邮件',
} as const;

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

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.25 1.25H10.75V4.75"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.25 1.75L5.5 6.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.75V9.25C9 9.66421 8.66421 10 8.25 10H2.75C2.33579 10 2 9.66421 2 9.25V3.75C2 3.33579 2.33579 3 2.75 3H5.25"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const locale = (pathname.split('/')[1] as Locale) || 'en';
  
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <TrackedAnchor
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://toukan.dev"
            eventName="outbound_click"
            eventParams={{ site: 'carlomagno', locale, target: 'toukan_footer' }}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">toukan.dev</p>
            <span className="ml-1">
              <ExternalLinkIcon />
            </span>
          </TrackedAnchor>
        </li>
        <li>
          <TrackedLink
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href={buildLocalizedUrl(locale, 'contact')}
            eventName="contact_open"
            eventParams={{ site: 'carlomagno', locale, target: 'footer' }}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">{emailLabel[locale] || emailLabel.en}</p>
          </TrackedLink>
        </li>
        <li>
          <TrackedAnchor
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/irlcaf"
            eventName="outbound_click"
            eventParams={{ site: 'carlomagno', locale, target: 'github' }}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </TrackedAnchor>
        </li>
        <li>
          <TrackedAnchor
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/carlomagnoaf/"
            eventName="outbound_click"
            eventParams={{ site: 'carlomagno', locale, target: 'linkedin' }}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </TrackedAnchor>
        </li>
        <li>
          <TrackedAnchor
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/irlcaf"
            eventName="outbound_click"
            eventParams={{ site: 'carlomagno', locale, target: 'x' }}
          >
            <ArrowIcon />
            <p className="ml-2 h-7">X</p>
          </TrackedAnchor>
        </li>
      </ul>
    </footer>
  );
}
