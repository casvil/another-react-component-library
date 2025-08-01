import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { Avatar } from '../../atoms/Avatar/Avatar';
import { Username } from '../../atoms/Username/Username';
import { StatusIndicator } from '../../atoms/StatusIndicator/StatusIndicator';
import type { Size } from '../../@types/classes';
import { userPreviewSizeClasses } from '../../@types/classes';
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
      userPreviewSizeClasses.layout[layout],
      userPreviewSizeClasses.spacing[layout][size],
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
              userPreviewSizeClasses.statusPosition[size],
            )}
          >
            <StatusIndicator
              status={status}
              size={userPreviewSizeClasses.statusIndicatorSizes[size]}
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
        <div className={clsx('flex', userPreviewSizeClasses.innerGap[layout])}>
          {usernameElement}
          {statusElement}
        </div>
      </div>
    );
  },
);

UserPreview.displayName = 'UserPreview';
