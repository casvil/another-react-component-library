import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';
import React from 'react';
import { ThemeProvider } from '../../theme';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'small', 'caption'],
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'muted',
        'success',
        'warning',
        'error',
        'info',
      ],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    truncate: {
      control: 'boolean',
    },
    as: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'div',
        'small',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is default body text with normal weight and primary color.',
    variant: 'body',
    weight: 'normal',
    color: 'primary',
    align: 'left',
    truncate: false,
  },
};

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant="h1">Heading 1 - Main page title</Text>
      <Text variant="h2">Heading 2 - Section title</Text>
      <Text variant="h3">Heading 3 - Subsection title</Text>
      <Text variant="h4">Heading 4 - Component title</Text>
      <Text variant="h5">Heading 5 - Small section</Text>
      <Text variant="h6">Heading 6 - Smallest heading</Text>
    </div>
  ),
};

export const BodyTexts: Story = {
  render: () => (
    <div className="space-y-3">
      <Text variant="body">
        Body text - Standard paragraph text for content
      </Text>
      <Text variant="small">
        Small text - For captions, footnotes, or secondary information
      </Text>
      <Text variant="caption">
        Caption text - For image captions or very small details
      </Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-2">
      <Text color="primary">Primary color text - Standard text color</Text>
      <Text color="secondary">Secondary color text - Slightly muted</Text>
      <Text color="muted">Muted color text - More subdued</Text>
      <Text color="success">Success color text - For positive messages</Text>
      <Text color="warning">Warning color text - For cautionary messages</Text>
      <Text color="error">Error color text - For error messages</Text>
      <Text color="info">Info color text - For informational messages</Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  ),
};

export const Alignments: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Text variant="h6" className="mb-2">
          Left Aligned (Default)
        </Text>
        <Text align="left">
          This text is aligned to the left side of its container.
        </Text>
      </div>
      <div>
        <Text variant="h6" className="mb-2">
          Center Aligned
        </Text>
        <Text align="center">This text is centered within its container.</Text>
      </div>
      <div>
        <Text variant="h6" className="mb-2">
          Right Aligned
        </Text>
        <Text align="right">
          This text is aligned to the right side of its container.
        </Text>
      </div>
      <div>
        <Text variant="h6" className="mb-2">
          Justified
        </Text>
        <Text align="justify">
          This text is justified, which means it is aligned to both the left and
          right margins, creating straight edges on both sides by adjusting the
          spacing between words.
        </Text>
      </div>
    </div>
  ),
};

export const Truncated: Story = {
  render: () => (
    <div className="space-y-4 max-w-xs">
      <div>
        <Text variant="h6" className="mb-2">
          Normal Text (Wraps)
        </Text>
        <Text>
          This is a long line of text that will wrap to multiple lines when it
          exceeds the container width.
        </Text>
      </div>
      <div>
        <Text variant="h6" className="mb-2">
          Truncated Text
        </Text>
        <Text truncate>
          This is a long line of text that will be truncated with an ellipsis
          when it exceeds the container width.
        </Text>
      </div>
    </div>
  ),
};

export const CustomElements: Story = {
  render: () => (
    <div className="space-y-3">
      <Text variant="h2" as="div">
        H2 styling but rendered as div
      </Text>
      <Text variant="body" as="span">
        Body styling but rendered as span
      </Text>
      <Text variant="caption" as="p">
        Caption styling but rendered as paragraph
      </Text>
    </div>
  ),
};

export const SemanticExample: Story = {
  render: () => (
    <article className="space-y-4 max-w-2xl">
      <Text variant="h1" as="h1">
        Article Title
      </Text>
      <Text variant="small" color="muted">
        Published on March 15, 2024
      </Text>

      <Text variant="h2" as="h2">
        Introduction
      </Text>
      <Text variant="body">
        This is the introduction paragraph of the article. It provides an
        overview of what the reader can expect to learn from this content.
      </Text>

      <Text variant="h3" as="h3">
        Main Section
      </Text>
      <Text variant="body">
        This is the main content section with detailed information. The text
        component allows for consistent typography throughout the application
        while maintaining semantic HTML structure.
      </Text>

      <Text variant="body">
        <Text as="strong" weight="semibold">
          Important note:
        </Text>{' '}
        This demonstrates how text components can be nested and combined with
        different weights and styling.
      </Text>

      <Text variant="small" color="secondary" as="footer">
        This article demonstrates the Text component's flexibility and semantic
        capabilities.
      </Text>
    </article>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-2">
      {(
        [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'body',
          'small',
          'caption',
        ] as const
      ).map((variant) => (
        <Text key={variant} variant={variant}>
          {variant.toUpperCase()} - Sample text for {variant} variant
        </Text>
      ))}
    </div>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider defaultColorScheme="dark">
      <div className="space-y-4">
        <Text variant="h2">Heading Dark</Text>
        <Text color="secondary">Secondary color in dark</Text>
        <Text color="muted">Muted color in dark</Text>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text component preview in dark theme.',
      },
    },
    globals: {
      theme: 'dark',
    },
  },
};
