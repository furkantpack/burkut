import {
  Children,
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from 'react';
import type { RemixiconComponentType } from '@remixicon/react';

import { cn } from '@/utils/cn';

let selectCounter = 0;

export function Root({ children }: { children: ReactNode }) {
  selectCounter += 1;
  const id = `select-${selectCounter}`;
  return <div data-select-id={id}>{children}</div>;
}

type TriggerProps = ComponentPropsWithoutRef<'div'>;

export function Trigger({ className, children, ...props }: TriggerProps) {
  return (
    <div
      className={cn(
        'relative flex items-center gap-2 border border-stroke-soft-200 bg-bg-white-0 px-3',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type TriggerIconProps = {
  as: RemixiconComponentType;
  className?: string;
};

export function TriggerIcon({ as: Component, className }: TriggerIconProps) {
  return <Component className={cn('text-text-soft-400', className)} />;
}

export function Value({ placeholder }: { placeholder?: string }) {
  return (
    <span className='pointer-events-none text-text-soft-400 text-label-sm'>
      {placeholder}
    </span>
  );
}

export function Content({ children }: { children: ReactNode }) {
  const options = Children.toArray(children).filter(isValidElement);

  return (
    <select
      aria-label='Topic'
      defaultValue=''
      className='absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent pl-10 pr-3 text-label-sm outline-none'
    >
      <option value='' disabled>
        Choose a topic...
      </option>
      {options.map((option, index) =>
        cloneElement(option as ReactElement<ComponentPropsWithoutRef<'option'>>, {
          key: option.key ?? index,
        }),
      )}
    </select>
  );
}

type ItemProps = ComponentPropsWithoutRef<'option'> & {
  value: string;
};

export function Item({ children, ...props }: ItemProps) {
  return <option {...props}>{children}</option>;
}
