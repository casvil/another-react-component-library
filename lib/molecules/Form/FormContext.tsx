import React from 'react';
import { FormContext } from './context';
import type { FormContextValue } from './types';

// Context provider component
export interface FormProviderProps {
  children: React.ReactNode;
  value: FormContextValue;
}

export const FormProvider: React.FC<FormProviderProps> = ({
  children,
  value,
}) => {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
