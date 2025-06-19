import { forwardRef, ImgHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  className?: string;
}

/**
 * Accessible and customizable image component.
 * Supports Tailwind utility classes and forwards refs for advanced usage.
 * Ensures proper alt text and role for better a11y compliance.
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, className = 'rounded-xl', ...props }, ref) => {
    return (
      <img
        ref={ref}
        alt={alt}
        className={clsx('object-cover', className)}
        {...props}
      />
    );
  },
);

Image.displayName = 'Image';
