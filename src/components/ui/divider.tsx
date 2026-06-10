import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/cn';

export function Root({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('h-px w-full bg-stroke-soft-200', className)}
      role='separator'
      {...props}
    />
  );
}
