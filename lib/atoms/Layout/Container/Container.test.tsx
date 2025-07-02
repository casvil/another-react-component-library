import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Container } from './Container';

describe('Container', () => {
  it('applies size, centering and padding classes', () => {
    render(
      <Container data-testid="c" size="lg" padded center>
        content
      </Container>,
    );
    const el = screen.getByTestId('c');
    expect(el).toHaveClass('max-w-lg', 'mx-auto', 'px-4');
  });
});
