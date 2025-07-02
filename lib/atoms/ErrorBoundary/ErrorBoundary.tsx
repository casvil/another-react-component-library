import React, { Component, ReactNode, ErrorInfo } from 'react';
import { clsx } from 'clsx';

import AlertTriangle from 'lucide-react/icons/alert-triangle';
import RefreshCw from 'lucide-react/icons/refresh-cw';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { Card } from '../Card/Card';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  className?: string;
  showErrorDetails?: boolean;
  resetOnPropsChange?: boolean;
  resetKeys?: Array<string | number>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * ErrorBoundary class component that catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 * Fully accessible with ARIA attributes and keyboard navigation support.
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { resetOnPropsChange, resetKeys } = this.props;
    const { hasError } = this.state;

    if (hasError && resetOnPropsChange && resetKeys) {
      const prevResetKeys = prevProps.resetKeys || [];
      const hasResetKeyChanged = resetKeys.some(
        (key, index) => key !== prevResetKeys[index],
      );

      if (hasResetKeyChanged) {
        this.resetErrorBoundary();
      }
    }
  }

  resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const {
      children,
      fallback,
      className,
      showErrorDetails = false,
    } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <Card
          className={clsx(
            'max-w-md mx-auto p-6 text-center',
            'border-red-200 bg-red-50',
            className,
          )}
          role="alert"
          aria-live="assertive"
          aria-labelledby="error-boundary-title"
          aria-describedby="error-boundary-description"
        >
          <div className="flex flex-col items-center space-y-4">
            <AlertTriangle
              size={48}
              className="text-red-500"
              aria-hidden="true"
            />

            <div className="space-y-2">
              <Text
                id="error-boundary-title"
                variant="h3"
                weight="semibold"
                color="error"
              >
                Something went wrong
              </Text>

              <Text
                id="error-boundary-description"
                variant="body"
                color="secondary"
              >
                An unexpected error occurred. Please try refreshing the page or
                contact support if the problem persists.
              </Text>
            </div>

            {showErrorDetails && error && (
              <details className="w-full mt-4 p-3 bg-red-100 rounded-md text-left">
                <summary className="cursor-pointer font-medium text-red-800 mb-2">
                  Error Details
                </summary>
                <div className="space-y-2 text-sm">
                  <div>
                    <Text variant="small" weight="medium" color="error">
                      Error:
                    </Text>
                    <Text
                      variant="small"
                      className="font-mono text-red-700 break-all"
                    >
                      {error.message}
                    </Text>
                  </div>
                  {error.stack && (
                    <div>
                      <Text variant="small" weight="medium" color="error">
                        Stack:
                      </Text>
                      <pre className="text-xs text-red-700 whitespace-pre-wrap break-words max-h-32 overflow-y-auto">
                        {error.stack}
                      </pre>
                    </div>
                  )}
                  {showErrorDetails &&
                    errorInfo &&
                    errorInfo.componentStack && (
                      <div>
                        <Text variant="small" weight="medium" color="error">
                          Component Stack:
                        </Text>
                        <pre className="text-xs text-red-700 whitespace-pre-wrap break-words max-h-32 overflow-y-auto">
                          {errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                </div>
              </details>
            )}

            <Button
              label="Try Again"
              variant="primary"
              size="sm"
              icon={RefreshCw}
              iconPosition="left"
              onClick={this.resetErrorBoundary}
              className="mt-4"
              aria-label="Try again to reload the component"
            />
          </div>
        </Card>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
