import { forwardRef } from 'react';
import clsx from 'clsx';
import { themeClasses } from '../../theme/utils';

export interface TimeDisplayProps {
  time: Date | string | number;
  format?: string;
  className?: string;
  bordered?: boolean;
}

/**
 * TimeDisplay atom component.
 * Renders a time string formatted as HH:mm:ss by default.
 * Accepts a Date, string, or timestamp as time input.
 */
export const TimeDisplay = forwardRef<HTMLTimeElement, TimeDisplayProps>(
  ({ bordered = false, className, format = 'HH:mm:ss', time }, ref) => {
    // Convert input time to Date
    const date =
      typeof time === 'string' || typeof time === 'number'
        ? new Date(time)
        : time;

    // Pad helper
    const pad = (n: number) => n.toString().padStart(2, '0');

    // Basic formatter supporting only HH, mm, ss tokens
    const formatted = format
      .replace('HH', pad(date.getHours()))
      .replace('mm', pad(date.getMinutes()))
      .replace('ss', pad(date.getSeconds()));

    return (
      <time
        ref={ref}
        aria-label={`Time is ${formatted}`}
        dateTime={date.toISOString()}
        className={clsx(
          'inline-block font-mono',
          bordered && 'border rounded-md px-2 py-1',
          bordered && themeClasses.border.primary,
          className,
        )}
      >
        {formatted}
      </time>
    );
  },
);

TimeDisplay.displayName = 'TimeDisplay';
