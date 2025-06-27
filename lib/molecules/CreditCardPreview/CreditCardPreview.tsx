import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import clsx from 'clsx';

import {
  CardType,
  detectCardType,
  getCardPattern,
} from '../../utils/cardPatterns';
import { useCreditCardFormatting } from '../../hooks/useCreditCardFormatting/useCreditCardFormatting';
import type { Size } from '../../@types/size';
import {
  creditCardPreviewSizeClasses,
  creditCardTextSizeClasses,
  creditCardBottomRowSpacing,
} from '../../@types/size';

type FieldName = 'cardNumber' | 'cardholderName' | 'expiryDate' | 'cvc';

export interface CreditCardPreviewProps {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvc?: string;
  cardType?: CardType | null;
  onChange?: (data: {
    cardNumber?: string;
    cardholderName?: string;
    expiryDate?: string;
    cvc?: string;
    cardType?: CardType | null;
  }) => void;
  editable?: boolean;
  className?: string;
  size?: Size;
  showCvc?: boolean;
}

// Field configurations
const FIELD_CONFIG = {
  cardNumber: {
    label: 'Card number',
    placeholder: '•••• •••• •••• ••••',
    inputMode: 'numeric' as const,
  },
  cardholderName: {
    label: 'cardholder name',
    placeholder: 'CARDHOLDER NAME',
    inputMode: 'text' as const,
  },
  expiryDate: {
    label: 'expiry date',
    placeholder: 'MM/YY',
    inputMode: 'numeric' as const,
    maxLength: 5,
  },
} as const;

// Helper function to get CVC config based on card type
const getCvcConfig = (cardType: CardType | null) => ({
  label: 'cvc',
  placeholder: cardType === 'amex' ? '••••' : '•••',
  inputMode: 'numeric' as const,
  maxLength: cardType === 'amex' ? 4 : 3,
});

/**
 * CreditCardPreview molecule component.
 * An editable credit card visualization that matches real credit card design.
 */
export const CreditCardPreview: React.FC<CreditCardPreviewProps> = ({
  cardNumber = '',
  cardholderName = '',
  expiryDate = '',
  cvc = '',
  cardType: propCardType,
  onChange,
  editable = true,
  className,
  size = 'md',
  showCvc = true,
}) => {
  const [editingField, setEditingField] = useState<FieldName | null>(null);
  const [tempValues, setTempValues] = useState({
    cardNumber,
    cardholderName,
    expiryDate,
    cvc,
  });

  // Create input refs inside the component
  const inputRefs = useRef<
    Record<FieldName, React.RefObject<HTMLInputElement>>
  >({
    cardNumber: useRef<HTMLInputElement>(null),
    cardholderName: useRef<HTMLInputElement>(null),
    expiryDate: useRef<HTMLInputElement>(null),
    cvc: useRef<HTMLInputElement>(null),
  }).current;

  // Use shared formatting hook
  const {
    formatCardNumber,
    formatExpiryDate,
    formatCvc,
    formatCardholderName,
    cardType: detectedCardType,
  } = useCreditCardFormatting({
    cardNumber: cardNumber,
    cardType: propCardType,
    mode: 'preview',
  });

  // Get live card type from current input for UI updates
  const liveCardType = useMemo(() => {
    return propCardType || detectCardType(tempValues.cardNumber);
  }, [tempValues.cardNumber, propCardType]);

  // Memoize formatters to avoid useCallback dependency issues
  const formatters = useMemo(
    () => ({
      cardNumber: formatCardNumber,
      cardholderName: formatCardholderName,
      expiryDate: formatExpiryDate,
      cvc: formatCvc,
    }),
    [formatCardNumber, formatCardholderName, formatExpiryDate, formatCvc],
  );

  // Current props mapping
  const currentProps = { cardNumber, cardholderName, expiryDate, cvc };
  const currentTextSizes = creditCardTextSizeClasses[size];
  const cardPattern = getCardPattern(liveCardType);

  // Event handlers
  const handleFieldClick = useCallback(
    (field: FieldName) => editable && setEditingField(field),
    [editable],
  );

  const handleInputChange = useCallback(
    (field: FieldName, value: string) => {
      // Format the value and ensure it doesn't exceed max length
      const formattedValue = formatters[field](value);
      setTempValues((prev) => ({ ...prev, [field]: formattedValue }));
    },
    [formatters],
  );

  const handleInputBlur = useCallback(() => {
    setEditingField(null);
    onChange?.({ ...tempValues, cardType: liveCardType });
  }, [tempValues, onChange, liveCardType]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleInputBlur();
      if (e.key === 'Escape') {
        setEditingField(null);
        setTempValues({ cardNumber, cardholderName, expiryDate, cvc });
      }
    },
    [handleInputBlur, cardNumber, cardholderName, expiryDate, cvc],
  );

  // Effects
  useEffect(() => {
    if (editingField) {
      inputRefs[editingField].current?.focus();
      inputRefs[editingField].current?.select();
    }
  }, [editingField]);

  useEffect(() => {
    setTempValues({ cardNumber, cardholderName, expiryDate, cvc });
  }, [cardNumber, cardholderName, expiryDate, cvc]);

  // Render field function
  const renderField = (field: FieldName, displayValue: string) => {
    const config =
      field === 'cvc' ? getCvcConfig(liveCardType) : FIELD_CONFIG[field];
    const isEditing = editingField === field;
    const shouldShowPlaceholder = !currentProps[field] || !displayValue.trim();
    const valueToShow = shouldShowPlaceholder
      ? config.placeholder
      : displayValue;

    // Calculate maxLength for card number field
    let maxLength = config.maxLength;
    if (field === 'cardNumber' && !maxLength) {
      // For card numbers, use the same logic as the formatting hook
      const currentCardType = detectedCardType || 'visa'; // fallback to visa
      const cardPattern = getCardPattern(currentCardType);

      if (cardPattern) {
        let maxDigits = Math.max(...cardPattern.lengths); // default to max

        // If we have an existing card number, use its length to determine appropriate limit
        if (cardNumber) {
          const originalCleanNumber = cardNumber.replace(/\D/g, '');
          const originalLength = originalCleanNumber.length;

          if (cardPattern.lengths.length > 1) {
            const validLengths = cardPattern.lengths.sort((a, b) => a - b);

            // If the original card has a valid length, use that as the limit
            if (validLengths.includes(originalLength)) {
              maxDigits = originalLength;
            } else {
              // If original length is not valid, find the next valid length
              maxDigits =
                validLengths.find((len) => len >= originalLength) ||
                validLengths[validLengths.length - 1];
            }
          }
        } else {
          // For new/empty cards, limit to 16 digits (most common) instead of 19
          maxDigits = 16;
        }

        const spaceCount = cardPattern.gaps.length;
        maxLength = maxDigits + spaceCount;
      } else {
        // Fallback: 16 digits + 3 spaces = 19 characters (instead of 22)
        maxLength = 19;
      }
    }

    if (isEditing) {
      return (
        <input
          ref={inputRefs[field]}
          value={tempValues[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder={config.placeholder}
          inputMode={config.inputMode}
          maxLength={maxLength}
          aria-label={`Edit ${config.label}`}
          className="bg-transparent border-none outline-none text-white font-mono tracking-wider min-h-[1.25em]"
          style={{
            fontSize: 'inherit',
            fontFamily: 'inherit',
            width:
              field === 'expiryDate'
                ? '75px'
                : field === 'cvc'
                  ? '55px'
                  : field === 'cardNumber'
                    ? '100%'
                    : '100%',
          }}
        />
      );
    }

    if (!editable) {
      return (
        <span
          className="font-mono tracking-wider min-h-[1.25em] inline-block"
          style={{
            width:
              field === 'expiryDate'
                ? '75px'
                : field === 'cvc'
                  ? '55px'
                  : field === 'cardNumber'
                    ? '100%'
                    : '100%',
          }}
        >
          {valueToShow}
        </span>
      );
    }

    return (
      <button
        type="button"
        onClick={() => handleFieldClick(field)}
        className="font-mono tracking-wider text-left cursor-pointer hover:bg-white/10 rounded px-1 -mx-1 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 min-h-[1.25em] inline-block"
        aria-label={`Edit ${config.label}`}
        style={{
          width:
            field === 'expiryDate'
              ? '75px'
              : field === 'cvc'
                ? '55px'
                : field === 'cardNumber'
                  ? '100%'
                  : '100%',
        }}
      >
        {valueToShow}
      </button>
    );
  };

  return (
    <div
      role="article"
      className={clsx(
        'bg-gradient-to-br rounded-xl text-white relative overflow-hidden shadow-xl',
        cardPattern?.gradient || 'from-slate-800 via-slate-700 to-teal-600',
        creditCardPreviewSizeClasses[size],
        className,
      )}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Card brand */}
        <div className="flex justify-between items-start mb-8">
          <div className={clsx('font-bold italic', currentTextSizes.brand)}>
            {cardPattern?.displayName || liveCardType?.toUpperCase() || 'CARD'}
          </div>
        </div>

        {/* Card number */}
        <div className="mb-6">
          <div className={clsx('text-gray-300 mb-1', currentTextSizes.label)}>
            Card Number
          </div>
          <div className={currentTextSizes.number}>
            {renderField('cardNumber', formatCardNumber(tempValues.cardNumber))}
          </div>
          <div className="w-full h-px bg-gray-400 mt-2" />
        </div>

        {/* Bottom row */}
        <div
          className={clsx(
            'flex justify-between items-end',
            creditCardBottomRowSpacing[size],
          )}
        >
          {/* Cardholder */}
          <div className="flex-1 min-w-0 pr-4">
            <div className={clsx('text-gray-300 mb-1', currentTextSizes.label)}>
              Card Holder
            </div>
            <div className={clsx('uppercase truncate', currentTextSizes.value)}>
              {renderField('cardholderName', tempValues.cardholderName)}
            </div>
            <div className="w-2/3 h-px bg-gray-400 mt-1" />
          </div>

          {/* Expiry */}
          <div className="text-left mx-4 flex-shrink-0 w-20">
            <div className={clsx('text-gray-300 mb-1', currentTextSizes.label)}>
              Exp. Date
            </div>
            <div className={currentTextSizes.value}>
              {renderField('expiryDate', tempValues.expiryDate)}
            </div>
            <div className="w-full h-px bg-gray-400 mt-1" />
          </div>

          {/* CVC */}
          {showCvc && (
            <div className="text-left flex-shrink-0 w-16">
              <div
                className={clsx('text-gray-300 mb-1', currentTextSizes.label)}
              >
                CCV
              </div>
              <div className={currentTextSizes.value}>
                {renderField('cvc', tempValues.cvc)}
              </div>
              <div className="w-full h-px bg-gray-400 mt-1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CreditCardPreview.displayName = 'CreditCardPreview';
