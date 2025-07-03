import type { DesignTokens } from '../@types/theme';

/**
 * Converts design tokens to CSS custom properties (variables)
 * @param tokens - Design tokens object
 * @returns Object with CSS variable names and values
 */
export const generateCSSVariables = (
  tokens: DesignTokens,
): Record<string, string> => {
  const variables: Record<string, string> = {};

  // Background colors
  Object.entries(tokens.colors.background).forEach(([key, value]) => {
    variables[`--color-background-${key}`] = value;
  });

  // Surface colors
  Object.entries(tokens.colors.surface).forEach(([key, value]) => {
    variables[`--color-surface-${key}`] = value;
  });

  // Border colors
  Object.entries(tokens.colors.border).forEach(([key, value]) => {
    variables[`--color-border-${key}`] = value;
  });

  // Text colors
  Object.entries(tokens.colors.text).forEach(([key, value]) => {
    variables[`--color-text-${key}`] = value;
  });

  // Intent colors
  Object.entries(tokens.colors.intent).forEach(([intent, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      variables[`--color-${intent}-${shade}`] = value;
    });
  });

  // Shadows
  Object.entries(tokens.shadows).forEach(([key, value]) => {
    variables[`--shadow-${key}`] = value;
  });

  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    variables[`--spacing-${key}`] = value;
  });

  // Border radius
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    variables[`--radius-${key}`] = value;
  });

  return variables;
};

/**
 * Helper function to create theme-aware CSS classes
 * @param baseClasses - Base Tailwind classes
 * @param themeClasses - Object with light/dark theme specific classes
 * @returns Combined class string
 */
export const createThemeClasses = (
  baseClasses: string,
  themeClasses?: {
    light?: string;
    dark?: string;
  },
): string => {
  let classes = baseClasses;

  if (themeClasses?.light) {
    classes += ` ${themeClasses.light}`;
  }

  if (themeClasses?.dark) {
    classes += ` dark:${themeClasses.dark}`;
  }

  return classes;
};

/**
 * Get a CSS variable value with fallback
 * @param variable - CSS variable name (without --)
 * @param fallback - Fallback value
 * @returns CSS var() function string
 */
export const cssVar = (variable: string, fallback?: string): string => {
  return fallback ? `var(--${variable}, ${fallback})` : `var(--${variable})`;
};

/**
 * Generate theme-aware component classes using CSS variables
 */
export const themeClasses = {
  // Background classes using CSS variables
  background: {
    primary: 'bg-[var(--color-background-primary)]',
    secondary: 'bg-[var(--color-background-secondary)]',
    tertiary: 'bg-[var(--color-background-tertiary)]',
  },
  // Surface classes
  surface: {
    primary: 'bg-[var(--color-surface-primary)]',
    secondary: 'bg-[var(--color-surface-secondary)]',
    tertiary: 'bg-[var(--color-surface-tertiary)]',
    elevated: 'bg-[var(--color-surface-elevated)]',
    hover: 'hover:bg-[var(--color-surface-hover)]',
    active: 'active:bg-[var(--color-surface-active)]',
  },
  // Border classes
  border: {
    primary: 'border-[var(--color-border-primary)]',
    secondary: 'border-[var(--color-border-secondary)]',
    tertiary: 'border-[var(--color-border-tertiary)]',
    focus: 'focus:border-[var(--color-border-focus)]',
    error: 'border-[var(--color-border-error)]',
    success: 'border-[var(--color-border-success)]',
    warning: 'border-[var(--color-border-warning)]',
    info: 'border-[var(--color-border-info)]',
  },
  // Text classes
  text: {
    primary: 'text-[var(--color-text-primary)]',
    secondary: 'text-[var(--color-text-secondary)]',
    tertiary: 'text-[var(--color-text-tertiary)]',
    disabled: 'text-[var(--color-text-disabled)]',
    inverse: 'text-[var(--color-text-inverse)]',
    link: 'text-[var(--color-text-link)]',
    error: 'text-[var(--color-text-error)]',
    success: 'text-[var(--color-text-success)]',
    warning: 'text-[var(--color-text-warning)]',
    info: 'text-[var(--color-text-info)]',
  },
  // Shadow classes
  shadow: {
    sm: 'shadow-[var(--shadow-sm)]',
    md: 'shadow-[var(--shadow-md)]',
    lg: 'shadow-[var(--shadow-lg)]',
    xl: 'shadow-[var(--shadow-xl)]',
  },
} as const;
