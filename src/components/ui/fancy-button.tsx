import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/cn';

type FancyButtonRootProps = ComponentPropsWithoutRef<'button'> & {
  size?: 'medium';
  variant?: 'primary';
};

export function Root({
  className,
  size: _size,
  type = 'button',
  variant: _variant,
  ...props
}: FancyButtonRootProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex h-10 items-center justify-center bg-primary-base px-4 text-label-sm font-normal text-white transition-colors hover:bg-primary-dark',
        className,
      )}
      {...props}
    />
  );
}
