import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { MessageSquare, QrCode } from 'lucide-react';

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
        padding: 'var(--spacing-2) var(--spacing-4) var(--spacing-8)',
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
        {/* Icon with subtle glow */}
        <div
          style={{
            position: 'relative',
            marginBottom: 'var(--spacing-1)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(170, 59, 255, 0.15) 0%, rgba(170, 59, 255, 0) 70%)',
              filter: 'blur(8px)',
            }}
          />
          <div
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MessageSquare size={20} style={{ color: '#FFFFFF' }} />
          </div>
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
                fontSize: '0.75rem',
                color: 'var(--color-text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--spacing-1)',
                opacity: 0.7,
              }}
            >
              Message for You
            </p>
            
            {/* Message - the hero */}
            <div
              style={{
                width: '100%',
                padding: isShortMessage ? 'var(--spacing-6) var(--spacing-5)' : 'var(--spacing-5)',
                backgroundColor: 'var(--color-background-surface)',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                marginBottom: 'var(--spacing-2)',
                minHeight: isShortMessage ? '180px' : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  fontSize: isShortMessage ? '2rem' : isLongMessage ? '1.125rem' : '1.375rem',
                  fontWeight: isShortMessage ? 500 : 400,
                  color: 'var(--color-text-primary)',
                  lineHeight: isShortMessage ? 1.3 : 1.6,
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
        <div
          style={{
            width: '100%',
            marginBottom: 'var(--spacing-2)',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '1.15rem',
              fontWeight: 600,
              marginBottom: 'var(--spacing-1)',
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)',
            }}
          >
            Surprise Someone Else
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.5,
              marginBottom: 'var(--spacing-4)',
            }}
          >
            Create your own free QR message in seconds.
          </p>
          <button
            onClick={() => navigate('/')}
            style={{
              width: '100%',
              padding: '10px var(--spacing-5)',
              borderRadius: 'var(--radius-button)',
              fontWeight: 600,
              fontSize: '0.875rem',
              backgroundColor: '#FF6B2C',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'all 200ms ease',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--spacing-2)',
              boxShadow: '0 0 16px rgba(255, 107, 44, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 107, 44, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 16px rgba(255, 107, 44, 0.15)';
            }}
          >
            Create My QR →
          </button>
        </div>

        {/* Branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-2)',
            fontSize: '0.75rem',
            color: 'var(--color-text-tertiary)',
          }}
        >
          <QrCode size={10} />
          <span>Made with QRLinkr</span>
        </div>
      </div>
    </div>
  );
};
