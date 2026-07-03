import React, { useState, useEffect } from 'react';
import { QrCode, Sparkles } from 'lucide-react';
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
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'var(--spacing-8)',
        alignItems: 'start',
      }}
    >
      <Card
        style={{
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-6)',
        }}
      >
        <div>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: 'var(--spacing-2)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            QR Generator
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.5,
            }}
          >
            Enter your website URL below to generate a high-quality QR code instantly.
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
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
              }}
            >
              QR Type
            </label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--spacing-2)',
              }}
            >
              {['URL', 'Text', 'Email'].map((type) => (
                <button
                  key={type}
                  disabled={type !== 'URL'}
                  style={{
                    padding: 'var(--spacing-3)',
                    borderRadius: 'var(--radius-input)',
                    backgroundColor: type === 'URL' 
                      ? 'var(--color-accent)' 
                      : 'var(--color-background-surface)',
                    border: type === 'URL' 
                      ? '1px solid var(--color-accent)' 
                      : '1px solid var(--color-border)',
                    color: type === 'URL' 
                      ? 'white' 
                      : 'var(--color-text-muted)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                cursor: type === 'URL' ? 'pointer' : 'not-allowed',
                opacity: type === 'URL' ? 1 : 0.5,
                transition: 'all 150ms ease',
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
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
              }}
            >
              Website URL
            </label>
            <Input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{
                minHeight: '48px',
              }}
            />
            {error && (
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-error)',
                  marginTop: 'var(--spacing-1)',
                }}
              >
                {error}
              </p>
            )}
          </div>
        </div>
      </Card>

      <Card
        style={{
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--spacing-6)',
          background: 'linear-gradient(135deg, var(--color-background-card) 0%, rgba(255, 107, 44, 0.03) 100%)',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '280px',
            height: '280px',
            borderRadius: 'var(--radius-card)',
            background: 'linear-gradient(135deg, var(--color-background-surface) 0%, var(--color-background-card) 100%)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
          }}
        >
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="QR Code"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: 'var(--spacing-4)',
              }}
            />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-3)',
                color: 'var(--color-text-muted)',
              }}
            >
              <QrCode size={64} style={{ opacity: 0.3 }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                {isGenerating ? 'Generating...' : 'QR Preview'}
              </span>
            </div>
          )}
          {qrDataUrl && (
            <div
              style={{
                position: 'absolute',
                top: 'var(--spacing-3)',
                right: 'var(--spacing-3)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-accent) 0%, #ff8c5a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(255, 107, 44, 0.3)',
              }}
            >
              <Sparkles size={16} style={{ color: 'white' }} />
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-3)',
            width: '100%',
          }}
        >
          <Button
            variant="secondary"
            onClick={handleDownloadPNG}
            disabled={!qrDataUrl}
            style={{ flex: 1 }}
          >
            Download PNG
          </Button>
          <Button
            variant="primary"
            onClick={handleDownloadSVG}
            disabled={!qrDataUrl}
            style={{ flex: 1 }}
          >
            Download SVG
          </Button>
        </div>
      </Card>
    </div>
  );
};
