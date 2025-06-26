import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import { CreditCardForm } from './CreditCardForm';

describe('CreditCardForm', () => {
  it('renders all form fields by default', () => {
    render(<CreditCardForm />);

    expect(screen.getByLabelText(/card number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/card holder/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/exp\. date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cvc/i)).toBeInTheDocument();
  });

  it('hides cardholder name when showCardholderName is false', () => {
    render(<CreditCardForm showCardholderName={false} />);

    expect(screen.getByLabelText(/card number/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/card holder/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/exp\. date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cvc/i)).toBeInTheDocument();
  });

  it('formats card number with spaces', async () => {
    const user = userEvent.setup();
    render(<CreditCardForm />);

    const cardNumberInput = screen.getByLabelText(/card number/i);
    await user.type(cardNumberInput, '4111111111111111');

    expect(cardNumberInput).toHaveValue('4111 1111 1111 1111');
  });

  it('detects Visa card type and updates icon color', async () => {
    const user = userEvent.setup();
    render(<CreditCardForm />);

    const cardNumberInput = screen.getByLabelText(/card number/i);
    await user.type(cardNumberInput, '4111');

    await waitFor(() => {
      expect(screen.getByText(/detected card.*visa/i)).toBeInTheDocument();
    });
  });

  it('detects American Express and adjusts CVC length', async () => {
    const user = userEvent.setup();
    render(<CreditCardForm />);

    const cardNumberInput = screen.getByLabelText(/card number/i);
    const cvcInput = screen.getByLabelText(/cvc/i);

    await user.type(cardNumberInput, '3782');

    await waitFor(() => {
      expect(cvcInput).toHaveAttribute('maxLength', '4');
      expect(cvcInput).toHaveAttribute('placeholder', '1234');
    });
  });

  it('formats expiry date as MM/YY', async () => {
    const user = userEvent.setup();
    render(<CreditCardForm />);

    const expiryInput = screen.getByLabelText(/exp\. date/i);
    await user.type(expiryInput, '1225');

    expect(expiryInput).toHaveValue('12/25');
  });

  it('formats cardholder name to uppercase', async () => {
    const user = userEvent.setup();
    render(<CreditCardForm />);

    const nameInput = screen.getByLabelText(/card holder/i);
    await user.type(nameInput, 'john doe');

    expect(nameInput).toHaveValue('JOHN DOE');
  });

  it('validates required fields on submit', async () => {
    const onSubmit = vi.fn();
    render(<CreditCardForm onSubmit={onSubmit} />);

    const form =
      screen.getByRole('form') ||
      screen.getByLabelText(/card number/i).closest('form');
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(screen.getByText(/card number is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/cardholder name is required/i),
      ).toBeInTheDocument();
      expect(screen.getByText(/expiry date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/cvc is required/i)).toBeInTheDocument();
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('validates card number with Luhn algorithm', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<CreditCardForm onSubmit={onSubmit} />);

    const cardNumberInput = screen.getByLabelText(/card number/i);
    await user.type(cardNumberInput, '1234567890123456'); // Invalid Luhn

    const form = screen.getByRole('form') || cardNumberInput.closest('form');
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(
        screen.getByText(/please enter a valid card number/i),
      ).toBeInTheDocument();
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('validates expiry date is in the future', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<CreditCardForm onSubmit={onSubmit} />);

    const expiryInput = screen.getByLabelText(/exp\. date/i);
    await user.type(expiryInput, '0120'); // Past date

    const form = screen.getByRole('form') || expiryInput.closest('form');
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(
        screen.getByText(/please enter a valid future date/i),
      ).toBeInTheDocument();
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('validates CVC length based on card type', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<CreditCardForm onSubmit={onSubmit} />);

    // Enter Amex card (requires 4-digit CVC)
    const cardNumberInput = screen.getByLabelText(/card number/i);
    const cvcInput = screen.getByLabelText(/cvc/i);

    await user.type(cardNumberInput, '378282246310005');
    await user.type(cvcInput, '123'); // Too short for Amex

    const form = screen.getByRole('form') || cardNumberInput.closest('form');
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(screen.getByText(/cvc must be 4 digits/i)).toBeInTheDocument();
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<CreditCardForm onSubmit={onSubmit} />);

    // Fill in valid data
    await user.type(screen.getByLabelText(/card number/i), '4111111111111111');
    await user.type(screen.getByLabelText(/card holder/i), 'John Doe');
    await user.type(screen.getByLabelText(/exp\. date/i), '1225');
    await user.type(screen.getByLabelText(/cvc/i), '123');

    const form =
      screen.getByRole('form') ||
      screen.getByLabelText(/card number/i).closest('form');
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        cardNumber: '4111 1111 1111 1111',
        cardholderName: 'JOHN DOE',
        expiryDate: '12/25',
        cvc: '123',
        cardType: 'visa',
      });
    });
  });

  it('calls onChange when form data changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<CreditCardForm onChange={onChange} />);

    const cardNumberInput = screen.getByLabelText(/card number/i);
    await user.type(cardNumberInput, '4111');

    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        cardNumber: '4111',
        cardType: 'visa',
      }),
    );
  });

  it('applies disabled state to all fields', () => {
    render(<CreditCardForm disabled />);

    expect(screen.getByLabelText(/card number/i)).toBeDisabled();
    expect(screen.getByLabelText(/card holder/i)).toBeDisabled();
    expect(screen.getByLabelText(/exp\. date/i)).toBeDisabled();
    expect(screen.getByLabelText(/cvc/i)).toBeDisabled();
  });

  it('uses initial values', () => {
    const initialValues = {
      cardNumber: '4111 1111 1111 1111',
      cardholderName: 'JOHN DOE',
      expiryDate: '12/25',
      cvc: '123',
    };

    render(<CreditCardForm initialValues={initialValues} />);

    expect(screen.getByLabelText(/card number/i)).toHaveValue(
      '4111 1111 1111 1111',
    );
    expect(screen.getByLabelText(/card holder/i)).toHaveValue('JOHN DOE');
    expect(screen.getByLabelText(/exp\. date/i)).toHaveValue('12/25');
    expect(screen.getByLabelText(/cvc/i)).toHaveValue('123');
  });

  it('clears field errors when user starts typing', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<CreditCardForm onSubmit={onSubmit} />);

    // Submit to trigger validation errors
    const form =
      screen.getByRole('form') ||
      screen.getByLabelText(/card number/i).closest('form');
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(screen.getByText(/card number is required/i)).toBeInTheDocument();
    });

    // Start typing in card number field
    const cardNumberInput = screen.getByLabelText(/card number/i);
    await user.type(cardNumberInput, '4');

    // Error should be cleared
    expect(
      screen.queryByText(/card number is required/i),
    ).not.toBeInTheDocument();
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<CreditCardForm size="sm" />);
    let cardNumberInput = screen.getByLabelText(/card number/i);
    expect(cardNumberInput).toHaveClass('text-sm');

    rerender(<CreditCardForm size="lg" />);
    cardNumberInput = screen.getByLabelText(/card number/i);
    expect(cardNumberInput).toHaveClass('text-base');
  });
});
