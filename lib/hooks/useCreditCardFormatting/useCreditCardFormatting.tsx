import { useCallback, useMemo } from 'react';
import {
  CardType,
  detectCardType,
  getCardFormatRules,
  CARD_PATTERNS,
} from '../../utils/cardPatterns';
import {
  creditCardFieldWidths,
  creditCardFormFieldClasses,
  creditCardFormErrorClasses,
  creditCardTypeColors,
} from '../../@types/size';

// Static field configurations for credit card UI components
export const STATIC_FIELD_CONFIG = {
  cardNumber: {
    label: 'Card number',
    ariaLabel: 'Credit card number',
    id: 'cardNumber',
    placeholder: '•••• •••• •••• ••••',
    inputMode: 'numeric' as const,
    maxLength: 23, // 19 digits + 4 spaces max
  },
  cardholderName: {
    label: 'cardholder name',
    ariaLabel: 'Cardholder name',
    id: 'cardholderName',
    placeholder: 'CARDHOLDER NAME',
    inputMode: 'text' as const,
    maxLength: 26,
  },
  expiryDate: {
    label: 'expiry date',
    ariaLabel: 'Expiry date',
    id: 'expiryDate',
    placeholder: 'MM/YY',
    inputMode: 'numeric' as const,
    maxLength: 5,
  },
  cvc: {
    label: 'cvc',
    ariaLabel: 'CVC',
    id: 'cvc',
  },
} as const;

// CSS class configurations for CreditCardPreview
export const CSS_CLASSES = {
  input:
    'bg-transparent border-none outline-none text-white font-mono tracking-wider min-h-[1.25em]',
  span: 'font-mono tracking-wider min-h-[1.25em] inline-block',
  button:
    'font-mono tracking-wider text-left cursor-pointer hover:bg-white/10 rounded px-1 -mx-1 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 min-h-[1.25em] inline-block',
} as const;

// Form field configurations for CreditCardForm
export const FORM_FIELD_CONFIG = {
  cardNumber: {
    id: 'credit-card-number',
    label: 'Card Number',
    placeholder: '1234 5678 9012 3456',
    inputMode: 'numeric' as const,
    autoComplete: 'cc-number',
    className: creditCardFormFieldClasses.cardNumber,
    errorClass: creditCardFormErrorClasses.default,
    required: true,
  },
  cardholderName: {
    id: 'cardholder-name',
    label: 'Card Holder',
    placeholder: 'VICTOR SAULER',
    inputMode: 'text' as const,
    autoComplete: 'cc-name',
    className: creditCardFormFieldClasses.cardholderName,
    errorClass: creditCardFormErrorClasses.default,
    required: true,
  },
  expiryDate: {
    id: 'expiry-date',
    label: 'Exp. Date',
    placeholder: 'MM/YY',
    inputMode: 'numeric' as const,
    autoComplete: 'cc-exp',
    maxLength: 5,
    className: creditCardFormFieldClasses.expiryDate,
    errorClass: creditCardFormErrorClasses.default,
    required: true,
  },
  cvc: {
    id: 'cvc',
    label: 'CVC',
    inputMode: 'numeric' as const,
    autoComplete: 'cc-csc',
    className: creditCardFormFieldClasses.cvc,
    errorClass: creditCardFormErrorClasses.default,
    required: true,
  },
} as const;

// Card type color configurations
export const CARD_TYPE_COLORS = creditCardTypeColors;

// Error messages for form validation
export const ERROR_MESSAGES = {
  cardNumber: {
    required: 'Card number is required',
    invalid: 'Please enter a valid card number',
  },
  cardholderName: {
    required: 'Cardholder name is required',
  },
  expiryDate: {
    required: 'Expiry date is required',
    invalid: 'Please enter a valid future date',
  },
  cvc: {
    required: 'CVC is required',
    invalid: (length: number) => `CVC must be ${length} digits`,
  },
} as const;

export interface UseCreditCardFormattingReturn {
  formatCardNumber: (input: string) => string;
  formatExpiryDate: (input: string) => string;
  formatCvc: (input: string) => string;
  formatCardholderName: (input: string) => string;
  validateCardNumber: (cardNumber: string) => boolean;
  validateExpiryDate: (expiryDate: string) => boolean;
  validateCvc: (cvc: string, cardType: CardType | null) => boolean;
  cardType: CardType | null;
  formatRules: ReturnType<typeof getCardFormatRules>;
}

export interface UseCreditCardFormattingProps {
  cardNumber: string;
  cardType?: CardType | null;
  mode?: 'form' | 'preview';
}

/**
 * Custom hook for credit card formatting and validation logic.
 * Centralizes all formatting and validation functions used by both
 * CreditCardForm and CreditCardPreview components.
 */
export const useCreditCardFormatting = ({
  cardNumber,
  cardType: propCardType,
  mode = 'form', // Default to form mode
}: UseCreditCardFormattingProps): UseCreditCardFormattingReturn => {
  // Detect card type from card number or use provided type
  const cardType = useMemo(() => {
    return propCardType || detectCardType(cardNumber);
  }, [cardNumber, propCardType]);

  // Get formatting rules for current card type
  // For empty cardNumber, we need to detect from current context, not the empty cardNumber
  const formatRules = useMemo(() => {
    // Use the detected cardType (which includes live detection) instead of just the cardNumber prop
    return getCardFormatRules(cardType);
  }, [cardType]);

  // Format card number with spaces according to card type
  const formatCardNumber = useCallback(
    (input: string): string => {
      // Remove all non-digit characters
      const cleanInput = input.replace(/\D/g, '');

      // Determine the appropriate max length for this input
      let maxLength: number;

      // Check if we have an existing complete card vs a new card being typed
      const originalCleanNumber = cardNumber.replace(/\D/g, '');
      const currentLength = originalCleanNumber.length;
      const inputLength = cleanInput.length;

      // Check if we have a complete initial card (like in CreditCardPreview)
      // vs a card being typed character by character (like in CreditCardForm)
      const hasCompleteInitialCard = currentLength >= 13;
      const isExtendingCard = inputLength > currentLength;

      // Check if current length is a valid complete length for the detected card type
      let isCurrentLengthComplete = false;
      if (hasCompleteInitialCard) {
        const currentCardType =
          propCardType || detectCardType(originalCleanNumber);
        const cardPattern = CARD_PATTERNS.find(
          (c) => c.name === currentCardType,
        );
        if (cardPattern) {
          isCurrentLengthComplete = cardPattern.lengths.includes(currentLength);
        }
      }

      // Constrain to original length based on mode:
      // 'preview' mode: Constrain complete cards to their original length
      // 'form' mode: Only constrain when shortening, allow extension for new cards
      const isCompleteExistingCard =
        mode === 'preview'
          ? hasCompleteInitialCard && isCurrentLengthComplete
          : hasCompleteInitialCard && !isExtendingCard;

      if (isCompleteExistingCard) {
        // Existing complete card - use its length to constrain editing
        const originalLength = originalCleanNumber.length;

        // Get the card pattern for the original card
        const currentCardType =
          propCardType || detectCardType(originalCleanNumber);
        const cardPattern = CARD_PATTERNS.find(
          (c) => c.name === currentCardType,
        );

        if (cardPattern && cardPattern.lengths.length > 1) {
          // For cards with multiple valid lengths, determine the appropriate limit
          const validLengths = cardPattern.lengths.sort((a, b) => a - b);

          // If the original card has a valid length, use that as the limit
          if (validLengths.includes(originalLength)) {
            maxLength = originalLength;
          } else {
            // If original length is not valid, find the next valid length
            maxLength =
              validLengths.find((len) => len >= originalLength) ||
              validLengths[validLengths.length - 1];
          }
        } else {
          // Single length card or unknown, use original length or reasonable default
          maxLength = originalLength || 16;
        }
      } else {
        // New card being typed or incomplete card - allow typing based on detected type
        const inputCardType = propCardType || detectCardType(cleanInput);
        const inputCardPattern = CARD_PATTERNS.find(
          (c) => c.name === inputCardType,
        );

        if (inputCardPattern) {
          // For form mode, use the most common length rather than absolute maximum
          // This provides better UX while still being technically correct
          if (mode === 'form') {
            // Use the most common length for each card type
            const commonLengths = {
              visa: 16, // Most common, though 13 and 19 are also valid
              mastercard: 16,
              amex: 15,
              discover: 16,
              diners: 14,
              jcb: 16,
              unionpay: 16,
              maestro: 16, // Most common, though 12-19 are valid
              elo: 16,
              mir: 16,
              rupay: 16,
            };
            maxLength =
              commonLengths[inputCardType as keyof typeof commonLengths] || 16;
          } else {
            // For preview mode, use the maximum length to allow all valid cards
            maxLength = Math.max(...inputCardPattern.lengths);
          }
        } else {
          // Unknown card type, use reasonable default
          maxLength = 16;
        }
      }

      // Limit to determined maximum length
      const truncatedInput = cleanInput.slice(0, maxLength);

      // Get formatting gaps based on detected card type from current input
      const currentInputType = propCardType || detectCardType(truncatedInput);
      const currentFormatRules = getCardFormatRules(currentInputType);

      let formatted = '';
      let digitIndex = 0;

      for (let i = 0; i < truncatedInput.length; i++) {
        if (
          currentFormatRules.gaps.includes(digitIndex) &&
          formatted.length > 0
        ) {
          formatted += ' ';
        }
        formatted += truncatedInput[i];
        digitIndex++;
      }

      return formatted;
    },
    [cardNumber, propCardType, mode],
  );

  // Format expiry date as MM/YY with basic validation
  const formatExpiryDate = useCallback((input: string): string => {
    const cleanInput = input.replace(/\D/g, '').slice(0, 4);
    if (cleanInput.length >= 2) {
      const month = cleanInput.slice(0, 2);
      const year = cleanInput.slice(2);

      // Basic month validation (01-12)
      const monthNum = parseInt(month, 10);
      const validMonth = monthNum >= 1 && monthNum <= 12 ? month : '12';

      // Only add slash if there are year digits
      if (year.length > 0) {
        return `${validMonth}/${year}`;
      } else {
        return validMonth;
      }
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

  // Format cardholder name (letters, spaces, hyphens, apostrophes only)
  const formatCardholderName = useCallback((input: string): string => {
    return input
      .replace(/[^a-zA-Z\s\-']/g, '')
      .toUpperCase()
      .slice(0, 26); // Reasonable limit for cardholder names
  }, []);

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

  // Validate CVC
  const validateCvc = useCallback(
    (cvc: string, cardType: CardType | null): boolean => {
      const cleanCvc = cvc.replace(/\D/g, '');
      const expectedLength = getCardFormatRules(cardType).cvcLength;
      return cleanCvc.length === expectedLength;
    },
    [],
  );

  return {
    formatCardNumber,
    formatExpiryDate,
    formatCvc,
    formatCardholderName,
    validateCardNumber,
    validateExpiryDate,
    validateCvc,
    cardType,
    formatRules,
  };
};

// Helper functions for credit card UI components
export const getCvcConfig = (cardType: CardType | null) => ({
  label: 'cvc',
  placeholder: cardType === 'amex' ? '••••' : '•••',
  inputMode: 'numeric' as const,
  maxLength: cardType === 'amex' ? 4 : 3,
});

export const getFieldConfig = (
  field: keyof typeof STATIC_FIELD_CONFIG,
  cardType: CardType | null = null,
) => {
  if (field === 'cvc') {
    return getCvcConfig(cardType);
  }
  return STATIC_FIELD_CONFIG[field];
};

export const getCommonStyle = (field: keyof typeof creditCardFieldWidths) => ({
  fontSize: 'inherit',
  fontFamily: 'inherit',
  width: creditCardFieldWidths[field],
});

// Helper functions for CreditCardForm
export const getFormFieldConfig = (field: keyof typeof FORM_FIELD_CONFIG) => {
  const baseConfig = FORM_FIELD_CONFIG[field];
  return baseConfig;
};

export const getCardTypeColor = (cardType: CardType | null) => {
  if (!cardType || !(cardType in CARD_TYPE_COLORS)) return '';
  return CARD_TYPE_COLORS[cardType as keyof typeof CARD_TYPE_COLORS];
};

export const getCvcPlaceholder = (cvcLength: number) => {
  return cvcLength === 4 ? '1234' : '123';
};

export const getMaxLengthWithSpaces = (maxLength: number) => {
  return maxLength + Math.floor(maxLength / 4); // Account for spaces
};
