import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Radio } from './Radio';

describe('Radio', () => {
  it('renders without crashing', () => {
    render(<Radio />);
    const input = screen.getByRole('radio');
    expect(input).toBeInTheDocument();
  });

  it('renders with a label', () => {
    render(<Radio label="Option A" />);
    const input = screen.getByRole('radio');
    const label = screen.getByText('Option A');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', input.id);
  });

  it('renders with custom id', () => {
    render(<Radio id="custom-id" label="Custom ID" />);
    const input = screen.getByRole('radio');
    expect(input).toHaveAttribute('id', 'custom-id');
    const label = screen.getByText('Custom ID');
    expect(label).toHaveAttribute('for', 'custom-id');
  });

  it('applies custom class names', () => {
    render(
      <Radio
        label="Styled"
        className="custom-input"
        wrapperClassName="custom-wrapper"
        labelClassName="custom-label"
      />,
    );

    const input = screen.getByRole('radio');
    const label = screen.getByText('Styled');
    const wrapper = input.closest('div');

    expect(input).toHaveClass('custom-input');
    expect(label).toHaveClass('custom-label');
    expect(wrapper).toHaveClass('custom-wrapper');
  });

  it('triggers onChange event', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Radio label="Click me" onChange={handleChange} />);
    const input = screen.getByRole('radio');
    await user.click(input);
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders without label when label is not provided', () => {
    render(<Radio />);
    const labels = screen.queryByLabelText(/.+/);
    expect(labels).toBeNull();
  });

  it('supports aria-describedby', () => {
    render(
      <>
        <p id="hint">Helpful hint</p>
        <Radio aria-describedby="hint" />
      </>,
    );
    const input = screen.getByRole('radio');
    expect(input).toHaveAttribute('aria-describedby', 'hint');
  });

  it('passes through arbitrary aria attributes', () => {
    render(<Radio aria-label="Accept Terms" />);
    const input = screen.getByRole('radio');
    expect(input).toHaveAttribute('aria-label', 'Accept Terms');
  });
});
