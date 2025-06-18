import React, { useState, ReactNode } from 'react';
import clsx from 'clsx';

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  delay?: number;
  id: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

/**
 * Tooltip atom component.
 * Displays a tooltip with customizable content and position on hover or focus.
 * Adds ARIA attributes for accessibility and supports configurable show delay.
 */
export const Tooltip = ({
  children,
  content,
  className,
  delay = 150,
  id,
  position = 'top',
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  let timeout: NodeJS.Timeout;

  const showTooltip = () => {
    timeout = setTimeout(() => setVisible(true), delay);
  };

  const hideTooltip = () => {
    clearTimeout(timeout);
    setVisible(false);
  };

  const positionClasses = {
    top: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 transform -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 transform -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 transform -translate-y-1/2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {React.isValidElement(children) &&
        React.cloneElement(
          children as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
          {
            'aria-describedby': visible ? id : undefined,
          },
        )}
      {visible && (
        <div
          id={id}
          role="tooltip"
          className={clsx(
            'absolute z-10 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap shadow-lg',
            positionClasses[position],
            className,
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
