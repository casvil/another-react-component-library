import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ErrorBoundary } from './ErrorBoundary';

// Mock console.error to avoid noise in test output
const originalError = console.error;
beforeEach(() => {
  console.error = vi.fn();
});

afterEach(() => {
  console.error = originalError;
});

// Component that throws an error when shouldThrow is true
const ThrowError: React.FC<{ shouldThrow?: boolean; message?: string }> = ({
  shouldThrow = false,
  message = 'Test error',
}) => {
  if (shouldThrow) {
    throw new Error(message);
  }
  return <div data-testid="working-component">Component is working</div>;
};

// Component that works normally
const WorkingComponent: React.FC = () => (
  <div data-testid="working-component">Component is working</div>
);

describe('ErrorBoundary', () => {
  describe('Normal Operation', () => {
    it('renders children when no error occurs', () => {
      render(
        <ErrorBoundary>
          <WorkingComponent />
        </ErrorBoundary>,
      );

      expect(screen.getByTestId('working-component')).toBeInTheDocument();
      expect(screen.getByText('Component is working')).toBeInTheDocument();
    });

    it('passes through className to children when no error', () => {
      render(
        <ErrorBoundary className="custom-class">
          <div data-testid="child">Child content</div>
        </ErrorBoundary>,
      );

      expect(screen.getByTestId('child')).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('catches errors and displays default fallback UI', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
      expect(
        screen.getByText(/An unexpected error occurred/),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /try again/i }),
      ).toBeInTheDocument();
    });

    it('displays custom fallback when provided', () => {
      const customFallback = (
        <div data-testid="custom-fallback">Custom error UI</div>
      );

      render(
        <ErrorBoundary fallback={customFallback}>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
      expect(screen.getByText('Custom error UI')).toBeInTheDocument();
      expect(
        screen.queryByText('Something went wrong'),
      ).not.toBeInTheDocument();
    });

    it('calls onError callback when error occurs', () => {
      const onError = vi.fn();
      const errorMessage = 'Custom error message';

      render(
        <ErrorBoundary onError={onError}>
          <ThrowError shouldThrow message={errorMessage} />
        </ErrorBoundary>,
      );

      expect(onError).toHaveBeenCalledTimes(1);
      expect(onError).toHaveBeenCalledWith(
        expect.objectContaining({
          message: errorMessage,
        }),
        expect.objectContaining({
          componentStack: expect.any(String),
        }),
      );
    });

    it('applies custom className to error UI', () => {
      render(
        <ErrorBoundary className="custom-error-class">
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      const errorContainer = screen.getByRole('alert');
      expect(errorContainer).toHaveClass('custom-error-class');
    });
  });

  describe('Error Details', () => {
    it('hides error details by default', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow message="Detailed error message" />
        </ErrorBoundary>,
      );

      expect(screen.queryByText('Error Details')).not.toBeInTheDocument();
      expect(
        screen.queryByText('Detailed error message'),
      ).not.toBeInTheDocument();
    });

    it('shows error details when showErrorDetails is true', () => {
      const errorMessage = 'Detailed error message';

      render(
        <ErrorBoundary showErrorDetails>
          <ThrowError shouldThrow message={errorMessage} />
        </ErrorBoundary>,
      );

      expect(screen.getByText('Error Details')).toBeInTheDocument();
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it('displays error stack when available', () => {
      render(
        <ErrorBoundary showErrorDetails>
          <ThrowError shouldThrow message="Error with stack" />
        </ErrorBoundary>,
      );

      expect(screen.getByText('Stack:')).toBeInTheDocument();
      expect(screen.getByText('Component Stack:')).toBeInTheDocument();
    });
  });

  describe('Reset Functionality', () => {
    it('resets error state when Try Again button is clicked', async () => {
      function Wrapper() {
        const [shouldThrow, setShouldThrow] = React.useState(true);
        return (
          <>
            <ErrorBoundary>
              {shouldThrow ? <ThrowError shouldThrow /> : <WorkingComponent />}
            </ErrorBoundary>
            <button
              data-testid="reset-btn"
              onClick={() => setShouldThrow(false)}
            >
              Reset Child
            </button>
          </>
        );
      }

      render(<Wrapper />);

      // Error state should be displayed
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();

      // Swap the child first so it no longer throws
      fireEvent.click(screen.getByTestId('reset-btn'));

      // Now click Try Again to reset the boundary state
      fireEvent.click(screen.getByRole('button', { name: /try again/i }));

      // The working component should now render
      await waitFor(() => {
        expect(screen.getByTestId('working-component')).toBeInTheDocument();
      });
    });

    it('resets error state when resetKeys change', () => {
      let resetKey = 0;

      const { rerender } = render(
        <ErrorBoundary resetOnPropsChange resetKeys={[resetKey]}>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      // Error state should be displayed
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();

      // Change resetKey and rerender with working component
      resetKey = 1;
      rerender(
        <ErrorBoundary resetOnPropsChange resetKeys={[resetKey]}>
          <WorkingComponent />
        </ErrorBoundary>,
      );

      expect(screen.getByTestId('working-component')).toBeInTheDocument();
    });

    it('does not reset when resetKeys unchanged', () => {
      const resetKey = 0;

      const { rerender } = render(
        <ErrorBoundary resetOnPropsChange resetKeys={[resetKey]}>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      // Error state should be displayed
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();

      // Rerender with same resetKey - should still show error
      rerender(
        <ErrorBoundary resetOnPropsChange resetKeys={[resetKey]}>
          <WorkingComponent />
        </ErrorBoundary>,
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      const errorContainer = screen.getByRole('alert');
      expect(errorContainer).toHaveAttribute('aria-live', 'assertive');
      expect(errorContainer).toHaveAttribute(
        'aria-labelledby',
        'error-boundary-title',
      );
      expect(errorContainer).toHaveAttribute(
        'aria-describedby',
        'error-boundary-description',
      );
    });

    it('has accessible title and description', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      expect(
        screen.getByRole('heading', { name: 'Something went wrong' }),
      ).toHaveAttribute('id', 'error-boundary-title');

      const description = screen.getByText(/An unexpected error occurred/);
      expect(description).toHaveAttribute('id', 'error-boundary-description');
    });

    it('has accessible Try Again button', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      const button = screen.getByRole('button', {
        name: /try again to reload the component/i,
      });
      expect(button).toBeInTheDocument();
    });

    it('has accessible error details', () => {
      render(
        <ErrorBoundary showErrorDetails>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      const details = screen.getByText('Error Details');
      expect(details).toBeInTheDocument();

      const detailsElement = details.closest('details');
      expect(detailsElement).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles multiple resetKeys', () => {
      const { rerender } = render(
        <ErrorBoundary resetOnPropsChange resetKeys={[1, 'a']}>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();

      // Change one resetKey
      rerender(
        <ErrorBoundary resetOnPropsChange resetKeys={[2, 'a']}>
          <WorkingComponent />
        </ErrorBoundary>,
      );

      expect(screen.getByTestId('working-component')).toBeInTheDocument();
    });

    it('handles empty resetKeys array', () => {
      const { rerender } = render(
        <ErrorBoundary resetOnPropsChange resetKeys={[]}>
          <ThrowError shouldThrow />
        </ErrorBoundary>,
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();

      // Add resetKey
      rerender(
        <ErrorBoundary resetOnPropsChange resetKeys={[1]}>
          <WorkingComponent />
        </ErrorBoundary>,
      );

      expect(screen.getByTestId('working-component')).toBeInTheDocument();
    });
  });
});
