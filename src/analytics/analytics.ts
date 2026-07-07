/**
 * Google Analytics 4 Integration
 * 
 * This module handles Google Analytics initialization and page view tracking.
 * It only loads GA4 when VITE_GA_MEASUREMENT_ID is configured.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initialize Google Analytics 4
 * Loads the gtag script and configures GA4 if measurement ID is provided
 */
export function initAnalytics(): void {
  if (!GA_MEASUREMENT_ID) {
    // No measurement ID configured - skip analytics initialization
    return;
  }

  // Create gtag function
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    (window.dataLayer || []).push(arguments);
  };

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Configure GA4
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll handle page views manually
  });
}

/**
 * Track a page view
 * Call this when route changes occur
 */
export function trackPageView(path: string, title?: string): void {
  if (!GA_MEASUREMENT_ID || !window.gtag) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
  });
}

/**
 * Check if analytics is enabled
 */
export function isAnalyticsEnabled(): boolean {
  return !!GA_MEASUREMENT_ID;
}
