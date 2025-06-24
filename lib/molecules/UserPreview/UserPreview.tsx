import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { Avatar } from '../../atoms/Avatar/Avatar';
import { Username } from '../../atoms/Username/Username';
import { StatusIndicator } from '../../atoms/StatusIndicator/StatusIndicator';
import type { Size } from '../../@types/size';
import type { StatusType } from '../../atoms/StatusIndicator/StatusIndicator';

export interface UserPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  status?: StatusType;
  showStatus?: boolean;
  showStatusLabel?: boolean;
  avatarSrc?: string;
  avatarAlt?: string;
  size?: Size;
  layout?: 'horizontal' | 'vertical';
  usernameVariant?: 'default' | 'bold' | 'muted';
  truncateUsername?: boolean;
  maxUsernameLength?: number;
}

const layoutClasses = {
  horizontal: 'flex-row items-center',
  vertical: 'flex-col items-center text-center',
} as const;

const spacingClasses = {
  horizontal: {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  },
  vertical: {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3',
  },
} as const;

const statusConfig = {
  online: 'Online',
  offline: 'Offline',
  away: 'Away',
  busy: 'Busy',
} as const;

/**
 * UserPreview molecule component.
 * Combines Avatar, Username, and StatusIndicator to create a comprehensive user display.
 * Supports horizontal and vertical layouts with consistent sizing across all child components.
 */
export const UserPreview = forwardRef<HTMLDivElement, UserPreviewProps>(
  (
    {
      name,
      status = 'offline',
      showStatus = true,
      showStatusLabel = false,
      avatarSrc,
      avatarAlt,
      size = 'md',
      layout = 'horizontal',
      usernameVariant = 'default',
      truncateUsername = false,
      maxUsernameLength,
      className,
      ...props
    },
    ref,
  ) => {
    const containerClass = clsx(
      'flex relative',
      layoutClasses[layout],
      spacingClasses[layout][size],
      className,
    );

    const avatarWithStatus = (
      <div className="relative">
        <Avatar
          src={avatarSrc}
          alt={avatarAlt || name}
          name={name}
          size={size}
        />
        {showStatus && (
          <div
            className={clsx(
              'absolute',
              size === 'sm' ? '-bottom-0.5 -right-0.5' : '-bottom-1 -right-1',
            )}
          >
            <StatusIndicator
              status={status}
              size={size === 'lg' ? 'md' : 'sm'}
              showLabel={false}
            />
          </div>
        )}
      </div>
    );

    const usernameElement = (
      <Username
        size={size}
        variant={usernameVariant}
        truncate={truncateUsername}
        maxLength={maxUsernameLength}
      >
        {name}
      </Username>
    );

    const statusElement = showStatus && showStatusLabel && (
      <StatusIndicator status={status} size={size} showLabel={true} />
    );

    return (
      <div
        ref={ref}
        className={containerClass}
        role="group"
        aria-label={`User ${name}${showStatus ? `, ${statusConfig[status]}` : ''}`}
        {...props}
      >
        {avatarWithStatus}
        <div
          className={clsx(
            'flex',
            layout === 'vertical' ? 'flex-col items-center gap-1' : 'flex-col',
          )}
        >
          {usernameElement}
          {statusElement}
        </div>
      </div>
    );
  },
);

UserPreview.displayName = 'UserPreview';
