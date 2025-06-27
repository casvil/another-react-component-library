import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import CreditCard from 'lucide-react/icons/credit-card';
import Calendar from 'lucide-react/icons/calendar';
import Lock from 'lucide-react/icons/lock';
import User from 'lucide-react/icons/user';

import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import { ErrorMessage } from '../../atoms/ErrorMessage/ErrorMessage';
import {
  useCreditCardFormatting,
  FORM_FIELD_CONFIG,
  ERROR_MESSAGES,
  getCardTypeColor,
  getCvcPlaceholder,
  getMaxLengthWithSpaces,
} from '../../hooks/useCreditCardFormatting/useCreditCardFormatting';
import type { Size } from '../../@types/size';
import type { CardType } from '../../utils/cardPatterns';

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

  // Use the shared formatting and validation hook
  const {
    formatCardNumber,
    formatExpiryDate,
    formatCvc,
    formatCardholderName,
    validateCardNumber,
    validateExpiryDate,
    validateCvc,
    cardType,
    formatRules,
  } = useCreditCardFormatting({
    cardNumber: formData.cardNumber,
    mode: 'form',
  });

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

  // Handle form submission with validation
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Validate all fields using the hook's validation functions
      const newErrors: Partial<Record<keyof CreditCardFormData, string>> = {};

      if (!formData.cardNumber) {
        newErrors.cardNumber = ERROR_MESSAGES.cardNumber.required;
      } else if (!validateCardNumber(formData.cardNumber)) {
        newErrors.cardNumber = ERROR_MESSAGES.cardNumber.invalid;
      }

      if (showCardholderName && !formData.cardholderName.trim()) {
        newErrors.cardholderName = ERROR_MESSAGES.cardholderName.required;
      }

      if (!formData.expiryDate) {
        newErrors.expiryDate = ERROR_MESSAGES.expiryDate.required;
      } else if (!validateExpiryDate(formData.expiryDate)) {
        newErrors.expiryDate = ERROR_MESSAGES.expiryDate.invalid;
      }

      if (!formData.cvc) {
        newErrors.cvc = ERROR_MESSAGES.cvc.required;
      } else if (!validateCvc(formData.cvc, cardType)) {
        newErrors.cvc = ERROR_MESSAGES.cvc.invalid(formatRules.cvcLength);
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
      validateCvc,
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
    <form onSubmit={handleSubmit} className={containerClass} role="form">
      {/* Card Number */}
      <div>
        <Label htmlFor={FORM_FIELD_CONFIG.cardNumber.id}>
          {FORM_FIELD_CONFIG.cardNumber.label}
        </Label>
        <Input
          id={FORM_FIELD_CONFIG.cardNumber.id}
          size={size}
          icon={CreditCard}
          iconClassName={getCardTypeColor(cardType)}
          value={formData.cardNumber}
          onChange={(e) =>
            updateFormData('cardNumber', formatCardNumber(e.target.value))
          }
          placeholder={FORM_FIELD_CONFIG.cardNumber.placeholder}
          inputMode={FORM_FIELD_CONFIG.cardNumber.inputMode}
          autoComplete={FORM_FIELD_CONFIG.cardNumber.autoComplete}
          maxLength={getMaxLengthWithSpaces(formatRules.maxLength)}
          className={clsx(
            FORM_FIELD_CONFIG.cardNumber.className,
            errors.cardNumber && FORM_FIELD_CONFIG.cardNumber.errorClass,
          )}
          disabled={disabled}
          required={FORM_FIELD_CONFIG.cardNumber.required}
        />
        {errors.cardNumber && (
          <ErrorMessage id={`${FORM_FIELD_CONFIG.cardNumber.id}-error`}>
            {errors.cardNumber}
          </ErrorMessage>
        )}
      </div>

      {/* Cardholder Name */}
      {showCardholderName && (
        <div>
          <Label htmlFor={FORM_FIELD_CONFIG.cardholderName.id}>
            {FORM_FIELD_CONFIG.cardholderName.label}
          </Label>
          <Input
            id={FORM_FIELD_CONFIG.cardholderName.id}
            size={size}
            icon={User}
            value={formData.cardholderName}
            onChange={(e) =>
              updateFormData(
                'cardholderName',
                formatCardholderName(e.target.value),
              )
            }
            placeholder={FORM_FIELD_CONFIG.cardholderName.placeholder}
            autoComplete={FORM_FIELD_CONFIG.cardholderName.autoComplete}
            className={clsx(
              FORM_FIELD_CONFIG.cardholderName.className,
              errors.cardholderName &&
                FORM_FIELD_CONFIG.cardholderName.errorClass,
            )}
            disabled={disabled}
            required={showCardholderName}
          />
          {errors.cardholderName && (
            <ErrorMessage id={`${FORM_FIELD_CONFIG.cardholderName.id}-error`}>
              {errors.cardholderName}
            </ErrorMessage>
          )}
        </div>
      )}

      {/* Expiry Date and CVC */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor={FORM_FIELD_CONFIG.expiryDate.id}>
            {FORM_FIELD_CONFIG.expiryDate.label}
          </Label>
          <Input
            id={FORM_FIELD_CONFIG.expiryDate.id}
            size={size}
            icon={Calendar}
            value={formData.expiryDate}
            onChange={(e) =>
              updateFormData('expiryDate', formatExpiryDate(e.target.value))
            }
            placeholder={FORM_FIELD_CONFIG.expiryDate.placeholder}
            inputMode={FORM_FIELD_CONFIG.expiryDate.inputMode}
            autoComplete={FORM_FIELD_CONFIG.expiryDate.autoComplete}
            maxLength={FORM_FIELD_CONFIG.expiryDate.maxLength}
            className={clsx(
              FORM_FIELD_CONFIG.expiryDate.className,
              errors.expiryDate && FORM_FIELD_CONFIG.expiryDate.errorClass,
            )}
            disabled={disabled}
            required={FORM_FIELD_CONFIG.expiryDate.required}
          />
          {errors.expiryDate && (
            <ErrorMessage id={`${FORM_FIELD_CONFIG.expiryDate.id}-error`}>
              {errors.expiryDate}
            </ErrorMessage>
          )}
        </div>

        <div>
          <Label htmlFor={FORM_FIELD_CONFIG.cvc.id}>
            {FORM_FIELD_CONFIG.cvc.label}
          </Label>
          <Input
            id={FORM_FIELD_CONFIG.cvc.id}
            size={size}
            icon={Lock}
            value={formData.cvc}
            onChange={(e) => updateFormData('cvc', formatCvc(e.target.value))}
            placeholder={getCvcPlaceholder(formatRules.cvcLength)}
            inputMode={FORM_FIELD_CONFIG.cvc.inputMode}
            autoComplete={FORM_FIELD_CONFIG.cvc.autoComplete}
            maxLength={formatRules.cvcLength}
            className={clsx(
              FORM_FIELD_CONFIG.cvc.className,
              errors.cvc && FORM_FIELD_CONFIG.cvc.errorClass,
            )}
            disabled={disabled}
            required={FORM_FIELD_CONFIG.cvc.required}
          />
          {errors.cvc && (
            <ErrorMessage id={`${FORM_FIELD_CONFIG.cvc.id}-error`}>
              {errors.cvc}
            </ErrorMessage>
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
