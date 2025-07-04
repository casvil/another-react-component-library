import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders with default props', () => {
    render(<Text>Test content</Text>);

    const text = screen.getByText('Test content');
    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('P');
    expect(text).toHaveClass(
      'text-base',
      'text-[var(--color-text-primary)]',
      'text-left',
    );
  });

  it('renders children correctly', () => {
    render(<Text>Hello World</Text>);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  describe('Variants', () => {
    it('renders heading variants with correct elements and classes', () => {
      const headings = [
        { variant: 'h1', expectedTag: 'H1', expectedClass: 'text-4xl' },
        { variant: 'h2', expectedTag: 'H2', expectedClass: 'text-3xl' },
        { variant: 'h3', expectedTag: 'H3', expectedClass: 'text-2xl' },
        { variant: 'h4', expectedTag: 'H4', expectedClass: 'text-xl' },
        { variant: 'h5', expectedTag: 'H5', expectedClass: 'text-lg' },
        { variant: 'h6', expectedTag: 'H6', expectedClass: 'text-base' },
      ] as const;

      headings.forEach(({ variant, expectedTag, expectedClass }) => {
        const { unmount } = render(
          <Text variant={variant}>Test {variant}</Text>,
        );

        const element = screen.getByText(`Test ${variant}`);
        expect(element.tagName).toBe(expectedTag);
        expect(element).toHaveClass(expectedClass, 'font-bold');

        unmount();
      });
    });

    it('renders body variant correctly', () => {
      render(<Text variant="body">Body text</Text>);

      const text = screen.getByText('Body text');
      expect(text.tagName).toBe('P');
      expect(text).toHaveClass('text-base');
    });

    it('renders small variant correctly', () => {
      render(<Text variant="small">Small text</Text>);

      const text = screen.getByText('Small text');
      expect(text.tagName).toBe('SMALL');
      expect(text).toHaveClass('text-sm');
    });

    it('renders caption variant correctly', () => {
      render(<Text variant="caption">Caption text</Text>);

      const text = screen.getByText('Caption text');
      expect(text.tagName).toBe('SPAN');
      expect(text).toHaveClass('text-xs');
    });
  });

  describe('Weights', () => {
    it('applies weight classes correctly', () => {
      const weights = [
        { weight: 'light', expectedClass: 'font-light' },
        { weight: 'normal', expectedClass: 'font-normal' },
        { weight: 'medium', expectedClass: 'font-medium' },
        { weight: 'semibold', expectedClass: 'font-semibold' },
        { weight: 'bold', expectedClass: 'font-bold' },
      ] as const;

      weights.forEach(({ weight, expectedClass }) => {
        const { unmount } = render(<Text weight={weight}>Test {weight}</Text>);

        const text = screen.getByText(`Test ${weight}`);
        expect(text).toHaveClass(expectedClass);

        unmount();
      });
    });

    it('uses bold weight for headings by default', () => {
      render(<Text variant="h1">Heading</Text>);

      const heading = screen.getByText('Heading');
      expect(heading).toHaveClass('font-bold');
    });

    it('allows weight override for headings', () => {
      render(
        <Text variant="h1" weight="light">
          Light Heading
        </Text>,
      );

      const heading = screen.getByText('Light Heading');
      expect(heading).toHaveClass('font-light');
      expect(heading).not.toHaveClass('font-bold');
    });
  });

  describe('Colors', () => {
    it('applies color classes correctly', () => {
      const colors = [
        {
          color: 'primary' as const,
          expectedClass: 'text-[var(--color-text-primary)]',
        },
        {
          color: 'secondary' as const,
          expectedClass: 'text-[var(--color-text-secondary)]',
        },
        {
          color: 'muted' as const,
          expectedClass: 'text-[var(--color-text-tertiary)]',
        },
        {
          color: 'success' as const,
          expectedClass: 'text-[var(--color-text-success)]',
        },
        {
          color: 'warning' as const,
          expectedClass: 'text-[var(--color-text-warning)]',
        },
        {
          color: 'error' as const,
          expectedClass: 'text-[var(--color-text-error)]',
        },
        {
          color: 'info' as const,
          expectedClass: 'text-[var(--color-text-info)]',
        },
      ] as const;

      colors.forEach(({ color, expectedClass }) => {
        const { unmount } = render(<Text color={color}>Test {color}</Text>);

        const text = screen.getByText(`Test ${color}`);
        expect(text).toHaveClass(expectedClass);

        unmount();
      });
    });
  });

  describe('Alignment', () => {
    it('applies alignment classes correctly', () => {
      const alignments = [
        { align: 'left', expectedClass: 'text-left' },
        { align: 'center', expectedClass: 'text-center' },
        { align: 'right', expectedClass: 'text-right' },
        { align: 'justify', expectedClass: 'text-justify' },
      ] as const;

      alignments.forEach(({ align, expectedClass }) => {
        const { unmount } = render(<Text align={align}>Test {align}</Text>);

        const text = screen.getByText(`Test ${align}`);
        expect(text).toHaveClass(expectedClass);

        unmount();
      });
    });
  });

  describe('Truncation', () => {
    it('applies truncate class when truncate is true', () => {
      render(<Text truncate>Truncated text</Text>);

      const text = screen.getByText('Truncated text');
      expect(text).toHaveClass('truncate');
    });

    it('does not apply truncate class by default', () => {
      render(<Text>Normal text</Text>);

      const text = screen.getByText('Normal text');
      expect(text).not.toHaveClass('truncate');
    });
  });

  describe('Custom elements', () => {
    it('renders as custom element when as prop is provided', () => {
      render(<Text as="span">Span text</Text>);

      const text = screen.getByText('Span text');
      expect(text.tagName).toBe('SPAN');
    });

    it('overrides default element with as prop', () => {
      render(
        <Text variant="h1" as="div">
          Div with h1 styling
        </Text>,
      );

      const text = screen.getByText('Div with h1 styling');
      expect(text.tagName).toBe('DIV');
      expect(text).toHaveClass('text-4xl', 'font-bold');
    });

    it('maintains styling when using custom element', () => {
      render(
        <Text variant="body" color="success" as="span">
          Span body
        </Text>,
      );

      const text = screen.getByText('Span body');
      expect(text.tagName).toBe('SPAN');
      expect(text).toHaveClass('text-base', 'text-[var(--color-text-success)]');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<Text className="custom-class">Test</Text>);

      const text = screen.getByText('Test');
      expect(text).toHaveClass('custom-class');
    });

    it('preserves default classes when custom className is applied', () => {
      render(<Text className="custom-class">Test</Text>);

      const text = screen.getByText('Test');
      expect(text).toHaveClass(
        'text-base',
        'text-[var(--color-text-primary)]',
        'text-left',
        'custom-class',
      );
    });
  });

  describe('HTML attributes', () => {
    it('passes through additional HTML attributes', () => {
      render(
        <Text data-testid="custom-text" id="text-id">
          Test
        </Text>,
      );

      const text = screen.getByTestId('custom-text');
      expect(text).toHaveAttribute('id', 'text-id');
    });

    it('handles aria attributes correctly', () => {
      render(
        <Text aria-label="Test text" role="heading">
          Test
        </Text>,
      );

      const text = screen.getByText('Test');
      expect(text).toHaveAttribute('aria-label', 'Test text');
      expect(text).toHaveAttribute('role', 'heading');
    });
  });

  describe('Complex combinations', () => {
    it('combines multiple props correctly', () => {
      render(
        <Text
          variant="h2"
          weight="medium"
          color="success"
          align="center"
          truncate
          className="custom-class"
          as="div"
        >
          Complex text
        </Text>,
      );

      const text = screen.getByText('Complex text');
      expect(text.tagName).toBe('DIV');
      expect(text).toHaveClass(
        'text-3xl', // h2 variant
        'font-medium', // medium weight
        'text-[var(--color-text-success)]', // success color
        'text-center', // center align
        'truncate', // truncate
        'custom-class', // custom class
      );
    });

    it('handles nested text content', () => {
      render(
        <Text variant="body">
          This is{' '}
          <Text as="strong" weight="bold">
            bold text
          </Text>{' '}
          within a paragraph.
        </Text>,
      );

      expect(screen.getByText('bold text')).toBeInTheDocument();
      expect(
        screen.getByText(/This is.*within a paragraph\./),
      ).toBeInTheDocument();

      const boldText = screen.getByText('bold text');
      expect(boldText.tagName).toBe('STRONG');
      expect(boldText).toHaveClass('font-bold');
    });
  });
});
