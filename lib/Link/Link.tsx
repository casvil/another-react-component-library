import React, {
  AnchorHTMLAttributes,
  forwardRef,
  ReactNode,
  useMemo,
} from 'react';
import clsx from 'clsx';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'> {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  className?: string;
}

/**
 * Link atom component.
 * Renders an accessible styled anchor tag.
 * Supports variants, disabled state, and forwards ref.
 * Automatically adds rel="noopener noreferrer" if target="_blank".
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      children,
      variant = 'primary',
      disabled = false,
      target,
      rel,
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    // Automatically add rel noopener noreferrer for security if target is _blank
    const computedRel = useMemo(() => {
      if (rel) return rel;
      if (target === '_blank') return 'noopener noreferrer';
      return undefined;
    }, [rel, target]);

    const baseStyles =
      'inline-flex items-center cursor-pointer font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    const variants = {
      primary: 'text-indigo-600 hover:text-indigo-800 focus:ring-indigo-500',
      secondary: 'text-gray-600 hover:text-gray-800 focus:ring-gray-400',
      tertiary:
        'text-gray-600 hover:text-gray-800 focus:ring-gray-400 underline',
    };

    const classes = clsx(
      baseStyles,
      variants[variant],
      disabled && 'pointer-events-none opacity-50',
      className,
    );

    function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
      if (disabled) {
        event.preventDefault();
        return;
      }
      if (process.env.NODE_ENV === 'test') {
        event.preventDefault(); // prevent jsdom navigation error during tests
      }
      onClick?.(event);
    }

    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={computedRel}
        className={classes}
        onClick={handleClick}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
