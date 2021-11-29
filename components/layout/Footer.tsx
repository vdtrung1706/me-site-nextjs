import Link from 'next/link';
import * as React from 'react';
import Logo from '../common/Logo';
import SocialLinks from '../common/SocialLinks';

const Footer = () => {
  return (
    <>
      <div className='flex flex-col items-center gap-4 pb-5 text-sm bg-light-nav dark:bg-black whitespace-nowrap'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100 10'
          preserveAspectRatio='none'
          className='w-full h-10 pointer-events-none fill-current text-black-800'
        >
          <polygon points='100 0, 0 8, 0 0' />
        </svg>

        <Link href={'/'} passHref>
          <a>
            <Logo />
          </a>
        </Link>

        <ul className='flex flex-row items-center font-semibold list'>
          <li>
            <Link href={'/projects'} passHref>
              <a className='px-2 py-1 list-link'>Projects</a>
            </Link>
          </li>

          <li>
            <Link href={'/gallery'} passHref>
              <a className='px-2 py-1 list-link'>Gallery</a>
            </Link>
          </li>
        </ul>

        <div className='w-10/12 hr'></div>

        <SocialLinks className='items-center gap-2 list' />

        <div>
          <h5 className='text-xs text-light-secondary dark:text-dark-secondary'>
            © TRUNG VU {new Date().getFullYear()}
          </h5>
        </div>
      </div>
    </>
  );
};

export default React.memo(Footer);
