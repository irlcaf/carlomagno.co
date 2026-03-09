'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from 'app/lib/gtag';

export function GoogleAnalyticsPageview() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    pageview(pathname);
  }, [pathname]);

  return null;
}
