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
        backdropFilter: 'blur(10px)',
        background: 'rgba(9, 9, 11, 0.8)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
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
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-input)',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #ff8c5a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(255, 107, 44, 0.3)',
          }}
        >
          <QrCode size={20} style={{ color: 'white' }} />
        </div>
        <span
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
          }}
        >
          QRLinkr
        </span>
      </div>
    </header>
  );
};
