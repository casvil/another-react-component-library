import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ColorScheme, ThemeContextValue } from '../@types/theme';
import { themes } from './themes';
import { generateCSSVariables } from './utils';
import { lightTokens, darkTokens } from './tokens';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultColorScheme?: ColorScheme;
  colorScheme?: ColorScheme;
  storageKey?: string;
}

/**
 * ThemeProvider component that manages theme state and injects CSS variables.
 *
 * Features:
 * - Manages light/dark theme switching
 * - Persists theme preference to localStorage
 * - Injects CSS variables for design tokens
 * - Provides theme context to child components
 * - Supports system theme detection
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultColorScheme = 'light',
  colorScheme,
  storageKey = 'ui-theme',
}) => {
  const [internalScheme, setInternalScheme] = useState<ColorScheme>(() => {
    if (colorScheme) return colorScheme;
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey) as ColorScheme;
      if (saved && (saved === 'light' || saved === 'dark')) {
        return saved;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return defaultColorScheme;
  });

  const effectiveScheme = colorScheme ?? internalScheme;
  const theme = themes[effectiveScheme];

  const setColorScheme = (scheme: ColorScheme) => {
    if (colorScheme) return;
    setInternalScheme(scheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, scheme);
    }
  };

  const toggleColorScheme = () => {
    if (colorScheme) return;
    setColorScheme(internalScheme === 'light' ? 'dark' : 'light');
  };

  // Helper to get all possible theme variable keys
  const getAllThemeVariableKeys = () => {
    const allVars = {
      ...generateCSSVariables(lightTokens),
      ...generateCSSVariables(darkTokens),
    };
    return Object.keys(allVars);
  };

  // Inject CSS variables when theme changes
  useEffect(() => {
    const root = document.documentElement;
    // Debug log to confirm which tokens are being applied
    console.log('Applying theme', effectiveScheme, theme.tokens);
    // Always clean up all possible theme variables
    getAllThemeVariableKeys().forEach((property) => {
      root.style.removeProperty(property);
    });
    const cssVariables = generateCSSVariables(theme.tokens);
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    root.setAttribute('data-theme', effectiveScheme);
    root.style.colorScheme = effectiveScheme;
    return () => {
      getAllThemeVariableKeys().forEach((property) => {
        root.style.removeProperty(property);
      });
    };
  }, [theme, effectiveScheme, colorScheme]);

  // Listen for system theme changes (only if uncontrolled)
  useEffect(() => {
    if (colorScheme || typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem(storageKey);
      if (!savedTheme) {
        setInternalScheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [storageKey, colorScheme]);

  const value: ThemeContextValue = {
    theme,
    colorScheme: effectiveScheme,
    setColorScheme,
    toggleColorScheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/**
 * Hook to access theme context
 * @returns Theme context value with current theme and controls
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
