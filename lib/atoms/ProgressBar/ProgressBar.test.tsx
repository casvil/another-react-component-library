import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('renders without crashing', () => {
    render(<ProgressBar value={50} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
  });

  it('displays the correct value', () => {
    render(<ProgressBar value={75} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '75');
  });

  it('renders the label if provided', () => {
    render(<ProgressBar value={30} label="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<ProgressBar value={60} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuemin', '0');
    expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    expect(progressBar).toHaveAttribute('aria-valuenow', '60');
  });

  it('applies custom styles to wrapper, bar, and label', () => {
    render(
      <ProgressBar
        value={40}
        label="Progress"
        className="custom-wrapper"
        barClassName="custom-bar"
        labelClassName="custom-label"
      />,
    );

    const wrapper = screen.getByRole('progressbar').parentElement;
    expect(wrapper).toHaveClass('custom-wrapper');

    const progressBar = screen.getByRole('progressbar')
      .firstChild as HTMLElement;
    expect(progressBar).toHaveClass('custom-bar');

    const label = screen.getByText('Progress');
    expect(label).toHaveClass('custom-label');
  });
});
