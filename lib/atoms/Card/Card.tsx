import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { cardSizeClasses } from '../../@types/classes';

export type CardSize = 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'outlined' | 'elevated';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: CardSize;
  variant?: CardVariant;
  interactive?: boolean;
  className?: string;
  as?: React.ElementType;
}

const VARIANT_CLASSES = {
  default: 'bg-white border border-gray-200',
  outlined: 'bg-white border-2 border-gray-300',
  elevated: 'bg-white border border-gray-100',
} as const;

/**
 * Card atom component. A versatile container for displaying content in a structured format.
 * Supports different sizes, variants (default, outlined, elevated), and interactive behavior.
 * Can be rendered as any HTML element using the 'as' prop for semantic flexibility.
 */
export const Card = React.memo(
  forwardRef<HTMLDivElement, CardProps>(
    (
      {
        children,
        size = 'md',
        variant = 'default',
        interactive = false,
        className,
        as: Component = 'div',
        ...props
      },
      ref,
    ) => {
      const cardClasses = clsx(
        cardSizeClasses.padding[size],
        cardSizeClasses.borderRadius[size],
        VARIANT_CLASSES[variant],
        {
          [cardSizeClasses.shadow[size]]: variant === 'elevated',
          'transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer':
            interactive,
        },
        className,
      );

      const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          // Trigger click handler when activated by keyboard
          if (props.onClick) {
            const target = e.currentTarget;
            target.click();
          }
        }
      };

      const componentProps = {
        ref,
        className: cardClasses,
        ...(interactive && {
          tabIndex: 0,
          role: 'button',
          onKeyDown: handleKeyDown,
        }),
        ...props,
      };

      return <Component {...componentProps}>{children}</Component>;
    },
  ),
);

Card.displayName = 'Card';
