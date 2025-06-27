export type Size = 'sm' | 'md' | 'lg';

// Base size configurations
export const textSizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const;

const paddingSizeClasses = {
  sm: 'px-2 py-1',
  md: 'px-3 py-2',
  lg: 'px-4 py-3',
} as const;

const buttonPaddingSizeClasses = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-5 py-3',
} as const;

const iconSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
} as const;

// Icon size values for Lucide icons (numeric values for size prop)
export const iconSizeValues = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

const inputIconPositionClasses = {
  sm: {
    iconLeft: 'left-2',
    iconRight: 'right-2',
  },
  md: {
    iconLeft: 'left-3',
    iconRight: 'right-3',
  },
  lg: {
    iconLeft: 'left-4',
    iconRight: 'right-4',
  },
} as const;

const avatarSizeClassesRaw = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-20 h-20',
} as const;

const iconButtonSizeClassesRaw = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
} as const;

const iconButtonPaddingSizeClasses = {
  sm: 'p-1',
  md: 'p-2',
  lg: 'p-3',
} as const;

const formControlSizeClasses = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
} as const;

const progressBarHeightSizeClasses = {
  sm: 'h-2',
  md: 'h-4',
  lg: 'h-6',
} as const;

export const switchSizeClasses = {
  sm: {
    track: 'w-9 h-5',
    thumb: 'w-4 h-4',
    thumbTranslate: 'translate-x-4.5',
    thumbUnchecked: 'translate-x-0.5',
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'w-5 h-5',
    thumbTranslate: 'translate-x-5.5',
    thumbUnchecked: 'translate-x-0.5',
  },
  lg: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6',
    thumbTranslate: 'translate-x-7.5',
    thumbUnchecked: 'translate-x-0.5',
  },
} as const;

// Helper function to combine text and padding
const combineTextAndPadding = (
  text: typeof textSizeClasses,
  padding: Record<Size, string>,
) =>
  ({
    sm: `${text.sm} ${padding.sm}`,
    md: `${text.md} ${padding.md}`,
    lg: `${text.lg} ${padding.lg}`,
  }) as const;

// Helper function to combine icon button padding and size
const combineIconButton = (
  padding: typeof iconButtonPaddingSizeClasses,
  size: typeof iconButtonSizeClassesRaw,
) =>
  ({
    sm: `${padding.sm} ${size.sm}`,
    md: `${padding.md} ${size.md}`,
    lg: `${padding.lg} ${size.lg}`,
  }) as const;

// Helper function to combine avatar size and text
const combineAvatar = (
  size: typeof avatarSizeClassesRaw,
  text: typeof textSizeClasses,
) =>
  ({
    sm: `${size.sm} ${text.sm}`,
    md: `${size.md} ${text.md}`,
    lg: `${size.lg} text-xl`, // Avatar uses text-xl for lg instead of text-lg
  }) as const;

// Helper function to create form control objects
const createFormControl = (
  control: typeof formControlSizeClasses,
  text: typeof textSizeClasses,
) =>
  ({
    sm: { checkbox: control.sm, label: text.sm },
    md: { checkbox: control.md, label: text.md },
    lg: { checkbox: control.lg, label: text.lg },
  }) as const;

// Helper function to create radio control objects
const createRadioControl = (
  control: typeof formControlSizeClasses,
  text: typeof textSizeClasses,
) =>
  ({
    sm: { radio: control.sm, label: text.sm },
    md: { radio: control.md, label: text.md },
    lg: { radio: control.lg, label: text.lg },
  }) as const;

// Helper function to create progress bar objects
const createProgressBar = (
  text: typeof textSizeClasses,
  height: typeof progressBarHeightSizeClasses,
) =>
  ({
    sm: { label: text.sm, bar: height.sm },
    md: { label: text.md, bar: height.md },
    lg: { label: text.lg, bar: height.lg },
  }) as const;

// Helper function to create input icon positioning objects
const createInputIconPosition = (
  text: typeof textSizeClasses,
  iconPosition: typeof inputIconPositionClasses,
) =>
  ({
    sm: {
      icon: text.sm,
      iconLeft: iconPosition.sm.iconLeft,
      iconRight: iconPosition.sm.iconRight,
    },
    md: {
      icon: text.md,
      iconLeft: iconPosition.md.iconLeft,
      iconRight: iconPosition.md.iconRight,
    },
    lg: {
      icon: text.lg,
      iconLeft: iconPosition.lg.iconLeft,
      iconRight: iconPosition.lg.iconRight,
    },
  }) as const;

// Export the computed size classes
export const sizeClasses = textSizeClasses;

export const buttonSizeClasses = {
  sm: `${textSizeClasses.sm} ${buttonPaddingSizeClasses.sm}`,
  md: `${textSizeClasses.md} ${buttonPaddingSizeClasses.md}`,
  lg: `${textSizeClasses.lg} ${buttonPaddingSizeClasses.lg}`,
} as const;

export const iconButtonSizeClasses = combineIconButton(
  iconButtonPaddingSizeClasses,
  iconButtonSizeClassesRaw,
);

export const spinnerSizeClasses = iconSizeClasses;

export const avatarSizeClasses = combineAvatar(
  avatarSizeClassesRaw,
  textSizeClasses,
);

export const badgeSizeClasses = {
  sm: 'text-xs px-1.5 py-1.5',
  md: 'text-sm px-1.5 py-1.5',
  lg: 'text-base px-1.5 py-1.5',
} as const;

export const inputSizeClasses = combineTextAndPadding(
  textSizeClasses,
  paddingSizeClasses,
);

export const checkboxSizeClasses = createFormControl(
  formControlSizeClasses,
  textSizeClasses,
);

export const radioSizeClasses = createRadioControl(
  formControlSizeClasses,
  textSizeClasses,
);

export const progressBarSizeClasses = createProgressBar(
  textSizeClasses,
  progressBarHeightSizeClasses,
);

export const inputIconSizeClasses = createInputIconPosition(
  textSizeClasses,
  inputIconPositionClasses,
);

const userPreviewLayoutClasses = {
  horizontal: 'flex-row items-center',
  vertical: 'flex-col items-center text-center',
} as const;

const userPreviewSpacingClasses = {
  horizontal: {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  },
  vertical: {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3',
  },
} as const;

const userPreviewStatusPositionClasses = {
  sm: 'bottom-0 -right-0.5',
  md: 'bottom-0.5 -right-0.5',
  lg: 'bottom-1 -right-0.5',
} as const;

const userPreviewStatusIndicatorSizes = {
  sm: 'sm' as const,
  md: 'md' as const,
  lg: 'lg' as const,
} as const;

const userPreviewInnerGapClasses = {
  vertical: 'flex-col items-center gap-1',
  horizontal: 'flex-col',
} as const;

export const userPreviewSizeClasses = {
  layout: userPreviewLayoutClasses,
  spacing: userPreviewSpacingClasses,
  statusPosition: userPreviewStatusPositionClasses,
  statusIndicatorSizes: userPreviewStatusIndicatorSizes,
  innerGap: userPreviewInnerGapClasses,
} as const;

// StatusIndicator component sizing classes
const statusIndicatorDotSizeClasses = {
  sm: 'w-2 h-2',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
} as const;

const statusIndicatorGapClass = 'inline-flex items-center gap-1.5';

export const statusIndicatorComponentSizeClasses = {
  dot: statusIndicatorDotSizeClasses,
  text: textSizeClasses,
  container: statusIndicatorGapClass,
} as const;

// Username component sizing classes
const usernameVariantClasses = {
  default: 'text-gray-900',
  bold: 'text-gray-900 font-semibold',
  muted: 'text-gray-600',
} as const;

export const usernameComponentSizeClasses = {
  text: textSizeClasses,
  variant: usernameVariantClasses,
} as const;

// CreditCardPreview component sizing classes
const creditCardSizeClasses = {
  sm: 'w-72 h-48 p-2 pb-4',
  md: 'w-80 h-56 p-4 pb-6',
  lg: 'w-96 h-64 p-6 pb-8',
} as const;

const creditCardPreviewTextSizeClasses = {
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
} as const;

const creditCardPreviewBottomRowSpacing = {
  sm: 'mt-auto',
  md: 'mt-auto',
  lg: 'mt-auto',
} as const;

// Credit Card field widths (used by both CreditCardForm and CreditCardPreview)
export const creditCardFieldWidths = {
  expiryDate: '75px',
  cvc: '55px',
  cardNumber: '100%',
  cardholderName: '100%',
} as const;

// Credit Card form field styling classes
export const creditCardFormFieldClasses = {
  cardNumber: 'font-mono tracking-wider',
  cardholderName: 'uppercase tracking-wider',
  expiryDate: 'font-mono tracking-wider',
  cvc: 'font-mono tracking-wider text-center',
} as const;

// Credit Card form error styling classes
export const creditCardFormErrorClasses = {
  default: 'border-red-300 focus:ring-red-500',
} as const;

// Credit Card type color classes for icons
export const creditCardTypeColors = {
  visa: 'text-blue-600',
  mastercard: 'text-red-500',
  amex: 'text-green-600',
  discover: 'text-orange-500',
} as const;

export const creditCardPreviewSizeClasses = creditCardSizeClasses;
export const creditCardTextSizeClasses = creditCardPreviewTextSizeClasses;
export const creditCardBottomRowSpacing = creditCardPreviewBottomRowSpacing;
