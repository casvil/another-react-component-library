import React from 'react';
import { ThemeProvider, useTheme } from './ThemeProvider';

/**
 * Diagnostic component to test CSS variables
 */
const DiagnosticContent: React.FC = () => {
  const { colorScheme } = useTheme();

  const testVariables = [
    '--color-primary-600',
    '--color-primary-700',
    '--color-primary-500',
    '--color-background-primary',
    '--color-surface-primary',
    '--color-surface-secondary',
    '--color-text-primary',
    '--color-text-inverse',
    '--color-border-primary',
  ];

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: 'var(--color-background-primary)',
      }}
    >
      <h2 style={{ color: 'var(--color-text-primary)' }}>
        Theme Diagnostic - {colorScheme}
      </h2>

      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: 'var(--color-text-primary)' }}>
          CSS Variables Test:
        </h3>
        {testVariables.map((variable) => (
          <div
            key={variable}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: 'var(--color-surface-secondary)',
              border: '1px solid var(--color-border-primary)',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: `var(${variable})`,
                marginRight: '10px',
                border: '1px solid var(--color-border-primary)',
                borderRadius: '4px',
              }}
            />
            <span
              style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'monospace',
              }}
            >
              {variable}:{' '}
              <span style={{ color: `var(${variable})` }}>████</span>
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ color: 'var(--color-text-primary)' }}>Button Test:</h3>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          {/* Primary button with CSS variables */}
          <button
            style={{
              backgroundColor: 'var(--color-primary-600)',
              color: 'var(--color-text-inverse)',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Primary (CSS var)
          </button>

          {/* Fallback button with hardcoded blue */}
          <button
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Primary (hardcoded)
          </button>

          {/* Secondary button */}
          <button
            style={{
              backgroundColor: 'var(--color-surface-secondary)',
              color: 'var(--color-text-primary)',
              border: '1px solid var(--color-border-primary)',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
};

export const LightThemeDiagnostic: React.FC = () => (
  <ThemeProvider defaultColorScheme="light">
    <DiagnosticContent />
  </ThemeProvider>
);

export const DarkThemeDiagnostic: React.FC = () => (
  <ThemeProvider defaultColorScheme="dark">
    <DiagnosticContent />
  </ThemeProvider>
);

export const SideBySideDiagnostic: React.FC = () => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <div style={{ flex: 1 }}>
      <LightThemeDiagnostic />
    </div>
    <div style={{ flex: 1 }}>
      <DarkThemeDiagnostic />
    </div>
  </div>
);
