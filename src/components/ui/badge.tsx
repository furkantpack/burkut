import type { ComponentPropsWithoutRef } from 'react';
import type { RemixiconComponentType } from '@remixicon/react';

import { cn } from '@/utils/cn';

type BadgeRootProps = ComponentPropsWithoutRef<'div'> & {
  variant?: 'filled' | 'lighter' | 'stroke';
};

export function Root({ className, variant: _variant, ...props }: BadgeRootProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap font-normal',
        className,
      )}
      {...props}
    />
  );
}

type IconProps = {
  as: RemixiconComponentType;
  className?: string;
  color?: string;
  size?: number | string;
};

export function Icon({
  as: Component,
  className,
  ...props
}: IconProps) {
  return <Component className={className} {...props} />;
}
