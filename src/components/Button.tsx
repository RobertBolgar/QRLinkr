import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = `
    padding: var(--spacing-3) var(--spacing-6);
    border-radius: var(--radius-button);
    font-weight: 500;
    font-size: 0.875rem;
    transition: all 150ms ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
  `;

  const variantStyles = {
    primary: `
      background-color: var(--color-accent);
      color: white;
    `,
    secondary: `
      background-color: var(--color-background-surface);
      border: 1px solid var(--color-border);
      color: var(--color-text-primary);
    `,
    ghost: `
      background-color: transparent;
      color: var(--color-text-primary);
    `,
  };

  const hoverStyles = {
    primary: `
      &:hover:not(:disabled) {
        opacity: 0.9;
      }
    `,
    secondary: `
      &:hover:not(:disabled) {
        border-color: var(--color-text-secondary);
      }
    `,
    ghost: `
      &:hover:not(:disabled) {
        background-color: var(--color-background-surface);
      }
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles[variant]} ${className}`}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};
