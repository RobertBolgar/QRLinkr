import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`
        background-color: var(--color-background-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-card);
        padding: var(--spacing-6);
        ${className}
      `}
      style={{
        backgroundColor: 'var(--color-background-card)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--spacing-6)',
      }}
    >
      {children}
    </div>
  );
};
