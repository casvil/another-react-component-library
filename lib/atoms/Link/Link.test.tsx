import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Link } from './Link';

describe('Link', () => {
  it('renders without crashing', () => {
    render(<Link href="https://example.com">Example</Link>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(<Link href="https://example.com">Example</Link>);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com',
    );
  });

  it('applies variant styles', () => {
    const { rerender } = render(
      <Link href="https://example.com" variant="secondary">
        Example
      </Link>,
    );
    expect(screen.getByRole('link')).toHaveClass('text-gray-600');

    rerender(
      <Link href="https://example.com" variant="tertiary">
        Example
      </Link>,
    );
    expect(screen.getByRole('link')).toHaveClass('underline');
  });

  it('disables the link when disabled is true', () => {
    const onClick = vi.fn();
    render(
      <Link href="https://example.com" disabled onClick={onClick}>
        Disabled Link
      </Link>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).toHaveAttribute('href', 'https://example.com'); // href remains

    fireEvent.click(link);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('calls onClick when clicked and not disabled', () => {
    const onClick = vi.fn();
    render(
      <Link href="https://example.com" onClick={onClick}>
        Clickable Link
      </Link>,
    );
    const link = screen.getByRole('link');

    fireEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('adds rel noopener noreferrer if target _blank and rel not provided', () => {
    render(
      <Link href="https://example.com" target="_blank">
        External Link
      </Link>,
    );
    expect(screen.getByRole('link')).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
  });

  it('keeps provided rel attribute', () => {
    render(
      <Link href="https://example.com" target="_blank" rel="nofollow">
        External Link
      </Link>,
    );
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'nofollow');
  });
});
