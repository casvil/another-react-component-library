import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme/ThemeProvider';

import { Divider } from './Divider';

describe('Divider', () => {
  it('renders horizontal divider by default', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('aria-orientation', 'horizontal');
    expect(divider).toHaveClass('border'); // general border class
    expect(divider).toHaveClass('w-full'); // full width
    expect(divider).toHaveClass('h-px'); // 1px height for line thickness
  });

  it('renders vertical divider when orientation="vertical"', () => {
    render(<Divider orientation="vertical" className="h-20" />);
    const divider = screen.getByRole('separator');

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('aria-orientation', 'vertical');
    expect(divider).toHaveClass('border'); // general border class
    expect(divider).toHaveClass('w-px'); // 1px width for line thickness
    expect(divider).toHaveClass('h-20'); // height from className
    expect(divider).toHaveClass('mx-2'); // lateral margin from component
  });

  it('supports ref forwarding', () => {
    const ref = { current: null };
    render(<Divider ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('accepts and applies custom className', () => {
    render(<Divider className="border-blue-500" />);
    expect(screen.getByRole('separator')).toHaveClass('border-blue-500');
  });

  it('adapts to light and dark themes', () => {
    const { rerender } = render(
      <ThemeProvider defaultColorScheme="light">
        <Divider />
      </ThemeProvider>,
    );
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('border-[var(--color-border-primary)]');

    rerender(
      <ThemeProvider defaultColorScheme="dark">
        <Divider />
      </ThemeProvider>,
    );
    // Should still have the same theme variable classes
    expect(divider).toHaveClass('border-[var(--color-border-primary)]');
  });
});
