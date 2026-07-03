import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: 'var(--spacing-24) var(--spacing-4) var(--spacing-16)',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: 'var(--spacing-2) var(--spacing-4)',
          borderRadius: 'var(--radius-button)',
          background: 'linear-gradient(135deg, rgba(255, 107, 44, 0.1) 0%, rgba(255, 107, 44, 0.05) 100%)',
          border: '1px solid rgba(255, 107, 44, 0.2)',
          marginBottom: 'var(--spacing-6)',
        }}
      >
        <span
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-accent)',
            letterSpacing: '0.02em',
          }}
        >
          Free forever
        </span>
      </div>
      <h1
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          marginBottom: 'var(--spacing-6)',
          fontFamily: 'var(--font-heading)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #A1A1AA 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Create beautiful QR codes for free.
      </h1>
      <p
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        No ads. No watermark. No account required. Generate high-quality QR codes in seconds.
      </p>
    </section>
  );
};
