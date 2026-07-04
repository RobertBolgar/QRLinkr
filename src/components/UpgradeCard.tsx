import React from 'react';
import { Button } from './Button';

interface UpgradeCardProps {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  destinationUrl: string;
}

export const UpgradeCard: React.FC<UpgradeCardProps> = ({
  title,
  description,
  features,
  buttonText,
  destinationUrl,
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-background-card, #1f2028)',
        border: '1px solid var(--color-border, #2e303a)',
        borderRadius: 'var(--radius-card, 12px)',
        padding: 'var(--spacing-6, 24px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        marginTop: 'var(--spacing-6, 24px)',
        animation: 'fadeIn 0.5s ease-in-out',
      }}
    >
      <h3
        style={{
          fontSize: '1.125rem',
          fontWeight: 600,
          marginBottom: 'var(--spacing-3, 12px)',
          fontFamily: 'var(--font-heading, system-ui)',
          color: 'var(--color-text-primary, #f3f4f6)',
        }}
      >
        {title}
      </h3>
      
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary, #9ca3af)',
          lineHeight: 1.5,
          marginBottom: 'var(--spacing-4, 16px)',
        }}
      >
        {description}
      </p>
      
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 var(--spacing-5, 20px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-2, 8px)',
        }}
      >
        {features.map((feature, index) => (
          <li
            key={index}
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary, #9ca3af)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2, 8px)',
            }}
          >
            <span style={{ color: 'var(--accent, #c084fc)' }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <Button
        variant="secondary"
        onClick={() => window.open(destinationUrl, '_blank')}
        style={{ width: '100%' }}
      >
        {buttonText}
      </Button>
    </div>
  );
};
