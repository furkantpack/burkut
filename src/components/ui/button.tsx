import {
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from 'react';
import type { RemixiconComponentType } from '@remixicon/react';

import { cn } from '@/utils/cn';

type ButtonRootProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  mode?: 'filled' | 'ghost' | 'stroke';
  size?: 'xxsmall' | 'xsmall' | 'medium';
  variant?: 'neutral' | 'primary';
};

export function Root({
  asChild,
  children,
  className,
  mode = 'filled',
  size = 'medium',
  variant = 'neutral',
  type = 'button',
  ...props
}: ButtonRootProps) {
  const baseClassName = cn(
    'inline-flex items-center justify-center font-normal transition-colors',
    variant === 'primary' && mode === 'filled' && 'bg-primary-base text-white hover:bg-primary-dark',
    variant === 'neutral' && mode === 'ghost' && 'text-text-sub-600 hover:bg-bg-weak-50',
    variant === 'neutral' && mode === 'stroke' && 'border border-stroke-soft-200 bg-bg-white-0',
    size === 'xxsmall' && 'h-7 px-2.5 text-label-sm',
    size === 'xsmall' && 'min-h-8 px-2.5',
    size === 'medium' && 'h-10 px-4 text-label-sm',
    className,
  );

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: cn(baseClassName, child.props.className),
    });
  }

  return (
    <button className={baseClassName} type={type} {...props}>
      {children}
    </button>
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
