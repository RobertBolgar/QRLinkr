import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  style,
  ...props
}) => {
  const buttonStyle = {
    padding: 'var(--spacing-3) var(--spacing-5)',
    borderRadius: 'var(--radius-button)',
    fontWeight: 500,
    fontSize: '0.875rem',
    transition: 'all 200ms ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-2)',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    opacity: props.disabled ? 0.5 : 1,
    ...(variant === 'primary' && {
      backgroundColor: 'var(--color-accent)',
      color: 'white',
      border: 'none',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    }),
    ...(variant === 'secondary' && {
      backgroundColor: 'var(--color-background-card)',
      border: '1px solid var(--color-border)',
      color: 'var(--color-text-primary)',
    }),
    ...(variant === 'ghost' && {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'var(--color-text-primary)',
    }),
    ...style,
  };

  return (
    <button
      className={className}
      style={buttonStyle}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </button>
  );
};
