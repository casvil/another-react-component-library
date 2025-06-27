import React from 'react';
import clsx from 'clsx';
import { Badge, BadgeProps } from '../../atoms/Badge/Badge';
import { Avatar, AvatarProps } from '../../atoms/Avatar/Avatar';
import type { Size } from '../../@types/classes';

export interface BadgeAvatarProps {
  avatarProps?: Omit<AvatarProps, 'size'>;
  badgeProps?: Omit<BadgeProps, 'children' | 'aria-label' | 'size'>;
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
  size?: Size;
}

/**
 * BadgeAvatar molecule.
 * Puts Avatar inside the Badge, alongside optional children content (text or elements).
 */
export const BadgeAvatar: React.FC<BadgeAvatarProps> = ({
  avatarProps = {},
  badgeProps = {},
  children,
  className,
  textClassName,
  size = 'md',
}) => {
  // Merge avatarProps with size
  const mergedAvatarProps = {
    size,
    ...avatarProps,
  };

  // Merge badgeProps with size
  const mergedBadgeProps = {
    size,
    ...badgeProps,
  };

  return (
    <Badge
      {...mergedBadgeProps}
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
