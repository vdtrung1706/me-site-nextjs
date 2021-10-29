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
    <div className='flex items-center justify-between text-lgt-txt-sec dark:text-drk-txt-sec'>
      <Link href={'/'} passHref>
        <Logo />
      </Link>

      <div className='flex items-center gap-3 md:hidden'>
        <ToggleThemeMode />
        <ToggleMenu expanded={expanded} setExpanded={setExpaned} />
      </div>
    </div>
  );
};

export default PrimaryNav;
