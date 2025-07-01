import { useEffect } from 'react';
import type { Decorator } from '@storybook/react-vite';

/**
 * Sets `width: 100%` on the #storybook-root element for a specific story.
 */
export const WithFullWidthRoot: Decorator = (Story) => {
  useEffect(() => {
    const root = document.getElementById('storybook-root');

    if (root) root.style.width = '100%';

    return () => {
      if (root) root.style.width = '';
    };
  }, []);

  return <Story />;
};
