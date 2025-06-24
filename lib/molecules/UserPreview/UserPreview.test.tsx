import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { UserPreview } from './UserPreview';

describe('UserPreview', () => {
  it('renders without crashing', () => {
    render(<UserPreview name="John Doe" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders avatar with user name', () => {
    render(<UserPreview name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders with status indicator by default', () => {
    render(<UserPreview name="John Doe" status="online" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('hides status indicator when showStatus is false', () => {
    render(<UserPreview name="John Doe" showStatus={false} />);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('shows status label when showStatusLabel is true', () => {
    render(<UserPreview name="John Doe" status="online" showStatusLabel />);
    expect(screen.getByText('Online')).toBeInTheDocument();
  });

  it('renders with avatar image when src provided', () => {
    render(
      <UserPreview
        name="John Doe"
        avatarSrc="https://example.com/avatar.jpg"
      />,
    );
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('renders in horizontal layout by default', () => {
    render(<UserPreview name="John Doe" />);
    const container = screen
      .getByText('John Doe')
      .closest('div')?.parentElement;
    expect(container).toHaveClass('flex-row');
  });

  it('renders in vertical layout when specified', () => {
    render(<UserPreview name="John Doe" layout="vertical" />);
    const container = screen
      .getByText('John Doe')
      .closest('div')?.parentElement;
    expect(container).toHaveClass('flex-col');
  });

  it('applies different username variants', () => {
    const variants = ['default', 'bold', 'muted'] as const;

    variants.forEach((variant) => {
      const { unmount } = render(
        <UserPreview name="John Doe" usernameVariant={variant} />,
      );
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      unmount();
    });
  });

  it('truncates username when maxUsernameLength is set', () => {
    render(<UserPreview name="verylongusername" maxUsernameLength={5} />);
    expect(screen.getByText('veryl...')).toBeInTheDocument();
  });

  it('renders different sizes correctly', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<UserPreview name="John Doe" size={size} />);
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      unmount();
    });
  });

  it('applies custom className', () => {
    render(<UserPreview name="John Doe" className="custom-class" />);
    const container = screen
      .getByText('John Doe')
      .closest('div')?.parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<UserPreview name="John Doe" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
