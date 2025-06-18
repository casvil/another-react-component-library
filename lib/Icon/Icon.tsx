import React from 'react';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: LucideIcon; // icon component type, e.g. Home, ArrowUp, etc.
  size?: number | string;
  color?: string;
  className?: string;
  'aria-label'?: string;
}

/**
 * Icon molecule component.
 * Renders any Lucide icon component with configurable size, color, and accessibility.
 */
export const Icon = ({
  icon: IconComponent,
  size = 24,
  color = 'currentColor',
  className,
  'aria-label': ariaLabel,
  ...props
}: IconProps) => {
  const numericSize =
    typeof size === 'string' ? parseInt(size, 10) || 24 : size;

  return (
    <span
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      className={clsx('inline-flex items-center justify-center', className)}
      style={{ width: numericSize, height: numericSize, color, lineHeight: 0 }}
      {...props}
    >
      <IconComponent size={numericSize} color={color} focusable="false" />
    </span>
  );
};
