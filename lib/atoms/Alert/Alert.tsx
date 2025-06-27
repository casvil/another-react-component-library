import React from 'react';
import clsx from 'clsx';

import { alertSizeClasses, Intent } from '../../@types/classes';
import InfoIcon from 'lucide-react/icons/info';
import CheckCircleIcon from 'lucide-react/icons/check-circle';
import AlertTriangleIcon from 'lucide-react/icons/alert-triangle';
import XCircleIcon from 'lucide-react/icons/x-circle';
import XIcon from 'lucide-react/icons/x';

export type AlertSize = 'sm' | 'md' | 'lg';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intent?: Intent;
  size?: AlertSize;
  dismissible?: boolean;
  onDismiss?: () => void;
  showIcon?: boolean;
  'aria-label'?: string;
  'aria-live'?: 'polite' | 'assertive' | 'off';
}

const INTENT_ICONS = {
  info: InfoIcon,
  success: CheckCircleIcon,
  warning: AlertTriangleIcon,
  error: XCircleIcon,
} as const;

export const Alert: React.FC<AlertProps> = ({
  children,
  intent = 'info',
  size = 'md',
  dismissible = false,
  onDismiss,
  showIcon = true,
  className,
  'aria-label': ariaLabel,
  'aria-live': ariaLive = intent === 'error' ? 'assertive' : 'polite',
  ...props
}) => {
  const IconComponent = INTENT_ICONS[intent];

  const alertClasses = clsx(
    'border flex items-start gap-3',
    alertSizeClasses.padding[size],
    alertSizeClasses.borderRadius[size],
    alertSizeClasses.variant[intent],
    className,
  );

  const iconClasses = clsx(
    'flex-shrink-0 mt-0.5',
    alertSizeClasses.icon[size],
    alertSizeClasses.iconVariant[intent],
  );

  const contentClasses = clsx('flex-1', alertSizeClasses.text[size]);

  const dismissButtonClasses = clsx(
    'flex-shrink-0 -mt-1 -mr-1 p-1 rounded transition-colors cursor-pointer',
    alertSizeClasses.icon[size],
    alertSizeClasses.dismissHover[intent],
  );

  return (
    <div
      role="alert"
      aria-label={ariaLabel}
      aria-live={ariaLive}
      className={alertClasses}
      {...props}
    >
      {showIcon && <IconComponent className={iconClasses} aria-hidden="true" />}

      <div className={contentClasses}>{children}</div>

      {dismissible && onDismiss && (
        <button
          type="button"
          className={dismissButtonClasses}
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <XIcon className="w-full h-full" />
        </button>
      )}
    </div>
  );
};

export default Alert;
