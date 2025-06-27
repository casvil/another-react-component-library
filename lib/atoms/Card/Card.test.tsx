import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders with default props', () => {
    render(<Card>Test content</Card>);

    const card = screen.getByText('Test content').closest('div');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('bg-white', 'border', 'border-gray-200');
  });

  it('renders children correctly', () => {
    render(
      <Card>
        <h1>Title</h1>
        <p>Content</p>
      </Card>,
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  describe('Variants', () => {
    it('renders default variant correctly', () => {
      render(<Card variant="default">Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass('bg-white', 'border', 'border-gray-200');
      expect(card).not.toHaveClass('border-2', 'shadow-md');
    });

    it('renders outlined variant correctly', () => {
      render(<Card variant="outlined">Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass('bg-white', 'border-2', 'border-gray-300');
    });

    it('renders elevated variant correctly', () => {
      render(
        <Card variant="elevated" size="md">
          Test
        </Card>,
      );

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass(
        'bg-white',
        'border',
        'border-gray-100',
        'shadow-md',
      );
    });
  });

  describe('Sizes', () => {
    it('renders small size correctly', () => {
      render(<Card size="sm">Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass('p-4', 'rounded-lg');
    });

    it('renders medium size correctly', () => {
      render(<Card size="md">Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass('p-6', 'rounded-xl');
    });

    it('renders large size correctly', () => {
      render(<Card size="lg">Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass('p-8', 'rounded-2xl');
    });
  });

  describe('Interactive functionality', () => {
    it('is not interactive by default', () => {
      render(<Card>Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).not.toHaveAttribute('tabIndex');
      expect(card).not.toHaveAttribute('role', 'button');
      expect(card).not.toHaveClass('cursor-pointer');
    });

    it('becomes interactive when interactive prop is true', () => {
      render(<Card interactive>Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveAttribute('tabIndex', '0');
      expect(card).toHaveAttribute('role', 'button');
      expect(card).toHaveClass(
        'cursor-pointer',
        'transition-all',
        'duration-200',
      );
    });

    it('calls onClick when interactive card is clicked', () => {
      const onClick = vi.fn();
      render(
        <Card interactive onClick={onClick}>
          Test
        </Card>,
      );

      const card = screen.getByText('Test').closest('div');
      fireEvent.click(card!);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('handles keyboard interaction when interactive', () => {
      const onClick = vi.fn();
      render(
        <Card interactive onClick={onClick}>
          Test
        </Card>,
      );

      const card = screen.getByText('Test').closest('div');
      fireEvent.keyDown(card!, { key: 'Enter' });

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Custom element types', () => {
    it('renders as div by default', () => {
      render(<Card>Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card?.tagName).toBe('DIV');
    });

    it('renders as custom element when as prop is provided', () => {
      render(<Card as="section">Test</Card>);

      const card = screen.getByText('Test').closest('section');
      expect(card?.tagName).toBe('SECTION');
    });

    it('renders as article element', () => {
      render(<Card as="article">Test</Card>);

      const card = screen.getByText('Test').closest('article');
      expect(card?.tagName).toBe('ARTICLE');
    });

    it('renders as aside element', () => {
      render(<Card as="aside">Test</Card>);

      const card = screen.getByText('Test').closest('aside');
      expect(card?.tagName).toBe('ASIDE');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<Card className="custom-class">Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass('custom-class');
    });

    it('preserves default classes when custom className is applied', () => {
      render(<Card className="custom-class">Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass(
        'rounded-xl',
        'bg-white',
        'border',
        'custom-class',
      );
    });

    it('allows overriding default styles with more specific classes', () => {
      render(
        <Card className="bg-red-500 border-red-600 rounded-none shadow-lg">
          Test
        </Card>,
      );

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass(
        'bg-red-500',
        'border-red-600',
        'rounded-none',
        'shadow-lg',
      );
    });

    it('supports complex styling combinations', () => {
      render(
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white transform hover:scale-105 transition-all">
          Test
        </Card>,
      );

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass(
        'bg-gradient-to-r',
        'from-blue-500',
        'to-purple-600',
        'border-none',
        'text-white',
        'transform',
        'hover:scale-105',
        'transition-all',
      );
    });

    it('maintains accessibility when custom styled', () => {
      render(
        <Card
          interactive
          className="bg-gray-900 text-white border-gray-700"
          aria-label="Custom dark card"
        >
          Test
        </Card>,
      );

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass(
        'bg-gray-900',
        'text-white',
        'border-gray-700',
        'cursor-pointer',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-500',
      );
      expect(card).toHaveAttribute('aria-label', 'Custom dark card');
      expect(card).toHaveAttribute('role', 'button');
    });
  });

  describe('HTML attributes', () => {
    it('passes through additional HTML attributes', () => {
      render(
        <Card data-testid="custom-card" id="card-id">
          Test
        </Card>,
      );

      const card = screen.getByTestId('custom-card');
      expect(card).toHaveAttribute('id', 'card-id');
      expect(card).toHaveTextContent('Test');
    });

    it('handles aria attributes correctly', () => {
      render(
        <Card aria-label="Test card" aria-describedby="description">
          Test
        </Card>,
      );

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveAttribute('aria-label', 'Test card');
      expect(card).toHaveAttribute('aria-describedby', 'description');
    });
  });

  describe('Accessibility', () => {
    it('has proper focus behavior when interactive', () => {
      render(<Card interactive>Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).toHaveClass(
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-500',
      );
    });

    it('is focusable when interactive', () => {
      render(<Card interactive>Test</Card>);

      const card = screen.getByText('Test').closest('div');
      card?.focus();
      expect(document.activeElement).toBe(card);
    });

    it('is not focusable when not interactive', () => {
      render(<Card>Test</Card>);

      const card = screen.getByText('Test').closest('div');
      expect(card).not.toHaveAttribute('tabIndex');
    });
  });
});
