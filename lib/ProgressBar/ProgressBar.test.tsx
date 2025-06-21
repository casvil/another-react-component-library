import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';
import { progressBarSizeClasses } from '../@types/size';

describe('ProgressBar', () => {
  it('supports all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = render(
        <ProgressBar value={50} label="Test" size={size} />,
      );
      const label = screen.getByText('Test');
      const progressBar = screen.getByRole('progressbar');

      expect(progressBar).toBeInTheDocument();
      expect(label).toHaveClass(progressBarSizeClasses[size].label);
      expect(progressBar).toHaveClass(progressBarSizeClasses[size].bar);

      unmount();
    });
  });
});
