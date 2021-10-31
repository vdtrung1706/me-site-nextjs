import * as React from 'react';
import { useViewport } from '../hooks/useViewport';
import PrimaryNav from './PrimaryNav';
import SecondaryNav from './SecondaryNav';

const Nav = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { viewWidth } = useViewport();

  return (
    <nav className='py-1 bg-[#f6f8f8] dark:bg-black md:py-2'>
      <div className='flex flex-col h-full mx-[2%] md:mx-[4%] md:flex-row md:justify-between md:items-center'>
        <PrimaryNav expanded={expanded} setExpaned={setExpanded} />
        {expanded || viewWidth >= 768 ? <SecondaryNav /> : null}
      </div>
    </nav>
  );
};

export default React.memo(Nav);
