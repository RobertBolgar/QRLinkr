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
  const buttonStyle = {
    padding: 'var(--spacing-3) var(--spacing-6)',
    borderRadius: 'var(--radius-button)',
    fontWeight: 500,
    fontSize: '0.875rem',
    transition: 'all 150ms ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-2)',
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    opacity: props.disabled ? 0.4 : 1,
    ...(variant === 'primary' && {
      backgroundColor: 'var(--color-accent)',
      color: 'white',
      border: 'none',
    }),
    ...(variant === 'secondary' && {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
    }),
    ...(variant === 'ghost' && {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'var(--color-text-primary)',
    }),
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
