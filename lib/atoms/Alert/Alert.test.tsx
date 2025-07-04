import { render, screen, fireEvent } from '@testing-library/react';
import { describe, beforeAll, it, expect, vi } from 'vitest';
import { waitFor } from '@testing-library/react';

import { Alert } from './Alert';
import { mockMatchMedia } from '../../test/utils/themeTest';
import { ThemeProvider } from '../../theme';
import { lightTokens, darkTokens } from '../../theme';

beforeAll(mockMatchMedia);

describe('Alert', () => {
  it('renders with default props', () => {
    render(<Alert>Test message</Alert>);

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('Test message');
    expect(alert).toHaveAttribute('aria-live', 'polite');
  });

  it('renders with custom aria-label', () => {
    render(<Alert aria-label="Custom alert">Test message</Alert>);

    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('aria-label', 'Custom alert');
  });

  it('sets aria-live to assertive for error intent', () => {
    render(<Alert intent="error">Error message</Alert>);

    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('aria-live', 'assertive');
  });

  it('allows custom aria-live to override default', () => {
    render(
      <Alert intent="error" aria-live="polite">
        Error message
      </Alert>,
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('aria-live', 'polite');
  });

  describe('Intents', () => {
    it('renders info intent correctly', () => {
      render(<Alert intent="info">Info message</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(
        'bg-[var(--color-info-50)]',
        'border-[var(--color-info-200)]',
        'text-[var(--color-info-700)]',
      );
    });

    it('renders success intent correctly', () => {
      render(<Alert intent="success">Success message</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(
        'bg-[var(--color-success-50)]',
        'border-[var(--color-success-200)]',
        'text-[var(--color-success-700)]',
      );
    });

    it('renders warning intent correctly', () => {
      render(<Alert intent="warning">Warning message</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(
        'bg-[var(--color-warning-50)]',
        'border-[var(--color-warning-200)]',
        'text-[var(--color-warning-700)]',
      );
    });

    it('renders error intent correctly', () => {
      render(<Alert intent="error">Error message</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(
        'bg-[var(--color-error-50)]',
        'border-[var(--color-error-200)]',
        'text-[var(--color-error-700)]',
      );
    });
  });

  describe('Sizes', () => {
    it('renders small size correctly', () => {
      render(<Alert size="sm">Small alert</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('p-3', 'rounded-md');
    });

    it('renders medium size correctly', () => {
      render(<Alert size="md">Medium alert</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('p-4', 'rounded-lg');
    });

    it('renders large size correctly', () => {
      render(<Alert size="lg">Large alert</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('p-5', 'rounded-xl');
    });
  });

  describe('Icons', () => {
    it('shows icon by default', () => {
      render(<Alert intent="info">Test message</Alert>);

      const icon = screen.getByRole('alert').querySelector('svg');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    it('hides icon when showIcon is false', () => {
      render(
        <Alert intent="info" showIcon={false}>
          Test message
        </Alert>,
      );

      const icon = screen.getByRole('alert').querySelector('svg');
      expect(icon).toBeNull();
    });

    it('renders correct icon for each intent', () => {
      const { rerender } = render(<Alert intent="info">Test</Alert>);
      let icon = screen.getByRole('alert').querySelector('svg');
      expect(icon).toHaveClass('text-[var(--color-info-600)]');

      rerender(<Alert intent="success">Test</Alert>);
      icon = screen.getByRole('alert').querySelector('svg');
      expect(icon).toHaveClass('text-[var(--color-success-600)]');

      rerender(<Alert intent="warning">Test</Alert>);
      icon = screen.getByRole('alert').querySelector('svg');
      expect(icon).toHaveClass('text-[var(--color-warning-600)]');

      rerender(<Alert intent="error">Test</Alert>);
      icon = screen.getByRole('alert').querySelector('svg');
      expect(icon).toHaveClass('text-[var(--color-error-600)]');
    });
  });

  describe('Dismissible functionality', () => {
    it('does not show dismiss button by default', () => {
      render(<Alert>Test message</Alert>);

      const dismissButton = screen.queryByRole('button', {
        name: /dismiss alert/i,
      });
      expect(dismissButton).not.toBeInTheDocument();
    });

    it('shows dismiss button when dismissible is true and onDismiss is provided', () => {
      const onDismiss = vi.fn();
      render(
        <Alert dismissible onDismiss={onDismiss}>
          Test message
        </Alert>,
      );

      const dismissButton = screen.getByRole('button', {
        name: /dismiss alert/i,
      });
      expect(dismissButton).toBeInTheDocument();
    });

    it('does not show dismiss button when dismissible is true but onDismiss is not provided', () => {
      render(<Alert dismissible>Test message</Alert>);

      const dismissButton = screen.queryByRole('button', {
        name: /dismiss alert/i,
      });
      expect(dismissButton).not.toBeInTheDocument();
    });

    it('calls onDismiss when dismiss button is clicked', () => {
      const onDismiss = vi.fn();
      render(
        <Alert dismissible onDismiss={onDismiss}>
          Test message
        </Alert>,
      );

      const dismissButton = screen.getByRole('button', {
        name: /dismiss alert/i,
      });
      fireEvent.click(dismissButton);

      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<Alert className="custom-class">Test message</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('custom-class');
    });

    it('preserves default classes when custom className is applied', () => {
      render(<Alert className="custom-class">Test message</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(
        'border',
        'flex',
        'items-start',
        'gap-3',
        'custom-class',
      );
    });

    it('supports multiple custom classes', () => {
      render(
        <Alert className="custom-class-1 custom-class-2 bg-purple-100">
          Test message
        </Alert>,
      );

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass(
        'custom-class-1',
        'custom-class-2',
        'bg-purple-100',
      );
    });

    it('allows overriding default styles with custom className', () => {
      render(
        <Alert className="bg-purple-100 border-purple-300" intent="info">
          Test message
        </Alert>,
      );

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('bg-purple-100', 'border-purple-300');
      // Should still have base structural classes
      expect(alert).toHaveClass('border', 'flex', 'items-start', 'gap-3');
    });

    it('works with className and all other props combined', () => {
      const onDismiss = vi.fn();
      render(
        <Alert
          className="custom-styling shadow-lg"
          intent="success"
          size="lg"
          dismissible
          onDismiss={onDismiss}
          showIcon={false}
        >
          Complex alert
        </Alert>,
      );

      const alert = screen.getByRole('alert');
      expect(alert).toHaveClass('custom-styling', 'shadow-lg');
      expect(alert).toHaveClass(
        'bg-[var(--color-success-50)]',
        'border-[var(--color-success-200)]',
        'text-[var(--color-success-700)]',
      ); // success intent
      expect(alert).toHaveClass('p-5', 'rounded-xl'); // large size

      // Ensure the success intent icon is not rendered (showIcon=false)
      const intentIcon = Array.from(alert.querySelectorAll('svg')).find((svg) =>
        svg.classList.contains('text-[var(--color-success-600)]'),
      );
      expect(intentIcon).toBeUndefined();

      // Should have dismiss button with its own icon
      const dismissButton = screen.getByRole('button', {
        name: /dismiss alert/i,
      });
      expect(dismissButton).toBeInTheDocument();
      const dismissIcon = dismissButton.querySelector('svg');
      expect(dismissIcon).toBeInTheDocument();
    });
  });

  describe('Content', () => {
    it('renders text content', () => {
      render(<Alert>Simple text message</Alert>);

      expect(screen.getByText('Simple text message')).toBeInTheDocument();
    });

    it('renders JSX content', () => {
      render(
        <Alert>
          <strong>Bold text</strong> and <em>italic text</em>
        </Alert>,
      );

      expect(screen.getByText('Bold text')).toBeInTheDocument();
      expect(screen.getByText('italic text')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<Alert>Test message</Alert>);

      const alert = screen.getByRole('alert');
      expect(alert).toHaveAttribute('role', 'alert');
      expect(alert).toHaveAttribute('aria-live', 'polite');
    });

    it('dismiss button has proper accessibility attributes', () => {
      const onDismiss = vi.fn();
      render(
        <Alert dismissible onDismiss={onDismiss}>
          Test message
        </Alert>,
      );

      const dismissButton = screen.getByRole('button', {
        name: /dismiss alert/i,
      });
      expect(dismissButton).toHaveAttribute('type', 'button');
      expect(dismissButton).toHaveAttribute('aria-label', 'Dismiss alert');
    });

    it('dismiss button has cursor pointer', () => {
      const onDismiss = vi.fn();
      render(
        <Alert dismissible onDismiss={onDismiss}>
          Test message
        </Alert>,
      );

      const dismissButton = screen.getByRole('button', {
        name: /dismiss alert/i,
      });
      expect(dismissButton).toHaveClass('cursor-pointer');
    });

    it('icon has aria-hidden attribute', () => {
      render(<Alert>Test message</Alert>);

      const icon = screen.getByRole('alert').querySelector('svg');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    it('dismiss button has intent-specific hover styles', () => {
      const intents = [
        {
          intent: 'info' as const,
          expectedHover: 'hover:bg-[var(--color-info-100)]',
        },
        {
          intent: 'success' as const,
          expectedHover: 'hover:bg-[var(--color-success-100)]',
        },
        {
          intent: 'warning' as const,
          expectedHover: 'hover:bg-[var(--color-warning-100)]',
        },
        {
          intent: 'error' as const,
          expectedHover: 'hover:bg-[var(--color-error-100)]',
        },
      ] as const;

      intents.forEach(({ intent, expectedHover }) => {
        const onDismiss = vi.fn();
        const { unmount } = render(
          <Alert intent={intent} dismissible onDismiss={onDismiss}>
            Test {intent} alert
          </Alert>,
        );

        const dismissButton = screen.getByRole('button', {
          name: /dismiss alert/i,
        });
        expect(dismissButton).toHaveClass(expectedHover);

        unmount();
      });
    });
  });

  describe('Theme adaptation', () => {
    it('updates CSS variables between light and dark themes', async () => {
      // light theme
      const { unmount } = render(
        <ThemeProvider defaultColorScheme="light">
          <Alert>Theme</Alert>
        </ThemeProvider>,
      );

      await waitFor(() => {
        expect(document.documentElement.getAttribute('data-theme')).toBe(
          'light',
        );
        expect(
          document.documentElement.style.getPropertyValue('--color-info-50'),
        ).toBe(lightTokens.colors.intent.info[50]);
      });

      // dark theme
      unmount();
      render(
        <ThemeProvider defaultColorScheme="dark">
          <Alert>Theme</Alert>
        </ThemeProvider>,
      );

      await waitFor(() => {
        expect(document.documentElement.getAttribute('data-theme')).toBe(
          'dark',
        );
        expect(
          document.documentElement.style.getPropertyValue('--color-info-50'),
        ).toBe(darkTokens.colors.intent.info[50]);
      });
    });
  });
});
