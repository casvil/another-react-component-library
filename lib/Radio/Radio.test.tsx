import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Radio } from './Radio';

describe('Radio', () => {
  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Radio label="Test" size={size} />);
      const input = screen.getByRole('radio', { name: 'Test' });
      const label = screen.getByText('Test');
      
      expect(input).toBeInTheDocument();
      expect(input).toHaveClass(
        size === 'sm' ? 'h-3 w-3' :
        size === 'md' ? 'h-4 w-4' :
        'h-5 w-5'
      );
      expect(label).toHaveClass(
        size === 'sm' ? 'text-sm' :
        size === 'md' ? 'text-base' :
        'text-lg'
      );
      
      unmount();
    });
  });
});
