import type { Theme } from '../@types/theme';
import { lightTokens, darkTokens } from './tokens';

export const lightTheme: Theme = {
  name: 'Light',
  colorScheme: 'light',
  tokens: lightTokens,
};

export const darkTheme: Theme = {
  name: 'Dark',
  colorScheme: 'dark',
  tokens: darkTokens,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export type ThemeName = keyof typeof themes;
