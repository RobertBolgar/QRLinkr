/**
 * Validation utilities
 * 
 * These utilities are intentionally isolated from UI components
 * to enable reuse across QRLinkr and TubeLinkr.
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate a URL
 * 
 * @param url - The URL to validate
 * @returns Validation result
 */
export function validateURL(url: string): ValidationResult {
  if (!url || url.trim() === '') {
    return {
      isValid: false,
      error: 'URL is required',
    };
  }

  try {
    // Add protocol if missing
    let urlToValidate = url.trim();
    if (!urlToValidate.startsWith('http://') && !urlToValidate.startsWith('https://')) {
      urlToValidate = `https://${urlToValidate}`;
    }

    const urlObj = new URL(urlToValidate);
    
    // Check for valid protocol
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      return {
        isValid: false,
        error: 'URL must use HTTP or HTTPS protocol',
      };
    }

    // Check for valid hostname
    if (!urlObj.hostname) {
      return {
        isValid: false,
        error: 'Invalid URL hostname',
      };
    }

    return {
      isValid: true,
    };
  } catch (error) {
    return {
      isValid: false,
      error: 'Invalid URL format',
    };
  }
}

/**
 * Normalize a URL by adding protocol if missing
 * 
 * @param url - The URL to normalize
 * @returns Normalized URL
 */
export function normalizeURL(url: string): string {
  if (!url) return '';
  
  const trimmed = url.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  
  return `https://${trimmed}`;
}
