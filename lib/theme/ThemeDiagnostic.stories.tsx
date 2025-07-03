import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  LightThemeDiagnostic,
  DarkThemeDiagnostic,
  SideBySideDiagnostic,
} from './ThemeDiagnostic';

const meta: Meta = {
  title: 'Development/Theme Diagnostic',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Internal diagnostic tools for debugging theme system CSS variables and behavior. Use these when developing or troubleshooting theme issues.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const LightTheme: Story = {
  render: () => <LightThemeDiagnostic />,
};

export const DarkTheme: Story = {
  render: () => <DarkThemeDiagnostic />,
};

export const SideBySide: Story = {
  render: () => <SideBySideDiagnostic />,
};
