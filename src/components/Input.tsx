import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label
          htmlFor={props.id}
          style={{
            display: 'block',
            marginBottom: 'var(--spacing-2)',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: 'var(--color-text-secondary)',
          }}
        >
          {label}
        </label>
      )}
      <input
        {...props}
        style={{
          width: '100%',
          padding: 'var(--spacing-3) var(--spacing-4)',
          borderRadius: 'var(--radius-input)',
          backgroundColor: 'var(--color-background-surface)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-primary)',
          fontSize: '1rem',
          transition: 'border-color 150ms ease',
          outline: 'none',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--color-accent)';
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--color-border)';
          props.onBlur?.(e);
        }}
      />
    </div>
  );
};
