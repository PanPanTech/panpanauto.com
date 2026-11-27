type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

// Sends a GA4 event when gtag is loaded. Never pass contact details.
export function trackEvent(name: string, params: Record<string, string | number> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as GtagWindow).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
