import {
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from 'react';
import type { RemixiconComponentType } from '@remixicon/react';

import { cn } from '@/utils/cn';

type LinkButtonRootProps = ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean;
  variant?: 'gray';
};

export function Root({
  asChild,
  children,
  className,
  href,
  variant: _variant,
  ...props
}: LinkButtonRootProps) {
  const rootClassName = cn(
    'inline-flex items-center text-label-sm text-text-sub-600 transition-colors',
    className,
  );

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: cn(rootClassName, child.props.className),
    });
  }

  if (!href) {
    return (
      <span className={rootClassName} {...props}>
        {children}
      </span>
    );
  }

  return (
    <a
      className={rootClassName}
      href={href}
      {...props}
    >
      {children}
    </a>
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
