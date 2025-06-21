export type Size = 'sm' | 'md' | 'lg';

export const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base', 
  lg: 'text-lg',
} as const;

export const buttonSizeClasses = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
} as const;

export const iconButtonSizeClasses = {
  sm: 'p-1 w-8 h-8',
  md: 'p-2 w-10 h-10',
  lg: 'p-3 w-12 h-12',
} as const;

export const spinnerSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
} as const;

export const avatarSizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-20 h-20 text-xl',
} as const;

export const badgeSizeClasses = {
  sm: 'text-xs px-1.5 py-1.5',
  md: 'text-sm px-1.5 py-1.5',
  lg: 'text-base px-1.5 py-1.5',
} as const;

export const inputSizeClasses = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-3 py-2',
  lg: 'text-lg px-4 py-3',
} as const;

export const checkboxSizeClasses = {
  sm: { checkbox: 'h-3 w-3', label: 'text-sm' },
  md: { checkbox: 'h-4 w-4', label: 'text-base' },
  lg: { checkbox: 'h-5 w-5', label: 'text-lg' },
} as const;

export const radioSizeClasses = {
  sm: { radio: 'h-3 w-3', label: 'text-sm' },
  md: { radio: 'h-4 w-4', label: 'text-base' },
  lg: { radio: 'h-5 w-5', label: 'text-lg' },
} as const;

export const progressBarSizeClasses = {
  sm: { label: 'text-sm', bar: 'h-2' },
  md: { label: 'text-base', bar: 'h-4' },
  lg: { label: 'text-lg', bar: 'h-6' },
} as const; 