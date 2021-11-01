import * as React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <>
      <div className='flex flex-col items-center gap-4 pb-5 text-sm bg-light-gray dark:bg-dark-base text-light-txt-sec dark:text-dark-txt-sec 2xl:text-base whitespace-nowrap'>
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

        <ul className='flex flex-row items-center font-medium list'>
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

        <div className='w-10/12 h-[2px] bg-black-800 bg-opacity-50'></div>

        <div>
          <h5 className='text-xs'>© TRUNG VU {new Date().getFullYear()}</h5>
        </div>

        <SocialLinks className='items-center gap-2 list' />
      </div>
    </>
  );
};

export default React.memo(Footer);
