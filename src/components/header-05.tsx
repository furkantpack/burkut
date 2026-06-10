'use client';

import { useEffect, useRef, useState } from 'react';
import {
  RiArrowDownSLine,
  RiCloseFill,
  RiFlashlightFill,
  RiMenu3Fill,
  RiNotification3Line,
  RiSearchLine,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Button from '@/components/ui/button';

const nav: Array<{
  label: string;
  href?: string;
  isnew?: boolean;
  navMenu?: boolean;
}> = [
  { label: 'Home', href: '/' },
  { label: 'Mission', href: '/mission' },
  { label: 'Vision', href: '/vizion' },
  { label: 'Solutions', navMenu: true },
];

function NavDropdownMenu() {
  return (
    <div className='z-500 grid w-full min-w-0 grid-cols-1 bg-[#f6f8fb] lg:min-w-[820px] lg:grid-cols-[1.35fr_1.7fr_1fr] lg:border lg:border-stroke-soft-200 lg:p-3'>
      <div className='flex flex-col gap-4 border-stroke-soft-200 lg:border-r lg:px-5 lg:py-4'>
        <div className='text-text-soft-400 text-subheading-2xs bg-bg-weak-50 flex px-6 py-1.5 uppercase lg:hidden'>
          BURKUT GLOBAL
        </div>
        <div className='flex flex-row items-center gap-3 px-6 pt-5 lg:px-0 lg:pt-0'>
          <div className='border-stroke-soft-200 bg-bg-white-0 flex size-9 shrink-0 items-center justify-center rounded-full border'>
            <RiFlashlightFill className='text-text-sub-600 size-5' />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-text-strong-950 text-label-sm'>
              Burkut Global
            </div>
            <div className='text-text-sub-600 text-label-xs'>
              Integrated Engineering & Strategic Technologies
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3 px-6 pb-5 lg:px-0 lg:pb-0'>
          <div className='text-text-sub-600 text-label-sm leading-5'>
            Defense, infrastructure, and materials science capabilities under
            one strategic engineering group.
          </div>
          <div className='flex flex-wrap gap-2'>
            {['Defense', 'Infrastructure', 'Materials Science'].map((item) => (
              <span
                key={item}
                className='border-stroke-soft-200 bg-bg-white-0 text-text-sub-600 rounded-full border px-3 py-1 text-label-xs'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className='text-text-soft-400 text-label-xs hidden flex-1 items-end lg:flex'>
          Established 2009 - Burkut Global
        </div>
      </div>
      <div className='flex w-full flex-col items-start gap-4 border-stroke-soft-200 lg:border-r lg:px-5 lg:py-4'>
        <div className='text-text-soft-400 text-subheading-2xs lg:text-label-2xs bg-bg-weak-50 w-full px-6 py-1.5 uppercase lg:w-auto lg:bg-transparent lg:px-0 lg:py-0'>
          CORE SOLUTIONS
        </div>
        <div className='grid w-full grid-cols-1 gap-3 px-6 pb-5 lg:grid-cols-2 lg:px-0 lg:pb-0'>
          {[
            'Autonomous Aerial Systems',
            'Tactical Surveillance',
            'Precision Strike Systems',
            'Counter-Drone Technologies',
          ].map((item) => (
            <div
              key={item}
              className='border-stroke-soft-200 bg-bg-white-0 text-text-sub-600 rounded-[10px] border px-3 py-2 text-label-sm leading-5'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-start gap-4 lg:px-5 lg:py-4'>
        <div className='text-text-soft-400 text-subheading-2xs lg:text-label-2xs bg-bg-weak-50 w-full px-6 py-1.5 uppercase lg:w-auto lg:bg-transparent lg:px-0 lg:py-0'>
          GLOBAL PRESENCE
        </div>
        <div className='flex w-full flex-col items-start gap-3 px-6 pb-5 lg:px-0 lg:pb-0'>
          {['Oman', 'Türkiye'].map((item) => (
            <div
              key={item}
              className='border-stroke-soft-200 bg-bg-white-0 text-text-sub-600 w-full rounded-[10px] border px-3 py-2 text-label-sm'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Logo = ({ className }: { className?: string }) => (
  <Image
    src='/brand/burkut-global-logo.png'
    alt='Burkut Global'
    width={72}
    height={58}
    className={className}
    priority
  />
);

export default function Header05() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavMenu, setActiveNavMenu] = useState<string | null>(null);
  const navContentRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    if (navContentRef.current) {
      setNavHeight(navContentRef.current.scrollHeight);
    }
  }, [activeNavMenu]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNavMenu = (label: string) => {
    setActiveNavMenu(activeNavMenu === label ? null : label);
  };

  return (
    <header className='lg:rounded-20 border-stroke-soft-200 lg:shadow-complex relative z-400 flex h-16 w-full items-center justify-between gap-5 border-b bg-bg-white-0 px-6 py-4.5 pr-4.5 lg:mx-auto lg:mt-6 lg:w-fit lg:min-w-160 lg:border-none lg:px-5 lg:py-4'>
      <div className='flex flex-1 items-center gap-5'>
        <Link href='/' className='flex items-center'>
          <Logo className='h-10 w-auto object-contain' />
        </Link>

        <nav
          aria-label='Primary'
          className={`fixed top-16 left-0 flex h-[calc(100dvh-149px)] w-full flex-col items-center overflow-auto bg-bg-white-0 transition-all duration-300 lg:static lg:top-0 lg:h-auto lg:w-auto lg:flex-row lg:gap-1 lg:overflow-visible lg:bg-transparent ${isMenuOpen ? 'active visible opacity-100' : 'invisible opacity-0 lg:visible lg:opacity-100'}`}
          data-state={isMenuOpen ? 'open' : 'closed'}
        >
          {nav.map((item) => (
            <li
              key={item.label}
              className='border-stroke-soft-200 group w-full list-none border-b last:border-b-0 lg:w-auto lg:border-b-0'
            >
              {item.navMenu ? (
                <button
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      toggleNavMenu(item.label);
                    }
                  }}
                  className={`text-label-md lg:text-label-sm lg:rounded-10 lg:group-hover:bg-bg-weak-50 lg:group-hover:text-text-strong-950 flex h-16 w-full items-center gap-2 rounded-none px-6 transition-all duration-300 lg:pointer-events-none lg:h-8 lg:w-auto lg:px-3 ${activeNavMenu === item.label ? 'active text-text-strong-950 lg:text-text-sub-600 bg-transparent lg:bg-transparent' : 'text-text-sub-600 bg-transparent'}`}
                >
                  {item.label}
                  {item.isnew && (
                    <span className='tracking-spacing-tiny-4 bg-information-lighter text-primary-base rounded-[5px] px-1.25 py-0.5 text-[9px] leading-[11px] font-normal'>
                      New
                    </span>
                  )}
                  <RiArrowDownSLine
                    className={`lg:group-hover:text-text-sub-600 ml-auto size-5 transition-all duration-300 lg:ml-0 lg:group-hover:-rotate-180 ${activeNavMenu === item.label ? 'text-text-sub-600 lg:!text-text-soft-400 -rotate-180 lg:rotate-0' : 'text-text-soft-400'}`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href || '/'}
                  className='text-text-sub-600 text-label-md lg:text-label-sm lg:rounded-10 hover:bg-bg-weak-50 hover:text-text-strong-950 flex h-16 w-full items-center gap-2 rounded-none px-6 transition-all duration-300 lg:h-8 lg:w-auto lg:px-3'
                >
                  {item.label}
                  {item.isnew && (
                    <span className='tracking-spacing-tiny-4 bg-information-lighter text-primary-base rounded-[5px] px-1.25 py-0.5 text-[9px] leading-[11px] font-normal'>
                      New
                    </span>
                  )}
                </Link>
              )}
              {item.navMenu && (
                <div
                  ref={navContentRef}
                  style={{
                    height:
                      activeNavMenu === item.label ? `${navHeight}px` : '0px',
                  }}
                  className='lg:shadow-complex ease w-full overflow-hidden transition-all duration-500 lg:invisible lg:absolute lg:top-20.5 lg:left-1/2 lg:!h-auto lg:w-fit lg:-translate-x-1/2 lg:rounded-3xl lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100'
                >
                  <NavDropdownMenu />
                </div>
              )}
            </li>
          ))}
        </nav>
      </div>

      <div className="before:bg-stroke-soft-200 relative flex items-center gap-3 before:absolute before:top-2.5 before:-right-3 before:h-3 before:w-0.25 before:content-[''] lg:before:hidden">
        <Button.Root
          variant='neutral'
          mode='ghost'
          size='xsmall'
          className='rounded-10 cursor-pointer'
        >
          <Button.Icon as={RiSearchLine} className='text-text-sub-600 size-5' />
        </Button.Root>
        <Button.Root
          variant='neutral'
          mode='ghost'
          size='xsmall'
          className='rounded-10 cursor-pointer'
        >
          <Button.Icon
            as={RiNotification3Line}
            className='text-text-sub-600 size-5'
          />
        </Button.Root>
        <div
          className={`border-stroke-soft-200 fixed bottom-0 left-0 flex w-full items-center border-t bg-bg-white-0 px-6 py-5.5 transition-all duration-300 lg:relative lg:w-auto lg:border-t-0 lg:bg-transparent lg:px-0 lg:py-0 ${isMenuOpen ? 'active visible opacity-100' : 'invisible opacity-0 lg:visible lg:opacity-100'}`}
          data-state={isMenuOpen ? 'open' : 'closed'}
        >
          <Button.Root
            variant='primary'
            mode='filled'
            size='medium'
            asChild
            className='rounded-10 w-full lg:h-8 lg:w-auto'
          >
            <Link href='/contact'>Contact</Link>
          </Button.Root>
        </div>
      </div>
      <div className='flex lg:hidden'>
        <Button.Root
          variant='neutral'
          mode='ghost'
          size='xsmall'
          className={`rounded-10 ${isMenuOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
        >
          <Button.Icon as={RiMenu3Fill} className='text-text-sub-600 size-5' />
        </Button.Root>
        <Button.Root
          variant='neutral'
          mode='ghost'
          size='xsmall'
          className={`rounded-10 ${isMenuOpen ? '' : 'hidden'}`}
          onClick={toggleMenu}
        >
          <Button.Icon as={RiCloseFill} className='text-text-sub-600 size-5' />
        </Button.Root>
      </div>
    </header>
  );
}
