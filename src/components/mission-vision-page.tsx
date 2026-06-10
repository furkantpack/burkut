import Image from '@repo/registry/next-image-mock';

type MissionVisionPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: string[];
};

export default function MissionVisionPage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  sections,
}: MissionVisionPageProps) {
  return (
    <section className='bg-bg-white-0 w-full px-6 pt-16 pb-10 md:px-7 lg:pt-24 lg:pb-20'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center'>
        <div className='flex max-w-6xl flex-col items-center text-center'>
          <div className='font-mono text-[1.375rem] leading-7 font-normal text-primary-base uppercase tracking-normal'>
            {eyebrow}
          </div>
          <h1 className='mt-7 text-[2.75rem] leading-[1.1] font-normal text-text-strong-950 lg:text-[4rem] lg:leading-[1.08]'>
            {title}
          </h1>
          <p className='mt-8 max-w-4xl text-[1.125rem] leading-7 font-normal text-text-strong-950 lg:text-[1.25rem] lg:leading-8'>
            {intro}
          </p>
        </div>

        <div className='mt-14 w-full max-w-5xl overflow-hidden rounded-[28px] bg-bg-weak-50 lg:mt-20 lg:rounded-[32px]'>
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={760}
            priority
            className='h-[320px] w-full object-cover md:h-[520px] lg:h-[620px]'
          />
        </div>

        <div className='mt-12 grid w-full max-w-5xl gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-8'>
          {sections.map((section, index) => (
            <p
              key={index}
              className='text-paragraph-md leading-7 font-normal text-text-sub-600 lg:text-[1rem] lg:leading-8'
            >
              {section}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
