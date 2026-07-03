import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', id, ...props }) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div className={`input-wrapper ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
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
        id={inputId}
        className="qr-input"
        style={{
          width: '100%',
          padding: 'var(--spacing-3) var(--spacing-4)',
          borderRadius: 'var(--radius-input)',
          backgroundColor: 'var(--color-background-surface)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-text-primary)',
          fontSize: '1rem',
          outline: 'none',
        }}
      />
    </div>
  );
};
