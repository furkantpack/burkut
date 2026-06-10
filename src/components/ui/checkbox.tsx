import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/cn';

type CheckboxRootProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

export function Root({ className, ...props }: CheckboxRootProps) {
  return (
    <input
      type='checkbox'
      className={cn('accent-primary-base', className)}
      {...props}
    />
  );
}
