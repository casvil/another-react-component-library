import { defineConfig } from 'vitest/config';
import '@testing-library/jest-dom';

const CI = process.env.CI === 'true';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    reporters: CI ? [['default', { summary: false }]] : ['verbose'],
  },
});
