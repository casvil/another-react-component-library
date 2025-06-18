import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
  it('renders img element when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User Avatar" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(img).toHaveAttribute('alt', 'User Avatar');
  });

  it('renders span with initials when no src provided', () => {
    render(<Avatar name="Jane Doe" />);
    const span = screen.getByRole('img');
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe('SPAN');
    expect(span).toHaveTextContent('JD');
  });

  it('renders correct initials for single name', () => {
    render(<Avatar name="Cher" />);
    const span = screen.getByRole('img');
    expect(span).toHaveTextContent('C');
  });

  it('uses alt or name for aria-label', () => {
    const { rerender } = render(<Avatar src="url" alt="Custom alt" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Custom alt');

    rerender(<Avatar name="John Smith" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'John Smith');

    rerender(<Avatar />);
    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      'User avatar',
    );
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Avatar name="Alice" size="sm" />);
    expect(screen.getByRole('img')).toHaveClass('w-8', 'h-8', 'text-sm');

    rerender(<Avatar name="Alice" size="md" />);
    expect(screen.getByRole('img')).toHaveClass('w-12', 'h-12', 'text-base');

    rerender(<Avatar name="Alice" size="lg" />);
    expect(screen.getByRole('img')).toHaveClass('w-20', 'h-20', 'text-xl');
  });

  it('applies custom className', () => {
    render(<Avatar name="Bob" className="custom-class" />);
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveClass('custom-class');
  });

  it('forwards ref to img element', () => {
    const ref = createRef<HTMLImageElement>();
    render(<Avatar src="url" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLImageElement);
  });

  it('forwards ref to span element', () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Avatar name="Jane Doe" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
