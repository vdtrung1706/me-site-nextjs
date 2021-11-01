import * as React from 'react';
import Link from 'next/link';
import ToggleThemeMode from './buttons/ToggleThemeMode';

const SecondaryNav = () => {
  return (
    <div className='min-h-[80px] flex flex-col h-full gap-3 p-3 text-sm font-medium md:gap-0 md:flex-row md:items-center md:p-0 text-light-txt-sec dark:text-dark-txt-sec 2xl:text-base whitespace-nowrap'>
      <ul className='flex flex-col gap-2 md:gap-0 list md:flex-row md:items-center'>
        <li>
          <Link href={'/'} passHref>
            <a className='px-2 py-1 list-link'>Home</a>
          </Link>
        </li>

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

      <div className='flex items-center gap-3 my-1 md:ml-10 md:my-0'>
        <Link href={'/signin'} passHref>
          <a className='inline-block rounded-2xl w-full h-[30px] px-5 py-1 mt-2 -mx-2 text-center text-white cursor-pointer btn-primary md:m-0 md:max-w-max'>
            Sign in
          </a>
        </Link>

        <li className='hidden h-full cursor-pointer md:block max-w-max'>
          <ToggleThemeMode />
        </li>
      </div>
    </div>
  );
};

export default React.memo(SecondaryNav);
