import Link from 'next/link';
import * as React from 'react';
import ToggleMenu from './buttons/ToggleMenu';
import ToggleThemeMode from './buttons/ToggleThemeMode';
import Logo from './Logo';

type PrimaryNavProps = {
  expanded: boolean;
  setExpaned: React.Dispatch<React.SetStateAction<boolean>>;
};

const PrimaryNav = ({ expanded, setExpaned }: PrimaryNavProps) => {
  return (
    <div className='flex items-center justify-between text-light-txt-sec dark:text-dark-txt-sec'>
      <Link href={'/'} passHref>
        <div className='inline-flex items-center h-full text-transparent cursor-pointer bg-clip-text bg-gradient-to-br from-light-blue to-light-blue-lt'>
          <Logo />
          <span className='text-2xl font-semibold 2xl:text-3xl font-jost whitespace-nowrap'>
            TRUNG VU
          </span>
        </div>
      </Link>

      <div className='flex items-center gap-3 md:hidden'>
        <ToggleThemeMode />
        <ToggleMenu expanded={expanded} setExpanded={setExpaned} />
      </div>
    </div>
  );
};

export default React.memo(PrimaryNav);
