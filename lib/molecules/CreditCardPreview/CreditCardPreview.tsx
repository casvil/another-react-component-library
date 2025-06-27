import React, { useState, useCallback, useRef, useEffect } from 'react';
import clsx from 'clsx';

import {
  CardType,
  detectCardType,
  getCardPattern,
} from '../../utils/cardPatterns';
import {
  useCreditCardFormatting,
  CSS_CLASSES,
  getFieldConfig,
  getCommonStyle,
} from '../../hooks/useCreditCardFormatting/useCreditCardFormatting';
import type { Size } from '../../@types/classes';
import {
  creditCardPreviewSizeClasses,
  creditCardTextSizeClasses,
  creditCardBottomRowSpacing,
} from '../../@types/classes';

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
  } = useCreditCardFormatting({
    cardNumber: cardNumber,
    cardType: propCardType,
    mode: 'preview',
  });

  // Get live card type and pattern
  const liveCardType = propCardType || detectCardType(tempValues.cardNumber);
  const cardPattern = getCardPattern(liveCardType);
  const currentTextSizes = creditCardTextSizeClasses[size];

  // Event handlers
  const handleFieldClick = useCallback(
    (field: FieldName) => editable && setEditingField(field),
    [editable],
  );

  const handleInputChange = useCallback(
    (field: FieldName, value: string) => {
      let formattedValue = value;

      // Apply appropriate formatting
      switch (field) {
        case 'cardNumber':
          formattedValue = formatCardNumber(value);
          break;
        case 'cardholderName':
          formattedValue = formatCardholderName(value);
          break;
        case 'expiryDate':
          formattedValue = formatExpiryDate(value);
          break;
        case 'cvc':
          formattedValue = formatCvc(value);
          break;
      }

      setTempValues((prev) => ({ ...prev, [field]: formattedValue }));
    },
    [formatCardNumber, formatCardholderName, formatExpiryDate, formatCvc],
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
    const config = getFieldConfig(field, liveCardType);
    const isEditing = editingField === field;
    const originalValue = { cardNumber, cardholderName, expiryDate, cvc }[
      field
    ];
    const shouldShowPlaceholder = !originalValue || !displayValue.trim();
    const valueToShow = shouldShowPlaceholder
      ? config.placeholder
      : displayValue;
    const commonStyle = getCommonStyle(field);

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
          maxLength={config.maxLength}
          aria-label={`Edit ${config.label}`}
          className={CSS_CLASSES.input}
          style={commonStyle}
        />
      );
    }

    if (!editable) {
      return (
        <span className={CSS_CLASSES.span} style={commonStyle}>
          {valueToShow}
        </span>
      );
    }

    return (
      <button
        type="button"
        onClick={() => handleFieldClick(field)}
        className={CSS_CLASSES.button}
        aria-label={`Edit ${config.label}`}
        style={commonStyle}
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
