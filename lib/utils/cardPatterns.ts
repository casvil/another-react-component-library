export type CardType =
  | 'visa'
  | 'mastercard'
  | 'amex'
  | 'discover'
  | 'diners'
  | 'jcb'
  | 'unionpay'
  | 'maestro'
  | 'elo'
  | 'mir'
  | 'rupay'
  | 'unknown';

export interface CardPattern {
  name: CardType;
  pattern: RegExp;
  gaps: number[];
  lengths: number[];
  cvcLength: number;
  displayName: string;
  gradient: string;
}

/**
 * Card type patterns and formatting rules with gradient styling.
 * Based on Wikipedia and official specifications for international card networks.
 * Patterns are ordered from most specific to least specific to avoid conflicts.
 */
export const CARD_PATTERNS: CardPattern[] = [
  {
    name: 'amex',
    pattern: /^3[47]/,
    gaps: [4, 10],
    lengths: [15],
    cvcLength: 4,
    displayName: 'AMERICAN EXPRESS',
    gradient: 'from-green-600 via-teal-600 to-blue-600',
  },
  {
    name: 'diners',
    pattern: /^30[0-5]|^36|^38/,
    gaps: [4, 10],
    lengths: [14],
    cvcLength: 3,
    displayName: 'DINERS CLUB',
    gradient: 'from-gray-600 via-gray-700 to-gray-800',
  },
  {
    name: 'discover',
    pattern: /^6(?:011|5)/,
    gaps: [4, 8, 12],
    lengths: [16, 19],
    cvcLength: 3,
    displayName: 'DISCOVER',
    gradient: 'from-orange-500 via-orange-600 to-red-600',
  },
  {
    name: 'jcb',
    pattern: /^35/,
    gaps: [4, 8, 12],
    lengths: [16],
    cvcLength: 3,
    displayName: 'JCB',
    gradient: 'from-blue-800 via-indigo-700 to-purple-600',
  },
  {
    name: 'unionpay',
    pattern: /^62/,
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    cvcLength: 3,
    displayName: 'UNIONPAY',
    gradient: 'from-red-600 via-red-700 to-red-800',
  },
  {
    name: 'maestro',
    pattern: /^5018|^5020|^5038|^5893|^6304|^6759|^6761|^6762|^6763/,
    gaps: [4, 8, 12],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19],
    cvcLength: 3,
    displayName: 'MAESTRO',
    gradient: 'from-blue-700 via-red-500 to-yellow-400',
  },
  {
    name: 'elo',
    pattern:
      /^506699|^5067|^50900|^50901|^50902|^50903|^50904|^50905|^50906|^50907|^50908|^50909|^50910|^50911|^50912|^50913|^50914|^50915|^50916|^50917|^50918|^50919|^50920|^50921|^50922|^50923|^50924|^50925|^50926|^50927|^50928|^50929|^50930|^50931|^50932|^50933|^50934|^50935|^50936|^50937|^50938|^50939|^50940|^50941|^50942|^50943|^50944|^50945|^50946|^50947|^50948|^50949|^50950|^6362|^6505/,
    gaps: [4, 8, 12],
    lengths: [16],
    cvcLength: 3,
    displayName: 'ELO',
    gradient: 'from-yellow-500 via-yellow-600 to-orange-600',
  },
  {
    name: 'mir',
    pattern: /^2200|^2201|^2202|^2203|^2204/,
    gaps: [4, 8, 12],
    lengths: [16, 17, 18, 19],
    cvcLength: 3,
    displayName: 'MIR',
    gradient: 'from-green-600 via-blue-600 to-red-600',
  },
  {
    name: 'rupay',
    pattern: /^607|^6521|^6522/,
    gaps: [4, 8, 12],
    lengths: [16],
    cvcLength: 3,
    displayName: 'RUPAY',
    gradient: 'from-orange-500 via-white to-green-600',
  },
  {
    name: 'mastercard',
    pattern: /^5[1-5]|^2[2-7]/,
    gaps: [4, 8, 12],
    lengths: [16],
    cvcLength: 3,
    displayName: 'MASTERCARD',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
  },
  {
    name: 'visa',
    pattern: /^4/,
    gaps: [4, 8, 12],
    lengths: [13, 16, 19],
    cvcLength: 3,
    displayName: 'VISA',
    gradient: 'from-blue-600 via-blue-500 to-blue-700',
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
    maxLength: Math.max(...(card?.lengths || [16])),
    cvcLength: card?.cvcLength || 3,
  };
};

/**
 * Get card pattern details including display name and gradient.
 */
export const getCardPattern = (
  cardType: CardType | null,
): CardPattern | null => {
  if (!cardType || cardType === 'unknown') return null;
  return CARD_PATTERNS.find((c) => c.name === cardType) || null;
};
