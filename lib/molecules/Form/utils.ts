import type { FormData } from './types';

// Utility function to get nested value from form data
export const getNestedValue = (obj: FormData, path: string): unknown => {
  return path.split('.').reduce((current: unknown, key: string) => {
    return current &&
      typeof current === 'object' &&
      current !== null &&
      key in current
      ? (current as Record<string, unknown>)[key]
      : undefined;
  }, obj);
};

// Utility function to set nested value in form data
export const setNestedValue = (
  obj: FormData,
  path: string,
  value: unknown,
): FormData => {
  const keys = path.split('.');
  const result = { ...obj };
  let current: Record<string, unknown> = result;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (
      !(key in current) ||
      typeof current[key] !== 'object' ||
      current[key] === null
    ) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }

  current[keys[keys.length - 1]] = value;
  return result;
};
