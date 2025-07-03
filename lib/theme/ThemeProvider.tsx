import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ColorScheme, ThemeContextValue } from '../@types/theme';
import { themes } from './themes';
import { generateCSSVariables } from './utils';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultColorScheme?: ColorScheme;
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
  storageKey = 'ui-theme',
}) => {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>(() => {
    // Try to get saved theme from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey) as ColorScheme;
      if (saved && (saved === 'light' || saved === 'dark')) {
        return saved;
      }

      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return defaultColorScheme;
  });

  const theme = themes[colorScheme];

  const setColorScheme = (scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, scheme);
    }
  };

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  // Inject CSS variables when theme changes
  useEffect(() => {
    const root = document.documentElement;
    const cssVariables = generateCSSVariables(theme.tokens);

    // Apply CSS variables to :root
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Set data-theme attribute for CSS selectors
    root.setAttribute('data-theme', colorScheme);

    // Set color-scheme for browser defaults
    root.style.colorScheme = colorScheme;

    // Clean up function
    return () => {
      Object.keys(cssVariables).forEach((property) => {
        root.style.removeProperty(property);
      });
    };
  }, [theme, colorScheme]);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if no manual preference is saved
      const savedTheme = localStorage.getItem(storageKey);
      if (!savedTheme) {
        setColorSchemeState(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [storageKey]);

  const value: ThemeContextValue = {
    theme,
    colorScheme,
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
