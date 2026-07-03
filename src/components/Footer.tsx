import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        padding: 'var(--spacing-4)',
        borderTop: '1px solid var(--color-border)',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
        fontSize: '0.75rem',
      }}
    >
      <p>© 2026 QRLinkr</p>
    </footer>
  );
};
