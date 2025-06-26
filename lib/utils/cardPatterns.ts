export type CardType =
  | 'visa'
  | 'mastercard'
  | 'amex'
  | 'discover'
  | 'diners'
  | 'jcb'
  | 'unknown';

export interface CardPattern {
  name: CardType;
  pattern: RegExp;
  gaps: number[];
  lengths: number[];
  cvcLength: number;
}

/**
 * Card type patterns and formatting rules.
 * Used for detecting card types, formatting card numbers, and determining CVC length.
 */
export const CARD_PATTERNS: CardPattern[] = [
  {
    name: 'amex',
    pattern: /^3[47]/,
    gaps: [4, 10],
    lengths: [15],
    cvcLength: 4,
  },
  {
    name: 'diners',
    pattern: /^30[0-5]|^36|^38/,
    gaps: [4, 10],
    lengths: [14],
    cvcLength: 3,
  },
  {
    name: 'discover',
    pattern: /^6(?:011|5)/,
    gaps: [4, 8, 12],
    lengths: [16],
    cvcLength: 3,
  },
  {
    name: 'jcb',
    pattern: /^35/,
    gaps: [4, 8, 12],
    lengths: [16],
    cvcLength: 3,
  },
  {
    name: 'mastercard',
    pattern: /^5[1-5]|^2[2-7]/,
    gaps: [4, 8, 12],
    lengths: [16],
    cvcLength: 3,
  },
  {
    name: 'visa',
    pattern: /^4/,
    gaps: [4, 8, 12],
    lengths: [13, 16, 19],
    cvcLength: 3,
  },
];

/**
 * Detect card type from card number.
 */
export const detectCardType = (cardNumber: string): CardType | null => {
  const cleanNumber = cardNumber.replace(/\s/g, '');
  if (!cleanNumber) return null;

  const detectedCard = CARD_PATTERNS.find((card) =>
    card.pattern.test(cleanNumber),
  );
  return detectedCard?.name || 'unknown';
};

/**
 * Get formatting rules for a specific card type.
 */
export const getCardFormatRules = (cardType: CardType | null) => {
  if (!cardType || cardType === 'unknown') {
    return { gaps: [4, 8, 12], maxLength: 19, cvcLength: 3 };
  }
  const card = CARD_PATTERNS.find((c) => c.name === cardType);
  return {
    gaps: card?.gaps || [4, 8, 12],
    maxLength: Math.max(...(card?.lengths || [16])) + (card?.gaps.length || 3),
    cvcLength: card?.cvcLength || 3,
  };
};
