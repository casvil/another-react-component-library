import type { Preview } from '@storybook/react-vite';

import '../lib/index.css';
// import { withTheme } from './decorators/withTheme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    backgrounds: {
      disable: true, // Disable default background since we handle this with themes
    },
  },
};

export default preview;
