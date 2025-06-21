import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Radio } from './Radio';
import { radioSizeClasses } from '../@types/size';

describe('Radio', () => {
  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Radio label="Test" size={size} />);
      const input = screen.getByRole('radio', { name: 'Test' });
      const label = screen.getByText('Test');

      expect(input).toBeInTheDocument();
      expect(input).toHaveClass(radioSizeClasses[size].radio);
      expect(label).toHaveClass(radioSizeClasses[size].label);

      unmount();
    });
  });
});
