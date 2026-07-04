import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: 'var(--spacing-16) var(--spacing-4) var(--spacing-8)',
        maxWidth: '700px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          fontWeight: 600,
          marginBottom: 'var(--spacing-3)',
          fontFamily: 'var(--font-heading)',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          color: 'var(--color-text-primary)',
        }}
      >
        Create beautiful QR codes for free.
      </h1>
      <p
        style={{
          fontSize: 'clamp(0.8125rem, 1.25vw, 0.9375rem)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.5,
          maxWidth: '450px',
          margin: '0 auto',
        }}
      >
        No ads. No watermark. No account required. Generate high-quality QR codes in seconds.
      </p>
    </section>
  );
};
