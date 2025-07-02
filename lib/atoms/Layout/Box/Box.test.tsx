import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Box } from './Box';

describe('Box', () => {
  it('renders children', () => {
    render(<Box data-testid="box">content</Box>);
    expect(screen.getByTestId('box')).toHaveTextContent('content');
  });

  it('applies spacing, width, rounding and shadow classes', () => {
    render(<Box data-testid="box" p="lg" m="sm" w="full" rounded shadow />);
    const el = screen.getByTestId('box');
    expect(el).toHaveClass('p-4', 'm-1', 'w-full', 'rounded-md', 'shadow-md');
  });
});
