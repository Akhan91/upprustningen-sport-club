/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/nbb0MOIMOd1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/shadcn/separator';
import { SiFacebook as FacebookIcon } from '@icons-pack/react-simple-icons';
import { SiInstagram as InstagramIcon } from '@icons-pack/react-simple-icons';

export function Footer() {
  return (
    <footer className='bg-blue-500 py-6 w-full'>
      <div className='container mx-auto flex flex-col items-center gap-6'>
        <div className='flex items-center gap-3 justify-center'>
          <Image src='/img/club_logo.webp' alt={'logo'} width={40} height={40} priority />
          <span className='text-primary-foreground text-xl font-semibold'>Upprustningen Sports Club</span>
        </div>

        <Separator orientation='horizontal' decorative className='h-0.5' />

        <div className='w-full max-w-5xl flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-start'>
          <section className='flex flex-col items-center font-light md:text-lg md:items-start gap-2 md:flex-1'>
            <h4 className='text-primary-foreground font-semibold text-lg underline underline-offset-2'>
              Navigera
            </h4>
            <div id='inner' className='flex flex-col items-center gap-2 md:items-start'>
              <Link
                href='/'
                className='text-primary-foreground hover:text-gray-300 transition-colors'
                prefetch={false}
              >
                Hem
              </Link>
              <Link
                href='/om-oss'
                className='text-primary-foreground hover:text-gray-300 transition-colors'
                prefetch={false}
              >
                Om oss
              </Link>
              <Link
                href='/kontakta-oss'
                className='text-primary-foreground hover:text-gray-300 transition-colors'
                prefetch={false}
              >
                Kontakt
              </Link>
              <Link
                href='/schema'
                className='text-primary-foreground hover:text-gray-300 transition-colors'
                prefetch={false}
              >
                Schema
              </Link>
              <Link
                href='/Q&A'
                className='text-primary-foreground hover:text-gray-300 transition-colors'
                prefetch={false}
              >
                FAQ
              </Link>
            </div>
          </section>
          <section className='flex flex-col items-center font-normal md:items-start md:justify-start gap-2 md:flex-1'>
            <span className='text-primary-foreground font-semibold text-lg underline underline-offset-2'>
              Kontakt
            </span>
            <span
              className='text-primary-foreground font-light md:text-lg'
              aria-label='email address information'
            >
              info@upprustningen.com
            </span>
          </section>
        </div>

        <section
          id='social-media-icons'
          className='flex justify-center items-center gap-6 mt-4'
          aria-label='social media icons'
        >
          <Link
            href='#'
            aria-label='Facebook icon'
            className='text-primary-foreground transition-colors'
            prefetch={false}
          >
            <FacebookIcon size={28} />
          </Link>
          <Link
            href='https://www.instagram.com/upprustningensc?igsh=YzB4a21qYjB6MG41'
            aria-label='Instagram icon'
            className='text-primary-foreground transition-colors'
            prefetch={false}
          >
            <InstagramIcon size={28} />
          </Link>
        </section>

        <div className='flex justify-center mt-6 md:mt-0'>
          <p className='text-primary-foreground text-xs text-center'>
            &copy; 2024 Upprustningen Sports Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
