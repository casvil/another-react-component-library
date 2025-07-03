import React from 'react';
import { useTheme } from './ThemeProvider';
import { Button } from '../atoms/Button/Button';
import Sun from 'lucide-react/icons/sun';
import Moon from 'lucide-react/icons/moon';

export interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

/**
 * ThemeToggle component for switching between light and dark themes.
 * Uses the theme context to toggle color schemes and displays appropriate icons.
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className,
  size = 'md',
  variant = 'secondary',
}) => {
  const { colorScheme, toggleColorScheme } = useTheme();

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={toggleColorScheme}
      icon={colorScheme === 'light' ? Moon : Sun}
      label={`Switch to ${colorScheme === 'light' ? 'dark' : 'light'} mode`}
      aria-label={`Switch to ${colorScheme === 'light' ? 'dark' : 'light'} mode`}
    />
  );
};
