import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<ProgressBar value={50} label="Test" size={size} />);
      const label = screen.getByText('Test');
      const progressBar = screen.getByRole('progressbar');
      
      expect(progressBar).toBeInTheDocument();
      expect(label).toHaveClass(
        size === 'sm' ? 'text-sm' :
        size === 'md' ? 'text-base' :
        'text-lg'
      );
      expect(progressBar).toHaveClass(
        size === 'sm' ? 'h-2' :
        size === 'md' ? 'h-4' :
        'h-6'
      );
      
      unmount();
    });
  });
});
