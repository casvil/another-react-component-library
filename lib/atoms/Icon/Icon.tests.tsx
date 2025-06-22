import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Home } from 'lucide-react';

import { Icon } from './Icon';

describe('Icon component', () => {
  it('renders the icon with role img and accessible name', () => {
    render(<Icon icon={Home} aria-label="Home icon" />);
    const iconWrapper = screen.getByRole('img', { name: 'Home icon' });
    expect(iconWrapper).toBeInTheDocument();

    // The SVG inside should be present as child element
    const svgElement = iconWrapper.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('renders decorative icon with aria-hidden=true and no role', () => {
    render(<Icon icon={Home} />);

    // Query the span by aria-hidden="true"
    const spanElement = screen.getByText(
      (content, element) => element?.getAttribute('aria-hidden') === 'true',
    );

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).not.toHaveAttribute('role');
  });

  it('applies size and color styles correctly', () => {
    render(<Icon icon={Home} size={32} color="red" aria-label="Home icon" />);
    const iconWrapper = screen.getByRole('img', { name: 'Home icon' });
    expect(iconWrapper).toHaveStyle({
      width: '32px',
      height: '32px',
      color: 'red',
    });

    const svgElement = iconWrapper.querySelector('svg');
    expect(svgElement).toHaveAttribute('color', 'red');
    expect(svgElement).toHaveAttribute('width', '32');
    expect(svgElement).toHaveAttribute('height', '32');
  });
});
