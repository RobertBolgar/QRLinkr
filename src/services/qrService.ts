import QRCode from 'qrcode';

export interface QROptions {
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  margin?: number;
  width?: number;
  color?: {
    dark?: string;
    light?: string;
  };
}

export interface QRGenerationResult {
  success: boolean;
  dataUrl?: string;
  error?: string;
}

/**
 * QR Generation Service
 * 
 * This service is intentionally isolated from UI components
 * to enable reuse across QRLinkr and TubeLinkr.
 */
export class QRService {
  /**
   * Generate a QR code as a data URL
   * 
   * @param content - The content to encode in the QR code
   * @param options - QR code generation options
   * @returns Promise with generation result
   */
  static async generateQR(
    content: string,
    options: QROptions = {}
  ): Promise<QRGenerationResult> {
    try {
      const {
        errorCorrectionLevel = 'M',
        margin = 2,
        width = 300,
        color = {
          dark: '#000000',
          light: '#FFFFFF',
        },
      } = options;

      const dataUrl = await QRCode.toDataURL(content, {
        errorCorrectionLevel,
        margin,
        width,
        color,
      });

      return {
        success: true,
        dataUrl,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to generate QR code',
      };
    }
  }

  /**
   * Generate a QR code as SVG string
   * 
   * @param content - The content to encode in the QR code
   * @param options - QR code generation options
   * @returns Promise with generation result
   */
  static async generateQRSVG(
    content: string,
    options: QROptions = {}
  ): Promise<QRGenerationResult> {
    try {
      const {
        errorCorrectionLevel = 'M',
        margin = 2,
        width = 300,
        color = {
          dark: '#000000',
          light: '#FFFFFF',
        },
      } = options;

      const svg = await QRCode.toString(content, {
        type: 'svg',
        errorCorrectionLevel,
        margin,
        width,
        color,
      });

      return {
        success: true,
        dataUrl: `data:image/svg+xml;base64,${btoa(svg)}`,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to generate QR code',
      };
    }
  }
}
