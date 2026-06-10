import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/cn';

type LabelRootProps = ComponentPropsWithoutRef<'label'>;

export function Root({ className, ...props }: LabelRootProps) {
  return <label className={cn('font-normal', className)} {...props} />;
}
