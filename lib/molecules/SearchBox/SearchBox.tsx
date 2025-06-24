import React from 'react';
import { Input, InputProps } from '../../atoms/Input/Input';
import { Icon } from '../../atoms/Icon/Icon';
import { Spinner } from '../../atoms/Spinner/Spinner';
import SearchIcon from 'lucide-react/icons/search';

export interface SearchBoxProps extends Omit<InputProps, 'icon' | 'iconPosition'> {
  loading?: boolean;
  iconPosition?: 'left' | 'right';
}

/**
 * SearchBox molecule component.
 * Combines Input, Icon, and Spinner for a search experience.
 * Shows a search icon and an optional loading spinner.
 */
export const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    { loading = false, iconPosition = 'left', disabled, ...props },
    ref
  ) => {
    const icon = loading ? (
      <Spinner size="sm" className="mr-1" />
    ) : (
      <Icon icon={SearchIcon} size={18} aria-label="Search" />
    );

    return (
      <Input
        ref={ref}
        icon={icon}
        iconPosition={iconPosition}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      />
    );
  }
);

SearchBox.displayName = 'SearchBox'; 