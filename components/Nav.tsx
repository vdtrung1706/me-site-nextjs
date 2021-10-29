import * as React from 'react';
import { useViewport } from '../hooks/useViewport';
import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';

const Nav = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { viewWidth } = useViewport();

  return (
    <nav className='py-1 border-b bg-light-base border-light-txt-sec border-opacity-20 dark:border-0 dark:bg-black md:py-2'>
      <div className='flex flex-col h-full mx-[2%] md:mx-[4%] md:flex-row md:justify-between md:items-center'>
        <PrimaryNav expanded={expanded} setExpaned={setExpanded} />
        {expanded || viewWidth >= 768 ? <SecondaryNav /> : null}
      </div>
    </nav>
  );
};

export default Nav;
