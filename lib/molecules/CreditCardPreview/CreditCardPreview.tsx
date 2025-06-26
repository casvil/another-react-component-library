import React, { useState, useCallback, useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  CardType,
  detectCardType,
  getCardFormatRules,
} from '../../utils/cardPatterns';
import type { Size } from '../../@types/size';

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
 * Users can click on fields to edit them directly on the card.
 */
export const CreditCardPreview: React.FC<CreditCardPreviewProps> = ({
  cardNumber = '1234 1234 1234 1234',
  cardholderName = 'VICTOR SAULER PORTAL',
  expiryDate = '10/25',
  cvc = '123',
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

  const inputRefs = useRef<Record<FieldName, React.RefObject<HTMLInputElement>>>({
    cardNumber: useRef<HTMLInputElement>(null),
    cardholderName: useRef<HTMLInputElement>(null),
    expiryDate: useRef<HTMLInputElement>(null),
    cvc: useRef<HTMLInputElement>(null),
  }).current;

  // Detect card type from current card number (real-time)
  const liveCardType = detectCardType(tempValues.cardNumber);
  const detectedCardType = propCardType || liveCardType;
  const formatRules = getCardFormatRules(detectedCardType);

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

  // Format expiry date as MM/YY with basic validation
  const formatExpiryDate = useCallback((input: string): string => {
    const cleanInput = input.replace(/\D/g, '').slice(0, 4);
    if (cleanInput.length >= 2) {
      const month = cleanInput.slice(0, 2);
      const year = cleanInput.slice(2);

      // Basic month validation (01-12)
      const monthNum = parseInt(month, 10);
      const validMonth = monthNum >= 1 && monthNum <= 12 ? month : '12';

      return `${validMonth}/${year}`;
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

  // Handle field click to start editing
  const handleFieldClick = useCallback(
    (field: FieldName) => {
      if (!editable) return;
      setEditingField(field);
    },
    [editable],
  );

  // Handle input changes
  const handleInputChange = useCallback(
    (field: FieldName, value: string) => {
      let formattedValue = value;

      switch (field) {
        case 'cardNumber':
          formattedValue = formatCardNumber(value);
          break;
        case 'cardholderName':
          formattedValue = value.trim().toUpperCase();
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
    [formatCardNumber, formatExpiryDate, formatCvc],
  );

  // Handle input blur to save changes
  const handleInputBlur = useCallback(
    (field: FieldName) => {
      setEditingField(null);

      if (onChange) {
        const newCardType =
          field === 'cardNumber' && tempValues.cardNumber.trim()
            ? detectCardType(tempValues.cardNumber)
            : tempValues.cardNumber.trim()
              ? detectCardType(tempValues.cardNumber)
              : null;
        onChange({
          ...tempValues,
          cardType: newCardType,
        });
      }
    },
    [tempValues, onChange],
  );

  // Handle enter key to save
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, field: FieldName) => {
      if (e.key === 'Enter') {
        handleInputBlur(field);
      }
      if (e.key === 'Escape') {
        setEditingField(null);
        // Reset temp values to original
        const resetValues = {
          cardNumber,
          cardholderName,
          expiryDate,
          cvc,
        };
        setTempValues(resetValues);

        // Call onChange to sync with parent
        if (onChange) {
          onChange({
            ...resetValues,
            cardType: propCardType || detectCardType(cardNumber),
          });
        }
      }
    },
    [
      handleInputBlur,
      cardNumber,
      cardholderName,
      expiryDate,
      cvc,
      onChange,
      propCardType,
    ],
  );

  // Focus input when editing starts
  useEffect(() => {
    if (editingField && inputRefs[editingField]?.current) {
      const input = inputRefs[editingField].current;
      input?.focus();
      input?.select();
    }
  }, [editingField]);

  // Sync with prop changes
  useEffect(() => {
    setTempValues({
      cardNumber,
      cardholderName,
      expiryDate,
      cvc,
    });
  }, [cardNumber, cardholderName, expiryDate, cvc]);

  const sizeClasses = {
    sm: 'w-80 h-48 p-4',
    md: 'w-96 h-56 p-6',
    lg: 'w-[28rem] h-64 p-8',
  };

  const textSizeClasses = {
    sm: {
      brand: 'text-base',
      number: 'text-base',
      label: 'text-xs',
      value: 'text-xs',
    },
    md: {
      brand: 'text-lg',
      number: 'text-lg',
      label: 'text-xs',
      value: 'text-sm',
    },
    lg: {
      brand: 'text-xl',
      number: 'text-xl',
      label: 'text-sm',
      value: 'text-base',
    },
  };

  const currentTextSizes = textSizeClasses[size];

  const getCardBrandDisplay = () => {
    if (detectedCardType === 'visa') {
      return <span className="text-blue-300">VISA</span>;
    }
    return detectedCardType?.toUpperCase() || 'CARD';
  };

  const renderEditableField = (
    field: FieldName,
    displayValue: string,
    placeholder: string,
    inputMode: 'text' | 'numeric' = 'text',
    maxLength?: number,
  ) => {
    const isEditing = editingField === field;

    const getFieldLabel = (field: FieldName): string => {
      switch (field) {
        case 'cardNumber':
          return 'Card number';
        case 'cardholderName':
          return 'Cardholder name';
        case 'expiryDate':
          return 'Expiry date';
        case 'cvc':
          return 'CVC security code';
        default:
          return 'Field';
      }
    };

    if (isEditing) {
      return (
        <input
          ref={inputRefs[field]}
          value={tempValues[field]}
          onChange={(e) => handleInputChange(field, e.target.value)}
          onBlur={() => handleInputBlur(field)}
          onKeyDown={(e) => handleKeyDown(e, field)}
          placeholder={placeholder}
          inputMode={inputMode}
          maxLength={maxLength}
          aria-label={`Edit ${getFieldLabel(field)}`}
          role="textbox"
          className="bg-transparent border-none outline-none text-white font-mono tracking-wider w-full resize-none"
          style={{ fontSize: 'inherit', fontFamily: 'inherit' }}
        />
      );
    }

    return (
      <button
        type="button"
        onClick={() => handleFieldClick(field)}
        className={clsx(
          'font-mono tracking-wider text-left',
          editable &&
            'cursor-pointer hover:bg-white/10 rounded px-1 -mx-1 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20',
          !editable && 'cursor-default',
        )}
        aria-label={
          editable ? `Edit ${getFieldLabel(field)}` : getFieldLabel(field)
        }
        disabled={!editable}
        tabIndex={editable ? 0 : -1}
      >
        {displayValue || placeholder}
      </button>
    );
  };

  return (
    <div
      className={clsx(
        'bg-gradient-to-br from-slate-800 via-slate-700 to-teal-600 rounded-xl text-white relative overflow-hidden shadow-xl',
        sizeClasses[size],
        className,
      )}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Card brand */}
        <div className="flex justify-between items-start mb-8">
          <div className={clsx('font-bold italic', currentTextSizes.brand)}>
            {getCardBrandDisplay()}
          </div>
        </div>

        {/* Card number */}
        <div className="mb-6">
          <div className={clsx('text-gray-300 mb-1', currentTextSizes.label)}>
            Card Number
          </div>
          <div className={currentTextSizes.number}>
            {renderEditableField(
              'cardNumber',
              tempValues.cardNumber,
              '•••• •••• •••• ••••',
              'numeric',
              formatRules.maxLength,
            )}
          </div>
          <div className="w-full h-px bg-gray-400 mt-2"></div>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-end mt-auto">
          <div className="flex-1 min-w-0 pr-4">
            <div className={clsx('text-gray-300 mb-1', currentTextSizes.label)}>
              Card Holder
            </div>
            <div className={clsx('uppercase truncate', currentTextSizes.value)}>
              {renderEditableField(
                'cardholderName',
                tempValues.cardholderName,
                'CARDHOLDER NAME',
              )}
            </div>
            <div className="w-2/3 h-px bg-gray-400 mt-1"></div>
          </div>
          <div className="text-left mx-4 flex-shrink-0">
            <div className={clsx('text-gray-300 mb-1', currentTextSizes.label)}>
              Exp. Date
            </div>
            <div className={currentTextSizes.value}>
              {renderEditableField(
                'expiryDate',
                tempValues.expiryDate,
                'MM/YY',
                'numeric',
                5,
              )}
            </div>
            <div className="w-full h-px bg-gray-400 mt-1"></div>
          </div>
          {showCvc && (
            <div className="text-right flex-shrink-0">
              <div
                className={clsx('text-gray-300 mb-1', currentTextSizes.label)}
              >
                CCV
              </div>
              <div className={currentTextSizes.value}>
                {renderEditableField(
                  'cvc',
                  tempValues.cvc,
                  formatRules.cvcLength === 4 ? '••••' : '•••',
                  'numeric',
                  formatRules.cvcLength,
                )}
              </div>
              <div className="w-full h-px bg-gray-400 mt-1"></div>
            </div>
          )}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>
    </div>
  );
};

CreditCardPreview.displayName = 'CreditCardPreview';
