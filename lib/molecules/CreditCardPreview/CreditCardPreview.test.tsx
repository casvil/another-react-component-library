import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CreditCardPreview } from './CreditCardPreview';
import { detectCardType } from '../../utils/cardPatterns';

// Test card numbers for each network
const TEST_CARD_NUMBERS = {
  visa: '4111111111111111',
  mastercard: '5555555555554444',
  amex: '378282246310005',
  discover: '6011111111111117',
  diners: '30569309025904',
  jcb: '3530111333300000',
  unionpay: '6200000000000005',
  maestro: '5018450000000000',
  elo: '5067000000000000',
  mir: '2200450000000000',
  rupay: '6070000000000000',
};

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
      expect(cardElement).toHaveClass(
        'from-blue-600',
        'via-blue-500',
        'to-blue-700',
      );
    });

    it('detects Mastercard card type', () => {
      render(<CreditCardPreview cardNumber="5555 5555 5555 4444" />);

      const cardElement = screen.getByRole('article');
      expect(cardElement).toHaveClass(
        'from-red-500',
        'via-orange-500',
        'to-yellow-500',
      );
    });

    it('detects American Express card type', () => {
      render(<CreditCardPreview cardNumber="3782 822463 10005" />);

      const cardElement = screen.getByRole('article');
      expect(cardElement).toHaveClass(
        'from-green-600',
        'via-teal-600',
        'to-blue-600',
      );
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

      // When invalid characters are provided, they are filtered out
      // and the placeholder should be shown
      expect(screen.getByText('•••• •••• •••• ••••')).toBeInTheDocument();
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

  describe('Card Network Detection and Gradients', () => {
    it('detects and styles Visa cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.visa} />);
      expect(screen.getByText('VISA')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-blue-600',
        'via-blue-500',
        'to-blue-700',
      );
    });

    it('detects and styles Mastercard cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.mastercard} />);
      expect(screen.getByText('MASTERCARD')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-red-500',
        'via-orange-500',
        'to-yellow-500',
      );
    });

    it('detects and styles American Express cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.amex} />);
      expect(screen.getByText('AMERICAN EXPRESS')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-green-600',
        'via-teal-600',
        'to-blue-600',
      );
    });

    it('detects and styles Discover cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.discover} />);
      expect(screen.getByText('DISCOVER')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-orange-500',
        'via-orange-600',
        'to-red-600',
      );
    });

    it('detects and styles Diners Club cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.diners} />);
      expect(screen.getByText('DINERS CLUB')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-gray-600',
        'via-gray-700',
        'to-gray-800',
      );
    });

    it('detects and styles JCB cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.jcb} />);
      expect(screen.getByText('JCB')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-blue-800',
        'via-indigo-700',
        'to-purple-600',
      );
    });

    it('detects and styles UnionPay cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.unionpay} />);
      expect(screen.getByText('UNIONPAY')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-red-600',
        'via-red-700',
        'to-red-800',
      );
    });

    it('detects and styles Maestro cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.maestro} />);
      expect(screen.getByText('MAESTRO')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-blue-700',
        'via-red-500',
        'to-yellow-400',
      );
    });

    it('detects and styles Elo cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.elo} />);
      expect(screen.getByText('ELO')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-yellow-500',
        'via-yellow-600',
        'to-orange-600',
      );
    });

    it('detects and styles Mir cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.mir} />);
      expect(screen.getByText('MIR')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-green-600',
        'via-blue-600',
        'to-red-600',
      );
    });

    it('detects and styles RuPay cards correctly', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.rupay} />);
      expect(screen.getByText('RUPAY')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-orange-500',
        'via-white',
        'to-green-600',
      );
    });

    it('uses default styling for unknown card types', () => {
      render(<CreditCardPreview cardNumber="1234567890123456" />);
      expect(screen.getByText('UNKNOWN')).toBeInTheDocument();
      expect(screen.getByRole('article')).toHaveClass(
        'from-slate-800',
        'via-slate-700',
        'to-teal-600',
      );
    });
  });

  describe('Card Formatting Rules', () => {
    it('formats Amex cards correctly (15 digits, different gaps)', () => {
      render(
        <CreditCardPreview
          cardNumber={TEST_CARD_NUMBERS.amex}
          editable={false}
        />,
      );
      expect(screen.getByText('3782 822463 10005')).toBeInTheDocument();
    });

    it('shows 4-digit CVC for Amex cards', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.amex} />);
      expect(screen.getByText('••••')).toBeInTheDocument();
    });

    it('shows 3-digit CVC for other card types', () => {
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.visa} />);
      expect(screen.getByText('•••')).toBeInTheDocument();
    });

    it('formats Diners Club cards correctly (14 digits)', () => {
      render(
        <CreditCardPreview
          cardNumber={TEST_CARD_NUMBERS.diners}
          editable={false}
        />,
      );
      expect(screen.getByText('3056 930902 5904')).toBeInTheDocument();
    });
  });

  describe('Editing Functionality', () => {
    it('allows editing card number', () => {
      const mockOnChange = vi.fn();
      render(<CreditCardPreview onChange={mockOnChange} />);

      const cardNumberButton = screen.getByText('•••• •••• •••• ••••');
      fireEvent.click(cardNumberButton);

      const input = screen.getByRole('textbox', { name: /edit card number/i });
      fireEvent.change(input, { target: { value: '4111111111111111' } });
      fireEvent.blur(input);

      expect(mockOnChange).toHaveBeenCalledWith({
        cardNumber: '4111 1111 1111 1111',
        cardholderName: '',
        expiryDate: '',
        cvc: '',
        cardType: 'visa',
      });
    });

    it('auto-formats card number during typing', () => {
      render(<CreditCardPreview />);

      const cardNumberButton = screen.getByText('•••• •••• •••• ••••');
      fireEvent.click(cardNumberButton);

      const input = screen.getByRole('textbox', { name: /edit card number/i });
      fireEvent.change(input, { target: { value: '4111111111111111' } });

      expect(input).toHaveValue('4111 1111 1111 1111');
    });

    it('auto-formats expiry date during typing', () => {
      render(<CreditCardPreview />);

      const expiryButton = screen.getByText('MM/YY');
      fireEvent.click(expiryButton);

      const input = screen.getByRole('textbox', { name: /edit expiry date/i });
      fireEvent.change(input, { target: { value: '1225' } });

      expect(input).toHaveValue('12/25');
    });

    it('converts cardholder name to uppercase', () => {
      render(<CreditCardPreview />);

      const nameButton = screen.getByText('CARDHOLDER NAME');
      fireEvent.click(nameButton);

      const input = screen.getByRole('textbox', {
        name: /edit cardholder name/i,
      });
      fireEvent.change(input, { target: { value: 'john doe' } });

      expect(input).toHaveValue('JOHN DOE');
    });

    it('limits CVC input based on card type', () => {
      // Test Amex (4 digits)
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.amex} />);
      let cvcButton = screen.getByText('••••');
      fireEvent.click(cvcButton);
      let input = screen.getByRole('textbox', { name: /edit cvc/i });
      fireEvent.change(input, { target: { value: '12345' } });
      expect(input).toHaveValue('1234');
      fireEvent.blur(input);

      // Test Visa (3 digits)
      render(<CreditCardPreview cardNumber={TEST_CARD_NUMBERS.visa} />);
      cvcButton = screen.getByText('•••');
      fireEvent.click(cvcButton);
      input = screen.getByRole('textbox', { name: /edit cvc/i });
      fireEvent.change(input, { target: { value: '1234' } });
      expect(input).toHaveValue('123');
    });
  });

  describe('Live Card Type Detection', () => {
    it('updates card type and styling as user types', () => {
      const mockOnChange = vi.fn();
      render(<CreditCardPreview onChange={mockOnChange} />);

      const cardNumberButton = screen.getByText('•••• •••• •••• ••••');
      fireEvent.click(cardNumberButton);

      const input = screen.getByRole('textbox', { name: /edit card number/i });

      // Type partial Visa number
      fireEvent.change(input, { target: { value: '4' } });
      expect(screen.getByText('VISA')).toBeInTheDocument();

      // Clear and type partial Mastercard number
      fireEvent.change(input, { target: { value: '5555' } });
      expect(screen.getByText('MASTERCARD')).toBeInTheDocument();

      // Clear and type partial Amex number
      fireEvent.change(input, { target: { value: '37' } });
      expect(screen.getByText('AMERICAN EXPRESS')).toBeInTheDocument();
    });
  });

  describe('Card Pattern Utilities', () => {
    it('detectCardType function works correctly for all networks', () => {
      expect(detectCardType(TEST_CARD_NUMBERS.visa)).toBe('visa');
      expect(detectCardType(TEST_CARD_NUMBERS.mastercard)).toBe('mastercard');
      expect(detectCardType(TEST_CARD_NUMBERS.amex)).toBe('amex');
      expect(detectCardType(TEST_CARD_NUMBERS.discover)).toBe('discover');
      expect(detectCardType(TEST_CARD_NUMBERS.diners)).toBe('diners');
      expect(detectCardType(TEST_CARD_NUMBERS.jcb)).toBe('jcb');
      expect(detectCardType(TEST_CARD_NUMBERS.unionpay)).toBe('unionpay');
      expect(detectCardType(TEST_CARD_NUMBERS.maestro)).toBe('maestro');
      expect(detectCardType(TEST_CARD_NUMBERS.elo)).toBe('elo');
      expect(detectCardType(TEST_CARD_NUMBERS.mir)).toBe('mir');
      expect(detectCardType(TEST_CARD_NUMBERS.rupay)).toBe('rupay');

      expect(detectCardType('1234567890123456')).toBe('unknown');
      expect(detectCardType('')).toBe(null);
    });
  });

  test('prevents adding more digits than maximum allowed for card type', async () => {
    const mockOnChange = vi.fn();

    render(
      <CreditCardPreview
        cardNumber="4111 1111 1111 1111" // 16 digits, maximum for Visa
        cardholderName="JOHN DOE"
        editable={true}
        onChange={mockOnChange}
      />,
    );

    // Click on card number to edit
    const cardNumberButton = screen.getByLabelText('Edit Card number');
    fireEvent.click(cardNumberButton);

    // Get the input field
    const cardNumberInput = screen.getByDisplayValue('4111 1111 1111 1111');

    // Try to add more digits (should be prevented)
    fireEvent.change(cardNumberInput, {
      target: { value: '4111 1111 1111 1111 123456' },
    });

    // Wait for React state updates
    await waitFor(() => {
      expect(cardNumberInput.value).toBe('4111 1111 1111 1111');
    });

    // Try with a different approach - appending one digit at a time
    fireEvent.change(cardNumberInput, {
      target: { value: '4111 1111 1111 11111' },
    });
    await waitFor(() => {
      expect(cardNumberInput.value).toBe('4111 1111 1111 1111');
    });
  });

  test('prevents adding more than 15 digits for American Express', async () => {
    const mockOnChange = vi.fn();

    render(
      <CreditCardPreview
        cardNumber="3782 822463 10005" // 15 digits, maximum for Amex
        cardholderName="JOHN DOE"
        editable={true}
        onChange={mockOnChange}
      />,
    );

    // Click on card number to edit
    const cardNumberButton = screen.getByLabelText('Edit Card number');
    fireEvent.click(cardNumberButton);

    // Get the input field
    const cardNumberInput = screen.getByDisplayValue('3782 822463 10005');

    // Try to add more digits (should be prevented)
    fireEvent.change(cardNumberInput, {
      target: { value: '3782 822463 10005 1' },
    });

    // Wait for React state updates
    await waitFor(() => {
      expect(cardNumberInput.value).toBe('3782 822463 10005');
    });
  });
});
