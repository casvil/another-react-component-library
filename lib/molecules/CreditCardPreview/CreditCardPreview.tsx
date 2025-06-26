import React, { useState, useCallback, useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  CardType,
  detectCardType,
  getCardFormatRules,
} from '../../utils/cardPatterns';
import type { Size } from '../../@types/size';

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
  cardholderName = 'DAVID CASANELLAS VILARRUBIAS',
  expiryDate = '10/25',
  cvc = '123',
  cardType: propCardType,
  onChange,
  editable = true,
  className,
  size = 'md',
  showCvc = true,
}) => {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValues, setTempValues] = useState({
    cardNumber,
    cardholderName,
    expiryDate,
    cvc,
  });

  const inputRefs = {
    cardNumber: useRef<HTMLInputElement>(null),
    cardholderName: useRef<HTMLInputElement>(null),
    expiryDate: useRef<HTMLInputElement>(null),
    cvc: useRef<HTMLInputElement>(null),
  };

  // Detect card type from card number
  const detectedCardType =
    propCardType || detectCardType(tempValues.cardNumber);
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

  // Handle field click to start editing
  const handleFieldClick = useCallback(
    (field: string) => {
      if (!editable) return;
      setEditingField(field);
    },
    [editable],
  );

  // Handle input changes
  const handleInputChange = useCallback(
    (field: string, value: string) => {
      let formattedValue = value;

      switch (field) {
        case 'cardNumber':
          formattedValue = formatCardNumber(value);
          break;
        case 'cardholderName':
          formattedValue = value.toUpperCase();
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
    (field: string) => {
      setEditingField(null);

      if (onChange) {
        const newCardType =
          field === 'cardNumber'
            ? detectCardType(tempValues.cardNumber)
            : detectedCardType;
        onChange({
          ...tempValues,
          cardType: newCardType,
        });
      }
    },
    [tempValues, onChange, detectedCardType],
  );

  // Handle enter key to save
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, field: string) => {
      if (e.key === 'Enter') {
        handleInputBlur(field);
      }
      if (e.key === 'Escape') {
        setEditingField(null);
        // Reset temp values to original
        setTempValues({
          cardNumber,
          cardholderName,
          expiryDate,
          cvc,
        });
      }
    },
    [handleInputBlur, cardNumber, cardholderName, expiryDate, cvc],
  );

  // Focus input when editing starts
  useEffect(() => {
    if (
      editingField &&
      inputRefs[editingField as keyof typeof inputRefs]?.current
    ) {
      const input = inputRefs[editingField as keyof typeof inputRefs].current;
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
    field: keyof typeof tempValues,
    displayValue: string,
    placeholder: string,
    inputMode: 'text' | 'numeric' = 'text',
    maxLength?: number,
  ) => {
    const isEditing = editingField === field;

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
          className="bg-transparent border-none outline-none text-white font-mono tracking-wider w-full resize-none"
          style={{ fontSize: 'inherit', fontFamily: 'inherit' }}
        />
      );
    }

    return (
      <span
        onClick={() => handleFieldClick(field)}
        className={clsx(
          'font-mono tracking-wider',
          editable &&
            'cursor-pointer hover:bg-white/10 rounded px-1 -mx-1 transition-colors',
        )}
        title={editable ? 'Click to edit' : undefined}
      >
        {displayValue || placeholder}
      </span>
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
              '1234 1234 1234 1234',
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
                'VICTOR SAULER',
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
                '10/25',
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
                  formatRules.cvcLength === 4 ? '1234' : '123',
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
