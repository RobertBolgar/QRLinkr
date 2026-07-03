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
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-3)',
        }}
      >
        <QrCode size={32} style={{ color: 'var(--color-accent)' }} />
        <span
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
          }}
        >
          QRLinkr
        </span>
      </div>
    </header>
  );
};
