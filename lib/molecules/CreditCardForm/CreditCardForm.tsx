import React, { useState, useCallback, useMemo } from 'react';
import clsx from 'clsx';
import CreditCard from 'lucide-react/icons/credit-card';
import Calendar from 'lucide-react/icons/calendar';
import Lock from 'lucide-react/icons/lock';
import User from 'lucide-react/icons/user';

import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';
import {
  CardType,
  detectCardType,
  getCardFormatRules,
} from '../../utils/cardPatterns';
import type { Size } from '../../@types/size';

export interface CreditCardFormData {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvc: string;
  cardType?: CardType | null;
}

export interface CreditCardFormProps {
  size?: Size;
  className?: string;
  onSubmit?: (data: CreditCardFormData) => void;
  onChange?: (data: Partial<CreditCardFormData>) => void;
  showCardholderName?: boolean;
  disabled?: boolean;
  initialValues?: Partial<CreditCardFormData>;
}

/**
 * CreditCardForm molecule component.
 * A complete credit card form with automatic formatting, validation, and card type detection.
 * Uses existing Input and Label components from the library.
 */
export const CreditCardForm: React.FC<CreditCardFormProps> = ({
  size = 'md',
  className,
  onSubmit,
  onChange,
  showCardholderName = true,
  disabled = false,
  initialValues = {},
}) => {
  const [formData, setFormData] = useState<CreditCardFormData>({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvc: '',
    cardType: null,
    ...initialValues,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CreditCardFormData, string>>
  >({});

  // Detect card type from card number
  const cardType = useMemo((): CardType | null => {
    return detectCardType(formData.cardNumber);
  }, [formData.cardNumber]);

  // Get formatting rules for current card type
  const formatRules = useMemo(() => {
    return getCardFormatRules(cardType);
  }, [cardType]);

  // Format card number with spaces
  const formatCardNumber = useCallback(
    (input: string): string => {
      const cleanInput = input.replace(/\D/g, '');
      let formatted = '';
      let digitIndex = 0;

      for (let i = 0; i < cleanInput.length; i++) {
        if (formatRules.gaps.includes(digitIndex) && formatted.length > 0) {
          formatted += ' ';
        }
        formatted += cleanInput[i];
        digitIndex++;
      }

      return formatted;
    },
    [formatRules.gaps],
  );

  // Format expiry date as MM/YY
  const formatExpiryDate = useCallback((input: string): string => {
    const cleanInput = input.replace(/\D/g, '').slice(0, 4);
    if (cleanInput.length >= 2) {
      return `${cleanInput.slice(0, 2)}/${cleanInput.slice(2)}`;
    }
    return cleanInput;
  }, []);

  // Format CVC (digits only)
  const formatCvc = useCallback(
    (input: string): string => {
      return input.replace(/\D/g, '').slice(0, formatRules.cvcLength);
    },
    [formatRules.cvcLength],
  );

  // Validate card number using Luhn algorithm
  const validateCardNumber = useCallback((cardNumber: string): boolean => {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    if (cleanNumber.length < 13 || cleanNumber.length > 19) return false;

    let sum = 0;
    let isEven = false;

    for (let i = cleanNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanNumber[i]);

      if (isEven) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  }, []);

  // Validate expiry date
  const validateExpiryDate = useCallback((expiryDate: string): boolean => {
    const cleanValue = expiryDate.replace(/\D/g, '');
    if (cleanValue.length !== 4) return false;

    const month = parseInt(cleanValue.slice(0, 2));
    const year = parseInt(cleanValue.slice(2, 4));

    if (month < 1 || month > 12) return false;

    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    return (
      year > currentYear || (year === currentYear && month >= currentMonth)
    );
  }, []);

  // Update form data and trigger validation
  const updateFormData = useCallback(
    (field: keyof CreditCardFormData, value: string | CardType | null) => {
      const newFormData = { ...formData, [field]: value };

      // Add card type if updating card number
      if (field === 'cardNumber') {
        newFormData.cardType = cardType;
      }

      setFormData(newFormData);

      // Clear error for this field
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }

      // Trigger onChange callback
      if (onChange) {
        onChange(newFormData);
      }
    },
    [formData, cardType, errors, onChange],
  );

  // Handle form submission
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Validate all fields
      const newErrors: Partial<Record<keyof CreditCardFormData, string>> = {};

      if (!formData.cardNumber) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!validateCardNumber(formData.cardNumber)) {
        newErrors.cardNumber = 'Please enter a valid card number';
      }

      if (showCardholderName && !formData.cardholderName.trim()) {
        newErrors.cardholderName = 'Cardholder name is required';
      }

      if (!formData.expiryDate) {
        newErrors.expiryDate = 'Expiry date is required';
      } else if (!validateExpiryDate(formData.expiryDate)) {
        newErrors.expiryDate = 'Please enter a valid future date';
      }

      if (!formData.cvc) {
        newErrors.cvc = 'CVC is required';
      } else if (formData.cvc.length !== formatRules.cvcLength) {
        newErrors.cvc = `CVC must be ${formatRules.cvcLength} digits`;
      }

      setErrors(newErrors);

      // If no errors, submit the form
      if (Object.keys(newErrors).length === 0 && onSubmit) {
        onSubmit({ ...formData, cardType });
      }
    },
    [
      formData,
      showCardholderName,
      validateCardNumber,
      validateExpiryDate,
      formatRules.cvcLength,
      cardType,
      onSubmit,
    ],
  );

  const containerClass = clsx(
    'space-y-4',
    disabled && 'opacity-60 pointer-events-none',
    className,
  );

  return (
    <form onSubmit={handleSubmit} className={containerClass}>
      {/* Card Number */}
      <div>
        <Label htmlFor="credit-card-number" size={size}>
          Card Number
        </Label>
        <Input
          id="credit-card-number"
          size={size}
          icon={CreditCard}
          iconClassName={clsx(
            cardType === 'visa' && 'text-blue-600',
            cardType === 'mastercard' && 'text-red-500',
            cardType === 'amex' && 'text-green-600',
            cardType === 'discover' && 'text-orange-500',
          )}
          value={formData.cardNumber}
          onChange={(e) =>
            updateFormData('cardNumber', formatCardNumber(e.target.value))
          }
          placeholder="1234 5678 9012 3456"
          inputMode="numeric"
          autoComplete="cc-number"
          maxLength={formatRules.maxLength}
          className={clsx(
            'font-mono tracking-wider',
            errors.cardNumber && 'border-red-300 focus:ring-red-500',
          )}
          disabled={disabled}
          required
        />
        {errors.cardNumber && (
          <ErrorMessage id="credit-card-number-error">
            {errors.cardNumber}
          </ErrorMessage>
        )}
      </div>

      {/* Cardholder Name */}
      {showCardholderName && (
        <div>
          <Label htmlFor="cardholder-name" size={size}>
            Card Holder
          </Label>
          <Input
            id="cardholder-name"
            size={size}
            icon={User}
            value={formData.cardholderName}
            onChange={(e) =>
              updateFormData('cardholderName', e.target.value.toUpperCase())
            }
            placeholder="VICTOR SAULER"
            autoComplete="cc-name"
            className={clsx(
              'uppercase tracking-wider',
              errors.cardholderName && 'border-red-300 focus:ring-red-500',
            )}
            disabled={disabled}
            required={showCardholderName}
          />
          {errors.cardholderName && (
            <ErrorMessage id="cardholder-name-error">
              {errors.cardholderName}
            </ErrorMessage>
          )}
        </div>
      )}

      {/* Expiry Date and CVC */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="expiry-date" size={size}>
            Exp. Date
          </Label>
          <Input
            id="expiry-date"
            size={size}
            icon={Calendar}
            value={formData.expiryDate}
            onChange={(e) =>
              updateFormData('expiryDate', formatExpiryDate(e.target.value))
            }
            placeholder="MM/YY"
            inputMode="numeric"
            autoComplete="cc-exp"
            maxLength={5}
            className={clsx(
              'font-mono tracking-wider',
              errors.expiryDate && 'border-red-300 focus:ring-red-500',
            )}
            disabled={disabled}
            required
          />
          {errors.expiryDate && (
            <ErrorMessage id="expiry-date-error">
              {errors.expiryDate}
            </ErrorMessage>
          )}
        </div>

        <div>
          <Label htmlFor="cvc" size={size}>
            CVC
          </Label>
          <Input
            id="cvc"
            size={size}
            icon={Lock}
            value={formData.cvc}
            onChange={(e) => updateFormData('cvc', formatCvc(e.target.value))}
            placeholder={formatRules.cvcLength === 4 ? '1234' : '123'}
            inputMode="numeric"
            autoComplete="cc-csc"
            maxLength={formatRules.cvcLength}
            className={clsx(
              'font-mono tracking-wider text-center',
              errors.cvc && 'border-red-300 focus:ring-red-500',
            )}
            disabled={disabled}
            required
          />
          {errors.cvc && (
            <ErrorMessage id="cvc-error">{errors.cvc}</ErrorMessage>
          )}
        </div>
      </div>

      {/* Card Type Display */}
      {cardType && cardType !== 'unknown' && (
        <div className="text-sm text-gray-600">
          <span className="font-medium">Detected card:</span>{' '}
          <span className="capitalize font-semibold">{cardType}</span>
        </div>
      )}
    </form>
  );
};

CreditCardForm.displayName = 'CreditCardForm';
