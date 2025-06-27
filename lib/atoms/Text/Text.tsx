import React from 'react';
import clsx from 'clsx';

import { textComponentSizeClasses } from '../../@types/size';

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

const TEXT_ALIGN_CLASSES = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
} as const;

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  weight,
  color = 'primary',
  align = 'left',
  truncate = false,
  className,
  as,
  ...props
}) => {
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
    TEXT_ALIGN_CLASSES[align],
    {
      truncate: truncate,
    },
    className,
  );

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  );
};

export default Text;
