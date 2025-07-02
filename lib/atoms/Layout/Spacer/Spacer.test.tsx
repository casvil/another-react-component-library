import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Spacer } from './Spacer';

describe('Spacer', () => {
  it('renders fixed height spacer', () => {
    render(<Spacer data-testid="s" size="lg" />);
    expect(screen.getByTestId('s')).toHaveClass('h-4');
  });

  it('grows inside flex layouts', () => {
    render(<Spacer data-testid="s" grow />);
    expect(screen.getByTestId('s')).toHaveClass('flex-1');
  });
});
