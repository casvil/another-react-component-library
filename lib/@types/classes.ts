export type Size = 'sm' | 'md' | 'lg';
export type Intent = 'default' | 'info' | 'success' | 'warning' | 'error';

// Text alignment classes
export const textAlignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
} as const;

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

export const badgeIntentClasses = {
  default:
    'bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)]',
  success: 'bg-[var(--color-success-50)] text-[var(--color-success-700)]',
  error: 'bg-[var(--color-error-50)] text-[var(--color-error-700)]',
  warning: 'bg-[var(--color-warning-50)] text-[var(--color-warning-700)]',
  info: 'bg-[var(--color-info-100)] text-[var(--color-info-800)]',
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

// Alert component sizing classes
const alertPaddingClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5',
} as const;

const alertIconSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
} as const;

const alertBorderRadiusClasses = {
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
} as const;

const alertIntentClasses = {
  info: 'bg-[var(--color-info-50)] border-[var(--color-info-200)] text-[var(--color-info-700)]',
  success:
    'bg-[var(--color-success-50)] border-[var(--color-success-200)] text-[var(--color-success-700)]',
  warning:
    'bg-[var(--color-warning-50)] border-[var(--color-warning-200)] text-[var(--color-warning-700)]',
  error:
    'bg-[var(--color-error-50)] border-[var(--color-error-200)] text-[var(--color-error-700)]',
} as const;

const alertIconIntentClasses = {
  info: 'text-[var(--color-info-600)]',
  success: 'text-[var(--color-success-600)]',
  warning: 'text-[var(--color-warning-600)]',
  error: 'text-[var(--color-error-600)]',
} as const;

const alertDismissButtonHoverClasses = {
  info: 'hover:bg-[var(--color-info-100)]',
  success: 'hover:bg-[var(--color-success-100)]',
  warning: 'hover:bg-[var(--color-warning-100)]',
  error: 'hover:bg-[var(--color-error-100)]',
} as const;

export const alertSizeClasses = {
  padding: alertPaddingClasses,
  text: textSizeClasses,
  icon: alertIconSizeClasses,
  borderRadius: alertBorderRadiusClasses,
  variant: alertIntentClasses,
  iconVariant: alertIconIntentClasses,
  dismissHover: alertDismissButtonHoverClasses,
} as const;

// Card component sizing classes
const cardPaddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

const cardBorderRadiusClasses = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
} as const;

const cardShadowClasses = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
} as const;

export const cardSizeClasses = {
  padding: cardPaddingClasses,
  borderRadius: cardBorderRadiusClasses,
  shadow: cardShadowClasses,
} as const;

// Text component sizing classes
const textVariantClasses = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
  h6: 'text-base',
  body: 'text-base',
  small: 'text-sm',
  caption: 'text-xs',
} as const;

const textVariantDefaultWeights = {
  h1: 'font-bold',
  h2: 'font-bold',
  h3: 'font-bold',
  h4: 'font-bold',
  h5: 'font-bold',
  h6: 'font-bold',
  body: undefined,
  small: undefined,
  caption: undefined,
} as const;

const textWeightClasses = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;

const textColorClasses = {
  primary: 'text-[var(--color-text-primary)]',
  secondary: 'text-[var(--color-text-secondary)]',
  muted: 'text-[var(--color-text-tertiary)]',
  success: 'text-[var(--color-text-success)]',
  warning: 'text-[var(--color-text-warning)]',
  error: 'text-[var(--color-text-error)]',
  info: 'text-[var(--color-text-info)]',
} as const;

export const textComponentSizeClasses = {
  variant: textVariantClasses,
  variantDefaultWeights: textVariantDefaultWeights,
  weight: textWeightClasses,
  color: textColorClasses,
} as const;

// DropZone component sizing classes
const dropZoneHeightClasses = {
  sm: 'min-h-32',
  md: 'min-h-40',
  lg: 'min-h-48',
} as const;

const dropZonePaddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

const dropZoneBorderRadiusClasses = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
} as const;

const dropZoneIconSizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
} as const;

const dropZoneIconSizeValues = {
  sm: 32,
  md: 48,
  lg: 64,
} as const;

const dropZoneTextSizeClasses = {
  sm: {
    title: 'text-sm',
    description: 'text-xs',
  },
  md: {
    title: 'text-base',
    description: 'text-sm',
  },
  lg: {
    title: 'text-lg',
    description: 'text-base',
  },
} as const;

const dropZoneGapClasses = {
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
} as const;

export const dropZoneSizeClasses = {
  height: dropZoneHeightClasses,
  padding: dropZonePaddingClasses,
  borderRadius: dropZoneBorderRadiusClasses,
  icon: dropZoneIconSizeClasses,
  iconValues: dropZoneIconSizeValues,
  text: dropZoneTextSizeClasses,
  gap: dropZoneGapClasses,
} as const;

// Table component sizing classes
const tablePaddingClasses = {
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
} as const;

const tableBorderRadiusClasses = {
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
} as const;

const tableTextSizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const;

const tableRowHeightClasses = {
  sm: 'h-10',
  md: 'h-12',
  lg: 'h-14',
} as const;

const tableHeaderPaddingClasses = {
  sm: 'px-3 py-2',
  md: 'px-4 py-3',
  lg: 'px-6 py-4',
} as const;

const tableCellPaddingClasses = {
  sm: 'px-3 py-2',
  md: 'px-4 py-3',
  lg: 'px-6 py-4',
} as const;

export const tableSizeClasses = {
  container: {
    padding: tablePaddingClasses,
    borderRadius: tableBorderRadiusClasses,
  },
  text: tableTextSizeClasses,
  row: {
    height: tableRowHeightClasses,
  },
  header: {
    padding: tableHeaderPaddingClasses,
    text: tableTextSizeClasses,
  },
  cell: {
    padding: tableCellPaddingClasses,
    text: tableTextSizeClasses,
  },
} as const;

// Table component base classes (non-size dependent)
export const tableBaseClasses = {
  header: 'font-semibold text-gray-900 border-b border-gray-200 bg-gray-50',
  cell: 'text-gray-900 border-b border-gray-200',
  row: 'border-b border-gray-200 last:border-b-0',
} as const;

export type Spacing =
  | '0'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

// Map spacing token
const spacingScale: Record<Spacing, string> = {
  '0': '0',
  xs: '0.5', // 0.125rem (2px)
  sm: '1', // 0.25rem (4px)
  md: '2', // 0.5rem  (8px)
  lg: '4', // 1rem    (16px)
  xl: '6', // 1.5rem  (24px)
  '2xl': '8', // 2rem    (32px)
  '3xl': '12', // 3rem    (48px)
  '4xl': '24', // 6rem    (96px)
};

export const spacingClasses: Record<Spacing, string> = spacingScale;

// Utility helpers so components can quickly map props
export const paddingClasses = (s: Spacing): string =>
  s === '0' ? '' : `p-${spacingScale[s]}`;

export const marginClasses = (s: Spacing): string =>
  s === '0' ? '' : `m-${spacingScale[s]}`;

export const gapClasses = (s: Spacing): string =>
  s === '0' ? '' : `gap-${spacingScale[s]}`;

// Button variant classes using theme CSS variables (primary/secondary/tertiary)
export const buttonVariantClasses = {
  primary:
    'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-700)] focus:ring-2 focus:ring-[var(--color-border-focus)]',
  secondary:
    'bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)] hover:bg-[var(--color-surface-hover)] focus:ring-2 focus:ring-[var(--color-border-focus)]',
  tertiary:
    'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-secondary)] hover:bg-[var(--color-surface-hover)] focus:ring-2 focus:ring-[var(--color-border-focus)]',
} as const;
