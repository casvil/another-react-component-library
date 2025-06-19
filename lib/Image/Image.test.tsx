import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Image } from './Image';

describe('Image', () => {
  it('renders without crashing', () => {
    render(<Image src="https://placehold.co/200x200" alt="Example image" />);
    const img = screen.getByRole('img', { name: 'Example image' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://placehold.co/200x200');
    expect(img).toHaveAttribute('alt', 'Example image');
  });
  it('renders with alt and role', () => {
    render(<Image src="/logo.png" alt="Logo" />);
    const img = screen.getByRole('img', { name: 'Logo' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Logo');
  });

  it('applies custom className', () => {
    render(
      <Image src="/logo.png" alt="Styled" className="rounded-full border" />,
    );
    const img = screen.getByRole('img', { name: 'Styled' });
    expect(img).toHaveClass('rounded-full');
    expect(img).toHaveClass('border');
  });

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLImageElement>();
    render(<Image src="/logo.png" alt="Ref test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLImageElement);
    expect(ref.current?.getAttribute('alt')).toBe('Ref test');
  });

  it('renders with given width and height', () => {
    render(<Image src="/image.jpg" alt="sizing" width={200} height={100} />);
    const img = screen.getByRole('img', { name: 'sizing' });
    expect(img).toHaveAttribute('width', '200');
    expect(img).toHaveAttribute('height', '100');
  });

  it('defaults to rounded-xl and object-cover when no className is provided', () => {
    render(
      <Image src="https://placehold.co/200x200" alt="Default styled image" />,
    );
    const img = screen.getByRole('img', { name: 'Default styled image' });
    expect(img).toHaveClass('rounded-xl');
    expect(img).toHaveClass('object-cover');
  });
});
