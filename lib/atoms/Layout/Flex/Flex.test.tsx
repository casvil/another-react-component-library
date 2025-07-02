import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Flex } from './Flex';

describe('Flex', () => {
  it('applies direction, alignment, justify and gap', () => {
    render(
      <Flex
        data-testid="flex"
        direction="col-reverse"
        align="center"
        justify="around"
        wrap="wrap"
        gap="sm"
      />,
    );
    const el = screen.getByTestId('flex');
    expect(el).toHaveClass(
      'flex',
      'flex-col-reverse',
      'items-center',
      'justify-around',
      'flex-wrap',
      'gap-1',
    );
  });
});
