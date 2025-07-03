import React from 'react';
import type { StoryFn, StoryContext } from '@storybook/react-vite';
import { ThemeProvider } from '../../lib/theme';

/**
 * Storybook decorator that wraps stories with ThemeProvider
 * Provides theme switching capability in Storybook
 */
export const withTheme = (Story: StoryFn, context: StoryContext) => {
  const theme = context.globals.theme || 'light';

  return (
    <ThemeProvider defaultColorScheme={theme as 'light' | 'dark'}>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: 'var(--color-background-primary)',
          color: 'var(--color-text-primary)',
          padding: '1rem',
        }}
      >
        {Story(context.args, context)}
      </div>
    </ThemeProvider>
  );
};
