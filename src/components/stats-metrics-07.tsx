'use client';

import { Fragment } from 'react';
import { RiArrowRightUpLongLine, RiStairsFill } from '@remixicon/react';
import Link from '@repo/registry/next-link-mock';

import * as Badge from '@/components/ui/badge';
import * as Divider from '@/components/ui/divider';
const stats = [
  {
    value: '16+',
    label: (
      <>
        Years of engineering and <br className='hidden lg:block' />
        defense expertise.
      </>
    ),
    description:
      'Providing innovative solutions across strategic industries since 2009.',
  },
  {
    value: '4',
    label: (
      <>
        Countries of <br className='hidden lg:block' />
        operation.
      </>
    ),
    description:
      'Supporting projects and partnerships across multiple international markets.',
  },
  {
    value: '5+',
    label: (
      <>
        Strategic sectors <br className='hidden lg:block' />
        served.
      </>
    ),
    description:
      'Covering defense, metallurgy, infrastructure, water management, and energy systems.',
  },
  {
    value: '100+',
    label: (
      <>
        Mission-critical projects <br className='hidden lg:block' />
        delivered.
      </>
    ),
    description:
      'Executing complex engineering and defense programs with reliability and precision.',
  },
];

export default function StatsMetrics07() {
  return (
    <div className='bg-bg-white-0 pt-10 pb-6 lg:py-24 w-full'>
      <div className='mx-auto w-full max-w-7xl px-6 lg:px-7'>
        <div className='flex flex-col items-start gap-6 lg:items-center lg:gap-10'>
          <div className='flex flex-col items-start gap-4 lg:items-center'>
            <div className='flex flex-col items-start gap-3 lg:items-center'>
              <Badge.Root
                variant='stroke'
                className='text-label-sm text-text-sub-600 bg-bg-weak-50 h-7 w-fit !gap-1.5 rounded-[9px] pr-[10px] pl-2 normal-case ring-transparent'
              >
                <Badge.Icon
                  as={RiStairsFill}
                  className='text-primary-base mx-0 size-4'
                />
                Strategic engineering data
              </Badge.Root>
              <h2 className='text-title-h4 lg:text-title-h2 text-text-strong-950 font-normal lg:text-center'>
                Strategic Defense & Engineering Solutions
              </h2>
            </div>
            <p className='text-paragraph-md text-text-sub-600 lg:max-w-[528px] lg:text-center'>
              Empowering nations with advanced technologies.{' '}
              <span className='text-label-md text-text-sub-600'>
                Delivering mission-critical defense systems, infrastructure
                solutions, and advanced engineering technologies to enhance
                security, operational readiness, and industrial resilience.
              </span>
            </p>
          </div>

          <div className='flex w-full flex-col gap-6 lg:max-w-[808px] lg:gap-9'>
            {stats.map((stat) => (
              <Fragment key={stat.value}>
                <Divider.Root />
                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10'>
                  <div className='flex flex-col gap-2 lg:contents'>
                    <span className='text-title-h4 lg:text-title-h2 text-text-strong-950 w-[164px] font-normal lg:shrink-0'>
                      {stat.value}
                    </span>
                    <div className='bg-stroke-soft-200 hidden lg:block lg:w-px lg:self-stretch' />
                    <span className='text-label-sm text-text-soft-400 lg:flex-1'>
                      {stat.label}
                    </span>
                  </div>
                  <span className='text-label-md text-text-sub-600 lg:w-[288px] lg:shrink-0'>
                    {stat.description}
                  </span>
                </div>
              </Fragment>
            ))}

            <div className='bg-bg-weak-25 flex flex-col items-start gap-2 rounded-[10px] px-4 py-2.5 lg:flex-row lg:items-center'>
              <span className='text-label-sm text-text-sub-600 lg:flex-1'>
                Advance Security & Engineering Excellence Today
              </span>
              <Link
                href='/'
                className='group text-text-sub-600 hover:text-text-strong-950 flex items-center gap-[5px] transition-colors'
              >
                <span className='text-label-sm'>Explore Our Capabilities</span>
                <RiArrowRightUpLongLine className='size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
