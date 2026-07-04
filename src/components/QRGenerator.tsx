import React, { useState, useEffect } from 'react';
import { QrCode } from 'lucide-react';
import { Card } from './Card';
import { Input } from './Input';
import { Button } from './Button';
import { QRService } from '../services/qrService';
import { validateURL, normalizeURL } from '../utils/validation';

export const QRGenerator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloadingSVG, setIsDownloadingSVG] = useState(false);

  useEffect(() => {
    const generateQR = async () => {
      if (!url.trim()) {
        setQrDataUrl(null);
        setError(null);
        return;
      }

      const validation = validateURL(url);
      if (!validation.isValid) {
        setError(validation.error || null);
        setQrDataUrl(null);
        return;
      }

      setError(null);
      setIsGenerating(true);

      const normalizedUrl = normalizeURL(url);
      const result = await QRService.generateQR(normalizedUrl, {
        width: 300,
        margin: 2,
        errorCorrectionLevel: 'M',
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });

      setIsGenerating(false);

      if (result.success && result.dataUrl) {
        setQrDataUrl(result.dataUrl);
      } else {
        setError(result.error || 'Failed to generate QR code');
        setQrDataUrl(null);
      }
    };

    const debounceTimer = setTimeout(generateQR, 300);
    return () => clearTimeout(debounceTimer);
  }, [url]);

  const handleDownloadPNG = () => {
    if (!qrDataUrl) return;
    
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadSVG = async () => {
    if (!url) return;

    setIsDownloadingSVG(true);
    setError(null);

    try {
      const normalizedUrl = normalizeURL(url);
      const result = await QRService.generateQRSVG(normalizedUrl, {
        width: 300,
        margin: 2,
        errorCorrectionLevel: 'M',
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });

      if (result.success && result.dataUrl) {
        const link = document.createElement('a');
        link.href = result.dataUrl;
        link.download = 'qrcode.svg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setError(result.error || 'Failed to generate SVG');
      }
    } catch (err) {
      setError('Failed to download SVG');
    } finally {
      setIsDownloadingSVG(false);
    }
  };

  return (
    <Card
      style={{
        padding: 'var(--spacing-6)',
      }}
    >
      <div
        className="qr-generator-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-6)',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div>
            <h2
              style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                marginBottom: 'var(--spacing-1)',
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
              }}
            >
              QR Generator
            </h2>
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.4,
              }}
            >
              Enter your website URL to generate a QR code.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-2)',
              }}
            >
              <label
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                QR Type
              </label>
              <div
                role="radiogroup"
                aria-label="QR Type Selection"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1px',
                  padding: '1px',
                  backgroundColor: 'var(--color-border)',
                  borderRadius: 'var(--radius-input)',
                }}
              >
                {['URL', 'Text', 'Email'].map((type) => (
                  <button
                    key={type}
                    role="radio"
                    aria-checked={type === 'URL'}
                    disabled={type !== 'URL'}
                    aria-disabled={type !== 'URL'}
                    style={{
                      padding: 'var(--spacing-2) var(--spacing-3)',
                      borderRadius: 'calc(var(--radius-input) - 1px)',
                      backgroundColor: type === 'URL' 
                        ? 'var(--color-background-card)' 
                        : 'var(--color-background-surface)',
                      border: 'none',
                      color: type === 'URL' 
                        ? 'var(--color-text-primary)' 
                        : 'var(--color-text-muted)',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      cursor: type === 'URL' ? 'pointer' : 'not-allowed',
                      transition: 'all 200ms ease',
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-2)',
              }}
            >
              <label
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Website URL
              </label>
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {error && (
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-error)',
                  }}
                >
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-4)',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-5)',
              padding: 'var(--spacing-5)',
              backgroundColor: 'var(--color-background-surface)',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '220px',
                height: '220px',
                borderRadius: 'var(--radius-input)',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
              role="img"
              aria-label={qrDataUrl ? `QR code for ${url}` : 'QR code preview'}
            >
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt={`QR code for ${url}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: 'var(--spacing-3)',
                  }}
                />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--spacing-2)',
                    color: '#A1A1AA',
                  }}
                  aria-live="polite"
                >
                  <QrCode size={48} style={{ opacity: 0.3 }} aria-hidden="true" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>
                    {isGenerating ? 'Generating...' : 'Preview'}
                  </span>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)', width: '100%' }}>
              <Button
                variant="primary"
                onClick={handleDownloadPNG}
                disabled={!qrDataUrl}
                style={{ width: '100%' }}
              >
                Download PNG
              </Button>
              <Button
                variant="secondary"
                onClick={handleDownloadSVG}
                disabled={!qrDataUrl || isDownloadingSVG}
                style={{ width: '100%' }}
              >
                {isDownloadingSVG ? 'Downloading...' : 'Download SVG'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
