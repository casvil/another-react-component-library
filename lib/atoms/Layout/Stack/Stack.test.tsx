import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children vertically by default with gap', () => {
    render(
      <Stack data-testid="stack">
        <span>one</span>
        <span>two</span>
      </Stack>,
    );
    const el = screen.getByTestId('stack');
    expect(el).toHaveClass('flex', 'flex-col', 'gap-2'); // md gap default
  });

  it('supports horizontal direction and alignment/justify props', () => {
    render(
      <Stack
        data-testid="stack"
        direction="horizontal"
        gap="lg"
        align="center"
        justify="between"
      />,
    );
    const el = screen.getByTestId('stack');
    expect(el).toHaveClass(
      'flex-row',
      'gap-4',
      'items-center',
      'justify-between',
    );
  });
});
