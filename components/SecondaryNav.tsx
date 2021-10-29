import Link from 'next/link';
import ToggleThemeMode from './buttons/ToggleThemeMode';

const SecondaryNav = () => {
  return (
    <div className='flex flex-col p-3 text-sm font-medium md:items-center md:p-0 text-light-txt-sec dark:text-dark-txt-sec 2xl:text-base whitespace-nowrap'>
      <ul className='flex flex-col gap-3 md:flex-row md:gap-2 md:items-center'>
        <li>
          <Link href={'/'} passHref>
            <a className='nav-link'>HOME</a>
          </Link>
        </li>

        <li>
          <Link href={'/projects'} passHref>
            <a className='nav-link'>PROJECTS</a>
          </Link>
        </li>

        <li>
          <Link href={'/gallery'} passHref>
            <a className='nav-link'>GALLERY</a>
          </Link>
        </li>

        <li>
          <Link href={'/signin'} passHref>
            <a className='inline-block w-full px-5 py-1 mt-2 -mx-2 text-center text-white cursor-pointer btn-primary md:m-0 md:max-w-max'>
              SIGN IN
            </a>
          </Link>
        </li>

        <li className='hidden h-full cursor-pointer md:block max-w-max'>
          <ToggleThemeMode />
        </li>
      </ul>
    </div>
  );
};

export default SecondaryNav;
