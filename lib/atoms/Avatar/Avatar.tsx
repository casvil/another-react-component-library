import { forwardRef } from 'react';
import clsx from 'clsx';

import type { Size } from '../../@types/classes';
import { avatarSizeClasses } from '../../@types/classes';

export interface AvatarProps {
  alt?: string;
  className?: string;
  name?: string;
  size?: Size;
  src?: string;
  border?: string; // Custom border classes
}

const getInitials = (fullName?: string) => {
  if (!fullName) return '';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (
    parts[0].charAt(0).toUpperCase() +
    parts[parts.length - 1].charAt(0).toUpperCase()
  );
};

/**
 * Avatar atom component. Shows a user avatar with image or initials fallback.
 * Fully accessible with alt text and aria-label.
 */
export const Avatar = forwardRef<
  HTMLImageElement | HTMLSpanElement,
  AvatarProps
>(({ src, name, alt, className, size = 'md', border }, ref) => {
  const initials = getInitials(name);
  const ariaLabel = alt || name || 'User avatar';

  const baseInitialsClasses = clsx(
    'inline-flex items-center justify-center rounded-full font-semibold bg-gray-200 text-gray-700 select-none',
    avatarSizeClasses[size],
    border,
    className,
  );

  const baseImageClasses = clsx(
    'rounded-full',
    avatarSizeClasses[size],
    border,
    className,
  );

  if (src) {
    return (
      <img
        ref={ref as React.Ref<HTMLImageElement>}
        src={src}
        alt={ariaLabel}
        className={baseImageClasses}
        role="img"
        aria-label={ariaLabel}
      />
    );
  }

  return (
    <span
      ref={ref as React.Ref<HTMLSpanElement>}
      className={baseInitialsClasses}
      role="img"
      aria-label={ariaLabel}
    >
      {initials}
    </span>
  );
});
