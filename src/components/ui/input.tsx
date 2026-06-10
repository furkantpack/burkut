import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { RemixiconComponentType } from '@remixicon/react';

import { cn } from '@/utils/cn';

type InputRootProps = ComponentPropsWithoutRef<'div'>;

export function Root({ className, ...props }: InputRootProps) {
  return (
    <div
      className={cn(
        'group flex items-center border border-stroke-soft-200 bg-bg-white-0 px-3 transition-colors focus-within:border-text-soft-400',
        className,
      )}
      {...props}
    />
  );
}

export function Wrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn('flex w-full items-center gap-2', className)}>{children}</div>;
}

type InputIconProps = {
  as: RemixiconComponentType;
  className?: string;
};

export function Icon({ as: Component, className }: InputIconProps) {
  return <Component className={cn('text-text-soft-400', className)} />;
}

type InputProps = ComponentPropsWithoutRef<'input'>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'min-w-0 flex-1 bg-transparent outline-none',
        className,
      )}
      {...props}
    />
  );
}
