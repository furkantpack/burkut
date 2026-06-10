'use client';

import {
  RiArrowRightUpLongLine,
  RiLinkedinFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import Link from '@repo/registry/next-link-mock';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';

const socialLinksData = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/company/burkut-global-spc',
    icon: RiLinkedinFill,
  },
];

const footerLinksData = {
  services: [
    { id: 'service1', href: '#', text: 'Autonomous Aerial Systems' },
    { id: 'service2', href: '#', text: 'Tactical Surveillance' },
    { id: 'service3', href: '#', text: 'Precision Strike Systems' },
    { id: 'service4', href: '#', text: 'Counter-Drone Technologies' },
  ],
  solutions: [
    { id: 'solution1', href: '#', text: 'Defense' },
    { id: 'solution2', href: '#', text: 'Infrastructure' },
    { id: 'solution3', href: '#', text: 'Materials Science' },
  ],
  resources: [
    { id: 'resource1', href: '#', text: 'Mission' },
    { id: 'resource2', href: '#', text: 'Vision' },
    { id: 'resource3', href: '#', text: 'Partnerships' },
    { id: 'resource4', href: '/contact', text: 'Contact' },
  ],
};

const Logo = ({ className }: { className?: string }) => (
  <Image
    src='/brand/burkut-global-logo.png'
    alt='Burkut Global'
    width={96}
    height={78}
    className={className}
  />
);

export default function Footer01() {
  return (
    <footer className='mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pt-10 pb-5 md:px-7 lg:flex-row lg:gap-20 lg:pt-20 lg:pb-0'>
      <div className='flex w-full flex-1 flex-col lg:w-auto'>
        <div className='border-stroke-soft-200 mb-8 flex flex-col gap-6 border-b pb-8 lg:mb-0 lg:gap-8 lg:border-b-0 lg:pb-0'>
          <Link href='/' className='flex items-center gap-2'>
            <Logo className='h-16 w-auto object-contain' />
          </Link>
          <div className='flex flex-col gap-5'>
            <div className='text-label-sm text-text-soft-400'>
              Established 2009 - Burkut Global
            </div>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              asChild
              className='rounded-10 shadow-regular-xs w-fit cursor-pointer pl-3.5 focus:bg-transparent'
            >
              <Link href='/contact'>
                Contact Burkut
                <Button.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-text-sub-600/[0.64] group-hover:text-text-strong-950/[0.64] group-disabled:text-text-disabled-300 size-5 transition-all duration-300'
                />
              </Link>
            </Button.Root>
          </div>
          <div className='flex items-center gap-4'>
            {socialLinksData.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Burkut Global on LinkedIn'
                className='border-stroke-soft-200 group hover:border-text-strong-950/[0.64] flex size-8 items-center justify-center rounded-full border duration-300'
              >
                <social.icon className='text-text-soft-400 group-hover:text-text-strong-950/[0.64] size-5 transition-all duration-300' />
              </Link>
            ))}
          </div>
        </div>
        <div className='mt-4.5 hidden lg:flex'>
          <div className='text-[64px] leading-none font-normal tracking-normal text-text-strong-950/[0.08]'>
            BURKUT GLOBAL
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-20'>
        <div className='border-stroke-soft-200 mb-8 flex flex-col items-start gap-5 border-b pb-8 lg:mb-0 lg:border-b-0 lg:pb-0'>
          <div className='text-label-sm text-text-soft-400'>Core Solutions</div>
          {footerLinksData.services.map((link) => (
            <LinkButton.Root
              key={link.id}
              className='text-text-sub-600 text-label-sm h-auto cursor-pointer whitespace-break-spaces'
              asChild
            >
              <a href={link.href}>{link.text}</a>
            </LinkButton.Root>
          ))}
        </div>
        <div className='flex lg:gap-20'>
          <div className='border-stroke-soft-200 flex w-full flex-col items-start gap-5 border-r pr-10 lg:w-auto lg:border-r-0 lg:pr-0'>
            <div className='text-label-sm text-text-soft-400'>Industries</div>
            {footerLinksData.solutions.map((link) => (
              <LinkButton.Root
                key={link.id}
                className='text-text-sub-600 text-label-sm h-auto cursor-pointer whitespace-break-spaces'
                asChild
              >
                <a href={link.href}>{link.text}</a>
              </LinkButton.Root>
            ))}
          </div>
          <div className='flex w-full flex-col items-start gap-5 pl-10 lg:w-auto lg:pl-0'>
            <div className='text-label-sm text-text-soft-400'>Company</div>
            {footerLinksData.resources.map((link) => (
              <LinkButton.Root
                key={link.id}
                className='text-text-sub-600 text-label-sm h-auto cursor-pointer whitespace-break-spaces'
                asChild
              >
                <a href={link.href}>{link.text}</a>
              </LinkButton.Root>
            ))}
          </div>
        </div>
      </div>
      <div className='mx-auto mt-8 flex w-[calc(100%-48px)] lg:hidden'>
        <div className='w-full text-center text-title-h5 font-normal text-text-strong-950/[0.18]'>
          BURKUT GLOBAL
        </div>
      </div>
    </footer>
  );
}
