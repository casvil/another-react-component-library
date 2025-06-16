import { useEffect, useState, forwardRef } from "react";

import { TimeDisplay, TimeDisplayProps } from "../TimeDisplay/TimeDisplay";

export interface ClockProps extends Omit<TimeDisplayProps, "time"> {}

/**
 * Clock molecule component.
 * Renders a live-updating time string using TimeDisplay.
 * Updates every second and supports the same formatting and styling props than TimeDisplay.
 */
export const Clock = forwardRef<HTMLTimeElement, ClockProps>(
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
  }
);
