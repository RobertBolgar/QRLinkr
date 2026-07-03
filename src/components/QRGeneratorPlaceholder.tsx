import React from 'react';
import { Card } from './Card';

export const QRGeneratorPlaceholder: React.FC = () => {
  return (
    <Card>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          gap: 'var(--spacing-4)',
          color: 'var(--color-text-muted)',
        }}
      >
        <div
          style={{
            width: '200px',
            height: '200px',
            border: '2px dashed var(--color-border)',
            borderRadius: 'var(--radius-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '0.875rem' }}>QR Preview</span>
        </div>
        <p>QR Generator - Coming in Sprint 2</p>
      </div>
    </Card>
  );
};
