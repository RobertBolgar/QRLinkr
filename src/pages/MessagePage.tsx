import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MessageSquare, QrCode } from 'lucide-react';
import { Button } from '../components/Button';

/**
 * URL-safe decoding for messages
 */
function decodeMessage(encoded: string): string {
  return decodeURIComponent(encoded);
}

export const MessagePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const textParam = searchParams.get('text');

    if (textParam) {
      try {
        const decoded = decodeMessage(textParam);
        setMessage(decoded);
        setError(false);
      } catch (err) {
        setError(true);
        setMessage('');
      }
    } else {
      setError(true);
      setMessage('');
    }
    
    // Trigger animation after content loads
    setTimeout(() => setIsLoaded(true), 100);
  }, [searchParams]);

  const isShortMessage = message.length < 50;
  const isLongMessage = message.length > 100;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--color-background-primary)',
        padding: 'var(--spacing-4) var(--spacing-4) var(--spacing-8)',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
          transition: 'opacity 400ms ease-out, transform 400ms ease-out',
        }}
      >
        {/* Icon - smaller and subtler */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <MessageSquare size={24} style={{ color: '#FFFFFF' }} />
        </div>

        {/* Content */}
        {error ? (
          <>
            <div style={{ textAlign: 'center', padding: '0 var(--spacing-4)' }}>
              <h1
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: 'var(--spacing-2)',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                No Message Found
              </h1>
              <p
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                This QR code doesn't contain a message. Make sure you're scanning the correct QR code.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Subtle label */}
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'var(--color-text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--spacing-3)',
              }}
            >
              Message for You
            </p>
            
            {/* Message - the hero */}
            <div
              style={{
                width: '100%',
                padding: isShortMessage ? 'var(--spacing-8) var(--spacing-6)' : 'var(--spacing-6)',
                backgroundColor: 'var(--color-background-surface)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                marginBottom: 'var(--spacing-6)',
                minHeight: isShortMessage ? '200px' : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  fontSize: isShortMessage ? '1.75rem' : isLongMessage ? '1.125rem' : '1.375rem',
                  fontWeight: isShortMessage ? 500 : 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: isShortMessage ? 1.4 : 1.6,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  textAlign: 'center',
                }}
              >
                {message}
              </p>
            </div>
          </>
        )}

        {/* CTA */}
        <div style={{ width: '100%', marginBottom: 'var(--spacing-4)' }}>
          <Button
            variant="secondary"
            onClick={() => navigate('/')}
            style={{ width: '100%' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-2)' }}>
              <QrCode size={16} />
              Create a QR Like This
            </div>
          </Button>
        </div>

        {/* Branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)',
            fontSize: '0.8125rem',
            color: 'var(--color-text-secondary)',
          }}
        >
          <QrCode size={12} />
          <span>Made with QRLinkr</span>
        </div>
      </div>
    </div>
  );
};
