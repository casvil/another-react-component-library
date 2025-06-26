import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CreditCardPreview } from './CreditCardPreview';

describe('CreditCardPreview', () => {
  const defaultProps = {
    cardNumber: '4111 1111 1111 1111',
    cardholderName: 'JOHN DOE',
    expiryDate: '12/25',
    cvc: '123',
  };

  it('renders with default props', () => {
    render(<CreditCardPreview {...defaultProps} />);

    expect(screen.getByText('4111 1111 1111 1111')).toBeInTheDocument();
    expect(screen.getByText('JOHN DOE')).toBeInTheDocument();
    expect(screen.getByText('12/25')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  it('renders with placeholder values when props are empty', () => {
    render(<CreditCardPreview />);

    expect(screen.getByText('•••• •••• •••• ••••')).toBeInTheDocument();
    expect(screen.getByText('CARDHOLDER NAME')).toBeInTheDocument();
    expect(screen.getByText('MM/YY')).toBeInTheDocument();
    expect(screen.getByText('•••')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <CreditCardPreview {...defaultProps} className="custom-class" />,
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  describe('Size variants', () => {
    it('applies small size styles', () => {
      const { container } = render(
        <CreditCardPreview {...defaultProps} size="sm" />,
      );

      expect(container.querySelector('.w-72')).toBeInTheDocument();
    });

    it('applies medium size styles (default)', () => {
      const { container } = render(
        <CreditCardPreview {...defaultProps} size="md" />,
      );

      expect(container.querySelector('.w-80')).toBeInTheDocument();
    });

    it('applies large size styles', () => {
      const { container } = render(
        <CreditCardPreview {...defaultProps} size="lg" />,
      );

      expect(container.querySelector('.w-96')).toBeInTheDocument();
    });
  });

  describe('CVC visibility', () => {
    it('shows CVC by default', () => {
      render(<CreditCardPreview {...defaultProps} />);

      expect(screen.getByText('123')).toBeInTheDocument();
    });

    it('hides CVC when showCvc is false', () => {
      render(<CreditCardPreview {...defaultProps} showCvc={false} />);

      expect(screen.queryByText('123')).not.toBeInTheDocument();
    });
  });

  describe('Card type detection', () => {
    it('detects Visa card type', () => {
      render(<CreditCardPreview cardNumber="4111 1111 1111 1111" />);

      const cardElement = screen.getByRole('article');
      expect(cardElement).toHaveClass('border-blue-200');
    });

    it('detects Mastercard card type', () => {
      render(<CreditCardPreview cardNumber="5555 5555 5555 4444" />);

      const cardElement = screen.getByRole('article');
      expect(cardElement).toHaveClass('border-red-200');
    });

    it('detects American Express card type', () => {
      render(<CreditCardPreview cardNumber="3782 822463 10005" />);

      const cardElement = screen.getByRole('article');
      expect(cardElement).toHaveClass('border-green-200');
    });
  });

  describe('Non-editable mode', () => {
    it('does not show edit cursors when editable is false', () => {
      render(<CreditCardPreview {...defaultProps} editable={false} />);

      const cardNumber = screen.getByText('4111 1111 1111 1111');
      expect(cardNumber.closest('button')).toBeNull();
    });
  });

  describe('Editable mode', () => {
    const user = userEvent.setup();

    it('shows edit cursors on editable fields', () => {
      render(<CreditCardPreview {...defaultProps} editable={true} />);

      const editableFields = screen.getAllByRole('button');
      expect(editableFields).toHaveLength(4); // cardNumber, name, expiry, cvc
    });

    it('enters edit mode when clicking on card number', async () => {
      const onChange = vi.fn();
      render(
        <CreditCardPreview
          {...defaultProps}
          editable={true}
          onChange={onChange}
        />,
      );

      const cardNumberButton = screen.getByRole('button', {
        name: /card number/i,
      });
      await user.click(cardNumberButton);

      const input = screen.getByDisplayValue('4111 1111 1111 1111');
      expect(input).toBeInTheDocument();
      expect(input).toHaveFocus();
    });

    it('saves changes when pressing Enter', async () => {
      const onChange = vi.fn();
      render(
        <CreditCardPreview
          {...defaultProps}
          editable={true}
          onChange={onChange}
        />,
      );

      const cardNumberButton = screen.getByRole('button', {
        name: /card number/i,
      });
      await user.click(cardNumberButton);

      const input = screen.getByDisplayValue('4111 1111 1111 1111');
      await user.clear(input);
      await user.type(input, '5555 5555 5555 4444');
      await user.keyboard('{Enter}');

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          cardNumber: '5555 5555 5555 4444',
        }),
      );
    });

    it('cancels changes when pressing Escape', async () => {
      const onChange = vi.fn();
      render(
        <CreditCardPreview
          {...defaultProps}
          editable={true}
          onChange={onChange}
        />,
      );

      const cardNumberButton = screen.getByRole('button', {
        name: /card number/i,
      });
      await user.click(cardNumberButton);

      const input = screen.getByDisplayValue('4111 1111 1111 1111');
      await user.clear(input);
      await user.type(input, '5555 5555 5555 4444');
      await user.keyboard('{Escape}');

      expect(onChange).not.toHaveBeenCalled();
      expect(screen.getByText('4111 1111 1111 1111')).toBeInTheDocument();
    });

    it('saves changes when clicking outside (blur)', async () => {
      const onChange = vi.fn();
      render(
        <div>
          <CreditCardPreview
            {...defaultProps}
            editable={true}
            onChange={onChange}
          />
          <button>Outside button</button>
        </div>,
      );

      const cardNumberButton = screen.getByRole('button', {
        name: /card number/i,
      });
      await user.click(cardNumberButton);

      const input = screen.getByDisplayValue('4111 1111 1111 1111');
      await user.clear(input);
      await user.type(input, '5555 5555 5555 4444');

      const outsideButton = screen.getByText('Outside button');
      await user.click(outsideButton);

      await waitFor(() => {
        expect(onChange).toHaveBeenCalledWith(
          expect.objectContaining({
            cardNumber: '5555 5555 5555 4444',
          }),
        );
      });
    });

    it('formats card number input correctly', async () => {
      const onChange = vi.fn();
      render(
        <CreditCardPreview
          {...defaultProps}
          editable={true}
          onChange={onChange}
        />,
      );

      const cardNumberButton = screen.getByRole('button', {
        name: /card number/i,
      });
      await user.click(cardNumberButton);

      const input = screen.getByDisplayValue('4111 1111 1111 1111');
      await user.clear(input);
      await user.type(input, '4111111111111111');
      await user.keyboard('{Enter}');

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          cardNumber: '4111 1111 1111 1111',
        }),
      );
    });

    it('formats expiry date input correctly', async () => {
      const onChange = vi.fn();
      render(
        <CreditCardPreview
          {...defaultProps}
          editable={true}
          onChange={onChange}
        />,
      );

      const expiryButton = screen.getByRole('button', { name: /expiry date/i });
      await user.click(expiryButton);

      const input = screen.getByDisplayValue('12/25');
      await user.clear(input);
      await user.type(input, '0628');
      await user.keyboard('{Enter}');

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          expiryDate: '06/28',
        }),
      );
    });

    it('formats cardholder name to uppercase', async () => {
      const onChange = vi.fn();
      render(
        <CreditCardPreview
          {...defaultProps}
          editable={true}
          onChange={onChange}
        />,
      );

      const nameButton = screen.getByRole('button', {
        name: /cardholder name/i,
      });
      await user.click(nameButton);

      const input = screen.getByDisplayValue('JOHN DOE');
      await user.clear(input);
      await user.type(input, 'jane smith');
      await user.keyboard('{Enter}');

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          cardholderName: 'JANE SMITH',
        }),
      );
    });

    it('limits CVC input length based on card type', async () => {
      const onChange = vi.fn();
      render(
        <CreditCardPreview
          cardNumber="3782 822463 10005" // Amex
          cardholderName="JOHN DOE"
          expiryDate="12/25"
          cvc="1234"
          editable={true}
          onChange={onChange}
        />,
      );

      const cvcButton = screen.getByRole('button', { name: /cvc/i });
      await user.click(cvcButton);

      const input = screen.getByDisplayValue('1234');
      expect(input).toHaveAttribute('maxLength', '4'); // Amex allows 4 digits
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels for editable fields', () => {
      render(<CreditCardPreview {...defaultProps} editable={true} />);

      expect(
        screen.getByRole('button', { name: /edit card number/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /edit cardholder name/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /edit expiry date/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /edit cvc/i }),
      ).toBeInTheDocument();
    });

    it('has proper role for the card container', () => {
      render(<CreditCardPreview {...defaultProps} />);

      expect(screen.getByRole('article')).toBeInTheDocument();
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      render(<CreditCardPreview {...defaultProps} editable={true} />);

      const firstEditButton = screen.getByRole('button', {
        name: /edit card number/i,
      });
      firstEditButton.focus();

      await user.keyboard('{Tab}');
      const secondEditButton = screen.getByRole('button', {
        name: /edit cardholder name/i,
      });
      expect(secondEditButton).toHaveFocus();
    });
  });

  describe('Error handling', () => {
    it('handles invalid card numbers gracefully', () => {
      render(<CreditCardPreview cardNumber="invalid" />);

      expect(screen.getByText('invalid')).toBeInTheDocument();
      // Should not crash or throw errors
    });

    it('handles empty onChange callback', async () => {
      const user = userEvent.setup();
      render(<CreditCardPreview {...defaultProps} editable={true} />);

      const cardNumberButton = screen.getByRole('button', {
        name: /card number/i,
      });
      await user.click(cardNumberButton);

      const input = screen.getByDisplayValue('4111 1111 1111 1111');
      await user.clear(input);
      await user.type(input, '5555 5555 5555 4444');
      await user.keyboard('{Enter}');

      // Should not crash when onChange is not provided
    });
  });
});
