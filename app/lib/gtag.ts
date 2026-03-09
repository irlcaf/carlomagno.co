type GtagValue = string | number | boolean | undefined;

type GtagParams = Record<string, GtagValue>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (
      command: 'config' | 'event' | 'js',
      target: string | Date,
      params?: GtagParams
    ) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function pageview(path: string) {
  if (!measurementId || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('config', measurementId, {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(eventName: string, params: GtagParams = {}) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, params);
}
