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

// Icon positioning classes for Input component
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
      iconRight: iconPosition.sm.iconRight 
    },
    md: { 
      icon: text.md, 
      iconLeft: iconPosition.md.iconLeft, 
      iconRight: iconPosition.md.iconRight 
    },
    lg: { 
      icon: text.lg, 
      iconLeft: iconPosition.lg.iconLeft, 
      iconRight: iconPosition.lg.iconRight 
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
