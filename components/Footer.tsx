import * as React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-4 text-sm border-t border-gray-400 dark:border-0 border-opacity-30 text-light-txt-sec dark:text-dark-txt-sec 2xl:text-base whitespace-nowrap'>
      <Link href={'/'} passHref>
        <Logo />
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

      <div className='w-10/12 h-[2px] bg-gray-400 bg-opacity-30'></div>

      <div>
        <span className='text-xs'>© TRUNG VU {new Date().getFullYear()}</span>
      </div>

      <ul className='items-center gap-2 list'>
        <li>
          <a
            href='https://www.facebook.com/trunpyonvu/'
            target={'_blank'}
            rel='noreferrer'
            className='flex items-center p-1 cursor-pointer list-link'
          >
            <FacebookIcon />
          </a>
        </li>

        <li>
          <a
            href='https://github.com/vdtrung1706'
            target={'_blank'}
            rel='noreferrer'
            className='flex items-center p-1 cursor-pointer list-link'
          >
            <GitHubIcon />
          </a>
        </li>

        <li>
          <a
            href='https://www.instagram.com/trunpyon/'
            target={'_blank'}
            rel='noreferrer'
            className='flex items-center p-1 cursor-pointer list-link'
          >
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Footer);
