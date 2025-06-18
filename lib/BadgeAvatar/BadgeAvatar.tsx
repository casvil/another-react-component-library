import React from 'react';
import clsx from 'clsx';
import { Badge, BadgeProps } from '../Badge/Badge';
import { Avatar, AvatarProps } from '../Avatar/Avatar';

export interface BadgeAvatarProps {
  avatarProps: AvatarProps;
  badgeProps?: Omit<BadgeProps, 'children' | 'aria-label'>;
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

/**
 * BadgeAvatar molecule.
 * Puts Avatar inside the Badge, alongside optional children content (text or elements).
 */
export const BadgeAvatar: React.FC<BadgeAvatarProps> = ({
  avatarProps,
  badgeProps,
  children,
  className,
  textClassName,
}) => {
  // Merge avatarProps with default size
  const mergedAvatarProps = {
    size: 'sm' as 'sm' | 'md' | 'lg',
    ...avatarProps,
  };

  return (
    <Badge
      {...badgeProps}
      className={clsx(
        'inline-flex items-center space-x-1 rounded-full',
        className,
        badgeProps?.className,
      )}
      aria-label={
        badgeProps?.['aria-label'] ||
        String(children) ||
        mergedAvatarProps.alt ||
        mergedAvatarProps.name ||
        'User avatar'
      }
    >
      <Avatar
        {...mergedAvatarProps}
        className={clsx('rounded-full', mergedAvatarProps.className)}
      />
      {children && <span className={textClassName}>{children}</span>}
    </Badge>
  );
};
