import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCreditCardFormatting } from './useCreditCardFormatting';

describe('useCreditCardFormatting', () => {
  describe('formatCardNumber', () => {
    it('should format Visa card number correctly', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '4111111111111111' }),
      );

      expect(result.current.formatCardNumber('4111111111111111')).toBe(
        '4111 1111 1111 1111',
      );
    });

    it('should format American Express card number correctly', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '378282246310005' }),
      );

      expect(result.current.formatCardNumber('378282246310005')).toBe(
        '3782 822463 10005',
      );
    });

    it('should handle partial input', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '4111' }),
      );

      expect(result.current.formatCardNumber('4111')).toBe('4111');
    });

    it('should remove non-digit characters', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '4111-1111-1111-1111' }),
      );

      expect(result.current.formatCardNumber('4111-1111-1111-1111')).toBe(
        '4111 1111 1111 1111',
      );
    });
  });

  describe('formatExpiryDate', () => {
    it('should format expiry date correctly', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      expect(result.current.formatExpiryDate('1225')).toBe('12/25');
    });

    it('should handle partial input', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      expect(result.current.formatExpiryDate('12')).toBe('12');
    });

    it('should validate month range', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      expect(result.current.formatExpiryDate('1325')).toBe('12/25');
    });

    it('should remove non-digit characters', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      expect(result.current.formatExpiryDate('12/25')).toBe('12/25');
    });
  });

  describe('formatCvc', () => {
    it('should format CVC for Visa (3 digits)', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '4111111111111111' }),
      );

      expect(result.current.formatCvc('123')).toBe('123');
      expect(result.current.formatCvc('1234')).toBe('123');
    });

    it('should format CVC for Amex (4 digits)', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '378282246310005' }),
      );

      expect(result.current.formatCvc('1234')).toBe('1234');
      expect(result.current.formatCvc('12345')).toBe('1234');
    });

    it('should remove non-digit characters', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '4111111111111111' }),
      );

      expect(result.current.formatCvc('1a2b3')).toBe('123');
    });
  });

  describe('formatCardholderName', () => {
    it('should format cardholder name correctly', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      expect(result.current.formatCardholderName('john doe')).toBe('JOHN DOE');
    });

    it('should allow hyphens and apostrophes', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      expect(result.current.formatCardholderName("john o'connor-smith")).toBe(
        "JOHN O'CONNOR-SMITH",
      );
    });

    it('should remove numbers and special characters', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      expect(result.current.formatCardholderName('john123 doe!@#')).toBe(
        'JOHN DOE',
      );
    });

    it('should limit length', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      const longName = 'a'.repeat(30);
      expect(result.current.formatCardholderName(longName)).toHaveLength(26);
    });
  });

  describe('validateCardNumber', () => {
    it('should validate correct Visa number', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '4111111111111111' }),
      );

      expect(result.current.validateCardNumber('4111 1111 1111 1111')).toBe(
        true,
      );
    });

    it('should validate correct Amex number', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '378282246310005' }),
      );

      expect(result.current.validateCardNumber('3782 822463 10005')).toBe(true);
    });

    it('should reject invalid numbers', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '1234567890123456' }),
      );

      expect(result.current.validateCardNumber('1234 5678 9012 3456')).toBe(
        false,
      );
    });

    it('should reject numbers that are too short', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '123456789012' }),
      );

      expect(result.current.validateCardNumber('1234 5678 9012')).toBe(false);
    });

    it('should reject numbers that are too long', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '12345678901234567890' }),
      );

      expect(
        result.current.validateCardNumber('1234 5678 9012 3456 7890'),
      ).toBe(false);
    });
  });

  describe('validateExpiryDate', () => {
    it('should validate future date', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      const futureYear = ((new Date().getFullYear() + 1) % 100)
        .toString()
        .padStart(2, '0');
      expect(result.current.validateExpiryDate(`12/${futureYear}`)).toBe(true);
    });

    it('should reject past date', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      expect(result.current.validateExpiryDate('12/20')).toBe(false);
    });

    it('should reject invalid month', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      const futureYear = ((new Date().getFullYear() + 1) % 100)
        .toString()
        .padStart(2, '0');
      expect(result.current.validateExpiryDate(`13/${futureYear}`)).toBe(false);
      expect(result.current.validateExpiryDate(`00/${futureYear}`)).toBe(false);
    });

    it('should reject incomplete date', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '' }),
      );

      expect(result.current.validateExpiryDate('12/2')).toBe(false);
      expect(result.current.validateExpiryDate('1/25')).toBe(false);
    });
  });

  describe('validateCvc', () => {
    it('should validate 3-digit CVC for Visa', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '4111111111111111' }),
      );

      expect(result.current.validateCvc('123', 'visa')).toBe(true);
      expect(result.current.validateCvc('12', 'visa')).toBe(false);
      expect(result.current.validateCvc('1234', 'visa')).toBe(false);
    });

    it('should validate 4-digit CVC for Amex', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '378282246310005' }),
      );

      expect(result.current.validateCvc('1234', 'amex')).toBe(true);
      expect(result.current.validateCvc('123', 'amex')).toBe(false);
      expect(result.current.validateCvc('12345', 'amex')).toBe(false);
    });
  });

  describe('cardType detection', () => {
    it('should detect Visa', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '4111111111111111' }),
      );

      expect(result.current.cardType).toBe('visa');
    });

    it('should detect Mastercard', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '5555555555554444' }),
      );

      expect(result.current.cardType).toBe('mastercard');
    });

    it('should detect American Express', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({ cardNumber: '378282246310005' }),
      );

      expect(result.current.cardType).toBe('amex');
    });

    it('should use provided card type override', () => {
      const { result } = renderHook(() =>
        useCreditCardFormatting({
          cardNumber: '4111111111111111',
          cardType: 'mastercard',
        }),
      );

      expect(result.current.cardType).toBe('mastercard');
    });
  });
});
