import Link from 'next/link';
import ToggleThemeMode from './buttons/ToggleThemeMode';

const SecondaryNav = () => {
  return (
    <div className='flex flex-col p-3 text-base font-medium md:items-center md:p-0 text-lgt-txt-sec dark:text-drk-txt-sec 2xl:text-lg whitespace-nowrap'>
      <ul className='flex flex-col gap-3 md:flex-row md:gap-4 md:items-center'>
        <li className='cursor-pointer md:hidden max-w-max'>
          <Link href={'/'} passHref>
            HOME
          </Link>
        </li>

        <li className='cursor-pointer max-w-max'>
          <Link href={'/projects'} passHref>
            PROJECTS
          </Link>
        </li>

        <li className='cursor-pointer max-w-max'>
          <Link href={'/gallery'} passHref>
            BOOK GALLERY
          </Link>
        </li>

        <li className='cursor-pointer text-lgt-orange max-w-max'>
          <Link href={'/signin'} passHref>
            SIGN IN
          </Link>
        </li>

        <li className='hidden cursor-pointer md:block max-w-max'>
          <ToggleThemeMode />
        </li>
      </ul>
    </div>
  );
};

export default SecondaryNav;
