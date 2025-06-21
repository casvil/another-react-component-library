export type Size = 'sm' | 'md' | 'lg';

// Base size configurations
const textSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
} as const;

const paddingSizes = {
  sm: 'px-2 py-1',
  md: 'px-3 py-2',
  lg: 'px-4 py-3',
} as const;

const buttonPaddingSizes = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2',
  lg: 'px-5 py-3',
} as const;

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
} as const;

const avatarSizes = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-20 h-20',
} as const;

const iconButtonSizes = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
} as const;

const iconButtonPadding = {
  sm: 'p-1',
  md: 'p-2',
  lg: 'p-3',
} as const;

const formControlSizes = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
} as const;

const progressBarHeights = {
  sm: 'h-2',
  md: 'h-4',
  lg: 'h-6',
} as const;

// Helper function to combine text and padding
const combineTextAndPadding = (text: typeof textSizes, padding: Record<Size, string>) => ({
  sm: `${text.sm} ${padding.sm}`,
  md: `${text.md} ${padding.md}`,
  lg: `${text.lg} ${padding.lg}`,
} as const);

// Helper function to combine icon button padding and size
const combineIconButton = (padding: typeof iconButtonPadding, size: typeof iconButtonSizes) => ({
  sm: `${padding.sm} ${size.sm}`,
  md: `${padding.md} ${size.md}`,
  lg: `${padding.lg} ${size.lg}`,
} as const);

// Helper function to combine avatar size and text
const combineAvatar = (size: typeof avatarSizes, text: typeof textSizes) => ({
  sm: `${size.sm} ${text.sm}`,
  md: `${size.md} ${text.md}`,
  lg: `${size.lg} text-xl`, // Avatar uses text-xl for lg instead of text-lg
} as const);

// Helper function to create form control objects
const createFormControl = (control: typeof formControlSizes, text: typeof textSizes) => ({
  sm: { checkbox: control.sm, label: text.sm },
  md: { checkbox: control.md, label: text.md },
  lg: { checkbox: control.lg, label: text.lg },
} as const);

// Helper function to create radio control objects
const createRadioControl = (control: typeof formControlSizes, text: typeof textSizes) => ({
  sm: { radio: control.sm, label: text.sm },
  md: { radio: control.md, label: text.md },
  lg: { radio: control.lg, label: text.lg },
} as const);

// Helper function to create progress bar objects
const createProgressBar = (text: typeof textSizes, height: typeof progressBarHeights) => ({
  sm: { label: text.sm, bar: height.sm },
  md: { label: text.md, bar: height.md },
  lg: { label: text.lg, bar: height.lg },
} as const);

// Export the computed size classes
export const sizeClasses = textSizes;

export const buttonSizeClasses = {
  sm: `${textSizes.sm} ${buttonPaddingSizes.sm}`,
  md: `${textSizes.md} ${buttonPaddingSizes.md}`,
  lg: `${textSizes.lg} ${buttonPaddingSizes.lg}`,
} as const;

export const iconButtonSizeClasses = combineIconButton(iconButtonPadding, iconButtonSizes);

export const spinnerSizeClasses = iconSizes;

export const avatarSizeClasses = combineAvatar(avatarSizes, textSizes);

export const badgeSizeClasses = {
  sm: 'text-xs px-1.5 py-1.5',
  md: 'text-sm px-1.5 py-1.5',
  lg: 'text-base px-1.5 py-1.5',
} as const;

export const inputSizeClasses = combineTextAndPadding(textSizes, paddingSizes);

export const checkboxSizeClasses = createFormControl(formControlSizes, textSizes);

export const radioSizeClasses = createRadioControl(formControlSizes, textSizes);

export const progressBarSizeClasses = createProgressBar(textSizes, progressBarHeights); 