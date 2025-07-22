import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme/ThemeProvider';

import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders nothing if no children', () => {
    const { container } = render(
      <ErrorMessage id="error-1">{null}</ErrorMessage>,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('renders error message with role alert and correct content', () => {
    render(<ErrorMessage id="error-1">This is an error</ErrorMessage>);

    const alert = screen.getByRole('alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('This is an error');
    expect(alert).toHaveAttribute('id', 'error-1');
  });

  it('applies custom className and props', () => {
    render(
      <ErrorMessage id="error-2" className="italic" data-testid="error">
        Something went wrong
      </ErrorMessage>,
    );

    const error = screen.getByTestId('error');

    expect(error).toHaveClass('italic');
    expect(error).toHaveAttribute('role', 'alert');
  });

  it('adapts to light and dark themes', () => {
    const { rerender } = render(
      <ThemeProvider defaultColorScheme="light">
        <ErrorMessage id="test">Theme test</ErrorMessage>
      </ThemeProvider>,
    );
    const error = screen.getByRole('alert');
    expect(error).toHaveClass('text-[var(--color-text-error)]');

    rerender(
      <ThemeProvider defaultColorScheme="dark">
        <ErrorMessage id="test">Theme test</ErrorMessage>
      </ThemeProvider>,
    );
    // Should still have the same theme variable classes
    expect(error).toHaveClass('text-[var(--color-text-error)]');
  });
});
