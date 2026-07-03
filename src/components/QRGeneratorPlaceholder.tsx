import React from 'react';
import { QrCode, Sparkles } from 'lucide-react';
import { Card } from './Card';

export const QRGeneratorPlaceholder: React.FC = () => {
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
            Enter your content below to generate a high-quality QR code instantly.
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
                  style={{
                    padding: 'var(--spacing-3)',
                    borderRadius: 'var(--radius-input)',
                    backgroundColor: 'var(--color-background-surface)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
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
              Content
            </label>
            <div
              style={{
                minHeight: '120px',
                padding: 'var(--spacing-4)',
                borderRadius: 'var(--radius-input)',
                backgroundColor: 'var(--color-background-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              Enter your URL or text here...
            </div>
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
          }}
        >
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
              QR Preview
            </span>
          </div>
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
        </div>

        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-3)',
            width: '100%',
          }}
        >
          <button
            style={{
              flex: 1,
              padding: 'var(--spacing-3) var(--spacing-4)',
              borderRadius: 'var(--radius-button)',
              backgroundColor: 'var(--color-background-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
          >
            Download PNG
          </button>
          <button
            style={{
              flex: 1,
              padding: 'var(--spacing-3) var(--spacing-4)',
              borderRadius: 'var(--radius-button)',
              backgroundColor: 'var(--color-accent)',
              border: 'none',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 150ms ease',
            }}
          >
            Download SVG
          </button>
        </div>
      </Card>
    </div>
  );
};
