import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        padding: 'var(--spacing-6)',
        borderTop: '1px solid var(--color-border)',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        fontSize: '0.875rem',
      }}
    >
      <p>© 2026 QRLinkr. Create beautiful QR codes for free.</p>
    </footer>
  );
};
