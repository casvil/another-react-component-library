import { useEffect, useState, forwardRef } from 'react';

import { TimeDisplay } from '../TimeDisplay/TimeDisplay';
import type { TimeDisplayProps } from '../TimeDisplay/TimeDisplay';

/**
 * Clock molecule component.
 * Renders a live-updating time string using TimeDisplay.
 * Updates every second and supports the same formatting and styling props than TimeDisplay.
 */
export const Clock = forwardRef<HTMLTimeElement, TimeDisplayProps>(
  ({ format, className, bordered = false }, ref) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const timerId = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timerId);
    }, []);

    return (
      <TimeDisplay
        ref={ref}
        time={time.toISOString()}
        format={format}
        className={className}
        bordered={bordered}
      />
    );
  },
);
