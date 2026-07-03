import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: 'var(--spacing-20) var(--spacing-4) var(--spacing-12)',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 600,
          marginBottom: 'var(--spacing-4)',
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
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        No ads. No watermark. No account required. Generate high-quality QR codes in seconds.
      </p>
    </section>
  );
};
