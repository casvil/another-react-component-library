import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Grid } from './Grid';

describe('Grid', () => {
  it('applies cols, gap and alignment classes', () => {
    render(
      <Grid
        data-testid="grid"
        cols={4}
        gap="lg"
        align="center"
        justify="center"
      />,
    );
    const el = screen.getByTestId('grid');
    expect(el).toHaveClass(
      'grid',
      'grid-cols-4',
      'gap-4',
      'items-center',
      'justify-center',
    );
  });
});
