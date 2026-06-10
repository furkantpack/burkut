import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/cn';

type TextareaRootProps = ComponentPropsWithoutRef<'textarea'> & {
  simple?: boolean;
};

export function Root({ className, simple: _simple, ...props }: TextareaRootProps) {
  return (
    <textarea
      className={cn(
        'w-full resize-none border border-stroke-soft-200 bg-bg-white-0 outline-none transition-colors focus:border-text-soft-400',
        className,
      )}
      {...props}
    />
  );
}
