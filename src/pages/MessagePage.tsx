import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MessageSquare, QrCode } from 'lucide-react';
import { Card } from '../components/Card';
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
  }, [searchParams]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--color-background-primary)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: 'var(--spacing-8) var(--spacing-4)',
          width: '100%',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          style={{
            padding: 'var(--spacing-8)',
            maxWidth: '600px',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--spacing-6)',
              textAlign: 'center',
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MessageSquare size={40} style={{ color: '#FFFFFF' }} />
            </div>

            {/* Content */}
            {error ? (
              <>
                <div>
                  <h1
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      marginBottom: 'var(--spacing-3)',
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    No Message Found
                  </h1>
                  <p
                    style={{
                      fontSize: '1rem',
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
                <div>
                  <h1
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      marginBottom: 'var(--spacing-3)',
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    Message for You
                  </h1>
                  <div
                    style={{
                      padding: 'var(--spacing-6)',
                      backgroundColor: 'var(--color-background-surface)',
                      borderRadius: 'var(--radius-card)',
                      border: '1px solid var(--color-border)',
                      minHeight: '120px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.6,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                      }}
                    >
                      {message}
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* CTA */}
            <div style={{ width: '100%' }}>
              <Button
                variant="secondary"
                onClick={() => navigate('/')}
                style={{ width: '100%' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-2)' }}>
                  <QrCode size={16} />
                  Create Your Own QR Message
                </div>
              </Button>
            </div>

            {/* Branding */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-2)',
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
              }}
            >
              <QrCode size={14} />
              <span>Powered by QRLinkr</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
