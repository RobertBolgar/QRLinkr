import React, { useState, useEffect } from 'react';
import { QrCode, Globe, MessageSquare, Check, Download, Zap, Share2 } from 'lucide-react';
import { Card } from './Card';
import { Input } from './Input';
import { Button } from './Button';
import { UpgradeCard } from './UpgradeCard';
import { QRService } from '../services/qrService';
import { validateURL, normalizeURL } from '../utils/validation';

type GenerationMode = 'website' | 'message';

const MAX_MESSAGE_LENGTH = 160;

export const QRGenerator: React.FC = () => {
  const [mode, setMode] = useState<GenerationMode>('website');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloadingSVG, setIsDownloadingSVG] = useState(false);

  useEffect(() => {
    const generateQR = async () => {
      if (mode === 'website') {
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
      } else {
        // Message mode
        if (!message.trim()) {
          setQrDataUrl(null);
          setError(null);
          return;
        }

        if (message.length > MAX_MESSAGE_LENGTH) {
          setError(`Message must be ${MAX_MESSAGE_LENGTH} characters or less`);
          setQrDataUrl(null);
          return;
        }

        setError(null);
        setIsGenerating(true);

        // Encode message as hosted URL
        const encodedMessage = encodeURIComponent(message);
        const messageUrl = `${window.location.origin}/message?text=${encodedMessage}`;
        
        const result = await QRService.generateQR(messageUrl, {
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
      }
    };

    const debounceTimer = setTimeout(generateQR, 300);
    return () => clearTimeout(debounceTimer);
  }, [mode, url, message]);

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
    const content = mode === 'website' ? url : message;
    if (!content) return;

    setIsDownloadingSVG(true);
    setError(null);

    try {
      let contentToEncode: string;
      if (mode === 'website') {
        contentToEncode = normalizeURL(url);
      } else {
        const encodedMessage = encodeURIComponent(message);
        contentToEncode = `${window.location.origin}/message?text=${encodedMessage}`;
      }
      const result = await QRService.generateQRSVG(contentToEncode, {
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

  const handleShare = async () => {
    if (!qrDataUrl) return;

    try {
      // Convert data URL to Blob
      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      const file = new File([blob], 'qrcode.png', { type: 'image/png' });

      // Check if Web Share API with file sharing is supported
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'QR Code',
          text: mode === 'website' ? `QR code for ${url}` : `QR code message: ${message}`,
        });
      } else {
        // Fallback: open image in new tab for long-press save
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(`
            <html>
              <head><title>QR Code</title></head>
              <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#f5f5f5;">
                <img src="${qrDataUrl}" alt="QR Code" style="max-width:100%;height:auto;padding:20px;">
                <p style="position:fixed;bottom:20px;width:100%;text-align:center;color:#666;font-size:14px;">
                  Long-press the image to save to Photos
                </p>
              </body>
            </html>
          `);
          newWindow.document.close();
        }
      }
    } catch (err) {
      // User cancelled share or error occurred
      console.error('Share failed:', err);
    }
  };

  return (
    <Card
      style={{
        padding: 'var(--spacing-8)',
      }}
    >
      <div
        className="qr-generator-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-8)',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          {/* Mode Selector */}
          <div
            style={{
              display: 'flex',
              gap: 'var(--spacing-1)',
              padding: 'var(--spacing-1)',
              backgroundColor: 'var(--color-background-surface)',
              borderRadius: 'var(--radius-input)',
              border: '1px solid var(--color-border)',
            }}
          >
            <button
              onClick={() => setMode('website')}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-2)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'calc(var(--radius-input) - 3px)',
                border: 'none',
                backgroundColor: mode === 'website' ? 'var(--color-primary)' : 'transparent',
                color: mode === 'website' ? '#FFFFFF' : 'var(--color-text-secondary)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 150ms ease',
                boxShadow: mode === 'website' ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
              }}
            >
              <Globe size={16} />
              Website
            </button>
            <button
              onClick={() => setMode('message')}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-2)',
                padding: 'var(--spacing-2) var(--spacing-4)',
                borderRadius: 'calc(var(--radius-input) - 3px)',
                border: 'none',
                backgroundColor: mode === 'message' ? 'var(--color-primary)' : 'transparent',
                color: mode === 'message' ? '#FFFFFF' : 'var(--color-text-secondary)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 150ms ease',
                boxShadow: mode === 'message' ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none',
              }}
            >
              <MessageSquare size={16} />
              Message
            </button>
          </div>

          <div>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: 'var(--spacing-2)',
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
              }}
            >
              {mode === 'website' ? 'Website QR Code' : 'Message QR Code'}
            </h2>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.5,
              }}
            >
              {mode === 'website'
                ? 'Enter a website address to instantly generate a high-quality QR code.'
                : 'Create a QR code that opens a custom message when scanned.'}
            </p>
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
              {mode === 'website' ? 'Website URL' : 'Your Message'}
            </label>
            {mode === 'website' ? (
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            ) : (
              <>
                <textarea
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={MAX_MESSAGE_LENGTH}
                  style={{
                    width: '100%',
                    minHeight: '120px',
                    padding: 'var(--spacing-3) var(--spacing-4)',
                    borderRadius: 'var(--radius-input)',
                    backgroundColor: 'var(--color-background-surface)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-primary)',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    transition: 'border-color 150ms ease, box-shadow 150ms ease',
                    resize: 'vertical',
                  }}
                />
                <p
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-secondary)',
                    marginTop: 'var(--spacing-1)',
                  }}
                >
                  Keep it short. Your message is stored inside the QR code link.
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {message.length} / {MAX_MESSAGE_LENGTH} characters
                  </span>
                  {message.length > MAX_MESSAGE_LENGTH * 0.9 && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-error)',
                      }}
                    >
                      Keep it short
                    </span>
                  )}
                </div>
              </>
            )}
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

          {/* Feature Highlights - Desktop Only */}
          <div className="feature-highlights">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Check size={16} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                Free forever, no account required
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Download size={16} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                PNG + SVG downloads, no watermark
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <Zap size={16} style={{ color: 'var(--color-primary)' }} />
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-secondary)' }}>
                Instant generation, 100% client-side
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-5)',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-5)',
              padding: 'var(--spacing-6)',
              backgroundColor: 'var(--color-background-surface)',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '240px',
                height: '240px',
                borderRadius: 'var(--radius-input)',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 48px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)',
              }}
              role="img"
              aria-label={qrDataUrl ? `QR code for ${mode === 'website' ? url : message}` : 'QR code preview'}
            >
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt={`QR code for ${mode === 'website' ? url : message}`}
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
              {qrDataUrl && (
                <Button
                  variant="secondary"
                  onClick={handleShare}
                  style={{ 
                    width: '100%',
                    display: 'none',
                  }}
                  className="share-button"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-2)' }}>
                    <Share2 size={16} />
                    Share / Save to Photos
                  </div>
                </Button>
              )}
            </div>

            {qrDataUrl && (
              <UpgradeCard
                title="Want to know who scans your QR code?"
                description="Your QR code works great. If you'd like to track scans, measure traffic, and see which marketing campaigns perform best, create a free Smart Link with TubeLinkr and generate a trackable QR code."
                features={[
                  'Track QR scans',
                  'Measure clicks',
                  'Create Smart Links',
                  'View Traffic Proof',
                ]}
                buttonText="Track This QR with TubeLinkr →"
                destinationUrl="https://rob.tubelinkr.com/invite/c1"
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
