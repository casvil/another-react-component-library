declare module 'lucide-react/icons/*' {
  import type { LucideProps } from 'lucide-react';
  import { FC } from 'react';

  const Icon: FC<LucideProps>;

  export default Icon;
}

declare module 'lucide-icon-type' {
  import type { LucideProps } from 'lucide-react';
  import { FC } from 'react';

  export type LucideIcon = FC<LucideProps>;
}
