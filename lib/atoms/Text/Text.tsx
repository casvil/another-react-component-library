import React, { forwardRef } from 'react';
import clsx from 'clsx';

import {
  textComponentSizeClasses,
  textAlignClasses,
} from '../../@types/classes';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'small'
  | 'caption';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
  truncate?: boolean;
  className?: string;
  as?: React.ElementType;
}

const VARIANT_ELEMENTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'small',
  caption: 'span',
} as const;

/**
 * Text atom component. A flexible typography component for rendering text with various styles.
 * Supports multiple variants (h1-h6, body, small, caption), font weights, colors, alignment options,
 * and text truncation. Can be rendered as any HTML element using the 'as' prop for semantic flexibility.
 */
export const Text = React.memo(
  forwardRef<HTMLElement, TextProps>(
    (
      {
        children,
        variant = 'body',
        weight,
        color = 'primary',
        align = 'left',
        truncate = false,
        className,
        as,
        ...props
      },
      ref,
    ) => {
      // Determine the HTML element to use
      const Component = as || VARIANT_ELEMENTS[variant];

      // Determine the weight class - use provided weight or variant default
      const weightClass = weight
        ? textComponentSizeClasses.weight[weight]
        : textComponentSizeClasses.variantDefaultWeights[variant];

      const textClasses = clsx(
        textComponentSizeClasses.variant[variant],
        weightClass,
        textComponentSizeClasses.color[color],
        textAlignClasses[align],
        {
          truncate: truncate,
        },
        className,
      );

      return (
        <Component ref={ref} className={textClasses} {...props}>
          {children}
        </Component>
      );
    },
  ),
);

Text.displayName = 'Text';
