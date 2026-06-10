'use client';

import { useEffect, useRef, useState } from 'react';
import {
  RiArrowLeftLongLine,
  RiArrowRightLongLine,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import { cn } from '@/utils/cn';
const teamData = [
  {
    id: 'member1',
    sector: 'Autonomous Systems',
    solution: 'Precision Strike Systems',
    label: 'Loitering Munitions',
    image: '/team-slides/team-slide-1-v2.png',
  },
  {
    id: 'member5',
    sector: 'Defense Technologies',
    solution: 'Mission Support & Battlefield Systems',
    label: 'Tactical Operations',
    image: '/team-slides/team-slide-2-v2.png',
  },
  {
    id: 'member6',
    sector: 'Autonomous Systems',
    solution: 'VTOL Surveillance Platforms',
    label: 'Border Security',
    image: '/team-slides/team-slide-3-v2.png',
  },
  {
    id: 'member7',
    sector: 'Defense Industry',
    solution: 'Ballistic Solutions & Technical Textiles',
    label: 'NIJ Protection',
    image: '/team-slides/team-slide-4-v2.png',
  },
  {
    id: 'member4',
    sector: 'Defense Industry',
    solution: 'Autonomous Aerial Systems',
    label: 'UAV Systems',
    image: '/team-slides/team-slide-5-v2.png',
  },
  {
    id: 'member2',
    sector: 'Defense Industry',
    solution: 'Counter-Drone & Protection Systems',
    label: 'Force Protection',
    image: '/team-slides/team-slide-6-v2.png',
  },
  {
    id: 'member3',
    sector: 'Electronic Warfare',
    solution: 'Tactical Surveillance & Intelligence',
    label: 'ISR Solutions',
    image: '/team-slides/team-slide-7-v2.png',
  },
];

const DESKTOP_SLOTS = [
  { offset: -3, size: 64, radius: 'rounded-2xl' },
  { offset: -2, size: 164, radius: 'rounded-[28px]' },
  { offset: -1, size: 264, radius: 'rounded-[36px]' },
  { offset: 0, size: 364, radius: 'rounded-[40px]' },
  { offset: 1, size: 264, radius: 'rounded-[36px]' },
  { offset: 2, size: 164, radius: 'rounded-[28px]' },
  { offset: 3, size: 64, radius: 'rounded-2xl' },
];

const MOBILE_SLOTS = [
  { offset: -3, size: 120, radius: 'rounded-[20px]' },
  { offset: -2, size: 120, radius: 'rounded-[20px]' },
  { offset: -1, size: 120, radius: 'rounded-[20px]' },
  { offset: 0, size: 220, radius: 'rounded-[24px]' },
  { offset: 1, size: 120, radius: 'rounded-[20px]' },
  { offset: 2, size: 120, radius: 'rounded-[20px]' },
  { offset: 3, size: 120, radius: 'rounded-[20px]' },
];

export default function Teams05() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevActiveIndexRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    setIsMobile(mq.matches);
    const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    prevActiveIndexRef.current = activeIndex;
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % teamData.length);
  };

  const activeMember = teamData[activeIndex];
  const slots = isMobile ? MOBILE_SLOTS : DESKTOP_SLOTS;
  const activeSize = isMobile ? 220 : 364;
  const gap = isMobile ? 16 : 24;

  return (
    <div className='bg-bg-white-0 py-10 lg:py-24 w-full'>
      <style>{`
        @keyframes teams-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className='flex flex-col items-center gap-8'>
        <div className='mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-6 md:px-7 lg:items-center'>
          <div className='flex flex-col items-start gap-3 lg:items-center'>
            <div className='flex flex-wrap gap-2'>
              <Badge.Root
                variant='lighter'
                className='bg-primary-base text-white text-label-sm h-7 w-fit rounded-[9px] px-2.5 normal-case'
              >
                16+ Years of Excellence
              </Badge.Root>
              <Badge.Root
                variant='lighter'
                className='bg-[#f6f0df] text-text-strong-950 text-label-sm h-7 w-fit rounded-[9px] px-2.5 normal-case'
              >
                Global Strategic Operations
              </Badge.Root>
            </div>
            <h3 className='text-title-h4 text-text-strong-950 lg:text-title-h3 font-normal lg:text-center'>
              Engineering Strategic Advantage
              <br />
              for Defense and Industry
            </h3>
          </div>
          <p className='text-paragraph-md text-text-sub-600 max-w-4xl lg:text-center'>
            BURKUT GLOBAL Holding is a multinational engineering and defense
            group delivering strategic solutions across defense technologies,
            infrastructure, advanced materials, and industrial systems. We
            support governments, industries, and strategic partners through
            innovation, reliability, and engineering excellence.
          </p>
        </div>

        <div className='flex w-full items-center gap-2 px-6 md:px-7 lg:w-auto lg:px-0'>
          <button
            onClick={handlePrev}
            className='group border-stroke-soft-200 bg-bg-white-0 hover:bg-bg-weak-50 flex flex-1 cursor-pointer items-center justify-center rounded-full border px-4 py-1 transition-colors hover:border-transparent disabled:cursor-not-allowed lg:flex-none'
          >
            <RiArrowLeftLongLine className='text-text-soft-400 group-hover:text-text-sub-600 size-5 transition-colors' />
          </button>
          <button
            onClick={handleNext}
            className='group border-stroke-soft-200 bg-bg-white-0 hover:bg-bg-weak-50 flex flex-1 cursor-pointer items-center justify-center rounded-full border px-4 py-1 transition-colors hover:border-transparent disabled:cursor-not-allowed lg:flex-none'
          >
            <RiArrowRightLongLine className='text-text-soft-400 group-hover:text-text-sub-600 size-5 transition-colors' />
          </button>
        </div>

        <div
          className='relative w-full overflow-hidden'
          style={{ height: activeSize }}
        >
          {teamData.map((member, index) => {
            const total = teamData.length;
            let offset = index - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            let previousOffset = index - prevActiveIndexRef.current;
            if (previousOffset > total / 2) previousOffset -= total;
            if (previousOffset < -total / 2) previousOffset += total;
            const isWrapping = Math.abs(offset - previousOffset) > 1;

            const slot = slots.find((item) => item.offset === offset);
            const isVisible = Math.abs(offset) <= 3;
            const size = slot?.size ?? (isMobile ? 120 : 64);
            const radius =
              slot?.radius ?? (isMobile ? 'rounded-[20px]' : 'rounded-2xl');
            const zIndex = isVisible ? 4 - Math.abs(offset) : 0;
            const centerSlotIndex = slots.findIndex(
              (item) => item.offset === 0,
            );

            let xOffset = 0;
            if (offset !== 0) {
              const direction = offset > 0 ? 1 : -1;
              const absoluteOffset = Math.abs(offset);
              xOffset = slots[centerSlotIndex].size / 2 + gap;
              for (let i = 1; i < absoluteOffset; i++) {
                const intermediateSlot = slots.find(
                  (item) => item.offset === i,
                );
                xOffset +=
                  (intermediateSlot?.size ?? (isMobile ? 120 : 64)) + gap;
              }
              xOffset += size / 2;
              xOffset *= direction;
            }

            return (
              <div
                key={member.id}
                className={cn(
                  radius,
                  'absolute top-1/2 left-1/2 shrink-0 overflow-hidden bg-gray-200',
                  !isWrapping && 'transition-all duration-500 ease-in-out',
                  !isVisible && 'pointer-events-none opacity-0',
                )}
                style={{
                  width: size,
                  height: size,
                  zIndex,
                  transform: `translate(calc(-50% + ${xOffset}px), -50%)`,
                }}
              >
                <Image
                  src={member.image}
                  alt={member.solution}
                  width={364}
                  height={364}
                  className='size-full object-cover'
                />
              </div>
            );
          })}
        </div>

        <div className='-mt-2 flex w-full max-w-3xl flex-col items-center gap-5 px-6 md:px-7'>
          <div
            key={activeMember.id}
            className='grid w-full grid-cols-1 overflow-hidden rounded-[14px] border border-stroke-soft-200 bg-bg-weak-50 md:grid-cols-3'
            style={{ animation: 'teams-fade-in 0.4s ease-out' }}
          >
            <div className='flex flex-col gap-1 border-b border-stroke-soft-200 px-4 py-3 md:border-r md:border-b-0'>
              <span className='text-label-xs text-text-soft-400'>Sector</span>
              <span className='text-label-md text-text-strong-950'>
                {activeMember.sector}
              </span>
            </div>
            <div className='flex flex-col gap-1 border-b border-stroke-soft-200 px-4 py-3 md:border-r md:border-b-0'>
              <span className='text-label-xs text-text-soft-400'>Solution</span>
              <span className='text-label-md text-text-strong-950'>
                {activeMember.solution}
              </span>
            </div>
            <div className='flex flex-col gap-1 px-4 py-3'>
              <span className='text-label-xs text-text-soft-400'>Label</span>
              <span className='text-label-md text-text-strong-950'>
                {activeMember.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
