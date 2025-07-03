export type ColorScheme = 'light' | 'dark';

export interface DesignTokens {
  // Color tokens
  colors: {
    // Base colors
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      overlay: string;
    };
    surface: {
      primary: string;
      secondary: string;
      tertiary: string;
      elevated: string;
      hover: string;
      active: string;
    };
    border: {
      primary: string;
      secondary: string;
      tertiary: string;
      focus: string;
      error: string;
      success: string;
      warning: string;
      info: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      inverse: string;
      link: string;
      error: string;
      success: string;
      warning: string;
      info: string;
    };
    // Semantic colors
    intent: {
      primary: {
        50: string;
        100: string;
        500: string;
        600: string;
        700: string;
        900: string;
      };
      success: {
        50: string;
        100: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      error: {
        50: string;
        100: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      warning: {
        50: string;
        100: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      info: {
        50: string;
        100: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
    };
  };
  // Shadow tokens
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  // Spacing tokens (extending existing system)
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  // Border radius tokens
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
}

export interface Theme {
  name: string;
  colorScheme: ColorScheme;
  tokens: DesignTokens;
}

export interface ThemeContextValue {
  theme: Theme;
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
}
