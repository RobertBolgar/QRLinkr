import React from 'react';
import { QrCode } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--spacing-4) var(--spacing-6)',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-background-primary)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-3)',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-input)',
            backgroundColor: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <QrCode size={16} style={{ color: 'white' }} />
        </div>
        <span
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.01em',
            color: 'var(--color-text-primary)',
          }}
        >
          QRLinkr
        </span>
      </div>
    </header>
  );
};
