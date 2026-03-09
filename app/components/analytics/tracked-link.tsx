'use client';

import type { ComponentPropsWithoutRef, MouseEvent } from 'react';
import Link, { type LinkProps } from 'next/link';
import { trackEvent } from 'app/lib/gtag';

type EventParams = Record<string, string | number | boolean | undefined>;

type TrackedLinkProps = LinkProps &
  Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
    eventName: string;
    eventParams?: EventParams;
  };

type TrackedAnchorProps = ComponentPropsWithoutRef<'a'> & {
  eventName: string;
  eventParams?: EventParams;
};

export function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, eventParams);
    onClick?.(event);
  };

  return <Link {...props} onClick={handleClick} />;
}

export function TrackedAnchor({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedAnchorProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackEvent(eventName, eventParams);
    onClick?.(event);
  };

  return <a {...props} onClick={handleClick} />;
}
