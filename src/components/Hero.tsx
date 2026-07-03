import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: 'var(--spacing-12) var(--spacing-4)',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: 'var(--spacing-4)',
          fontFamily: 'var(--font-heading)',
        }}
      >
        Create beautiful QR codes for free.
      </h1>
      <p
        style={{
          fontSize: '1.25rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
        }}
      >
        No ads. No watermark. No account required.
      </p>
    </section>
  );
};
