import { useContext } from 'react';

import { FormContext } from '../../molecules/Form/context';

/**
 * Hook to access form context.
 * Must be used within a Form context.
 *
 * @returns FormContextValue with form state and methods
 * @throws Error if used outside of Form context
 */
export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a Form context');
  }

  return context;
};

export default useFormContext;
