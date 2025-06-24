import React from 'react';

import { Input } from '../../atoms/Input/Input';
import type { InputProps } from '../../atoms/Input/Input';
import { Spinner } from '../../atoms/Spinner/Spinner';

import SearchIcon from 'lucide-react/icons/search';

export interface SearchProps
  extends Omit<InputProps, 'icon' | 'iconPosition' | 'iconClassName'> {
  loading?: boolean;
  iconPosition?: 'left' | 'right';
  className?: string;
}

/**
 * Search molecule component.
 * Combines Input, Icon, and Spinner for a search experience.
 * Shows a search icon and an optional loading spinner.
 */
export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    { loading = false, iconPosition = 'left', disabled, className, ...props },
    ref,
  ) => {
    return (
      <div className={`relative ${className || ''}`}>
        <Input
          ref={ref}
          icon={SearchIcon}
          iconAriaLabel="Search"
          iconPosition={iconPosition}
          disabled={disabled || loading}
          aria-busy={loading}
          {...props}
        />
        {loading && (
          <div
            className={`absolute inset-y-0 flex items-center ${
              iconPosition === 'left' ? 'left-3' : 'right-3'
            }`}
          >
            <Spinner size="sm" />
          </div>
        )}
      </div>
    );
  },
);

Search.displayName = 'Search';
