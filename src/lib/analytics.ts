import { useEffect } from "react";

// Plausible analytics helpers — cookie-free, GDPR-friendly.
// The script is loaded in src/routes/__root.tsx head().

type PlausibleEvent = "pageview" | string;

type PlausibleEventOptions = {
  props?: Record<string, string | number | boolean>;
  u?: string; // page URL override
  callback?: () => void;
};

export type PlausibleFn = (
  event: PlausibleEvent,
  options?: PlausibleEventOptions,
) => void;

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

const queued: Array<Parameters<PlausibleFn>> = [];

/**
 * Send a Plausible event. If the script hasn't loaded yet, the event is queued
 * and flushed once plausible becomes available.
 */
export function trackPlausible(event: PlausibleEvent, options?: PlausibleEventOptions) {
  if (typeof window === "undefined") return;

  if (window.plausible) {
    window.plausible(event, options);
    return;
  }

  queued.push([event, options]);

  // Flush once plausible becomes available (script may still be loading).
  const flushInterval = window.setInterval(() => {
    if (window.plausible) {
      window.clearInterval(flushInterval);
      while (queued.length) {
        const args = queued.shift();
        if (args) window.plausible(...args);
      }
    }
  }, 250);

  // Stop trying after 10 seconds.
  window.setTimeout(() => window.clearInterval(flushInterval), 10_000);
}

const SECTIONS = [
  "what-we-check",
  "how-it-works",
  "pricing",
  "sample-report",
  "transparency",
  "about",
  "faq",
  "contact",
];

/**
 * Track which sections a visitor actually sees. Fires once per section per page
 * load after the section has been in the viewport for at least 2 seconds.
 */
export function usePlausibleSectionTracking() {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const seen = new Set<string>();
    const timers = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) return;

          if (entry.isIntersecting) {
            timers.set(
              id,
              window.setTimeout(() => {
                if (!seen.has(id)) {
                  seen.add(id);
                  trackPlausible("Section Viewed", { props: { section: id } });
                }
              }, 2000),
            );
          } else {
            const timer = timers.get(id);
            if (timer) {
              window.clearTimeout(timer);
              timers.delete(id);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
}

/**
 * Track hash changes as pageviews so anchor navigation through the one-page
 * site is still reflected in analytics.
 */
export function usePlausibleHashPageviews() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sendHashPageview = () => {
      trackPlausible("pageview", { u: window.location.href });
    };

    window.addEventListener("hashchange", sendHashPageview);
    return () => window.removeEventListener("hashchange", sendHashPageview);
  }, []);
}
