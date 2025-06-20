import { useId } from 'react';

/**
 * Returns a trimmed id.
 * Falls back to React's useId if none provided.
 */
export function useStableId(id?: string): string {
  const generatedId = useId();
  return id?.trim() || generatedId;
}
