import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Select } from './Select';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

describe('Select', () => {
  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Select options={options} size={size} />);
      const input = screen.getByRole('textbox');
      
      expect(input).toBeInTheDocument();
      expect(input).toHaveClass(
        size === 'sm' ? 'text-sm px-2 py-1' :
        size === 'md' ? 'text-base px-3 py-2' :
        'text-lg px-4 py-3'
      );
      
      unmount();
    });
  });
});
