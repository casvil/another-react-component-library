import { createContext } from 'react';
import type { FormContextValue } from './types';

// Form context for sharing form state between components
export const FormContext = createContext<FormContextValue | null>(null);
