import { useEffect, useState, forwardRef } from 'react';
import { TimeDisplay } from '../../atoms/TimeDisplay/TimeDisplay';
import type { TimeDisplayProps } from '../../atoms/TimeDisplay/TimeDisplay';

export interface ClockProps extends Omit<TimeDisplayProps, 'time'> {
  /** If true, stops the internal clock updates */
  stop?: boolean;
}

/**
 * Clock molecule component.
 * Renders a live-updating time string using TimeDisplay.
 * If `stop` is true, it stops updating.
 */
export const Clock = forwardRef<HTMLTimeElement, ClockProps>(
  ({ format = 'HH:mm:ss', className, bordered = false, stop = false }, ref) => {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
      if (stop) return;

      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
    }, [stop]);

    return (
      <TimeDisplay
        ref={ref}
        time={time}
        format={format}
        className={className}
        bordered={bordered}
      />
    );
  },
);

Clock.displayName = 'Clock';
