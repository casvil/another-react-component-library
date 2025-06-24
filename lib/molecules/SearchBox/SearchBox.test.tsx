import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchBox } from './SearchBox';

const placeholder = 'Search…';

describe('SearchBox', () => {
  it('renders with search icon by default', () => {
    render(<SearchBox placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    // Should render the search icon (aria-label)
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  });

  it('renders loading spinner when loading', () => {
    render(<SearchBox loading placeholder={placeholder} />);
    // Should render the spinner (role=status)
    expect(screen.getByRole('status')).toBeInTheDocument();
    // Input should be disabled when loading
    expect(screen.getByPlaceholderText(placeholder)).toBeDisabled();
  });

  it('supports controlled usage', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    function Wrapper() {
      const [value, setValue] = React.useState('');
      return (
        <SearchBox
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            handleChange(e);
          }}
          placeholder={placeholder}
        />
      );
    }
    render(<Wrapper />);
    const input = screen.getByPlaceholderText(placeholder);
    await user.type(input, 'hello');
    expect(handleChange).toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe('hello');
  });

  it('supports disabled', () => {
    render(<SearchBox disabled placeholder={placeholder} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeDisabled();
  });

  it('supports icon on the right', () => {
    render(<SearchBox iconPosition="right" placeholder={placeholder} />);
    // Should still render the search icon
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  });

  it('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<SearchBox onChange={onChange} placeholder={placeholder} />);
    const input = screen.getByPlaceholderText(placeholder);
    await user.type(input, 'abc');
    expect(onChange).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<SearchBox className="custom-class" placeholder={placeholder} />);
    const inputWrapper = screen.getByPlaceholderText(placeholder).parentElement;
    expect(inputWrapper).toHaveClass('custom-class');
  });
});
